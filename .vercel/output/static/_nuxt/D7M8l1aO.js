<<<<<<<< HEAD:.vercel/output/static/_nuxt/D7M8l1aO.js
import O from"./GqixoVjj.js";import{k,G as A,A as X,_ as z,a0 as W,a1 as P,X as D,y as $,ac as I,g as E,a7 as V,o as r,c as l,a as S,F as j,n as N,s as d,M as p,i as F,a5 as b,q as v}from"./Bc1ekGIV.js";import{u as q}from"./DqOxDeuZ.js";import{c as G,d as T,e as H}from"./BuS1H8og.js";import"./Dpw10Jvi.js";import"./NgCZvhGV.js";import"./qsMMcMsd.js";import"./B4o3xW8X.js";import"./Bjz4UKv2.js";import"./aPxrJPp6.js";import"./CqHyTOB2.js";import"./blSOxsGD.js";const J={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},K=e=>{const n=k(0);function i(o){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",n.value=o.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",u)}function u(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",u)}function a(o){o.preventDefault();const s=o.pageX-n.value;n.value=o.pageX,e.value.scrollBy(-s,0)}A(()=>{e.value&&e.value.addEventListener("mousedown",i)}),X(()=>{e.value&&e.value.removeEventListener("mousedown",i)})},y=W(P.ui.strategy,P.ui.carousel,J),Q=D({components:{UButton:O},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>y.default.prevButton},nextButton:{type:Object,default:()=>y.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:i,attrs:u}=q("carousel",$(e,"ui"),y,$(e,"class")),a=k(),o=k(0),{x:s,arrivedState:t}=G(a,{behavior:"smooth"}),{width:c}=T(a),{left:R,right:U}=I(t);K(a),H(a,f=>{var M,L;const[m]=f;o.value=((L=(M=m==null?void 0:m.target)==null?void 0:M.firstElementChild)==null?void 0:L.clientWidth)||0});const g=E(()=>Math.round(s.value/o.value)+1),w=E(()=>o.value?e.items.length-Math.round(c.value/o.value)+1:0);function h(){s.value+=o.value}function B(){s.value-=o.value}function C(f){s.value=(f-1)*o.value}return n({pages:w,page:g,prev:B,next:h,select:C}),{ui:i,attrs:u,isFirst:R,isLast:U,carouselRef:a,pages:w,currentPage:g,onClickNext:h,onClickPrev:B,onClick:C,twMerge:V}}}),Y=["aria-label","onClick"];function Z(e,n,i,u,a,o){const s=O;return r(),l("div",b({class:e.ui.wrapper},e.attrs),[S("div",{ref:"carouselRef",class:d([e.ui.container,"no-scrollbar"])},[(r(!0),l(j,null,N(e.items,(t,c)=>(r(),l("div",{key:c,class:d(e.ui.item)},[p(e.$slots,"default",{item:t,index:c},void 0,!0)],2))),128))],2),e.arrows?(r(),l("div",{key:0,class:d(e.ui.arrows.wrapper)},[p(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(r(),F(s,b({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):v("",!0)]},!0),p(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(r(),F(s,b({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):v("",!0)]},!0)],2)):v("",!0),e.indicators?(r(),l("div",{key:1,class:d(e.ui.indicators.wrapper)},[(r(!0),l(j,null,N(e.pages,t=>p(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[S("button",{type:"button",class:d([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:c=>e.onClick(t)},null,10,Y)],!0)),128))],2)):v("",!0)],16)}const ce=z(Q,[["render",Z],["__scopeId","data-v-cb7e1dab"]]);export{ce as default};
========
import O from"./GiokJ48E.js";import{k,G as A,A as X,_ as z,a0 as W,a1 as L,X as D,y as $,ac as I,g as E,a7 as V,o as s,c as l,a as S,F as j,n as N,s as d,M as p,i as F,a5 as b,q as v}from"./Jfc5g3KL.js";import{u as q}from"./D5pRDbZS.js";import{c as G,d as T,e as H}from"./RA69HO0b.js";import"./Bwtx9R8h.js";import"./cXlXobWt.js";import"./qsMMcMsd.js";import"./B1Eu4-7E.js";import"./uYsMnL2s.js";import"./aPxrJPp6.js";import"./CoUdMTPo.js";import"./blSOxsGD.js";const J={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},K=e=>{const n=k(0);function i(o){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",n.value=o.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",u)}function u(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",u)}function a(o){o.preventDefault();const r=o.pageX-n.value;n.value=o.pageX,e.value.scrollBy(-r,0)}A(()=>{e.value&&e.value.addEventListener("mousedown",i)}),X(()=>{e.value&&e.value.removeEventListener("mousedown",i)})},y=W(L.ui.strategy,L.ui.carousel,J),Q=D({components:{UButton:O},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>y.default.prevButton},nextButton:{type:Object,default:()=>y.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:i,attrs:u}=q("carousel",$(e,"ui"),y,$(e,"class")),a=k(),o=k(0),{x:r,arrivedState:t}=G(a,{behavior:"smooth"}),{width:c}=T(a),{left:R,right:U}=I(t);K(a),H(a,f=>{var M,P;const[m]=f;o.value=((P=(M=m==null?void 0:m.target)==null?void 0:M.firstElementChild)==null?void 0:P.clientWidth)||0});const g=E(()=>Math.round(r.value/o.value)+1),w=E(()=>o.value?e.items.length-Math.round(c.value/o.value)+1:0);function h(){r.value+=o.value}function B(){r.value-=o.value}function C(f){r.value=(f-1)*o.value}return n({pages:w,page:g,prev:B,next:h,select:C}),{ui:i,attrs:u,isFirst:R,isLast:U,carouselRef:a,pages:w,currentPage:g,onClickNext:h,onClickPrev:B,onClick:C,twMerge:V}}}),Y=["role"],Z=["aria-selected","aria-label","onClick"];function x(e,n,i,u,a,o){const r=O;return s(),l("div",b({class:e.ui.wrapper},e.attrs),[S("div",{ref:"carouselRef",class:d([e.ui.container,"no-scrollbar"])},[(s(!0),l(j,null,N(e.items,(t,c)=>(s(),l("div",{key:c,class:d(e.ui.item),role:e.indicators?"tabpanel":null},[p(e.$slots,"default",{item:t,index:c},void 0,!0)],10,Y))),128))],2),e.arrows?(s(),l("div",{key:0,class:d(e.ui.arrows.wrapper)},[p(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(s(),F(r,b({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):v("",!0)]},!0),p(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(s(),F(r,b({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):v("",!0)]},!0)],2)):v("",!0),e.indicators?(s(),l("div",{key:1,role:"tablist",class:d(e.ui.indicators.wrapper)},[(s(!0),l(j,null,N(e.pages,t=>p(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[S("button",{type:"button",role:"tab","aria-selected":t===e.currentPage,class:d([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:c=>e.onClick(t)},null,10,Z)],!0)),128))],2)):v("",!0)],16)}const de=z(Q,[["render",x],["__scopeId","data-v-69d830ff"]]);export{de as default};
>>>>>>>> dev:.vercel/output/static/_nuxt/CUP5yKqH.js
