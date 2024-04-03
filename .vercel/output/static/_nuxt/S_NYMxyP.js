import{af as I,ar as E,ak as P,al as R,ae as k,K as U,B as x,g as y,X as H,k as M,u as L,G as O,ab as q}from"./Bc1ekGIV.js";async function B(e,t){return await D(t).catch(i=>(console.error("Failed to get image meta for "+t,i+""),{width:0,height:0,ratio:0}))}async function D(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>r(s),i.src=e})}function m(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function F(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const r of e.split(" ")){const i=parseInt(r.replace("x",""));i&&t.add(i)}return Array.from(t)}function T(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function C(e){const t={};if(typeof e=="string")for(const r of e.split(/[\s,]+/).filter(i=>i)){const i=r.split(":");i.length!==2?t["1px"]=i[0].trim():t[i[0].trim()]=i[1].trim()}else Object.assign(t,e);return t}function G(e){const t={options:e},r=(s,n={})=>j(t,s,n),i=(s,n={},a={})=>r(s,{...a,modifiers:k(n,a.modifiers||{})}).url;for(const s in e.presets)i[s]=(n,a,d)=>i(n,a,{...e.presets[s],...d});return i.options=e,i.getImage=r,i.getMeta=(s,n)=>J(t,s,n),i.getSizes=(s,n)=>Y(t,s,n),t.$img=i,i}async function J(e,t,r){const i=j(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await B(e,i.url)}function j(e,t,r){var f,l;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=K(e,r.provider||e.options.provider),n=X(e,r.preset);if(t=I(t)?t:E(t),!i.supportsAlias)for(const h in e.options.alias)t.startsWith(h)&&(t=P(e.options.alias[h],t.substr(h.length)));if(i.validateDomains&&I(t)){const h=R(t).host;if(!e.options.domains.find(p=>p===h))return{url:t}}const a=k(r,n,s);a.modifiers={...a.modifiers};const d=a.modifiers.format;(f=a.modifiers)!=null&&f.width&&(a.modifiers.width=m(a.modifiers.width)),(l=a.modifiers)!=null&&l.height&&(a.modifiers.height=m(a.modifiers.height));const c=i.getImage(t,a,e);return c.format=c.format||d||"",c}function K(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function X(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Y(e,t,r){var g,S,b,_,z;const i=m((g=r.modifiers)==null?void 0:g.width),s=m((S=r.modifiers)==null?void 0:S.height),n=C(r.sizes),a=(b=r.densities)!=null&&b.trim()?F(r.densities.trim()):e.options.densities;T(a);const d=i&&s?s/i:0,c=[],f=[];if(Object.keys(n).length>=1){for(const u in n){const v=W(u,String(n[u]),s,d,e);if(v!==void 0){c.push({size:v.size,screenMaxWidth:v.screenMaxWidth,media:`(max-width: ${v.screenMaxWidth}px)`});for(const w of a)f.push({width:v._cWidth*w,src:$(e,t,r,v,w)})}}Q(c)}else for(const u of a){const v=Object.keys(n)[0];let w=W(v,String(n[v]),s,d,e);w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(_=r.modifiers)==null?void 0:_.width,_cHeight:(z=r.modifiers)==null?void 0:z.height}),f.push({width:u,src:$(e,t,r,w,u)})}V(f);const l=f[f.length-1],h=c.length?c.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,p=h?"w":"x",o=f.map(u=>`${u.src} ${u.width}${p}`).join(", ");return{sizes:h,srcset:o,src:l==null?void 0:l.src}}function W(e,t,r,i,s){const n=s.options.screens&&s.options.screens[e]||parseInt(e),a=t.endsWith("vw");if(!a&&/^\d+$/.test(t)&&(t=t+"px"),!a&&!t.endsWith("px"))return;let d=parseInt(t);if(!n||!d)return;a&&(d=Math.round(d/100*n));const c=i?Math.round(d*i):r;return{size:t,screenMaxWidth:n,_cWidth:d,_cHeight:c}}function $(e,t,r,i,s){return e.$img(t,{...r.modifiers,width:i._cWidth?i._cWidth*s:void 0,height:i._cHeight?i._cHeight*s:void 0},r)}function Q(e){var r;e.sort((i,s)=>i.screenMaxWidth-s.screenMaxWidth);let t=null;for(let i=e.length-1;i>=0;i--){const s=e[i];s.media===t&&e.splice(i,1),t=s.media}for(let i=0;i<e.length;i++)e[i].media=((r=e[i+1])==null?void 0:r.media)||""}function V(e){e.sort((r,i)=>r.width-i.width);let t=null;for(let r=e.length-1;r>=0;r--){const i=e[r];i.width===t&&e.splice(r,1),t=i.width}}const Z=e=>({url:e}),ee=Object.freeze(Object.defineProperty({__proto__:null,getImage:Z},Symbol.toStringTag,{value:"Module"})),A={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1440},presets:{adminThumbnail:{modifiers:{format:"jpg, gif",width:88,height:88}}},provider:"none",domains:[],alias:{},densities:[1,2],format:["webp"]};A.providers={none:{provider:ee,defaults:{}}};const N=()=>{const e=U(),t=x();return t.$img||t._img||(t._img=G({...A,nuxt:{baseURL:e.app.baseURL}}))};function te(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ie={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},re=e=>{const t=y(()=>({provider:e.provider,preset:e.preset})),r=y(()=>({width:m(e.width),height:m(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),i=N(),s=y(()=>({...e.modifiers,width:m(e.width),height:m(e.height),format:e.format,quality:e.quality||i.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:s}},se={...ie,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},oe=H({name:"NuxtImg",props:se,emits:["load","error"],setup:(e,t)=>{const r=N(),i=re(e),s=M(!1),n=y(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...i.modifiers.value,width:m(e.width),height:m(e.height)}})),a=y(()=>{const o={...i.attrs.value,"data-nuxt-img":""};return(!e.placeholder||s.value)&&(o.sizes=n.value.sizes,o.srcset=n.value.srcset),o}),d=y(()=>{let o=e.placeholder;if(o===""&&(o=!0),!o||s.value)return!1;if(typeof o=="string")return o;const g=Array.isArray(o)?o:typeof o=="number"?[o,o]:[10,10];return r(e.src,{...i.modifiers.value,width:g[0],height:g[1],quality:g[2]||50,blur:g[3]||3},i.options.value)}),c=y(()=>e.sizes?n.value.src:r(e.src,i.modifiers.value,i.options.value)),f=y(()=>d.value?d.value:c.value);if(e.preload){const o=Object.values(n.value).every(g=>g);L({link:[{rel:"preload",as:"image",nonce:e.nonce,...o?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:f.value}}]})}const l=M(),p=x().isHydrating;return O(()=>{if(d.value){const o=new Image;o.src=c.value,e.sizes&&(o.sizes=n.value.sizes||"",o.srcset=n.value.srcset),o.onload=g=>{s.value=!0,t.emit("load",g)},te("nuxt-image");return}l.value&&(l.value.complete&&p&&(l.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),l.value.onload=o=>{t.emit("load",o)},l.value.onerror=o=>{t.emit("error",o)})}),()=>q("img",{ref:l,src:f.value,...a.value,...t.attrs})}});export{oe as _};
