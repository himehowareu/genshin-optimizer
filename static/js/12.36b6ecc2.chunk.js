(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[12],{125:function(e,t,n){"use strict";var c=n(1),s=n(2),a=n(4),i=n.n(a),r=n(0),l=n.n(r),j=n(5),o=n.n(j),b={label:i.a.string.isRequired,onClick:i.a.func},d=l.a.forwardRef((function(e,t){var n=e.label,a=e.onClick,i=e.className,r=Object(s.a)(e,["label","onClick","className"]);return l.a.createElement("button",Object(c.a)({ref:t,type:"button",className:o()("close",i),onClick:a},r),l.a.createElement("span",{"aria-hidden":"true"},"\xd7"),l.a.createElement("span",{className:"sr-only"},n))}));d.displayName="CloseButton",d.propTypes=b,d.defaultProps={label:"Close"},t.a=d},200:function(e,t,n){"use strict";var c=n(1),s=n(2),a=n(5),i=n.n(a),r=n(0),l=n.n(r),j=n(24),o=n(25),b=n(6),d=n(111),h=n(125),x=n(33),u=n(11),O=n(43),m=Object(x.a)("h4");m.displayName="DivStyledAsH4";var f=Object(u.a)("alert-heading",{Component:m}),p=Object(u.a)("alert-link",{Component:O.a}),v={show:!0,transition:d.a,closeLabel:"Close alert"},g=l.a.forwardRef((function(e,t){var n=Object(j.a)(e,{show:"onClose"}),a=n.bsPrefix,r=n.show,x=n.closeLabel,u=n.className,O=n.children,m=n.variant,f=n.onClose,p=n.dismissible,v=n.transition,g=Object(s.a)(n,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),N=Object(b.a)(a,"alert"),y=Object(o.a)((function(e){f&&f(!1,e)})),w=!0===v?d.a:v,k=l.a.createElement("div",Object(c.a)({role:"alert"},w?g:void 0,{ref:t,className:i()(u,N,m&&N+"-"+m,p&&N+"-dismissible")}),p&&l.a.createElement(h.a,{onClick:y,label:x}),O);return w?l.a.createElement(w,Object(c.a)({unmountOnExit:!0},g,{ref:void 0,in:r}),k):r?k:null}));g.displayName="Alert",g.defaultProps=v,g.Link=p,g.Heading=f,t.a=g},218:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var c=n(82),s=n(83),a=n(90),i=n(102),r=n(101),l=n(3),j=n(85),o=n(23),b=n(0),d=n.n(b),h=n(55),x=n(31),u=n(166),O=n(39),m=n(30),f=n(167),p=n(97),v=n(207),g=n(140),N=n(162),y=n(200),w=n(119),k=n(106),C=n(84);function T(e){var t=function(e){var t=e%1e3,n=Math.floor(e/1e3%60),c=Math.floor(e/6e4%60);return{hours:Math.floor(e/36e5),minutes:c,seconds:n,milliseconds:t}}(e),n=t.hours,c=t.minutes,s=t.seconds,a="Minutes";return n&&(a="Hours"),"".concat(n?"".concat(n,":"):"").concat(Object(C.k)(c,"0",2),":").concat(Object(C.k)(s,"0",2)," ").concat(a)}var E=1e3,M=36e5;function D(e){return Object(l.jsxs)(h.a,{className:"mb-2",children:[Object(l.jsx)(B,{}),Object(l.jsx)(I,{}),Object(l.jsx)(A,{})]})}var R=160,S=48e4,I=function(e){Object(i.a)(n,e);var t=Object(r.a)(n);function n(e){var c;Object(s.a)(this,n),(c=t.call(this,e)).setResin=function(e){return c.setState((function(t){var n={resin:e=parseInt(e)||0};return e>=R?(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=0,t.resin<R&&(n.date=(new Date).getTime())):(c.resinIncrement&&clearTimeout(c.resinIncrement),c.resinIncrement=setInterval((function(){return c.setResin(c.state.resin+1)}),S),n.date=(new Date).getTime()),n}))};var a=Object(C.i)("resinInfo");c.state=a||{resin:100,date:(new Date).getTime()};var i=c.state,r=i.resin,l=i.date;if(r<R&&Date.now()-l>S){var j=R-r,o=Math.min(Math.floor((Date.now()-l)/S),j);r+=o,l+=o*S,c.state.resin=r,c.state.date=l}return c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.resin,c=t.date;if(n<R){var s=c+S-new Date;this.resinIncrement=setTimeout((function(){e.setResin(e.state.resin+1)}),s)}this.updateTimer=setInterval((function(){return e.forceUpdate()}),E)}},{key:"componentWillUnmount",value:function(){this.updateTimer&&clearInterval(this.updateTimer),this.resinIncrement&&clearTimeout(this.resinIncrement)}},{key:"componentDidUpdate",value:function(){var e=Object(C.e)(this.state);Object(C.j)("resinInfo",e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.resin,c=t.date,s=n>=R?c:c+S,a=new Date(n>=R?c:c+(R-n)*S),i=T(Math.abs(s-Date.now()));return Object(l.jsxs)(x.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(l.jsxs)(x.a.Header,{children:[Object(l.jsx)(u.a,{src:w.a.resin.fragile,className:"thumb-small d-inline my-n1 ml-n2"}),Object(l.jsx)("span",{children:"Resin Counter"})]}),Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{xs:"auto",className:"px-3",children:Object(l.jsxs)("span",{style:{fontSize:"4em"},children:[Object(l.jsx)(u.a,{src:w.a.resin.fragile,className:"d-inline w-auto mt-n3 ml-n3 mr-n4",style:{height:"1.5em"}}),Object(l.jsx)("input",{type:"number",className:"invisible-input hide-appearance text-white mb-0 text-right",size:"4",value:n,min:0,max:999,style:{width:"2.1em"},onChange:function(t){return e.setResin(t.target.value)}}),"/",R]})}),Object(l.jsxs)(m.a,{children:[Object(l.jsxs)(f.a,{className:"w-100 d-flex mb-2",children:[Object(l.jsx)(p.a,{onClick:function(){return e.setResin(0)},disabled:0===n,children:"0"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-1)},disabled:0===n,children:"-1"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-20)},disabled:n<20,children:"-20"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-40)},disabled:n<40,children:"-40"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n-60)},disabled:n<60,children:"-60"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n+1)},children:"+1"}),Object(l.jsx)(p.a,{onClick:function(){return e.setResin(n+60)},children:"+60"}),Object(l.jsxs)(p.a,{onClick:function(){return e.setResin(R)},disabled:n===R,children:["MAX ",R]})]}),Object(l.jsx)("h5",{children:n<R?Object(l.jsxs)("span",{children:["Next resin in ",i,", full Resin at ",a.toLocaleTimeString()," ",a.toLocaleDateString()]}):Object(l.jsxs)("span",{children:["Resin has been full for at least ",i,", since ",a.toLocaleTimeString()," ",a.toLocaleDateString()]})})]}),Object(l.jsx)("small",{children:"Because we do not provide a mechanism to synchronize resin time, actual resin recharge time might be as much as 8 minutes earlier than predicted."})]})})]})}}]),n}(d.a.Component),_={America:-18e6,Europe:M,Asia:288e5,"TW, HK, MO":288e5};function B(e){var t=Object(b.useState)(Object.keys(_)[0]),n=Object(c.a)(t,2),s=n[0],a=n[1],i=Object(b.useState)(new Date(Date.now()+_[s])),r=Object(c.a)(i,2),d=r[0],h=r[1];Object(b.useEffect)((function(){return a(Object(C.i)("server_timezone")||Object.keys(_)[0])}),[]),Object(b.useEffect)((function(){var e=function t(){return h(new Date(Date.now()+_[s])),setTimeout((function(){e=t()}),E-Date.now()%E)}();return Object(C.j)("server_timezone",s),function(){return clearTimeout(e)}}),[s]);var u=new Date(d);u.getUTCHours()<4?u.setUTCHours(4,0,0,0):(u=new Date(u.getTime()+864e5)).setUTCHours(4,0,0,0);var f=u.getTime()-d.getTime(),p=T(f);return Object(l.jsxs)(x.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(l.jsx)(x.a.Header,{children:Object(l.jsxs)(O.a,{children:[Object(l.jsxs)(m.a,{xs:"auto",children:[Object(l.jsx)("h5",{className:"d-inline",children:Object(l.jsx)(o.a,{icon:j.c,className:"fa-fw mr-2"})}),Object(l.jsx)("span",{children:"Teyvat Time"})]}),Object(l.jsx)(m.a,{xs:"auto",children:Object(l.jsx)(v.a,{title:s,children:Object.keys(_).map((function(e){return Object(l.jsx)(g.a.Item,{onClick:function(){return a(e)},children:e},e)}))})})]})}),Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(O.a,{className:"d-flex justify-content-center",children:[Object(l.jsx)(m.a,{xs:"auto",className:"px-3",children:Object(l.jsx)("span",{style:{fontSize:"4em"},className:"d-block",children:d.toLocaleTimeString([],{timeZone:"UTC"})})}),Object(l.jsx)(m.a,{xs:"auto ",children:Object(l.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(l.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Server Date: ",Object(l.jsx)("b",{children:d.toDateString()})]}),Object(l.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Time until reset: ",Object(l.jsx)("b",{children:p})]}),Object(l.jsxs)("div",{xs:12,className:"flex-grow-1",children:["Resin until reset: ",Object(l.jsx)("b",{children:Math.floor(f/48e4)})]})]})})]})})]})}var P={advice:{name:"Wanderer's Advice",exp:1e3,cost:200,img:w.a.exp_books.advice},experience:{name:"Adventurer's Experience",exp:5e3,cost:1e3,img:w.a.exp_books.experience},wit:{name:"Hero's Wit",exp:2e4,cost:4e3,img:w.a.exp_books.wit}},H=[0,1e3,1325,1700,2150,2625,3150,3725,4350,5e3,5700,6450,7225,8050,8925,9825,10750,11725,12725,13775,14875,16800,18e3,19250,20550,21875,23250,24650,26100,27575,29100,30650,32250,33875,35550,37250,38975,40750,42575,44425,46300,50625,52700,54775,56900,59075,61275,63525,65800,68125,70475,76500,79050,81650,84275,86950,89650,92400,95175,98e3,100875,108950,112050,115175,118325,121525,124775,128075,131400,134775,138175,148700,152375,156075,159825,163600,167425,171300,175225,179175,183175,216225,243025,273100,306800,344600,386950,434425,487625,547200],L=[20,40,50,60,70,80,90];function A(e){var t=Object(b.useState)(0),n=Object(c.a)(t,2),s=n[0],a=n[1],i=Object(b.useState)(0),r=Object(c.a)(i,2),j=r[0],o=r[1],d=Object(b.useState)(0),h=Object(c.a)(d,2),v=h[0],g=h[1],w={advice:s,experience:j,wit:v},T={advice:a,experience:o,wit:g},E=Object(b.useState)(!1),M=Object(c.a)(E,2),D=M[0],R=M[1],S=Object(b.useState)(1),I=Object(c.a)(S,2),_=I[0],B=I[1],A=Object(b.useState)(0),U=Object(c.a)(A,2),V=U[0],X=U[1],q=Object(b.useState)(0),F=Object(c.a)(q,2),W=F[0],Y=F[1];Object(b.useEffect)((function(){return Y(Object(C.i)("mora")||0)}),[]),Object(b.useEffect)((function(){Object(C.j)("mora",W)}),[W]),Object(b.useEffect)((function(){return B(Object(C.i)("exp_calc_level")||1)}),[]),Object(b.useEffect)((function(){Object(C.j)("exp_calc_level",_)}),[_]),Object(b.useEffect)((function(){return X(Object(C.i)("exp_calc_cur_exp")||0)}),[]),Object(b.useEffect)((function(){Object(C.j)("exp_calc_cur_exp",V)}),[V]),Object(b.useEffect)((function(){var e=Object(C.i)("exp_books")||{},t={advice:a,experience:o,wit:g};Object.entries(e).forEach((function(e){var n,s=Object(c.a)(e,2),a=s[0],i=s[1];return null===(n=t[a])||void 0===n?void 0:n.call(t,i)}))}),[]),Object(b.useEffect)((function(){return Object(C.j)("exp_books",{advice:s,experience:j,wit:v})}),[s,j,v]);for(var J=L.find((function(e){return e>_})),K=-V,Z=_;Z<Math.min(J,H.length);Z++)K+=H[Z];for(var G=function(e,t,n,c,s){var a=s?Math.floor(c/1e3):Math.ceil(c/1e3),i=Math.min(Math.floor(a/20),e);a-=20*i;var r=Math.min(Math.floor(a/5),t);a-=5*r;var l=Math.min(a,n);if(a-=l,s||0===a)return[i,r,l];if(3===r&&i!==e)return[i+1,0,0];if(r!==t)return[i,r+1,0];if(i!==e)return[i+1,0,0];return null}(v,j,s,K,D)||[],Q=Object(c.a)(G,3),$=Q[0],ee=void 0===$?0:$,te=Q[1],ne=void 0===te?0:te,ce=Q[2],se=void 0===ce?0:ce,ae={advice:se,experience:ne,wit:ee},ie=2e4*ee+5e3*ne+1e3*se,re=ie/5,le=K-ie,je=W-re,oe=ie+V,be=_;be<Math.min(J,H.length)&&H[be]<=oe;be++)oe-=H[be];be===J&&(oe=0);var de="";return je<0?de=Object(l.jsxs)("span",{children:["You don't have enough ",Object(l.jsx)("b",{children:"Mora"})," for this operation."]}):0===G.length?de=Object(l.jsxs)("span",{children:["You don't have enough ",Object(l.jsx)("b",{children:"EXP. books"})," to level to the next milestone."]}):90===_&&(de="You are at the maximum level."),Object(l.jsxs)(x.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:[Object(l.jsx)(x.a.Header,{children:Object(l.jsxs)(O.a,{children:[Object(l.jsxs)(m.a,{xs:"auto",children:[Object(l.jsx)(u.a,{src:P.wit.img,className:"thumb-small d-inline my-n1 ml-n2"}),Object(l.jsx)("span",{children:"Experience Calculator"})]}),Object(l.jsx)(m.a,{children:Object(l.jsxs)(f.a,{children:[Object(l.jsx)(p.a,{variant:D?"primary":"success",disabled:!D,onClick:function(){return R(!1)},children:"Full Level"}),Object(l.jsx)(p.a,{variant:D?"success":"primary",disabled:D,onClick:function(){return R(!0)},children:"Don't fully level"})]})})]})}),Object(l.jsxs)(x.a.Body,{children:[Object(l.jsx)(O.a,{className:"mb-2",children:Object(l.jsxs)(m.a,{children:[Object(l.jsx)("span",{children:"This calcualtor tries to calculate the amount of exp books required to get to the next milestone level. "}),D?"It will try to get as close to the milestone level as possible, so you can grind the rest of the exp without any waste.":"It will try to calculate the amount of books needed to minize as much exp loss as possible."]})}),Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsxs)(N.a,{children:[Object(l.jsx)(N.a.Prepend,{children:Object(l.jsx)(N.a.Text,{children:"Current Level"})}),Object(l.jsx)(k.b,{value:_,onValueChange:function(e){return B(Object(C.a)(e,0,90))}})]})}),Object(l.jsx)(m.a,{xs:12,md:8,className:"mb-2",children:Object(l.jsxs)(N.a,{children:[Object(l.jsx)(N.a.Prepend,{children:Object(l.jsx)(N.a.Text,{children:"Current EXP."})}),Object(l.jsx)(k.b,{value:V,onValueChange:function(e){return X(Object(C.a)(e,0,(H[_]||1)-1))}}),Object(l.jsx)(N.a.Append,{children:Object(l.jsxs)(N.a.Text,{children:["/",H[_]||0]})})]})}),Object(l.jsx)(m.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(x.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Next Milestone: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{children:J})})]})})}),Object(l.jsx)(m.a,{xs:12,md:8,className:"mb-2",children:Object(l.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(x.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"EXP. needed to milestone: "}),Object(l.jsxs)("span",{className:"float-right text-right",children:[Object(l.jsx)("strong",{children:ie})," / ",Object(l.jsx)("b",{children:K})]})]})})})]}),Object(l.jsxs)(O.a,{children:[Object.entries(P).map((function(e){var t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(l.jsx)(m.a,{xs:12,lg:4,children:Object(l.jsx)(z,{bookObj:s,value:w[n],setValue:T[n],required:ae[n]})},n)})),Object(l.jsx)(m.a,{xs:12,lg:4,className:"mb-2",children:Object(l.jsxs)(N.a,{children:[Object(l.jsx)(N.a.Prepend,{children:Object(l.jsx)(N.a.Text,{children:"Current Mora"})}),Object(l.jsx)(k.b,{value:W,onValueChange:function(e){return Y(Math.max(e,0))}})]})}),Object(l.jsx)(m.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(x.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Mora Cost: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{children:re})})]})})}),Object(l.jsx)(m.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(x.a.Body,{className:"py-2",children:[Object(l.jsxs)("span",{children:["EXP ",D?"Diff":"Waste",": "]}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:le<0?"text-danger":"text-success",children:le})})]})})}),Object(l.jsx)(m.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(x.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Final Mora: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:je<0?"text-danger":"text-success",children:je})})]})})}),Object(l.jsx)(m.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(x.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Final Level: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:"text-success",children:be})})]})})}),Object(l.jsx)(m.a,{xs:12,md:4,className:"mb-2",children:Object(l.jsx)(x.a,{bg:"lightcontent",text:"lightfont",children:Object(l.jsxs)(x.a.Body,{className:"py-2",children:[Object(l.jsx)("span",{children:"Final EXP: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:oe<0?"text-danger":"text-success",children:oe})})]})})})]})]}),Object(l.jsx)(x.a.Footer,{children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{children:Boolean(de)&&Object(l.jsx)(y.a,{variant:"danger",className:"mb-0 py-2",children:de})}),Object(l.jsx)(m.a,{xs:"auto",children:Object(l.jsx)(p.a,{disabled:de,onClick:function(){B(be),X(oe),Object.entries(ae).forEach((function(e){var t,n=Object(c.a)(e,2),s=n[0],a=n[1];return null===(t=T[s])||void 0===t?void 0:t.call(T,w[s]-a)})),Y(je)},variant:"success",children:"Apply"})})]})})]})}function z(e){var t=e.bookObj,n=t.name,c=t.img,s=e.value,a=void 0===s?0:s,i=e.setValue,r=e.required,j=void 0===r?0:r;return Object(l.jsxs)(x.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:[Object(l.jsx)(x.a.Header,{children:n}),Object(l.jsx)(x.a.Body,{children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)(m.a,{xs:3,children:Object(l.jsx)(u.a,{src:c,className:"w-100 h-auto",rounded:!0})}),Object(l.jsxs)(m.a,{children:[Object(l.jsxs)(N.a,{children:[Object(l.jsx)(N.a.Prepend,{children:Object(l.jsx)(N.a.Text,{children:"Amount"})}),Object(l.jsx)(k.b,{value:a,onValueChange:function(e){return i(Math.max(e,0))}})]}),Object(l.jsxs)("div",{className:"mt-2",children:[Object(l.jsx)("span",{children:"Required: "}),Object(l.jsx)("span",{className:"float-right text-right",children:Object(l.jsx)("b",{className:j?"text-success":"",children:j})})]})]})]})})]})}}}]);
//# sourceMappingURL=12.36b6ecc2.chunk.js.map