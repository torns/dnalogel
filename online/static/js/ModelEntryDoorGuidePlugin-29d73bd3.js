import{a as E,w as M}from"./mockData-2a386b6f.js";import{an as B,aj as L,ak as q,am as U,ao as W,r as A,u as $,a as O,b as I,a7 as N,F as v,j as s,a8 as H,d as _,a9 as J,aa as D,ab as V,ac as X,c as K,p as Q,e as Y,R as Z}from"./vendor-862c62a4.js";import{t as ee}from"./transformPositionToVector3-d98d61bf.js";import{t as ne}from"./transfromToMeshBasicMaterial-2a8895a3.js";import{g as te}from"./getInitialParamFromUrl-f6979ec1.js";function oe(t,n){const e=n?.size??512,u=n?.fontSize??e*(35/256)*1.2,b=n?.backgroundColor??"rgba(0,0,0,0)",m=n?.fontColor??"#fff",p=n?.textAlign??"center",l=document.createElement("canvas");l.setAttribute("width",e+""),l.setAttribute("height",e+"");const a=l.getContext("2d");return a.fillStyle=b,a.fillRect(0,0,e,e),a.font=`${u}px "\u5FAE\u8F6F\u96C5\u9ED1"`,a.textAlign=p,a.fillStyle=m,a.fillText(t,e/2,e*.7),new B(l)}const ie=(t,n)=>{const e={},u=n.animationEnabled??!0,b=n.position??void 0,m=n.rad??void 0,p=n.fbx_url||"//vrlab-image4.ljcdn.com/release/web/entryDoorMini/Anim_Door1.fbx",l=[],a=async o=>{const d=o?.position??b;if(!d)return Promise.reject("ModelEntryDoorGuidePlugin.load(): position is undefined");const f=ee(d),i=o?.rad??m,x=o?.fbx_url??p;if(e.rad=i,i===void 0)return Promise.reject(`ModelEntryDoorGuidePlugin.load(): rad is ${i}`);const r=await new L().loadAsync(x);r.position.copy(f),r.rotation.z=i,r.scale.set(.8,.8,.8),ne(r,{transparent:!0,side:q});const c=r.children?.[0]?.children?.[3]?.clone();return c?(c.material=new U({transparent:!0,map:oe("\u5165\u6237\u95E8")}),c.renderOrder=3,r.children[0].add(c),e.object=r,!0):Promise.reject(`ModelEntryDoorGuidePlugin.load(): textMesh is ${c}`)},z=()=>{if(e.animation)return;if(!e.object)return console.error("ModelEntryDoorGuidePlugin.initAnimation(): state.object is ",e.object);const o=1,d=new W(e.object);l.push(d);const f=d.clipAction(e.object.animations[0]);f.timeScale=o;let i;const x=()=>{let h=0,P=0;const T=1e3/30,j=w=>{h=requestAnimationFrame(j);const F=w-P;F<T||(P=w,l.forEach(k=>k.update(F/1e3)),t.needsRender=!0)};return h=requestAnimationFrame(j),()=>{cancelAnimationFrame(h)}},R={play:()=>{i||(f.play(),i=x(),requestAnimationFrame(()=>{e.object&&e.object.rotation.z!==e.rad&&(e.object.rotation.z=e.rad)}))},stop:()=>{f.stop(),i?.(),i=void 0}};e.animation=R},y=o=>{if(!e.object)return console.error("ModelEntryDoorGuidePlugin.enable(): object is ",e.object);(o?.animationEnable??u)&&(e.animation||z(),e.animation.play()),t.scene.add(e.object),t.needsRender=!0},G=()=>{!e.object||(e.animation&&e.animation.stop(),t.scene.remove(e.object),t.needsRender=!0)},g=o=>o==="Floorplan"?y():G();return{load:a,enable:o=>(e.enabled||(e.enabled=!0,g(t.currentMode),t.on("modeChange",g),y(o)),!0),disable:()=>(e.enabled&&(e.enabled=!1,t.off("modeChange",g)),!0)}};function S(){return{width:window.innerWidth,height:window.innerHeight}}function ae(){const[t,n]=A.exports.useState(S);return A.exports.useEffect(()=>{const e=()=>n(S());return window.addEventListener("resize",e,!1),()=>window.removeEventListener("resize",e,!1)}),t}const re=()=>{const[t,n]=$(),e=O(),u=I();return N("modelLoaded",async()=>{await e.plugins.modelEntryDoorGuidePlugin.load(),n({mode:v.Mode.Floorplan,fov:80,latitude:-.06631286321852166,longitude:2.424613849671955,panoIndex:0}),e.plugins.modelEntryDoorGuidePlugin.enable({animationEnable:!1})}),u!=="Loaded"?null:s(H,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},children:_(J,{showLabels:!0,value:t.mode,onChange:(b,m)=>{n({mode:m})},children:[s(D,{label:"\u5168\u666F\u6F2B\u6E38",icon:s(V,{}),value:v.Mode.Panorama}),s(D,{label:"\u7A7A\u95F4\u603B\u89C8",icon:s(X,{}),value:v.Mode.Floorplan})]})})},se={},C=te(),le=JSON.stringify(C)!=="{}"?C:se,de=K({plugins:[[ie,"modelEntryDoorGuidePlugin",{fbx_url:"//vrlab-image4.ljcdn.com/release/web/entryDoorMini/Anim_Door1.fbx",position:E?.position,rad:E?.rad,...le}]]}),ce=()=>{const t=ae();return M&&_(de,{initialWork:Q(M),ref:n=>Object.assign(window,{$five:n?.five}),children:[s(Y,{...t}),s(re,{})]})};Z.render(s(ce,{}),document.querySelector("#app"));
