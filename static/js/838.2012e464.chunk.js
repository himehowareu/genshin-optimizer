"use strict";(self.webpackChunkgenshin_optimizer=self.webpackChunkgenshin_optimizer||[]).push([[838],{40020:function(e,n,t){t.d(n,{Z:function(){return d}});var r,i=t(30168),l=t(63204),a=t(20890),o=t(22020),c=t(947),s=t(42320),u=t(80184);function d(e){var n=e.location,t=(0,o.$)("ui").t,d=(0,s.Z)(c.ZP.get(null!==n&&void 0!==n?n:""),[n]);return(0,u.jsx)(a.Z,{component:"span",children:null!==d&&void 0!==d&&d.name?d.nameWIthIcon:(0,u.jsxs)("span",{children:[(0,u.jsx)(l.Z,{sx:{verticalAlign:"text-bottom"}})," ",t(r||(r=(0,i.Z)(["inventory"])))]})})}},72838:function(e,n,t){t.d(n,{Z:function(){return B},N:function(){return H}});var r,i,l,a=t(30168),o=t(53174),c=t(54483),s=t(40117),u=t(62002),d=t(20890),f=t(47047),x=t(39504),h=t(68870),v=t(81918),Z=t(13400),j=t(61889),m=t(42169),p=t(72363),y=t(2199),g=t(24518),b=t(18455),k=t(72791),w=t(22020),S=t(95614),P=t(96106),G=t(71310),E=t(36944),M=t(40020),A=t(91702),N=t(25617),C=t(10157),O=t(75545),z=t(19272),_=t(31148),D=t(3997),F=t(79406),I=t(63372),K=t(42320),R=t(50765),V=t(60393),W=t(46797),q=t(44217),L=t(80184),U=new Set(R.L);function B(e){var n,t,R,V,B=e.artifactId,H=e.artifactObj,Q=e.onEdit,T=e.onDelete,X=e.mainStatAssumptionLevel,J=void 0===X?0:X,Y=e.effFilter,ee=void 0===Y?U:Y,ne=e.probabilityFilter,te=(0,w.$)(["artifact"]).t,re=(0,k.useContext)(D.t).database,ie=(0,I.Z)(B),le=(0,K.Z)(_.y.get(null===(n=null!==H&&void 0!==H?H:ie)||void 0===n?void 0:n.setKey),[H,ie]),ae=!H,oe=null!==H&&void 0!==H?H:ie;if(!oe)return null;var ce=oe.id,se=oe.lock,ue=oe.slotKey,de=oe.rarity,fe=oe.level,xe=oe.mainStatKey,he=oe.substats,ve=oe.exclude,Ze=oe.location,je=void 0===Ze?"":Ze,me=Math.max(Math.min(J,4*de),fe),pe=F.ZP.unit(xe),ye="roll"+(Math.floor(Math.max(fe,0)/4)+1),ge=z.Z.getArtifactEfficiency(oe,ee),be=ge.currentEfficiency,ke=ge.maxEfficiency,we=0!==ke,Se=(null===le||void 0===le?void 0:le.getSlotName(ue))||"Unknown Piece Name",Pe=null===le||void 0===le?void 0:le.getSlotDesc(ue),Ge=Pe&&(0,L.jsx)(P.Z,{placement:"top",title:(0,L.jsx)(d.Z,{children:Pe}),children:(0,L.jsx)("span",{children:(0,L.jsx)(c.G,{icon:o.sqG})})}),Ee=null===le||void 0===le?void 0:le.setEffects,Me=le&&Ee&&(0,L.jsx)(P.Z,{placement:"top",title:(0,L.jsx)("span",{children:Object.keys(Ee).map((function(e){return(0,L.jsxs)("span",{children:[(0,L.jsx)(d.Z,{variant:"h6",children:(0,L.jsx)(N.Z,{color:"success",children:te("setEffectNum",{setNum:e})})}),(0,L.jsx)(d.Z,{children:le.setEffectDesc(e)})]},e)}))}),children:(0,L.jsx)("span",{children:(0,L.jsx)(c.G,{icon:o.sqG})})});return(0,L.jsx)(k.Suspense,{fallback:(0,L.jsx)(f.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:350}}),children:(0,L.jsxs)(G.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,L.jsxs)(x.Z,{className:"grad-".concat(de,"star"),sx:{pt:1,pb:0,pr:0},children:[(0,L.jsxs)(h.Z,{component:"div",sx:{display:"flex",alignItems:"center",pr:1},children:[(0,L.jsx)(v.Z,{size:"small",label:(0,L.jsx)("strong",{children:" +".concat(fe)}),color:ye}),(0,L.jsxs)(d.Z,{sx:{pl:1,flexGrow:1},children:[Se," ",Ge]}),(0,L.jsx)(Z.Z,{color:"primary",disabled:!ae,onClick:function(){return re.updateArt({lock:!se},ce)},children:se?(0,L.jsx)(s.Z,{}):(0,L.jsx)(u.Z,{})})]}),(0,L.jsxs)(j.ZP,{container:!0,sx:{flexWrap:"nowrap"},children:[(0,L.jsxs)(j.ZP,{item:!0,flexGrow:1,children:[(0,L.jsx)(d.Z,{color:"text.secondary",variant:"body2",children:(0,L.jsx)(S.ZP,{slotKey:ue})}),(0,L.jsx)(d.Z,{variant:"h6",color:"".concat(F.ZP.getVariant(xe),".main"),children:(0,L.jsxs)("span",{children:[O.Z[xe]," ",F.ZP.get(xe)]})}),(0,L.jsx)(d.Z,{variant:"h5",children:(0,L.jsx)("strong",{children:(0,L.jsxs)(A.Z,{color:me!==fe?"warning":void 0,children:[(0,F.qs)(null!==(t=z.Z.mainStatValue(xe,de,me))&&void 0!==t?t:0,F.ZP.unit(xe)),pe]})})}),(0,L.jsx)(C.t,{stars:de,colored:!0})]}),(0,L.jsx)(j.ZP,{item:!0,maxWidth:"40%",sx:{mt:-3,mb:-1,pl:-2},alignSelf:"flex-end",children:(0,L.jsx)(m.Z,{component:"img",image:null!==(R=null===le||void 0===le?void 0:le.slotIcons[ue])&&void 0!==R?R:"",width:"100%",height:"auto"})})]})]}),(0,L.jsxs)(x.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column",pt:1,pb:0},children:[he.map((function(e){return(0,L.jsx)($,{stat:e,effFilter:ee,rarity:de},e.key)})),(0,L.jsxs)(h.Z,{sx:{display:"flex",my:1},children:[(0,L.jsx)(d.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:te(r||(r=(0,a.Z)(["editor.curSubEff"])))}),(0,L.jsx)(W.Z,{value:be,max:900,valid:we})]}),be!==ke&&(0,L.jsxs)(h.Z,{sx:{display:"flex",mb:1},children:[(0,L.jsx)(d.Z,{color:"text.secondary",component:"span",variant:"caption",sx:{flexGrow:1},children:te(i||(i=(0,a.Z)(["editor.maxSubEff"])))}),(0,L.jsx)(W.Z,{value:ke,max:900,valid:we})]}),(0,L.jsx)(h.Z,{flexGrow:1}),ne&&(0,L.jsxs)("strong",{children:["Probability: ",(100*(0,q.B)(oe,ne)).toFixed(2),"%"]}),(0,L.jsxs)(d.Z,{color:"success.main",children:[null!==(V=null===le||void 0===le?void 0:le.name)&&void 0!==V?V:"Artifact Set"," ",Me]})]}),(0,L.jsx)(p.Z,{children:(0,L.jsxs)(j.ZP,{container:!0,sx:{flexWrap:"nowrap"},children:[(0,L.jsx)(j.ZP,{item:!0,xs:"auto",flexShrink:1,children:ae?(0,L.jsx)(E.Z,{size:"small",inventory:!0,value:je,onChange:function(e){return re.setArtLocation(B,e)}}):(0,L.jsx)(M.Z,{location:je})}),(0,L.jsx)(j.ZP,{item:!0,flexGrow:1,sx:{mr:1}}),ae&&(0,L.jsx)(j.ZP,{item:!0,xs:"auto",children:(0,L.jsxs)(y.Z,{sx:{height:"100%"},children:[!!Q&&(0,L.jsx)(g.Z,{color:"info",onClick:function(){return Q(ce)},size:"small",children:(0,L.jsx)(c.G,{icon:o.Xcf,className:"fa-fw"})}),(0,L.jsx)(b.Z,{title:(0,L.jsx)(d.Z,{children:te(l||(l=(0,a.Z)(["excludeArtifactTip"])))}),placement:"top",arrow:!0,children:(0,L.jsx)(g.Z,{onClick:function(){return re.updateArt({exclude:!ve},ce)},color:ve?"error":"success",size:"small",children:(0,L.jsx)(c.G,{icon:ve?o.gPx:o.Stf,className:"fa-fw"})})}),!!T&&(0,L.jsx)(g.Z,{color:"error",size:"small",onClick:function(){return T(ce)},disabled:se,children:(0,L.jsx)(c.G,{icon:o.I7k,className:"fa-fw"})})]})})]})})]})})}function $(e){var n,t,r,i=e.stat,l=e.effFilter,a=e.rarity;if(!i.value)return null;var o=null!==(n=null===(t=i.rolls)||void 0===t?void 0:t.length)&&void 0!==n?n:0,c=i.key?z.Z.maxSubstatValues(i.key):0,s=i.key?z.Z.getSubstatRollData(i.key,a):[],u=7-s.length,f="roll".concat((0,V.uZ)(o,1,6)),x=null!==(r=i.efficiency)&&void 0!==r?r:0,v=(0,V.V2)(.5+x/500*.5),Z=F.ZP.getStr(i.key),j=F.ZP.unit(i.key),m=i.key&&l.has(i.key);return(0,L.jsxs)(h.Z,{display:"flex",gap:1,alignContent:"center",children:[(0,L.jsxs)(d.Z,{sx:{flexGrow:1},color:o?"".concat(f,".main"):"error.main",component:"span",children:[O.Z[i.key]," ",Z,"+".concat((0,F.qs)(i.value,F.ZP.unit(i.key))).concat(j)]}),m&&(0,L.jsx)(h.Z,{display:"flex",gap:.25,height:"90%",children:i.rolls.sort().map((function(e,n){return(0,L.jsx)(H,{value:100*e/c,color:"roll".concat((0,V.uZ)(u+s.indexOf(e),1,6),".main")},"".concat(n).concat(e))}))}),(0,L.jsx)(d.Z,{sx:{opacity:v,minWidth:40,textAlign:"right"},children:m?"".concat(x.toFixed(),"%"):"-"})]})}function H(e){var n=e.color,t=void 0===n?"red":n,r=e.value,i=void 0===r?50:r;return(0,L.jsx)(h.Z,{sx:{width:7,height:"100%",bgcolor:t,overflow:"hidden",borderRadius:1,display:"inline-block"},children:(0,L.jsx)(h.Z,{sx:{width:10,height:"".concat(100-(0,V.uZ)(i,0,100),"%"),bgcolor:"gray"}})})}},46797:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(29439),i=t(25617),l=t(60393),a=t(80184);function o(e){var n=e.value,t=e.max,o=void 0===t?1:t,c=e.valid,s="number"===typeof n?["roll".concat((0,l.uZ)(Math.floor(n/o*10)-4,1,6)),n.toFixed()+"%"]:["secondary",n],u=(0,r.Z)(s,2),d=u[0],f=u[1];return c||(d="error"),(0,a.jsx)(i.Z,{color:d,children:f})}},44217:function(e,n,t){t.d(n,{B:function(){return g}});var r=t(29439),i=t(37762),l=t(4942),a=t(1413),o=t(93433),c=t(60393),s=t(19272),u=t(12354),d=[3,4,6],f={hp:6,atk:6,def:6,hp_:4,atk_:4,def_:4,eleMas:4,enerRech_:4,critRate_:3,critDMG_:3},x={};function h(e,n,t,r){if(5!==e.length)for(var i=0,s=d;i<s.length;i++){var u=s[i];n[u]>0&&h([].concat((0,o.Z)(e),[u]),(0,a.Z)((0,a.Z)({},n),{},(0,l.Z)({},u,n[u]-u)),t-u,r*n[u]/t)}else(0,c.SR)(x,e,r)}h([0],{3:6,4:20,6:18},44,1),h([3],{3:3,4:20,6:18},41,1),h([4],{3:6,4:16,6:18},40,1),h([6],{3:6,4:20,6:12},38,1);for(var v=Array(6).fill(0).map((function(e,n){for(var t=[1],r=0,i=1;++r<=n;)i*=n-r+1,i/=r,t.push(i);return t})),Z=[[1]],j=function(){var e=Z[Z.length-1],n=Array(e.length+3).fill(0);e.forEach((function(e,t){for(var r=0,i=[0,1,2,3];r<i.length;r++){n[t+i[r]]+=e}})),Z.push(n.map((function(e){return e/4})))};Z.length<6;)j();for(var m=function(){var e=y[p],n=e.reduce((function(e,n){return e+n}));e.forEach((function(e,t,r){r[t]=n,n-=e}))},p=0,y=Z;p<y.length;p++)m();function g(e,n){if(e.rarity<=2)return NaN;var t=e.rarity,o=e.level,h=e.substats,j=(0,a.Z)({},n),m=new Set(Object.keys(j)),p=0,y=e.mainStatKey;if(y in j){var g=4*t;if(u[t][y][g]<j[y])return 0;delete j[y],m.delete(y)}var b,k=(0,i.Z)(h);try{for(k.s();!(b=k.n()).done;){var w=b.value,S=w.key,P=w.value;S?m.has(S)&&(m.delete(S),j[S]>P?j[S]-=P:delete j[S]):p+=1}}catch(F){k.e(F)}finally{k.f()}if(p+=4-h.length,m.size>p||Object.keys(j).length>4)return 0;for(var G=s.Z.rollsRemaining(o,t)-p,E=0,M=Object.entries(j);E<M.length;E++){var A=(0,r.Z)(M[E],2),N=A[0],C=A[1];j[N]=Math.max(Math.ceil(10*C/s.Z.maxSubstatValues(N,t)),1)}var O=0,z=Object.entries(j).map((function(e){var n=(0,r.Z)(e,2),t=n[0],i=n[1],l=m.has(t)?1:0,a=Math.ceil(i/10)-l;return O+=a,{target:i,filler:l,minUpgrade:a}})).reverse();if(O>G)return 0;var _=(0,l.Z)({},G,1),D=G-O;return z.forEach((function(e,n){for(var t,i,l,a=e.target,o=e.filler,c=e.minUpgrade,s={},u=c;u<=c+D;u++)for(var d=a-7*(u+o),f=d>0?Z[u+o][d]:1,x=0,h=Object.entries(_);x<h.length;x++){var j,m=(0,r.Z)(h[x],2),p=m[0],y=m[1],g=parseInt(p);if(!(g<u)){var b=(i=u,l=4-n,v[t=g][i]*Math.pow(l-1,t-i)/Math.pow(l,t)),k=g-u;s[k]=(null!==(j=s[k])&&void 0!==j?j:0)+y*f*b}}_=s})),function(e,n,t){var r,l,a=null!==(r=f[e])&&void 0!==r?r:0,o=0,s={3:2,4:5,6:3},u=x[a],h=(0,i.Z)(n);try{for(h.s();!(l=h.n()).done;){var Z=l.value.key;if(Z){var j=f[Z];u=u[j],s[j]-=1}}}catch(F){h.e(F)}finally{h.f()}a&&(s[a]-=1);var m,p={3:0,4:0,6:0},y=(0,i.Z)(t);try{for(y.s();!(m=y.n()).done;){var g=m.value;p[f[g]]+=1}}catch(F){y.e(F)}finally{y.f()}var b=0;(0,c.Q1)(u,[],(function(e){return"number"===typeof e}),(function(e,n){b+=e;var t,r={3:0,4:0,6:0},l=(0,i.Z)(n);try{for(l.s();!(t=l.n()).done;){r[t.value]+=1}}catch(F){l.e(F)}finally{l.f()}var a,c=e,s=(0,i.Z)(d);try{for(s.s();!(a=s.n()).done;){var u=a.value,f=r[u],x=p[u];if(f<x)return;c*=v[f][x]}}catch(F){s.e(F)}finally{s.f()}o+=c}));var k,w=(0,i.Z)(d);try{for(w.s();!(k=w.n()).done;){var S=k.value;o/=v[s[S]][p[S]]}}catch(F){w.e(F)}finally{w.f()}return o/b}(e.mainStatKey,h,m)*Object.values(_).reduce((function(e,n){return e+n}))}}}]);
//# sourceMappingURL=838.2012e464.chunk.js.map