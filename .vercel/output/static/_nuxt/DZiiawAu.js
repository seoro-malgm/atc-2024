import{N as y,R as o,g as i,a7 as x,a5 as z,a6 as v,a8 as h,a9 as c,a2 as f,a3 as s}from"./mAU7enPn.js";import{_ as w,a as C}from"./DnsBCD5v.js";import{u as G}from"./DWEaht-H.js";import"./Chd-D3xB.js";import"./y5rzS085.js";import"./qsMMcMsd.js";const _={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},m=f(s.ui.strategy,s.ui.avatar,C),b=f(s.ui.strategy,s.ui.avatarGroup,_),I=y({inheritAttrs:!1,props:{size:{type:String,default:null,validator(a){return Object.keys(m.size).includes(a)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a,{slots:g}){const{ui:t,attrs:p}=G("avatarGroup",o(a,"ui"),b,o(a,"class")),n=i(()=>x(g)),r=i(()=>typeof a.max=="string"?parseInt(a.max,10):a.max),d=i(()=>n.value.map((l,u)=>{const e={};return!a.max||r.value&&u<r.value?(a.size&&(e.size=a.size),e.class=l.props.class||"",e.class=z(v(e.class,t.value.ring,t.value.margin),e.class),h(l,e)):r.value!==void 0&&u===r.value?c(w,{size:a.size||m.default.size,text:`+${n.value.length-r.value}`,class:v(t.value.ring,t.value.margin)}):null}).filter(Boolean).reverse());return()=>c("div",{class:t.value.wrapper,...p.value},d.value)}});export{I as default};
