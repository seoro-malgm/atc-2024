import{_ as n,a2 as r,a3 as o,N as u,R as c,g as l,a5 as i,a6 as d,o as p,c as f,P as g}from"./jXR-_GK-.js";import{u as m}from"./DcwSD92C.js";const k={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},b=r(o.ui.strategy,o.ui.skeleton,k),_=u({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:a}=m("skeleton",c(e,"ui"),b),t=l(()=>i(d(s.value.base,s.value.background,s.value.rounded),e.class));return{ui:s,attrs:a,skeletonClass:t}}});function y(e,s,a,t,C,v){return p(),f("div",g({class:e.skeletonClass},e.attrs),null,16)}const j=n(_,[["render",y]]);export{j as default};
