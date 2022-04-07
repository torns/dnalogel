import"./BetterTween-b9d741f5.js";import{g as D,i as N,h as O,k as F,a4 as T,x as S,l as x,m as b,a5 as L,n as C,o as w,a0 as Y,a6 as V,q as z,t as E,N as W,E as Z,H as U,J as B,K as X,L as q,X as _,Y as $,y as ee,U as ne,w as te,v as oe,Q as ie,a1 as se,V as P,a7 as ae,r as j,u as re,a as le,b as fe,a8 as ce,j as h,a9 as de,d as G,aa as ue,ab as y,ac as me,F as Q,ad as ve,c as he,p as Ae,e as be,B as pe,R as ge}from"./vendor-5f3df8df.js";import"./typing-9caf697c.js";import{m as we,w as I}from"./mockData-a850cee4.js";import{g as Fe}from"./getInitialParamFromUrl-f6979ec1.js";const xe="data:image/png;base64,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";function Pe(i){let e,n,t=i[0].name+"",r,o,a,m,l;return{c(){e=F("div"),n=F("span"),r=T(t),o=S(),a=F("div"),x(n,"class","room-label-item__text svelte-17nkflf"),b(n,"background-image","url("+xe+")"),L(n,"wide",i[0].name.length>3),x(a,"class","room-label-item__bar svelte-17nkflf"),x(e,"class","room-label-item svelte-17nkflf"),b(e,"z-index",i[0].zIndex,!1),b(e,"transform",i[0].transform,!1),b(e,"opacity",i[0].visible?1:0,!1)},m(s,c){C(s,e,c),w(e,n),w(n,r),w(e,o),w(e,a),m||(l=Y(n,"click",i[1]),m=!0)},p(s,[c]){c&1&&t!==(t=s[0].name+"")&&V(r,t),c&1&&L(n,"wide",s[0].name.length>3),c&1&&b(e,"z-index",s[0].zIndex,!1),c&1&&b(e,"transform",s[0].transform,!1),c&1&&b(e,"opacity",s[0].visible?1:0,!1)},i:z,o:z,d(s){s&&E(e),m=!1,l()}}}function je(i,e,n){let{five:t}=e,{roomLabel:r}=e;function o(){t.setState({panoIndex:r.panoIndex,mode:"Panorama",longitude:r.longitude})}return i.$$set=a=>{"five"in a&&n(2,t=a.five),"roomLabel"in a&&n(0,r=a.roomLabel)},[r,o,t]}class Ce extends D{constructor(e){super();N(this,e,je,Pe,O,{five:2,roomLabel:0})}}function H(i,e,n){const t=i.slice();return t[9]=e[n],t}function M(i,e){let n,t,r;return t=new Ce({props:{roomLabel:e[9],five:e[1]}}),{key:i,first:null,c(){n=W(),Z(t.$$.fragment),this.first=n},m(o,a){C(o,n,a),U(t,o,a),r=!0},p(o,a){e=o;const m={};a&1&&(m.roomLabel=e[9]),a&2&&(m.five=e[1]),t.$set(m)},i(o){r||(B(t.$$.fragment,o),r=!0)},o(o){X(t.$$.fragment,o),r=!1},d(o){o&&E(n),q(t,o)}}}function Ee(i){let e,n=[],t=new Map,r,o,a=i[0];const m=l=>l[9].id;for(let l=0;l<a.length;l+=1){let s=H(i,a,l),c=m(s);t.set(c,n[l]=M(c,s))}return{c(){e=F("div");for(let l=0;l<n.length;l+=1)n[l].c();x(e,"class","room-labels-container svelte-185yvaa"),_(()=>i[4].call(e))},m(l,s){C(l,e,s);for(let c=0;c<n.length;c+=1)n[c].m(e,null);r=$(e,i[4].bind(e)),o=!0},p(l,[s]){s&3&&(a=l[0],ie(),n=ee(n,s,m,1,l,a,t,e,se,M,null,H),ne())},i(l){if(!o){for(let s=0;s<a.length;s+=1)B(n[s]);o=!0}},o(l){for(let s=0;s<n.length;s+=1)X(n[s]);o=!1},d(l){l&&E(e);for(let s=0;s<n.length;s+=1)n[s].d();r()}}}function ke(i,e,n){let{five:t}=e,{roomLabels:r}=e,o,a;function m(d,v){if(!(d.model.shownFloor===null||v.floorIndex===d.model.shownFloor))return!1;const A=new ae,f=d.camera.position.clone(),u=new P(v.position.x,v.position.y,v.position.z),p=u.distanceTo(f);A.set(f.clone(),u.clone().sub(f).normalize());const[k]=d.model.intersectRaycaster(A);return!(k&&k.distance+1<p)}function l(d,v){const A=new P(v.position.x,v.position.y,v.position.z).clone().project(d.camera),f=Math.ceil((A.x+1)/2*o),u=Math.ceil((-A.y+1)/2*a);return`translate(${f}px, ${u}px)`}function s(d,v){const g=v.map(f=>{const u=m(d,f);if(!u)return{...f,visible:u};const p=l(d,f);return{...f,visible:u,transform:p}}),A=g.filter(({visible:f})=>f).map(f=>({roomLabelItem:f,distance:new P(...Object.values(f.position)).clone().distanceTo(d.camera.position)})).sort((f,u)=>f.distance-u.distance);return g.map(f=>{const u=A.findIndex(p=>p.roomLabelItem.id===f.id);return u!==void 0?{...f,zIndex:u*10}:f})}function c(){n(0,r=s(t,r))}t.on("cameraDirectionUpdate",c),te(()=>{t.off("cameraDirectionUpdate",c)}),oe(()=>{c()});function K(){o=this.clientWidth,a=this.clientHeight,n(2,o),n(3,a)}return i.$$set=d=>{"five"in d&&n(1,t=d.five),"roomLabels"in d&&n(0,r=d.roomLabels)},[r,t,o,a,K]}class Le extends D{constructor(e){super();N(this,e,ke,Ee,O,{five:1,roomLabels:0})}}function ze(i){return i.model_room_labels.map(({id:e,pano_index:n,floor_index:t,name:r,position:o,longitude:a})=>({id:e,name:r,position:o,longitude:a,panoIndex:n,floorIndex:t,zIndex:0,visible:!1,transform:""}))}class ye{five;enabled=!0;fiveModeEnabled;app=void 0;wrapper;roomLabels=[];container=document.createElement("div");constructor(e){this.five=e,this.fiveModeEnabled=this.five.currentMode==="Floorplan",this.container.classList.add("model-room-label-plugin-container"),this.container.style.width="100%",this.container.style.height="100%",this.container.style.position="absolute",this.container.style.pointerEvents="none",this.container.style.left="0",this.container.style.top="0",this.five.once("dispose",()=>this.dispose()),this.five.on("modeChange",this.onFiveModeChange),this.render()}dispose(){this.five.off("modeChange",this.onFiveModeChange),this.container.remove()}load(e){this.roomLabels=ze(e),this.render()}appendTo(e){return this.wrapper=e,e.appendChild(this.container),this.render(),this}disable(){return this.enabled=!1,this.render(),this}enable(){return this.enabled=!0,this.render(),this}onFiveModeChange=e=>{if(e!=="Floorplan"){this.fiveModeEnabled=!1,this.render();return}this.five.once("initAnimationEnded",()=>{this.fiveModeEnabled=this.five.currentMode==="Floorplan",this.render()})};render(){if(!!this.wrapper){if(!this.enable||!this.fiveModeEnabled){this.app?.$destroy(),this.app=void 0;return}this.app?this.app.$set({five:this.five,roomLabels:this.roomLabels}):this.app=new Le({target:this.container,props:{five:this.five,roomLabels:this.roomLabels}})}}}const Qe=i=>new ye(i);function J(){return{width:window.innerWidth,height:window.innerHeight}}function Ie(){const[i,e]=j.exports.useState(J);return j.exports.useEffect(()=>{const n=()=>e(J());return window.addEventListener("resize",n,!1),()=>window.removeEventListener("resize",n,!1)}),i}const He=i=>{const[e,n]=re(),t=le(),r=fe();return j.exports.useEffect(()=>{const o=document.querySelector(".plugin-full-screen-container");o&&t.plugins.modelRoomLabelPlugin.appendTo(o)},[]),ce("modelLoaded",()=>{t.plugins.modelRoomLabelPlugin.load(we)}),r!=="Loaded"?null:h(de,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"model-roomlabel-plugin-show",children:G(ue,{showLabels:!0,value:e.mode,onChange:(o,a)=>{n({mode:a})},children:[h(y,{label:"\u5168\u666F\u6F2B\u6E38",icon:h(me,{}),value:Q.Mode.Panorama}),h(y,{label:"\u7A7A\u95F4\u603B\u89C8",icon:h(ve,{}),value:Q.Mode.Floorplan})]})})},Me={},R=Fe(),Je=JSON.stringify(R)!=="{}"?R:Me,Re=he({plugins:[[Qe,"modelRoomLabelPlugin",{...Je}]]}),De=()=>{const i=Ie();return I&&G(Re,{initialWork:Ae(I),ref:e=>Object.assign(window,{$five:e?.five}),children:[h(be,{...i}),h(pe,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),h(He,{})]})};ge.render(h(De,{}),document.querySelector("#app"));
