import{f as c,P as f,w as l}from"./mockData-985af735.js";import{r as n,u as m,a as g,F as s,j as r,B as v,c as x,d as P,p as F,e as w,R as h}from"./vendor-74dbed36.js";import{g as R}from"./getInitialParamFromUrl-f6979ec1.js";/* empty css              */function p(){return{width:window.innerWidth,height:window.innerHeight}}function S(){const[e,a]=n.exports.useState(p);return n.exports.useEffect(()=>{const o=()=>a(p());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),e}const b=()=>{const[e,a]=m(),o=g(),t=n.exports.useRef(null),[u,i]=n.exports.useState(!1);return n.exports.useEffect(()=>{!t.current||e.mode!==s.Mode.Panorama||(o.plugins.panoFloorplanRadarPlugin.appendTo(t.current),o.plugins.panoFloorplanRadarPlugin.load(c))},[]),n.exports.useEffect(()=>{e.mode===s.Mode.Panorama?i(!0):i(!1)},[e.mode]),r(v,{onClick:()=>a({mode:s.Mode.Floorplan}),sx:{display:`${u?"flex":"none"}`,justifyContent:"center",alignItems:"center",position:"absolute",top:"60px",right:"20px",padding:"10px",width:"90px",height:"120px",backgroundColor:"rgba(0, 0, 0, .2)"},ref:t})},E={hoverEnable:!0},d=R(),_=JSON.stringify(d)!=="{}"?d:E,j=x({plugins:[[f,"panoFloorplanRadarPlugin",{..._}]]}),k=()=>{const e=S();return l&&P(j,{initialWork:F(l),ref:a=>Object.assign(window,{$five:a?.five}),children:[r(w,{...e}),r(b,{})]})};h.render(r(k,{}),document.querySelector("#app"));
