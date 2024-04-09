import{u as $e}from"./DlWTm6wJ.js";import{Q as W,l as k,g as C,R as ge,S as _,a5 as O,F as ee,x as oe,J as me,T as te,_ as ke,U as Ce,V as ue,W as se,a8 as Ee,n as ie,j as q,o as H,i as pe,w as j,b as J,v as L,D as ve,a as de,Z as ce,$ as Q,c as V,s as z,K as Te}from"./D150JvhY.js";import{A as Fe,N as Be,E as Ie,n as be,d as I}from"./Co8i92jU.js";import{o as l,u as A,A as ae,I as G,N as fe,a as M,l as De}from"./4ffrKX4p.js";import{w as Oe}from"./CafzHAWC.js";import{s as Me}from"./C6FCHUI4.js";import{f as Z,s as X}from"./CxOkkkLN.js";import{t as Ne,i as U,l as Ae}from"./fTFm7FM9.js";import{i as le,E as ne,w as He,h as je,P as N,N as D,T as x}from"./C9jZCsJU.js";import{c as Le,u as Ge}from"./C1kXnlyv.js";import{u as Re}from"./Bz0iyGbt.js";import"./rif7_mvO.js";const Ke={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:Le};var ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ze||{});let ye=Symbol("PopoverContext");function re(e){let P=te(ye,null);if(P===null){let S=new Error(`<${e} /> is missing a parent <${he.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(S,re),S}return P}let Ue=Symbol("PopoverGroupContext");function Pe(){return te(Ue,null)}let Se=Symbol("PopoverPanelContext");function We(){return te(Se,null)}let he=W({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:P,attrs:S,expose:T}){var h;let w=k(null);T({el:w,$el:w});let a=k(1),t=k(null),u=k(null),c=k(null),v=k(null),g=C(()=>le(w)),$=C(()=>{var o,r;if(!l(t)||!l(v))return!1;for(let K of document.querySelectorAll("body > *"))if(Number(K==null?void 0:K.contains(l(t)))^Number(K==null?void 0:K.contains(l(v))))return!0;let n=ne(),y=n.indexOf(l(t)),E=(y+n.length-1)%n.length,B=(y+1)%n.length,R=n[E],we=n[B];return!((o=l(v))!=null&&o.contains(R))&&!((r=l(v))!=null&&r.contains(we))}),m={popoverState:a,buttonId:k(null),panelId:k(null),panel:v,button:t,isPortalled:$,beforePanelSentinel:u,afterPanelSentinel:c,togglePopover(){a.value=A(a.value,{0:1,1:0})},closePopover(){a.value!==1&&(a.value=1)},close(o){m.closePopover();let r=o?o instanceof HTMLElement?o:o.value instanceof HTMLElement?l(o):l(m.button):l(m.button);r==null||r.focus()}};ge(ye,m),Ne(C(()=>A(a.value,{0:U.Open,1:U.Closed})));let F={buttonId:m.buttonId,panelId:m.panelId,close(){m.closePopover()}},i=Pe(),f=i==null?void 0:i.registerPopover,[b,p]=Fe(),d=Be({mainTreeNodeRef:i==null?void 0:i.mainTreeNodeRef,portals:b,defaultContainers:[t,v]});function s(){var o,r,n,y;return(y=i==null?void 0:i.isFocusWithinPopoverGroup())!=null?y:((o=g.value)==null?void 0:o.activeElement)&&(((r=l(t))==null?void 0:r.contains(g.value.activeElement))||((n=l(v))==null?void 0:n.contains(g.value.activeElement)))}return _(()=>f==null?void 0:f(F)),Ie((h=g.value)==null?void 0:h.defaultView,"focus",o=>{var r,n;o.target!==window&&o.target instanceof HTMLElement&&a.value===0&&(s()||t&&v&&(d.contains(o.target)||(r=l(m.beforePanelSentinel))!=null&&r.contains(o.target)||(n=l(m.afterPanelSentinel))!=null&&n.contains(o.target)||m.closePopover()))},!0),Oe(d.resolveContainers,(o,r)=>{var n;m.closePopover(),He(r,je.Loose)||(o.preventDefault(),(n=l(t))==null||n.focus())},C(()=>a.value===0)),()=>{let o={open:a.value===0,close:m.close};return O(ee,[O(p,{},()=>ae({theirProps:{...e,...S},ourProps:{ref:w},slot:o,slots:P,attrs:S,name:"Popover"})),O(d.MainTreeNode)])}}}),qe=W({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-button-${G()}`,a=re("PopoverButton"),t=C(()=>le(a.button));T({el:a.button,$el:a.button}),oe(()=>{a.buttonId.value=w}),me(()=>{a.buttonId.value=null});let u=Pe(),c=u==null?void 0:u.closeOthers,v=We(),g=C(()=>v===null?!1:v.value===a.panelId.value),$=k(null),m=`headlessui-focus-sentinel-${G()}`;g.value||_(()=>{a.button.value=l($)});let F=Me(C(()=>({as:e.as,type:P.type})),$);function i(o){var r,n,y,E,B;if(g.value){if(a.popoverState.value===1)return;switch(o.key){case M.Space:case M.Enter:o.preventDefault(),(n=(r=o.target).click)==null||n.call(r),a.closePopover(),(y=l(a.button))==null||y.focus();break}}else switch(o.key){case M.Space:case M.Enter:o.preventDefault(),o.stopPropagation(),a.popoverState.value===1&&(c==null||c(a.buttonId.value)),a.togglePopover();break;case M.Escape:if(a.popoverState.value!==0)return c==null?void 0:c(a.buttonId.value);if(!l(a.button)||(E=t.value)!=null&&E.activeElement&&!((B=l(a.button))!=null&&B.contains(t.value.activeElement)))return;o.preventDefault(),o.stopPropagation(),a.closePopover();break}}function f(o){g.value||o.key===M.Space&&o.preventDefault()}function b(o){var r,n;e.disabled||(g.value?(a.closePopover(),(r=l(a.button))==null||r.focus()):(o.preventDefault(),o.stopPropagation(),a.popoverState.value===1&&(c==null||c(a.buttonId.value)),a.togglePopover(),(n=l(a.button))==null||n.focus()))}function p(o){o.preventDefault(),o.stopPropagation()}let d=be();function s(){let o=l(a.panel);if(!o)return;function r(){A(d.value,{[I.Forwards]:()=>N(o,D.First),[I.Backwards]:()=>N(o,D.Last)})===x.Error&&N(ne().filter(n=>n.dataset.headlessuiFocusGuard!=="true"),A(d.value,{[I.Forwards]:D.Next,[I.Backwards]:D.Previous}),{relativeTo:l(a.button)})}r()}return()=>{let o=a.popoverState.value===0,r={open:o},{...n}=e,y=g.value?{ref:$,type:F.value,onKeydown:i,onClick:b}:{ref:$,id:w,type:F.value,"aria-expanded":a.popoverState.value===0,"aria-controls":l(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:i,onKeyup:f,onClick:b,onMousedown:p};return O(ee,[ae({ourProps:y,theirProps:{...P,...n},slot:r,attrs:P,slots:S,name:"PopoverButton"}),o&&!g.value&&a.isPortalled.value&&O(Z,{id:m,features:X.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:s})])}}}),Je=W({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:P,slots:S,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-panel-${G()}`,{focus:a}=e,t=re("PopoverPanel"),u=C(()=>le(t.panel)),c=`headlessui-focus-sentinel-before-${G()}`,v=`headlessui-focus-sentinel-after-${G()}`;T({el:t.panel,$el:t.panel}),oe(()=>{t.panelId.value=w}),me(()=>{t.panelId.value=null}),ge(Se,t.panelId),_(()=>{var p,d;if(!a||t.popoverState.value!==0||!t.panel)return;let s=(p=u.value)==null?void 0:p.activeElement;(d=l(t.panel))!=null&&d.contains(s)||N(l(t.panel),D.First)});let g=Ae(),$=C(()=>g!==null?(g.value&U.Open)===U.Open:t.popoverState.value===0);function m(p){var d,s;switch(p.key){case M.Escape:if(t.popoverState.value!==0||!l(t.panel)||u.value&&!((d=l(t.panel))!=null&&d.contains(u.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),t.closePopover(),(s=l(t.button))==null||s.focus();break}}function F(p){var d,s,o,r,n;let y=p.relatedTarget;y&&l(t.panel)&&((d=l(t.panel))!=null&&d.contains(y)||(t.closePopover(),((o=(s=l(t.beforePanelSentinel))==null?void 0:s.contains)!=null&&o.call(s,y)||(n=(r=l(t.afterPanelSentinel))==null?void 0:r.contains)!=null&&n.call(r,y))&&y.focus({preventScroll:!0})))}let i=be();function f(){let p=l(t.panel);if(!p)return;function d(){A(i.value,{[I.Forwards]:()=>{var s;N(p,D.First)===x.Error&&((s=l(t.afterPanelSentinel))==null||s.focus())},[I.Backwards]:()=>{var s;(s=l(t.button))==null||s.focus({preventScroll:!0})}})}d()}function b(){let p=l(t.panel);if(!p)return;function d(){A(i.value,{[I.Forwards]:()=>{let s=l(t.button),o=l(t.panel);if(!s)return;let r=ne(),n=r.indexOf(s),y=r.slice(0,n+1),E=[...r.slice(n+1),...y];for(let B of E.slice())if(B.dataset.headlessuiFocusGuard==="true"||o!=null&&o.contains(B)){let R=E.indexOf(B);R!==-1&&E.splice(R,1)}N(E,D.First,{sorted:!1})},[I.Backwards]:()=>{var s;N(p,D.Previous)===x.Error&&((s=l(t.button))==null||s.focus())}})}d()}return()=>{let p={open:t.popoverState.value===0,close:t.close},{focus:d,...s}=e,o={ref:t.panel,id:w,onKeydown:m,onFocusout:a&&t.popoverState.value===0?F:void 0,tabIndex:-1};return ae({ourProps:o,theirProps:{...P,...s},attrs:P,slot:p,slots:{...S,default:(...r)=>{var n;return[O(ee,[$.value&&t.isPortalled.value&&O(Z,{id:c,ref:t.beforePanelSentinel,features:X.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:f}),(n=S.default)==null?void 0:n.call(S,...r),$.value&&t.isPortalled.value&&O(Z,{id:v,ref:t.afterPanelSentinel,features:X.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:b})])]}},features:fe.RenderStrategy|fe.Static,visible:$.value,name:"PopoverPanel"})}}});const Y=Ce(ue.ui.strategy,ue.ui.popover,Ke),Qe=W({components:{HPopover:he,HPopoverButton:qe,HPopoverPanel:Je},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>Y.default.openDelay},closeDelay:{type:Number,default:()=>Y.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:P}){const{ui:S,attrs:T}=Ge("popover",se(e,"ui"),Y,se(e,"class")),h=C(()=>Ee(e.mode==="hover"?{offsetDistance:0}:{},e.popper,S.value.popper)),[w,a]=Re(h.value),t=k(null),u=k(null);let c=null,v=null;oe(()=>{var b,p;const i=(b=t.value)==null?void 0:b.$.provides;if(!i)return;const f=Object.getOwnPropertySymbols(i);u.value=f.length&&i[f[0]],e.open&&((p=u.value)==null||p.togglePopover())});const g=C(()=>{var p,d,s;if(e.mode!=="hover")return{};const i=((p=e.popper)==null?void 0:p.offsetDistance)||((d=S.value.popper)==null?void 0:d.offsetDistance)||8,f=(s=h.value.placement)==null?void 0:s.split("-")[0],b=`${i}px`;return f==="top"||f==="bottom"?{paddingTop:b,paddingBottom:b}:f==="left"||f==="right"?{paddingLeft:b,paddingRight:b}:{paddingTop:b,paddingBottom:b,paddingLeft:b,paddingRight:b}});function $(){u.value&&(u.value.popoverState===0?u.value.closePopover():u.value.togglePopover())}function m(){e.mode!=="hover"||!u.value||(v&&(clearTimeout(v),v=null),u.value.popoverState!==0&&(c=c||setTimeout(()=>{u.value.togglePopover&&u.value.togglePopover(),c=null},e.openDelay)))}function F(){e.mode!=="hover"||!u.value||(c&&(clearTimeout(c),c=null),u.value.popoverState!==1&&(v=v||setTimeout(()=>{u.value.closePopover&&u.value.closePopover(),v=null},e.closeDelay)))}return ie(()=>e.open,(i,f)=>{u.value&&(f===void 0||i===f||(i?u.value.popoverState=0:u.value.closePopover()))}),ie(()=>{var i;return(i=u.value)==null?void 0:i.popoverState},(i,f)=>{f===void 0||i===f||P("update:open",i===0)}),De(()=>$e("$dcv2Y3vSTA")),{ui:S,attrs:T,popover:t,popper:h,trigger:w,container:a,containerStyle:g,onTouchStart:$,onMouseEnter:m,onMouseLeave:F}}}),Ve=["disabled"];function Ye(e,P,S,T,h,w){const a=q("HPopoverButton"),t=q("HPopoverPanel"),u=q("HPopover");return H(),pe(u,Q({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:j(({open:c,close:v})=>[J(a,{ref:"trigger",as:"div",disabled:e.disabled,class:L(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:j(()=>[ve(e.$slots,"default",{open:c,close:v},()=>[de("button",{disabled:e.disabled}," Open ",8,Ve)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(H(),pe(ce,Q({key:0,appear:""},e.ui.overlay.transition),{default:j(()=>[c?(H(),V("div",{key:0,class:L([e.ui.overlay.base,e.ui.overlay.background])},null,2)):z("",!0)]),_:2},1040)):z("",!0),c?(H(),V("div",{key:1,ref:"container",class:L([e.ui.container,e.ui.width]),style:Te(e.containerStyle),onMouseenter:P[0]||(P[0]=(...g)=>e.onMouseEnter&&e.onMouseEnter(...g))},[J(ce,Q({appear:""},e.ui.transition),{default:j(()=>[de("div",null,[e.popper.arrow?(H(),V("div",{key:0,"data-popper-arrow":"",class:L(Object.values(e.ui.arrow))},null,2)):z("",!0),J(t,{class:L([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:j(()=>[ve(e.$slots,"panel",{open:c,close:v})]),_:2},1032,["class"])])]),_:2},1040)],38)):z("",!0)]),_:3},16,["class","onMouseleave"])}const so=ke(Qe,[["render",Ye]]);export{so as default};
