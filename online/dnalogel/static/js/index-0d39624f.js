import{S as C,P as D,O as p,D as w,V as m,A as L,M as h,W as R,s as W,G as M}from"./vendor-1f431ae3.js";const G=s=>{let u=!0,o=null;const i=new C,c=new D(60,1,.1,1e3);let d=new p;{const t=new w(16777215,.5);t.position.copy(new m(1,1,1)),i.add(t)}{const t=new w(16777215,.3);i.add(t)}{const t=new L(16777215,.3);i.add(t)}i.add(d);const x=()=>{if(!!s.renderer)return o||(o=new R({antialias:!1,alpha:!0}),o.setPixelRatio(s.renderer.getPixelRatio()),o.outputEncoding=W,o.setClearColor(1579548,0),o.autoClear=!0),o},y=()=>{d.traverse(t=>{t instanceof h&&[].concat(t.material).forEach(e=>e.dispose())}),i.remove(d),d=new p,i.add(d),l()},E=()=>{function t(e){return e=e.clone(),e.uniforms.modelAlpha.value=1,e.uniforms.map.value&&(e.uniforms.map.value.needsUpdate=!0),e}function r(e){if(e instanceof h){const n=e.geometry,a=Array.isArray(e.material)?e.material.map(t):t(e.material);return new h(n,a)}else if(e instanceof M){const n=new M;return e.children.forEach(a=>n.add(r(a))),n}else{const n=new p;return e.children.forEach(a=>n.add(r(a))),n}}i.remove(d),d=r(s.model),i.add(d),l()},N=(t,r={})=>{const e=x();if(!e)return;t.appendChild(e.domElement),g(r);const n=window.getComputedStyle(t).position;n!=="relative"&&n!=="absolute"&&n!=="fixed"&&n!=="sticky"&&(t.style.position="relative")},g=(t={})=>{if(!o)return;const e=o.domElement.parentNode;if(e&&e.nodeName){const{width:n=e.offsetWidth,height:a=e.offsetHeight}=t;o.setSize(n,a),c.aspect=n/a,c.updateProjectionMatrix()}l()},P=()=>{const t=s.model.bounding,{fov:r,aspect:e}=c,n=Math.sqrt(Math.pow(t.max.x-t.min.x+2,2)+Math.pow(t.max.y-t.min.y+2,2)+Math.pow(t.max.z-t.min.z+2,2));let a=n/2/Math.tan(Math.PI*r/360);return e<1&&(a=a/e),isNaN(a)?n:a},l=()=>{const{longitude:t,latitude:r}=s.getPose(),e=P(),n=s.model.bounding.getCenter(new m),a=e*Math.cos(r),f=new m;f.x=Math.sin(t)*a+n.x,f.z=Math.cos(t)*a+n.z,f.y=Math.sin(r)*e+n.y,c.position.copy(f),c.lookAt(n),u=!0},b=()=>{u!==!0||!o||!o.domElement.parentNode||o.domElement.parentNode.offsetWidth===0||(o.render(i,c),u=!1)},A=()=>{o&&o.dispose(),o=null};return s.on("modelLoaded",E),s.on("modelWillLoad",y),s.on("cameraDirectionUpdate",l),s.on("dispose",A),s.on("renderFrame",b),{appendTo:N,refresh:g}};export{G as M};
