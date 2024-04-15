import S from"./D1yV368B.js";import{_ as w,U as I,V as d,Q as U,W as g,g as r,a2 as l,o as $,c as V,D as k,a as s,v as i,t as h,I as P,E as M,$ as c,s as m,i as D,d as E}from"./vj23PmSK.js";import{u as J}from"./Bkly0SmH.js";import{m as Q}from"./DOl6dAT8.js";import"./LyMHQP61.js";import"./qsMMcMsd.js";const o=I(d.ui.strategy,d.ui.meter,Q),R=U({components:{UIcon:S},inheritAttrs:!1,slots:Object,props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:100},indicator:{type:Boolean,default:!1},label:{type:String,default:null},size:{type:String,default:()=>o.default.size,validator(e){return Object.keys(o.meter.size).includes(e)}},color:{type:String,default:()=>o.default.color,validator(e){return[...d.ui.colors,...Object.keys(o.color)].includes(e)}},icon:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:v}=J("meter",g(e,"ui"),o,g(e,"class"));function f(z,t,n){if(t==n)return z<t?0:100;t>n&&(n=[t,t=n][0]);const O=(z-t)/(n-t)*100;return Math.max(0,Math.min(100,O))}const b=r(()=>l(a.value.indicator.container)),p=r(()=>l(a.value.indicator.text,a.value.indicator.size[e.size])),u=r(()=>l(a.value.meter.base,a.value.meter.background,a.value.meter.ring,a.value.meter.rounded,a.value.meter.shadow,a.value.color[e.color]??a.value.meter.color.replaceAll("{color}",e.color),a.value.meter.size[e.size])),B=r(()=>l(a.value.meter.appearance.inner,a.value.meter.appearance.meter,a.value.meter.appearance.bar,a.value.meter.appearance.value)),N=r(()=>l(a.value.meter.bar.transition,a.value.meter.bar.ring,a.value.meter.bar.rounded,a.value.meter.bar.size[e.size])),A=r(()=>l(a.value.label.base,a.value.label.text,a.value.color[e.color]??a.value.label.color.replaceAll("{color}",e.color),a.value.label.size[e.size])),y=r(()=>e.min>e.max?e.max:e.min),C=r(()=>e.max<e.min?e.min:e.max),j=r(()=>f(Number(e.value),y.value,C.value));return{ui:a,attrs:v,indicatorContainerClass:b,indicatorClass:p,meterClass:u,meterAppearanceClass:B,meterBarClass:N,labelClass:A,normalizedMin:y,normalizedMax:C,percent:j}}}),T=["value","min","max"];function W(e,a,v,f,b,p){const u=S;return $(),V("div",c({class:e.ui.wrapper},e.attrs),[e.indicator||e.$slots.indicator?k(e.$slots,"indicator",M(c({key:0},{percent:e.percent,value:e.value})),()=>[s("div",{class:i(e.indicatorContainerClass),style:P({width:`${e.percent}%`})},[s("div",{class:i(e.indicatorClass)},h(Math.round(e.percent))+"% ",3)],6)]):m("",!0),s("meter",{value:e.value,min:e.normalizedMin,max:e.normalizedMax,class:i([e.meterClass,e.meterAppearanceClass,e.meterBarClass])},null,10,T),e.label||e.$slots.label?k(e.$slots,"label",M(c({key:1},{percent:e.percent,value:e.value})),()=>[s("div",{class:i(e.labelClass)},[e.icon?($(),D(u,{key:0,name:e.icon},null,8,["name"])):m("",!0),E(" "+h(e.label),1)],2)]):m("",!0)],16)}const X=w(R,[["render",W]]);export{X as default};
