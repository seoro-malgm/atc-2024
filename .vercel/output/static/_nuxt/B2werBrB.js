import{k as x,s as W,an as fe,h as N,aL as oe,aM as pe,D as K,r as F,l as he,E as se,m as te,X as Z,F as me,G as J,H as ue,q as be,Z as B,W as ge,a5 as _}from"./DFjfPBi9.js";import{d as xe,e as Se}from"./B1cmBaqL.js";import{u as L,o as y,E as Oe,A as H,T as le,I as Y,N as G,a as $}from"./CIloBm_U.js";import{w as ye,n as Ie}from"./CmNS8Rht.js";import{s as Ce}from"./Bx2_kDoA.js";import{c as P,f as ne,i as Re,u as Te}from"./CBWrziue.js";import{f as Ee,s as we}from"./DocYCl8u.js";import{t as Me,i as X,l as ze}from"./VWzkzOFa.js";import{o as ie,t as ae}from"./jthpZqva.js";import{i as Pe,O as ke}from"./C4VvDC2J.js";function j(o,d,e){let n=e.initialDeps??[],t;return()=>{var a,i,l,p;let h;e.key&&((a=e.debug)!=null&&a.call(e))&&(h=Date.now());const v=o();if(!(v.length!==n.length||v.some((R,w)=>n[w]!==R)))return t;n=v;let C;if(e.key&&((i=e.debug)!=null&&i.call(e))&&(C=Date.now()),t=d(...v),e.key&&((l=e.debug)!=null&&l.call(e))){const R=Math.round((Date.now()-h)*100)/100,w=Math.round((Date.now()-C)*100)/100,k=w/16,V=(m,S)=>{for(m=String(m);m.length<S;)m=" "+m;return m};console.info(`%c⏱ ${V(w,5)} /${V(R,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*k,120))}deg 100% 31%);`,e==null?void 0:e.key)}return(p=e==null?void 0:e.onChange)==null||p.call(e,t),t}}function ee(o,d){if(o===void 0)throw new Error(`Unexpected undefined${d?`: ${d}`:""}`);return o}const De=(o,d)=>Math.abs(o-d)<1,Fe=o=>o,$e=o=>{const d=Math.max(o.startIndex-o.overscan,0),e=Math.min(o.endIndex+o.overscan,o.count-1),n=[];for(let t=d;t<=e;t++)n.push(t);return n},Ve=(o,d)=>{const e=o.scrollElement;if(!e)return;const n=a=>{const{width:i,height:l}=a;d({width:Math.round(i),height:Math.round(l)})};if(n(e.getBoundingClientRect()),typeof ResizeObserver>"u")return()=>{};const t=new ResizeObserver(a=>{const i=a[0];if(i!=null&&i.borderBoxSize){const l=i.borderBoxSize[0];if(l){n({width:l.inlineSize,height:l.blockSize});return}}n(e.getBoundingClientRect())});return t.observe(e,{box:"border-box"}),()=>{t.unobserve(e)}},Ae=(o,d)=>{const e=o.scrollElement;if(!e)return;const n=()=>{d(e[o.options.horizontal?"scrollLeft":"scrollTop"])};return n(),e.addEventListener("scroll",n,{passive:!0}),()=>{e.removeEventListener("scroll",n)}},_e=(o,d,e)=>{if(d!=null&&d.borderBoxSize){const n=d.borderBoxSize[0];if(n)return Math.round(n[e.options.horizontal?"inlineSize":"blockSize"])}return Math.round(o.getBoundingClientRect()[e.options.horizontal?"width":"height"])},Be=(o,{adjustments:d=0,behavior:e},n)=>{var t,a;const i=o+d;(a=(t=n.scrollElement)==null?void 0:t.scrollTo)==null||a.call(t,{[n.options.horizontal?"left":"top"]:i,behavior:e})};class Ne{constructor(d){this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=(()=>{let e=null;const n=()=>e||(typeof ResizeObserver<"u"?e=new ResizeObserver(t=>{t.forEach(a=>{this._measureElement(a.target,a)})}):null);return{disconnect:()=>{var t;return(t=n())==null?void 0:t.disconnect()},observe:t=>{var a;return(a=n())==null?void 0:a.observe(t,{box:"border-box"})},unobserve:t=>{var a;return(a=n())==null?void 0:a.unobserve(t)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([n,t])=>{typeof t>"u"&&delete e[n]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Fe,rangeExtractor:$e,onChange:()=>{},measureElement:_e,initialRect:{width:0,height:0},scrollMargin:0,gap:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,...e}},this.notify=e=>{var n,t;(t=(n=this.options).onChange)==null||t.call(n,this,e)},this.maybeNotify=j(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.scrollElement=null},this._didMount=()=>(this.measureElementCache.forEach(this.observer.observe),()=>{this.observer.disconnect(),this.cleanup()}),this._willUpdate=()=>{const e=this.options.getScrollElement();this.scrollElement!==e&&(this.cleanup(),this.scrollElement=e,this._scrollToOffset(this.scrollOffset,{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,n=>{this.scrollRect=n,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,n=>{this.scrollAdjustments=0,this.scrollOffset!==n&&(this.isScrollingTimeoutId!==null&&(clearTimeout(this.isScrollingTimeoutId),this.isScrollingTimeoutId=null),this.isScrolling=!0,this.scrollDirection=this.scrollOffset<n?"forward":"backward",this.scrollOffset=n,this.maybeNotify(),this.isScrollingTimeoutId=setTimeout(()=>{this.isScrollingTimeoutId=null,this.isScrolling=!1,this.scrollDirection=null,this.maybeNotify()},this.options.scrollingDelay))})))},this.getSize=()=>this.scrollRect[this.options.horizontal?"width":"height"],this.memoOptions=j(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey],(e,n,t,a)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:n,scrollMargin:t,getItemKey:a}),{key:!1}),this.getFurthestMeasurement=(e,n)=>{const t=new Map,a=new Map;for(let i=n-1;i>=0;i--){const l=e[i];if(t.has(l.lane))continue;const p=a.get(l.lane);if(p==null||l.end>p.end?a.set(l.lane,l):l.end<p.end&&t.set(l.lane,!0),t.size===this.options.lanes)break}return a.size===this.options.lanes?Array.from(a.values()).sort((i,l)=>i.end===l.end?i.index-l.index:i.end-l.end)[0]:void 0},this.getMeasurements=j(()=>[this.memoOptions(),this.itemSizeCache],({count:e,paddingStart:n,scrollMargin:t,getItemKey:a},i)=>{const l=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const p=this.measurementsCache.slice(0,l);for(let h=l;h<e;h++){const v=a(h),f=this.options.lanes===1?p[h-1]:this.getFurthestMeasurement(p,h),C=f?f.end+this.options.gap:n+t,R=i.get(v),w=typeof R=="number"?R:this.options.estimateSize(h),k=C+w,V=f?f.lane:h%this.options.lanes;p[h]={index:h,start:C,size:w,end:k,key:v,lane:V}}return this.measurementsCache=p,p},{key:!1,debug:()=>this.options.debug}),this.calculateRange=j(()=>[this.getMeasurements(),this.getSize(),this.scrollOffset],(e,n,t)=>this.range=e.length>0&&n>0?je({measurements:e,outerSize:n,scrollOffset:t}):null,{key:!1,debug:()=>this.options.debug}),this.getIndexes=j(()=>[this.options.rangeExtractor,this.calculateRange(),this.options.overscan,this.options.count],(e,n,t,a)=>n===null?[]:e({...n,overscan:t,count:a}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const n=this.options.indexAttribute,t=e.getAttribute(n);return t?parseInt(t,10):(console.warn(`Missing attribute name '${n}={index}' on measured element.`),-1)},this._measureElement=(e,n)=>{const t=this.measurementsCache[this.indexFromElement(e)];if(!t||!e.isConnected){this.measureElementCache.forEach((l,p)=>{l===e&&(this.observer.unobserve(e),this.measureElementCache.delete(p))});return}const a=this.measureElementCache.get(t.key);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.measureElementCache.set(t.key,e));const i=this.options.measureElement(e,n,this);this.resizeItem(t,i)},this.resizeItem=(e,n)=>{const t=this.itemSizeCache.get(e.key)??e.size,a=n-t;a!==0&&(e.start<this.scrollOffset+this.scrollAdjustments&&this._scrollToOffset(this.scrollOffset,{adjustments:this.scrollAdjustments+=a,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(e.index),this.itemSizeCache=new Map(this.itemSizeCache.set(e.key,n)),this.notify(!1))},this.measureElement=e=>{e&&this._measureElement(e,void 0)},this.getVirtualItems=j(()=>[this.getIndexes(),this.getMeasurements()],(e,n)=>{const t=[];for(let a=0,i=e.length;a<i;a++){const l=e[a],p=n[l];t.push(p)}return t},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const n=this.getMeasurements();return ee(n[re(0,n.length-1,t=>ee(n[t]).start,e)])},this.getOffsetForAlignment=(e,n)=>{const t=this.getSize();n==="auto"&&(e<=this.scrollOffset?n="start":e>=this.scrollOffset+t?n="end":n="start"),n==="start"?e=e:n==="end"?e=e-t:n==="center"&&(e=e-t/2);const a=this.options.horizontal?"scrollWidth":"scrollHeight",l=(this.scrollElement?"document"in this.scrollElement?this.scrollElement.document.documentElement[a]:this.scrollElement[a]:0)-this.getSize();return Math.max(Math.min(l,e),0)},this.getOffsetForIndex=(e,n="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const t=ee(this.getMeasurements()[e]);if(n==="auto")if(t.end>=this.scrollOffset+this.getSize()-this.options.scrollPaddingEnd)n="end";else if(t.start<=this.scrollOffset+this.options.scrollPaddingStart)n="start";else return[this.scrollOffset,n];const a=n==="end"?t.end+this.options.scrollPaddingEnd:t.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(a,n),n]},this.isDynamicMode=()=>this.measureElementCache.size>0,this.cancelScrollToIndex=()=>{this.scrollToIndexTimeoutId!==null&&(clearTimeout(this.scrollToIndexTimeoutId),this.scrollToIndexTimeoutId=null)},this.scrollToOffset=(e,{align:n="start",behavior:t}={})=>{this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,n),{adjustments:void 0,behavior:t})},this.scrollToIndex=(e,{align:n="auto",behavior:t}={})=>{e=Math.max(0,Math.min(e,this.options.count-1)),this.cancelScrollToIndex(),t==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");const[a,i]=this.getOffsetForIndex(e,n);this._scrollToOffset(a,{adjustments:void 0,behavior:t}),t!=="smooth"&&this.isDynamicMode()&&(this.scrollToIndexTimeoutId=setTimeout(()=>{if(this.scrollToIndexTimeoutId=null,this.measureElementCache.has(this.options.getItemKey(e))){const[p]=this.getOffsetForIndex(e,i);De(p,this.scrollOffset)||this.scrollToIndex(e,{align:i,behavior:t})}else this.scrollToIndex(e,{align:i,behavior:t})}))},this.scrollBy=(e,{behavior:n}={})=>{this.cancelScrollToIndex(),n==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.scrollOffset+e,{adjustments:void 0,behavior:n})},this.getTotalSize=()=>{var e;const n=this.getMeasurements();let t;return n.length===0?t=this.options.paddingStart:t=this.options.lanes===1?((e=n[n.length-1])==null?void 0:e.end)??0:Math.max(...n.slice(-this.options.lanes).map(a=>a.end)),t-this.options.scrollMargin+this.options.paddingEnd},this._scrollToOffset=(e,{adjustments:n,behavior:t})=>{this.options.scrollToFn(e,{behavior:t,adjustments:n},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(d),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}),this.maybeNotify()}}const re=(o,d,e,n)=>{for(;o<=d;){const t=(o+d)/2|0,a=e(t);if(a<n)o=t+1;else if(a>n)d=t-1;else return t}return o>0?o-1:0};function je({measurements:o,outerSize:d,scrollOffset:e}){const n=o.length-1,a=re(0,n,l=>o[l].start,e);let i=a;for(;i<n&&o[i].end<e+d;)i++;return{startIndex:a,endIndex:i}}function Le(o){const d=new Ne(W(o)),e=fe(d),n=d._didMount();return N(()=>W(o).getScrollElement(),t=>{t&&d._willUpdate()},{immediate:!0}),N(()=>W(o),t=>{d.setOptions({...t,onChange:(a,i)=>{var l;oe(e),(l=t.onChange)==null||l.call(t,a,i)}}),d._willUpdate(),oe(e)},{immediate:!0}),pe(n),e}function Ke(o){return Le(x(()=>({observeElementRect:Ve,observeElementOffset:Ae,scrollToFn:Be,...W(o)})))}var Ue={};function qe(o,d){return o===d}var He=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(He||{}),We=(o=>(o[o.Single=0]="Single",o[o.Multi=1]="Multi",o))(We||{}),Ze=(o=>(o[o.Pointer=0]="Pointer",o[o.Focus=1]="Focus",o[o.Other=2]="Other",o))(Ze||{});let de=Symbol("ComboboxContext");function U(o){let d=ue(de,null);if(d===null){let e=new Error(`<${o} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,U),e}return d}let ce=Symbol("VirtualContext"),Je=K({name:"VirtualProvider",setup(o,{slots:d}){let e=U("VirtualProvider"),n=x(()=>{let l=y(e.optionsRef);if(!l)return{start:0,end:0};let p=window.getComputedStyle(l);return{start:parseFloat(p.paddingBlockStart||p.paddingTop),end:parseFloat(p.paddingBlockEnd||p.paddingBottom)}}),t=Ke(x(()=>({scrollPaddingStart:n.value.start,scrollPaddingEnd:n.value.end,count:e.virtual.value.options.length,estimateSize(){return 40},getScrollElement(){return y(e.optionsRef)},overscan:12}))),a=x(()=>{var l;return(l=e.virtual.value)==null?void 0:l.options}),i=F(0);return N([a],()=>{i.value+=1}),se(ce,e.virtual.value?t:null),()=>[Z("div",{style:{position:"relative",width:"100%",height:`${t.value.getTotalSize()}px`},ref:l=>{if(l){if(typeof process<"u"&&Ue.JEST_WORKER_ID!==void 0||e.activationTrigger.value===0)return;e.activeOptionIndex.value!==null&&e.virtual.value.options.length>e.activeOptionIndex.value&&t.value.scrollToIndex(e.activeOptionIndex.value)}}},t.value.getVirtualItems().map(l=>ge(d.default({option:e.virtual.value.options[l.index],open:e.comboboxState.value===0})[0],{key:`${i.value}-${l.index}`,"data-index":l.index,"aria-setsize":e.virtual.value.options.length,"aria-posinset":l.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${l.start}px)`,overflowAnchor:"none"}})))]}}),at=K({name:"Combobox",emits:{"update:modelValue":o=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],nullable:!0,default:null},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},nullable:{type:Boolean,default:!1},multiple:{type:[Boolean],default:!1},immediate:{type:[Boolean],default:!1},virtual:{type:Object,default:null}},inheritAttrs:!1,setup(o,{slots:d,attrs:e,emit:n}){let t=F(1),a=F(null),i=F(null),l=F(null),p=F(null),h=F({static:!1,hold:!1}),v=F([]),f=F(null),C=F(2),R=F(!1);function w(u=c=>c){let c=f.value!==null?v.value[f.value]:null,b=u(v.value.slice()),g=b.length>0&&b[0].dataRef.order.value!==null?b.sort((E,A)=>E.dataRef.order.value-A.dataRef.order.value):ke(b,E=>y(E.dataRef.domRef)),T=c?g.indexOf(c):null;return T===-1&&(T=null),{options:g,activeOptionIndex:T}}let k=x(()=>o.multiple?1:0),V=x(()=>o.nullable),[m,S]=xe(x(()=>o.modelValue),u=>n("update:modelValue",u),x(()=>o.defaultValue)),D=x(()=>m.value===void 0?L(k.value,{1:[],0:void 0}):m.value),r=null,I=null;function O(u){return L(k.value,{0(){return S==null?void 0:S(u)},1:()=>{let c=_(s.value.value).slice(),b=_(u),g=c.findIndex(T=>s.compare(b,_(T)));return g===-1?c.push(b):c.splice(g,1),S==null?void 0:S(c)}})}let M=x(()=>{});N([M],([u],[c])=>{if(s.virtual.value&&u&&c&&f.value!==null){let b=u.indexOf(c[f.value]);b!==-1?f.value=b:f.value=null}});let s={comboboxState:t,value:D,mode:k,compare(u,c){if(typeof o.by=="string"){let b=o.by;return(u==null?void 0:u[b])===(c==null?void 0:c[b])}return o.by===null?qe(u,c):o.by(u,c)},calculateIndex(u){return s.virtual.value?o.by===null?s.virtual.value.options.indexOf(u):s.virtual.value.options.findIndex(c=>s.compare(c,u)):v.value.findIndex(c=>s.compare(c.dataRef.value,u))},defaultValue:x(()=>o.defaultValue),nullable:V,immediate:x(()=>!1),virtual:x(()=>null),inputRef:i,labelRef:a,buttonRef:l,optionsRef:p,disabled:x(()=>o.disabled),options:v,change(u){S(u)},activeOptionIndex:x(()=>{if(R.value&&f.value===null&&(s.virtual.value?s.virtual.value.options.length>0:v.value.length>0)){if(s.virtual.value){let c=s.virtual.value.options.findIndex(b=>{var g;return!((g=s.virtual.value)!=null&&g.disabled(b))});if(c!==-1)return c}let u=v.value.findIndex(c=>!c.dataRef.disabled);if(u!==-1)return u}return f.value}),activationTrigger:C,optionsPropsRef:h,closeCombobox(){R.value=!1,!o.disabled&&t.value!==1&&(t.value=1,f.value=null)},openCombobox(){if(R.value=!0,!o.disabled&&t.value!==0){if(s.value.value){let u=s.calculateIndex(s.value.value);u!==-1&&(f.value=u)}t.value=0}},setActivationTrigger(u){C.value=u},goToOption(u,c,b){R.value=!1,r!==null&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{if(o.disabled||p.value&&!h.value.static&&t.value===1)return;if(s.virtual.value){f.value=u===P.Specific?c:ne({focus:u},{resolveItems:()=>s.virtual.value.options,resolveActiveIndex:()=>{var E,A;return(A=(E=s.activeOptionIndex.value)!=null?E:s.virtual.value.options.findIndex(Q=>{var q;return!((q=s.virtual.value)!=null&&q.disabled(Q))}))!=null?A:null},resolveDisabled:E=>s.virtual.value.disabled(E),resolveId(){throw new Error("Function not implemented.")}}),C.value=b??2;return}let g=w();if(g.activeOptionIndex===null){let E=g.options.findIndex(A=>!A.dataRef.disabled);E!==-1&&(g.activeOptionIndex=E)}let T=u===P.Specific?c:ne({focus:u},{resolveItems:()=>g.options,resolveActiveIndex:()=>g.activeOptionIndex,resolveId:E=>E.id,resolveDisabled:E=>E.dataRef.disabled});f.value=T,C.value=b??2,v.value=g.options})},selectOption(u){let c=v.value.find(g=>g.id===u);if(!c)return;let{dataRef:b}=c;O(b.value)},selectActiveOption(){if(s.activeOptionIndex.value!==null){if(s.virtual.value)O(s.virtual.value.options[s.activeOptionIndex.value]);else{let{dataRef:u}=v.value[s.activeOptionIndex.value];O(u.value)}s.goToOption(P.Specific,s.activeOptionIndex.value)}},registerOption(u,c){let b=he({id:u,dataRef:c});if(s.virtual.value){v.value.push(b);return}I&&cancelAnimationFrame(I);let g=w(T=>(T.push(b),T));f.value===null&&s.isSelected(c.value.value)&&(g.activeOptionIndex=g.options.indexOf(b)),v.value=g.options,f.value=g.activeOptionIndex,C.value=2,g.options.some(T=>!y(T.dataRef.domRef))&&(I=requestAnimationFrame(()=>{let T=w();v.value=T.options,f.value=T.activeOptionIndex}))},unregisterOption(u,c){if(r!==null&&cancelAnimationFrame(r),c&&(R.value=!0),s.virtual.value){v.value=v.value.filter(g=>g.id!==u);return}let b=w(g=>{let T=g.findIndex(E=>E.id===u);return T!==-1&&g.splice(T,1),g});v.value=b.options,f.value=b.activeOptionIndex,C.value=2},isSelected(u){return L(k.value,{0:()=>s.compare(_(s.value.value),_(u)),1:()=>_(s.value.value).some(c=>s.compare(_(c),_(u)))})},isActive(u){return f.value===s.calculateIndex(u)}};ye([i,l,p],()=>s.closeCombobox(),x(()=>t.value===0)),se(de,s),Me(x(()=>L(t.value,{0:X.Open,1:X.Closed})));let z=x(()=>{var u;return(u=y(i))==null?void 0:u.closest("form")});return te(()=>{N([z],()=>{if(!z.value||o.defaultValue===void 0)return;function u(){s.change(o.defaultValue)}return z.value.addEventListener("reset",u),()=>{var c;(c=z.value)==null||c.removeEventListener("reset",u)}},{immediate:!0})}),()=>{var u,c,b;let{name:g,disabled:T,form:E,...A}=o,Q={open:t.value===0,disabled:T,activeIndex:s.activeOptionIndex.value,activeOption:s.activeOptionIndex.value===null?null:s.virtual.value?s.virtual.value.options[(u=s.activeOptionIndex.value)!=null?u:0]:(b=(c=s.options.value[s.activeOptionIndex.value])==null?void 0:c.dataRef.value)!=null?b:null,value:D.value};return Z(me,[...g!=null&&D.value!=null?Se({[g]:D.value}).map(([q,ve])=>Z(Ee,Oe({features:we.Hidden,key:q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:E,name:q,value:ve}))):[],H({theirProps:{...e,...le(A,["by","defaultValue","immediate","modelValue","multiple","nullable","onUpdate:modelValue","virtual"])},ourProps:{},slot:Q,slots:d,attrs:e,name:"Combobox"})])}}}),st=K({name:"ComboboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(o,{attrs:d,slots:e,expose:n}){var t;let a=(t=o.id)!=null?t:`headlessui-combobox-button-${Y()}`,i=U("ComboboxButton");n({el:i.buttonRef,$el:i.buttonRef});function l(v){i.disabled.value||(i.comboboxState.value===0?i.closeCombobox():(v.preventDefault(),i.openCombobox()),B(()=>{var f;return(f=y(i.inputRef))==null?void 0:f.focus({preventScroll:!0})}))}function p(v){switch(v.key){case $.ArrowDown:v.preventDefault(),v.stopPropagation(),i.comboboxState.value===1&&i.openCombobox(),B(()=>{var f;return(f=i.inputRef.value)==null?void 0:f.focus({preventScroll:!0})});return;case $.ArrowUp:v.preventDefault(),v.stopPropagation(),i.comboboxState.value===1&&(i.openCombobox(),B(()=>{i.value.value||i.goToOption(P.Last)})),B(()=>{var f;return(f=i.inputRef.value)==null?void 0:f.focus({preventScroll:!0})});return;case $.Escape:if(i.comboboxState.value!==0)return;v.preventDefault(),i.optionsRef.value&&!i.optionsPropsRef.value.static&&v.stopPropagation(),i.closeCombobox(),B(()=>{var f;return(f=i.inputRef.value)==null?void 0:f.focus({preventScroll:!0})});return}}let h=Ce(x(()=>({as:o.as,type:d.type})),i.buttonRef);return()=>{var v,f;let C={open:i.comboboxState.value===0,disabled:i.disabled.value,value:i.value.value},{...R}=o,w={ref:i.buttonRef,id:a,type:h.value,tabindex:"-1","aria-haspopup":"listbox","aria-controls":(v=y(i.optionsRef))==null?void 0:v.id,"aria-expanded":i.comboboxState.value===0,"aria-labelledby":i.labelRef.value?[(f=y(i.labelRef))==null?void 0:f.id,a].join(" "):void 0,disabled:i.disabled.value===!0?!0:void 0,onKeydown:p,onClick:l};return H({ourProps:w,theirProps:R,slot:C,attrs:d,slots:e,name:"ComboboxButton"})}}}),ut=K({name:"ComboboxInput",props:{as:{type:[Object,String],default:"input"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},displayValue:{type:Function},defaultValue:{type:String,default:void 0},id:{type:String,default:null}},emits:{change:o=>!0},setup(o,{emit:d,attrs:e,slots:n,expose:t}){var a;let i=(a=o.id)!=null?a:`headlessui-combobox-input-${Y()}`,l=U("ComboboxInput"),p=x(()=>Pe(y(l.inputRef))),h={value:!1};t({el:l.inputRef,$el:l.inputRef});function v(){l.change(null);let r=y(l.optionsRef);r&&(r.scrollTop=0),l.goToOption(P.Nothing)}let f=x(()=>{var r;let I=l.value.value;return y(l.inputRef)?typeof o.displayValue<"u"&&I!==void 0?(r=o.displayValue(I))!=null?r:"":typeof I=="string"?I:"":""});te(()=>{N([f,l.comboboxState,p],([r,I],[O,M])=>{if(h.value)return;let s=y(l.inputRef);s&&((M===0&&I===1||r!==O)&&(s.value=r),requestAnimationFrame(()=>{var z;if(h.value||!s||((z=p.value)==null?void 0:z.activeElement)!==s)return;let{selectionStart:u,selectionEnd:c}=s;Math.abs((c??0)-(u??0))===0&&u===0&&s.setSelectionRange(s.value.length,s.value.length)}))},{immediate:!0}),N([l.comboboxState],([r],[I])=>{if(r===0&&I===1){if(h.value)return;let O=y(l.inputRef);if(!O)return;let M=O.value,{selectionStart:s,selectionEnd:z,selectionDirection:u}=O;O.value="",O.value=M,u!==null?O.setSelectionRange(s,z,u):O.setSelectionRange(s,z)}})});let C=F(!1);function R(){C.value=!0}function w(){ie().nextFrame(()=>{C.value=!1})}function k(r){switch(h.value=!0,r.key){case $.Enter:if(h.value=!1,l.comboboxState.value!==0||C.value)return;if(r.preventDefault(),r.stopPropagation(),l.activeOptionIndex.value===null){l.closeCombobox();return}l.selectActiveOption(),l.mode.value===0&&l.closeCombobox();break;case $.ArrowDown:return h.value=!1,r.preventDefault(),r.stopPropagation(),L(l.comboboxState.value,{0:()=>l.goToOption(P.Next),1:()=>l.openCombobox()});case $.ArrowUp:return h.value=!1,r.preventDefault(),r.stopPropagation(),L(l.comboboxState.value,{0:()=>l.goToOption(P.Previous),1:()=>{l.openCombobox(),B(()=>{l.value.value||l.goToOption(P.Last)})}});case $.Home:if(r.shiftKey)break;return h.value=!1,r.preventDefault(),r.stopPropagation(),l.goToOption(P.First);case $.PageUp:return h.value=!1,r.preventDefault(),r.stopPropagation(),l.goToOption(P.First);case $.End:if(r.shiftKey)break;return h.value=!1,r.preventDefault(),r.stopPropagation(),l.goToOption(P.Last);case $.PageDown:return h.value=!1,r.preventDefault(),r.stopPropagation(),l.goToOption(P.Last);case $.Escape:if(h.value=!1,l.comboboxState.value!==0)return;r.preventDefault(),l.optionsRef.value&&!l.optionsPropsRef.value.static&&r.stopPropagation(),l.nullable.value&&l.mode.value===0&&l.value.value===null&&v(),l.closeCombobox();break;case $.Tab:if(h.value=!1,l.comboboxState.value!==0)return;l.mode.value===0&&l.activationTrigger.value!==1&&l.selectActiveOption(),l.closeCombobox();break}}function V(r){d("change",r),l.nullable.value&&l.mode.value===0&&r.target.value===""&&v(),l.openCombobox()}function m(r){var I,O,M;let s=(I=r.relatedTarget)!=null?I:ae.find(z=>z!==r.currentTarget);if(h.value=!1,!((O=y(l.optionsRef))!=null&&O.contains(s))&&!((M=y(l.buttonRef))!=null&&M.contains(s))&&l.comboboxState.value===0)return r.preventDefault(),l.mode.value===0&&(l.nullable.value&&l.value.value===null?v():l.activationTrigger.value!==1&&l.selectActiveOption()),l.closeCombobox()}function S(r){var I,O,M;let s=(I=r.relatedTarget)!=null?I:ae.find(z=>z!==r.currentTarget);(O=y(l.buttonRef))!=null&&O.contains(s)||(M=y(l.optionsRef))!=null&&M.contains(s)||l.disabled.value||l.immediate.value&&l.comboboxState.value!==0&&(l.openCombobox(),ie().nextFrame(()=>{l.setActivationTrigger(1)}))}let D=x(()=>{var r,I,O,M;return(M=(O=(I=o.defaultValue)!=null?I:l.defaultValue.value!==void 0?(r=o.displayValue)==null?void 0:r.call(o,l.defaultValue.value):null)!=null?O:l.defaultValue.value)!=null?M:""});return()=>{var r,I,O,M,s,z,u;let c={open:l.comboboxState.value===0},{displayValue:b,onChange:g,...T}=o,E={"aria-controls":(r=l.optionsRef.value)==null?void 0:r.id,"aria-expanded":l.comboboxState.value===0,"aria-activedescendant":l.activeOptionIndex.value===null?void 0:l.virtual.value?(I=l.options.value.find(A=>!l.virtual.value.disabled(A.dataRef.value)&&l.compare(A.dataRef.value,l.virtual.value.options[l.activeOptionIndex.value])))==null?void 0:I.id:(O=l.options.value[l.activeOptionIndex.value])==null?void 0:O.id,"aria-labelledby":(z=(M=y(l.labelRef))==null?void 0:M.id)!=null?z:(s=y(l.buttonRef))==null?void 0:s.id,"aria-autocomplete":"list",id:i,onCompositionstart:R,onCompositionend:w,onKeydown:k,onInput:V,onFocus:S,onBlur:m,role:"combobox",type:(u=e.type)!=null?u:"text",tabIndex:0,ref:l.inputRef,defaultValue:D.value,disabled:l.disabled.value===!0?!0:void 0};return H({ourProps:E,theirProps:T,slot:c,attrs:e,slots:n,features:G.RenderStrategy|G.Static,name:"ComboboxInput"})}}}),rt=K({name:"ComboboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},hold:{type:[Boolean],default:!1}},setup(o,{attrs:d,slots:e,expose:n}){let t=U("ComboboxOptions"),a=`headlessui-combobox-options-${Y()}`;n({el:t.optionsRef,$el:t.optionsRef}),J(()=>{t.optionsPropsRef.value.static=o.static}),J(()=>{t.optionsPropsRef.value.hold=o.hold});let i=ze(),l=x(()=>i!==null?(i.value&X.Open)===X.Open:t.comboboxState.value===0);return Re({container:x(()=>y(t.optionsRef)),enabled:x(()=>t.comboboxState.value===0),accept(p){return p.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}}),()=>{var p,h,v;let f={open:t.comboboxState.value===0},C={"aria-labelledby":(v=(p=y(t.labelRef))==null?void 0:p.id)!=null?v:(h=y(t.buttonRef))==null?void 0:h.id,id:a,ref:t.optionsRef,role:"listbox","aria-multiselectable":t.mode.value===1?!0:void 0},R=le(o,["hold"]);return H({ourProps:C,theirProps:R,slot:f,attrs:d,slots:t.virtual.value&&t.comboboxState.value===0?{...e,default:()=>[Z(Je,{},e.default)]}:e,features:G.RenderStrategy|G.Static,visible:l.value,name:"ComboboxOptions"})}}}),dt=K({name:"ComboboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},order:{type:[Number],default:null}},setup(o,{slots:d,attrs:e,expose:n}){let t=U("ComboboxOption"),a=`headlessui-combobox-option-${Y()}`,i=F(null);n({el:i,$el:i});let l=x(()=>{var m;return t.virtual.value?t.activeOptionIndex.value===t.calculateIndex(o.value):t.activeOptionIndex.value===null?!1:((m=t.options.value[t.activeOptionIndex.value])==null?void 0:m.id)===a}),p=x(()=>t.isSelected(o.value)),h=ue(ce,null),v=x(()=>({disabled:o.disabled,value:o.value,domRef:i,order:x(()=>o.order)}));te(()=>t.registerOption(a,v)),be(()=>t.unregisterOption(a,l.value)),J(()=>{let m=y(i);m&&(h==null||h.value.measureElement(m))}),J(()=>{t.comboboxState.value===0&&l.value&&(t.virtual.value||t.activationTrigger.value!==0&&B(()=>{var m,S;return(S=(m=y(i))==null?void 0:m.scrollIntoView)==null?void 0:S.call(m,{block:"nearest"})}))});function f(m){var S;if(o.disabled||(S=t.virtual.value)!=null&&S.disabled(o.value))return m.preventDefault();t.selectOption(a),Ie()||requestAnimationFrame(()=>{var D;return(D=y(t.inputRef))==null?void 0:D.focus({preventScroll:!0})}),t.mode.value===0&&requestAnimationFrame(()=>t.closeCombobox())}function C(){var m;if(o.disabled||(m=t.virtual.value)!=null&&m.disabled(o.value))return t.goToOption(P.Nothing);let S=t.calculateIndex(o.value);t.goToOption(P.Specific,S)}let R=Te();function w(m){R.update(m)}function k(m){var S;if(!R.wasMoved(m)||o.disabled||(S=t.virtual.value)!=null&&S.disabled(o.value)||l.value)return;let D=t.calculateIndex(o.value);t.goToOption(P.Specific,D,0)}function V(m){var S;R.wasMoved(m)&&(o.disabled||(S=t.virtual.value)!=null&&S.disabled(o.value)||l.value&&(t.optionsPropsRef.value.hold||t.goToOption(P.Nothing)))}return()=>{let{disabled:m}=o,S={active:l.value,selected:p.value,disabled:m},D={id:a,ref:i,role:"option",tabIndex:m===!0?void 0:-1,"aria-disabled":m===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onClick:f,onFocus:C,onPointerenter:w,onMouseenter:w,onPointermove:k,onMousemove:k,onPointerleave:V,onMouseleave:V},r=le(o,["order","value"]);return H({ourProps:D,theirProps:r,slot:S,attrs:e,slots:d,name:"ComboboxOption"})}}});export{at as Z,dt as a,rt as l,ut as o,st as t};
