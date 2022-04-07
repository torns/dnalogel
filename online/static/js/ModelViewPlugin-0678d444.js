import{w as M}from"./mockData-2a386b6f.js";import{S as D,P as L,O as h,D as v,V as w,A as N,M as g,W as k,s as A,G as y,r as f,u as j,a as _,b as V,F as P,j as p,B as G,c as I,d as O,p as B,e as T,R as q}from"./vendor-862c62a4.js";const H=o=>{let c=!0;const i=new D,l=new L(60,1,.1,1e3);let d=new h;{const t=new v(16777215,.5);t.position.copy(new w(1,1,1)),i.add(t)}{const t=new v(16777215,.3);i.add(t)}{const t=new N(16777215,.3);i.add(t)}i.add(d);let r=null;const b=()=>{if(!!o.renderer)return r||(r=new k({antialias:!1,alpha:!0}),r.setPixelRatio(o.renderer.getPixelRatio()),r.outputEncoding=A,r.setClearColor(1579548,0),r.autoClear=!0),r},R=()=>{d.traverse(t=>{t instanceof g&&[].concat(t.material).forEach(e=>e.dispose())}),i.remove(d),d=new h,i.add(d),m()},S=()=>{function t(e){return e=e.clone(),e.uniforms.modelAlpha.value=1,e.uniforms.map.value&&(e.uniforms.map.value.needsUpdate=!0),e}function a(e){if(e instanceof g){const n=e.geometry,s=Array.isArray(e.material)?e.material.map(t):t(e.material);return new g(n,s)}else if(e instanceof y){const n=new y;return e.children.forEach(s=>n.add(a(s))),n}else{const n=new h;return e.children.forEach(s=>n.add(a(s))),n}}i.remove(d),d=a(o.model),i.add(d),m()},C=(t,a={})=>{const e=b();if(!e)return;t.appendChild(e.domElement),x(a);const n=window.getComputedStyle(t).position;n!=="relative"&&n!=="absolute"&&n!=="fixed"&&n!=="sticky"&&(t.style.position="relative")},x=(t={})=>{if(!r)return;const e=r.domElement.parentNode;if(e&&e.nodeName){const{width:n=e.offsetWidth,height:s=e.offsetHeight}=t;r.setSize(n,s),l.aspect=n/s,l.updateProjectionMatrix()}c=!0},F=()=>{const t=o.model.bounding,{fov:a,aspect:e}=l,n=Math.sqrt(Math.pow(t.max.x-t.min.x+2,2)+Math.pow(t.max.y-t.min.y+2,2)+Math.pow(t.max.z-t.min.z+2,2));let s=n/2/Math.tan(Math.PI*a/360);return e<1&&(s=s/e),isNaN(s)?n:s},m=()=>{const{longitude:t,latitude:a}=o.getPose(),e=F(),n=o.model.bounding.getCenter(new w),s=e*Math.cos(a),u=new w;u.x=Math.sin(t)*s+n.x,u.z=Math.cos(t)*s+n.z,u.y=Math.sin(a)*e+n.y,l.position.copy(u),l.lookAt(n),c=!0},W=()=>{c!==!0||!r||!r.domElement.parentNode||r.domElement.parentNode.offsetWidth===0||(r.render(i,l),c=!1)},z=()=>{r&&r.dispose(),r=null};return o.on("modelLoaded",S),o.on("modelWillLoad",R),o.on("cameraDirectionUpdate",m),o.on("dispose",z),o.on("renderFrame",W),{appendTo:C,refresh:x}};function E(){return{width:window.innerWidth,height:window.innerHeight}}function U(){const[o,c]=f.exports.useState(E);return f.exports.useEffect(()=>{const i=()=>c(E());return window.addEventListener("resize",i,!1),()=>window.removeEventListener("resize",i,!1)}),o}const $=()=>{const[o,c]=j(),i=_(),l=f.exports.useRef(null),d=V();return f.exports.useEffect(()=>{!l.current||o.mode!==P.Mode.Panorama||i.plugins.modelViewPlugin.appendTo(l.current)},[o.mode,d]),o.mode!==P.Mode.Panorama||d!=="Loaded"?null:p(G,{onClick:()=>c({mode:"Floorplan"}),sx:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"60px",right:"20px",padding:"10px",width:"90px",height:"120px",backgroundColor:"rgba(0, 0, 0, .2)"},ref:l})},J=I({plugins:[[H,"modelViewPlugin"]]}),K=()=>{const o=U();return M&&O(J,{initialWork:B(M),ref:c=>Object.assign(window,{$five:c?.five}),children:[p(T,{...o}),p($,{})]})};q.render(p(K,{}),document.querySelector("#app"));
