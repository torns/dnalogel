import{u as A,D as I}from"./useFetchDatas-9069443e.js";import{F as f,aA as L,r as g,a as N,u as _,b as D,aa as M,j as h,ab as k,d as C,ac as j,ad as b,ae as G,af as T,c as W,p as R,e as z,B as q,R as H}from"./vendor-1f431ae3.js";import{a as d,b as v,S as U,F as B}from"./constants-62640824.js";import{o as V,g as J,c as E,C as $}from"./changeModelCanvasOpacity-f62c5bf3.js";import{f as K}from"./RoomHighlight-2a8d56e9.js";import{g as Y}from"./getInitialParamFromUrl-9191fb83.js";async function c(t){try{const e=await t;return[null,e]}catch(e){return e instanceof Error?[e,null]:[new Error(""),null]}}function p(t){return Object.prototype.toString.call(t)==="[object Object]"}function m(t,e){return t===e?!0:typeof t!=typeof e?!1:!!(Number.isNaN(t)&&Number.isNaN(e))}function Q(t,e){const n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(e);if(n.length!==r.length)return!1;for(let o=0,i=n.length;o<i;o++){const s=n[o];if(!m(t[s],e[s]))return!1}return!0}function X(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(!m(t[n],e[n]))return!1;return!0}function Z(t,e){return m(t,e)?!0:p(t)&&p(e)?Q(t,e):Array.isArray(t)&&Array.isArray(e)?X(t,e):!1}function P(t,e){return m(t,e)?!0:p(t)&&p(e)?te(t,e):Array.isArray(t)&&Array.isArray(e)?ee(t,e):!1}function ee(t,e){if(t.length!==e.length)return!1;for(let n=0,r=t.length;n<r;n++)if(!P(t[n],e[n]))return!1;return!0}function te(t,e){const n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(e);if(n.length!==r.length)return!1;for(let o=0,i=n.length;o<i;o++){const s=n[o];if(!P(t[s],e[s]))return!1}return!0}function ne(t,e,n={deep:!1}){return n.deep?P(t,e):Z(t,e)}async function oe(t,...e){const[n]=await c(t.changeMode(...e));if(n)throw n;await new Promise((r,o)=>{t.once("initAnimationEnded",r);const i=s=>{s!==e[0]&&o("changeMode \u88AB\u4E2D\u65AD"),t.off("modeChange",i)};t.on("modeChange",i)})}function F(t,e,n=4){return Math.floor(t*Math.pow(10,n))===Math.floor(e*Math.pow(10,n))}function w(t,e){if(t.currentMode!==f.Mode.Floorplan)return!1;const{latitude:n,longitude:r,fov:o}=e,{latitude:i,longitude:s}=t.getCurrentState(),a=t.camera.fov;return!!(F(n,i,1)&&F(r,s,1)&&o===a)}async function ie(t,e,n=!0){if(w(t,e)===!0)return;if(t.currentMode!==f.Mode.Floorplan){const[u]=await c(oe(t,f.Mode.Floorplan,e,void 0,n));if(u)throw u;if(w(t,e)===!1)throw new Error(d.ChangeModeError);return}const{latitude:o,longitude:i,fov:s}=t.getCurrentState(),a=Math.min(1e3,Math.max(200,Math.abs(o-Math.PI/2)*1e3,(i>Math.PI?2*Math.PI-i:i)*500,Math.abs(s-e.fov)*10)),[l]=await c(t.updateCamera(e,a,n));if(l)throw new Error(d.UpdateCameraError)}const re="modelFloorplanPlugin";class se{name=re;hooks;visible=!1;size={width:0,height:0};app=void 0;pxmm=0;five;panoIndex=0;floorIndex=0;configs={};lastPanoramaLongitude=0;selector;floorplanData;wrapper;container=document.createElement("div");showState;ModelFloorplanPluginsShowOpts;showPromise;showRejection;constructor(e,n){this.five=e,this.hooks=new L,this.selector=n.selector,this.configs=V(n,["selector"]),this.showState={longitude:0,latitude:Math.PI/2,fov:v/(n?.scale??1)},this.container.classList.add("floorplan-plugin"),Object.assign(this.container.style,{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:10}),this.five.model.loaded?this.handleModelLoaded():e.once("modelLoaded",this.handleModelLoaded),e.once("dispose",this.dispose),e.on("modeChange",this.handleModeChange),e.on("panoArrived",this.handlePanoArrived),e.on("wantsChangeMode",this.handleWantsChangeMode),e.on("wantsInteriaPan",this.handleWantsInteriaPan),e.on("modelShownFloorChange",this.onModelShownFloorChange)}dispose=()=>{const e=this.five;this.hide(),this.app?.$destroy(),this.container?.remove(),e.off("modelLoaded",this.handleModelLoaded),e.off("modeChange",this.handleModeChange),e.off("panGesture",this.handlePanGesture),e.off("panoArrived",this.handlePanoArrived),e.off("wantsChangeMode",this.handleWantsChangeMode),e.off("wantsInteriaPan",this.handleWantsInteriaPan),e.off("wantsTapGesture",this.handleWantsTapGesture),e.off("modelShownFloorChange",this.onModelShownFloorChange)};async load(e){const n=JSON.parse(JSON.stringify(e));this.floorplanData=await K(n),this.render()}appendTo(e){return this.wrapper=e,e.appendChild(this.container),this}updateSize=()=>{if(!this.floorplanData||!w(this.five,this.showState)||!this.container||!this.wrapper)return;const{min:e,max:n}=this.floorplanData.bounding,r=n.x-e.x,o=n.y-e.y,i=this.configs.attachedTo?{attachedTo:this.configs.attachedTo}:void 0,s=J(this.five,this.wrapper,this.floorIndex,i),a=Math.ceil(r*s),l=Math.ceil(o*s);this.size.width===a&&this.size.height===l||(this.pxmm=s,this.size={width:a,height:l},this.container.style.width=a+"px",this.container.style.height=l+"px")};show=async e=>{if(!this.showPromise&&this.visible)return!0;if(!this.five.model?.loaded)throw new Error(d.ModelNotLoaded);if(!this.floorplanData)throw new Error(d.DataNotLoaded);if(this.visible=!0,this.showPromise){const o=ne(e,this.ModelFloorplanPluginsShowOpts,{deep:!1});if(!!this.showPromise&&o)return this.showPromise;!!this.showPromise&&!o&&this.showRejection?.(d.DifferentShowParams)}this.ModelFloorplanPluginsShowOpts=e;const r=(async()=>{let o=!1,i;this.showRejection=u=>{o=!0,i=u};const[s]=await c(ie(this.five,this.showState,e?.userAction));if(s)throw s;if(o)throw i?new Error(i):new Error(d.UnknownError);if(!this.visible)throw new Error(d.UnknownError);this.visible=!0,this.updateSize(),e?.floorIndex&&(this.floorIndex=e.floorIndex),this.five.model.show(this.floorIndex);const a=e?.modelOpacity??this.configs.modelOpacity??1,l=e?.immediately?0:U;return E(this.five,a,l),this.render(l),this.five.on("wantsGesture",this.handleWantsGesture),this.five.on("wantsTapGesture",this.handleWantsTapGesture),!0})().then(()=>(this.hooks.emit("showAnimationEnded",{auto:!!e?.isAutoShow,userAction:e?.userAction??!0}),!0)).catch(o=>{if(e?.isAutoShow||!(o instanceof Error))return!1;throw o}).finally(()=>{this.showPromise=void 0,this.showRejection=void 0});return this.showPromise=r,r};hide=e=>{if(this.size.width===0||this.visible===!1)return!0;const n=!!e?.isAutoHide;return this.five.off("wantsGesture",this.handleWantsGesture),this.five.off("wantsTapGesture",this.handleWantsTapGesture),this.visible=!1,this.showRejection?.(d.BreakOffByHide),E(this.five,1,0),this.render(),this.hooks.emit("hide",{auto:n,userAction:e?.userAction??!0}),!0};changeFloor(e){this.five.model.show(e),this.floorIndex=e,this.render()}changeConfigs(e){Object.assign(this.configs,e),this.container&&this.render()}onModelShownFloorChange=e=>{e!==null&&(this.floorIndex=e,this.updateSize(),this.render())};handleModelLoaded=()=>{if(this.wrapper||!this.selector)return;const e=this.selector instanceof Element?this.selector:document.querySelector(this.selector);if(!e)throw new Error("\u4E0D\u6B63\u786E\u7684\u7236\u5BB9\u5668\u9009\u62E9\u5668");this.wrapper=e,e.append(this.container)};handleClick=()=>{if(!this.visible)return;if(this.hooks.emit("click"))return!1};handleWantsTapGesture=()=>this.handleClick();handleWantsChangeMode=e=>{e!=="Panorama"&&(this.lastPanoramaLongitude=this.five.getCurrentState().longitude),e!=="Floorplan"&&this.hide()};handleModeChange=e=>{e==="Floorplan"?this.five.on("panGesture",this.handlePanGesture):(this.hide(),this.five.off("panGesture",this.handlePanGesture))};handlePanoArrived=e=>{!this.five?.work||(this.panoIndex=e,this.floorIndex=this.five.work.observers[e].floorIndex)};handleWantsInteriaPan=()=>{if(this.visible)return!1};handleWantsGesture=(e,n)=>{if(!!this.visible&&(n.length>1||e==="mouseWheel"))return!1};handlePanGesture=async({latitude:e,longitude:n},r)=>{if(this.configs.autoShowEnable===!1)return;if(r&&this.visible)return this.five.setState(this.showState,!0);const o=Math.abs(e-Math.PI/2)>5*Math.PI/180,i=n>5*(Math.PI/180)&&n<355*(Math.PI/180),s=o||i;if(this.visible&&s)return this.hide({isAutoHide:!0});if(this.five.camera.fov/v<.8)return;const a=Math.abs(e-Math.PI/2)<10*Math.PI/180,l=n<30*(Math.PI/180)||n>330*(Math.PI/180);if(r&&!this.visible&&a&&l){const u=async(O,x)=>{!x||(this.five.off("interiaPan",u),await this.show({isAutoShow:!0}))};this.five.on("interiaPan",u);return}};render(e){if(!this.container||!this.floorplanData||this.size.width===0)return;const{hoverEnable:n,cameraImageUrl:r,getLabelElement:o,roomLabelsEnable:i,compassEnable:s,ruleLabelsEnable:a}=this.configs,l={five:this.five,pxmm:this.pxmm,cameraImageUrl:r,visible:this.visible,duration:e??0,panoIndex:this.panoIndex,floorIndex:this.floorIndex,floorplanData:this.floorplanData,hoverEnable:n??!1,compassEnable:s??!0,ruleLabelsEnable:a??!0,roomLabelsEnable:i??!0,lastPanoramaLongitude:this.lastPanoramaLongitude,getLabelElement:o,onRoomHeightClick:this.handleClick};this.app?this.app.$set(l):this.app=new $({target:this.container,intro:!0,props:l})}}const ae=(t,e)=>new se(t,e);function y(){return{width:window.innerWidth,height:window.innerHeight}}function le(){const[t,e]=g.exports.useState(y);return g.exports.useEffect(()=>{const n=()=>e(y());return window.addEventListener("resize",n,!1),()=>window.removeEventListener("resize",n,!1)}),t}const he=t=>{const e=N(),[n,r]=_(),o=D(),i=A(I.FLOOR_PLAN_SERVER_PLUGIN_DATA);return g.exports.useEffect(()=>{e.plugins.modelFloorplanPlugin.hooks.on("showAnimationEnded",()=>{console.log("\u{1F436}-- ModelFloorplanPlugin -- show")}),e.plugins.modelFloorplanPlugin.hooks.on("hide",()=>{console.log("\u{1F436}-- ModelFloorplanPlugin -- hide")})},[e]),M("modelLoaded",()=>{!i||JSON.stringify(i)==="{}"||Promise.resolve(e.plugins.modelFloorplanPlugin.load(i)).then(()=>{e.plugins.modelFloorplanPlugin.show()})},[i]),M("initAnimationEnded",()=>{n.mode===f.Mode.Floorplan&&e.plugins.modelFloorplanPlugin.show()},[n.mode]),o!=="Loaded"?null:h(k,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"topview-floorplan-plugin-use",children:C(j,{showLabels:!0,value:n.mode,onChange:(s,a)=>{r({mode:a})},children:[h(b,{label:"\u5168\u666F\u6F2B\u6E38",icon:h(G,{}),value:f.Mode.Panorama}),h(b,{label:"\u7A7A\u95F4\u603B\u89C8",icon:h(T,{}),value:f.Mode.Floorplan})]})})},de={attachedTo:B.CEILING},S=Y(),ue=JSON.stringify(S)!=="{}"?S:de,fe=W({imageOptions:{size:512},textureOptions:{size:512},plugins:[[ae,"modelFloorplanPlugin",{selector:".plugin-full-screen-container",...ue}]]}),ce=()=>{const t=le(),e=A(I.WORK);return e&&C(fe,{initialWork:R(e),ref:n=>Object.assign(window,{$five:n?.five}),children:[h(z,{...t}),h(q,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),h(he,{})]})};H.render(h(ce,{}),document.querySelector("#app"));
