import{_ as u,U as m,V as r,Q as c,W as i,g as f,a2 as d,o as n,c as l,D as p,v as x,d as g,t as h,s as y,$ as b}from"./D150JvhY.js";import{u as w}from"./C1kXnlyv.js";const k={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},translate:{"top-right":"-translate-y-1/2 translate-x-1/2 transform","bottom-right":"translate-y-1/2 translate-x-1/2 transform","top-left":"-translate-y-1/2 -translate-x-1/2 transform","bottom-left":"translate-y-1/2 -translate-x-1/2 transform"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"},default:{size:"sm",color:"primary",position:"top-right",inset:!1}},a=m(r.ui.strategy,r.ui.chip,k),v=c({inheritAttrs:!1,props:{size:{type:String,default:()=>a.default.size,validator(t){return Object.keys(a.size).includes(t)}},color:{type:String,default:()=>a.default.color,validator(t){return["gray",...r.ui.colors].includes(t)}},position:{type:String,default:()=>a.default.position,validator(t){return Object.keys(a.position).includes(t)}},text:{type:[String,Number],default:null},inset:{type:Boolean,default:()=>a.default.inset},show:{type:Boolean,default:!0},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:e,attrs:s}=w("chip",i(t,"ui"),a,i(t,"class")),o=f(()=>d(e.value.base,e.value.size[t.size],e.value.position[t.position],t.inset?null:e.value.translate[t.position],e.value.background.replaceAll("{color}",t.color)));return{ui:e,attrs:s,chipClass:o}}});function z(t,e,s,o,C,S){return n(),l("div",b({class:t.ui.wrapper},t.attrs),[p(t.$slots,"default"),t.show?(n(),l("span",{key:0,class:x(t.chipClass)},[p(t.$slots,"content",{},()=>[g(h(t.text),1)])],2)):y("",!0)],16)}const B=u(v,[["render",z]]);export{B as default};
