import{l as w,n as I,at as D,au as T,av as k,aw as F,ax as Y,g as W,ay as K,N as ee,an as te,S as ne,az as oe,aA as se,x as re,J,aB as le,a7 as ue,aq as Q,aC as U,aD as ie,aE as ae,aF as ce,aG as fe,aH as de}from"./vj23PmSK.js";function ye(e,s,m){let i;ee(m)?i={evaluating:m}:i=m||{};const{lazy:v=!1,evaluating:r=void 0,shallow:a=!0,onError:l=T}=i,u=w(!v),f=a?te(s):w(s);let c=0;return ne(async n=>{if(!u.value)return;c++;const t=c;let o=!1;r&&Promise.resolve().then(()=>{r.value=!0});try{const d=await e(g=>{n(()=>{r&&(r.value=!1),o||g()})});t===c&&(f.value=d)}catch(d){l(d)}finally{r&&t===c&&(r.value=!1),o=!0}}),v?W(()=>(u.value=!0,f.value)):f}function E(e){var s;const m=F(e);return(s=m==null?void 0:m.$el)!=null?s:m}const R=oe?window:void 0;function O(...e){let s,m,i,v;if(typeof e[0]=="string"||Array.isArray(e[0])?([m,i,v]=e,s=R):[s,m,i,v]=e,!s)return T;Array.isArray(m)||(m=[m]),Array.isArray(i)||(i=[i]);const r=[],a=()=>{r.forEach(c=>c()),r.length=0},l=(c,n,t,o)=>(c.addEventListener(n,t,o),()=>c.removeEventListener(n,t,o)),u=I(()=>[E(s),F(v)],([c,n])=>{if(a(),!c)return;const t=k(n)?{...n}:n;r.push(...m.flatMap(o=>i.map(d=>l(c,o,d,t))))},{immediate:!0,flush:"post"}),f=()=>{u(),a()};return Y(f),f}let j=!1;function Ee(e,s,m={}){const{window:i=R,ignore:v=[],capture:r=!0,detectIframe:a=!1}=m;if(!i)return T;se&&!j&&(j=!0,Array.from(i.document.body.children).forEach(t=>t.addEventListener("click",T)),i.document.documentElement.addEventListener("click",T));let l=!0;const u=t=>v.some(o=>{if(typeof o=="string")return Array.from(i.document.querySelectorAll(o)).some(d=>d===t.target||t.composedPath().includes(d));{const d=E(o);return d&&(t.target===d||t.composedPath().includes(d))}}),c=[O(i,"click",t=>{const o=E(e);if(!(!o||o===t.target||t.composedPath().includes(o))){if(t.detail===0&&(l=!u(t)),!l){l=!0;return}s(t)}},{passive:!0,capture:r}),O(i,"pointerdown",t=>{const o=E(e);l=!u(t)&&!!(o&&!t.composedPath().includes(o))},{passive:!0}),a&&O(i,"blur",t=>{setTimeout(()=>{var o;const d=E(e);((o=i.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(d!=null&&d.contains(i.document.activeElement))&&s(t)},0)})].filter(Boolean);return()=>c.forEach(t=>t())}function ve(){const e=w(!1),s=Q();return s&&re(()=>{e.value=!0},s),e}function N(e){const s=ve();return W(()=>(s.value,!!e()))}function me(e,s={}){const{immediate:m=!0,fpsLimit:i=void 0,window:v=R}=s,r=w(!1),a=i?1e3/i:null;let l=0,u=null;function f(t){if(!r.value||!v)return;l||(l=t);const o=t-l;if(a&&o<a){u=v.requestAnimationFrame(f);return}l=t,e({delta:o,timestamp:t}),u=v.requestAnimationFrame(f)}function c(){!r.value&&v&&(r.value=!0,l=0,u=v.requestAnimationFrame(f))}function n(){r.value=!1,u!=null&&v&&(v.cancelAnimationFrame(u),u=null)}return m&&c(),Y(n),{isActive:ce(r),pause:n,resume:c}}function pe(e){return JSON.parse(JSON.stringify(e))}function he(e,s,m={}){const{window:i=R,...v}=m;let r;const a=N(()=>i&&"MutationObserver"in i),l=()=>{r&&(r.disconnect(),r=void 0)},u=W(()=>{const t=F(e),o=(Array.isArray(t)?t:[t]).map(E).filter(K);return new Set(o)}),f=I(()=>u.value,t=>{l(),a.value&&i&&t.size&&(r=new MutationObserver(s),t.forEach(o=>r.observe(o,v)))},{immediate:!0,flush:"post"}),c=()=>r==null?void 0:r.takeRecords(),n=()=>{l(),f()};return Y(n),{isSupported:a,stop:n,takeRecords:c}}function Z(e,s,m={}){const{window:i=R,...v}=m;let r;const a=N(()=>i&&"ResizeObserver"in i),l=()=>{r&&(r.disconnect(),r=void 0)},u=W(()=>Array.isArray(e)?e.map(n=>E(n)):[E(e)]),f=I(u,n=>{if(l(),a.value&&i){r=new ResizeObserver(s);for(const t of n)t&&r.observe(t,v)}},{immediate:!0,flush:"post"}),c=()=>{l(),f()};return Y(c),{isSupported:a,stop:c}}function Ae(e,s={}){const{reset:m=!0,windowResize:i=!0,windowScroll:v=!0,immediate:r=!0}=s,a=w(0),l=w(0),u=w(0),f=w(0),c=w(0),n=w(0),t=w(0),o=w(0);function d(){const g=E(e);if(!g){m&&(a.value=0,l.value=0,u.value=0,f.value=0,c.value=0,n.value=0,t.value=0,o.value=0);return}const b=g.getBoundingClientRect();a.value=b.height,l.value=b.bottom,u.value=b.left,f.value=b.right,c.value=b.top,n.value=b.width,t.value=b.x,o.value=b.y}return Z(e,d),I(()=>E(e),g=>!g&&d()),he(e,d,{attributeFilter:["style","class"]}),v&&O("scroll",d,{capture:!0,passive:!0}),i&&O("resize",d,{passive:!0}),D(()=>{r&&d()}),{height:a,bottom:l,left:u,right:f,top:c,width:n,x:t,y:o,update:d}}function xe(e,s={width:0,height:0},m={}){const{window:i=R,box:v="content-box"}=m,r=W(()=>{var n,t;return(t=(n=E(e))==null?void 0:n.namespaceURI)==null?void 0:t.includes("svg")}),a=w(s.width),l=w(s.height),{stop:u}=Z(e,([n])=>{const t=v==="border-box"?n.borderBoxSize:v==="content-box"?n.contentBoxSize:n.devicePixelContentBoxSize;if(i&&r.value){const o=E(e);if(o){const d=i.getComputedStyle(o);a.value=Number.parseFloat(d.width),l.value=Number.parseFloat(d.height)}}else if(t){const o=Array.isArray(t)?t:[t];a.value=o.reduce((d,{inlineSize:g})=>d+g,0),l.value=o.reduce((d,{blockSize:g})=>d+g,0)}else a.value=n.contentRect.width,l.value=n.contentRect.height},m);D(()=>{const n=E(e);n&&(a.value="offsetWidth"in n?n.offsetWidth:s.width,l.value="offsetHeight"in n?n.offsetHeight:s.height)});const f=I(()=>E(e),n=>{a.value=n?s.width:0,l.value=n?s.height:0});function c(){u(),f()}return{width:a,height:l,stop:c}}function Se(e,s,m={}){const{root:i,rootMargin:v="0px",threshold:r=.1,window:a=R,immediate:l=!0}=m,u=N(()=>a&&"IntersectionObserver"in a),f=W(()=>{const d=F(e);return(Array.isArray(d)?d:[d]).map(E).filter(K)});let c=T;const n=w(l),t=u.value?I(()=>[f.value,E(i),n.value],([d,g])=>{if(c(),!n.value||!d.length)return;const b=new IntersectionObserver(s,{root:E(g),rootMargin:v,threshold:r});d.forEach(y=>y&&b.observe(y)),c=()=>{b.disconnect(),c=T}},{immediate:l,flush:"post"}):T,o=()=>{c(),t(),n.value=!1};return Y(o),{isSupported:u,isActive:n,pause(){c(),n.value=!1},resume(){n.value=!0},stop:o}}const z=new Map;function _e(e){const s=de();function m(l){var u;const f=z.get(e)||new Set;f.add(l),z.set(e,f);const c=()=>v(l);return(u=s==null?void 0:s.cleanups)==null||u.push(c),c}function i(l){function u(...f){v(u),l(...f)}return m(u)}function v(l){const u=z.get(e);u&&(u.delete(l),u.size||r())}function r(){z.delete(e)}function a(l,u){var f;(f=z.get(e))==null||f.forEach(c=>c(l,u))}return{on:m,once:i,off:v,emit:a,reset:r}}const G=1;function Oe(e,s={}){const{throttle:m=0,idle:i=200,onStop:v=T,onScroll:r=T,offset:a={left:0,right:0,top:0,bottom:0},eventListenerOptions:l={capture:!1,passive:!0},behavior:u="auto",window:f=R,onError:c=h=>{console.error(h)}}=s,n=w(0),t=w(0),o=W({get(){return n.value},set(h){g(h,void 0)}}),d=W({get(){return t.value},set(h){g(void 0,h)}});function g(h,B){var _,C,X;if(!f)return;const H=F(e);H&&((X=H instanceof Document?f.document.body:H)==null||X.scrollTo({top:(_=F(B))!=null?_:d.value,left:(C=F(h))!=null?C:o.value,behavior:F(u)}))}const b=w(!1),y=J({left:!0,right:!1,top:!0,bottom:!1}),S=J({left:!1,right:!1,top:!1,bottom:!1}),A=h=>{b.value&&(b.value=!1,S.left=!1,S.right=!1,S.top=!1,S.bottom=!1,v(h))},M=fe(A,m+i),p=h=>{var B;if(!f)return;const _=((B=h==null?void 0:h.document)==null?void 0:B.documentElement)||(h==null?void 0:h.documentElement)||E(h),{display:C,flexDirection:X}=getComputedStyle(_),H=_.scrollLeft;S.left=H<n.value,S.right=H>n.value;const P=Math.abs(H)<=(a.left||0),V=Math.abs(H)+_.clientWidth>=_.scrollWidth-(a.right||0)-G;C==="flex"&&X==="row-reverse"?(y.left=V,y.right=P):(y.left=P,y.right=V),n.value=H;let L=_.scrollTop;h===f.document&&!L&&(L=f.document.body.scrollTop),S.top=L<t.value,S.bottom=L>t.value;const q=Math.abs(L)<=(a.top||0),$=Math.abs(L)+_.clientHeight>=_.scrollHeight-(a.bottom||0)-G;C==="flex"&&X==="column-reverse"?(y.top=$,y.bottom=q):(y.top=q,y.bottom=$),t.value=L},x=h=>{var B;if(!f)return;const _=(B=h.target.documentElement)!=null?B:h.target;p(_),b.value=!0,M(h),r(h)};return O(e,"scroll",m?le(x,m,!0,!1):x,l),D(()=>{try{const h=F(e);if(!h)return;p(h)}catch(h){c(h)}}),O(e,"scrollend",A,l),{x:o,y:d,isScrolling:b,arrivedState:y,directions:S,measure(){const h=F(e);f&&h&&p(h)}}}const we={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof Touch?null:[e.movementX,e.movementY]};function ge(e={}){const{type:s="page",touch:m=!0,resetOnTouchEnds:i=!1,initialValue:v={x:0,y:0},window:r=R,target:a=r,scroll:l=!0,eventFilter:u}=e;let f=null;const c=w(v.x),n=w(v.y),t=w(null),o=typeof s=="function"?s:we[s],d=p=>{const x=o(p);f=p,x&&([c.value,n.value]=x,t.value="mouse")},g=p=>{if(p.touches.length>0){const x=o(p.touches[0]);x&&([c.value,n.value]=x,t.value="touch")}},b=()=>{if(!f||!r)return;const p=o(f);f instanceof MouseEvent&&p&&(c.value=p[0]+r.scrollX,n.value=p[1]+r.scrollY)},y=()=>{c.value=v.x,n.value=v.y},S=u?p=>u(()=>d(p),{}):p=>d(p),A=u?p=>u(()=>g(p),{}):p=>g(p),M=u?()=>u(()=>b(),{}):()=>b();if(a){const p={passive:!0};O(a,["mousemove","dragover"],S,p),m&&s!=="movement"&&(O(a,["touchstart","touchmove"],A,p),i&&O(a,"touchend",y,p)),l&&s==="page"&&O(r,"scroll",M,{passive:!0})}return{x:c,y:n,sourceType:t}}function Me(e,s={}){const{handleOutside:m=!0,window:i=R}=s,v=s.type||"page",{x:r,y:a,sourceType:l}=ge(s),u=w(e??(i==null?void 0:i.document.body)),f=w(0),c=w(0),n=w(0),t=w(0),o=w(0),d=w(0),g=w(!0);let b=()=>{};return i&&(b=I([u,r,a],()=>{const y=E(u);if(!y)return;const{left:S,top:A,width:M,height:p}=y.getBoundingClientRect();n.value=S+(v==="page"?i.pageXOffset:0),t.value=A+(v==="page"?i.pageYOffset:0),o.value=p,d.value=M;const x=r.value-n.value,h=a.value-t.value;g.value=M===0||p===0||x<0||h<0||x>M||h>p,(m||!g.value)&&(f.value=x,c.value=h)},{immediate:!0}),O(document,"mouseleave",()=>{g.value=!0})),{x:r,y:a,sourceType:l,elementX:f,elementY:c,elementPositionX:n,elementPositionY:t,elementHeight:o,elementWidth:d,isOutside:g,stop:b}}function Fe(e={}){const{controls:s=!1,offset:m=0,immediate:i=!0,interval:v="requestAnimationFrame",callback:r}=e,a=w(U()+m),l=()=>a.value=U()+m,u=r?()=>{l(),r(a.value)}:l,f=v==="requestAnimationFrame"?me(u,{immediate:i}):ie(u,v,{immediate:i});return s?{timestamp:a,...f}:a}function Te(e,s,m,i={}){var v,r,a;const{clone:l=!1,passive:u=!1,eventName:f,deep:c=!1,defaultValue:n,shouldEmit:t}=i,o=Q(),d=m||(o==null?void 0:o.emit)||((v=o==null?void 0:o.$emit)==null?void 0:v.bind(o))||((a=(r=o==null?void 0:o.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(o==null?void 0:o.proxy));let g=f;s||(s="modelValue"),g=g||`update:${s.toString()}`;const b=A=>l?typeof l=="function"?l(A):pe(A):A,y=()=>ae(e[s])?b(e[s]):n,S=A=>{t?t(A)&&d(g,A):d(g,A)};if(u){const A=y(),M=w(A);let p=!1;return I(()=>e[s],x=>{p||(p=!0,M.value=b(x),ue(()=>p=!1))}),I(M,x=>{!p&&(x!==e[s]||c)&&S(x)},{deep:c}),M}else return W({get(){return y()},set(A){S(A)}})}export{Ae as a,Se as b,Oe as c,xe as d,Z as e,E as f,_e as g,ye as h,Te as i,Fe as j,Ee as o,Me as u};
