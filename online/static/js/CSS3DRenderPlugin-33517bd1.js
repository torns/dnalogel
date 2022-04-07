import{w as A}from"./mockData-2a386b6f.js";import{V as l,S as T,ap as _,aq as q,am as H,ak as N,ar as U,M as V,r as O,a as G,b as X,R as I,j as w,B as Y,c as Z,d as $,p as J,e as K}from"./vendor-862c62a4.js";import{t as Q}from"./transformPositionToVector3-d98d61bf.js";function M(t,e){const s=Math.round(t);return s%2===0?s:s+Number(e?.smaller?-1:1)}function ee(t,e){return new l((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2)}function ne(t,e){if(!e||typeof ResizeObserver>"u")return{observe:()=>window.addEventListener("resize",t),unobserve:()=>window.removeEventListener("resize",t)};{const s=new ResizeObserver(t);return{observe:()=>s.observe(e),unobserve:()=>s.unobserve(e)}}}const te=t=>{const e={disposeCallbacks:[]},s=(...n)=>{const p=n[0].map(d=>d instanceof l?d:Q(d)),i=n[1];if(p?.length<4)return console.error("points must be equal or greater than than 4");if(!t?.model?.loaded)return console.error("five.model.loaded is: ",t?.model?.loaded);const c=t.getElement();if(!c)return console.error("five.getElement() is "+c);const m=[],v=i?.ratio||.00216;v<=.00215&&console.warn("if you need click css3DElement on safari, ratio must be greater than 0.00215");const F=i?.dpr||1,u=i?.mode||"front",y=i?.autoRender??!0,D=i?.behindFiveContainer||c.parentElement||document.body,a=i?.container||document.createElement("div");a.classList.add("__Dnalogel-plugin--CSS3DRenderPlugin");const{css3DObject:f,mesh:o}=g(p,{ratio:v,dpr:F,container:a,mode:u});let h;const E=u==="front"&&!e.frontMode,x=u==="behind"&&!e.behindMode,P=!(E||x);let z=!1,S=null;x&&(e.behindMode={scene:new T,css3DRenderer:new _}),E&&(e.frontMode={scene:new T,css3DRenderer:new _});const{scene:b,css3DRenderer:r}=u==="behind"?e.behindMode:e.frontMode,R=(()=>{if(P)return()=>{b.add(f)};{const d=()=>{const L=M(c.clientWidth,{smaller:!0}),B=M(c.clientHeight,{smaller:!0});r.setSize(L,B)};d(),h=ne(d,c),r.domElement.style.position="absolute",r.domElement.style.top="0",r.domElement.style.userSelect="none",r.domElement.style.pointerEvents="none";const W=()=>{z||(S=requestAnimationFrame(W),r.render(b,t.camera))};return()=>{b.add(f),h?.observe?.(),W(),u==="behind"&&o&&(t.scene.add(o),m.push(()=>o&&t.scene.remove(o)))}}})();E&&(c.parentElement||document.body).appendChild(r.domElement),x&&D.appendChild(r.domElement);const C=()=>(z=!0,m.forEach(d=>d?.()),b.remove(f),typeof S=="number"&&cancelAnimationFrame(S),b.children.length===0&&(r.domElement.remove(),u==="front"&&(e.frontMode=void 0),u==="behind"&&(e.behindMode=void 0),!e.behindMode&&!e.frontMode&&h?.unobserve?.()),!0),k=e.disposeCallbacks.findIndex(d=>d===C);return k!==-1?e.disposeCallbacks.splice(k,1):e.disposeCallbacks.push(C),y&&R(),{container:a,dispose:C,css3DObject:f,render:y?void 0:R}},g=(n,p)=>{const{ratio:i,dpr:c,container:m,mode:v}=p,F=n[0].distanceTo(n[1]),u=n[1].distanceTo(n[2]),y=M(F/i*c),D=M(u/i*c),a=new q(m);a.scale.set(i,i,i),m.style.width=y+"px",m.style.height=D+"px",m.style.pointerEvents="none";const f=ee(n[0],n[2]),o=n[1].clone().sub(n[0]),h=n[2].clone().sub(n[1]),E=new l(0,1,0).angleTo(new l(0,h.y,h.z)),x=new l(1,0,0).angleTo(new l(o.x,0,o.z)),P=o.angleTo(new l(o.x,0,o.z)),z=(h.z>0?-1:1)*E,S=(o.z<0?1:-1)*x,b=(o.x>0&&o.y<0||o.x<0&&o.y>0?-1:1)*P;a.rotateOnWorldAxis(new l(1,0,0),z),a.rotateOnWorldAxis(new l(0,1,0),S),a.rotateOnWorldAxis(new l(0,0,1),b),a.position.set(f.x,f.y,f.z);let r;if(v==="behind"){const R=new H({opacity:0,transparent:!1,side:N}),C=new U(y,D);r=new V(C,R),r.name="CSS3DRenderPlugin-mesh",r.position.copy(a.position),r.rotation.copy(a.rotation),r.scale.copy(a.scale)}return{css3DObject:a,mesh:r}};return{create3DDomContainer:s,disposeAll:()=>{e.disposeCallbacks.forEach(n=>n?.()),e.disposeCallbacks=[]}}};function j(){return{width:window.innerWidth,height:window.innerHeight}}function re(){const[t,e]=O.exports.useState(j);return O.exports.useEffect(()=>{const s=()=>e(j());return window.addEventListener("resize",s,!1),()=>window.removeEventListener("resize",s,!1)}),t}const oe="//vrlab-image4.ljcdn.com/release/web/v3/demo/mrInfo.png",se=[{x:-3.3344076411262944,y:.7070410926642972,z:-2.3397009372711186},{x:-1.947745466006547,y:.7678691748510869,z:-2.3397009372711177},{x:-2.0238408338740634,y:1.8272970618148188,z:-2.3397009372711186},{x:-3.3544256660994267,y:2.0150695242803196,z:-2.3397009372711177}],ie=()=>w(Y,{sx:{width:"100%",height:"100%",pointerEvents:"none",userSelect:"none",backgroundColor:"rgba(0, 0, 0, 1)"},children:w("img",{style:{position:"relative",left:"50%",top:"50%",width:"70%",transform:"translate(-50%, -50%)",pointerEvents:"auto"},src:oe,alt:"\u5C0F\u533A\u4FE1\u606F"})}),ae=()=>{const t=G(),e=X();return O.exports.useEffect(()=>{if(e!=="Loaded"){console.warn("five model is not ready!");return}const s=[],g=document.getElementById("app")||t.getElement()?.parentElement;let n;n=g.getElementsByClassName("behind-five-canvas")?.[0],n||(n=document.createElement("div"),n.style.position="absolute",n.style.left="0",n.style.top="0",n.style.backgroundColor="rgb(25, 20, 20)",g.insertBefore(n,g.firstChild));const{container:p,dispose:i,css3DObject:c,render:m}=t.plugins.css3DRenderPlugin.create3DDomContainer(se,{mode:"behind",behindFiveContainer:n});return p?I.render(w(ie,{}),p):(s.push(i),()=>{s.forEach(v=>v?.())})},[t.camera,e]),null},de=Z({plugins:[[te,"css3DRenderPlugin"]]}),ce=()=>{const t=re();return A&&$(de,{initialWork:J(A),ref:e=>Object.assign(window,{$five:e?.five}),children:[w(K,{...t}),w(ae,{})]})};I.render(w(ce,{}),document.querySelector("#app"));
