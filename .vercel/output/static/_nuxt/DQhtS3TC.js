import{u as b}from"./D-Y0HPah.js";import{W as T,G as k,S as B,h as D}from"./C3MuIs04.js";import{l as H}from"./cidcNeUU.js";import{u as V}from"./CgVE3mSy.js";import{_ as $,a2 as P,a3 as f,M as R,R as y,g,N as n,o as v,i as h,w as o,b as u,P as p,a as d,q as r,n as F,C as N}from"./DKUbIslQ.js";import"./B8mrvWyc.js";import"./D1CEbZDt.js";import"./B_1fjTXx.js";import"./Ck9INWQ7.js";import"./jthpZqva.js";import"./CxIZtCgj.js";import"./BxYtOgr-.js";const O={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},S=P(f.ui.strategy,f.ui.modal,O),j=R({components:{HDialog:T,HDialogPanel:k,TransitionRoot:B,TransitionChild:D},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:t}){const{ui:i,attrs:m}=V("modal",y(e,"ui"),S,y(e,"class")),l=g({get(){return e.modelValue},set(a){t("update:modelValue",a)}}),c=g(()=>e.transition?{...i.value.transition}:{});function s(a){if(e.preventClose){t("close-prevented");return}l.value=a,t("close")}return H(()=>b("$HAJMhYDoe7")),{ui:i,attrs:m,isOpen:l,transitionClass:c,close:s}}});function A(e,t,i,m,l,c){const s=n("TransitionChild"),a=n("HDialogPanel"),C=n("HDialog"),w=n("TransitionRoot");return v(),h(w,{appear:e.appear,show:e.isOpen,as:"template"},{default:o(()=>[u(C,p({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:o(()=>[e.overlay?(v(),h(s,p({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:o(()=>[d("div",{class:r([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):F("",!0),d("div",{class:r(e.ui.inner)},[d("div",{class:r([e.ui.container,!e.fullscreen&&e.ui.padding])},[u(s,p({as:"template",appear:e.appear},e.transitionClass),{default:o(()=>[u(a,{class:r([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:o(()=>[N(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const Q=$(j,[["render",A]]);export{Q as default};
