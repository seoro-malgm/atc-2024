import{u as C}from"./D-Y0HPah.js";import{W as w,G as T,S as k,h as B}from"./C3MuIs04.js";import{l as S}from"./cidcNeUU.js";import{u as V}from"./CgVE3mSy.js";import{_ as D,a2 as H,a3 as f,M as $,R as m,g as c,N as n,o as g,i as v,w as o,b as i,P as u,a as P,q as y,n as R,C as j}from"./DKUbIslQ.js";import"./B8mrvWyc.js";import"./D1CEbZDt.js";import"./B_1fjTXx.js";import"./Ck9INWQ7.js";import"./jthpZqva.js";import"./CxIZtCgj.js";import"./BxYtOgr-.js";const F={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},N=H(f.ui.strategy,f.ui.slideover,F),O=$({components:{HDialog:w,HDialogPanel:T,TransitionRoot:k,TransitionChild:B},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:r}){const{ui:a,attrs:d}=V("slideover",m(e,"ui"),N,m(e,"class")),l=c({get(){return e.modelValue},set(t){r("update:modelValue",t)}}),p=c(()=>e.transition?{...a.value.transition,enterFrom:e.side==="left"?a.value.translate.left:a.value.translate.right,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:e.side==="left"?a.value.translate.left:a.value.translate.right}:{});function s(t){if(e.preventClose){r("close-prevented");return}l.value=t,r("close")}return S(()=>C("$zSEivjycv8")),{ui:a,attrs:d,isOpen:l,transitionClass:p,close:s}}});function z(e,r,a,d,l,p){const s=n("TransitionChild"),t=n("HDialogPanel"),h=n("HDialog"),b=n("TransitionRoot");return g(),v(b,{as:"template",appear:e.appear,show:e.isOpen},{default:o(()=>[i(h,u({class:[e.ui.wrapper,{"justify-end":e.side==="right"}]},e.attrs,{onClose:e.close}),{default:o(()=>[e.overlay?(g(),v(s,u({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:o(()=>[P("div",{class:y([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):R("",!0),i(s,u({as:"template",appear:e.appear},e.transitionClass),{default:o(()=>[i(t,{class:y([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:o(()=>[j(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const Q=D(O,[["render",z]]);export{Q as default};
