import{_ as N,a0 as V,a1 as m,X as $,y as B,k as z,ae as q,G as C,m as F,ad as A,g as H,a7 as R,a8 as x,o as D,c as G,a as P,a5 as E,M as J,s as U,aP as X}from"./1IHVEBxC.js";import{u as K,t as L}from"./BXwofNuU.js";import{u as Q}from"./CGE9QBSL.js";const o=V(m.ui.strategy,m.ui.textarea,L),W=$({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(o.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...m.ui.colors,...Object.keys(o.color)].includes(e)}},variant:{type:String,default:()=>o.default.variant,validator(e){return[...Object.keys(o.variant),...Object.values(o.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur"],setup(e,{emit:t}){const{ui:l,attrs:c}=K("textarea",B(e,"ui"),o,B(e,"class")),{emitFormBlur:p,emitFormInput:g,inputId:u,color:v,size:y,name:I}=Q(e,o),n=z(q({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),r=z(null),b=()=>{var a;e.autofocus&&((a=r.value)==null||a.focus())},d=()=>{if(e.autoresize){if(!r.value)return;r.value.rows=e.rows;const a=window.getComputedStyle(r.value),s=parseInt(a.paddingTop),i=parseInt(a.paddingBottom),M=s+i,O=parseInt(a.lineHeight),{scrollHeight:T}=r.value,f=(T-M)/O;f>e.rows&&(r.value.rows=e.maxrows?Math.min(f,e.maxrows):f)}},w=a=>{n.value.trim&&(a=a.trim()),n.value.number&&(a=X(a)),t("update:modelValue",a),g()},h=a=>{d(),n.value.lazy||w(a.target.value)},S=a=>{const s=a.target.value;n.value.lazy&&w(s),n.value.trim&&(a.target.value=s.trim())},j=a=>{t("blur",a),p()};C(()=>{setTimeout(()=>{b()},e.autofocusDelay)}),F(()=>e.modelValue,()=>{A(d)}),C(()=>{setTimeout(()=>{b(),d()},100)});const k=H(()=>{var s,i;const a=((i=(s=l.value.color)==null?void 0:s[v.value])==null?void 0:i[e.variant])||l.value.variant[e.variant];return R(x(l.value.base,l.value.form,l.value.rounded,l.value.placeholder,l.value.size[y.value],e.padded?l.value.padding[y.value]:"p-0",a==null?void 0:a.replaceAll("{color}",v.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:l,attrs:c,name:I,inputId:u,textarea:r,textareaClass:k,onInput:h,onChange:S,onBlur:j}}}),Y=["id","value","name","rows","required","disabled","placeholder"];function Z(e,t,l,c,p,g){return D(),G("div",{class:U(e.ui.wrapper)},[P("textarea",E({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...u)=>e.onInput&&e.onInput(...u)),onBlur:t[1]||(t[1]=(...u)=>e.onBlur&&e.onBlur(...u)),onChange:t[2]||(t[2]=(...u)=>e.onChange&&e.onChange(...u))}),null,16,Y),J(e.$slots,"default")],2)}const te=N(W,[["render",Z]]);export{te as default};
