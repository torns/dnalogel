import{f as d,T as w,w as s}from"./mockData-a7cc7513.js";import{r as i,a as f,u as g,j as e,t as m,b as u,v as F,w as a,x as h,k as r,y as x,c as P,z as _,B as b,p as E,F as S,R as z}from"./vendor-0e0b86ae.js";/* empty css              */function l(){return{width:window.innerWidth,height:window.innerHeight}}function B(){const[n,o]=i.exports.useState(l);return i.exports.useEffect(()=>{const t=()=>o(l());return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)}),n}const k=n=>{const o=f(),[t,p]=g();return i.exports.useEffect(()=>{o.plugins.topviewFloorplanPlugin.load(d)},[]),e(m,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"topview-floorplan-plugin-use",children:u(F,{showLabels:!0,value:t.mode,onChange:(c,v)=>{p({mode:v})},children:[e(a,{label:"\u5168\u666F\u6F2B\u6E38",icon:e(h,{}),value:r.Mode.Panorama}),e(a,{label:"\u4FEF\u89C6\u6A21\u578B",icon:e(x,{}),value:r.Mode.Topview})]})})},C=P({plugins:[[w,"topviewFloorplanPlugin",{selector:".plugin-full-screen-container",hoverEnable:!0}]]}),W=()=>{const n=B(),o=_.memo(()=>e(b,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),()=>!0);return s&&u(C,{initialWork:E(s),children:[e(S,{...n}),e(o,{}),e(k,{})]})};z.render(e(W,{}),document.querySelector("#app"));