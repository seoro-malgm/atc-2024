import O from"./Bwtx9R8h.js";import{_ as S}from"./BDR42Ac9.js";import U from"./GiokJ48E.js";import{_ as z,a0 as I,a1 as y,X as N,y as V,g as F,a7 as w,a8 as q,o,c as n,a as h,M as g,i as u,q as r,a5 as d,s as l,d as B,t as C,F as A,n as j,H as k}from"./Jfc5g3KL.js";import{u as D}from"./D5pRDbZS.js";import"./cXlXobWt.js";import"./qsMMcMsd.js";import"./B1Eu4-7E.js";import"./uYsMnL2s.js";import"./aPxrJPp6.js";import"./CoUdMTPo.js";import"./blSOxsGD.js";const E={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},i=I(y.ui.strategy,y.ui.alert,E),H=N({components:{UIcon:O,UAvatar:S,UButton:U},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>i.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>i.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>i.default.color,validator(e){return[...y.ui.colors,...Object.keys(i.color)].includes(e)}},variant:{type:String,default:()=>i.default.variant,validator(e){return[...Object.keys(i.variant),...Object.values(i.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:t,attrs:v}=D("alert",V(e,"ui"),i),b=F(()=>{var c,p;const a=((p=(c=t.value.color)==null?void 0:c[e.color])==null?void 0:p[e.variant])||t.value.variant[e.variant];return w(q(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,a==null?void 0:a.replaceAll("{color}",e.color)),e.class)});function $(a){a.click&&a.click()}return{ui:t,attrs:v,alertClass:b,onAction:$,twMerge:w}}});function J(e,t,v,b,$,a){const c=O,p=S,m=U;return o(),n("div",d({class:e.alertClass},e.attrs),[h("div",{class:l(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[g(e.$slots,"icon",{icon:e.icon},()=>[e.icon?(o(),u(c,{key:0,name:e.icon,ui:e.ui.icon.base},null,8,["name","ui"])):r("",!0)]),g(e.$slots,"avatar",{avatar:e.avatar},()=>[e.avatar?(o(),u(p,d({key:0},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):r("",!0)]),h("div",{class:l(e.ui.inner)},[e.title||e.$slots.title?(o(),n("p",{key:0,class:l(e.ui.title)},[g(e.$slots,"title",{title:e.title},()=>[B(C(e.title),1)])],2)):r("",!0),e.description||e.$slots.description?(o(),n("p",{key:1,class:l(e.twMerge(e.ui.description,!(e.title&&e.$slots.title)&&"mt-0 leading-5"))},[g(e.$slots,"description",{description:e.description},()=>[B(C(e.description),1)])],2)):r("",!0),(e.description||e.$slots.description)&&e.actions.length?(o(),n("div",{key:2,class:l(e.ui.actions)},[(o(!0),n(A,null,j(e.actions,(s,f)=>(o(),u(m,d({key:f},{...e.ui.default.actionButton||{},...s},{onClick:k(M=>e.onAction(s),["stop"])}),null,16,["onClick"]))),128))],2)):r("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),n("div",{key:0,class:l(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(o(!0),n(A,{key:0},j(e.actions,(s,f)=>(o(),u(m,d({key:f},{...e.ui.default.actionButton||{},...s},{onClick:k(M=>e.onAction(s),["stop"])}),null,16,["onClick"]))),128)):r("",!0),e.closeButton?(o(),u(m,d({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:t[0]||(t[0]=k(s=>e.$emit("close"),["stop"]))}),null,16)):r("",!0)],2)):r("",!0)],2)],16)}const _=z(H,[["render",J]]);export{_ as default};