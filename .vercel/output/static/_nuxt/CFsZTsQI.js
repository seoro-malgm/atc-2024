import d from"./Bwcc9SgH.js";import{_,a2 as v,a3 as m,N as C,R as y,au as k,g as $,a5 as h,a6 as N,o as s,i as b,a as B,c as a,F as P,q as u,b as S,aY as U,w as j,D as x,E as z,O,P as f,v as R,s as V,aU as A}from"./W-AFi6ds.js";import{u as E}from"./3c2IHa3L.js";import{u as F}from"./BbSqpO2a.js";import"./BcmoYCKr.js";import"./CiTDmoUy.js";import"./qsMMcMsd.js";import"./Dqftpapb.js";import"./CSm5rwPu.js";import"./D4O3vETx.js";import"./BBccIi2I.js";import"./aPxrJPp6.js";import"./CJu3YjXk.js";import"./blSOxsGD.js";import"./Ct4gBNv7.js";const T={wrapper:"fixed flex flex-col justify-end z-[55]",position:"bottom-0 end-0",width:"w-full sm:w-96",container:"px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"},q=v(m.ui.strategy,m.ui.notifications,T),D=C({components:{UNotification:d},inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:o,attrs:r}=E("notifications",y(t,"ui"),q),i=F(),n=k("notifications",()=>[]),p=$(()=>h(N(o.value.wrapper,o.value.position,o.value.width),t.class));return{ui:o,attrs:r,toast:i,notifications:n,wrapperClass:p}}});function I(t,o,r,i,n,p){const g=d;return s(),b(A,{to:"body"},[B("div",f({class:t.wrapperClass,role:"region"},t.attrs),[t.notifications.length?(s(),a("div",{key:0,class:R(t.ui.container)},[(s(!0),a(P,null,u(t.notifications,e=>(s(),a("div",{key:e.id},[S(g,f(e,{class:e.click&&"cursor-pointer",onClick:c=>e.click&&e.click(e),onClose:c=>t.toast.remove(e.id)}),U({_:2},[u(t.$slots,(c,l)=>({name:l,fn:j(w=>[x(t.$slots,l,z(O(w)))])}))]),1040,["class","onClick","onClose"])]))),128))],2)):V("",!0)],16)])}const at=_(D,[["render",I]]);export{at as default};