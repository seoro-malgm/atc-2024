<<<<<<<< HEAD:.vercel/output/static/_nuxt/Br32MtZm.js
import J from"./Dpw10Jvi.js";import{_ as Q}from"./uI4BXQti.js";import{u as ue}from"./CDk7E24S.js";import{_ as re,a0 as X,a1 as p,X as se,y as G,g as t,ae as de,k as ce,a7 as ge,a8 as y,aG as me,m as pe,j as M,o,i as I,w as h,a as C,s as i,b as f,a5 as E,c as d,M as A,q as m,a4 as be,F as fe,n as ve,R as ye,t as P,d as D}from"./Bc1ekGIV.js";import{Z as Me,t as Ie,l as he,a as Ce,o as Ae}from"./CObaR19K.js";import{l as Se}from"./DvjvfX2V.js";import{h as ke}from"./BuS1H8og.js";import{u as Z,i as Oe,a as qe,g as we}from"./DqOxDeuZ.js";import{u as Be}from"./D_V7QPK-.js";import{u as ze}from"./nyM-VZzI.js";import{a as He}from"./CqHyTOB2.js";import"./NgCZvhGV.js";import"./qsMMcMsd.js";import"./rgEraUAr.js";import"./BfCOjykb.js";import"./CLwdy1Ud.js";import"./CSB6KXic.js";import"./BcNGihrY.js";import"./-9-usMqW.js";import"./BmB5g-d-.js";import"./jthpZqva.js";import"./CxIZtCgj.js";const r=X(p.ui.strategy,p.ui.input,Oe),L=X(p.ui.strategy,p.ui.inputMenu,qe),Ne=se({components:{HCombobox:Me,HComboboxButton:Ie,HComboboxOptions:he,HComboboxOption:Ce,HComboboxInput:Ae,UIcon:J,UAvatar:Q},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>r.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>L.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>L.default.selectedIcon},disabled:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(r.size).includes(e)}},color:{type:String,default:()=>r.default.color,validator(e){return[...p.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(s=>Object.keys(s))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},search:{type:Function,default:void 0},searchAttributes:{type:Array,default:null},debounce:{type:Number,default:200},popper:{type:Object,default:()=>({})},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:s,slots:B}){const{ui:a,attrs:R}=Z("input",G(e,"ui"),r,G(e,"class")),{ui:z}=Z("inputMenu",G(e,"uiMenu"),L),S=t(()=>de({},e.popper,z.value.popper)),[b,k]=Be(S.value),{size:H,rounded:N}=He({ui:a,props:e}),{emitFormBlur:V,emitFormChange:j,inputId:$,color:n,size:U,name:v}=ze(e,r),u=t(()=>H.value||U.value),O=ce(""),c=t({get(){return e.query??O.value},set(l){O.value=l,s("update:query",l)}}),K=t(()=>{if(e.modelValue)if(e.valueAttribute){const l=e.options.find(g=>g[e.valueAttribute]===e.modelValue);return l?l[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]}),Y=t(()=>{var g,w;const l=((w=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:w[e.variant])||a.value.variant[e.variant];return ge(y(a.value.base,a.value.form,N.value,a.value.placeholder,a.value.size[u.value],e.padded?a.value.padding[u.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(q.value||B.leading)&&a.value.leading.padding[u.value],(T.value||B.trailing)&&a.value.trailing.padding[u.value]),e.inputClass)}),q=t(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),T=t(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),_=t(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=t(()=>e.loading&&!q.value?e.loadingIcon:e.trailingIcon||e.icon),ee=t(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[u.value])),ae=t(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[u.value],e.loading&&a.value.icon.loading)),ne=t(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.padding[u.value])),le=t(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[u.value],e.loading&&!q.value&&a.value.icon.loading)),W=e.search&&typeof e.search=="function"?me(e.search,e.debounce):void 0,ie=ke(async()=>W?await W(c.value):c.value===""?e.options:e.options.filter(l=>{var g;return((g=e.searchAttributes)!=null&&g.length?e.searchAttributes:[e.optionAttribute]).some(w=>{if(["string","number"].includes(typeof l))return String(l).search(new RegExp(c.value,"i"))!==-1;const F=we(l,w);return F!=null&&String(F).search(new RegExp(c.value,"i"))!==-1})}));pe(k,l=>{l?s("open"):(s("close"),V())});function te(l){c.value="",s("update:modelValue",l),s("change",l),j()}function oe(l){c.value=l.target.value}return Se(()=>ue("$2NLPEfaykI")),{ui:a,uiMenu:z,attrs:R,name:v,inputId:$,popper:S,trigger:b,container:k,label:K,isLeading:q,isTrailing:T,inputClass:Y,leadingIconName:_,leadingIconClass:ae,leadingWrapperIconClass:ee,trailingIconName:x,trailingIconClass:le,trailingWrapperIconClass:ne,filteredOptions:ie,query:c,onUpdate:te,onChange:oe}}}),Ve={class:"truncate"};function je(e,s,B,a,R,z){const S=M("HComboboxInput"),b=J,k=M("HComboboxButton"),H=Q,N=M("HComboboxOption"),V=M("HComboboxOptions"),j=M("HCombobox");return o(),I(j,{by:e.by,name:e.name,"model-value":e.modelValue,disabled:e.disabled,nullable:e.nullable,as:"div",class:i(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:h(({open:$})=>[C("div",{class:i(e.uiMenu.trigger)},[f(S,E({id:e.inputId,name:e.name,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass,autocomplete:"off"},e.attrs,{"display-value":()=>e.query?e.query:e.label,onChange:e.onChange}),null,16,["id","name","required","placeholder","disabled","class","display-value","onChange"]),e.isLeading&&e.leadingIconName||e.$slots.leading?(o(),d("span",{key:0,class:i(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[f(b,{name:e.leadingIconName,class:i(e.leadingIconClass)},null,8,["name","class"])])],2)):m("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(o(),I(k,{key:1,ref:"trigger",class:i(e.trailingWrapperIconClass)},{default:h(()=>[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[f(b,{name:e.trailingIconName,class:i(e.trailingIconClass)},null,8,["name","class"])])]),_:3},8,["class"])):m("",!0)],2),$?(o(),d("div",{key:0,ref:"container",class:i([e.uiMenu.container,e.uiMenu.width])},[f(be,E({appear:""},e.uiMenu.transition),{default:h(()=>[C("div",null,[e.popper.arrow?(o(),d("div",{key:0,"data-popper-arrow":"",class:i(Object.values(e.uiMenu.arrow))},null,2)):m("",!0),f(V,{static:"",class:i([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:h(()=>[(o(!0),d(fe,null,ve(e.filteredOptions,(n,U)=>(o(),I(N,{key:U,as:"template",value:e.valueAttribute?n[e.valueAttribute]:n,disabled:n.disabled},{default:h(({active:v,selected:u,disabled:O})=>[C("li",{class:i([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,v?e.uiMenu.option.active:e.uiMenu.option.inactive,u&&e.uiMenu.option.selected,O&&e.uiMenu.option.disabled])},[C("div",{class:i(e.uiMenu.option.container)},[A(e.$slots,"option",{option:n,active:v,selected:u},()=>[n.icon?(o(),I(b,{key:0,name:n.icon,class:i([e.uiMenu.option.icon.base,v?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,n.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):n.avatar?(o(),I(H,E({key:1},{size:e.uiMenu.option.avatar.size,...n.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):n.chip?(o(),d("span",{key:2,class:i(e.uiMenu.option.chip.base),style:ye({background:`#${n.chip}`})},null,6)):m("",!0),C("span",Ve,P(["string","number"].includes(typeof n)?n:n[e.optionAttribute]),1)])],2),u?(o(),d("span",{key:0,class:i([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[f(b,{name:e.selectedIcon,class:i(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):m("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.query&&!e.filteredOptions.length?(o(),d("p",{key:0,class:i(e.uiMenu.option.empty)},[A(e.$slots,"option-empty",{query:e.query},()=>[D(' No results for "'+P(e.query)+'". ',1)])],2)):e.filteredOptions.length?m("",!0):(o(),d("p",{key:1,class:i(e.uiMenu.empty)},[A(e.$slots,"empty",{query:e.query},()=>[D(" No options. ")])],2))]),_:3},8,["class"])])]),_:3},16)],2)):m("",!0)]),_:3},8,["by","name","model-value","disabled","nullable","class","onUpdate:modelValue"])}const la=re(Ne,[["render",je]]);export{la as default};
========
import Z from"./Bwtx9R8h.js";import{_ as J}from"./BDR42Ac9.js";import{u as ue}from"./SNKw6Em3.js";import{_ as re,a0 as X,a1 as p,X as se,y as G,g as t,ae as de,k as ce,a7 as ge,a8 as y,aG as me,m as pe,j as M,o,i as I,w as h,a as C,s as i,b as f,a5 as E,c as d,M as A,q as m,a4 as be,F as fe,n as ve,R as ye,t as P,d as Q}from"./Jfc5g3KL.js";import{Z as Me,t as Ie,l as he,a as Ce,o as Ae}from"./CZAFghA1.js";import{l as Se}from"./T1iDph84.js";import{h as ke}from"./RA69HO0b.js";import{u as D,i as Oe,a as qe,g as we}from"./D5pRDbZS.js";import{u as Be}from"./-d0RK9Sr.js";import{u as ze}from"./6MPpfk3Q.js";import{a as He}from"./CoUdMTPo.js";import"./cXlXobWt.js";import"./qsMMcMsd.js";import"./BG4rsf9i.js";import"./ClVE3-Tp.js";import"./D-c6Xj13.js";import"./C_GGXXS4.js";import"./CChVTHA8.js";import"./Dvas-1qW.js";import"./Cir-hBo0.js";import"./jthpZqva.js";import"./CxIZtCgj.js";const r=X(p.ui.strategy,p.ui.input,Oe),L=X(p.ui.strategy,p.ui.inputMenu,qe),Ne=se({components:{HCombobox:Me,HComboboxButton:Ie,HComboboxOptions:he,HComboboxOption:Ce,HComboboxInput:Ae,UIcon:Z,UAvatar:J},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>r.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>L.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>L.default.selectedIcon},disabled:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(r.size).includes(e)}},color:{type:String,default:()=>r.default.color,validator(e){return[...p.ui.colors,...Object.keys(r.color)].includes(e)}},variant:{type:String,default:()=>r.default.variant,validator(e){return[...Object.keys(r.variant),...Object.values(r.color).flatMap(s=>Object.keys(s))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},search:{type:Function,default:void 0},searchAttributes:{type:Array,default:null},debounce:{type:Number,default:200},popper:{type:Object,default:()=>({})},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:s,slots:B}){const{ui:a,attrs:R}=D("input",G(e,"ui"),r,G(e,"class")),{ui:z}=D("inputMenu",G(e,"uiMenu"),L),S=t(()=>de({},e.popper,z.value.popper)),[b,k]=Be(S.value),{size:H,rounded:N}=He({ui:a,props:e}),{emitFormBlur:V,emitFormChange:j,inputId:$,color:n,size:U,name:v}=ze(e,r),u=t(()=>H.value||U.value),O=ce(""),c=t({get(){return e.query??O.value},set(l){O.value=l,s("update:query",l)}}),K=t(()=>{if(e.modelValue)if(e.valueAttribute){const l=e.options.find(g=>g[e.valueAttribute]===e.modelValue);return l?l[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]}),Y=t(()=>{var g,w;const l=((w=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:w[e.variant])||a.value.variant[e.variant];return ge(y(a.value.base,a.value.form,N.value,a.value.placeholder,a.value.size[u.value],e.padded?a.value.padding[u.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(q.value||B.leading)&&a.value.leading.padding[u.value],(T.value||B.trailing)&&a.value.trailing.padding[u.value]),e.inputClass)}),q=t(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),T=t(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),_=t(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=t(()=>e.loading&&!q.value?e.loadingIcon:e.trailingIcon||e.icon),ee=t(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[u.value])),ae=t(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[u.value],e.loading&&a.value.icon.loading)),ne=t(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.padding[u.value])),le=t(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[u.value],e.loading&&!q.value&&a.value.icon.loading)),W=e.search&&typeof e.search=="function"?me(e.search,e.debounce):void 0,ie=ke(async()=>W?await W(c.value):c.value===""?e.options:e.options.filter(l=>{var g;return((g=e.searchAttributes)!=null&&g.length?e.searchAttributes:[e.optionAttribute]).some(w=>{if(["string","number"].includes(typeof l))return String(l).search(new RegExp(c.value,"i"))!==-1;const F=we(l,w);return F!=null&&String(F).search(new RegExp(c.value,"i"))!==-1})}));pe(k,l=>{l?s("open"):(s("close"),V())});function te(l){c.value="",s("update:modelValue",l),s("change",l),j()}function oe(l){c.value=l.target.value}return Se(()=>ue("$2NLPEfaykI")),{ui:a,uiMenu:z,attrs:R,name:v,inputId:$,popper:S,trigger:b,container:k,label:K,isLeading:q,isTrailing:T,inputClass:Y,leadingIconName:_,leadingIconClass:ae,leadingWrapperIconClass:ee,trailingIconName:x,trailingIconClass:le,trailingWrapperIconClass:ne,filteredOptions:ie,query:c,onUpdate:te,onQueryChange:oe}}}),Ve={class:"truncate"};function je(e,s,B,a,R,z){const S=M("HComboboxInput"),b=Z,k=M("HComboboxButton"),H=J,N=M("HComboboxOption"),V=M("HComboboxOptions"),j=M("HCombobox");return o(),I(j,{by:e.by,name:e.name,"model-value":e.modelValue,disabled:e.disabled,nullable:e.nullable,as:"div",class:i(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:h(({open:$})=>[C("div",{class:i(e.uiMenu.trigger)},[f(S,E({id:e.inputId,name:e.name,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass,autocomplete:"off"},e.attrs,{"display-value":()=>e.query?e.query:e.label,onChange:e.onQueryChange}),null,16,["id","name","required","placeholder","disabled","class","display-value","onChange"]),e.isLeading&&e.leadingIconName||e.$slots.leading?(o(),d("span",{key:0,class:i(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[f(b,{name:e.leadingIconName,class:i(e.leadingIconClass)},null,8,["name","class"])])],2)):m("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(o(),I(k,{key:1,ref:"trigger",class:i(e.trailingWrapperIconClass)},{default:h(()=>[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[f(b,{name:e.trailingIconName,class:i(e.trailingIconClass)},null,8,["name","class"])])]),_:3},8,["class"])):m("",!0)],2),$?(o(),d("div",{key:0,ref:"container",class:i([e.uiMenu.container,e.uiMenu.width])},[f(be,E({appear:""},e.uiMenu.transition),{default:h(()=>[C("div",null,[e.popper.arrow?(o(),d("div",{key:0,"data-popper-arrow":"",class:i(Object.values(e.uiMenu.arrow))},null,2)):m("",!0),f(V,{static:"",class:i([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:h(()=>[(o(!0),d(fe,null,ve(e.filteredOptions,(n,U)=>(o(),I(N,{key:U,as:"template",value:e.valueAttribute?n[e.valueAttribute]:n,disabled:n.disabled},{default:h(({active:v,selected:u,disabled:O})=>[C("li",{class:i([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,v?e.uiMenu.option.active:e.uiMenu.option.inactive,u&&e.uiMenu.option.selected,O&&e.uiMenu.option.disabled])},[C("div",{class:i(e.uiMenu.option.container)},[A(e.$slots,"option",{option:n,active:v,selected:u},()=>[n.icon?(o(),I(b,{key:0,name:n.icon,class:i([e.uiMenu.option.icon.base,v?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,n.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):n.avatar?(o(),I(H,E({key:1},{size:e.uiMenu.option.avatar.size,...n.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):n.chip?(o(),d("span",{key:2,class:i(e.uiMenu.option.chip.base),style:ye({background:`#${n.chip}`})},null,6)):m("",!0),C("span",Ve,P(["string","number"].includes(typeof n)?n:n[e.optionAttribute]),1)])],2),u?(o(),d("span",{key:0,class:i([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[f(b,{name:e.selectedIcon,class:i(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):m("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.query&&!e.filteredOptions.length?(o(),d("p",{key:0,class:i(e.uiMenu.option.empty)},[A(e.$slots,"option-empty",{query:e.query},()=>[Q(' No results for "'+P(e.query)+'". ',1)])],2)):e.filteredOptions.length?m("",!0):(o(),d("p",{key:1,class:i(e.uiMenu.empty)},[A(e.$slots,"empty",{query:e.query},()=>[Q(" No options. ")])],2))]),_:3},8,["class"])])]),_:3},16)],2)):m("",!0)]),_:3},8,["by","name","model-value","disabled","nullable","class","onUpdate:modelValue"])}const la=re(Ne,[["render",je]]);export{la as default};
>>>>>>>> dev:.vercel/output/static/_nuxt/7At1XSfx.js
