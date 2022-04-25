import{u as U,D as Q}from"./useFetchDatas-9069443e.js";import{V as $,F as ie,a9 as le,r as G,b as ce,a as ue,aa as de,j,B as fe,ab as me,az as he,c as ye,d as pe,p as ge,e as be,R as xe}from"./vendor-1f431ae3.js";import"./constants-62640824.js";import{t as we}from"./throttle-19b08aa2.js";function te(e,t){return e.x===t.x&&e.y===t.y}function oe(e,t){return Math.abs(e)===1/0&&Math.abs(t)===1/0?!0:Math.abs(e-t)<.001}function H(e,t){return(t.y-e.y)/(t.x-e.x)}function Me(e,t,n){const r=H(e[1],e[0]),s=H(t[1],t[0]);if(isNaN(r)||isNaN(s)||oe(r,s))return!1;if(X(e[0],t))return e[0];if(X(e[1],t))return e[1];if(X(t[0],e))return t[0];if(X(t[1],e))return t[1];if(n&&!Fe(e,t))return!1;const h=e[0],a=t[0];if(Math.abs(r)===1/0)return{x:h.x,y:t[1].y-(t[1].x-h.x)*s};if(Math.abs(s)===1/0)return{x:a.x,y:e[1].y-(e[1].x-a.x)*r};const c=(a.y-h.y+r*h.x-s*a.x)/(r-s),E=r*c-r*h.x+h.y;return{x:c,y:E}}function X(e,t){return te(e,t[0])||te(e,t[1])?!0:(t[0].x-e.x)*(e.x-t[1].x)>=0&&(t[0].y-e.y)*(e.y-t[1].y)>=0&&oe(H(t[0],e),H(e,t[1]))}function Y(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Fe(e,t){return Math.max(e[0].x,e[1].x)>=Math.min(t[0].x,t[1].x)&&Math.max(t[0].x,t[1].x)>=Math.min(e[0].x,e[1].x)&&Math.max(e[0].y,e[1].y)>=Math.min(t[0].y,t[1].y)&&Y(t[0],e[1],e[0])*Y(e[1],t[1],e[0])>0&&Y(e[0],t[1],t[0])*Y(t[1],e[1],t[0])>0?1:0}function re(e,t=0){t<=0?requestAnimationFrame(e):requestAnimationFrame(()=>re(e,t-1))}const Re=`<style type="text/css">
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
`,ve=(e,t)=>Math.sqrt(Math.pow(e.z-t.z,2)+Math.pow(e.x-t.x,2)),_e=(e,t)=>{const n={},r=new le,s=t.work;if(!s)return n;const h=e.observers;s.observers.forEach((a,c)=>{const{standingPosition:E}=a,A=new $(E.x,E.y,E.z);r.set(A,new $(0,1,0));const[O]=t.model.intersectRaycaster(r),I=O?O.point.y:2.7,z=h[c];if(!z)return n;const q=e.rooms[z].name;n[q]===void 0?n[q]={__roof:[I],__floor:[A.y]}:(n[q].__roof.push(I),n[q].__floor.push(A.y))});for(const a in n){const c=n[a];c.__roof.sort(),c.__floor.sort(),c.floor=c.__floor[~~(c.__floor.length/2)],c.roof=c.__roof[c.__roof.length-1]}return n},ke=(e,t)=>{const n={enable:!1,loaded:!1,options:t.options||{distanceText:y=>`${y.toFixed(1)}m`}},r=(y,g)=>{const u=`
      <div class="PanoRulerPlugin-rule-line">
        <em></em>
        <div class="PanoRulerPlugin-rule-label">
          <div class="PanoRulerPlugin-rule-label-name">${n.options.distanceText(g)}</div>
        </div>
      </div>
    `,i=document.createElement("div");return i.setAttribute("class","PanoRulerPlugin-rule"),i.setAttribute("data-name",y),i.setAttribute("style","display: none"),i.innerHTML=u,i},s=document.createElement("div");s.setAttribute("style","position: absolute;pointer-events: none;width: 100%;height: 100%;left: 0;top: 0;overflow: hidden;");const h=document.createElement("div");h.innerHTML=Re,s.appendChild(h);const a={},c=(y,g)=>{if(n.loaded)throw new Error("\u6807\u5C3A\u88AB\u91CD\u590D\u521D\u59CB\u5316\uFF01");const u=_e(y,e),i=e.work;if(!i)return!1;for(const l in g){const x=g[l],{standingPosition:w}=i.observers[0],M=x.map(({x:d,z:f,observers:o})=>{const b=o.length>0?y.rooms[y.observers[o[0]]].name:"",m=u[b]?u[b].floor:null;let p=1/0,F={index:0,x:w.x,y:w.y,z:w.z};o.forEach(C=>{if(!i.observers[C])return;const{standingPosition:L}=i.observers[C],_={index:C,x:L.x,y:L.y,z:L.z},k=ve({x:d,z:f},_);m?k<p&&Math.abs(_.y-m)<.3&&(p=k,F=_):k<p&&(p=k,F=_)});const v=new $(d,F.y,f);Object.assign(v,{observers:o});const B=u[b]?u[b].roof:null,D=B?new $(d,B,f):null;return D&&Object.assign(D,{observers:o}),{origin:v,vertical:D}});a[l]={origins:M.map(d=>d.origin),rules:[]};for(const{origin:d,vertical:f}of M){if(!f)continue;const o=r(l,d.distanceTo(f));s.append(o),a[l].rules.push({vertical:!0,rule:[d,f],$element:o})}for(let d=0;d<M.length;d++){let f=d+1;f>=M.length&&(f=0);const{origin:o}=M[d],{origin:b}=M[f],m=r(l,o.distanceTo(b));s.append(m),a[l].rules.push({vertical:!1,rule:[o,b],$element:m})}}return n.loaded=!0,!0},E=async(y,g,u)=>{const i=y||t.roomInfo,l=g||t.roomRules;if(!i||!l)throw new Error("\u6807\u5C3A\u6570\u636E\u4F9D\u8D56\u4E0D\u9F50\u5168\uFF01");return n.options=Object.assign({},n.options,u||{}),e.model.loaded?c(i,l):await new Promise(x=>e.once("modelLoaded",()=>x(c(i,l))))};t.roomInfo&&t.roomRules&&E(t.roomInfo,t.roomRules);const A=(y,g,u,i)=>{const l=[[{x:0,y:0},{x:u,y:0}],[{x:0,y:0},{x:0,y:i}],[{x:u,y:0},{x:u,y:i}],[{x:0,y:i},{x:u,y:i}]],x=[];for(let w=0;w<l.length;w++){const M=Me([y,g],[l[w][0],l[w][1]],!0);M&&x.push(M)}return x.length===0?!1:x},O=()=>{const y=e.getElement()?.parentElement;if(!y||!n.loaded||Object.keys(a).length<=0)return;const{panoIndex:g,camera:u,currentMode:i}=e;if(g===void 0)return;let l;for(const o in a)o.split(",").indexOf(g.toString())>=0&&(l=o);if(!l)return;const x=u.position,w=u.getWorldDirection(new $),M=y.clientWidth,d=y.clientHeight;if(i!==ie.Mode.Panorama){for(const o in a)for(const{$element:b}of a[o].rules)b.style.display="none";return}for(const o in a)for(const{$element:b}of a[o].rules)b.style.display=o===l?"block":"none";const[f]=a[l].origins.slice().filter(o=>o.observers.indexOf(g)>=0).sort((o,b)=>{const m=o.clone().setY(0).sub(x).normalize().angleTo(w.clone().setY(0)),p=b.clone().setY(0).sub(x).normalize().angleTo(w.clone().setY(0));return m-p});for(const{rule:o,vertical:b,$element:m}of a[l].rules){const[p,F]=o,v=m.querySelector(".PanoRulerPlugin-rule-line");if(!v)return;if(!f){m.style.display="none";continue}if(p!==f&&F!==f){m.style.display="none";continue}if(p.distanceTo(F)<.5){m.style.display="none";continue}if(p.observers.indexOf(g)===-1||F.observers.indexOf(g)===-1){m.style.display="none";continue}if(p.clone().sub(x).normalize().angleTo(w)>Math.PI/2){m.style.display="none";continue}if(F.clone().sub(x).normalize().angleTo(w)>Math.PI/2){m.style.display="none";continue}const V=p.distanceTo(F);if(F.clone().sub(F.clone().sub(p).divide(new $(2,2,2))).distanceTo(x)/V>8){m.style.display="none";continue}const L=p.clone().project(u),_=(L.x+1)/2*M,k=(-L.y+1)/2*d,J=F.clone().project(u),W=(J.x+1)/2*M,N=(-J.y+1)/2*d,T=Math.sqrt(Math.pow(W-_,2)+Math.pow(N-k,2));let P=T,S=50;const R=A({x:~~_,y:~~k},{x:~~W,y:~~N},M,d);if(R&&R.length===1&&(f===p?(P=Math.sqrt(Math.pow(R[0].x-_,2)+Math.pow(R[0].y-k,2)),S=P/T*50):f===F&&(P=Math.sqrt(Math.pow(R[0].x-W,2)+Math.pow(R[0].y-N,2)),S=100-P/T*50)),R&&R.length===2){const ee={x:(R[0].x+R[1].x)/2,y:(R[0].y+R[1].y)/2};S=Math.sqrt(Math.pow(ee.x-_,2)+Math.pow(ee.y-k,2))/T*100}const ae=(Math.PI/2-Math.atan2(W-_,k-N))/Math.PI*180,Z=v.querySelector(".PanoRulerPlugin-rule-label"),K=Z.children[0].clientWidth;K>=T||K/2>=S/100*T||K/2>=(1-S/100)*T?v.style.display="none":(v.style.display="block",v.style.width=T+"px",v.style.left=_+"px",v.style.top=k+"px",v.style.transform=`rotate(${-ae}deg)`,Z.style.left=`${S}%`)}},I=()=>re(O),z=we(O,80);return{enable:()=>n.loaded?(n.enable||(s.setAttribute("class","PanoRulerPlugin"+(n.options.className?" "+n.options.className:"")),e.getElement()?.parentElement?.append(s),O(),e.on("panoArrived",O),e.on("modeChange",O),e.on("cameraDirectionUpdate",I),e.on("movingToPano",I),e.on("mouseWheel",z),e.on("pinchGesture",z),n.enable=!0),!0):!1,disable:()=>(n.enable&&(e.off("panoArrived",O),e.off("modeChange",O),e.off("cameraDirectionUpdate",I),e.off("movingToPano",I),e.off("mouseWheel",z),e.off("pinchGesture",z),s&&s.remove(),n.enable=!1),!0),load:E,state:n}};function ne(){return{width:window.innerWidth,height:window.innerHeight}}function Ee(){const[e,t]=G.exports.useState(ne);return G.exports.useEffect(()=>{const n=()=>t(ne());return window.addEventListener("resize",n,!1),()=>window.removeEventListener("resize",n,!1)}),e}const Oe=e=>{const t=ce(),r=ue().plugins.panoRulerPlugin,s=U(Q.ROOM_INFO,"pWLy9nekmQdMXqja"),h=U(Q.ROOM_RULES,"pWLy9nekmQdMXqja"),[a,c]=G.exports.useState(r.state.enable);de("modelLoaded",async()=>{!s||!h||(await r.load(s,h,{distanceText:A=>`\u7EA6 ${A.toFixed(1)}\u7C73`}),r.enable(),c(r.state.enable))},[s,h]);const E=()=>{r[r.state.enable?"disable":"enable"](),c(r.state.enable)};return t!=="Loaded"?null:j(fe,{children:j(me,{sx:{position:"fixed",top:"10px",right:"10px",backgroundColor:"transparent"},children:j(he,{onClick:E,children:a?"\u5173\u95ED\u6807\u5C3A":"\u5F00\u542F\u6807\u5C3A"})})})},Te=ye({imageOptions:{size:512},textureOptions:{size:512},onlyRenderIfNeeds:!0,plugins:[[ke,"panoRulerPlugin",{}]]}),Ae=()=>{const e=Ee(),t=U(Q.WORK,"pWLy9nekmQdMXqja");return t&&pe(Te,{initialWork:ge(t),ref:n=>Object.assign(window,{$five:n?.five}),children:[j(be,{...e}),j(Oe,{})]})};xe.render(j(Ae,{}),document.querySelector("#app"));
