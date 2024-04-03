import{u as $e}from"./VeLQ5Uhw.js";import{X as q,k,g as C,Y as ge,Z as x,ab as O,F as ee,G as te,A as me,$ as oe,_ as ke,a0 as Ce,a1 as ue,y as se,ae as Ee,m as ie,j as Y,o as H,i as pe,w as j,b as W,s as L,H as Te,M as ve,a as ce,a4 as de,a5 as X,c as Z,q as K,R as Fe}from"./DESXl4iR.js";import{A as Be,N as Ie,E as De,n as be,d as I}from"./BQ1esezC.js";import{o as l,u as N,A as ae,I as G,N as fe,a as A,l as Oe}from"./BZVf0G2K.js";import{w as Ae}from"./DFBe7jAg.js";import{s as Me}from"./Bvgsh96_.js";import{f as Q,s as V}from"./DT9i_URa.js";import{t as Ne,i as U,l as He}from"./BxMymv29.js";import{i as le,E as ne,w as je,h as Le,P as M,N as D,T as _}from"./8-cGPccU.js";import{c as Ge,u as Re}from"./xIbKZP61.js";import{u as ze}from"./BYrjY8io.js";import"./5eV8UV4G.js";const Ke={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:Ge};var Ue=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ue||{});let ye=Symbol("PopoverContext");function re(e){let S=oe(ye,null);if(S===null){let y=new Error(`<${e} /> is missing a parent <${he.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(y,re),y}return S}let qe=Symbol("PopoverGroupContext");function Pe(){return oe(qe,null)}let Se=Symbol("PopoverPanelContext");function Ye(){return oe(Se,null)}let he=q({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:S,attrs:y,expose:T}){var h;let w=k(null);T({el:w,$el:w});let a=k(1),o=k(null),u=k(null),d=k(null),v=k(null),P=C(()=>le(w)),$=C(()=>{var t,r;if(!l(o)||!l(v))return!1;for(let z of document.querySelectorAll("body > *"))if(Number(z==null?void 0:z.contains(l(o)))^Number(z==null?void 0:z.contains(l(v))))return!0;let n=ne(),b=n.indexOf(l(o)),E=(b+n.length-1)%n.length,B=(b+1)%n.length,R=n[E],we=n[B];return!((t=l(v))!=null&&t.contains(R))&&!((r=l(v))!=null&&r.contains(we))}),g={popoverState:a,buttonId:k(null),panelId:k(null),panel:v,button:o,isPortalled:$,beforePanelSentinel:u,afterPanelSentinel:d,togglePopover(){a.value=N(a.value,{0:1,1:0})},closePopover(){a.value!==1&&(a.value=1)},close(t){g.closePopover();let r=t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?l(t):l(g.button):l(g.button);r==null||r.focus()}};ge(ye,g),Ne(C(()=>N(a.value,{0:U.Open,1:U.Closed})));let F={buttonId:g.buttonId,panelId:g.panelId,close(){g.closePopover()}},i=Pe(),f=i==null?void 0:i.registerPopover,[m,p]=Be(),c=Ie({mainTreeNodeRef:i==null?void 0:i.mainTreeNodeRef,portals:m,defaultContainers:[o,v]});function s(){var t,r,n,b;return(b=i==null?void 0:i.isFocusWithinPopoverGroup())!=null?b:((t=P.value)==null?void 0:t.activeElement)&&(((r=l(o))==null?void 0:r.contains(P.value.activeElement))||((n=l(v))==null?void 0:n.contains(P.value.activeElement)))}return x(()=>f==null?void 0:f(F)),De((h=P.value)==null?void 0:h.defaultView,"focus",t=>{var r,n;t.target!==window&&t.target instanceof HTMLElement&&a.value===0&&(s()||o&&v&&(c.contains(t.target)||(r=l(g.beforePanelSentinel))!=null&&r.contains(t.target)||(n=l(g.afterPanelSentinel))!=null&&n.contains(t.target)||g.closePopover()))},!0),Ae(c.resolveContainers,(t,r)=>{var n;g.closePopover(),je(r,Le.Loose)||(t.preventDefault(),(n=l(o))==null||n.focus())},C(()=>a.value===0)),()=>{let t={open:a.value===0,close:g.close};return O(ee,[O(p,{},()=>ae({theirProps:{...e,...y},ourProps:{ref:w},slot:t,slots:S,attrs:y,name:"Popover"})),O(c.MainTreeNode)])}}}),We=q({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:S,slots:y,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-button-${G()}`,a=re("PopoverButton"),o=C(()=>le(a.button));T({el:a.button,$el:a.button}),te(()=>{a.buttonId.value=w}),me(()=>{a.buttonId.value=null});let u=Pe(),d=u==null?void 0:u.closeOthers,v=Ye(),P=C(()=>v===null?!1:v.value===a.panelId.value),$=k(null),g=`headlessui-focus-sentinel-${G()}`;P.value||x(()=>{a.button.value=l($)});let F=Me(C(()=>({as:e.as,type:S.type})),$);function i(t){var r,n,b,E,B;if(P.value){if(a.popoverState.value===1)return;switch(t.key){case A.Space:case A.Enter:t.preventDefault(),(n=(r=t.target).click)==null||n.call(r),a.closePopover(),(b=l(a.button))==null||b.focus();break}}else switch(t.key){case A.Space:case A.Enter:t.preventDefault(),t.stopPropagation(),a.popoverState.value===1&&(d==null||d(a.buttonId.value)),a.togglePopover();break;case A.Escape:if(a.popoverState.value!==0)return d==null?void 0:d(a.buttonId.value);if(!l(a.button)||(E=o.value)!=null&&E.activeElement&&!((B=l(a.button))!=null&&B.contains(o.value.activeElement)))return;t.preventDefault(),t.stopPropagation(),a.closePopover();break}}function f(t){P.value||t.key===A.Space&&t.preventDefault()}function m(t){var r,n;e.disabled||(P.value?(a.closePopover(),(r=l(a.button))==null||r.focus()):(t.preventDefault(),t.stopPropagation(),a.popoverState.value===1&&(d==null||d(a.buttonId.value)),a.togglePopover(),(n=l(a.button))==null||n.focus()))}function p(t){t.preventDefault(),t.stopPropagation()}let c=be();function s(){let t=l(a.panel);if(!t)return;function r(){N(c.value,{[I.Forwards]:()=>M(t,D.First),[I.Backwards]:()=>M(t,D.Last)})===_.Error&&M(ne().filter(n=>n.dataset.headlessuiFocusGuard!=="true"),N(c.value,{[I.Forwards]:D.Next,[I.Backwards]:D.Previous}),{relativeTo:l(a.button)})}r()}return()=>{let t=a.popoverState.value===0,r={open:t},{...n}=e,b=P.value?{ref:$,type:F.value,onKeydown:i,onClick:m}:{ref:$,id:w,type:F.value,"aria-expanded":a.popoverState.value===0,"aria-controls":l(a.panel)?a.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:i,onKeyup:f,onClick:m,onMousedown:p};return O(ee,[ae({ourProps:b,theirProps:{...S,...n},slot:r,attrs:S,slots:y,name:"PopoverButton"}),t&&!P.value&&a.isPortalled.value&&O(Q,{id:g,features:V.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:s})])}}}),Xe=q({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:S,slots:y,expose:T}){var h;let w=(h=e.id)!=null?h:`headlessui-popover-panel-${G()}`,{focus:a}=e,o=re("PopoverPanel"),u=C(()=>le(o.panel)),d=`headlessui-focus-sentinel-before-${G()}`,v=`headlessui-focus-sentinel-after-${G()}`;T({el:o.panel,$el:o.panel}),te(()=>{o.panelId.value=w}),me(()=>{o.panelId.value=null}),ge(Se,o.panelId),x(()=>{var p,c;if(!a||o.popoverState.value!==0||!o.panel)return;let s=(p=u.value)==null?void 0:p.activeElement;(c=l(o.panel))!=null&&c.contains(s)||M(l(o.panel),D.First)});let P=He(),$=C(()=>P!==null?(P.value&U.Open)===U.Open:o.popoverState.value===0);function g(p){var c,s;switch(p.key){case A.Escape:if(o.popoverState.value!==0||!l(o.panel)||u.value&&!((c=l(o.panel))!=null&&c.contains(u.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),o.closePopover(),(s=l(o.button))==null||s.focus();break}}function F(p){var c,s,t,r,n;let b=p.relatedTarget;b&&l(o.panel)&&((c=l(o.panel))!=null&&c.contains(b)||(o.closePopover(),((t=(s=l(o.beforePanelSentinel))==null?void 0:s.contains)!=null&&t.call(s,b)||(n=(r=l(o.afterPanelSentinel))==null?void 0:r.contains)!=null&&n.call(r,b))&&b.focus({preventScroll:!0})))}let i=be();function f(){let p=l(o.panel);if(!p)return;function c(){N(i.value,{[I.Forwards]:()=>{var s;M(p,D.First)===_.Error&&((s=l(o.afterPanelSentinel))==null||s.focus())},[I.Backwards]:()=>{var s;(s=l(o.button))==null||s.focus({preventScroll:!0})}})}c()}function m(){let p=l(o.panel);if(!p)return;function c(){N(i.value,{[I.Forwards]:()=>{let s=l(o.button),t=l(o.panel);if(!s)return;let r=ne(),n=r.indexOf(s),b=r.slice(0,n+1),E=[...r.slice(n+1),...b];for(let B of E.slice())if(B.dataset.headlessuiFocusGuard==="true"||t!=null&&t.contains(B)){let R=E.indexOf(B);R!==-1&&E.splice(R,1)}M(E,D.First,{sorted:!1})},[I.Backwards]:()=>{var s;M(p,D.Previous)===_.Error&&((s=l(o.button))==null||s.focus())}})}c()}return()=>{let p={open:o.popoverState.value===0,close:o.close},{focus:c,...s}=e,t={ref:o.panel,id:w,onKeydown:g,onFocusout:a&&o.popoverState.value===0?F:void 0,tabIndex:-1};return ae({ourProps:t,theirProps:{...S,...s},attrs:S,slot:p,slots:{...y,default:(...r)=>{var n;return[O(ee,[$.value&&o.isPortalled.value&&O(Q,{id:d,ref:o.beforePanelSentinel,features:V.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:f}),(n=y.default)==null?void 0:n.call(y,...r),$.value&&o.isPortalled.value&&O(Q,{id:v,ref:o.afterPanelSentinel,features:V.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:m})])]}},features:fe.RenderStrategy|fe.Static,visible:$.value,name:"PopoverPanel"})}}});const J=Ce(ue.ui.strategy,ue.ui.popover,Ke),Ze=q({components:{HPopover:he,HPopoverButton:We,HPopoverPanel:Xe},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>J.default.openDelay},closeDelay:{type:Number,default:()=>J.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:S}){const{ui:y,attrs:T}=Re("popover",se(e,"ui"),J,se(e,"class")),h=C(()=>Ee(e.mode==="hover"?{offsetDistance:0}:{},e.popper,y.value.popper)),[w,a]=ze(h.value),o=k(null),u=k(null);let d=null,v=null;te(()=>{var m,p;const i=(m=o.value)==null?void 0:m.$.provides;if(!i)return;const f=Object.getOwnPropertySymbols(i);u.value=f.length&&i[f[0]],e.open&&((p=u.value)==null||p.togglePopover())});const P=C(()=>{var p,c,s;if(e.mode!=="hover")return{};const i=((p=e.popper)==null?void 0:p.offsetDistance)||((c=y.value.popper)==null?void 0:c.offsetDistance)||8,f=(s=h.value.placement)==null?void 0:s.split("-")[0],m=`${i}px`;return f==="top"||f==="bottom"?{paddingTop:m,paddingBottom:m}:f==="left"||f==="right"?{paddingLeft:m,paddingRight:m}:{paddingTop:m,paddingBottom:m,paddingLeft:m,paddingRight:m}});function $(){u.value&&(u.value.popoverState===0?u.value.closePopover():u.value.togglePopover())}function g(){e.mode!=="hover"||!u.value||(v&&(clearTimeout(v),v=null),u.value.popoverState!==0&&(d=d||setTimeout(()=>{u.value.togglePopover&&u.value.togglePopover(),d=null},e.openDelay)))}function F(){e.mode!=="hover"||!u.value||(d&&(clearTimeout(d),d=null),u.value.popoverState!==1&&(v=v||setTimeout(()=>{u.value.closePopover&&u.value.closePopover(),v=null},e.closeDelay)))}return ie(()=>e.open,(i,f)=>{u.value&&(f===void 0||i===f||(i?u.value.popoverState=0:u.value.closePopover()))}),ie(()=>{var i;return(i=u.value)==null?void 0:i.popoverState},(i,f)=>{f===void 0||i===f||S("update:open",i===0)}),Oe(()=>$e("$dcv2Y3vSTA")),{ui:y,attrs:T,popover:o,popper:h,trigger:w,container:a,containerStyle:P,onTouchStart:$,onMouseEnter:g,onMouseLeave:F}}}),Je=["disabled"];function Qe(e,S,y,T,h,w){const a=Y("HPopoverButton"),o=Y("HPopoverPanel"),u=Y("HPopover");return H(),pe(u,X({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:j(({open:d,close:v})=>[W(a,{ref:"trigger",as:"div",disabled:e.disabled,class:L(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstart:Te(e.onTouchStart,["prevent"])},{default:j(()=>[ve(e.$slots,"default",{open:d,close:v},()=>[ce("button",{disabled:e.disabled}," Open ",8,Je)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstart"]),e.overlay?(H(),pe(de,X({key:0,appear:""},e.ui.overlay.transition),{default:j(()=>[d?(H(),Z("div",{key:0,class:L([e.ui.overlay.base,e.ui.overlay.background])},null,2)):K("",!0)]),_:2},1040)):K("",!0),d?(H(),Z("div",{key:1,ref:"container",class:L([e.ui.container,e.ui.width]),style:Fe(e.containerStyle)},[W(de,X({appear:""},e.ui.transition),{default:j(()=>[ce("div",null,[e.popper.arrow?(H(),Z("div",{key:0,"data-popper-arrow":"",class:L(Object.values(e.ui.arrow))},null,2)):K("",!0),W(o,{class:L([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:j(()=>[ve(e.$slots,"panel",{open:d,close:v})]),_:2},1032,["class"])])]),_:2},1040)],6)):K("",!0)]),_:3},16,["class","onMouseleave"])}const it=ke(Ze,[["render",Qe]]);export{it as default};
