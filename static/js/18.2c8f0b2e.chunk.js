(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[18],{1025:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var a=n(52),c=n.n(a),r=n(99),i=n(3),o=n(5),s=n(51),l=n(17),u=n(222),j=n(272),d=n(1027),b=n(973),O=n(80),x=n(177),p=n(480),h=n(278),f=n(124),v=n(0),m=n(84),g=n(284),y=n(299),w=n(320),k=n(287),C=n(311),I=n(330),T=n(179),W=n(83),S=n(302),_=n(137),A=n(16),N=n(319),M=n(12),D=["level","rarity"];var E=n(331),z=n(142),B=n(145),G=n(1),K=Object(v.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(21)]).then(n.bind(null,353))})),P=function(){return{editWeaponId:"",sortType:D[0],ascending:!1,rarity:[5,4],weaponType:"",maxNumToDisplay:30}};function H(e,t){return Object(o.a)(Object(o.a)({},e),t)}function L(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P();return Object(o.a)(Object(o.a)({},t),null!==(e=W.b.get("WeaponDisplay.state"))&&void 0!==e?e:{})}function R(e){var t=Object(v.useContext)(T.b),n=Object(v.useReducer)(H,P(),L),a=Object(i.a)(n,2),o=a[0],R=a[1],V=Object(v.useState)(!1),F=Object(i.a)(V,2),U=F[0],q=F[1],J=Object(S.a)(),Q=Object(i.a)(J,2),X=Q[0],Y=Q[1],Z=Object(v.useRef)(null),$=Object(v.useRef)(null),ee=Object(v.useState)(0),te=Object(i.a)(ee,2),ne=te[0],ae=te[1];Object(v.useEffect)((function(){return m.a.pageview("/weapon"),t.followAnyWeapon(Y)}),[Y,t]),Object(v.useEffect)((function(){W.b.set("WeaponDisplay.state",o)}),[o]);var ce=Object(_.a)(z.a.getAll(),[]),re=Object(v.useCallback)(function(){var e=Object(r.a)(c.a.mark((function e(n){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t._getWeapon(n)){e.next=3;break}return e.abrupt("return");case 3:if(r=f.a.t("weapon_".concat(a.key,"_gen:name")),window.confirm("Are you sure you want to remove ".concat(r,"?"))){e.next=6;break}return e.abrupt("return");case 6:t.removeWeapon(n),o.editWeaponId===n&&R({editWeaponId:""});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o.editWeaponId,R,t]),ie=Object(v.useCallback)((function(e){R({editWeaponId:e}),setTimeout((function(){var e;null===(e=Z.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),500)}),[R,Z]),oe=Object(v.useCallback)((function(e){ie(t.createWeapon(Object(B.b)(e)))}),[t,ie]),se=o.sortType,le=o.ascending,ue=o.weaponType,je=o.rarity,de=Object(v.useMemo)((function(){return ce&&function(e){return{level:{getValue:function(e){var t;return null!==(t=e.level)&&void 0!==t?t:0},tieBreaker:"rarity"},rarity:{getValue:function(t){var n;return null===e||void 0===e||null===(n=e[t.key])||void 0===n?void 0:n.rarity},tieBreaker:"level"}}}(ce)}),[ce]),be=Object(v.useMemo)((function(){return ce&&function(e){return{rarity:function(t,n){var a;return n.includes(null===e||void 0===e||null===(a=e[t.key])||void 0===a?void 0:a.rarity)},weaponType:function(t,n){var a;return!n||n===(null===e||void 0===e||null===(a=e[t.key])||void 0===a?void 0:a.weaponType)}}}(ce)}),[ce]),Oe=Object(v.useMemo)((function(){var e=t._getWeapons(),n=e.length;if(!de||!be)return{weaponIdList:[],totalWeaponNum:n};var a=e.filter(Object(N.a)({weaponType:ue,rarity:je},be)).sort(Object(N.b)(se,le,de)).map((function(e){return e.id}));return X&&{weaponIdList:a,totalWeaponNum:n}}),[X,t,de,be,se,le,je,ue]),xe=Oe.weaponIdList,pe=Oe.totalWeaponNum,he=Object(v.useMemo)((function(){var e=Math.ceil(xe.length/o.maxNumToDisplay),t=Object(M.a)(ne,0,e-1);return{weaponIdsToShow:xe.slice(t*o.maxNumToDisplay,(t+1)*o.maxNumToDisplay),numPages:e,currentPageIndex:t}}),[xe,ne,o.maxNumToDisplay]),fe=he.weaponIdsToShow,ve=he.numPages,me=he.currentPageIndex,ge=xe.length!==pe?"".concat(xe.length,"/").concat(pe):"".concat(pe),ye=Object(v.useCallback)((function(e,t){var n;null===(n=$.current)||void 0===n||n.scrollIntoView({behavior:"smooth"}),ae(t-1)}),[ae,$]),we=Object(v.useCallback)((function(){return R({editWeaponId:""})}),[R]),ke=o.editWeaponId;return Object(G.jsxs)(u.a,{sx:{mt:1,"> div":{mb:1}},children:[!!ke&&Object(G.jsx)(u.a,{ref:Z,children:Object(G.jsx)(K,{weaponId:ke,footer:!0,onClose:we})}),Object(G.jsxs)(g.a,{ref:$,sx:{p:2,pb:1},children:[Object(G.jsxs)(j.a,{container:!0,spacing:1,sx:{mb:1},children:[Object(G.jsx)(j.a,{item:!0,children:Object(G.jsx)(C.a,{sx:{height:"100%"},onChange:function(e){return R({weaponType:e})},value:ue,size:"small"})}),Object(G.jsx)(j.a,{item:!0,flexGrow:1,children:Object(G.jsx)(y.a,{sx:{height:"100%"},onChange:function(e,t){return R({rarity:t})},value:je,size:"small",children:A.g.map((function(e){return Object(G.jsxs)(d.a,{value:e,children:[Object(G.jsxs)("strong",{children:[e," "]}),Object(G.jsx)(k.a,{stars:1})]},e)}))})}),Object(G.jsx)(j.a,{item:!0,children:Object(G.jsx)(w.a,{sx:{height:"100%"},sortKeys:D,value:se,onChange:function(e){return R({sortType:e})},ascending:le,onChangeAsc:function(e){return R({ascending:e})}})})]}),Object(G.jsxs)(j.a,{container:!0,alignItems:"flex-end",children:[Object(G.jsx)(j.a,{item:!0,flexGrow:1,children:Object(G.jsx)(b.a,{count:ve,page:me+1,onChange:ye})}),Object(G.jsx)(j.a,{item:!0,children:Object(G.jsxs)(O.a,{color:"text.secondary",children:["Showing ",Object(G.jsx)("b",{children:fe.length})," out of ",ge," Weapons"]})})]})]}),Object(G.jsx)(j.a,{container:!0,spacing:1,children:Object(G.jsxs)(v.Suspense,{fallback:Object(G.jsx)(j.a,{item:!0,xs:12,children:Object(G.jsx)(x.a,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:500}})}),children:[!ke&&Object(G.jsx)(j.a,{item:!0,xs:6,md:4,lg:4,xl:3,children:Object(G.jsxs)(g.a,{sx:{height:"100%",width:"100%",minHeight:300,display:"flex",flexDirection:"column"},children:[Object(G.jsx)(p.a,{children:Object(G.jsx)(O.a,{sx:{textAlign:"center"},children:"Add New Weapon"})}),Object(G.jsx)(I.a,{show:U,onHide:function(){return q(!1)},onSelect:oe}),Object(G.jsx)(u.a,{sx:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(G.jsx)(h.a,{onClick:function(){return q(!0)},sx:{borderRadius:"1em"},children:Object(G.jsx)(O.a,{variant:"h1",children:Object(G.jsx)(l.a,{icon:s.u,className:"fa-fw"})})})})]})}),fe.map((function(e){return Object(G.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:3,children:Object(G.jsx)(E.a,{weaponId:e,onDelete:re,onEdit:ie,canEquip:!0})},e)}))]})})]})}},282:function(e,t,n){"use strict";var a=n(10),c=n(479),r=Object(a.a)(c.a)((function(e){return{backgroundColor:e.theme.palette.contentLight.main}}));t.a=r},284:function(e,t,n){"use strict";var a=n(10),c=n(479),r=Object(a.a)(c.a)((function(e){return{backgroundColor:e.theme.palette.contentDark.main}}));t.a=r},285:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(5),c=n(3),r=n(65),i=n(1002),o=n(278),s=n(177),l=n(975),u=n(0),j=n(1);function d(e){var t=e.title,n=e.children,d=e.id,b=void 0===d?"dropdownbtn":d,O=Object(r.a)(e,["title","children","id"]),x=Object(u.useState)(null),p=Object(c.a)(x,2),h=p[0],f=p[1],v=Boolean(h),m=Object(u.useCallback)((function(e){return f(e.currentTarget)}),[f]),g=Object(u.useCallback)((function(){return f(null)}),[f]);return Object(j.jsxs)(u.Suspense,{fallback:Object(j.jsx)(o.a,Object(a.a)(Object(a.a)({endIcon:Object(j.jsx)(i.a,{})},O),{},{children:Object(j.jsx)(s.a,{width:50})})),children:[Object(j.jsx)(o.a,Object(a.a)(Object(a.a)({},O),{},{id:b,"aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":v?"true":void 0,onClick:m,endIcon:Object(j.jsx)(i.a,{}),children:t})),Object(j.jsx)(l.a,{id:"basic-menu",anchorEl:h,open:v,onClose:g,MenuListProps:{"aria-labelledby":b},onClick:g,children:Object(j.jsx)(u.Suspense,{fallback:Object(j.jsx)(s.a,{width:"100%",height:"1000"}),children:n})})]})}},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(11),c=n(51),r=n(17),i=n(80),o=n(1),s=function(){return Object(o.jsx)(r.a,{icon:c.A})},l=function(e){var t=e.stars,n=e.colored,c=void 0!==n&&n;return Object(o.jsx)(i.a,{color:c?"warning.main":void 0,component:"span",children:t?Object(a.a)(Array(t).keys()).map((function(e,t){return Object(o.jsx)(s,{},t)})):null})}},289:function(e,t,n){"use strict";var a={weaponTypes:{bow:n.p+"static/media/icon_bow.7ceaa8e2.png",catalyst:n.p+"static/media/icon_catalyst.db078b7b.png",claymore:n.p+"static/media/icon_claymore.63b1abb8.png",polearm:n.p+"static/media/icon_polearm.e5f4a2a1.png",sword:n.p+"static/media/icon_sword.619c9c2d.png"},resin:{fragile:n.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:n.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:n.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:n.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:n.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=a},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a,c=n(5),r=n(41),i=n(65),o=n(1e3),s=n(278),l=n(135),u=n(1);function j(e){var t=e.large,n=void 0!==t&&t,j=Object(i.a)(e,["large"]),d=Object(l.a)("ui").t;return n?Object(u.jsx)(s.a,Object(c.a)(Object(c.a)({color:"error",startIcon:Object(u.jsx)(o.a,{})},j),{},{children:d(a||(a=Object(r.a)(["close"])))})):Object(u.jsx)(s.a,Object(c.a)(Object(c.a)({color:"error",sx:{p:1,minWidth:0}},j),{},{children:Object(u.jsx)(o.a,{})}))}},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(5),c=n(65),r=n(10),i=n(268),o=n(280),s=n(480),l=n(177),u=n(0),j=n(282),d=n(1),b=Object(r.a)(i.a)((function(e){var t=e.theme;return{overflow:"scroll",paddingTop:t.spacing(2),paddingBottom:t.spacing(2)}})),O=Object(r.a)(o.a)((function(e){e.theme;return{padding:0,minHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"center",pointerEvents:"none","& > *":{pointerEvents:"auto"}}}));function x(e){var t=e.children,n=e.containerProps,r=Object(c.a)(e,["children","containerProps"]);return Object(d.jsx)(b,Object(a.a)(Object(a.a)({},r),{},{children:Object(d.jsx)(O,Object(a.a)(Object(a.a)({},n),{},{children:Object(d.jsx)(u.Suspense,{fallback:Object(d.jsx)(j.a,{children:Object(d.jsx)(s.a,{children:Object(d.jsx)(l.a,{variant:"rectangular",width:"100%",height:300})})}),children:t})}))}))}},292:function(e,t,n){"use strict";n.d(t,"b",(function(){return k})),n.d(t,"a",(function(){return C}));var a,c,r,i,o=n(5),s=n(41),l=n(65),u=n(368),j=n(369),d=n(1026),b=n(259),O=n(80),x=n(260),p=n(0),h=n(135),f=n(140),v=n(179),m=n(137),g=n(285),y=n(308),w=n(1);function k(e){var t,n=e.value,k=e.onChange,I=e.unSelectText,T=e.unSelectIcon,W=e.inventory,S=void 0!==W&&W,_=e.noUnselect,A=void 0!==_&&_,N=e.filter,M=void 0===N?function(){return!0}:N,D=Object(l.a)(e,["value","onChange","unSelectText","unSelectIcon","inventory","noUnselect","filter"]),E=Object(h.a)("ui").t,z=Object(p.useContext)(v.b),B=Object(m.a)(f.b.getAll(),[]),G=Object(m.a)(f.b.get(n),[n]),K=z._getCharKeys().filter((function(e){return(null===B||void 0===B?void 0:B[e])&&M(B[e],e)})).sort();return Object(w.jsxs)(g.a,Object(o.a)(Object(o.a)({},D),{},{title:null!==(t=null===G||void 0===G?void 0:G.name)&&void 0!==t?t:S?E(a||(a=Object(s.a)(["inventory"]))):null!==I&&void 0!==I?I:E(c||(c=Object(s.a)(["unselect"]))),color:n?"success":"primary",startIcon:(null===G||void 0===G?void 0:G.thumbImg)?Object(w.jsx)(y.a,{src:G.thumbImgSide}):S?Object(w.jsx)(u.a,{}):null!==T&&void 0!==T?T:Object(w.jsx)(j.a,{}),children:[!A&&(S?Object(w.jsxs)(d.a,{onClick:function(){return k("")},selected:""===n,disabled:""===n,children:[Object(w.jsx)(b.a,{children:Object(w.jsx)(u.a,{})}),Object(w.jsx)(O.a,{variant:"inherit",noWrap:!0,children:E(r||(r=Object(s.a)(["inventory"])))})]}):Object(w.jsxs)(d.a,{onClick:function(){return k("")},selected:""===n,disabled:""===n,children:[Object(w.jsx)(b.a,{children:Object(w.jsx)(j.a,{})}),Object(w.jsx)(O.a,{variant:"inherit",noWrap:!0,children:E(i||(i=Object(s.a)(["unselect"])))})]})),!A&&Object(w.jsx)(x.a,{},"div"),!!B&&C(B,K,k,n)]}))}function C(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return t.map((function(t){var c;return Object(w.jsxs)(d.a,{onClick:function(){return n(t)},selected:a===t,disabled:a===t,children:[Object(w.jsx)(b.a,{children:Object(w.jsx)(y.a,{src:e[t].thumbImgSide})}),Object(w.jsx)(O.a,{variant:"inherit",noWrap:!0,children:null===e||void 0===e||null===(c=e[t])||void 0===c?void 0:c.name})]},t)}))}},299:function(e,t,n){"use strict";var a=n(10),c=n(1022),r=Object(a.a)(c.a,{shouldForwardProp:function(e){return"baseColor"!==e&&"selectedColor"!==e}})((function(e){var t=e.theme,n=e.baseColor,a=void 0===n?"primary":n,c=e.selectedColor,r=void 0===c?"success":c;return{"& .MuiToggleButtonGroup-grouped":{"&":{backgroundColor:t.palette[a].main,color:t.palette[a].contrastText},"&:hover":{backgroundColor:t.palette[a].dark},"&.Mui-selected":{backgroundColor:t.palette[r].main,color:t.palette[r].contrastText},"&.Mui-selected:hover":{backgroundColor:t.palette[r].dark},"&.Mui-disabled":{backgroundColor:t.palette[a].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:t.palette[r].dark}}}}));t.a=r},302:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(3),c=n(0);function r(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],r=t[1];return[n,Object(c.useCallback)((function(){return r({})}),[])]}},304:function(e,t,n){"use strict";function a(e){var t=e.condition,n=e.wrapper,a=e.falseWrapper,c=e.children;return t?n(c):a?a(c):c}n.d(t,"a",(function(){return a}))},308:function(e,t,n){"use strict";var a=n(367),c=Object(a.a)("img")((function(e){var t=e.theme;return{display:"inline-block",width:"auto",height:"2.3em",lineHeight:1,verticalAlign:"text-bottom",marginTop:t.spacing(-3),marginLeft:t.spacing(-1.25),marginRight:t.spacing(-1),marginBottom:t.spacing(-1)}}));t.a=c},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a,c=n(41),r=n(368),i=n(80),o=n(135),s=n(140),l=n(137),u=n(1);function j(e){var t=e.location,n=Object(o.a)("ui").t,j=Object(l.a)(s.b.get(null!==t&&void 0!==t?t:""),[t]);return Object(u.jsx)(i.a,{component:"span",children:(null===j||void 0===j?void 0:j.name)?j.nameWIthIcon:Object(u.jsxs)("span",{children:[Object(u.jsx)(r.a,{sx:{verticalAlign:"text-bottom"}})," ",n(a||(a=Object(c.a)(["inventory"])))]})})}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(5),c=n(65),r=n(1027),i=n(0),o=n(289),s=n(16),l=n(71),u=n(299),j=n(1);function d(e){var t=e.value,n=e.onChange,d=Object(c.a)(e,["value","onChange"]),b=Object(i.useCallback)((function(e,t){return n(t||"")}),[n]);return Object(j.jsx)(u.a,Object(a.a)(Object(a.a)({exclusive:!0,onChange:b,value:t||s.k},d),{},{children:s.k.map((function(e){var t;return Object(j.jsx)(r.a,{value:e,children:Object(j.jsx)(l.a,{src:null===(t=o.a.weaponTypes)||void 0===t?void 0:t[e],size:2})},e)}))}))}},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(3),c=n(0),r=n(179);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useContext)(r.b),n=Object(c.useState)(t._getWeapon(e)),i=Object(a.a)(n,2),o=i[0],s=i[1];return Object(c.useEffect)((function(){return s(t._getWeapon(e))}),[t,e]),Object(c.useEffect)((function(){return e?t.followWeapon(e,s):void 0}),[e,s,t]),o}},319:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var a=n(3);function c(e,t,n){function a(e,t,n,a){var c=a.getValue(e),r=a.getValue(t);return(n?-1:1)*("string"===typeof c&&"string"===typeof r?c.localeCompare(r):r-c)}return function(c,r){if(!n[e])return 0;var i=n[e],o=a(c,r,t,i);return!o&&i.tieBreaker&&n[i.tieBreaker]&&(o=a(c,r,t,n[i.tieBreaker])),o}}function r(e,t){return function(n){return Object.entries(e).every((function(e){var c=Object(a.a)(e,2),r=c[0],i=c[1];return t[r](n,i)}))}}},320:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(5),c=n(65),r=n(51),i=n(17),o=n(976),s=n(1026),l=n(278),u=n(135),j=n(97),d=n(285),b=n(1);function O(e){var t=e.sortKeys,n=e.value,O=e.onChange,x=e.ascending,p=e.onChangeAsc,h=Object(c.a)(e,["sortKeys","value","onChange","ascending","onChangeAsc"]),f=Object(u.a)("ui").t;return Object(b.jsxs)(o.a,Object(a.a)(Object(a.a)({},h),{},{children:[Object(b.jsx)(d.a,{title:Object(b.jsxs)(j.a,{t:f,i18nKey:"sortByFormat",value:f("sortMap.".concat(n)),children:["Sort By: ",{value:f("sortMap.".concat(n))}]}),children:t.map((function(e){return Object(b.jsx)(s.a,{selected:n===e,disabled:n===e,onClick:function(){return O(e)},children:f("sortMap.".concat(e))},e)}))}),Object(b.jsx)(l.a,{onClick:function(){return p(!x)},startIcon:Object(b.jsx)(i.a,{icon:x?r.x:r.y,className:"fa-fw"}),children:x?Object(b.jsx)(j.a,{t:f,i18nKey:"ascending",children:"Ascending"}):Object(b.jsx)(j.a,{t:f,i18nKey:"descending",children:"Descending"})})]}))}},330:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(11),c=n(3),r=n(480),i=n(272),o=n(260),s=n(409),l=n(222),u=n(80),j=n(0),d=n(289),b=n(137),O=n(16),x=n(142),p=n(284),h=n(282),f=n(290),v=n(71),m=n(291),g=n(287),y=n(311),w=n(1);function k(e){var t=e.show,n=e.onHide,k=e.onSelect,C=e.filter,I=void 0===C?function(){return!0}:C,T=e.weaponFilter,W=Object(b.a)(x.a.getAll(),[]),S=Object(j.useState)(null!==T&&void 0!==T?T:""),_=Object(c.a)(S,2),A=_[0],N=_[1];Object(j.useEffect)((function(){return T&&N(T)}),[T]);var M=W?Object(a.a)(new Set(O.j)).filter((function(e){return I(W[e])})).filter((function(e){var t;return!A||A===(null===W||void 0===W||null===(t=W[e])||void 0===t?void 0:t.weaponType)})).sort((function(e,t){var n,a,c,r;return(null!==(n=null===W||void 0===W||null===(a=W[t])||void 0===a?void 0:a.rarity)&&void 0!==n?n:0)-(null!==(c=null===W||void 0===W||null===(r=W[e])||void 0===r?void 0:r.rarity)&&void 0!==c?c:0)})):[];return W?Object(w.jsx)(m.a,{open:t,onClose:n,children:Object(w.jsxs)(p.a,{children:[Object(w.jsx)(r.a,{sx:{py:1},children:Object(w.jsxs)(i.a,{container:!0,children:[Object(w.jsx)(i.a,{item:!0,flexGrow:1,children:Object(w.jsx)(y.a,{value:A,onChange:N,disabled:!!T,size:"small"})}),Object(w.jsx)(i.a,{item:!0,children:Object(w.jsx)(f.a,{onClick:n})})]})}),Object(w.jsx)(o.a,{}),Object(w.jsx)(r.a,{children:Object(w.jsx)(i.a,{container:!0,spacing:1,children:M.map((function(e){var t,a=W[e];return Object(w.jsx)(i.a,{item:!0,lg:3,md:4,children:Object(w.jsx)(h.a,{sx:{height:"100%"},children:Object(w.jsxs)(s.a,{onClick:function(){n(),k(e)},sx:{display:"flex"},children:[Object(w.jsx)(l.a,{component:"img",src:a.img,sx:{width:100,height:"auto"},className:" grad-".concat(a.rarity,"star")}),Object(w.jsxs)(l.a,{sx:{flexGrow:1,px:1},children:[Object(w.jsx)(u.a,{variant:"subtitle1",children:a.name}),Object(w.jsxs)(u.a,{children:[Object(w.jsx)(v.a,{src:null===(t=d.a.weaponTypes)||void 0===t?void 0:t[a.weaponType]})," ",Object(w.jsx)(g.a,{stars:a.rarity,colored:!0})]})]})]})})},e)}))})}),Object(w.jsx)(o.a,{}),Object(w.jsx)(r.a,{sx:{py:1},children:Object(w.jsx)(f.a,{large:!0,onClick:n})})]})}):null}},331:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n(3),c=n(51),r=n(17),i=n(386),o=n(387),s=n(409),l=n(177),u=n(360),j=n(279),d=n(272),b=n(80),O=n(222),x=n(480),p=n(976),h=n(278),f=n(0),v=n(289),m=n(282),g=n(292),y=n(309),w=n(304),k=n(71),C=n(287),I=n(139),T=n(46),W=n(179),S=n(137),_=n(315),A=n(22),N=n(142),M=n(1);function D(e){var t,n=e.weaponId,D=e.onClick,E=e.onEdit,z=e.onDelete,B=e.canEquip,G=void 0!==B&&B,K=Object(f.useContext)(W.b),P=Object(_.a)(n),H=Object(S.a)((null===P||void 0===P?void 0:P.key)&&N.a.get(P.key),[null===P||void 0===P?void 0:P.key]),L=Object(f.useCallback)((function(e){return e.weaponTypeKey===(null===H||void 0===H?void 0:H.weaponType)}),[H]),R=Object(f.useCallback)((function(e){return Object(M.jsx)(s.a,{onClick:function(){return null===D||void 0===D?void 0:D(n)},sx:{height:"100%"},children:e})}),[D,n]),V=Object(f.useCallback)((function(e){return K.setWeaponLocation(n,e)}),[K,n]);if(!P||!H)return null;var F=P.level,U=P.ascension,q=P.refinement,J=P.id,Q=P.location,X=void 0===Q?"":Q,Y=P.lock,Z=H.weaponType,$=H.getMainStatValue(F,U).toFixed(A.b.fixedUnit("atk")),ee=H.getSubStatKey(),te=H.getSubStatValue(F,U).toFixed(A.b.fixedUnit(ee)),ne=[["weaponATK",$]];(null===H||void 0===H?void 0:H.passiveName)&&ne.push([ee,te]);var ae=U<2?null===H||void 0===H?void 0:H.img:null===H||void 0===H?void 0:H.imgAwaken;return Object(M.jsx)(f.Suspense,{fallback:Object(M.jsx)(l.a,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:Object(M.jsx)(w.a,{condition:!!D,wrapper:R,children:Object(M.jsxs)(m.a,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(M.jsxs)("div",{className:"grad-".concat(H.rarity,"star"),children:[Object(M.jsx)(u.a,{title:H.name,avatar:Object(M.jsx)(k.a,{sx:{fontSize:"2em"},src:null===(t=v.a.weaponTypes)||void 0===t?void 0:t[Z]}),titleTypographyProps:{variant:"h6"},action:!D&&Object(M.jsx)(j.a,{color:"primary",onClick:function(){return K.updateWeapon({lock:!Y},J)},children:Y?Object(M.jsx)(i.a,{}):Object(M.jsx)(o.a,{})})}),Object(M.jsxs)(d.a,{container:!0,sx:{flexWrap:"nowrap",pl:2},children:[Object(M.jsxs)(d.a,{item:!0,flexGrow:1,children:[Object(M.jsxs)(b.a,{component:"span",variant:"h4",children:["Lv. ",F]}),Object(M.jsxs)(b.a,{component:"span",variant:"h4",color:"text.secondary",children:["/",T.b[U]]}),Object(M.jsxs)(b.a,{variant:"h6",children:["Refinement ",Object(M.jsx)("strong",{children:q})]}),Object(M.jsx)(b.a,{children:Object(M.jsx)(C.a,{stars:H.rarity,colored:!0})})]}),Object(M.jsx)(d.a,{item:!0,container:!0,maxWidth:"40%",alignContent:"flex-end",sx:{mt:-3},children:Object(M.jsx)(O.a,{component:"img",src:ae,width:"100%",height:"auto"})})]})]}),Object(M.jsx)(x.a,{children:ne.map((function(e){var t=Object(a.a)(e,2),n=t[0],c=t[1],r=A.b.getStatUnit(n);return Object(M.jsxs)(O.a,{sx:{display:"flex"},children:[Object(M.jsxs)(b.a,{flexGrow:1,children:[I.a[n]," ",A.b.getStatName(n)]}),Object(M.jsx)(b.a,{children:c+r})]},n)}))}),Object(M.jsx)(O.a,{flexGrow:1}),Object(M.jsx)(x.a,{sx:{py:1},children:Object(M.jsxs)(d.a,{container:!0,sx:{flexWrap:"nowrap"},children:[Object(M.jsx)(d.a,{item:!0,xs:"auto",flexShrink:1,children:G?Object(M.jsx)(g.b,{size:"small",noUnselect:!0,inventory:!0,value:X,onChange:V,filter:L}):Object(M.jsx)(y.a,{location:X})}),Object(M.jsx)(d.a,{item:!0,flexGrow:1,sx:{mr:1}}),Object(M.jsx)(d.a,{item:!0,xs:"auto",children:Object(M.jsxs)(p.a,{sx:{height:"100%"},children:[!!E&&Object(M.jsx)(h.a,{color:"info",size:"small",onClick:function(){return E(J)},children:Object(M.jsx)(r.a,{icon:c.m,className:"fa-fw"})}),!!z&&Object(M.jsx)(h.a,{color:"error",size:"small",onClick:function(){return z(J)},disabled:!!X||Y,children:Object(M.jsx)(r.a,{icon:c.D,className:"fa-fw"})})]})})]})})]})})})}}}]);
//# sourceMappingURL=18.2c8f0b2e.chunk.js.map