import{_ as h,r as V}from"./dAa-pH85.js";import{u as b,g as r}from"./DcwSD92C.js";import{u as $}from"./B8hM6PoW.js";import{_ as k,a2 as R,a3 as l,N as z,R as n,S as B,g as G,o as s,c as i,a as N,v as y,D as v,d as U,t as j,s as w,F,q as P,i as _,w as D,E,O as T,P as q}from"./jXR-_GK-.js";import"./UxV6GzeR.js";const I={wrapper:"relative flex items-start",fieldset:"",legend:"text-sm font-medium text-gray-700 dark:text-gray-200 mb-1",default:{color:"primary"}},d=R(l.ui.strategy,l.ui.radioGroup,I),L=R(l.ui.strategy,l.ui.radio,V),H=z({components:{URadio:h},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},name:{type:String,default:null},legend:{type:String,default:null},options:{type:Array,default:()=>[]},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},disabled:{type:Boolean,default:!1},color:{type:String,default:()=>d.default.color,validator(e){return l.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiRadio:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:o}){const{ui:m,attrs:c}=b("radioGroup",n(e,"ui"),d,n(e,"class")),{ui:g}=b("radio",n(e,"uiRadio"),L),{emitFormChange:p,color:u,name:t}=$(e,d);B("radio-group",{color:u,name:t});const f=a=>{o("update:modelValue",a),o("change",a),p()},O=a=>r(a,e.valueAttribute,r(a,e.optionAttribute)),S=a=>r(a,e.optionAttribute,r(a,e.valueAttribute)),A=a=>["string","number","boolean"].includes(typeof a)?{value:a,label:a}:{...a,value:O(a),label:S(a)},C=G(()=>e.options.map(a=>A(a)));return{ui:m,uiRadio:g,attrs:c,normalizedOptions:C,onUpdate:f}}});function J(e,o,m,c,g,p){const u=h;return s(),i("div",{class:y(e.ui.wrapper)},[N("fieldset",q(e.attrs,{class:e.ui.fieldset}),[e.legend||e.$slots.legend?(s(),i("legend",{key:0,class:y(e.ui.legend)},[v(e.$slots,"legend",{},()=>[U(j(e.legend),1)])],2)):w("",!0),(s(!0),i(F,null,P(e.normalizedOptions,t=>(s(),_(u,{key:t.value,label:t.label,"model-value":e.modelValue,value:t.value,help:t.help,disabled:t.disabled||e.disabled,ui:e.uiRadio,onChange:f=>e.onUpdate(t.value)},{label:D(()=>[v(e.$slots,"label",E(T({option:t})))]),_:2},1032,["label","model-value","value","help","disabled","ui","onChange"]))),128))],16)],2)}const Y=k(H,[["render",J]]);export{Y as default};
