import{_ as C,a0 as b,a1 as l,X as h,y as u,g as s,ae as k,a7 as O,a8 as V,o as p,c as d,b as M,w as j,a as c,s as m,q as f,M as $,a5 as g,a4 as A}from"./1IHVEBxC.js";import{o as B}from"./33hrKeiM.js";import{c as E,u as N}from"./BXwofNuU.js";import{u as T}from"./BpCuQnTt.js";const q={wrapper:"relative",container:"z-20 group",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{placement:"bottom-start",scroll:!1},arrow:E},z=b(l.ui.strategy,l.ui.contextMenu,q),F=h({inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},virtualElement:{type:Object,required:!0},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close"],setup(e,{emit:o}){const{ui:a,attrs:n}=N("contextMenu",u(e,"ui"),z),t=s(()=>k({},e.popper,a.value.popper)),r=s({get(){return e.modelValue},set(w){o("update:modelValue",w)}}),v=u(e,"virtualElement"),[,i]=T(t.value,v),y=s(()=>O(V(a.value.container,a.value.width),e.class));return B(i,()=>{r.value=!1}),{ui:a,attrs:n,isOpen:r,wrapperClass:y,popper:t,container:i}}});function P(e,o,a,n,t,r){return e.isOpen?(p(),d("div",g({key:0,ref:"container",class:e.wrapperClass},e.attrs),[M(A,g({appear:""},e.ui.transition),{default:j(()=>[c("div",null,[e.popper.arrow?(p(),d("div",{key:0,"data-popper-arrow":"",class:m(Object.values(e.ui.arrow))},null,2)):f("",!0),c("div",{class:m([e.ui.base,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background])},[$(e.$slots,"default")],2)])]),_:3},16)],16)):f("",!0)}const U=C(F,[["render",P]]);export{U as default};
