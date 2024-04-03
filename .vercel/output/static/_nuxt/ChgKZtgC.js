import F from"./CC5T8DGm.js";import{_ as Q,a0 as Y,a1 as b,X as Z,y as N,g as i,a7 as _,a8 as v,o,c as d,a as x,F as S,n as j,t as p,a5 as ee,s as m,M as W,b as q,q as w}from"./DESXl4iR.js";import{u as ae,s as le,g as A}from"./xIbKZP61.js";import{u as te}from"./BUqVb6x7.js";import{a as ne}from"./BVilJTh_.js";import"./By7YaoDv.js";import"./qsMMcMsd.js";const u=Y(b.ui.strategy,b.ui.select,le),ie=Z({components:{UIcon:F},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>u.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>u.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},size:{type:String,default:null,validator(e){return Object.keys(u.size).includes(e)}},color:{type:String,default:()=>u.default.color,validator(e){return[...b.ui.colors,...Object.keys(u.color)].includes(e)}},variant:{type:String,default:()=>u.default.variant,validator(e){return[...Object.keys(u.variant),...Object.values(u.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:"value"},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r,slots:C}){const{ui:a,attrs:h}=ae("select",N(e,"ui"),u,N(e,"class")),{size:$,rounded:f}=ne({ui:a,props:e}),{emitFormChange:t,inputId:c,color:n,size:z,name:G}=te(e,u),s=i(()=>$.value||z.value),M=l=>{r("update:modelValue",l.target.value)},L=l=>{t(),r("change",l)},P=l=>A(l,e.valueAttribute,A(l,e.optionAttribute)),T=l=>A(l,e.optionAttribute,A(l,e.valueAttribute)),V=l=>["string","number","boolean"].includes(typeof l)?{[e.valueAttribute]:l,[e.optionAttribute]:l}:{...l,[e.valueAttribute]:P(l),[e.optionAttribute]:T(l)},k=i(()=>e.options.map(l=>V(l))),B=i(()=>e.placeholder?[{[e.valueAttribute]:"",[e.optionAttribute]:e.placeholder,disabled:!0},...k.value]:k.value),U=i(()=>{const l=V(e.modelValue),g=B.value.find(I=>I[e.valueAttribute]===l[e.valueAttribute]);return g?g[e.valueAttribute]:""}),D=i(()=>{var g,I;const l=((I=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:I[e.variant])||a.value.variant[e.variant];return _(v(a.value.base,a.value.form,f.value,a.value.size[s.value],e.padded?a.value.padding[s.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(y.value||C.leading)&&a.value.leading.padding[s.value],(O.value||C.trailing)&&a.value.trailing.padding[s.value]),e.placeholder&&!e.modelValue&&a.value.placeholder,e.selectClass)}),y=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),O=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),E=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),J=i(()=>e.loading&&!y.value?e.loadingIcon:e.trailingIcon||e.icon),R=i(()=>v(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[s.value])),X=i(()=>v(a.value.icon.base,n.value&&b.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[s.value],e.loading&&a.value.icon.loading)),H=i(()=>v(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[s.value])),K=i(()=>v(a.value.icon.base,n.value&&b.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[s.value],e.loading&&!y.value&&a.value.icon.loading));return{ui:a,attrs:h,name:G,inputId:c,normalizedOptionsWithPlaceholder:B,normalizedValue:U,isLeading:y,isTrailing:O,selectClass:D,leadingIconName:E,leadingIconClass:X,leadingWrapperIconClass:R,trailingIconName:J,trailingIconClass:K,trailingWrapperIconClass:H,onInput:M,onChange:L}}}),ue=["id","name","value","required","disabled"],re=["value","label"],oe=["value","selected","disabled","textContent"],de=["value","selected","disabled","textContent"];function se(e,r,C,a,h,$){const f=F;return o(),d("div",{class:m(e.ui.wrapper)},[x("select",ee({id:e.inputId,name:e.name,value:e.modelValue,required:e.required,disabled:e.disabled,class:e.selectClass},e.attrs,{onInput:r[0]||(r[0]=(...t)=>e.onInput&&e.onInput(...t)),onChange:r[1]||(r[1]=(...t)=>e.onChange&&e.onChange(...t))}),[(o(!0),d(S,null,j(e.normalizedOptionsWithPlaceholder,(t,c)=>(o(),d(S,null,[t.children?(o(),d("optgroup",{key:`${t[e.valueAttribute]}-optgroup-${c}`,value:t[e.valueAttribute],label:t[e.optionAttribute]},[(o(!0),d(S,null,j(t.children,(n,z)=>(o(),d("option",{key:`${n[e.valueAttribute]}-${c}-${z}`,value:n[e.valueAttribute],selected:n[e.valueAttribute]===e.normalizedValue,disabled:n.disabled,textContent:p(n[e.optionAttribute])},null,8,oe))),128))],8,re)):(o(),d("option",{key:`${t[e.valueAttribute]}-${c}`,value:t[e.valueAttribute],selected:t[e.valueAttribute]===e.normalizedValue,disabled:t.disabled,textContent:p(t[e.optionAttribute])},null,8,de))],64))),256))],16,ue),e.isLeading&&e.leadingIconName||e.$slots.leading?(o(),d("span",{key:0,class:m(e.leadingWrapperIconClass)},[W(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[q(f,{name:e.leadingIconName,class:m(e.leadingIconClass)},null,8,["name","class"])],!0)],2)):w("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(o(),d("span",{key:1,class:m(e.trailingWrapperIconClass)},[W(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[q(f,{name:e.trailingIconName,class:m(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])],!0)],2)):w("",!0)],2)}const Ie=Q(ie,[["render",se],["__scopeId","data-v-42428879"]]);export{Ie as default};
