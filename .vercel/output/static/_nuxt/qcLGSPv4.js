import{_ as i,a0 as o,a1 as r,X as u,y as d,g as l,a7 as g,a8 as c,o as p,c as f,M as m,d as b,t as x,a5 as y}from"./1IHVEBxC.js";import{u as k}from"./BXwofNuU.js";const v={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},a=o(r.ui.strategy,r.ui.kbd,v),_=u({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>a.default.size,validator(e){return Object.keys(a.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=k("kbd",d(e,"ui"),a),n=l(()=>g(c(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:s,kbdClass:n}}});function z(e,t,s,n,h,w){return p(),f("kbd",y({class:e.kbdClass},e.attrs),[m(e.$slots,"default",{},()=>[b(x(e.value),1)])],16)}const $=i(_,[["render",z]]);export{$ as default};
