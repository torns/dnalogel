import{u as H,D as J}from"./useFetchDatas-9069443e.js";import{g as N,i as R,h as B,k as G,l as x,a6 as Y,y as W,m as F,n as A,a7 as L,o as C,q as w,a2 as _,a8 as V,t as y,v as E,U as Z,I as U,J as q,L as X,N as K,Q as $,Z as ee,_ as te,z as ne,Y as oe,x as ie,w as se,X as ae,a3 as re,V as P,a9 as le,r as j,u as fe,a as ce,b as de,aa as ue,F as k,j as h,ab as me,d as T,ac as ve,ad as M,ae as he,af as pe,c as Ae,p as be,e as ge,B as we,R as xe}from"./vendor-1f431ae3.js";import{g as Fe}from"./getInitialParamFromUrl-9191fb83.js";const Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA8CAYAAACZ1L+0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAPAAAAABU0H2EAAARRElEQVR4Ad2czY9cRZbFq1yFoQGDNCzwuAENohl54dkgdrNh34tZ8GciFi31nwEsmAEhhAWD1GMJCZgx5sMfUHN+J+NE3XfrZWWVcVVLHVLmuXG/74148V5m2bm/N8bR0dH+Bx988Po333zzbz///PONg4ODa+I9I9y/cuXKgV77h4eH+1KH3hP/yv7+vuBAsG+5UCIpCkMzDQ962Eu80Q1P/KmHT82v8IocZFL4pslDvL3fNARHoPI2wtbrV1jBIf9N8SEZ0UUP2wFHv2ocSc/2ouEz8PVooJXQ0/j10aNHoH2Idj4PHz4k1n29/k+5/u3ll1/+r7fffvtLzfGzd8ibjK6+9957f5ajf1XzH9y7d+8Xjf9FRs1SdvNBBg2SDQ1xh9ALH4yN0M2BNZrKwtFc9Fmkquuma5HJBzvLiIONBnx40B7QIzTdxCcNwj3dYlEoUmabAU+UFZDpxah22Ng2NjQXH0LrwccGwyEzXfWhWQwSYQHYuFevXj14/vnn37h79+7Nr7766gup/FX5PnAj33///f/46aef3vj444/vfPbZZz9IYGMcnDbkhEYQL001Hfsu775i+7j6LID6cDQWYo8mabGMxOr+e/ye3y7989p3/9jfvHnz2q1bt25oMb549913/3Lwzjvv/Mu3337775988smdzz///AcVQ+IecsAOp8OOHRpkiJniWQnrBJmwc7EF8atxBA2ihx/obf7Qqa+un+aDI0f7k08nU+PLj3PBR+qpcvFdd3BNP7YgI7mnHqHzBRndv1hH33///QNtlAcvvfTSq999992dQzFu/vjjj/c//fTTu1z+unT2wDFoHN13QbVg5CQS3tBfQGwHoo+chltPto4FMsR3nKCZ7a3KyDM+UOOyHzV4xxAHOTjGqfVcVv23b9++++abb/4TvT+8f//+dS3ALzqj3MxgMq6IjAUC4as4CrbdmLtA8S2vttA0D5vSxNBnOvLwK1vO4K3+FSY+Z/Ol71RiC8JI7iBzcrus+nWfvf/iiy/+86Eux2u6JO6RQBoTFCvFOGEKkcyFRZ+kt+kP/pRHF9xiD3uOrs8OFW9eoaFBxorcsfGDvOdTeJCRTxQruT/x+rXxH6nvzx1qRx+I4FHJQZxJeat8CqCY0vCarG+AnK86++whdDlzeQrZKieWhmCTC3GgEy+x01DiKHfuK6vxYhfcYj/zKWVPMrnAwE98RCG+mZPHafVVOX71hPRUHkOpnMe9+SSBQ5wpgJF5mlGTgp+R5oHwhj/7Za7kzQMZ8RPsBaZYEH3k6KbotfySQ/Tjg7lsXQ/IQFc5Chb5zgUR/8LqJyi99QJA0CySFc4znUTFm3d2Cq8FuYryFhk42HLh3bz1zI4N+qGLvXkJMXKcDer6yE+7IuInuObvMusn/iHNz4DBqoMM0W4gyJxmsgijqSfkyNALdv3YRl51oXfFP4u+fCjd43xTQ/wLtx5Zu+L3euI78VJXsOvX+hXrijbL3qEIP1lEObuKhENnR+IgvDU5vD7wGx4Fyn4ucHzFfy8I2/Dio2JkIPyu3+XEp2iQ0ePvqm+X3E7b27b64ZPHYRrCE0R/jq68kfB80mBOQhWhTxu9YHTTfOi+QGLZf7Dbd/3UAjK6PDwL9dafmi6zfm0Ob8xDVkIJs7O5ErxDQQaFhMdctHVB5o8xfLXJzo0dC1wfKxefK1b8L+xHHuGhHjobgzzDO+Fu1Dw/V6RWkHGR9avv5LW5CRNs7Aaf8Qq82mAZUNh8CkEPXvRDDz3cLob4zB0YAjvF3Wrf/fcdK3nyxt2k0WNoR/MlopG54i820Iq/RT3Y1DHqemL1cxX4JkxiXAkECBK4N6Ams0ZjCz+Y8xZkcCSEx3xXPOTJAf3kFv/dfkWOja9i7ImvMW/ChXbe3V9igxjuGskrmFrX6lcsP+FwBPn40WJAsihGgvWEkIe3JpetiwUZTz31lBsOMihE9NzxZpY3GoTtaNSk40/ooyXY84UfHm57fHjKH/DoDYotiEJqBZnDD29NTp74Bxk9fq8f3XwOIHM7z6rbw+bNwcc8tDG6YNGvpNxu/xwwZPOKobj4xEnobf536cvOVwDI6PrJLXl0uY3U94FA6CdSvxbKR5C3DcFJJFiCTrLvmJ4w9hr2g5Fo72aQgX7Fy9ZX7Bw/Z9rh5FrHk6yfJnGlH1+PilQbVOkkUXnQNDAIjV4wNhUjA3nFFqx05B2zuGClo9fj4xNe/IcG18Yu/S6vNUDjM7jmPzJwvPb5HCB6NoTLnoRjn0e41UuOhKTvRsagouSLpw49lXAu8ue6qjbpWuBkniScC2zyrPn253hkqs06Q3+Rb3IH1/yJd6H1c0XxFDSPIAVMM50QSdXRG4St5EmSQk2D1S70sE8MGriwj942PK//7mclXnJPvsntwuvX8cPfyTdfRSRRGqQifckO3lkSig4moV1Ab3iX94aOZ/bFB7ORk/2tPLfPZ/+R7wJoeGIg6PmkVjDy8Mxo9QzehO5PgvPUzx/19w71xqOhX3jm0akOjqfM04wR2OxKR28bsuLckEGGbH1EgAwVf64PZvgh/23+5JIdjuvVI7Q/JqJ4WfVrM/km7A9iKtw3tVHQbBDNogCQwWJoLjheFAvGW2QgrNGYc/09IDGwD5143f9afuJJfZNfaDD5YJMFgy9acCxnVxb5hdVPUNWz+RxAQF7sQKFvVKMBvoGpIKa+hNFJg80sb5GBg51mbBwUXUj8xIZ56GLvRUDGGDnOBj2G/vSxzd8l1/+P9/cAdn92dF8gFrAeWdLzgoBZkPCY46f6g85VuCbPxgx2/diCel1Rfnv+KgLFKCdpAoQG1wJikySRrw10wt+1g+MLxGaX/136tWD8Sf/EkRIfyNFPzcxDX0T9o9/H34YmYMXxVMKNEbaPIyVpNGPc3ESvHjFDZ0IvCEGKg+4LJFb8Grt915d8+tjiD/YcXT+5BC+yfi28Nyb/LKV+DpjJQZBgbbjoxWMdH6hGkrYLnQVbONtM+nP3QgX/YkRnIRuTyLwgK/qnynu+sl/s+B7wIuvXFeAa+JOkdw1NY+WTVE+GueQuEGQuGy8IyBxbaJB5H6MgirZIeosFHXbTXnqLfEaO9XPCqZ8DkmdwJd+5yUiox1vJ/4nXf66/B+xqAOcaSQfzSAcy1OBFwbsajjxNwT40OPwt5OJl8SxHpw42m8b83FDo6Y/cR14n4j3J+hWDmJvvglTQiS+3yJREakKhwTU5x5ps5ueG0CADu3Hi2R59mgIyQo9GmR8ecvKpuCsfdOsgTnKq/NA9P+IlBjqhQeZd3v0nFsjATkOw+YM8vMXfAyIEEVK8du/8ICVWjhZj35HY1NH9VRl0CglSUHwiDw0y7+NJ6/d8L7p+5X/y7wFJgmI5OrjscoTsagCNrPaiafLc4bI/1wLSYGIG1/yfdoX0BcxCBvsCdv8XWb9iubbN8+XoLAkRNAWLnfMwRwZ2bjIm0OiCw8Xc1ZlXjG30Y5t48MOrdqGzuCC87q/L9b2O6wHR7wsi/XnsISf2ZdVP7nrtLz6IKUHvWDAJJWnmocE1Obw6uj4yAkeH3SsdN2Hw3CjUorOCUxZbkBHfQfiiHQM5DRYvm+pEPefV7/6IUUdigeEnt8z974LE5PFqPmKJtgEJ5c6PAToN0bMdfOlPH8z76AmPONO+P6cTOzx8df/JDVyTm1neejyJEjt1LR6LL7h+paMv47QL544Sgx0yG60Es1vmCpZ6TjSEAtOkoXeiwFL0CXv95wg3HGTI1+I/TKw0fLFBbFTeej7UJ3Fqwn+uCltdZv3qu8Jrg+vMIyG/uFxF+7JNHfWSGQnOAtDVoMlWt8PNBzrPdzVsRX6uvwcQRDHn5uj+JE5u3mTopgZsyZuck/9l1q+4zm3+PYDEuCmRDJgEw2POYqBXF8WK4y0yMPxK54kFHCMfihyw2/d4XR4nwa6v3J0riE6P3+WpFWQonnsBMrp/M8vbWn7wolLji08vl1/GESBJxagizrKLKj90ZCC8+AKjU7H76/boklNsKEA686b9GPq2xcfa+DvU73uAk6I4VoTkQIZon+Egc/FphnnMV+TRCy7uCV0fHywCyOhHyC79jdXxO75kM4/I0GD866a+9dtd6pbupdSvWJu/BygxN1Tz2SwlcaYGVpvjNiwpdJac41m3J254aIU+xUc2w8xXZuHhIrTlaS7I6P53xd8lt9P2ti13jhrJlkdQlINJMj7rGTZ4+Zpi7uLoriF+dZmnKVapsXb5J2nsQYy7Puzw1uQOWN66fnIJolrp+AbHeOz645cHaBdFYfG6DTHKLkCHT40kAzJCJ8EuT/O2xdrlv9uzEOERP3T8n9cfPk4bu/ydp/7kmK+js3MWBfVk0nwQmQJ6QUDm8MNjzpnOIoCMQfvjPvNe0C7/StpPJSCDHRwec9m7DnDMrYhf5skt+ca2+Lv0+t0ZdhJDiczHIBKuvFGAi1YBTCctPc9pKEQQvmjrDb5peAzioQsOuenYd3nPB3l4a/bw6hh559GXDWEaRK/7i28QOfaQT6J+Umdj5LsgYs9iErDySIDGYJQGhc4OQ+e0sWK/2LEUJl+zwNAgg3wqkmdyDD885n3gBxfFn+nhluae6m8lf/dC/pxXj9fn1Z5aefFJ2I2twjjk6NBjm/+bz3BGQMgEzCPf5hJoEfETv03kKTKIgviNT0Shz+Q/seIPB3X0fLp+l190/Sw494Bc9v57LkkosAvmi7B8P1MLCS3bxXP3SkE+guQzJosFFN8NBqNQEf/Mg12fBuEbHONU/+Q3/AUXC07d8ncp9XPlkotvwiN5ijEz2BOCnyaXQsyLjxSZecXYFp3YptE0JrxqGjqyVf2V/KIX7Efo/PBHgNQdvMj66YGOoH3+WYqLKk1JsTtvkr1gzjSONJCBT1a6+q40eoo/9WWyeK6OL5Ax/Edn2uKDEd9BM8tbzxe98IraJJM7CBP98JjHFmR+3vqxOXzmmWceaKU337CxGhqCTUVolIGMabAnhGgUb71iahI7fFf7FIFCb3j/18voiuemdd/Mu/+uE1sQWfeX3MBuyzx5B39P/fRcr4dcAT9p5bxl4zhIgNqgnlRkILKuf1654tIUCk2oLJYbQpr0ZqRrGt30C1tk4FnyQYccray31B3s9UQviG104IUGmZ8mH5v+3qF2w51nn332TzHCsI7KJzEVm6akEVuPhLWGhUeM0CAjvkHmxCM+uCYPD2R0f2Ilt7lB4tMGZ3i7qPqfe+65P6j3X1y5du3aZ3rSefrGjRsvkNxpI80AeTGC0NgGoakvuFYrtvDjD11okBF6m3yjdfze9eM7sbPQIC8sg8detlPdP7XCy8ASOh6IC534Qf126Au6Aq7S+0P9jOJ/f/jhh7dfeeWVN1C4c+cOv5zoxsQgKD7O/OgIT3OLgrrkLAMR9EuQYsXLlWO5ePNMJ25s7Fhv8EIraduDDOJI7kfh6FT98M6Ka/GrLbE0/131X79+/YVXX331+tNPP32b3nt1tGhXP/rooz/ruf9N/YzWQ/2e2c8Cfg7Wz8RC9WkeE8pj/rQltMRH/jXdsdreAEp04mg8u22zYhvZ9IPueLE4puMLfnjRKzKCbD4ZHv9oK/mwaPOlm/ukkbFwjKLj428j8t8DEEvN9xJoJuhsDI9lxOeHXr3zE8cGm7fpQMfNgR54ntXmYXzx1ltvbX64VUl4SH//66+/fl2/5ndLC/BHMV/Q6ypN06Bm3lgFaKMcEbj+bDHN88/curvewF4hjhNWasrwhy/0waIPjylyYjp49Ag++NhFhi7F+jeEFcc/H6w5TYbnxo2OoufXmNPcX+XWv4QLMo+taJkfeY4gvtRs/n8vzY/cssxB5CyKxi96/aB+/Y9+KfE/X3vttS8lI7e9/wfu514OAjYP0QAAAABJRU5ErkJggg==";function ke(n){G(n,"svelte-17nkflf",".room-label-item.svelte-17nkflf{position:absolute;font-size:8px;z-index:0;transform:none;cursor:pointer;pointer-events:none;user-select:none}.room-label-item__text.svelte-17nkflf{position:absolute;left:0;top:-64px;transform:translate(-50%, 0);display:flex;justify-content:center;align-items:center;height:20px;min-width:32px;padding:0 6px;pointer-events:all;background-size:100% 100%;background-repeat:no-repeat;white-space:nowrap}.room-label-item__bar.svelte-17nkflf{position:absolute;top:-44px;height:48px;width:1px;background-image:linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))}.wide.svelte-17nkflf{font-size:10px}")}function je(n){let e,t,o=n[0].name+"",r,i,s,u,l;return{c(){e=x("div"),t=x("span"),r=Y(o),i=W(),s=x("div"),F(t,"class","room-label-item__text svelte-17nkflf"),A(t,"background-image","url("+Pe+")"),L(t,"wide",n[0].name.length>3),F(s,"class","room-label-item__bar svelte-17nkflf"),F(e,"class","room-label-item svelte-17nkflf"),A(e,"z-index",n[0].zIndex,!1),A(e,"transform",n[0].transform,!1),A(e,"opacity",n[0].visible?1:0,!1)},m(a,c){C(a,e,c),w(e,t),w(t,r),w(e,i),w(e,s),u||(l=_(t,"click",n[1]),u=!0)},p(a,[c]){c&1&&o!==(o=a[0].name+"")&&V(r,o),c&1&&L(t,"wide",a[0].name.length>3),c&1&&A(e,"z-index",a[0].zIndex,!1),c&1&&A(e,"transform",a[0].transform,!1),c&1&&A(e,"opacity",a[0].visible?1:0,!1)},i:y,o:y,d(a){a&&E(e),u=!1,l()}}}function Ce(n,e,t){let{five:o}=e,{roomLabel:r}=e;function i(){o.setState({panoIndex:r.panoIndex,mode:"Panorama",longitude:r.longitude})}return n.$$set=s=>{"five"in s&&t(2,o=s.five),"roomLabel"in s&&t(0,r=s.roomLabel)},[r,i,o]}class Ee extends N{constructor(e){super();R(this,e,Ce,je,B,{five:2,roomLabel:0},ke)}}function ze(n){G(n,"svelte-185yvaa",".room-labels-container.svelte-185yvaa{width:100%;height:100%;position:relative;color:#fff}")}function O(n,e,t){const o=n.slice();return o[9]=e[t],o}function Q(n,e){let t,o,r;return o=new Ee({props:{roomLabel:e[9],five:e[1]}}),{key:n,first:null,c(){t=Z(),U(o.$$.fragment),this.first=t},m(i,s){C(i,t,s),q(o,i,s),r=!0},p(i,s){e=i;const u={};s&1&&(u.roomLabel=e[9]),s&2&&(u.five=e[1]),o.$set(u)},i(i){r||(X(o.$$.fragment,i),r=!0)},o(i){K(o.$$.fragment,i),r=!1},d(i){i&&E(t),$(o,i)}}}function Le(n){let e,t=[],o=new Map,r,i,s=n[0];const u=l=>l[9].id;for(let l=0;l<s.length;l+=1){let a=O(n,s,l),c=u(a);o.set(c,t[l]=Q(c,a))}return{c(){e=x("div");for(let l=0;l<t.length;l+=1)t[l].c();F(e,"class","room-labels-container svelte-185yvaa"),ee(()=>n[4].call(e))},m(l,a){C(l,e,a);for(let c=0;c<t.length;c+=1)t[c].m(e,null);r=te(e,n[4].bind(e)),i=!0},p(l,[a]){a&3&&(s=l[0],ae(),t=ne(t,a,u,1,l,s,o,e,re,Q,null,O),oe())},i(l){if(!i){for(let a=0;a<s.length;a+=1)X(t[a]);i=!0}},o(l){for(let a=0;a<t.length;a+=1)K(t[a]);i=!1},d(l){l&&E(e);for(let a=0;a<t.length;a+=1)t[a].d();r()}}}function ye(n,e,t){let{five:o}=e,{roomLabels:r}=e,i,s;function u(d,v){if(!(d.model.shownFloor===null||v.floorIndex===d.model.shownFloor))return!1;const p=new le,f=d.camera.position.clone(),m=new P(v.position.x,v.position.y,v.position.z),b=m.distanceTo(f);p.set(f.clone(),m.clone().sub(f).normalize());const[z]=d.model.intersectRaycaster(p);return!(z&&z.distance+1<b)}function l(d,v){const p=new P(v.position.x,v.position.y,v.position.z).clone().project(d.camera),f=Math.ceil((p.x+1)/2*i),m=Math.ceil((-p.y+1)/2*s);return`translate(${f}px, ${m}px)`}function a(d,v){const g=v.map(f=>{const m=u(d,f);if(!m)return{...f,visible:m};const b=l(d,f);return{...f,visible:m,transform:b}}),p=g.filter(({visible:f})=>f).map(f=>({roomLabelItem:f,distance:new P(...Object.values(f.position)).clone().distanceTo(d.camera.position)})).sort((f,m)=>f.distance-m.distance);return g.map(f=>{const m=p.findIndex(b=>b.roomLabelItem.id===f.id);return m!==void 0?{...f,zIndex:m*10}:f})}function c(){t(0,r=a(o,r))}o.on("cameraUpdate",c),ie(()=>{o.off("cameraUpdate",c)}),se(()=>{c()});function S(){i=this.clientWidth,s=this.clientHeight,t(2,i),t(3,s)}return n.$$set=d=>{"five"in d&&t(1,o=d.five),"roomLabels"in d&&t(0,r=d.roomLabels)},[r,o,i,s,S]}class Me extends N{constructor(e){super();R(this,e,ye,Le,B,{five:1,roomLabels:0},ze)}}function Oe(n){return n.model_room_labels.map(({id:e,pano_index:t,floor_index:o,name:r,position:i,longitude:s})=>({id:e,name:r,position:i,longitude:s,panoIndex:t,floorIndex:o,zIndex:0,visible:!1,transform:""}))}class Qe{five;enabled=!0;fiveModeEnabled;app=void 0;wrapper;roomLabels=[];container=document.createElement("div");constructor(e){this.five=e,this.fiveModeEnabled=this.five.currentMode==="Floorplan",this.container.classList.add("model-room-label-plugin-container"),this.container.style.width="100%",this.container.style.height="100%",this.container.style.position="absolute",this.container.style.pointerEvents="none",this.container.style.left="0",this.container.style.top="0",this.five.once("dispose",()=>this.dispose()),this.five.on("modeChange",this.onFiveModeChange),this.render()}dispose(){this.five.off("modeChange",this.onFiveModeChange),this.container.remove()}load(e){this.roomLabels=Oe(e),this.render()}appendTo(e){return this.wrapper=e,e.appendChild(this.container),this.render(),this}disable(){return this.enabled=!1,this.render(),this}enable(){return this.enabled=!0,this.render(),this}onFiveModeChange=e=>{if(e!=="Floorplan"){this.fiveModeEnabled=!1,this.render();return}this.five.once("initAnimationEnded",()=>{this.fiveModeEnabled=this.five.currentMode==="Floorplan",this.render()})};render(){if(!!this.wrapper){if(!this.enabled||!this.fiveModeEnabled){this.app?.$destroy(),this.app=void 0;return}this.app?this.app.$set({five:this.five,roomLabels:this.roomLabels}):this.app=new Me({target:this.container,props:{five:this.five,roomLabels:this.roomLabels}})}}}const Ie=n=>new Qe(n);function I(){return{width:window.innerWidth,height:window.innerHeight}}function De(){const[n,e]=j.exports.useState(I);return j.exports.useEffect(()=>{const t=()=>e(I());return window.addEventListener("resize",t,!1),()=>window.removeEventListener("resize",t,!1)}),n}const He=n=>{const[e,t]=fe(),o=ce(),r=de(),i=H(J.MODEL_ROOM_LABEL_PLUGIN_DATA);return j.exports.useEffect(()=>{const s=document.querySelector(".plugin-full-screen-container");s&&o.plugins.modelRoomLabelPlugin.appendTo(s)},[]),ue("modelLoaded",()=>{!i||(o.plugins.modelRoomLabelPlugin.load(i),t({mode:k.Mode.Floorplan}))},[i]),r!=="Loaded"?null:h(me,{sx:{position:"fixed",bottom:0,left:0,right:0,backgroundColor:"transparent"},className:"model-roomlabel-plugin-show",children:T(ve,{showLabels:!0,value:e.mode,onChange:(s,u)=>{t({mode:u})},children:[h(M,{label:"\u5168\u666F\u6F2B\u6E38",icon:h(he,{}),value:k.Mode.Panorama}),h(M,{label:"\u7A7A\u95F4\u603B\u89C8",icon:h(pe,{}),value:k.Mode.Floorplan})]})})},Je={},D=Fe(),Ne=JSON.stringify(D)!=="{}"?D:Je,Re=Ae({imageOptions:{size:512},textureOptions:{size:512},plugins:[[Ie,"modelRoomLabelPlugin",{...Ne}]]}),Be=()=>{const n=De(),e=H(J.WORK);return e&&T(Re,{initialWork:be(e),ref:t=>Object.assign(window,{$five:t?.five}),children:[h(ge,{...n}),h(we,{className:"plugin-full-screen-container",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"}}),h(He,{})]})};xe.render(h(Be,{}),document.querySelector("#app"));
