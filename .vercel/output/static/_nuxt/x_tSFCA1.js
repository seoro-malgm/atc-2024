import{_ as y}from"./Cph92BWh.js";import k from"./Bvd1MlKc.js";import h from"./DqWgEQSe.js";import w from"./VlGmyalo.js";import U from"./cqZQoOkB.js";import{_ as L,a6 as V,a7 as p,y as S,V as b,g as D,a9 as J,aa as M,o as r,c as t,F as f,m,b as P,w as j,J as n,i as l,S as u,n as s,q as v,d as F,t as K,a0 as O}from"./D2dFwJ2f.js";import{u as q}from"./BJ3cXkZH.js";import{a as E}from"./aPxrJPp6.js";import"./DZS6RxCO.js";import"./qsMMcMsd.js";import"./B6BwBrai.js";import"./kvTI3Ytm.js";const I={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},R=V(p.ui.strategy,p.ui.verticalNavigation,I),T=S({components:{UIcon:k,UAvatar:y,UBadge:h,ULink:w,UDivider:U},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:o,attrs:d}=q("verticalNavigation",b(e,"ui"),R,b(e,"class")),g=D(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:o,attrs:d,sections:g,getULinkProps:E,twMerge:J,twJoin:M}}}),G={key:0,class:"sr-only"};function H(e,o,d,g,Q,W){const C=y,$=k,z=h,_=w,N=U;return r(),t("nav",u({class:e.ui.wrapper},e.attrs),[(r(!0),t(f,null,m(e.sections,(A,c)=>(r(),t("ul",{key:`section${c}`},[(r(!0),t(f,null,m(A,(a,B)=>(r(),t("li",{key:`section${c}-${B}`},[P(_,u(e.getULinkProps(a),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:o[0]||(o[0]=O(i=>i.target.blur(),["enter"]))}),{default:j(({isActive:i})=>[n(e.$slots,"avatar",{link:a,isActive:i},()=>[a.avatar?(r(),l(C,u({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):s("",!0)]),n(e.$slots,"icon",{link:a,isActive:i},()=>[a.icon?(r(),l($,{key:0,name:a.icon,class:v(e.twMerge(e.twJoin(e.ui.icon.base,i?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):s("",!0)]),n(e.$slots,"default",{link:a,isActive:i},()=>[a.label?(r(),t("span",{key:0,class:v(e.twMerge(e.ui.label,a.labelClass))},[i?(r(),t("span",G," Current page: ")):s("",!0),F(" "+K(a.label),1)],2)):s("",!0)]),n(e.$slots,"badge",{link:a,isActive:i},()=>[a.badge?(r(),l(z,u({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):s("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),c<e.sections.length-1?(r(),l(N,{key:0,ui:e.ui.divider},null,8,["ui"])):s("",!0)]))),128))],16)}const le=L(T,[["render",H]]);export{le as default};
