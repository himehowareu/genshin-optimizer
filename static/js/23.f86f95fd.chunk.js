(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[23],{1015:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ue}));var n=a(3),r=a(480),c=a(80),i=a(260),s=a(84),o=a(135),l=a(97),d=a(284),u=a(302),j=a(51),b=a(17),h=a(639),O=a(272),f=a(278),p=a(0),v=a(282),x=a(179),g=a(83),m=a(11),y=a(5),w=a(20),C=a(156),S=a(35),k=a(25),D="Genshin Optimizer";function _(e,t){switch(e.version){case 1:return function(e,t){var a=e.source,n=new g.a(t.storage),r={type:"GOOD",storage:n,source:a};e.artifacts&&function(){var a,c={total:0,invalid:[],new:0,updated:0,unchanged:0,removed:0},i=e.artifacts.flatMap((function(e){var t=Object(k.a)(e);return t||c.invalid.push(e),t?[t]:[]})),s=i.some((function(e){return e.location})),o=new Set(t._getArts().map((function(e){return e.id}))),l=Object(w.a)(i);try{for(l.s();!(a=l.n()).done;){var d,u=a.value,j=t.findDuplicates(u),b=j.duplicated,h=j.upgraded;b=b.filter((function(e){return o.has(e.id)})),h=h.filter((function(e){return o.has(e.id)}));var O=null!==(d=b[0])&&void 0!==d?d:h[0];if(O){for(var f in o.delete(O.id),O)f in u||"location"===f||(u[f]=O[f]);s||(u.location=O.location)}b.length?c.unchanged++:h.length?c.updated++:c.new++}}catch(p){l.e(p)}finally{l.f()}c.total=e.artifacts.length,c.removed=o.size,r.artifacts=c,n.removeForKeys((function(e){return e.startsWith("artifact_")})),i.forEach((function(e,t){return n.set("artifact_".concat(t),e)}))}();e.weapons&&function(){var a,c={total:0,invalid:[],new:0,updated:0,unchanged:0,removed:0},i=e.weapons.flatMap((function(e){var t=Object(k.c)(e);return t||c.invalid.push(e),t?[t]:[]})),s=i.some((function(e){return e.location})),o=new Set(t._getWeapons().map((function(e){return e.id}))),l=Object(w.a)(i);try{for(l.s();!(a=l.n()).done;){var d,u=a.value,j=t.findDuplicateWeapons(u),b=j.duplicated,h=j.upgraded;b=b.filter((function(e){return o.has(e.id)})),h=h.filter((function(e){return o.has(e.id)}));var O=null!==(d=b[0])&&void 0!==d?d:h[0];if(O){for(var f in o.delete(O.id),O)f in u||"location"===f||(u[f]=O[f]);s||(u.location=O.location)}b.length?c.unchanged++:h.length?c.updated++:c.new++}}catch(p){l.e(p)}finally{l.f()}c.total=e.weapons.length,c.removed=o.size,r.weapons=c,n.removeForKeys((function(e){return e.startsWith("weapon_")})),i.forEach((function(e,t){return n.set("weapon_".concat(t),e)}))}();if(e.characters){var c=[],i=e.characters.flatMap((function(e){var a,n=null!==(a=t._getChar(e.key))&&void 0!==a?a:{},r=Object(k.b)(Object(y.a)(Object(y.a)({},n),e));return r||c.push(e),r?[r]:[]})),s=new Set(i.map((function(e){return e.key}))),o=new Set(t._getCharKeys());r.characters={total:e.characters.length,new:Object(m.a)(s).filter((function(e){return!o.has(e)})).length,updated:Object(m.a)(s).filter((function(e){return o.has(e)})).length,removed:Object(m.a)(o).filter((function(e){return!s.has(e)})).length,unchanged:0,invalid:c},n.removeForKeys((function(e){return e.startsWith("char_")})),i.forEach((function(e){return n.set("char_".concat(e.key),e)}))}var l,d=Object(w.a)(n.keys);try{for(d.s();!(l=d.n()).done;){var u=l.value;if(u.startsWith("char_")){var j=n.get(u);j.buildSettings&&(j.buildSettings.builds=[],j.buildSettings.buildDate=0,n.set(u,j))}}}catch(v){d.e(v)}finally{d.f()}if(a===D){var b=e,h=b.dbVersion,O=b.artifactDisplay,f=b.characterDisplay,p=b.buildsDisplay;if(h<8)return;Object(S.b)(n,h),O&&n.set("ArtifactDisplay.state",O),f&&n.set("CharacterDisplay.state",f),p&&n.set("BuildsDisplay.state",p)}else Object(S.b)(n,8);return new x.a(n),r}(e,t)}}function M(e){var t,a,r;return{format:"GOOD",dbVersion:C.a,source:D,version:1,characters:e.entries.filter((function(e){return Object(n.a)(e,1)[0].startsWith("char_")})).map((function(e){var t=Object(n.a)(e,2),a=(t[0],t[1]),r=JSON.parse(a);return r.buildSettings&&(r.buildSettings.builds=[],r.buildSettings.buildDate=0),r})),artifacts:e.entries.filter((function(e){return Object(n.a)(e,1)[0].startsWith("artifact_")})).map((function(e){var t=Object(n.a)(e,2),a=(t[0],t[1]);return JSON.parse(a)})),weapons:e.entries.filter((function(e){return Object(n.a)(e,1)[0].startsWith("weapon_")})).map((function(e){var t=Object(n.a)(e,2),a=(t[0],t[1]);return JSON.parse(a)})),artifactDisplay:null!==(t=e.get("ArtifactDisplay.state"))&&void 0!==t?t:{},characterDisplay:null!==(a=e.get("CharacterDisplay.state"))&&void 0!==a?a:{},buildsDisplay:null!==(r=e.get("BuildsDisplay.state"))&&void 0!==r?r:{}}}var K=a(1);function z(){navigator.clipboard.writeText(JSON.stringify(M(g.b))).then((function(){return alert("Copied database to clipboard.")})).catch(console.error)}function W(e){var t=e.forceUpdate,a=Object(p.useContext)(x.b),n=Object(o.a)(["settings"]).t,s=a._getCharKeys().length,d=a._getArts().length,u=a._getWeapons().length,m=Boolean(s||d);return Object(K.jsxs)(v.a,{children:[Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsx)(c.a,{variant:"subtitle1",children:Object(K.jsx)(l.a,{t:n,i18nKey:"downloadCard.databaseDownload"})})}),Object(K.jsx)(i.a,{}),Object(K.jsxs)(r.a,{children:[Object(K.jsxs)(O.a,{container:!0,mb:2,spacing:2,children:[Object(K.jsx)(O.a,{item:!0,xs:6,md:4,children:Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:n,i18nKey:"count.chars"})," ",s]})}),Object(K.jsx)(O.a,{item:!0,xs:6,md:4,children:Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:n,i18nKey:"count.arts"})," ",d]})}),Object(K.jsx)(O.a,{item:!0,xs:6,md:4,children:Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:n,i18nKey:"count.weapons"})," ",u]})})]}),Object(K.jsx)(c.a,{variant:"caption",children:Object(K.jsx)(l.a,{t:n,i18nKey:"downloadCard.databaseDisclaimer"})})]}),Object(K.jsx)(i.a,{}),Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsxs)(O.a,{container:!0,spacing:2,children:[Object(K.jsx)(O.a,{item:!0,children:Object(K.jsx)(f.a,{disabled:!m,onClick:function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data.json",a="application/json;charset=utf-8",n=document.createElement("a");n.download=t,n.href="data:".concat(a,",").concat(encodeURIComponent(e)),n.target="_blank",document.body.appendChild(n),n.click(),document.body.removeChild(n)}(JSON.stringify(M(g.b)))},startIcon:Object(K.jsx)(h.a,{}),children:Object(K.jsx)(l.a,{t:n,i18nKey:"downloadCard.button.download"})})}),Object(K.jsx)(O.a,{item:!0,flexGrow:1,children:Object(K.jsx)(f.a,{disabled:!m,color:"info",onClick:z,startIcon:Object(K.jsx)(b.a,{icon:j.h}),children:Object(K.jsx)(l.a,{t:n,i18nKey:"downloadCard.button.copy"})})}),Object(K.jsx)(O.a,{item:!0,children:Object(K.jsx)(f.a,{disabled:!m,color:"error",onClick:function(){!function(e,t){window.confirm(e("uploadCard.goUpload.deleteDatabasePrompt"))&&(g.b.clear(),t.reloadStorage())}(n,a),t()},startIcon:Object(K.jsx)(b.a,{icon:j.D}),children:Object(K.jsx)(l.a,{t:n,i18nKey:"downloadCard.button.delete"})})})]})})]})}var A=a(1026),B=a(285),F=a(138),I=a(189);function L(){var e=Object(o.a)().t;return Object(K.jsxs)(v.a,{children:[Object(K.jsxs)(r.a,{sx:{py:1},children:[e("settings:languageCard.selectLanguage")," ",Object(K.jsx)(F.a,{color:"warning",children:e("ui:underConstruction")})]}),Object(K.jsx)(i.a,{}),Object(K.jsx)(r.a,{children:Object(K.jsx)(T,{})})]})}var R={chs:"\u4e2d\u6587 \u6b63\u4f53\u5b57",cht:"\u4e2d\u6587 \u7e41\u9ad4\u5b57",de:"Deutsch",en:"English",es:"espa\xf1ol",fr:"fran\xe7ais",id:"Bahasa Indonesia",ja:"\u65e5\u672c\u8a9e",ko:"\ud55c\uad6d\uc5b4",pt:"Portugu\xeas",ru:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a",th:"\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",vi:"Ti\u1ebfng Vi\u1ec7t"};function T(){var e=Object(o.a)(["ui","settings"]),t=e.t,a=e.i18n,n=function(e){return function(){return a.changeLanguage(e)}},r=a.languages[0];return Object(K.jsx)(B.a,{fullWidth:!0,title:t("settings:languageCard.languageFormat",{language:t("languages:".concat(r))}),children:I.a.map((function(e){return Object(K.jsxs)(A.a,{selected:r===e,disabled:r===e,onClick:n(e),children:[Object(K.jsx)(l.a,{i18nKey:"languages:".concat(e)}),e!==r?" (".concat(R[e],")"):""]},e)}))})}var G=a(374),P=a(375),H=a(120);function E(){var e=Object(p.useContext)(H.a),t=e.globalSettings.tcMode,a=e.globalSettingsDispatch;return Object(K.jsx)(v.a,{children:Object(K.jsxs)(r.a,{children:[Object(K.jsx)(c.a,{gutterBottom:!0,color:"warning.main",children:"Enabling this toggle will show some features that might be too complex for the average user."}),Object(K.jsx)(f.a,{fullWidth:!0,onClick:function(){return a({tcMode:!t})},color:t?"success":"primary",startIcon:t?Object(K.jsx)(G.a,{}):Object(K.jsx)(P.a,{}),children:"Theorycrafting Mode"})]})})}var N=a(52),V=a.n(N),U=a(99),J=a(72),Z=Object(J.a)(Object(K.jsx)("path",{d:"M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7-7 7z"}),"Upload"),q=a(10),Q=a(222),X=a(381);var Y={1:function(e){var t=[],a=[];for(var n in e)if(n in $){var r,c=Object(w.a)(e[n]);try{for(c.s();!(r=c.n()).done;){var i=r.value,s=i.setName,o=i.star,l=i.level,d=i.position,u=i.mainTag,j={setKey:ee[s],rarity:o,level:l,slotKey:$[d],mainStatKey:te[u.name],substats:i.normalTags.map((function(e){var t=e.name,a=e.value,n=ae[t];return{key:n,value:(null===n||void 0===n?void 0:n.endsWith("_"))?Math.round(1e3*a)/10:a}}))},b=Object(k.a)(j);b?a.push(b):t.push(j)}}catch(h){c.e(h)}finally{c.f()}}return{artifacts:a,invalid:t}}};var $={flower:"flower",feather:"plume",sand:"sands",cup:"goblet",head:"circlet"},ee={adventurer:"Adventurer",archaicPetra:"ArchaicPetra",berserker:"Berserker",blizzardStrayer:"BlizzardStrayer",bloodstainedChivalry:"BloodstainedChivalry",braveHeart:"BraveHeart",crimsonWitch:"CrimsonWitchOfFlames",defenderWill:"DefendersWill",gambler:"Gambler",gladiatorFinale:"GladiatorsFinale",heartOfDepth:"HeartOfDepth",instructor:"Instructor",lavaWalker:"Lavawalker",luckyDog:"LuckyDog",maidenBeloved:"MaidenBeloved",martialArtist:"MartialArtist",noblesseOblige:"NoblesseOblige",prayersForDestiny:"PrayersForDestiny",prayersForIllumination:"PrayersForIllumination",prayersForWisdom:"PrayersForWisdom",prayersToSpringtime:"PrayersToSpringtime",resolutionOfSojourner:"ResolutionOfSojourner",retracingBolide:"RetracingBolide",scholar:"Scholar",exile:"TheExile",thunderingFury:"ThunderingFury",thunderSmoother:"Thundersoother",tinyMiracle:"TinyMiracle",travelingDoctor:"TravelingDoctor",viridescentVenerer:"ViridescentVenerer",wandererTroupe:"WanderersTroupe",tenacityOfTheMillelith:"TenacityOfTheMillelith",paleFlame:"PaleFlame",emblemOfSeveredFate:"EmblemOfSeveredFate",shimenawaReminiscence:"ShimenawasReminiscence"},te={cureEffect:"heal_",lifeStatic:"hp",lifePercentage:"hp_",attackStatic:"atk",attackPercentage:"atk_",defendPercentage:"def_",critical:"critRate_",criticalDamage:"critDMG_",elementalMastery:"eleMas",recharge:"enerRech_",thunderBonus:"electro_dmg_",fireBonus:"pyro_dmg_",waterBonus:"hydro_dmg_",iceBonus:"cryo_dmg_",windBonus:"anemo_dmg_",rockBonus:"geo_dmg_",physicalBonus:"physical_dmg_"},ae={lifeStatic:"hp",lifePercentage:"hp_",attackStatic:"atk",attackPercentage:"atk_",defendStatic:"def",defendPercentage:"def_",critical:"critRate_",criticalDamage:"critDMG_",elementalMastery:"eleMas",recharge:"enerRech_"},ne=Object(q.a)("input")({display:"none"});function re(e){var t,a=e.forceUpdate,i=Object(p.useContext)(x.b),s=Object(o.a)("settings").t,u=Object(p.useState)(""),h=Object(n.a)(u,2),y=h[0],w=h[1],C=Object(p.useState)(""),k=Object(n.a)(C,2),D=k[0],M=k[1],z=Object(p.useState)(""),W=Object(n.a)(z,2),A=W[0],B=W[1],F=Object(p.useMemo)((function(){if(y){var e;try{if("object"!==typeof(e=JSON.parse(y)))return void B("uploadCard.error.jsonParse")}catch(c){return void B("uploadCard.error.jsonParse")}if("1"===e.version&&["flower","feather","sand","cup","head"].some((function(t){return Object.keys(e).includes(t)}))){var t=function(e,t){var a,n,r,c=null!==(a=e.version)&&void 0!==a?a:"1",i=null===(n=Y[c])||void 0===n?void 0:n.call(Y,e);if(i){var s=i.artifacts,o=i.invalid,l=_({format:"GOOD",source:"mona-uranai",version:1,artifacts:s},t);return null===l||void 0===l||(r=l.artifacts.invalid).push.apply(r,Object(m.a)(o)),l}}(e,i);return t||void B("uploadCard.error.monaInvalid")}if("version"in e&&"characterDatabase"in e&&"artifactDatabase"in e){var a=function(e){var t=new g.a,a=e,r=a.version,c=a.characterDatabase,i=a.artifactDatabase,s=a.artifactDisplay,o=a.characterDisplay,l=a.buildsDisplay;if(r&&c&&i){c&&Object.entries(c).forEach((function(e){var a=Object(n.a)(e,2),r=a[0],c=a[1];return t.set("char_".concat(r),c)})),i&&Object.entries(i).forEach((function(e){var a=Object(n.a)(e,2),r=a[0],c=a[1];return t.set(r,c)})),r&&Object(S.b)(t,r),s&&t.set("ArtifactDisplay.state",s),o&&t.set("CharacterDisplay.state",o),l&&t.set("BuildsDisplay.state",l);var d=new x.a(t);return{type:"GO",storage:t,charCount:d.chars.keys.length,artCount:d.arts.keys.length}}}(e);return a||void B("uploadCard.error.goInvalid")}if("GOOD"===e.format){var r=_(e,i);return r||void B("uploadCard.error.goInvalid")}B("uploadCard.error.unknown")}}),[y,i]),I=function(){var e=Object(U.a)(V.a.mark((function e(t){var a,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.files[0],t.target.value=null,a&&M(a.name),(n=new FileReader).onload=function(){return w(n.result)},n.readAsText(a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)(v.a,{children:[Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsx)(l.a,{t:s,i18nKey:"settings:uploadCard.title"})}),Object(K.jsxs)(r.a,{children:[Object(K.jsxs)(O.a,{container:!0,spacing:2,sx:{mb:1},children:[Object(K.jsx)(O.a,{item:!0,children:Object(K.jsxs)("label",{htmlFor:"icon-button-file",children:[Object(K.jsx)(ne,{accept:".json",id:"icon-button-file",type:"file",onChange:I}),Object(K.jsx)(f.a,{component:"span",startIcon:Object(K.jsx)(Z,{}),children:"Upload"})]})}),Object(K.jsx)(O.a,{item:!0,flexGrow:1,children:Object(K.jsx)(d.a,{sx:{px:2,py:1},children:Object(K.jsx)(c.a,{children:D?Object(K.jsxs)("span",{children:[Object(K.jsx)(b.a,{icon:j.n})," ",D]}):Object(K.jsxs)("span",{children:[Object(K.jsx)(b.a,{icon:j.a})," ",Object(K.jsx)(l.a,{t:s,i18nKey:"settings:uploadCard.hint"})]})})})})]}),Object(K.jsx)(c.a,{gutterBottom:!0,variant:"caption",children:Object(K.jsx)(l.a,{t:s,i18nKey:"settings:uploadCard.hintPaste"})}),Object(K.jsx)(Q.a,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",mb:2,resize:"vertical"},value:y,onChange:function(e){return w(e.target.value)}}),null!==(t=ce(F))&&void 0!==t?t:A]}),ie(F,(function(){w(""),M(""),a()}))]})}function ce(e){switch(null===e||void 0===e?void 0:e.type){case"GO":return Object(K.jsx)(le,{data:e});case"GOOD":return Object(K.jsx)(se,{data:e})}}function ie(e,t){switch(null===e||void 0===e?void 0:e.type){case"GO":case"GOOD":return Object(K.jsx)(de,{data:e,reset:t})}}function se(e){var t=e.data,a=t.source,n=t.artifacts,s=t.characters,u=t.weapons,j=(e.data,Object(o.a)("settings").t);return Object(K.jsxs)(d.a,{children:[Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:j,i18nKey:"uploadCard.dbSource"}),Object(K.jsxs)("strong",{children:[" ",a]})]})}),Object(K.jsx)(i.a,{}),Object(K.jsx)(r.a,{children:Object(K.jsxs)(O.a,{container:!0,spacing:2,children:[Object(K.jsx)(O.a,{item:!0,flexGrow:1,children:Object(K.jsx)(oe,{result:n,type:"arts"})}),Object(K.jsx)(O.a,{item:!0,flexGrow:1,children:Object(K.jsx)(oe,{result:u,type:"weapons"})}),Object(K.jsx)(O.a,{item:!0,flexGrow:1,children:Object(K.jsx)(oe,{result:s,type:"chars"})})]})})]})}function oe(e){var t,a,n=e.result,s=e.type,d=Object(o.a)("settings").t;return n?Object(K.jsxs)(v.a,{children:[Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:d,i18nKey:"count.".concat(s)})," ",null!==(t=n.total)&&void 0!==t?t:0]})}),Object(K.jsx)(i.a,{}),Object(K.jsxs)(r.a,{children:[Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:d,i18nKey:"count.new"})," ",Object(K.jsx)("strong",{children:n.new})," / ",n.total]}),Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:d,i18nKey:"count.updated"})," ",Object(K.jsx)("strong",{children:n.updated})," / ",n.total]}),Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:d,i18nKey:"count.unchanged"})," ",Object(K.jsx)("strong",{children:n.unchanged})," / ",n.total]}),Object(K.jsxs)(c.a,{color:"warning.main",children:[Object(K.jsx)(l.a,{t:d,i18nKey:"count.removed"})," ",Object(K.jsx)("strong",{children:n.removed})]}),!!(null===(a=n.invalid)||void 0===a?void 0:a.length)&&Object(K.jsxs)("div",{children:[Object(K.jsxs)(c.a,{color:"error.main",children:[Object(K.jsx)(l.a,{t:d,i18nKey:"count.invalid"})," ",Object(K.jsx)("strong",{children:n.invalid.length})," / ",n.total]}),Object(K.jsx)(Q.a,{component:"textarea",sx:{width:"100%",fontFamily:"monospace",minHeight:"10em",resize:"vertical"},value:JSON.stringify(n.invalid,void 0,2),disabled:!0})]})]})]}):null}function le(e){var t=e.data,a=t.charCount,n=t.artCount,s=Object(o.a)("settings").t;return Object(K.jsxs)(d.a,{children:[Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsx)(l.a,{t:s,i18nKey:"uploadCard.goUpload.title"})}),Object(K.jsx)(i.a,{}),Object(K.jsx)(r.a,{children:Object(K.jsxs)(O.a,{container:!0,spacing:1,children:[Object(K.jsxs)(O.a,{item:!0,xs:12,md:6,children:[" ",Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:s,i18nKey:"count.chars"})," ",a]})]}),Object(K.jsxs)(O.a,{item:!0,xs:12,md:6,children:[" ",Object(K.jsxs)(c.a,{children:[Object(K.jsx)(l.a,{t:s,i18nKey:"count.arts"})," ",n]})]}),Object(K.jsx)(O.a,{item:!0,xs:12,children:Object(K.jsx)(X.a,{severity:"warning",children:Object(K.jsx)(l.a,{t:s,i18nKey:"uploadCard.goUpload.migrate"})})})]})})]})}function de(e){var t,a,n,c=e.data.storage,s=e.data,d=e.reset,u=Object(p.useContext)(x.b),h=Object(o.a)("settings").t,O="GO"===s.type?s.charCount||s.artCount:(null===(t=s.characters)||void 0===t?void 0:t.total)||(null===(a=s.artifacts)||void 0===a?void 0:a.total)||(null===(n=s.weapons)||void 0===n?void 0:n.total);return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(i.a,{}),Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsx)(f.a,{color:O?"success":"error",disabled:!O,onClick:function(){g.b.removeForKeys((function(e){return e.startsWith("artifact_")||e.startsWith("char_")||e.startsWith("weapon_")})),g.b.copyFrom(c),u.reloadStorage(),d()},startIcon:Object(K.jsx)(b.a,{icon:j.o}),children:Object(K.jsx)(l.a,{t:h,i18nKey:"settings:uploadCard.replaceDatabase"})})})]})}function ue(){var e=Object(o.a)(["settings"]).t,t=Object(u.a)(),a=Object(n.a)(t,2)[1];return s.a.pageview("/setting"),Object(K.jsxs)(d.a,{sx:{my:1},children:[Object(K.jsx)(r.a,{sx:{py:1},children:Object(K.jsx)(c.a,{variant:"subtitle1",children:Object(K.jsx)(l.a,{t:e,i18nKey:"title"})})}),Object(K.jsx)(i.a,{}),Object(K.jsxs)(r.a,{sx:{display:"flex",flexDirection:"column",gap:2},children:[Object(K.jsx)(L,{}),Object(K.jsx)(W,{forceUpdate:a}),Object(K.jsx)(re,{forceUpdate:a}),Object(K.jsx)(E,{})]})]})}},282:function(e,t,a){"use strict";var n=a(10),r=a(479),c=Object(n.a)(r.a)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.a=c},284:function(e,t,a){"use strict";var n=a(10),r=a(479),c=Object(n.a)(r.a)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.a=c},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(5),r=a(3),c=a(65),i=a(1002),s=a(278),o=a(177),l=a(975),d=a(0),u=a(1);function j(e){var t=e.title,a=e.children,j=e.id,b=void 0===j?"dropdownbtn":j,h=Object(c.a)(e,["title","children","id"]),O=Object(d.useState)(null),f=Object(r.a)(O,2),p=f[0],v=f[1],x=Boolean(p),g=Object(d.useCallback)((function(e){return v(e.currentTarget)}),[v]),m=Object(d.useCallback)((function(){return v(null)}),[v]);return Object(u.jsxs)(d.Suspense,{fallback:Object(u.jsx)(s.a,Object(n.a)(Object(n.a)({endIcon:Object(u.jsx)(i.a,{})},h),{},{children:Object(u.jsx)(o.a,{width:50})})),children:[Object(u.jsx)(s.a,Object(n.a)(Object(n.a)({},h),{},{id:b,"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":x?"true":void 0,onClick:g,endIcon:Object(u.jsx)(i.a,{}),children:t})),Object(u.jsx)(l.a,{id:"basic-menu",anchorEl:p,open:x,onClose:m,MenuListProps:{"aria-labelledby":b},onClick:m,children:Object(u.jsx)(d.Suspense,{fallback:Object(u.jsx)(o.a,{width:"100%",height:"1000"}),children:a})})]})}},302:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(3),r=a(0);function c(){var e=Object(r.useState)({}),t=Object(n.a)(e,2),a=t[0],c=t[1];return[a,Object(r.useCallback)((function(){return c({})}),[])]}},374:function(e,t,a){"use strict";var n=a(72),r=a(1);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox")},375:function(e,t,a){"use strict";var n=a(72),r=a(1);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank")},381:function(e,t,a){"use strict";var n=a(6),r=a(9),c=a(2),i=a(0),s=(a(4),a(8)),o=a(111),l=a(95),d=a(10),u=a(13),j=a(14),b=a(274),h=a(96),O=a(112);function f(e){return Object(h.a)("MuiAlert",e)}var p,v=Object(O.a)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),x=a(279),g=a(72),m=a(1),y=Object(g.a)(Object(m.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),w=Object(g.a)(Object(m.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=Object(g.a)(Object(m.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=Object(g.a)(Object(m.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),k=Object(g.a)(Object(m.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),D=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],_=Object(d.a)(b.a,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["".concat(a.variant).concat(Object(j.a)(a.color||a.severity))]]}})((function(e){var t=e.theme,a=e.ownerState,r="light"===t.palette.mode?l.b:l.e,i="light"===t.palette.mode?l.e:l.b,s=a.color||a.severity;return Object(c.a)({},t.typography.body2,{borderRadius:t.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===a.variant&&Object(n.a)({color:r(t.palette[s].light,.6),backgroundColor:i(t.palette[s].light,.9)},"& .".concat(v.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"outlined"===a.variant&&Object(n.a)({color:r(t.palette[s].light,.6),border:"1px solid ".concat(t.palette[s].light)},"& .".concat(v.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"filled"===a.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[s].dark:t.palette[s].main})})),M=Object(d.a)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),K=Object(d.a)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),z=Object(d.a)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),W={success:Object(m.jsx)(y,{fontSize:"inherit"}),warning:Object(m.jsx)(w,{fontSize:"inherit"}),error:Object(m.jsx)(C,{fontSize:"inherit"}),info:Object(m.jsx)(S,{fontSize:"inherit"})},A=i.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiAlert"}),n=a.action,i=a.children,l=a.className,d=a.closeText,b=void 0===d?"Close":d,h=a.color,O=a.icon,v=a.iconMapping,g=void 0===v?W:v,y=a.onClose,w=a.role,C=void 0===w?"alert":w,S=a.severity,A=void 0===S?"success":S,B=a.variant,F=void 0===B?"standard":B,I=Object(r.a)(a,D),L=Object(c.a)({},a,{color:h,severity:A,variant:F}),R=function(e){var t=e.variant,a=e.color,n=e.severity,r=e.classes,c={root:["root","".concat(t).concat(Object(j.a)(a||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(o.a)(c,f,r)}(L);return Object(m.jsxs)(_,Object(c.a)({role:C,square:!0,elevation:0,ownerState:L,className:Object(s.a)(R.root,l),ref:t},I,{children:[!1!==O?Object(m.jsx)(M,{ownerState:L,className:R.icon,children:O||g[A]||W[A]}):null,Object(m.jsx)(K,{ownerState:L,className:R.message,children:i}),null!=n?Object(m.jsx)(z,{className:R.action,children:n}):null,null==n&&y?Object(m.jsx)(z,{ownerState:L,className:R.action,children:Object(m.jsx)(x.a,{size:"small","aria-label":b,title:b,color:"inherit",onClick:y,children:p||(p=Object(m.jsx)(k,{fontSize:"small"}))})}):null]}))}));t.a=A},639:function(e,t,a){"use strict";var n=a(72),r=a(1);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download")}}]);
//# sourceMappingURL=23.f86f95fd.chunk.js.map