import O from"./Dai9LKsI.js";import{r as k,m as z,q as A,_ as D,I,J as P,D as W,K as $,Y as X,k as E,S as V,o as s,c as l,a as S,F as j,v as N,y as d,j as p,M as F,Q as b,x as v}from"./DFjfPBi9.js";import{u as q}from"./CIEZZO0C.js";import{b as J,c as K,d as Q}from"./BtEjgvAg.js";import"./DS3uXJim.js";import"./BgvxOQy9.js";import"./qsMMcMsd.js";import"./BWk_GDpg.js";import"./CBP9DiTR.js";import"./aPxrJPp6.js";import"./CHf9ZM3b.js";import"./blSOxsGD.js";const T={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},Y=e=>{const n=k(0);function i(o){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",n.value=o.pageX,window.addEventListener("mousemove",a),window.addEventListener("mouseup",u)}function u(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",u)}function a(o){o.preventDefault();const r=o.pageX-n.value;n.value=o.pageX,e.value.scrollBy(-r,0)}z(()=>{e.value&&e.value.addEventListener("mousedown",i)}),A(()=>{e.value&&e.value.removeEventListener("mousedown",i)})},y=I(P.ui.strategy,P.ui.carousel,T),G=W({components:{UButton:O},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>y.default.prevButton},nextButton:{type:Object,default:()=>y.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:n}){const{ui:i,attrs:u}=q("carousel",$(e,"ui"),y,$(e,"class")),a=k(),o=k(0),{x:r,arrivedState:t}=J(a,{behavior:"smooth"}),{width:c}=K(a),{left:R,right:U}=X(t);Y(a),Q(a,f=>{var M,L;const[m]=f;o.value=((L=(M=m==null?void 0:m.target)==null?void 0:M.firstElementChild)==null?void 0:L.clientWidth)||0});const w=E(()=>Math.round(r.value/o.value)+1),g=E(()=>o.value?e.items.length-Math.round(c.value/o.value)+1:0);function h(){r.value+=o.value}function B(){r.value-=o.value}function C(f){r.value=(f-1)*o.value}return n({pages:g,page:w,prev:B,next:h,select:C}),{ui:i,attrs:u,isFirst:R,isLast:U,carouselRef:a,pages:g,currentPage:w,onClickNext:h,onClickPrev:B,onClick:C,twMerge:V}}}),H=["aria-label","onClick"];function Z(e,n,i,u,a,o){const r=O;return s(),l("div",b({class:e.ui.wrapper},e.attrs),[S("div",{ref:"carouselRef",class:d([e.ui.container,"no-scrollbar"])},[(s(!0),l(j,null,N(e.items,(t,c)=>(s(),l("div",{key:c,class:d(e.ui.item)},[p(e.$slots,"default",{item:t,index:c},void 0,!0)],2))),128))],2),e.arrows?(s(),l("div",{key:0,class:d(e.ui.arrows.wrapper)},[p(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(s(),F(r,b({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):v("",!0)]},!0),p(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(s(),F(r,b({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):v("",!0)]},!0)],2)):v("",!0),e.indicators?(s(),l("div",{key:1,class:d(e.ui.indicators.wrapper)},[(s(!0),l(j,null,N(e.pages,t=>p(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[S("button",{type:"button",class:d([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:c=>e.onClick(t)},null,10,H)],!0)),128))],2)):v("",!0)],16)}const ce=D(G,[["render",Z],["__scopeId","data-v-cb7e1dab"]]);export{ce as default};
