var h=Object.defineProperty;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var d=(e,n,o)=>n in e?h(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,v=(e,n)=>{for(var o in n||(n={}))f.call(n,o)&&d(e,o,n[o]);if(l)for(var o of l(n))P.call(n,o)&&d(e,o,n[o]);return e};import{e as M,w as m}from"./mockData-9599b365.js";import{r as C,a as k,j as t,B as x,t as E,b as O,I as R,J as a,c as I,F as _,R as A}from"./vendor-0e0b86ae.js";function p(){return{width:window.innerWidth,height:window.innerHeight}}function F(){const[e,n]=C.exports.useState(p);return C.exports.useEffect(()=>{const o=()=>n(p());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),e}var g;(function(e){e.Move="Move",e.Rotate="Rotate"})(g||(g={}));var i;(function(e){e.Clockwise="Clockwise",e.Anticlockwise="Anticlockwise",e.Loop="Loop"})(i||(i={}));const r={PANO_MOVE:{fov:98,panoIndex:1,latitude:-.007769878726327784,longitude:4.614049904222785},CLOCKWISE_ROTATION:{fov:50,latitude:.0340522133938706,longitude:.1257016521296519,rotation:i.Anticlockwise},COUNTERCLOCKWISE_ROTATION:{fov:50,latitude:.0340522133938706,longitude:.1257016521296519,rotation:i.Clockwise},ROUND:{fov:50,latitude:-.0004827098383655415,longitude:1.264471004436043,rotateSpeed:.25,rotation:i.Loop}},N=e=>{const n=k(),o=(u,c=1e4)=>{n.plugins.cameraMovementPlugin.move(u,c)},s=(u,c=1e4)=>{n.plugins.cameraMovementPlugin.rotate(u,c)};return t(x,{children:t(E,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent"},children:O(R,{size:"large","aria-label":"large button group",orientation:"vertical",children:[t(a,{onClick:()=>o(r.PANO_MOVE),children:"\u70B9\u4F4D\u6E38\u8D70"}),t(a,{onClick:()=>s(r.CLOCKWISE_ROTATION),children:"\u987A\u65F6\u9488\u65CB\u8F6C"}),t(a,{onClick:()=>s(r.COUNTERCLOCKWISE_ROTATION),children:"\u9006\u65F6\u9488\u65CB\u8F6C"}),t(a,{onClick:()=>s(r.ROUND,2e4),children:"\u6765\u56DE\u65CB\u8F6C"})]})})})},T=I({onlyRenderIfNeeds:!0,plugins:[[M,"cameraMovementPlugin",{}]]}),L=()=>{const e=F();return m&&O(T,{initialWork:m,ref:n=>Object.assign(window,{$five:n==null?void 0:n.five}),children:[t(_,v({},e)),t(N,{})]})};A.render(t(L,{}),document.querySelector("#app"));
