import w from"./DcH6K-cx.js";import{_ as C,I as N,J as v,D as h,K as g,k as j,$ as B,r as E,o as r,c as n,j as b,d as i,y as u,b as L,w as k,a as p,x as d,t as M,F as O,v as S,M as V,Q as T,T as A}from"./DFjfPBi9.js";import{u as K,e as U}from"./CIEZZO0C.js";import{u as z}from"./DyXA_8NC.js";import"./BtEjgvAg.js";const f=N(v.ui.strategy,v.ui.tooltip,U),F=h({components:{UKbd:w},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>f.default.openDelay},closeDelay:{type:Number,default:()=>f.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:m}=K("tooltip",g(e,"ui"),f,g(e,"class")),l=j(()=>B({},e.popper,a.value.popper)),[c,y]=z(l.value),s=E(!1);let o=null,t=null;function D(){t&&(clearTimeout(t),t=null),!s.value&&(o=o||setTimeout(()=>{s.value=!0,o=null},e.openDelay))}function $(){o&&(clearTimeout(o),o=null),s.value&&(t=t||setTimeout(()=>{s.value=!1,t=null},e.closeDelay))}return{ui:a,attrs:m,popper:l,trigger:c,container:y,open:s,onMouseEnter:D,onMouseLeave:$}}});function I(e,a,m,l,c,y){const s=w;return r(),n("div",T({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:a[0]||(a[0]=(...o)=>e.onMouseEnter&&e.onMouseEnter(...o)),onMouseleave:a[1]||(a[1]=(...o)=>e.onMouseLeave&&e.onMouseLeave(...o))}),[b(e.$slots,"default",{open:e.open},()=>[i(" Hover ")]),e.open&&!e.prevent?(r(),n("div",{key:0,ref:"container",class:u([e.ui.container,e.ui.width])},[L(A,T({appear:""},e.ui.transition),{default:k(()=>{var o;return[p("div",null,[e.popper.arrow?(r(),n("div",{key:0,"data-popper-arrow":"",class:u(Object.values(e.ui.arrow))},null,2)):d("",!0),p("div",{class:u([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[b(e.$slots,"text",{},()=>[i(M(e.text),1)]),(o=e.shortcuts)!=null&&o.length?(r(),n("span",{key:0,class:u(e.ui.shortcuts)},[p("span",{class:u(e.ui.middot)},"·",2),(r(!0),n(O,null,S(e.shortcuts,t=>(r(),V(s,{key:t,size:"xs"},{default:k(()=>[i(M(t),1)]),_:2},1024))),128))],2)):d("",!0)],2)])]}),_:3},16)],2)):d("",!0)],16)}const q=C(F,[["render",I]]);export{q as default};
