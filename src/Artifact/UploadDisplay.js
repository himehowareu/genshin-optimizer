import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, ProgressBar, Row } from 'react-bootstrap';
import { createWorker } from 'tesseract.js';
import { ArtifactMainStatsData, ArtifactData, ArtifactSlotsData } from '../Data/ArtifactData';
import scan_art_main from "../imgs/scan_art_main.png";
import Snippet from "../imgs/snippet.png";
import Stat from '../Stat';
import Artifact from './Artifact';
import ReactGA from 'react-ga';
import { clamp } from '../Util/Util';

const starColor = { r: 255, g: 204, b: 50 } //#FFCC32

function UploadDisplay(props) {
  const [fileName, setFileName] = useState("Click here to Upload Artifact Screenshot File");
  const [image, setImage] = useState('');

  const [scanning, setScanning] = useState(false)
  const [otherProgress, setOtherProgress] = useState(0);
  const [otherProgVariant, setOtherProgVariant] = useState("")
  const [substatProgress, setSubstatProgress] = useState(0);
  const [substatProgVariant, setSubstatProgVariant] = useState("")
  const [artSetProgress, setArtSetProgress] = useState(0);
  const [artSetProgVariant, setArtSetProgVariant] = useState("")
  const [mainStatProgress, setMainStatProgress] = useState(0);
  const [mainStatProgVariant, setMainStatProgVariant] = useState("")

  const [modalShow, setModalShow] = useState(false)

  const reset = () => {
    setFileName("Click here to Upload Artifact Screenshot File")
    setImage("")
    setModalShow(false)
    setScanning(false)

    setOtherProgress(0);
    setOtherProgVariant("")
    setSubstatProgress(0);
    setSubstatProgVariant("")
    setArtSetProgress(0);
    setArtSetProgVariant("")
    setMainStatProgress(0);
    setMainStatProgVariant("")
  }

  const ocrImage = async (image, sProgress, sProgvariant) => {
    let tworker = createWorker({
      logger: m => {
        m.status === "loading tesseract core" && sProgvariant("danger");
        m.status.includes("loading language traineddata") && sProgvariant("warning");
        m.status.includes("initializing api") && sProgvariant("info");
        m.status === "recognizing text" && sProgvariant("success");
        sProgress(m.progress);
      },
      errorHandler: err => console.error(err)
    });
    await tworker.load();
    await tworker.loadLanguage('eng');
    await tworker.initialize('eng');
    let rec = await tworker.recognize(image);
    await tworker.terminate();
    return rec
  }

  const uploadedFile = async (file) => {

    if (!file) return
    setScanning(true)
    setFileName(file.name)
    const urlFile = await fileToURL(file)

    setImage(urlFile)
    const imageDataObj = await urlToImageData(urlFile)

    let numStars = clamp(starScanning(imageDataObj.data, imageDataObj.width, imageDataObj.height, 5), 3, 5)
    let awaits = [
      // other is for slotkey and mainStatValue and level
      ocrImage(imageDataToURL(processImageWithBandPassFilter(imageDataObj, { r: 140, g: 140, b: 140 }, { r: 255, g: 255, b: 255 }, { region: "top", mode: "bw" })), setOtherProgress, setOtherProgVariant),
      // substats
      ocrImage(imageDataToURL(processImageWithBandPassFilter(imageDataObj, { r: 65, g: 75, b: 90 }, { r: 160, g: 160, b: 160 }, { region: "bot" })), setSubstatProgress, setSubstatProgVariant),
      // artifact set
      ocrImage(imageDataToURL(processImageWithBandPassFilter(imageDataObj, { r: 90, g: 160, b: 80 }, { r: 200, g: 255, b: 200 }, { region: "bot", mode: "bw" })), setArtSetProgress, setArtSetProgVariant),
      // main stat
      ocrImage(imageDataToURL(processImageWithBandPassFilter(imageDataObj, { r: 120, g: 120, b: 120 }, { r: 215, g: 200, b: 220 }, { region: "top", mode: "bw" })), setMainStatProgress, setMainStatProgVariant)
    ]

    let [whiteparsed, substatOCRText, setOCRText, mainStatOCRText] = await Promise.all(awaits)

    let setKey = parseSetKey(setOCRText)
    let slotKey = parseSlotKey(whiteparsed)
    let substats = parseSubstat(substatOCRText)
    let level = NaN//looks like the level isnt consistently parsed. 
    let mainStatKey = parseMainStatKey(mainStatOCRText)
    let { mainStatValue, unit = "" } = parseMainStatvalue(whiteparsed)
    //the main stat value is used to distinguish main stats between % and flat
    if (unit === "%" && (mainStatKey === "hp" || mainStatKey === "def" || mainStatKey === "atk"))
      mainStatKey += "_"

    if (setKey && numStars)
      if (!Artifact.getRarityArr(setKey).includes(numStars))
        numStars = 0;

    //if main stat isnt parsed, then we try to guess it
    if (slotKey && !mainStatKey) {
      let stats = ArtifactSlotsData[slotKey].stats
      if (stats.length === 1) mainStatKey = stats[0]
      else {
        stats = stats.filter(stat => {
          if (mainStatValue && unit !== Stat.getStatUnit(stat)) return false
          if (substats && substats.some(substat => substat.key === stat)) return false
          if (mainStatValue && numStars && level && Artifact.getMainStatValue(stat, numStars, level) !== mainStatValue) return false
          return true
        });
        if (stats.length > 0) mainStatKey = stats[0]
      }
    }
    let guessLevel = (nStars, mainSKey, mainSVal) => {
      //if level isn't parsed, then we try to guess it
      let valArr = ArtifactMainStatsData?.[nStars]?.[mainSKey.includes("ele_dmg_bonus") ? "ele_dmg_bonus" : mainSKey]
      if (valArr) {
        let isFloat = Stat.getStatUnit(mainSKey) === "%"
        let testLevel = valArr.findIndex(val => isFloat ? (Math.abs(mainSVal - val) < 0.1) : (mainSVal === val))
        if (testLevel !== -1) {
          level = testLevel
          return true
        }
      }
      return false
    }
    //guess level when we have all the stats
    if (isNaN(level) && numStars && mainStatKey && mainStatValue)
      guessLevel(numStars, mainStatKey, mainStatValue)

    //try to guess the level when we only have mainStatKey and mainStatValue
    if (isNaN(level) && mainStatKey && mainStatValue) {
      let stars = setKey ? Artifact.getRarityArr(setKey) : Object.keys(ArtifactMainStatsData).reverse()//reverse so we check 5* first
      for (const nStar of stars)
        if (guessLevel(nStar, mainStatKey, mainStatValue)) {
          if (!setKey || Artifact.getRarityArr(setKey).includes(nStar)) {
            numStars = nStar
            break;
          }
        }
    }

    //check level validity against numStars
    if (numStars && !isNaN(level))
      if (level > numStars * 4)
        level = NaN

    //check if the final star values are valid
    numStars = clamp(numStars, 3, 5)

    //if the level is not parsed at all after all the prevous steps, default it to the highest level of the star value
    if (isNaN(level)) level = numStars * 4

    let state = {}
    if (!isNaN(level)) state.level = level
    if (setKey) state.setKey = setKey
    if (slotKey) state.slotKey = slotKey
    if (substats) state.substats = substats
    if (numStars) state.numStars = numStars
    if (mainStatKey) state.mainStatKey = mainStatKey
    props.setState?.(state)
  }

  let explainationModal =
    (<Modal show={modalShow} onHide={() => setModalShow(false)} size="xl" variant="success" dialogAs={Container} className="pt-3 pb-3">
      <Card bg="darkcontent" text="lightfont" >
        <Card.Header>
          <Card.Title>
            <Row>
              <Col><span>How do Upload Screenshots for parsing</span></Col>
              <Col xs="auto">
                <Button variant="danger" onClick={() => setModalShow(false)} >
                  <FontAwesomeIcon icon={faTimes} /></Button>
              </Col>
            </Row>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={8} md={4}>
              <img alt="snippet of the screen to take" src={Snippet} className="w-100 h-auto" />
            </Col>
            <Col xs={12} md={8}>

              <p>Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer.</p>
              <h5>What to include in the screenshot.</h5>
              <p>
                In Genshin Impact, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer.
                To Take a screenshot, in Windows, the shortcut is <strong>Shift + WindowsKey + S</strong>.
                Once you selected the region, the image is automatically included in your clipboard.
              </p></Col>
          </Row>

          <Row>
            <Col>
              <h5>Adding Screenshot to Genshin Optimizer</h5>
              <p>
                At this point, you should have the artifact snippet either saved to your harddrive, or in your clipboard.
                You can click on the box next to "Browse" to browse the file in your harddrive, or even easier, just press <strong>Ctrl + V</strong> to paste from your clipboard.
                You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the <b>Artifact Editor</b>.
              </p>
            </Col>
            <Col xs={12}>
              <h5>Finishing the Artifact</h5>
              <p>
                Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values!
                Once the artifact has been filled, Click on <strong>Add Artifact</strong> to finish editing the artifact.
              </p>
              <img alt="main screen after importing stats" src={scan_art_main} className="w-75 h-auto" />
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => setModalShow(false)}>
            <span>Close</span>
          </Button>
        </Card.Footer>
      </Card>
    </Modal>)
  useEffect(() => {
    let pasteFunc = e =>
      uploadedFile(e.clipboardData.files[0])
    window.addEventListener('paste', pasteFunc);
    props.reset(reset);
    return () =>
      window.removeEventListener('paste', pasteFunc)
  })
  let img = image ? <img src={image} className="w-100 h-auto" alt="Screenshot to parse for artifact values" /> : <span>Please Select an Image</span>
  let artSetProgPercent = (artSetProgress * 100).toFixed(1)
  let mainstatProgPercent = (mainStatProgress * 100).toFixed(1)
  let substatProgPercent = (substatProgress * 100).toFixed(1)
  let otherProgPercent = (otherProgress * 100).toFixed(1)
  return (<Row>
    {explainationModal}
    <Col>
      <Row className="mb-1">
        <Col>
          <Row className="mb-1">
            <Col>
              <h5>Parse Substats by Uploading Image</h5>
            </Col>
            <Col xs="auto"><Button variant="info" onClick={() => {
              setModalShow(true)
              ReactGA.modalview('/artifact/how-to-upload')
            }}>Show me How!</Button></Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-1">
        <Col xs={8} lg={4}>
          {img}
        </Col>
        {scanning ? <Col xs={12} lg={8}>
          <h6>{`Scan${artSetProgPercent < 100 ? "ning" : "ned"} Artifact Set`}</h6>
          <ProgressBar variant={artSetProgVariant} now={artSetProgPercent} label={`${artSetProgPercent}%`} className="mb-3" />
          <h6>{`Scan${mainstatProgPercent < 100 ? "ning" : "ned"} Artifact Main Stat`}</h6>
          <ProgressBar variant={mainStatProgVariant} now={mainstatProgPercent} label={`${mainstatProgPercent}%`} className="mb-3" />
          <h6>{`Scan${substatProgPercent < 100 ? "ning" : "ned"} Artifact Substat`}</h6>
          <ProgressBar variant={substatProgVariant} now={substatProgPercent} label={`${substatProgPercent}%`} className="mb-3" />
          <h6>{`Scan${otherProgPercent < 100 ? "ning" : "ned"} Other`}</h6>
          <ProgressBar variant={otherProgVariant} now={otherProgPercent} label={`${otherProgPercent}%`} className="mb-3" />
        </Col> : null}
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Group as={Col}>
            <Form.File
              type="file"
              className="custom-file-label"
              id="inputGroupFile01"
              label={fileName}
              onChange={(e) => {
                let file = e.target.files[0]
                uploadedFile(file)
              }}
              custom
            />
          </Form.Group>
        </Col>
      </Row>
    </Col>
  </Row>)
}
export default UploadDisplay;
let reader = new FileReader()
function fileToURL(file) {
  return new Promise(resolve => {
    // let reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    }
    reader.readAsDataURL(file)
  })
}
function urlToImageData(urlFile) {
  return new Promise(resolve => {
    let img = new Image();
    img.onload = () =>
      resolve(getImageData(img))
    img.src = urlFile
  })
}

function getImageData(image) {
  const tempCanvas = document.createElement('canvas'),
    tempCtx = tempCanvas.getContext('2d');
  tempCanvas.width = image.width;
  tempCanvas.height = image.height;
  tempCtx.drawImage(image, 0, 0, image.width, image.height);
  const imageDataObj = tempCtx.getImageData(0, 0, image.width, image.height);
  return imageDataObj;
}

function imageDataToURL(imageDataObj) {
  // create off-screen canvas element
  let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');

  canvas.width = imageDataObj.width;
  canvas.height = imageDataObj.height;

  // create imageData object
  let idata = ctx.createImageData(imageDataObj.width, imageDataObj.height);

  // set our buffer as source
  idata.data.set(imageDataObj.data);

  // update canvas with new data
  ctx.putImageData(idata, 0, 0);

  let dataUri = canvas.toDataURL(); // produces a PNG file

  return dataUri
}

function starScanning(pixels, width, height, defVal = 0) {
  let d = pixels;
  let lastRowNum = 0;
  let rowsWithNumber = 0;
  for (let y = 0; y < height; y++) {
    let star = 0;
    let onStar = false;
    for (let x = 0; x < width; x++) {
      let i = (y * width + x) * 4
      let r = d[i];
      let g = d[i + 1];
      let b = d[i + 2];
      if (colorCloseEnough({ r, g, b }, starColor)) {
        if (!onStar) {
          onStar = true
          star++
        }
      } else {
        onStar = false
      }
    }
    if (lastRowNum !== star) {
      lastRowNum = star
      rowsWithNumber = 1;
    } else if (lastRowNum) {
      rowsWithNumber++
      if (rowsWithNumber >= 10) return lastRowNum
    }
  }
  return defVal
}
// function processImageWithFilter(pixelData, color, region, threshold = 5) {
//   let d = Uint8ClampedArray.from(pixelData.data)
//   let halfInd = Math.floor(pixelData.width * (pixelData.height / 2) * 4)
//   for (let i = 0; i < d.length; i += 4) {
//     let outputWhite = true;
//     let r = d[i];
//     let g = d[i + 1];
//     let b = d[i + 2];
//     let pixelColor = { r, g, b }
//     if (((region === "top" && i < halfInd) || (region === "bot" && i > halfInd) || !region) && colorCloseEnough(pixelColor, color, threshold))
//       outputWhite = false
//     d[i] = d[i + 1] = d[i + 2] = outputWhite ? 255 : 0
//   }
//   return new ImageData(d, pixelData.width, pixelData.height)
// }
function processImageWithBandPassFilter(pixelData, color1, color2, options) {
  //region - "top","bot","all" default all
  //mode - "bw","color","invert" default color
  let { region, mode } = options
  if (!region) region = "all"
  let d = Uint8ClampedArray.from(pixelData.data)
  let halfInd = Math.floor(pixelData.width * (pixelData.height / 2) * 4)
  let top = region === "top"
  let bot = region === "bot"
  let all = region === "all"
  let bw = mode === "bw"
  let invert = mode === "invert"
  for (let i = 0; i < d.length; i += 4) {
    let r = d[i];
    let g = d[i + 1];
    let b = d[i + 2];
    if ((all || (top && i < halfInd) || (bot && i > halfInd)) &&
      r >= color1.r && r <= color2.r &&
      g >= color1.g && g <= color2.g &&
      b >= color1.b && b <= color2.b) {
      if (bw) d[i] = d[i + 1] = d[i + 2] = 0
      else if (invert) {
        d[i] = 255 - r
        d[i + 1] = 255 - g
        d[i + 2] = 255 - b
      }
      //else orignal color
    } else {
      d[i] = d[i + 1] = d[i + 2] = 255
    }
  }
  return new ImageData(d, pixelData.width, pixelData.height)
}

function colorCloseEnough(color1, color2, threshold = 5) {
  const intCloseEnough = (a, b) => (Math.abs(a - b) <= threshold)
  if (intCloseEnough(color1.r, color2.r) &&
    intCloseEnough(color1.g, color2.g) &&
    intCloseEnough(color1.b, color2.b)) {
    return true
  }
  return false
}

function parseSubstat(recognition, defVal = null) {
  let texts = recognition?.data?.lines?.map(line => line.text)
  if (!texts) return defVal
  let matches = []
  for (const text of texts) {
    //parse substats
    Artifact.getSubStatKeys().forEach(key => {
      let regex = null
      let unit = Stat.getStatUnit(key)
      let name = Stat.getStatNameRaw(key)
      if (unit === "%") regex = new RegExp(name + "\\s*\\+\\s*(\\d+\\.\\d)%", "im");
      else regex = new RegExp(name + "\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)", "im");
      let match = regex.exec(text)
      match && matches.push({ value: match[1], unit, key })
    })
  }
  matches.forEach((match, i) => {
    if (i >= 4) return;//this shouldn't happen, just in case
    match.value = match.unit === "%" ? parseFloat(match.value) : parseInt(match.value)
    // props.setSubStat && props.setSubStat(i, match.key, value)
  })
  let substats = []
  for (let i = 0; i < 4; i++) {
    if (matches[i]) substats.push({ key: matches[i].key, value: matches[i].value })
    else substats.push({ key: "", value: 0 })
  }
  return substats
}
function parseMainStatKey(recognition, defVal = "") {
  let texts = recognition?.data?.lines?.map(line => line.text)
  if (!texts) return defVal
  for (const text of texts)
    for (const key of Artifact.getMainStatKeys())
      if (text.toLowerCase().includes(Stat.getStatNameRaw(key).toLowerCase()))
        return key
  return defVal
}
function parseSetKey(recognition, defVal = "") {
  let texts = recognition?.data?.lines?.map(line => line.text)
  if (!texts) return defVal
  //parse for sets
  for (const text of texts)
    for (const [key, setObj] of Object.entries(ArtifactData))
      if (text.toLowerCase().replace(/\W/g, '').includes(setObj.name.toLowerCase().replace(/\W/g, '')))
        return key//props.setSetKey(key);
}
function parseSlotKey(recognition, defVal = "") {
  let texts = recognition?.data?.lines?.map(line => line.text)
  if (!texts) return defVal
  //parse for slot
  for (const text of texts)
    for (const [key, slotObj] of Object.entries(ArtifactSlotsData))
      if (text.toLowerCase().replace(/\W/g, '').includes(slotObj.name.toLowerCase().replace(/\W/g, '')))
        return key;//props.setSlotKey(key);
}
// function parseLevel(text) {
//   let regex = /\+(\d{1,2})/
//   let match = regex.exec(text)
//   if (match) return parseInt(match[1])
//   return NaN
// }
function parseMainStatvalue(recognition, defVal = { mainStatValue: NaN }) {
  let texts = recognition?.data?.lines?.map(line => line.text)
  if (!texts) return defVal
  for (const text of texts) {
    let regex = /(\d+\.\d)%/
    let match = regex.exec(text)
    if (match) return { mainStatValue: parseFloat(match[1]), unit: "%" }
    regex = /(\d+,\d{3}|\d{2,3})/
    match = regex.exec(text)
    if (match) return { mainStatValue: parseInt(match[1].replace(/,/g, "")) }
  }
  return defVal
}