import{u as m,D as A}from"./useFetchDatas-9069443e.js";import{G as I,aB as y,ap as c,M as h,av as f,V as a,r as p,a as g,aa as C,c as E,d as u,p as D,j as r,e as v,B,R as k}from"./vendor-1f431ae3.js";import{l,t as M}from"./constants-62640824.js";import{C as S}from"./index-d016ea8c.js";import"./transformPositionToVector3-0d134797.js";const w="data:image/png;base64,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";function R(){const s=document.createElement("div"),e=document.createElement("i"),o=document.createElement("span");return s.appendChild(e),s.appendChild(o),s.style.position="relative",s.style.width="100%",s.style.display="flex",s.style.flexDirection="column",s.style.alignItems="center",s.style.marginTop=`${150/16}rem`,s.style.opacity="0",s.style.transition="opacity 1000ms linear",e.style.display="block",e.style.width=`${134/16}rem`,e.style.height=`${22/16}rem`,e.style.backgroundSize="100%",e.style.backgroundRepeat="no-repeat",e.style.backgroundImage=`url(${w})`,o.style.marginTop=`${10/16}rem`,o.style.fontSize=`${16/16}rem`,o.style.color="#fff",o.style.opacity="0.7",o.style.textShadow="0 2px 16px rgb(22 34 83 / 24%)",o.style.fontWeight="bold",{appendTo(t){t.appendChild(s)},dispose(){s.remove()},setRoom(t){o.innerHTML=t.name+" "+Math.floor(t.size/1e6)+"\u33A1"},show(){s.style.opacity="1"},hide(){s.style.opacity="0"}}}const Q=function(s,e){return new P(s,e)};class P{five;data;config;group=new I;modelLoaded=!1;roomInfoInstance;roomInfoWrapperInstance;compassMeshTween;compassMesh;entryDoorMesh;constructor(e,o){this.five=e,this.config=o,this.five.scene.add(this.group),e.once("dispose",this.dispose),e.once("modelLoaded",this.onFiveFistPanoLoaded),this.five.on("panoArrived",this.onFivePanoArrived),this.five.on("panoWillArrive",this.onFivePanoWillArrive),this.five.on("cameraDirectionUpdate",this.onFiveCameraDirectionUpdate)}load(e){this.data=e,this.modelLoaded&&this.init()}dispose=()=>{this.five.scene.remove(this.group),this.group.remove(...this.group.children),this.compassMesh?.material.map?.dispose(),this.entryDoorMesh?.material.map?.dispose(),this.five.off("panoArrived",this.onFivePanoArrived),this.five.off("panoWillArrive",this.onFivePanoWillArrive)};onFiveFistPanoLoaded=()=>{this.modelLoaded=!0,this.data&&this.init()};async init(){if(!this.data||!this.modelLoaded)return;const e=this.data.north_rad;e!=null&&(this.compassMesh=await this.loadCompassMesh(),this.compassMesh.rotateX(-Math.PI/2),this.compassMesh.rotateZ(e-Math.PI/2),this.group.add(this.compassMesh)),this.data.entrance!=null&&(this.entryDoorMesh=await this.loadEntryDoorMesh(),this.roomInfoWrapperInstance=this.loadRoomInfo(),this.roomInfoInstance=R(),this.entryDoorMesh.rotateX(-Math.PI/2),this.roomInfoWrapperInstance&&this.roomInfoInstance.appendTo(this.roomInfoWrapperInstance.container),this.group.add(this.entryDoorMesh)),this.onFivePanoArrived(this.five.panoIndex||0),this.five.needsRender=!0}async loadCompassMesh(){const e=this.config?.compassImageUrl||"//vrlab-image4.ljcdn.com/release/web/v3/north-point-circle.96498e69.png",o=await l(e),t=new y(.7,32),i=new c({map:o,transparent:!0,opacity:0,depthTest:!1}),n=new h(t,i);return n.name="pano-compass-mesh",n}async loadEntryDoorMesh(){const e=this.config?.entryDoorImageUrl||"//vrlab-image4.ljcdn.com/release/web/enterDoor.831b8208.png",o=await l(e),t=new f(.2,.16),i=new c({map:o,transparent:!0,opacity:.8,depthTest:!1}),n=new h(t,i);return n.name="pano-compass-entry-door",n}loadRoomInfo(){const e=[new a(-.7,0,-.7),new a(.7,0,-.7),new a(.7,0,.7),new a(-.7,0,.7)];return S(this.five).create3DDomContainer(e)}onFivePanoWillArrive=e=>{e!==this.five.panoIndex&&(this.compassMeshTween?.dispose(),this.compassMesh?.material.setValues({opacity:0}))};onFivePanoArrived=e=>{const o=this.five.work.observers[e].standingPosition;if(this.compassMesh){if(this.compassMesh.position.copy(o.clone().setY(o.y+.01)),this.compassMesh.material.opacity!==0)return;this.compassMeshTween?.dispose(),this.compassMeshTween=M(1e3).onUpdate(({progress:t})=>{this.compassMesh?.material.setValues({opacity:t}),this.five.needsRender=!0}).play()}if(this.entryDoorMesh){const i=new a(this.data.entrance.position.x,this.data.entrance.position.y,this.data.entrance.position.z).clone().setY(o.y).sub(o).normalize(),n=o.clone().add(i.clone().multiplyScalar(.7)).setY(o.y+.01);this.entryDoorMesh.rotation.z=new a(0,0,-1).angleTo(i),this.entryDoorMesh.position.copy(n),this.data?.room_observers[e].room.type===1?this.entryDoorMesh?.material.setValues({opacity:1}):this.entryDoorMesh?.material.setValues({opacity:0})}this.roomInfoInstance&&this.roomInfoWrapperInstance&&(this.roomInfoWrapperInstance.css3DObject.position.copy(o.clone().setY(o.y+.01)),this.roomInfoInstance.setRoom(this.data.room_observers[e].room)),this.five.needsRender=!0};onFiveCameraDirectionUpdate=({longitude:e,latitude:o})=>{!this.roomInfoWrapperInstance||(this.roomInfoWrapperInstance.css3DObject.rotation.z=e,o>.66&&this.five.getCurrentState().mode==="Panorama"?this.roomInfoInstance?.show():this.roomInfoInstance?.hide())}}function d(){return{width:window.innerWidth,height:window.innerHeight}}function x(){const[s,e]=p.exports.useState(d);return p.exports.useEffect(()=>{const o=()=>e(d());return window.addEventListener("resize",o,!1),()=>window.removeEventListener("resize",o,!1)}),s}const T=()=>{const s=g(),e=m(A.FLOOR_PLAN_SERVER_PLUGIN_DATA);return C("modelLoaded",async()=>{if(!e||JSON.stringify(e)==="{}")return;const o=e?.computed_data?.entrance?.north_rad;await s.plugins.panoCompassPlugin.load({north_rad:o})},[e]),null},F=E({imageOptions:{size:512},textureOptions:{size:512},onlyRenderIfNeeds:!0,plugins:[[Q,"panoCompassPlugin",{}]]}),Y=()=>{const s=x(),e=m(A.WORK);return e&&u(F,{initialWork:D(e),ref:o=>Object.assign(window,{$five:o?.five}),children:[r(v,{...s}),r(B,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),r(T,{})]})};k.render(r(Y,{}),document.querySelector("#app"));
