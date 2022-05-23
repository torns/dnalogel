import{u as Q,D as G}from"./useFetchDatas-b277a088.js";import{V as j,F as le,a8 as ce,r as V,b as ue,a as de,a9 as fe,j as q,B as me,aa as he,az as ye,c as pe,d as ge,p as be,e as xe,$ as we}from"./vendor-b2bf1e8d.js";import"./typings-ddaad332.js";import{t as ve}from"./throttle-19b08aa2.js";function ne(e,t){return e.x===t.x&&e.y===t.y}function re(e,t){return Math.abs(e)===1/0&&Math.abs(t)===1/0?!0:Math.abs(e-t)<.001}function K(e,t){return(t.y-e.y)/(t.x-e.x)}function Me(e,t,n){const r=K(e[1],e[0]),s=K(t[1],t[0]);if(isNaN(r)||isNaN(s)||re(r,s))return!1;if(H(e[0],t))return e[0];if(H(e[1],t))return e[1];if(H(t[0],e))return t[0];if(H(t[1],e))return t[1];if(n&&!Fe(e,t))return!1;const y=e[0],a=t[0];if(Math.abs(r)===1/0)return{x:y.x,y:t[1].y-(t[1].x-y.x)*s};if(Math.abs(s)===1/0)return{x:a.x,y:e[1].y-(e[1].x-a.x)*r};const l=(a.y-y.y+r*y.x-s*a.x)/(r-s),E=r*l-r*y.x+y.y;return{x:l,y:E}}function H(e,t){return ne(e,t[0])||ne(e,t[1])?!0:(t[0].x-e.x)*(e.x-t[1].x)>=0&&(t[0].y-e.y)*(e.y-t[1].y)>=0&&re(K(t[0],e),K(e,t[1]))}function B(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Fe(e,t){return Math.max(e[0].x,e[1].x)>=Math.min(t[0].x,t[1].x)&&Math.max(t[0].x,t[1].x)>=Math.min(e[0].x,e[1].x)&&Math.max(e[0].y,e[1].y)>=Math.min(t[0].y,t[1].y)&&B(t[0],e[1],e[0])*B(e[1],t[1],e[0])>0&&B(e[0],t[1],t[0])*B(t[1],e[1],t[0])>0?1:0}function se(e,t=0){t<=0?requestAnimationFrame(e):requestAnimationFrame(()=>se(e,t-1))}const Re=`<style type="text/css">
.PanoRulerPlugin-rule-line {
  position: absolute;
  transform-origin: left center;
  width: 0;
  height: 0.0625rem;
}

.PanoRulerPlugin-rule-line::after {
  content: '';
  position: absolute;
  left: -0.125rem;
  top: -0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: #FFFFFF;
  z-index: 1;
  animation: viewport-rule-point 0.1s 1s;
  animation-fill-mode: both;
}

.PanoRulerPlugin-rule-line::before {
  content: '';
  position: absolute;
  right: -0.125rem;
  top: -0.1rem;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: #FFFFFF;
  animation: viewport-rule-point 0.1s 1.5s;
  animation-fill-mode: both;
}

.PanoRulerPlugin-rule-line em {
  background: #fff;
  display: block;
  height: 100%;
  animation: viewport-rule-line 0.5s ease 1s;
  animation-fill-mode: both;
  box-shadow: 0 0 0.25rem rgb(0 0 0 / 40%);
}

.PanoRulerPlugin-rule-label {
  position: absolute;
  width: 0;
  height: 0;
  top: 0.0625rem;
}

.PanoRulerPlugin-rule-label-name {
  position: absolute;
  padding: 0.1875rem 0.375rem;
  background: rgba(195,195,195,0.30);
  backdrop-filter: blur(0.25rem);
  -webkit-backdrop-filter: blur(0.25rem);
  border-radius: 6.25rem;
  border: 0.0625rem solid rgba(255,255,255,0.6);
  white-space: nowrap;
  overflow: hidden;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1;
  -webkit-animation: viewport-rule-label 0.25s ease 1s;
  animation: viewport-rule-label 0.25s ease 1s;
  animation-fill-mode: both;
  box-shadow: inset 0 0 0.625rem 0 rgba(255,255,255,0.30);
}

@keyframes viewport-rule-line {
  0% { width: 0% }
  100% { width: 100% }
}

@keyframes viewport-rule-label {
  0% { opacity: 0; transform: scaleX(0); }
  100% { opacity: 1; transform: translate(-50%, -50%) scaleX(1); }
}

@keyframes viewport-rule-point {
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
}
</style>
`,_e=(e,t)=>Math.sqrt(Math.pow(e.z-t.z,2)+Math.pow(e.x-t.x,2)),ke=(e,t)=>{const n={},r=new ce,s=t.work;if(!s)return n;const y=e.observers;s.observers.forEach((a,l)=>{const{standingPosition:E}=a,A=new j(E.x,E.y,E.z);r.set(A,new j(0,1,0));const[O]=t.model.intersectRaycaster(r),I=O?O.point.y:2.7,z=y[l];if(!z)return n;const D=e.rooms[z].name;n[D]===void 0?n[D]={__roof:[I],__floor:[A.y]}:(n[D].__roof.push(I),n[D].__floor.push(A.y))});for(const a in n){const l=n[a];l.__roof.sort(),l.__floor.sort(),l.floor=l.__floor[~~(l.__floor.length/2)],l.roof=l.__roof[l.__roof.length-1]}return n},Ee=(e,t)=>{const n={enable:!1,loaded:!1,options:t.options||{distanceText:c=>`${c.toFixed(1)}m`}},r=(c,m)=>{const u=`
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${n.options.distanceText(m)}</div>
        </div>
      </div>
    `,o=document.createElement("div");return o.setAttribute("class","PanoRulerPlugin-rule"),o.setAttribute("data-name",c),o.setAttribute("style","display: none"),o.innerHTML=u,o},s=document.createElement("div");s.setAttribute("style","position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;");const y=document.createElement("div");y.innerHTML=Re,s.appendChild(y);const a={},l=(c,m)=>{if(n.loaded)throw new Error("\u6807\u5C3A\u88AB\u91CD\u590D\u521D\u59CB\u5316\uFF01");const u=ke(c,e),o=e.work;if(!o)return!1;for(const h in m){const v=m[h],{standingPosition:b}=o.observers[0],x=v.map(({x:d,z:p,observers:f})=>{const i=f.length>0?c.rooms[c.observers[f[0]]].name:"",M=u[i]?u[i].floor:null;let g=1/0,w={index:0,x:b.x,y:b.y,z:b.z};f.forEach(W=>{if(!o.observers[W])return;const{standingPosition:N}=o.observers[W],L={index:W,x:N.x,y:N.y,z:N.z},k=_e({x:d,z:p},L);M?k<g&&Math.abs(L.y-M)<.3&&(g=k,w=L):k<g&&(g=k,w=L)});const F=new j(d,w.y,p);Object.assign(F,{observers:f});const _=u[i]?u[i].roof:null,C=_?new j(d,_,p):null;return C&&Object.assign(C,{observers:f}),{origin:F,vertical:C}});a[h]={origins:x.map(d=>d.origin),rules:[]};for(const{origin:d,vertical:p}of x){if(!p)continue;const f=r(h,d.distanceTo(p));s.append(f),a[h].rules.push({vertical:!0,rule:[d,p],$element:f})}for(let d=0;d<x.length;d++){let p=d+1;p>=x.length&&(p=0);const{origin:f}=x[d],{origin:i}=x[p],M=r(h,f.distanceTo(i));s.append(M),a[h].rules.push({vertical:!1,rule:[f,i],$element:M})}}return n.loaded=!0,!0},E=async(c,m,u)=>{const o=c||t.roomInfo,h=m||t.roomRules;if(!o||!h)throw new Error("\u6807\u5C3A\u6570\u636E\u4F9D\u8D56\u4E0D\u9F50\u5168\uFF01");return n.options=Object.assign({},n.options,u||{}),e.model.loaded?l(o,h):await new Promise(v=>e.once("modelLoaded",()=>v(l(o,h))))};t.roomInfo&&t.roomRules&&E(t.roomInfo,t.roomRules);const A=(c,m,u,o)=>{const h=[[{x:0,y:0},{x:u,y:0}],[{x:0,y:0},{x:0,y:o}],[{x:u,y:0},{x:u,y:o}],[{x:0,y:o},{x:u,y:o}]],v=[];for(let b=0;b<h.length;b++){const x=Me([c,m],[h[b][0],h[b][1]],!0);x&&v.push(x)}return v.length===0?!1:v},O=()=>{var c;const m=(c=e.getElement())===null||c===void 0?void 0:c.parentElement;if(!m||!n.loaded||Object.keys(a).length<=0)return;const{panoIndex:u,camera:o,currentMode:h}=e;if(u===void 0)return;let v;for(const i in a)i.split(",").indexOf(u.toString())>=0&&(v=i);if(!v)return;const b=o.position,x=o.getWorldDirection(new j),d=m.clientWidth,p=m.clientHeight;if(h!==le.Mode.Panorama){for(const i in a)for(const{$element:M}of a[i].rules)M.style.display="none";return}for(const i in a)for(const{$element:M}of a[i].rules)M.style.display=i===v?"block":"none";const[f]=a[v].origins.slice().filter(i=>i.observers.indexOf(u)>=0).sort((i,M)=>{const g=i.clone().setY(0).sub(b).normalize().angleTo(x.clone().setY(0)),w=M.clone().setY(0).sub(b).normalize().angleTo(x.clone().setY(0));return g-w});for(const{rule:i,vertical:M,$element:g}of a[v].rules){const[w,F]=i,_=g.querySelector(".PanoRulerPlugin-rule-line");if(!_)return;if(!f){g.style.display="none";continue}if(w!==f&&F!==f){g.style.display="none";continue}if(w.distanceTo(F)<.5){g.style.display="none";continue}if(w.observers.indexOf(u)===-1||F.observers.indexOf(u)===-1){g.style.display="none";continue}if(w.clone().sub(b).normalize().angleTo(x)>Math.PI/2){g.style.display="none";continue}if(F.clone().sub(b).normalize().angleTo(x)>Math.PI/2){g.style.display="none";continue}const J=w.distanceTo(F);if(F.clone().sub(F.clone().sub(w).divide(new j(2,2,2))).distanceTo(b)/J>8){g.style.display="none";continue}const L=w.clone().project(o),k=(L.x+1)/2*d,S=(-L.y+1)/2*p,Z=F.clone().project(o),P=(Z.x+1)/2*d,X=(-Z.y+1)/2*p,T=Math.sqrt(Math.pow(P-k,2)+Math.pow(X-S,2));let Y=T,$=50;const R=A({x:~~k,y:~~S},{x:~~P,y:~~X},d,p);if(R&&R.length===1&&(f===w?(Y=Math.sqrt(Math.pow(R[0].x-k,2)+Math.pow(R[0].y-S,2)),$=Y/T*50):f===F&&(Y=Math.sqrt(Math.pow(R[0].x-P,2)+Math.pow(R[0].y-X,2)),$=100-Y/T*50)),R&&R.length===2){const te={x:(R[0].x+R[1].x)/2,y:(R[0].y+R[1].y)/2};$=Math.sqrt(Math.pow(te.x-k,2)+Math.pow(te.y-S,2))/T*100}const ie=(Math.PI/2-Math.atan2(P-k,S-X))/Math.PI*180,ee=_.querySelector(".PanoRulerPlugin-rule-label"),U=ee.children[0].clientWidth;U>=T||U/2>=$/100*T||U/2>=(1-$/100)*T?_.style.display="none":(_.style.display="block",_.style.width=T+"px",_.style.left=k+"px",_.style.top=S+"px",_.style.transform=`rotate(${-ie}deg)`,ee.style.left=`${$}%`)}},I=()=>se(O),z=ve(O,80);return{enable:()=>{var c,m;return n.loaded?(n.enable||(s.setAttribute("class","PanoRulerPlugin"+(n.options.className?" "+n.options.className:"")),(m=(c=e.getElement())===null||c===void 0?void 0:c.parentElement)===null||m===void 0||m.append(s),O(),e.on("panoArrived",O),e.on("modeChange",O),e.on("cameraDirectionUpdate",I),e.on("movingToPano",I),e.on("mouseWheel",z),e.on("pinchGesture",z),n.enable=!0),!0):!1},disable:()=>(n.enable&&(e.off("panoArrived",O),e.off("modeChange",O),e.off("cameraDirectionUpdate",I),e.off("movingToPano",I),e.off("mouseWheel",z),e.off("pinchGesture",z),s&&s.remove(),n.enable=!1),!0),load:E,state:n}};function oe(){return{width:window.innerWidth,height:window.innerHeight}}function Oe(){const[e,t]=V.exports.useState(oe);return V.exports.useEffect(()=>{const n=()=>t(oe());return window.addEventListener("resize",n,!1),()=>window.removeEventListener("resize",n,!1)}),e}const Te=e=>{const t=ue(),r=de().plugins.panoRulerPlugin,s=Q(G.ROOM_INFO,"pWLy9nekmQdMXqja"),y=Q(G.ROOM_RULES,"pWLy9nekmQdMXqja"),[a,l]=V.exports.useState(r.state.enable);fe("modelLoaded",async()=>{!s||!y||(await r.load(s,y,{distanceText:A=>`\u7EA6 ${A.toFixed(1)}\u7C73`}),r.enable(),l(r.state.enable))},[s,y]);const E=()=>{r[r.state.enable?"disable":"enable"](),l(r.state.enable)};return t!=="Loaded"?null:q(me,{children:q(he,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent"},children:q(ye,{onClick:E,children:a?"\u5173\u95ED\u6807\u5C3A":"\u5F00\u542F\u6807\u5C3A"})})})},Ae=pe({imageOptions:{size:512},textureOptions:{size:512},onlyRenderIfNeeds:!0,plugins:[[Ee,"panoRulerPlugin",{}]]}),Ie=()=>{const e=Oe(),t=Q(G.WORK,"pWLy9nekmQdMXqja");return t&&ge(Ae,{initialWork:be(t),ref:n=>Object.assign(window,{$five:n?.five}),children:[q(xe,{...e}),q(Te,{})]})};we.render(q(Ie,{}),document.querySelector("#app"));
