import{_ as C,U as b,V as l,Q as h,W as u,g as s,a8 as k,a1 as O,a2 as V,o as p,c as d,b as $,w as j,a as c,v as m,s as f,D as M,$ as g,Z as A}from"./DMHAXQVH.js";import{o as B}from"./n2uq2xWJ.js";import{c as E,u as N}from"./BmubvpLk.js";import{u as T}from"./BN5Bib28.js";const z={wrapper:"relative",container:"z-20 group",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{placement:"bottom-start",scroll:!1},arrow:E},F=b(l.ui.strategy,l.ui.contextMenu,z),P=h({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},virtualElement:{type:Object,required:!0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{emit:o}){const{ui:a,attrs:n}=N("contextMenu",u(e,"ui"),F),t=s(()=>k({},e.popper,a.value.popper)),r=s({get(){return e.modelValue},set(w){o("update:modelValue",w)}}),v=u(e,"virtualElement"),[,i]=T(t.value,v),y=s(()=>O(V(a.value.container,a.value.width),e.class));return B(i,()=>{r.value=!1}),{ui:a,attrs:n,isOpen:r,wrapperClass:y,popper:t,container:i}}});function S(e,o,a,n,t,r){return e.isOpen?(p(),d("div",g({key:0,ref:"container",class:e.wrapperClass},e.attrs),[$(A,g({appear:""},e.ui.transition),{default:j(()=>[c("div",null,[e.popper.arrow?(p(),d("div",{key:0,"data-popper-arrow":"",class:m(Object.values(e.ui.arrow))},null,2)):f("",!0),c("div",{class:m([e.ui.base,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background])},[M(e.$slots,"default")],2)])]),_:3},16)],16)):f("",!0)}const J=C(P,[["render",S]]);export{J as default};