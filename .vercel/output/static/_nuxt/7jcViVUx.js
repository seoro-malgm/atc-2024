import{u as w}from"./DlWTm6wJ.js";import{_ as V,U as $,V as c,Q as q,W as b,T as B,g as v,a1 as j,a2 as N,o as s,c as n,a as d,N as I,aU as O,$ as A,v as t,D as R,d as U,t as y,s as f}from"./D150JvhY.js";import{u as D}from"./C1kXnlyv.js";import{u as M}from"./B2ZDmv4p.js";const P={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-radio",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},p=$(c.ui.strategy,c.ui.radio,P),T=q({inheritAttrs:!1,props:{id:{type:String,default:null},value:{type:[String,Number,Boolean],default:null},modelValue:{type:[String,Number,Boolean,Object],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>p.default.color,validator(e){return c.ui.colors.includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:a,attrs:g}=D("radio",b(e,"ui"),p,b(e,"class")),m=e.id??w("$9ml2Pv5YlC"),i=B("radio-group",null),{emitFormChange:l,color:o,name:k}=i??M(e,p),h=v({get(){return e.modelValue},set(u){r("update:modelValue",u),i||l()}});function C(u){r("change",u.target.value)}const S=v(()=>j(N(a.value.base,a.value.form,a.value.background,a.value.border,o.value&&a.value.ring.replaceAll("{color}",o.value),o.value&&a.value.color.replaceAll("{color}",o.value)),e.inputClass));return{inputId:m,ui:a,attrs:g,pick:h,name:k,inputClass:S,onChange:C}}}),z=["data-n-ids"],F=["id","name","required","value","disabled"],G=["for"];function E(e,r,a,g,m,i){return s(),n("div",{class:t(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[d("div",{class:t(e.ui.container)},[I(d("input",A({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=l=>e.pick=l),name:e.name,required:e.required,value:e.value,disabled:e.disabled,type:"radio",class:e.inputClass},e.attrs,{onChange:r[1]||(r[1]=(...l)=>e.onChange&&e.onChange(...l))}),null,16,F),[[O,e.pick]])],2),e.label||e.$slots.label?(s(),n("div",{key:0,class:t(e.ui.inner)},[d("label",{for:e.inputId,class:t(e.ui.label)},[R(e.$slots,"label",{},()=>[U(y(e.label),1)]),e.required?(s(),n("span",{key:0,class:t(e.ui.required)},"*",2)):f("",!0)],10,G),e.help?(s(),n("p",{key:0,class:t(e.ui.help)},y(e.help),3)):f("",!0)],2)):f("",!0)],10,z)}const J=V(T,[["render",E]]),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{K as R,J as _,P as r};
