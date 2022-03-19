import type { WeaponData } from 'pipeline'
import { input } from '../../../../Formula'
import { constant, subscript, prod, infoMut } from "../../../../Formula/utils"
import { WeaponKey } from '../../../../Types/consts'
import { customDmgNode } from '../../../Characters/dataUtil'
import { st, trans } from '../../../SheetUtil'
import { dataObjForWeaponSheet } from '../../util'
import WeaponSheet, { conditionalHeader, IWeaponSheet } from '../../WeaponSheet'
import iconAwaken from './AwakenIcon.png'
import data_gen_json from './data_gen.json'
import icon from './Icon.png'

const key: WeaponKey = "TheViridescentHunt"
const data_gen = data_gen_json as WeaponData
const [tr] = trans("weapon", key)

const dmgPerc_s = [.4, .5, .6, .7, .8]
const dmg = customDmgNode(prod(subscript(input.weapon.refineIndex, dmgPerc_s), input.total.atk), "elemental", { hit: { ele: constant("physical") } })

const data = dataObjForWeaponSheet(key, data_gen)
const sheet: IWeaponSheet = {
  icon,
  iconAwaken,
  document: [{
    fieldsHeader: conditionalHeader(tr, icon, iconAwaken, st("base")),
    fields: [{
      node: infoMut(dmg, { key: "sheet:dmg" })
    }]
  }]
}

export default new WeaponSheet(key, sheet, data_gen, data)
