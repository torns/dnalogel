import{F as Z}from"./typing-9caf697c.js";import{V as J,g as G,i as U,h as Y,k as w,l as u,m as P,n as y,o as I,q as R,t as E,x as D,N as H,_ as ke,a4 as pe,a6 as Pe,Q as V,y as z,a1 as _e,U as F,J as v,K as L,E as N,H as q,I as Q,L as A,C as x,a5 as j,z as $,$ as C,ae as We,X as we,af as Ce,ag as De,ah as Re}from"./vendor-5f3df8df.js";import{C as ee,p as K,b as Ne,B as qe,R as Ae}from"./RoomHighlight-a3d6fc04.js";function Ge(o,e){return e(o),o}function qt(o,e){return Ge({},t=>{for(const l in o)e.indexOf(l)===-1&&(t[l]=o[l])})}function At(o,e,t,l){const n=Math.max(...o.work.observers.map(g=>g.floorIndex));function a(g){return g>n?o.model.bounding.max.y:Math.max(...o.work.observers.filter(c=>c.floorIndex===g).map(c=>c.standingPosition.y))}function f(){const g=a(t),c=a(t+1),d=l?.attachedTo||Z.BOUNDING_CENTER;return d===Z.BOUNDING_CENTER?(o.model.bounding.max.y+o.model.bounding.min.y)/2:d===Z.CEILING?c:g}const r=f(),i=new J(0,r,0),m=new J(1,r,0),p=i.clone().project(o.camera),h=m.clone().project(o.camera);return Math.abs((h.x-p.x)/1e3)*(e.getBoundingClientRect().width/2)}function Ue(o){return o*180/Math.PI}function Ye(o){let e,t;return{c(){e=w("div"),t=w("div"),u(t,"class","floorplan__camera-rotate svelte-e8a2kn"),P(t,"background-image",`url(${o[0]||ee})`),P(t,"width",o[4],!1),P(t,"height",o[4],!1),P(t,"left","-"+o[4],!1),P(t,"top","-"+o[4],!1),P(t,"transform",`rotate(${o[3]}deg)`,!1),P(t,"transform-origin",`${o[4]} ${o[4]}`,!1),u(e,"class","floorplan__camera-position svelte-e8a2kn"),P(e,"left",o[1],!1),P(e,"top",o[2],!1)},m(l,n){y(l,e,n),I(e,t)},p(l,[n]){n&1&&P(t,"background-image",`url(${l[0]||ee})`)},i:R,o:R,d(l){l&&E(e)}}}function Ve(o,e,t){let{panoIndex:l}=e,{floorplanData:n}=e,{lastPanoramaLongitude:a}=e,{cameraImageUrl:f}=e;const{observers:r}=n,i=r[l],m=i.positionInImage.x,p=i.positionInImage.y,h=m*100+"%",s=p*100+"%",g=-Ue(a)+45,c=document.body.clientWidth,d=document.body.clientHeight,k=`${(c<500||d<500?17:37)/16}rem`;return o.$$set=_=>{"panoIndex"in _&&t(5,l=_.panoIndex),"floorplanData"in _&&t(6,n=_.floorplanData),"lastPanoramaLongitude"in _&&t(7,a=_.lastPanoramaLongitude),"cameraImageUrl"in _&&t(0,f=_.cameraImageUrl)},[f,h,s,g,k,l,n,a]}class Fe extends G{constructor(e){super();U(this,e,Ve,Ye,Y,{panoIndex:5,floorplanData:6,lastPanoramaLongitude:7,cameraImageUrl:0})}}const Se="data:image/png;base64,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";function Qe(o){let e,t,l,n;return{c(){e=w("div"),t=w("div"),l=D(),n=w("span"),n.textContent="\u5317",u(t,"class","floorplan-plugin__compass-image svelte-5l80pv"),P(t,"background-image",`url(${Se})`),u(n,"class","floorplan-plugin__compass-text svelte-5l80pv"),u(e,"class","floorplan-plugin__compass svelte-5l80pv"),P(e,"transform",o[1],!1)},m(a,f){y(a,e,f),I(e,t),I(e,l),I(e,n)},p:R,d(a){a&&E(e)}}}function xe(o){let e,t=o[0]&&Qe(o);return{c(){t&&t.c(),e=H()},m(l,n){t&&t.m(l,n),y(l,e,n)},p(l,[n]){l[0]&&t.p(l,n)},i:R,o:R,d(l){t&&t.d(l),l&&E(e)}}}function Be(o){return o/Math.PI*180}function He(o,e,t){let{floorplanData:l}=e;const n=l.entrance?.northRad,f=`translateX(-50%) translateZ(10px) rotate(${-(n?Be(n):0)+90}deg)`;return o.$$set=r=>{"floorplanData"in r&&t(2,l=r.floorplanData)},[n,f,l]}class Me extends G{constructor(e){super();U(this,e,He,xe,Y,{floorplanData:2})}}function Oe(o){let e,t=o[2].outerHTML+"",l;return{c(){e=new ke,l=H(),e.a=l},m(n,a){e.m(t,n,a),y(n,l,a)},p(n,a){a&4&&t!==(t=n[2].outerHTML+"")&&e.p(t)},d(n){n&&E(l),n&&e.d()}}}function ze(o){let e,t=o[0].name+"",l,n,a;return{c(){e=w("span"),l=pe(t),n=D(),a=w("span"),a.textContent=`${o[3]}`,u(e,"class","floorplan-plugin__room-name"),u(a,"class","floorplan-plugin__room-size svelte-1ashbdx")},m(f,r){y(f,e,r),I(e,l),y(f,n,r),y(f,a,r)},p(f,r){r&1&&t!==(t=f[0].name+"")&&Pe(l,t)},d(f){f&&E(e),f&&E(n),f&&E(a)}}}function Ze(o){let e;function t(a,f){if(a[1]===void 0)return ze;if(a[2])return Oe}let l=t(o),n=l&&l(o);return{c(){e=w("div"),n&&n.c(),u(e,"class","floorplan-plugin__room-label-item svelte-1ashbdx"),P(e,"left",o[4],!1),P(e,"top",o[5],!1),P(e,"font-size",o[6],!1)},m(a,f){y(a,e,f),n&&n.m(e,null)},p(a,[f]){l===(l=t(a))&&n?n.p(a,f):(n&&n.d(1),n=l&&l(a),n&&(n.c(),n.m(e,null)))},i:R,o:R,d(a){a&&E(e),n&&n.d()}}}function je(o,e,t){let l,{room:n}=e,{getLabelElement:a}=e;const f=document.body.clientWidth,r=document.body.clientHeight,i=n.size?(n.size/1e6).toFixed(1)+"\u33A1":"",m=n.roomLabel,p=m.positionInImage.x*100+"%",h=m.positionInImage.y*100+"%",s=(f<500||r<500?10:14)/16+"rem";return o.$$set=g=>{"room"in g&&t(0,n=g.room),"getLabelElement"in g&&t(1,a=g.getLabelElement)},o.$$.update=()=>{o.$$.dirty&3&&t(2,l=a?.(n))},[n,a,l,i,p,h,s]}class Te extends G{constructor(e){super();U(this,e,je,Ze,Y,{room:0,getLabelElement:1})}}function te(o,e,t){const l=o.slice();return l[4]=e[t],l}function le(o){let e,t=[],l=new Map,n,a=o[1];const f=r=>r[4].id;for(let r=0;r<a.length;r+=1){let i=te(o,a,r),m=f(i);l.set(m,t[r]=ne(m,i))}return{c(){e=w("div");for(let r=0;r<t.length;r+=1)t[r].c();u(e,"class","floorplan-plugin__room-labels svelte-sw25w3")},m(r,i){y(r,e,i);for(let m=0;m<t.length;m+=1)t[m].m(e,null);n=!0},p(r,i){i&3&&(a=r[1],V(),t=z(t,i,f,1,r,a,l,e,_e,ne,null,te),F())},i(r){if(!n){for(let i=0;i<a.length;i+=1)v(t[i]);n=!0}},o(r){for(let i=0;i<t.length;i+=1)L(t[i]);n=!1},d(r){r&&E(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function ne(o,e){let t,l,n;const a=[{room:e[4],getLabelElement:e[0]}];let f={};for(let r=0;r<a.length;r+=1)f=x(f,a[r]);return l=new Te({props:f}),{key:o,first:null,c(){t=H(),N(l.$$.fragment),this.first=t},m(r,i){y(r,t,i),q(l,r,i),n=!0},p(r,i){e=r;const m=i&3?Q(a,[{room:e[4],getLabelElement:e[0]}]):{};l.$set(m)},i(r){n||(v(l.$$.fragment,r),n=!0)},o(r){L(l.$$.fragment,r),n=!1},d(r){r&&E(t),A(l,r)}}}function Ke(o){let e,t,l=o[1]&&le(o);return{c(){l&&l.c(),e=H()},m(n,a){l&&l.m(n,a),y(n,e,a),t=!0},p(n,[a]){n[1]?l?(l.p(n,a),a&2&&v(l,1)):(l=le(n),l.c(),v(l,1),l.m(e.parentNode,e)):l&&(V(),L(l,1,1,()=>{l=null}),F())},i(n){t||(v(l),t=!0)},o(n){L(l),t=!1},d(n){l&&l.d(n),n&&E(e)}}}function Xe(o,e,t){let l,{floorIndex:n}=e,{floorplanData:a}=e,{getLabelElement:f}=e;return o.$$set=r=>{"floorIndex"in r&&t(2,n=r.floorIndex),"floorplanData"in r&&t(3,a=r.floorplanData),"getLabelElement"in r&&t(0,f=r.getLabelElement)},o.$$.update=()=>{o.$$.dirty&12&&t(1,l=a.floorDatas[n].rooms)},[f,l,n,a]}class Je extends G{constructor(e){super();U(this,e,Xe,Ke,Y,{floorIndex:2,floorplanData:3,getLabelElement:0})}}function $e(o){return o!=null}function oe(o,e,t){const l=o.slice();return l[24]=e[t],l[26]=t,l}function ae(o,e,t){const l=o.slice();return l[27]=e[t],l[29]=t,l}function re(o,e){let t,l=`${e[27]}px`;return{key:o,first:null,c(){t=w("div"),u(t,"class","floorplan-plugin__rule-scale svelte-1rr09in"),P(t,"left",l,!1),this.first=t},m(n,a){y(n,t,a)},p(n,a){e=n},d(n){n&&E(t)}}}function ie(o,e){let t,l,n=e[24].distance+"",a,f,r=`${e[24].positionPx}px`;return{key:o,first:null,c(){t=w("div"),l=w("span"),a=pe(n),f=D(),u(l,"class","floorplan-plugin__rule-text svelte-1rr09in"),j(l,"is-row",e[5]),u(t,"class","floorplan-plugin__text-wrapper svelte-1rr09in"),j(t,"floorplan-plugin__text-wrapper--is-left-or-top",e[3]||e[1]),j(t,"floorplan-plugin__text-wrapper-is-right-or-bottom",e[4]||e[2]),P(t,"left",r,!1),this.first=t},m(i,m){y(i,t,m),I(t,l),I(l,a),I(t,f)},p(i,m){e=i},d(i){i&&E(t)}}}function et(o){let e,t,l,n=[],a=new Map,f,r=[],i=new Map,m,p=o[6];const h=c=>c[29];for(let c=0;c<p.length;c+=1){let d=ae(o,p,c),b=h(d);a.set(b,n[c]=re(b,d))}let s=o[10];const g=c=>c[26];for(let c=0;c<s.length;c+=1){let d=oe(o,s,c),b=g(d);i.set(b,r[c]=ie(b,d))}return{c(){e=w("div"),t=w("div"),l=D();for(let c=0;c<n.length;c+=1)n[c].c();f=D();for(let c=0;c<r.length;c+=1)r[c].c();u(t,"class","floorplan-plugin__rule-line svelte-1rr09in"),u(e,"class",m="floorplan-plugin__rule-labels floorplan-plugin__rule-labels-"+o[0]+" svelte-1rr09in"),P(e,"width",o[9],!1),P(e,"transform",o[7],!1),P(e,"transform-origin",o[8],!1)},m(c,d){y(c,e,d),I(e,t),I(e,l);for(let b=0;b<n.length;b+=1)n[b].m(e,null);I(e,f);for(let b=0;b<r.length;b+=1)r[b].m(e,null)},p(c,[d]){d&64&&(p=c[6],n=z(n,d,h,1,c,p,a,e,$,re,f,ae)),d&1086&&(s=c[10],r=z(r,d,g,1,c,s,i,e,$,ie,null,oe)),d&1&&m!==(m="floorplan-plugin__rule-labels floorplan-plugin__rule-labels-"+c[0]+" svelte-1rr09in")&&u(e,"class",m)},i:R,o:R,d(c){c&&E(e);for(let d=0;d<n.length;d+=1)n[d].d();for(let d=0;d<r.length;d+=1)r[d].d()}}}const tt=1e3;function lt(o,e,t){let{pxmm:l}=e,{type:n}=e,{data:a}=e,{bounding:f}=e;const r=n==="top",i=n==="bottom",m=n==="left",p=n==="right",h=r||i,s=a.map(([W,S])=>h?[W.x,S.x]:[W.y,S.y]).flat().sort().filter((W,S,O)=>S===0?!0:W!==O[S-1]),g=s[0],d=s.slice(-1)[0]-g,b=h?f.min.x:f.min.y,k=d*l,_=s.map(W=>(W-g)/d*k),B=(g-b)*l,M=27-tt*l,ve=`${(()=>{if(r)return`translate(${B}px, ${-M}px)`;if(i)return`translate(${B}px, ${M}px)`;if(m)return`translate(${-M}px, ${-B}px)`;if(p)return`translate(${M}px, ${-B-k}px)`})()} ${h?"rotate(0)":"rotate(-90deg)"}`,ye=`${p?"right":"left"} ${r?"top":"bottom"}`,Ee=k+"px",Le=s.map((W,S,O)=>{if(S===0)return null;const X=W-O[S-1],Ie=(O[S-1]+X/2-g)/d*k;return{distance:X,positionPx:Ie}}).filter($e).filter(W=>W.distance/d>.12);return o.$$set=W=>{"pxmm"in W&&t(11,l=W.pxmm),"type"in W&&t(0,n=W.type),"data"in W&&t(12,a=W.data),"bounding"in W&&t(13,f=W.bounding)},[n,r,i,m,p,h,_,ve,ye,Ee,Le,l,a,f]}class nt extends G{constructor(e){super();U(this,e,lt,et,Y,{pxmm:11,type:0,data:12,bounding:13})}}function fe(o,e,t){const l=o.slice();return l[7]=e[t][0],l[8]=e[t][1],l}function se(o,e){let t,l,n;const a=[{type:e[7],data:e[8],pxmm:e[0],bounding:e[2]}];let f={};for(let r=0;r<a.length;r+=1)f=x(f,a[r]);return l=new nt({props:f}),{key:o,first:null,c(){t=H(),N(l.$$.fragment),this.first=t},m(r,i){y(r,t,i),q(l,r,i),n=!0},p(r,i){e=r;const m=i&7?Q(a,[{type:e[7],data:e[8],pxmm:e[0],bounding:e[2]}]):{};l.$set(m)},i(r){n||(v(l.$$.fragment,r),n=!0)},o(r){L(l.$$.fragment,r),n=!1},d(r){r&&E(t),A(l,r)}}}function ot(o){let e,t=[],l=new Map,n,a=o[1];const f=r=>r[7];for(let r=0;r<a.length;r+=1){let i=fe(o,a,r),m=f(i);l.set(m,t[r]=se(m,i))}return{c(){e=w("div");for(let r=0;r<t.length;r+=1)t[r].c();u(e,"class","floorplan-plugin__rulelabels")},m(r,i){y(r,e,i);for(let m=0;m<t.length;m+=1)t[m].m(e,null);n=!0},p(r,[i]){i&7&&(a=r[1],V(),t=z(t,i,f,1,r,a,l,e,_e,se,null,fe),F())},i(r){if(!n){for(let i=0;i<a.length;i+=1)v(t[i]);n=!0}},o(r){for(let i=0;i<t.length;i+=1)L(t[i]);n=!1},d(r){r&&E(e);for(let i=0;i<t.length;i+=1)t[i].d()}}}function at(o,e,t){let l,n,a,f,{pxmm:r}=e,{floorIndex:i}=e,{floorplanData:m}=e;return o.$$set=p=>{"pxmm"in p&&t(0,r=p.pxmm),"floorIndex"in p&&t(3,i=p.floorIndex),"floorplanData"in p&&t(4,m=p.floorplanData)},o.$$.update=()=>{o.$$.dirty&16&&t(2,l=m.bounding),o.$$.dirty&24&&t(5,n=m.floorDatas[i].rules),o.$$.dirty&32&&t(6,a=Object.keys(n)),o.$$.dirty&96&&t(1,f=a.map(p=>[p,n[p]]))},[r,f,l,i,m,n,a]}class rt extends G{constructor(e){super();U(this,e,at,ot,Y,{pxmm:0,floorIndex:3,floorplanData:4})}}function it(o){let e;return{c(){e=C("path"),u(e,"d",o[0]),u(e,"fill","#2F313A")},m(t,l){y(t,e,l)},p(t,[l]){l&1&&u(e,"d",t[0])},i:R,o:R,d(t){t&&E(e)}}}function ft(o,e,t){let l,{path:n}=e;return o.$$set=a=>{"path"in a&&t(1,n=a.path)},o.$$.update=()=>{o.$$.dirty&2&&t(0,l=K(n,{needZ:!0}))},[l,n]}class st extends G{constructor(e){super();U(this,e,ft,it,Y,{path:1})}}function ut(o){let e,t,l,n,a,f;return{c(){e=C("defs"),t=C("pattern"),l=C("rect"),n=C("path"),a=D(),f=C("path"),u(l,"x","0"),u(l,"y","0"),u(l,"width",o[1]),u(l,"height",o[1]),u(l,"fill","#323747"),u(n,"d",o[2]),u(n,"stroke","#ffffff"),u(n,"stroke-opacity","0.06"),u(n,"stroke-width","0.5"),u(n,"fill","none"),u(t,"id","fpm-room-pattern-0"),u(t,"x","0"),u(t,"y","0"),u(t,"width",o[1]),u(t,"height",o[1]),u(t,"patternUnits","userSpaceOnUse"),u(f,"d",o[0]),u(f,"fill","url(#fpm-room-pattern-0)")},m(r,i){y(r,e,i),I(e,t),I(t,l),I(t,n),y(r,a,i),y(r,f,i)},p(r,[i]){i&1&&u(f,"d",r[0])},i:R,o:R,d(r){r&&E(e),r&&E(a),r&&E(f)}}}const T=6;function mt(o,e,t){let l,{path:n}=e;const a=T*2,f=`M0 ${T} h ${a} M${T} 0 v ${a}`;return o.$$set=r=>{"path"in r&&t(3,n=r.path)},o.$$.update=()=>{o.$$.dirty&8&&t(0,l=K(n,{needZ:!0}))},[l,a,f,n]}class ct extends G{constructor(e){super();U(this,e,mt,ut,Y,{path:3})}}function gt(o){let e,t,l,n,a,f,r,i,m,p,h;return{c(){e=C("defs"),t=C("pattern"),l=C("rect"),n=C("pattern"),a=C("rect"),f=D(),r=C("path"),i=D(),m=C("path"),p=D(),h=C("path"),u(l,"x","0.5"),u(l,"y","0.5"),u(l,"width","6"),u(l,"height","50"),u(l,"fill","none"),u(l,"stroke","#4B4B57"),u(l,"stroke-width","0.5"),u(t,"id","room-material-pattern-1"),u(t,"x","0"),u(t,"y","0"),u(t,"width","13"),u(t,"height","51"),u(t,"patternUnits","userSpaceOnUse"),u(a,"x","0.5"),u(a,"y","0.5"),u(a,"width","6"),u(a,"height","50"),u(a,"fill","none"),u(a,"stroke","#4B4B57"),u(a,"stroke-width","0.5"),u(n,"id","room-material-pattern-2"),u(n,"x","7"),u(n,"y","25"),u(n,"width","13"),u(n,"height","51"),u(n,"patternUnits","userSpaceOnUse"),u(r,"d",o[0]),u(r,"fill","#43434D"),u(m,"d",o[0]),u(m,"fill","url(#room-material-pattern-1)"),u(h,"d",o[0]),u(h,"fill","url(#room-material-pattern-2)")},m(s,g){y(s,e,g),I(e,t),I(t,l),I(e,n),I(n,a),y(s,f,g),y(s,r,g),y(s,i,g),y(s,m,g),y(s,p,g),y(s,h,g)},p(s,[g]){g&1&&u(r,"d",s[0]),g&1&&u(m,"d",s[0]),g&1&&u(h,"d",s[0])},i:R,o:R,d(s){s&&E(e),s&&E(f),s&&E(r),s&&E(i),s&&E(m),s&&E(p),s&&E(h)}}}function dt(o,e,t){let l,{path:n}=e;return o.$$set=a=>{"path"in a&&t(1,n=a.path)},o.$$.update=()=>{o.$$.dirty&2&&t(0,l=K(n,{needZ:!0}))},[l,n]}class bt extends G{constructor(e){super();U(this,e,dt,gt,Y,{path:1})}}function ue(o,e,t){const l=o.slice();return l[4]=e[t],l}function ht(o){let e,t;return e=new ct({props:{path:o[4].path}}),{c(){N(e.$$.fragment)},m(l,n){q(e,l,n),t=!0},p(l,n){const a={};n&1&&(a.path=l[4].path),e.$set(a)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function pt(o){let e,t;return e=new bt({props:{path:o[4].path}}),{c(){N(e.$$.fragment)},m(l,n){q(e,l,n),t=!0},p(l,n){const a={};n&1&&(a.path=l[4].path),e.$set(a)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function _t(o){let e,t;return e=new st({props:{path:o[4].path}}),{c(){N(e.$$.fragment)},m(l,n){q(e,l,n),t=!0},p(l,n){const a={};n&1&&(a.path=l[4].path),e.$set(a)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function me(o){let e,t,l,n;const a=[_t,pt,ht],f=[];function r(i,m){return i[4].floorType===1?0:i[4].floorType===0?1:2}return t=r(o),l=f[t]=a[t](o),{c(){e=C("svg"),l.c(),u(e,"class","svelte-1b0icjc")},m(i,m){y(i,e,m),f[t].m(e,null),n=!0},p(i,m){let p=t;t=r(i),t===p?f[t].p(i,m):(V(),L(f[p],1,1,()=>{f[p]=null}),F(),l=f[t],l?l.p(i,m):(l=f[t]=a[t](i),l.c()),v(l,1),l.m(e,null))},i(i){n||(v(l),n=!0)},o(i){L(l),n=!1},d(i){i&&E(e),f[t].d()}}}function vt(o){let e,t,l=o[0],n=[];for(let f=0;f<l.length;f+=1)n[f]=me(ue(o,l,f));const a=f=>L(n[f],1,1,()=>{n[f]=null});return{c(){e=w("div");for(let f=0;f<n.length;f+=1)n[f].c();u(e,"class","floorplan-plugin__room-material")},m(f,r){y(f,e,r);for(let i=0;i<n.length;i+=1)n[i].m(e,null);t=!0},p(f,[r]){if(r&1){l=f[0];let i;for(i=0;i<l.length;i+=1){const m=ue(f,l,i);n[i]?(n[i].p(m,r),v(n[i],1)):(n[i]=me(m),n[i].c(),v(n[i],1),n[i].m(e,null))}for(V(),i=l.length;i<n.length;i+=1)a(i);F()}},i(f){if(!t){for(let r=0;r<l.length;r+=1)v(n[r]);t=!0}},o(f){n=n.filter(Boolean);for(let r=0;r<n.length;r+=1)L(n[r]);t=!1},d(f){f&&E(e),We(n,f)}}}function yt(o,e,t){let l,{floorIndex:n}=e,{pxmm:a}=e,{floorplanData:f}=e;return o.$$set=r=>{"floorIndex"in r&&t(1,n=r.floorIndex),"pxmm"in r&&t(2,a=r.pxmm),"floorplanData"in r&&t(3,f=r.floorplanData)},o.$$.update=()=>{o.$$.dirty&14&&t(0,l=f.floorDatas[n].rooms.map(r=>({...r,path:r.path.map(i=>Ne(i,a,f.bounding))})))},[l,n,a,f]}class Et extends G{constructor(e){super();U(this,e,yt,vt,Y,{floorIndex:1,pxmm:2,floorplanData:3})}}function ce(o){let e,t;const l=[{five:o[1],pxmm:o[0],floorIndex:o[2],floorplanData:o[6],onRoomHeightClick:o[7]}];let n={};for(let a=0;a<l.length;a+=1)n=x(n,l[a]);return e=new Ae({props:n}),{c(){N(e.$$.fragment)},m(a,f){q(e,a,f),t=!0},p(a,f){const r=f&199?Q(l,[{five:a[1],pxmm:a[0],floorIndex:a[2],floorplanData:a[6],onRoomHeightClick:a[7]}]):{};e.$set(r)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){L(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function ge(o){let e,t;const l=[{floorplanData:o[6],floorIndex:o[2],getLabelElement:o[8]}];let n={};for(let a=0;a<l.length;a+=1)n=x(n,l[a]);return e=new Je({props:n}),{c(){N(e.$$.fragment)},m(a,f){q(e,a,f),t=!0},p(a,f){const r=f&324?Q(l,[{floorplanData:a[6],floorIndex:a[2],getLabelElement:a[8]}]):{};e.$set(r)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){L(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function de(o){let e,t;const l=[{floorplanData:o[6],floorIndex:o[2],pxmm:o[0]}];let n={};for(let a=0;a<l.length;a+=1)n=x(n,l[a]);return e=new rt({props:n}),{c(){N(e.$$.fragment)},m(a,f){q(e,a,f),t=!0},p(a,f){const r=f&69?Q(l,[{floorplanData:a[6],floorIndex:a[2],pxmm:a[0]}]):{};e.$set(r)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){L(e.$$.fragment,a),t=!1},d(a){A(e,a)}}}function Lt(o){let e,t,l,n,a,f,r,i;const m=[{floorIndex:o[2],floorplanData:o[6],pxmm:o[0]}];let p={};for(let b=0;b<m.length;b+=1)p=x(p,m[b]);t=new Et({props:p});let h=o[3]&&ce(o);const s=[{floorplanData:o[6],floorIndex:o[2]}];let g={};for(let b=0;b<s.length;b+=1)g=x(g,s[b]);a=new qe({props:g});let c=o[4]&&ge(o),d=o[5]&&de(o);return{c(){e=w("div"),N(t.$$.fragment),l=D(),h&&h.c(),n=D(),N(a.$$.fragment),f=D(),c&&c.c(),r=D(),d&&d.c(),u(e,"class","floorplan-current-floor svelte-3pdgs4")},m(b,k){y(b,e,k),q(t,e,null),I(e,l),h&&h.m(e,null),I(e,n),q(a,e,null),I(e,f),c&&c.m(e,null),I(e,r),d&&d.m(e,null),i=!0},p(b,[k]){const _=k&69?Q(m,[{floorIndex:b[2],floorplanData:b[6],pxmm:b[0]}]):{};t.$set(_),b[3]?h?(h.p(b,k),k&8&&v(h,1)):(h=ce(b),h.c(),v(h,1),h.m(e,n)):h&&(V(),L(h,1,1,()=>{h=null}),F());const B=k&68?Q(s,[{floorplanData:b[6],floorIndex:b[2]}]):{};a.$set(B),b[4]?c?(c.p(b,k),k&16&&v(c,1)):(c=ge(b),c.c(),v(c,1),c.m(e,r)):c&&(V(),L(c,1,1,()=>{c=null}),F()),b[5]?d?(d.p(b,k),k&32&&v(d,1)):(d=de(b),d.c(),v(d,1),d.m(e,null)):d&&(V(),L(d,1,1,()=>{d=null}),F())},i(b){i||(v(t.$$.fragment,b),v(h),v(a.$$.fragment,b),v(c),v(d),i=!0)},o(b){L(t.$$.fragment,b),L(h),L(a.$$.fragment,b),L(c),L(d),i=!1},d(b){b&&E(e),A(t),h&&h.d(),A(a),c&&c.d(),d&&d.d()}}}function It(o,e,t){let{pxmm:l}=e,{five:n}=e,{floorIndex:a}=e,{hoverEnable:f}=e,{roomLabelsEnable:r}=e,{ruleLabelsEnable:i}=e,{floorplanData:m}=e,{onRoomHeightClick:p}=e,{getLabelElement:h}=e;return o.$$set=s=>{"pxmm"in s&&t(0,l=s.pxmm),"five"in s&&t(1,n=s.five),"floorIndex"in s&&t(2,a=s.floorIndex),"hoverEnable"in s&&t(3,f=s.hoverEnable),"roomLabelsEnable"in s&&t(4,r=s.roomLabelsEnable),"ruleLabelsEnable"in s&&t(5,i=s.ruleLabelsEnable),"floorplanData"in s&&t(6,m=s.floorplanData),"onRoomHeightClick"in s&&t(7,p=s.onRoomHeightClick),"getLabelElement"in s&&t(8,h=s.getLabelElement)},[l,n,a,f,r,i,m,p,h]}class kt extends G{constructor(e){super();U(this,e,It,Lt,Y,{pxmm:0,five:1,floorIndex:2,hoverEnable:3,roomLabelsEnable:4,ruleLabelsEnable:5,floorplanData:6,onRoomHeightClick:7,getLabelElement:8})}}function be(o){let e,t,l,n,a,f,r;const i=[{five:o[1],pxmm:o[0],floorIndex:o[5],hoverEnable:o[6],floorplanData:o[10],getLabelElement:o[14],roomLabelsEnable:o[8],ruleLabelsEnable:o[9],onRoomHeightClick:o[13]}];let m={};for(let g=0;g<i.length;g+=1)m=x(m,i[g]);t=new kt({props:m});const p=[{panoIndex:o[4],floorplanData:o[10],lastPanoramaLongitude:o[11],cameraImageUrl:o[12]}];let h={};for(let g=0;g<p.length;g+=1)h=x(h,p[g]);n=new Fe({props:h});let s=o[7]&&he(o);return{c(){e=w("div"),N(t.$$.fragment),l=D(),N(n.$$.fragment),a=D(),s&&s.c(),u(e,"class","floorplan-main svelte-177x2q7")},m(g,c){y(g,e,c),q(t,e,null),I(e,l),q(n,e,null),I(e,a),s&&s.m(e,null),r=!0},p(g,c){o=g;const d=c&26467?Q(i,[{five:o[1],pxmm:o[0],floorIndex:o[5],hoverEnable:o[6],floorplanData:o[10],getLabelElement:o[14],roomLabelsEnable:o[8],ruleLabelsEnable:o[9],onRoomHeightClick:o[13]}]):{};t.$set(d);const b=c&7184?Q(p,[{panoIndex:o[4],floorplanData:o[10],lastPanoramaLongitude:o[11],cameraImageUrl:o[12]}]):{};n.$set(b),o[7]?s?(s.p(o,c),c&128&&v(s,1)):(s=he(o),s.c(),v(s,1),s.m(e,null)):s&&(V(),L(s,1,1,()=>{s=null}),F())},i(g){r||(v(t.$$.fragment,g),v(n.$$.fragment,g),v(s),f||we(()=>{f=Ce(e,Re,{duration:o[2],easing:De}),f.start()}),r=!0)},o(g){L(t.$$.fragment,g),L(n.$$.fragment,g),L(s),r=!1},d(g){g&&E(e),A(t),A(n),s&&s.d()}}}function he(o){let e,t;return e=new Me({props:{floorplanData:o[10]}}),{c(){N(e.$$.fragment)},m(l,n){q(e,l,n),t=!0},p(l,n){const a={};n&1024&&(a.floorplanData=l[10]),e.$set(a)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){L(e.$$.fragment,l),t=!1},d(l){A(e,l)}}}function Pt(o){let e,t,l=o[3]&&be(o);return{c(){l&&l.c(),e=H()},m(n,a){l&&l.m(n,a),y(n,e,a),t=!0},p(n,[a]){n[3]?l?(l.p(n,a),a&8&&v(l,1)):(l=be(n),l.c(),v(l,1),l.m(e.parentNode,e)):l&&(V(),L(l,1,1,()=>{l=null}),F())},i(n){t||(v(l),t=!0)},o(n){L(l),t=!1},d(n){l&&l.d(n),n&&E(e)}}}function Wt(o,e,t){let{pxmm:l}=e,{five:n}=e,{duration:a=0}=e,{visible:f}=e,{panoIndex:r}=e,{floorIndex:i}=e,{hoverEnable:m}=e,{compassEnable:p}=e,{roomLabelsEnable:h}=e,{ruleLabelsEnable:s}=e,{floorplanData:g}=e,{lastPanoramaLongitude:c}=e,{cameraImageUrl:d}=e,{onRoomHeightClick:b}=e,{getLabelElement:k}=e;return o.$$set=_=>{"pxmm"in _&&t(0,l=_.pxmm),"five"in _&&t(1,n=_.five),"duration"in _&&t(2,a=_.duration),"visible"in _&&t(3,f=_.visible),"panoIndex"in _&&t(4,r=_.panoIndex),"floorIndex"in _&&t(5,i=_.floorIndex),"hoverEnable"in _&&t(6,m=_.hoverEnable),"compassEnable"in _&&t(7,p=_.compassEnable),"roomLabelsEnable"in _&&t(8,h=_.roomLabelsEnable),"ruleLabelsEnable"in _&&t(9,s=_.ruleLabelsEnable),"floorplanData"in _&&t(10,g=_.floorplanData),"lastPanoramaLongitude"in _&&t(11,c=_.lastPanoramaLongitude),"cameraImageUrl"in _&&t(12,d=_.cameraImageUrl),"onRoomHeightClick"in _&&t(13,b=_.onRoomHeightClick),"getLabelElement"in _&&t(14,k=_.getLabelElement)},[l,n,a,f,r,i,m,p,h,s,g,c,d,b,k]}class Gt extends G{constructor(e){super();U(this,e,Wt,Pt,Y,{pxmm:0,five:1,duration:2,visible:3,panoIndex:4,floorIndex:5,hoverEnable:6,compassEnable:7,roomLabelsEnable:8,ruleLabelsEnable:9,floorplanData:10,lastPanoramaLongitude:11,cameraImageUrl:12,onRoomHeightClick:13,getLabelElement:14})}}function Ut(o,e,t=300){const l=o.getElement();!l||(l.style.opacity=e+"",l.style.transition=t===0?"none":`opacity ${t}ms linear`,t!==0&&Promise.race([new Promise(n=>l.addEventListener("transitionend",n,{once:!0})),new Promise(n=>setTimeout(n,t))]).then(()=>{l.style.transition="none"}))}export{Gt as M,Ut as c,At as g,qt as o};
