var g=Object.defineProperty;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var a=(n,e,o)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,r=(n,e)=>{for(var o in e||(e={}))m.call(e,o)&&a(n,o,e[o]);if(s)for(var o of s(e))F.call(e,o)&&a(n,o,e[o]);return n};import{f as h,T as x,w as l}from"./mockData-9599b365.js";import{r as i,a as P,u as _,j as t,t as b,b as v,v as E,w as u,x as S,k as p,y as z,c as B,z as k,B as C,p as W,F as D,R as N}from"./vendor-0e0b86ae.js";/* empty css              */function c(){return{width:window.innerWidth,height:window.innerHeight}}function T(){const[n,e]=i.exports.useState(c);return i.exports.useEffect(()=>{const o=()=>e(c());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),n}const j=n=>{const e=P(),[o,d]=_();return i.exports.useEffect(()=>{e.plugins.topviewFloorplanPlugin.load(h)},[]),t(b,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"topview-floorplan-plugin-use",children:v(E,{showLabels:!0,value:o.mode,onChange:(w,f)=>{d({mode:f})},children:[t(u,{label:"\u5168\u666F\u6F2B\u6E38",icon:t(S,{}),value:p.Mode.Panorama}),t(u,{label:"\u4FEF\u89C6\u6A21\u578B",icon:t(z,{}),value:p.Mode.Topview})]})})},y=B({plugins:[[x,"topviewFloorplanPlugin",{selector:".plugin-full-screen-container",hoverEnable:!0}]]}),A=()=>{const n=T(),e=k.memo(()=>t(C,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),()=>!0);return l&&v(y,{initialWork:W(l),children:[t(D,r({},n)),t(e,{}),t(j,{})]})};N.render(t(A,{}),document.querySelector("#app"));
