import{_ as N,I as V,J as m,D as $,K as B,r as z,$ as q,m as C,h as F,Z as A,k as D,S as H,U as R,o as x,c as J,a as U,Q as E,j as G,y as K,a1 as P}from"./DFjfPBi9.js";import{u as Q,t as Z}from"./CIEZZO0C.js";import{u as L}from"./J2I34NfB.js";const o=V(m.ui.strategy,m.ui.textarea,Z),W=$({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...m.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:t}){const{ui:l,attrs:c}=Q("textarea",B(e,"ui"),o,B(e,"class")),{emitFormBlur:p,emitFormInput:v,inputId:u,color:y,size:g,name:I}=L(e,o),n=z(q({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),r=z(null),b=()=>{var a;e.autofocus&&((a=r.value)==null||a.focus())},d=()=>{if(e.autoresize){if(!r.value)return;r.value.rows=e.rows;const a=window.getComputedStyle(r.value),s=parseInt(a.paddingTop),i=parseInt(a.paddingBottom),O=s+i,M=parseInt(a.lineHeight),{scrollHeight:T}=r.value,f=(T-O)/M;f>e.rows&&(r.value.rows=e.maxrows?Math.min(f,e.maxrows):f)}},w=a=>{n.value.trim&&(a=a.trim()),n.value.number&&(a=P(a)),t("update:modelValue",a),v()},h=a=>{d(),n.value.lazy||w(a.target.value)},S=a=>{const s=a.target.value;n.value.lazy&&w(s),n.value.trim&&(a.target.value=s.trim())},j=a=>{t("blur",a),p()};C(()=>{setTimeout(()=>{b()},e.autofocusDelay)}),F(()=>e.modelValue,()=>{A(d)}),C(()=>{setTimeout(()=>{b(),d()},100)});const k=D(()=>{var s,i;const a=((i=(s=l.value.color)==null?void 0:s[y.value])==null?void 0:i[e.variant])||l.value.variant[e.variant];return H(R(l.value.base,l.value.form,l.value.rounded,l.value.placeholder,l.value.size[g.value],e.padded?l.value.padding[g.value]:"p-0",a==null?void 0:a.replaceAll("{color}",y.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:l,attrs:c,name:I,inputId:u,textarea:r,textareaClass:k,onInput:h,onChange:S,onBlur:j}}}),X=["id","value","name","rows","required","disabled","placeholder"];function Y(e,t,l,c,p,v){return x(),J("div",{class:K(e.ui.wrapper)},[U("textarea",E({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...u)=>e.onInput&&e.onInput(...u)),onBlur:t[1]||(t[1]=(...u)=>e.onBlur&&e.onBlur(...u)),onChange:t[2]||(t[2]=(...u)=>e.onChange&&e.onChange(...u))}),null,16,X),G(e.$slots,"default")],2)}const te=N(W,[["render",Y]]);export{te as default};
