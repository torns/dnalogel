import{m as p,a as v,w as r}from"./mockData-a7cc7513.js";import{r as s,u as f,a as g,q as w,j as e,t as h,b as c,v as b,w as l,x as F,k as u,y as x,c as P,z as L,B as R,p as S,F as _,R as E}from"./vendor-0e0b86ae.js";/* empty css              */function d(){return{width:window.innerWidth,height:window.innerHeight}}function k(){const[n,o]=s.exports.useState(d);return s.exports.useEffect(()=>{const t=()=>o(d());return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)}),n}const z=n=>{const[o,t]=f(),i=g();return s.exports.useEffect(()=>{const a=document.querySelector(".plugin-full-screen-container");a&&i.plugins.modelRoomLabelPlugin.appendTo(a)},[]),w("modelLoaded",()=>{i.plugins.modelRoomLabelPlugin.load(p)}),e(h,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"model-roomlabel-plugin-show",children:c(b,{showLabels:!0,value:o.mode,onChange:(a,m)=>{t({mode:m})},children:[e(l,{label:"\u5168\u666F\u6F2B\u6E38",icon:e(F,{}),value:u.Mode.Panorama}),e(l,{label:"\u7A7A\u95F4\u603B\u89C8",icon:e(x,{}),value:u.Mode.Floorplan})]})})},B=P({plugins:[[v,"modelRoomLabelPlugin"]]}),C=()=>{const n=k(),o=L.memo(()=>e(R,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),()=>!0);return r&&c(B,{initialWork:S(r),children:[e(_,{...n}),e(o,{}),e(z,{})]})};E.render(e(C,{}),document.querySelector("#app"));