import{f as c,b as m,w as i}from"./mockData-a7cc7513.js";import{r as t,u as p,a as v,q as f,k as n,j as e,t as h,b as d,v as g,w as r,x as w,y as C,c as F,p as _,F as x,R as b}from"./vendor-0e0b86ae.js";/* empty css              */function l(){return{width:window.innerWidth,height:window.innerHeight}}function P(){const[s,a]=t.exports.useState(l);return t.exports.useEffect(()=>{const o=()=>a(l());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),s}const S=c?.computed_data?.entrance?.north_rad,k=()=>{const[s,a]=p(),o=v();return f("modelLoaded",async()=>{await o.plugins.modelChassisCompassPlugin.load({north_rad:S}),a({panoIndex:0,fov:106,latitude:-.07983208586321928,longitude:1.52265306535823,mode:n.Mode.Floorplan}),o.plugins.modelChassisCompassPlugin.enable()}),t.exports.useEffect(()=>{},[s.mode]),e(h,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},children:d(g,{showLabels:!0,value:s.mode,onChange:(z,u)=>{a({mode:u})},children:[e(r,{label:"\u5168\u666F\u6F2B\u6E38",icon:e(w,{}),value:n.Mode.Panorama}),e(r,{label:"\u7A7A\u95F4\u603B\u89C8",icon:e(C,{}),value:n.Mode.Floorplan})]})})},E=F({plugins:[[m,"modelChassisCompassPlugin",{}]]}),M=()=>{const s=P();return i&&d(E,{initialWork:_(i),ref:a=>Object.assign(window,{$five:a?.five}),children:[e(x,{...s}),e(k,{})]})};b.render(e(M,{}),document.querySelector("#app"));