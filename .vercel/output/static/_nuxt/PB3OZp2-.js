import{_ as y}from"./BXAZOtnI.js";import k from"./BSzbYeG0.js";import h from"./Dn0MMCvE.js";import w from"./DckUe19c.js";import{_ as x,a2 as A,a3 as m,N as B,R as b,g as L,a5 as P,a6 as j,o as t,c as s,F as p,q as v,v as n,b as M,w as S,D as l,i as c,P as u,s as o,d as V,t as D,X as F}from"./jXR-_GK-.js";import{u as I}from"./DcwSD92C.js";import{a as J}from"./aPxrJPp6.js";import"./BzCaOQeR.js";import"./qsMMcMsd.js";import"./BmYUJi-w.js";import"./DCJR3gIH.js";const K={wrapper:"relative w-full flex items-center justify-between",container:"flex items-center min-w-0",inner:"min-w-0",base:"group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",before:"before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",after:"after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",active:"text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"}},O=A(m.ui.strategy,m.ui.horizontalNavigation,K),R=B({components:{UIcon:k,UAvatar:y,UBadge:h,ULink:w},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:f}=I("horizontalNavigation",b(e,"ui"),O,b(e,"class")),g=L(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:i,attrs:f,sections:g,getULinkProps:J,twMerge:P,twJoin:j}}}),q={key:0,class:"sr-only"};function E(e,i,f,g,H,T){const z=y,C=k,U=h,$=w;return t(),s("nav",u({class:e.ui.wrapper},e.attrs),[(t(!0),s(p,null,v(e.sections,(N,d)=>(t(),s("ul",{key:`section${d}`,class:n(e.ui.container)},[(t(!0),s(p,null,v(N,(a,_)=>(t(),s("li",{key:`section${d}-${_}`,class:n(e.ui.inner)},[M($,u(e.getULinkProps(a),{class:[e.ui.base,e.ui.before,e.ui.after],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:i[0]||(i[0]=F(r=>r.target.blur(),["enter"]))}),{default:S(({isActive:r})=>[l(e.$slots,"avatar",{link:a,isActive:r},()=>[a.avatar?(t(),c(z,u({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):o("",!0)]),l(e.$slots,"icon",{link:a,isActive:r},()=>[a.icon?(t(),c(C,{key:0,name:a.icon,class:n(e.twMerge(e.twJoin(e.ui.icon.base,r?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):o("",!0)]),l(e.$slots,"default",{link:a,isActive:r},()=>[a.label?(t(),s("span",{key:0,class:n(e.twMerge(e.ui.label,a.labelClass))},[r?(t(),s("span",q," Current page: ")):o("",!0),V(" "+D(a.label),1)],2)):o("",!0)]),l(e.$slots,"badge",{link:a,isActive:r},()=>[a.badge?(t(),c(U,u({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):o("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])],2))),128))],2))),128))],16)}const oe=x(R,[["render",E]]);export{oe as default};
