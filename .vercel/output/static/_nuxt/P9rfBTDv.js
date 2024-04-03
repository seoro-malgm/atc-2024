import T from"./BsPl96NA.js";import U from"./DjjS-GgV.js";import{u as X}from"./KW1kIYRg.js";import{X as O,k as v,Y as M,g as S,G as R,A as V,Z as Y,$ as F,_ as q,a0 as Z,a1 as B,y as H,j as k,o as E,c as L,F as J,n as W,i as x,w as h,b,a2 as A,M as j,N as ee,a3 as te,s as I,a4 as oe,a5 as ne,S as se,a as le,d as ae,t as re,a6 as ue}from"./1IHVEBxC.js";import{I as z,u as K,o as g,A as P,N,a as D,l as ie}from"./DN_PNx8T.js";import{s as ce}from"./Eo9r3gyG.js";import{t as pe,i as w,l as de}from"./7PnFJHNt.js";import{u as fe,o as me}from"./BXwofNuU.js";import{b as ve}from"./blSOxsGD.js";import"./DupG13Te.js";import"./qsMMcMsd.js";import"./CMohp14p.js";import"./8jGkXlRK.js";import"./aPxrJPp6.js";import"./DPYTB1Gj.js";const ge={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}};var ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ye||{});let _=Symbol("DisclosureContext");function $(e){let i=F(_,null);if(i===null){let c=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,$),c}return i}let G=Symbol("DisclosurePanelContext");function he(){return F(G,null)}let be=O({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:i,attrs:c}){let r=v(e.defaultOpen?0:1),o=v(null),d=v(null),l={buttonId:v(`headlessui-disclosure-button-${z()}`),panelId:v(`headlessui-disclosure-panel-${z()}`),disclosureState:r,panel:o,button:d,toggleDisclosure(){r.value=K(r.value,{0:1,1:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(s){l.closeDisclosure();let u=s?s instanceof HTMLElement?s:s.value instanceof HTMLElement?g(s):g(l.button):g(l.button);u==null||u.focus()}};return M(_,l),pe(S(()=>K(r.value,{0:w.Open,1:w.Closed}))),()=>{let{defaultOpen:s,...u}=e,f={open:r.value===0,close:l.close};return P({theirProps:u,ourProps:{},slot:f,slots:i,attrs:c,name:"Disclosure"})}}}),De=O({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:i,slots:c,expose:r}){let o=$("DisclosureButton"),d=he(),l=S(()=>d===null?!1:d.value===o.panelId.value);R(()=>{l.value||e.id!==null&&(o.buttonId.value=e.id)}),V(()=>{l.value||(o.buttonId.value=null)});let s=v(null);r({el:s,$el:s}),l.value||Y(()=>{o.button.value=s.value});let u=ce(S(()=>({as:e.as,type:i.type})),s);function f(){var t;e.disabled||(l.value?(o.toggleDisclosure(),(t=g(o.button))==null||t.focus()):o.toggleDisclosure())}function a(t){var p;if(!e.disabled)if(l.value)switch(t.key){case D.Space:case D.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure(),(p=g(o.button))==null||p.focus();break}else switch(t.key){case D.Space:case D.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure();break}}function n(t){switch(t.key){case D.Space:t.preventDefault();break}}return()=>{var t;let p={open:o.disclosureState.value===0},{id:y,...m}=e,Q=l.value?{ref:s,type:u.value,onClick:f,onKeydown:a}:{id:(t=o.buttonId.value)!=null?t:y,ref:s,type:u.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||g(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:f,onKeydown:a,onKeyup:n};return P({ourProps:Q,theirProps:m,slot:p,attrs:i,slots:c,name:"DisclosureButton"})}}}),Se=O({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:i,slots:c,expose:r}){let o=$("DisclosurePanel");R(()=>{e.id!==null&&(o.panelId.value=e.id)}),V(()=>{o.panelId.value=null}),r({el:o.panel,$el:o.panel}),M(G,o.panelId);let d=de(),l=S(()=>d!==null?(d.value&w.Open)===w.Open:o.disclosureState.value===0);return()=>{var s;let u={open:o.disclosureState.value===0,close:o.close},{id:f,...a}=e,n={id:(s=o.panelId.value)!=null?s:f,ref:o.panel};return P({ourProps:n,theirProps:a,slot:u,attrs:i,slots:c,features:N.RenderStrategy|N.Static,visible:l.value,name:"DisclosurePanel"})}}});const C=Z(B.ui.strategy,B.ui.accordion,ge),Ie=Z(B.ui.strategy,B.ui.button,ve),Be=O({components:{HDisclosure:be,HDisclosureButton:De,HDisclosurePanel:Se,UIcon:T,UButton:U},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>C.default.openIcon},closeIcon:{type:String,default:()=>C.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:c}=fe("accordion",H(e,"ui"),C,H(e,"class")),r=S(()=>Ie),o=v([]);function d(a,n){!e.items[a].closeOthers&&e.multiple||o.value.forEach(t=>{t.open&&t.close(n.target)})}function l(a,n){const t=a;t.style.height="0",t.offsetHeight,t.style.height=t.scrollHeight+"px",t.addEventListener("transitionend",n,{once:!0})}function s(a){const n=a;n.style.height=n.scrollHeight+"px",n.offsetHeight}function u(a){const n=a;n.style.height="auto"}function f(a,n){const t=a;t.style.height="0",t.addEventListener("transitionend",n,{once:!0})}return ie(()=>X("$SZ7s8siktv")),{ui:i,uiButton:r,attrs:c,buttonRefs:o,closeOthers:d,omit:me,onEnter:l,onBeforeLeave:s,onAfterEnter:u,onLeave:f}}});function we(e,i,c,r,o,d){const l=T,s=U,u=k("HDisclosureButton"),f=k("HDisclosurePanel"),a=k("HDisclosure");return E(),L("div",{class:I(e.ui.wrapper)},[(E(!0),L(J,null,W(e.items,(n,t)=>(E(),x(a,{key:t,as:"div",class:I(e.ui.container),"default-open":e.defaultOpen||n.defaultOpen},{default:h(({open:p,close:y})=>[b(u,{ref_for:!0,ref:()=>e.buttonRefs[t]={open:p,close:y},as:"template",disabled:n.disabled,onClick:m=>e.closeOthers(t,m),onKeydown:[A(m=>e.closeOthers(t,m),["enter"]),A(m=>e.closeOthers(t,m),["space"])]},{default:h(()=>[j(e.$slots,"default",{item:n,index:t,open:p,close:y},()=>[b(s,ee(te({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(n,["slot","disabled","content","defaultOpen"])})),{trailing:h(()=>[b(l,{name:p&&e.closeIcon?e.closeIcon:e.openIcon,class:I([p&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[n.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),b(oe,ne(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:h(()=>[se(le("div",null,[b(f,{class:I([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:h(()=>[j(e.$slots,n.slot||"item",{item:n,index:t,open:p,close:y},()=>[ae(re(n.content),1)])]),_:2},1032,["class"])],512),[[ue,p]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const Me=q(Be,[["render",we]]);export{Me as default};
