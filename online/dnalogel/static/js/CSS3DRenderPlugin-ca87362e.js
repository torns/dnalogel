import{u,D as m}from"./useFetchDatas-9069443e.js";import{r as o,a as p,b as f,as as v,j as r,B as g,c as h,d as w,p as x,e as y,R as E}from"./vendor-1f431ae3.js";import{C as D}from"./index-d016ea8c.js";import"./constants-62640824.js";import"./transformPositionToVector3-0d134797.js";function c(){return{width:window.innerWidth,height:window.innerHeight}}function S(){const[t,n]=o.exports.useState(c);return o.exports.useEffect(()=>{const s=()=>n(c());return window.addEventListener("resize",s,!1),()=>window.removeEventListener("resize",s,!1)}),t}const b="//vrlab-image4.ljcdn.com/release/web/v3/demo/mrInfo.png",C=[{x:-3.3344076411262944,y:.7070410926642972,z:-2.3397009372711186},{x:-1.947745466006547,y:.7678691748510869,z:-2.3397009372711177},{x:-2.0238408338740634,y:1.8272970618148188,z:-2.3397009372711186},{x:-3.3544256660994267,y:2.0150695242803196,z:-2.3397009372711177}],z=()=>r(g,{sx:{width:"100%",height:"100%",pointerEvents:"none",userSelect:"none",backgroundColor:"rgba(0, 0, 0, 1)"},children:r("img",{style:{position:"relative",left:"50%",top:"50%",width:"70%",transform:"translate(-50%, -50%)",pointerEvents:"auto"},src:b,alt:"\u5C0F\u533A\u4FE1\u606F"})}),F=()=>{const t=p(),n=f();return o.exports.useEffect(()=>{if(n!=="Loaded"){console.warn("five model is not ready!");return}const s=[],i=document.getElementById("app")||t.getElement()?.parentElement;let e;e=i.getElementsByClassName("behind-five-canvas")?.[0],e||(e=document.createElement("div"),e.style.position="absolute",e.style.left="0",e.style.top="0",e.style.backgroundColor="rgb(25, 20, 20)",i.insertBefore(e,i.firstChild));const{container:a,dispose:d,css3DObject:_,render:O}=t.plugins.css3DRenderPlugin.create3DDomContainer(C,{mode:"behind",behindFiveContainer:e});return a?v.exports.render(r(z,{}),a):(s.push(d),()=>{s.forEach(l=>l?.())})},[t.camera,n]),null},R=h({imageOptions:{size:512},textureOptions:{size:512},plugins:[[D,"css3DRenderPlugin"]]}),P=()=>{const t=S(),n=u(m.WORK);return n&&w(R,{initialWork:x(n),ref:s=>Object.assign(window,{$five:s?.five}),children:[r(y,{...t}),r(F,{})]})};E.render(r(P,{}),document.querySelector("#app"));
