import B from"./Bvd1MlKc.js";import C from"./VlGmyalo.js";import{_ as h,a6 as q,a7 as y,y as P,V as U,g as n,a9 as w,aa as d,o as u,i as c,w as A,J as g,q as f,n as m,c as J,t as M,S as T}from"./D2dFwJ2f.js";import{u as V}from"./BJ3cXkZH.js";import{a as p}from"./B6BwBrai.js";import{b as D}from"./blSOxsGD.js";import{n as E,g as G}from"./aPxrJPp6.js";import"./DZS6RxCO.js";import"./qsMMcMsd.js";import"./kvTI3Ytm.js";const l=q(y.ui.strategy,y.ui.button,D),R=P({components:{UIcon:B,ULink:C},inheritAttrs:!1,props:{...E,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>l.default.size,validator(a){return Object.keys(l.size).includes(a)}},color:{type:String,default:()=>l.default.color,validator(a){return[...y.ui.colors,...Object.keys(l.color)].includes(a)}},variant:{type:String,default:()=>l.default.variant,validator(a){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(o=>Object.keys(o))].includes(a)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>l.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(a,{slots:o}){const{ui:e,attrs:v}=V("button",U(a,"ui"),l),{size:t,rounded:b}=p({ui:e,props:a}),i=n(()=>a.icon&&a.leading||a.icon&&!a.trailing||a.loading&&!a.trailing||a.leadingIcon),s=n(()=>a.icon&&a.trailing||a.loading&&a.trailing||a.trailingIcon),I=n(()=>a.square||!o.default&&!a.label),j=n(()=>{var k,S;const r=((S=(k=e.value.color)==null?void 0:k[a.color])==null?void 0:S[a.variant])||e.value.variant[a.variant];return w(d(e.value.base,e.value.font,b.value,e.value.size[t.value],e.value.gap[t.value],a.padded&&e.value[I.value?"square":"padding"][t.value],r==null?void 0:r.replaceAll("{color}",a.color),a.block?e.value.block:e.value.inline),a.class)}),z=n(()=>a.loading?a.loadingIcon:a.leadingIcon||a.icon),N=n(()=>a.loading&&!i.value?a.loadingIcon:a.trailingIcon||a.icon),O=n(()=>d(e.value.icon.base,e.value.icon.size[t.value],a.loading&&e.value.icon.loading)),$=n(()=>d(e.value.icon.base,e.value.icon.size[t.value],a.loading&&!i.value&&e.value.icon.loading)),L=n(()=>G(a));return{ui:e,attrs:v,isLeading:i,isTrailing:s,isSquare:I,buttonClass:j,leadingIconName:z,trailingIconName:N,leadingIconClass:O,trailingIconClass:$,linkProps:L}}});function _(a,o,e,v,t,b){const i=B,s=C;return u(),c(s,T({type:a.type,disabled:a.disabled||a.loading,class:a.buttonClass},{...a.linkProps,...a.attrs}),{default:A(()=>[g(a.$slots,"leading",{disabled:a.disabled,loading:a.loading},()=>[a.isLeading&&a.leadingIconName?(u(),c(i,{key:0,name:a.leadingIconName,class:f(a.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)]),g(a.$slots,"default",{},()=>[a.label?(u(),J("span",{key:0,class:f([a.truncate?a.ui.truncate:""])},M(a.label),3)):m("",!0)]),g(a.$slots,"trailing",{disabled:a.disabled,loading:a.loading},()=>[a.isTrailing&&a.trailingIconName?(u(),c(i,{key:0,name:a.trailingIconName,class:f(a.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)])]),_:3},16,["type","disabled","class"])}const ea=h(R,[["render",_]]);export{ea as default};
