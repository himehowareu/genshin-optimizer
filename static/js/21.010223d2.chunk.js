(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[21],{205:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var n=a(2),c=a(185),r=a(59),s=a(16),i=a(11),l=a(1);function o(e,t){var a=t.characterSheet,r=t.weaponSheet,s=t.artifactSheets,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"anemo";if("basicKeys"===e)return"Basic Stats";if("genericAvgHit"===e)return"Generic Optimization Values";if("transReactions"===e)return"Transformation Reaction";if(e.startsWith("talentKey_")){var o,j,b=e.split("talentKey_")[1];return null!==(o=null===a||void 0===a||null===(j=a.getTalentOfKey(b,i))||void 0===j?void 0:j.name)&&void 0!==o?o:b}if(e.startsWith("weapon_")){var d,u=e.split("weapon_")[1];return null!==(d=null===r||void 0===r?void 0:r.name)&&void 0!==d?d:u}if(e.startsWith("artifact_")){var h,O=e.split("_"),x=Object(n.a)(O,3),m=x[1],v=x[2];return Object(l.jsxs)("span",{children:[null===(h=s[m])||void 0===h?void 0:h.name," ",Object(l.jsxs)(c.a,{variant:"success",children:[v,"-Set"]})]})}return""}function j(e){return{key:e,level:1,ascension:0,hitMode:"avgHit",reactionMode:null,equippedArtifacts:Object(i.o)(s.h,(function(){return""})),equippedWeapon:"",conditionalValues:{},baseStatOverrides:{},buildSettings:Object(r.a)(),talent:{auto:1,skill:1,burst:1},infusionAura:"",constellation:0}}},220:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(2),c=a(29),r=a(10),s=a(0),i=a(545),l=a(186),o=a(119),j=a(70),b=a(113),d=a(195),u=a(34),h=a(11),O=a(80),x=a(1);function m(e){var t,a,m=e.pageKey,v=void 0===m?"":m,f=e.text,p=void 0===f?"":f,y=e.modalTitle,g=void 0===y?"":y,N=e.children,C=Object(s.useState)(null===(t=null===(a=u.b.get("infoShown"))||void 0===a?void 0:a[v])||void 0===t||t),k=Object(n.a)(C,2),w=k[0],S=k[1],K=Object(s.useState)(Array.isArray(p)?Object(h.g)(p):p),T=Object(n.a)(K,1)[0],_=function(){var e,t=null!==(e=u.b.get("infoShown"))&&void 0!==e?e:{};t[v]=!1,u.b.set("infoShown",t),S(!1)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(i.a,{show:w,onHide:function(){return _()},size:"xl",variant:"success",contentClassName:"bg-transparent",children:Object(x.jsxs)(l.a,{bg:"darkcontent",text:"lightfont",children:[Object(x.jsx)(l.a.Header,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(j.a,{children:Object(x.jsx)(l.a.Title,{children:g})}),Object(x.jsx)(j.a,{xs:"auto",children:Object(x.jsx)(b.a,{variant:"danger",onClick:function(){return _()},children:Object(x.jsx)(r.a,{icon:c.B})})})]})}),Object(x.jsx)(l.a.Body,{children:Object(x.jsx)(s.Suspense,{fallback:Object(x.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(x.jsx)(d.a,{animation:"border",variant:"primary"})]}),children:N})}),Object(x.jsx)(l.a.Footer,{children:Object(x.jsx)(b.a,{variant:"danger",onClick:function(){return _()},children:Object(x.jsx)("span",{children:"Close"})})})]})}),Object(x.jsx)(l.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(x.jsx)(l.a.Body,{className:"pl-2 py-0 pr-0",children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(j.a,{children:Object(x.jsx)("small",{children:T})}),Object(x.jsx)(j.a,{xs:"auto",children:Object(x.jsxs)(b.a,{size:"sm",variant:"info",className:"m-0 py-1",onClick:function(){return S(!0)},children:[Object(x.jsx)(O.a,{ns:"ui",key18:"info"})," ",Object(x.jsx)(r.a,{icon:c.v})]})})]})})})]})}},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a(14),c=a(2),r=a(29),s=a(10),i=a(0),l=a(140),o=a(185),j=a(113),b=a(186),d=a(70),u=a(119),h=a(40),O=a(111),x=a(206),m=a(202),v=a(112),f=a(45),p=a(33),y=a(82),g=a(116),N=a(201),C=a(114),k=a(1);function w(e){var t,a=e.characterKey,w=e.onEdit,S=e.onDelete,K=e.cardClassName,T=void 0===K?"":K,_=e.bg,B=void 0===_?"":_,A=e.header,E=e.footer,F=void 0!==E&&E,M=Object(i.useContext)(f.b),z=Object(i.useState)(void 0),W=Object(c.a)(z,2),H=W[0],R=W[1];Object(i.useEffect)((function(){return a?M.followChar(a,R):void 0}),[a,R,M]);var L=Object(y.b)(O.a.getAll(),[]),D=H,G=Object(y.b)(C.b.get(a),[a]),U=(null===D||void 0===D?void 0:D.equippedWeapon)?M._getWeapon(D.equippedWeapon):void 0,V=Object(y.b)(U?g.a.get(U.key):void 0,[null===U||void 0===U?void 0:U.key]),q=Object(i.useMemo)((function(){return D&&G&&V&&L&&N.a.calculateBuild(D,M,G,V,L)}),[D,G,V,L,M]);if(!D||!U||!G||!V||!q)return null;var P=D.constellation,Y=U.level,I=U.ascension,J=q.tlvl,Q=G.name,X=q.characterEle,Z=G.weaponTypeKey,$=null===V||void 0===V?void 0:V.name,ee=V.getMainStatValue(Y,I).toFixed(p.b.fixedUnit("atk")),te=V.getSubStatKey(),ae=V.getSubStatValue(Y,I).toFixed(p.b.fixedUnit(te)),ne=g.a.getLevelString(U),ce=null===V||void 0===V?void 0:V.passiveName;return Object(k.jsxs)(b.a,{className:T,bg:B||"darkcontent",text:"lightfont",children:[Object(k.jsx)(b.a.Header,{className:"pr-2",children:Object(k.jsxs)(u.a,{className:"no-gutters",children:[Object(k.jsx)(d.a,{children:A||Object(k.jsx)("h5",{children:Object(k.jsx)("b",{children:Q})})}),Object(k.jsx)(d.a,{xs:"auto",children:Object(k.jsxs)("span",{className:"float-right align-top ml-1",children:[w&&Object(k.jsx)(j.a,{variant:"primary",size:"sm",className:"mr-1",onClick:function(){return w(a)},children:Object(k.jsx)(s.a,{icon:r.k})}),S&&Object(k.jsx)(j.a,{variant:"danger",size:"sm",onClick:function(){return S(a)},children:Object(k.jsx)(s.a,{icon:r.E})})]})})]})}),Object(k.jsxs)(b.a.Body,{onClick:function(){return null===w||void 0===w?void 0:w(a)},className:w?"cursor-pointer":"",children:[Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{xs:"auto",className:"pr-0",children:Object(k.jsx)(l.a,{src:G.thumbImg,className:"thumb-big grad-".concat(G.star,"star p-0"),thumbnail:!0})}),Object(k.jsxs)(d.a,{children:[Object(k.jsxs)("h5",{className:"mb-0",children:["Lv. ",N.a.getLevelString(D)," ","C".concat(P)]}),Object(k.jsxs)("h6",{className:"mb-0",children:[Object(k.jsx)(o.a,{variant:"secondary",children:Object(k.jsx)("strong",{className:"mx-1",children:J.auto+1})})," ",Object(k.jsx)(o.a,{variant:"secondary",children:Object(k.jsx)("strong",{className:"mx-1",children:J.skill+1})})," ",Object(k.jsx)(o.a,{variant:"secondary",children:Object(k.jsx)("strong",{className:"mx-1",children:J.burst+1})})]}),Object(k.jsx)("h6",{className:"mb-0",children:Object(k.jsx)(m.a,{stars:G.star,colored:!0})}),Object(k.jsxs)("h3",{className:"mb-0",children:[v.a[X]," ",Object(k.jsx)(l.a,{src:null===(t=x.a.weaponTypes)||void 0===t?void 0:t[Z],className:"inline-icon"})]})]})]}),Object(k.jsx)(u.a,{className:"mb-2",children:Object(k.jsxs)(d.a,{children:[Object(k.jsxs)("h6",{className:"mb-0",children:[$,ce&&Object(k.jsx)(o.a,{variant:"info",className:"ml-1",children:U.refine})," ",ne]}),Object(k.jsxs)("span",{children:["ATK: ",ee,"  ",ce&&Object(k.jsxs)("span",{children:[p.b.getStatName(te),": ",ae,p.b.getStatUnit(te)]})]})]})}),Object(k.jsx)(u.a,{children:Object(k.jsx)(d.a,{children:L&&Object.entries(O.a.setEffects(L,q.setToSlots)).map((function(e){var t,a=Object(c.a)(e,2),r=a[0],s=a[1],i=null!==(t=null===L||void 0===L?void 0:L[r].name)&&void 0!==t?t:"",l=Math.max.apply(Math,Object(n.a)(s));return Object(k.jsx)("h5",{children:Object(k.jsxs)(o.a,{variant:"secondary",children:[i," ",Object(k.jsx)(o.a,{variant:"success",children:l})]})},r)}))})}),Object(k.jsx)(u.a,{children:["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","enerRech_"].map((function(e){var t=p.b.getStatUnit(e),a=q[e];return Object(k.jsxs)(d.a,{xs:12,children:[Object(k.jsxs)("h6",{className:"d-inline",children:[v.a[e]," ",p.b.getStatName(e)]}),Object(k.jsx)("span",{className:"float-right",children:(null===a||void 0===a?void 0:a.toFixed(p.b.fixedUnit(e)))+t})]},e)}))})]}),F&&Object(k.jsx)(b.a.Footer,{children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(d.a,{children:Object(k.jsxs)(j.a,{as:h.b,to:{pathname:"/build",characterKey:a},children:[Object(k.jsx)(s.a,{icon:r.d})," Generate Builds"]})}),Object(k.jsx)(d.a,{children:Object(k.jsxs)(j.a,{variant:"info",as:h.b,to:{pathname:"/flex",characterKey:a},children:[Object(k.jsx)(s.a,{icon:r.r})," Share Character"]})})]})})]})}},540:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a(46),c=a.n(n),r=a(57),s=a(2),i=a(29),l=a(10),o=a(103),j=a(0),b=a.n(j),d=a(187),u=a(119),h=a(70),O=a(186),x=a(195),m=a(231),v=a(113),f=a(140),p=a(538),y=a(332),g=a(48),N=a(40),C=a(206),k=a(210),w=a(220),S=a(112),K=a(45),T=a(34),_=a(16),B=a(82),A=a(127),E=a(241),F=a(114),M=a(205),z=a(1),W=b.a.lazy((function(){return a.e(26).then(a.bind(null,536))})),H=Object(j.lazy)((function(){return Promise.all([a.e(4),a.e(3),a.e(16)]).then(a.bind(null,278))})),R={level:"Level",rarity:"Rarity",name:"Name"};function L(e,t){return t===e?"":t}function D(e){var t,a=Object(j.useContext)(K.b),n=Object(j.useState)(""),N=Object(s.a)(n,2),D=N[0],U=N[1],V=Object(j.useState)((function(){return Object.keys(R)[0]})),q=Object(s.a)(V,2),P=q[0],Y=q[1],I=Object(j.useReducer)(L,""),J=Object(s.a)(I,2),Q=J[0],X=J[1],Z=Object(j.useReducer)(L,""),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ae=Object(j.useState)(!1),ne=Object(s.a)(ae,2),ce=ne[0],re=ne[1],se=Object(B.a)(),ie=Object(s.a)(se,2)[1],le=Object(j.useRef)(null);Object(j.useEffect)((function(){g.a.pageview("/character");var e=T.b.get("CharacterDisplay.state");if(e){var t=e.characterKeyToEdit,n=e.sortBy,c=e.elementalFilter,r=e.weaponFilter;t&&U(t),n&&Y(n),_.d.includes(c)&&X(c),_.j.includes(r)&&te(r)}return a.followAnyChar(ie)}),[ie,a]);var oe=null!==(t=Object(B.b)(F.b.getAll(),[]))&&void 0!==t?t:{},je=function(e){var t,n;return null!==(t=null===(n=a._getChar(e))||void 0===n?void 0:n.level)&&void 0!==t?t:0},be=function(e){var t;return null===(t=oe[e])||void 0===t?void 0:t.star};Object(j.useEffect)((function(){var e={characterKeyToEdit:D,sortBy:P,elementalFilter:Q,weaponFilter:ee};T.b.set("CharacterDisplay.state",e)}),[D,P,Q,ee]);var de=Object(j.useCallback)(function(){var e=Object(r.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.b.get(t);case 2:if(n=e.sent,"object"===typeof(r=null===n||void 0===n?void 0:n.name)&&(r=o.a.t("char_".concat(t,"_gen:name"))),window.confirm("Are you sure you want to remove ".concat(r,"?"))){e.next=7;break}return e.abrupt("return");case 7:a.removeChar(t),D===t&&U("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[D,U,a]),ue=Object(j.useCallback)((function(e){a._getChar(e)?U(e):Object(r.a)(c.a.mark((function t(){var n,r,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(M.b)(e),a.updateChar(n),t.next=4,F.b.get(e);case 4:if(r=t.sent){t.next=7;break}return t.abrupt("return");case 7:s=Object(A.a)(r.weaponTypeKey),i=a.createWeapon(s),a.setWeaponLocation(i,e),U(e);case 11:case"end":return t.stop()}}),t)})))(),setTimeout((function(){var e;null===(e=le.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)}),[U,le,a]),he=Object(j.useCallback)((function(){U(""),re(!1)}),[U]),Oe=a._getCharKeys().filter((function(e){var t,a;return(!Q||Q===(null===(t=oe[e])||void 0===t?void 0:t.elementKey))&&(!ee||ee===(null===(a=oe[e])||void 0===a?void 0:a.weaponTypeKey))})).sort((function(e,t){if("name"===P)return e<t?-1:e>t?1:0;if("level"===P){var a=je(t)-je(e);return a||be(t)-be(e)}var n=be(t)-be(e);return n||je(t)-je(e)}));return Object(z.jsxs)(d.a,{ref:le,className:"mt-2",children:[Object(z.jsx)(w.a,{pageKey:"characterPage",modalTitle:"Character Management Page Guide",text:["Every character will be tested with in-game numbers for maximum accuracy.","You can see the details of the calculations of every number.","You need to manually enable auto infusion for characters like Choungyun or Noelle.",'You can change character constellations in both "Character" tab and in "Talents" tab.',"Modified character Stats show up in yellow."],children:Object(z.jsx)(W,{})}),D?Object(z.jsx)(u.a,{className:"mt-2",children:Object(z.jsx)(h.a,{children:Object(z.jsx)(b.a.Suspense,{fallback:Object(z.jsx)(O.a,{bg:"darkcontent",text:"lightfont",children:Object(z.jsx)(O.a.Body,{children:Object(z.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(z.jsx)(x.a,{animation:"border",variant:"primary"})]})})}),children:Object(z.jsx)(H,{setCharacterKey:ue,characterKey:D,onClose:he,footer:Object(z.jsx)(G,{onClose:he,characterKey:D})})})})}):null,Object(z.jsx)(O.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:Object(z.jsx)(O.a.Body,{className:"p-2",children:Object(z.jsxs)(u.a,{children:[Object(z.jsx)(h.a,{xs:"auto",children:Object(z.jsx)(m.a,{children:_.d.map((function(e){return Object(z.jsx)(v.a,{variant:Q&&Q!==e?"secondary":e,className:"py-1 px-2 text-white",onClick:function(){return X(e)},children:Object(z.jsx)("h3",{className:"mb-0",children:S.b[e]})},e)}))})}),Object(z.jsx)(h.a,{children:Object(z.jsx)(m.a,{children:_.j.map((function(e){var t;return Object(z.jsx)(v.a,{variant:ee&&ee!==e?"secondary":"success",className:"py-1 px-2",onClick:function(){return te(e)},children:Object(z.jsx)("h3",{className:"mb-0",children:Object(z.jsx)(f.a,{src:null===(t=C.a.weaponTypes)||void 0===t?void 0:t[e],className:"inline-icon"})})},e)}))})}),Object(z.jsxs)(h.a,{xs:"auto",children:[Object(z.jsx)("span",{children:"Sort by: "}),Object(z.jsx)(p.a,{type:"radio",name:"level",value:P,onChange:Y,children:Object.entries(R).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(z.jsx)(y.a,{value:a,variant:P===a?"success":"primary",children:Object(z.jsx)("h6",{className:"mb-0",children:n})},a)}))})]})]})})}),Object(z.jsxs)(u.a,{className:"mt-2",children:[!D&&Object(z.jsx)(h.a,{lg:4,md:6,className:"mb-2",children:Object(z.jsxs)(O.a,{className:"h-100",bg:"darkcontent",text:"lightfont",children:[Object(z.jsx)(O.a.Header,{className:"pr-2",children:Object(z.jsx)("span",{children:"Add New Character"})}),Object(z.jsx)(O.a.Body,{className:"d-flex flex-column justify-content-center",children:Object(z.jsx)(u.a,{className:"d-flex flex-row justify-content-center",children:Object(z.jsxs)(h.a,{xs:"auto",children:[Object(z.jsx)(v.a,{onClick:function(){return re(!0)},children:Object(z.jsx)("h1",{children:Object(z.jsx)(l.a,{icon:i.u,className:"fa-fw"})})}),Object(z.jsx)(k.c,{show:ce,onHide:function(){return re(!1)},onSelect:ue})]})})})]})}),Oe.map((function(e){return Object(z.jsx)(h.a,{lg:4,md:6,className:"mb-2",children:Object(z.jsx)(E.a,{header:void 0,cardClassName:"h-100",characterKey:e,onDelete:de,onEdit:ue,footer:!0})},e)}))]})]})}function G(e){var t=e.onClose,a=e.characterKey;return Object(z.jsxs)(u.a,{children:[Object(z.jsx)(h.a,{xs:"auto",children:Object(z.jsxs)(v.a,{as:N.b,to:{pathname:"/build",characterKey:a},children:[Object(z.jsx)(l.a,{icon:i.d})," Generate Builds"]})}),Object(z.jsx)(h.a,{children:Object(z.jsxs)(v.a,{variant:"info",as:N.b,to:{pathname:"/flex",characterKey:a},children:[Object(z.jsx)(l.a,{icon:i.r})," Share Character"]})}),Object(z.jsx)(h.a,{xs:"auto",children:Object(z.jsx)(v.a,{variant:"danger",onClick:t,children:"Close"})})]})}}}]);
//# sourceMappingURL=21.010223d2.chunk.js.map