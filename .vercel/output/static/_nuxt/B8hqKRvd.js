import h from"./BiXZ8nkU.js";import y from"./BFluOHXr.js";import{_ as w,U as C,V as p,Q as U,W as d,a1 as $,a2 as B,o as s,c as t,a as A,F as m,q as L,v as i,b as S,w as V,D as o,i as f,s as n,t as g,$ as v}from"./D150JvhY.js";import{u as I}from"./C1kXnlyv.js";import{a as M}from"./aPxrJPp6.js";import"./CSpD4ZiK.js";import"./qsMMcMsd.js";import"./xyAmNv1h.js";const N={wrapper:"relative",ol:"flex items-center gap-x-1.5",li:"flex items-center gap-x-1.5 text-gray-500 dark:text-gray-400 text-sm leading-6 min-w-0",base:"flex items-center gap-x-1.5 group font-semibold min-w-0",label:"block truncate",icon:{base:"flex-shrink-0 w-5 h-5",active:"",inactive:""},divider:{base:"flex-shrink-0 w-5 h-5"},active:"text-primary-500 dark:text-primary-400",inactive:" hover:text-gray-700 dark:hover:text-gray-200",default:{divider:"i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid"}},b=C(p.ui.strategy,p.ui.breadcrumb,N),P=U({components:{UIcon:h,ULink:y},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},divider:{type:String,default:()=>b.default.divider},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:l,attrs:u}=I("breadcrumb",d(e,"ui"),b,d(e,"class"));return{ui:l,attrs:u,getULinkProps:M,twMerge:$,twJoin:B}}}),j={key:1,role:"presentation"};function D(e,l,u,F,J,O){const c=h,k=y;return s(),t("nav",v({"aria-label":"Breadcrumb",class:e.ui.wrapper},e.attrs),[A("ol",{class:i(e.ui.ol)},[(s(!0),t(m,null,L(e.links,(a,r)=>(s(),t("li",{key:r,class:i(e.ui.li)},[S(k,v({as:"span",class:[e.ui.base,r===e.links.length-1?e.ui.active:a.to?e.ui.inactive:""]},e.getULinkProps(a),{"aria-current":r===e.links.length-1?"page":void 0}),{default:V(()=>[o(e.$slots,"icon",{link:a,index:r,isActive:r===e.links.length-1},()=>[a.icon?(s(),f(c,{key:0,name:a.icon,class:i(e.twMerge(e.twJoin(e.ui.icon.base,r===e.links.length-1?e.ui.icon.active:a.to?e.ui.icon.inactive:""),a.iconClass))},null,8,["name","class"])):n("",!0)]),o(e.$slots,"default",{link:a,index:r,isActive:r===e.links.length-1},()=>[a.label?(s(),t("span",{key:0,class:i(e.twMerge(e.ui.label,a.labelClass))},g(a.label),3)):n("",!0)])]),_:2},1040,["class","aria-current"]),r<e.links.length-1?o(e.$slots,"divider",{key:0},()=>[e.divider?(s(),t(m,{key:0},[e.divider.startsWith("i-")?(s(),f(c,{key:0,name:e.divider,class:i(e.ui.divider.base),role:"presentation"},null,8,["name","class"])):(s(),t("span",j,g(e.divider),1))],64)):n("",!0)]):n("",!0)],2))),128))],2)],16)}const K=w(P,[["render",D]]);export{K as default};
