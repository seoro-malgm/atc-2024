import M from"./CD5WmY7_.js";import{_ as C,a2 as $,a3 as v,N as h,R as g,g as B,aa as V,l as j,o as r,c as n,D as b,d as i,v as u,b as E,w as k,a as p,s as d,t as w,F as L,q as O,i as S,P as D,V as A}from"./mAU7enPn.js";import{u as P,e as U}from"./DWEaht-H.js";import{u as z}from"./qCHy_9_X.js";import"./BGkKzMoR.js";const f=$(v.ui.strategy,v.ui.tooltip,U),F=h({components:{UKbd:M},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>f.default.openDelay},closeDelay:{type:Number,default:()=>f.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:m}=P("tooltip",g(e,"ui"),f,g(e,"class")),l=B(()=>V({},e.popper,a.value.popper)),[c,y]=z(l.value),s=j(!1);let o=null,t=null;function T(){t&&(clearTimeout(t),t=null),!s.value&&(o=o||setTimeout(()=>{s.value=!0,o=null},e.openDelay))}function N(){o&&(clearTimeout(o),o=null),s.value&&(t=t||setTimeout(()=>{s.value=!1,t=null},e.closeDelay))}return{ui:a,attrs:m,popper:l,trigger:c,container:y,open:s,onMouseEnter:T,onMouseLeave:N}}});function K(e,a,m,l,c,y){const s=M;return r(),n("div",D({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:a[0]||(a[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:a[1]||(a[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[b(e.$slots,"default",{open:e.open},()=>[i(" Hover ")]),e.open&&!e.prevent?(r(),n("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[E(A,D({appear:""},e.ui.transition),{default:k(()=>{var o;return[p("div",null,[e.popper.arrow?(r(),n("div",{key:0,"data-popper-arrow":"",class:u(Object.values(e.ui.arrow))},null,2)):d("",!0),p("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[b(e.$slots,"text",{},()=>[i(w(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(r(),n("span",{key:0,class:u(e.ui.shortcuts)},[p("span",{class:u(e.ui.middot)},"·",2),(r(!0),n(L,null,O(e.shortcuts,t=>(r(),S(s,{key:t,size:"xs"},{default:k(()=>[i(w(t),1)]),_:2},1024))),128))],2)):d("",!0)],2)])]}),_:3},16)],2)):d("",!0)],16)}const J=C(F,[["render",K]]);export{J as default};
