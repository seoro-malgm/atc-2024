import{_ as oe}from"./xyAmNv1h.js";import ue from"./BiXZ8nkU.js";import{_ as le}from"./CevkZQfT.js";import re from"./FqhXVvv1.js";import{u as me}from"./DlWTm6wJ.js";import{Q as N,l as w,g as R,R as fe,x as se,J as ge,S as be,a7 as A,T as Me,_ as Ie,U as ye,V as X,W as Y,a8 as he,n as x,a1 as Se,a2 as ke,j as B,o as S,i as O,w as P,b as L,v as T,D as ee,a as z,c as D,K as we,Z as Re,$ as F,s as H,F as J,q as _,r as Te,t as te,d as Pe}from"./D150JvhY.js";import{o as I,u as De,A as U,I as q,N as ae,a as b,l as $e}from"./4ffrKX4p.js";import{w as Ce}from"./CafzHAWC.js";import{s as Oe}from"./C6FCHUI4.js";import{p as Ae}from"./C5jALmO9.js";import{i as Ne,u as Ee,f as Be,c as k}from"./DsnW6643.js";import{t as Le,i as j,l as Fe}from"./fTFm7FM9.js";import{w as He,h as je,v as Ue,N as ne,_ as ie,O as Ke}from"./C9jZCsJU.js";import{u as ze,d as Je}from"./C1kXnlyv.js";import{u as _e}from"./Bz0iyGbt.js";import{g as Ve}from"./aPxrJPp6.js";import"./CSpD4ZiK.js";import"./qsMMcMsd.js";import"./rif7_mvO.js";var qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(qe||{}),Qe=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Qe||{});function We(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let de=Symbol("MenuContext");function K(e){let f=Me(de,null);if(f===null){let g=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(g,K),g}return f}let Ze=N({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:f,attrs:g}){let M=w(1),v=w(null),m=w(null),t=w([]),o=w(""),s=w(null),p=w(1);function y(a=r=>r){let r=s.value!==null?t.value[s.value]:null,u=Ke(a(t.value.slice()),l=>I(l.dataRef.domRef)),i=r?u.indexOf(r):null;return i===-1&&(i=null),{items:u,activeItemIndex:i}}let d={menuState:M,buttonRef:v,itemsRef:m,items:t,searchQuery:o,activeItemIndex:s,activationTrigger:p,closeMenu:()=>{M.value=1,s.value=null},openMenu:()=>M.value=0,goToItem(a,r,u){let i=y(),l=Be(a===k.Specific?{focus:k.Specific,id:r}:{focus:a},{resolveItems:()=>i.items,resolveActiveIndex:()=>i.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});o.value="",s.value=l,p.value=u??1,t.value=i.items},search(a){let r=o.value!==""?0:1;o.value+=a.toLowerCase();let u=(s.value!==null?t.value.slice(s.value+r).concat(t.value.slice(0,s.value+r)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),i=u?t.value.indexOf(u):-1;i===-1||i===s.value||(s.value=i,p.value=1)},clearSearch(){o.value=""},registerItem(a,r){let u=y(i=>[...i,{id:a,dataRef:r}]);t.value=u.items,s.value=u.activeItemIndex,p.value=1},unregisterItem(a){let r=y(u=>{let i=u.findIndex(l=>l.id===a);return i!==-1&&u.splice(i,1),u});t.value=r.items,s.value=r.activeItemIndex,p.value=1}};return Ce([v,m],(a,r)=>{var u;d.closeMenu(),He(r,je.Loose)||(a.preventDefault(),(u=I(v))==null||u.focus())},R(()=>M.value===0)),fe(de,d),Le(R(()=>De(M.value,{0:j.Open,1:j.Closed}))),()=>{let a={open:M.value===0,close:d.closeMenu};return U({ourProps:{},theirProps:e,slot:a,slots:f,attrs:g,name:"Menu"})}}}),Ge=N({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:f,slots:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-button-${q()}`,t=K("MenuButton");M({el:t.buttonRef,$el:t.buttonRef});function o(d){switch(d.key){case b.Space:case b.Enter:case b.ArrowDown:d.preventDefault(),d.stopPropagation(),t.openMenu(),A(()=>{var a;(a=I(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.First)});break;case b.ArrowUp:d.preventDefault(),d.stopPropagation(),t.openMenu(),A(()=>{var a;(a=I(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function s(d){switch(d.key){case b.Space:d.preventDefault();break}}function p(d){e.disabled||(t.menuState.value===0?(t.closeMenu(),A(()=>{var a;return(a=I(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),t.openMenu(),We(()=>{var a;return(a=I(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let y=Oe(R(()=>({as:e.as,type:f.type})),t.buttonRef);return()=>{var d;let a={open:t.menuState.value===0},{...r}=e,u={ref:t.buttonRef,id:m,type:y.value,"aria-haspopup":"menu","aria-controls":(d=I(t.itemsRef))==null?void 0:d.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:s,onClick:p};return U({ourProps:u,theirProps:r,slot:a,attrs:f,slots:g,name:"MenuButton"})}}}),Xe=N({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:f,slots:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-items-${q()}`,t=K("MenuItems"),o=w(null);M({el:t.itemsRef,$el:t.itemsRef}),Ne({container:R(()=>I(t.itemsRef)),enabled:R(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var r;switch(o.value&&clearTimeout(o.value),a.key){case b.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case b.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(r=I(u.dataRef.domRef))==null||r.click()}t.closeMenu(),ie(I(t.buttonRef));break;case b.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Next);case b.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Previous);case b.Home:case b.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.First);case b.End:case b.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Last);case b.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>{var u;return(u=I(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case b.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>Ue(I(t.buttonRef),a.shiftKey?ne.Previous:ne.Next));break;default:a.key.length===1&&(t.search(a.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case b.Space:a.preventDefault();break}}let y=Fe(),d=R(()=>y!==null?(y.value&j.Open)===j.Open:t.menuState.value===0);return()=>{var a,r;let u={open:t.menuState.value===0},{...i}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(r=I(t.buttonRef))==null?void 0:r.id,id:m,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return U({ourProps:l,theirProps:i,slot:u,attrs:f,slots:g,features:ae.RenderStrategy|ae.Static,visible:d.value,name:"MenuItems"})}}}),Ye=N({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:f,attrs:g,expose:M}){var v;let m=(v=e.id)!=null?v:`headlessui-menu-item-${q()}`,t=K("MenuItem"),o=w(null);M({el:o,$el:o});let s=R(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===m:!1),p=Ae(o),y=R(()=>({disabled:e.disabled,get textValue(){return p()},domRef:o}));se(()=>t.registerItem(m,y)),ge(()=>t.unregisterItem(m)),be(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&A(()=>{var n,c;return(c=(n=I(o))==null?void 0:n.scrollIntoView)==null?void 0:c.call(n,{block:"nearest"})})});function d(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ie(I(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,m)}let r=Ee();function u(n){r.update(n)}function i(n){r.wasMoved(n)&&(e.disabled||s.value||t.goToItem(k.Specific,m,0))}function l(n){r.wasMoved(n)&&(e.disabled||s.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:n}=e,c={active:s.value,disabled:n,close:t.closeMenu},{...h}=e;return U({ourProps:{id:m,ref:o,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:d,onFocus:a,onPointerenter:u,onMouseenter:u,onPointermove:i,onMousemove:i,onPointerleave:l,onMouseleave:l},theirProps:{...g,...h},slot:c,attrs:g,slots:f,name:"MenuItem"})}}});const V=ye(X.ui.strategy,X.ui.dropdown,Je),xe=N({components:{HMenu:Ze,HMenuButton:Ge,HMenuItems:Xe,HMenuItem:Ye,UIcon:ue,UAvatar:le,UKbd:re},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>V.default.openDelay},closeDelay:{type:Number,default:()=>V.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:f}){const{ui:g,attrs:M}=ze("dropdown",Y(e,"ui"),V,Y(e,"class")),v=R(()=>he(e.mode==="hover"?{offsetDistance:0}:{},e.popper,g.value.popper)),[m,t]=_e(v.value),o=w(null);let s=null,p=null;se(()=>{var c,h;const l=(c=m.value)==null?void 0:c.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);o.value=n.length&&l[n[0]],e.open&&((h=o.value)==null||h.openMenu())});const y=R(()=>{var h,$,C;if(e.mode!=="hover")return{};const l=((h=e.popper)==null?void 0:h.offsetDistance)||(($=g.value.popper)==null?void 0:$.offsetDistance)||8,n=(C=v.value.placement)==null?void 0:C.split("-")[0],c=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:c,paddingBottom:c}:n==="left"||n==="right"?{paddingLeft:c,paddingRight:c}:{paddingTop:c,paddingBottom:c,paddingLeft:c,paddingRight:c}});function d(){o.value&&(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function a(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(s=s||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),s=null},e.openDelay)))}function r(){e.mode!=="hover"||!o.value||(s&&(clearTimeout(s),s=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}function u(l,n,{href:c,navigate:h,close:$,isExternal:C}){n.click&&n.click(l),c&&!C&&(h(l),$())}x(()=>e.open,(l,n)=>{o.value&&(n===void 0||l===n||(l?o.value.openMenu():o.value.closeMenu()))}),x(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||f("update:open",l===0)});const i=oe;return $e(()=>me("$ctlRmIk4j0")),{ui:g,attrs:M,popper:v,trigger:m,container:t,containerStyle:y,onTouchStart:d,onMouseEnter:a,onMouseLeave:r,onClick:u,getNuxtLinkProps:Ve,twMerge:Se,twJoin:ke,NuxtLink:i}}}),et=["disabled"];function tt(e,f,g,M,v,m){const t=B("HMenuButton"),o=ue,s=le,p=re,y=B("HMenuItem"),d=oe,a=B("HMenuItems"),r=B("HMenu");return S(),O(r,F({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:P(({open:u})=>[L(t,{ref:"trigger",as:"div",disabled:e.disabled,class:T(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:P(()=>[ee(e.$slots,"default",{open:u,disabled:e.disabled},()=>[z("button",{disabled:e.disabled}," Open ",8,et)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),u&&e.items.length?(S(),D("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:we(e.containerStyle),onMouseenter:f[0]||(f[0]=(...i)=>e.onMouseEnter&&e.onMouseEnter(...i))},[L(Re,F({appear:""},e.ui.transition),{default:P(()=>[z("div",null,[e.popper.arrow?(S(),D("div",{key:0,"data-popper-arrow":"",class:T(Object.values(e.ui.arrow))},null,2)):H("",!0),L(a,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:P(()=>[(S(!0),D(J,null,_(e.items,(i,l)=>(S(),D("div",{key:l,class:T(e.ui.padding)},[(S(!0),D(J,null,_(i,(n,c)=>(S(),O(d,F({key:c},e.getNuxtLinkProps(n),{custom:""}),{default:P(({href:h,target:$,rel:C,navigate:pe,isExternal:ce,isActive:Q})=>[L(y,{disabled:n.disabled},{default:P(({active:W,disabled:Z,close:ve})=>[(S(),O(Te(h?"a":"button"),{href:Z?void 0:h,rel:C,target:$,class:T(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,W||Q?e.ui.item.active:e.ui.item.inactive,Z&&e.ui.item.disabled),n.class)),onClick:E=>e.onClick(E,n,{href:h,navigate:pe,close:ve,isExternal:ce})},{default:P(()=>[ee(e.$slots,n.slot||"item",{item:n},()=>{var E;return[n.icon?(S(),O(o,{key:0,name:n.icon,class:T(e.twMerge(e.twJoin(e.ui.item.icon.base,W||Q?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(S(),O(s,F({key:1},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):H("",!0),z("span",{class:T(e.twMerge(e.ui.item.label,n.labelClass))},te(n.label),3),(E=n.shortcuts)!=null&&E.length?(S(),D("span",{key:2,class:T(e.ui.item.shortcuts)},[(S(!0),D(J,null,_(n.shortcuts,G=>(S(),O(p,{key:G},{default:P(()=>[Pe(te(G),1)]),_:2},1024))),128))],2)):H("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],38)):H("",!0)]),_:3},16,["class","onMouseleave"])}const ht=Ie(xe,[["render",tt]]);export{ht as default};
