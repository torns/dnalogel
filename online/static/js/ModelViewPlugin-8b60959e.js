var p=Object.defineProperty;var s=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var a=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&a(e,n,t[n]);if(s)for(var n of s(t))f.call(t,n)&&a(e,n,t[n]);return e};import{M as m,w as l}from"./mockData-9599b365.js";import{r as i,u as w,a as x,j as o,B as v,c as g,b as h,p as F,F as M,R as S}from"./vendor-0e0b86ae.js";function u(){return{width:window.innerWidth,height:window.innerHeight}}function _(){const[e,t]=i.exports.useState(u);return i.exports.useEffect(()=>{const n=()=>t(u());return window.addEventListener("resize",n,!1),()=>window.removeEventListener("resize",n,!1)}),e}const k=()=>{const[e,t]=w(),n=x(),r=i.exports.useRef(null);return i.exports.useEffect(()=>{!r.current||e.mode==="Floorplan"||n.plugins.modelView.appendTo(r.current)},[e.mode]),e.mode==="Floorplan"?null:o(v,{onClick:()=>t({mode:"Floorplan"}),sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"60px",right:"20px",padding:"10px",width:"90px",height:"120px",backgroundColor:"rgba(0, 0, 0, .2)"},ref:r})},z=g({plugins:[[m,"modelView"]]}),P=()=>{const e=_();return l&&h(z,{initialWork:F(l),children:[o(M,d({},e)),o(k,{})]})};S.render(o(P,{}),document.querySelector("#app"));