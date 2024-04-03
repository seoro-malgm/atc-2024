import{_ as oe}from"./8jGkXlRK.js";import ue from"./BsPl96NA.js";import{_ as le}from"./CVTTr9UF.js";import re from"./qcLGSPv4.js";import{u as ve}from"./KW1kIYRg.js";import{X as N,k as w,g as R,Y as fe,G as se,A as ge,Z as be,ad as A,$ as Me,_ as ye,a0 as Ie,a1 as X,y as Y,ae as he,m as x,a7 as Se,a8 as ke,j as E,o as S,i as O,w as P,b as L,s as T,H as we,M as ee,a as K,c as D,R as Re,a4 as Te,a5 as H,q as F,F as z,n as J,r as Pe,t as te,d as De}from"./1IHVEBxC.js";import{o as M,u as $e,A as U,I as V,N as ae,a as g,l as Ce}from"./DN_PNx8T.js";import{w as Oe}from"./DNTx5Bqo.js";import{s as Ae}from"./Eo9r3gyG.js";import{p as Ne}from"./C9PUrMXf.js";import{i as Be,u as Ee,f as Le,c as k}from"./LCUq8Huf.js";import{t as He,i as j,l as Fe}from"./7PnFJHNt.js";import{w as je,h as Ue,v as _e,N as ne,_ as ie,O as Ke}from"./CfN6W14o.js";import{u as ze,d as Je}from"./BXwofNuU.js";import{u as qe}from"./BpCuQnTt.js";import{g as Ve}from"./aPxrJPp6.js";import"./DupG13Te.js";import"./qsMMcMsd.js";import"./33hrKeiM.js";var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{}),Ze=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ze||{});function Ge(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let de=Symbol("MenuContext");function _(e){let y=Me(de,null);if(y===null){let f=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,_),f}return y}let We=N({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:y,attrs:f}){let b=w(1),m=w(null),v=w(null),t=w([]),o=w(""),s=w(null),p=w(1);function I(a=r=>r){let r=s.value!==null?t.value[s.value]:null,u=Ke(a(t.value.slice()),l=>M(l.dataRef.domRef)),d=r?u.indexOf(r):null;return d===-1&&(d=null),{items:u,activeItemIndex:d}}let i={menuState:b,buttonRef:m,itemsRef:v,items:t,searchQuery:o,activeItemIndex:s,activationTrigger:p,closeMenu:()=>{b.value=1,s.value=null},openMenu:()=>b.value=0,goToItem(a,r,u){let d=I(),l=Le(a===k.Specific?{focus:k.Specific,id:r}:{focus:a},{resolveItems:()=>d.items,resolveActiveIndex:()=>d.activeItemIndex,resolveId:n=>n.id,resolveDisabled:n=>n.dataRef.disabled});o.value="",s.value=l,p.value=u??1,t.value=d.items},search(a){let r=o.value!==""?0:1;o.value+=a.toLowerCase();let u=(s.value!==null?t.value.slice(s.value+r).concat(t.value.slice(0,s.value+r)):t.value).find(l=>l.dataRef.textValue.startsWith(o.value)&&!l.dataRef.disabled),d=u?t.value.indexOf(u):-1;d===-1||d===s.value||(s.value=d,p.value=1)},clearSearch(){o.value=""},registerItem(a,r){let u=I(d=>[...d,{id:a,dataRef:r}]);t.value=u.items,s.value=u.activeItemIndex,p.value=1},unregisterItem(a){let r=I(u=>{let d=u.findIndex(l=>l.id===a);return d!==-1&&u.splice(d,1),u});t.value=r.items,s.value=r.activeItemIndex,p.value=1}};return Oe([m,v],(a,r)=>{var u;i.closeMenu(),je(r,Ue.Loose)||(a.preventDefault(),(u=M(m))==null||u.focus())},R(()=>b.value===0)),fe(de,i),He(R(()=>$e(b.value,{0:j.Open,1:j.Closed}))),()=>{let a={open:b.value===0,close:i.closeMenu};return U({ourProps:{},theirProps:e,slot:a,slots:y,attrs:f,name:"Menu"})}}}),Xe=N({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:y,slots:f,expose:b}){var m;let v=(m=e.id)!=null?m:`headlessui-menu-button-${V()}`,t=_("MenuButton");b({el:t.buttonRef,$el:t.buttonRef});function o(i){switch(i.key){case g.Space:case g.Enter:case g.ArrowDown:i.preventDefault(),i.stopPropagation(),t.openMenu(),A(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.First)});break;case g.ArrowUp:i.preventDefault(),i.stopPropagation(),t.openMenu(),A(()=>{var a;(a=M(t.itemsRef))==null||a.focus({preventScroll:!0}),t.goToItem(k.Last)});break}}function s(i){switch(i.key){case g.Space:i.preventDefault();break}}function p(i){e.disabled||(t.menuState.value===0?(t.closeMenu(),A(()=>{var a;return(a=M(t.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(i.preventDefault(),t.openMenu(),Ge(()=>{var a;return(a=M(t.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let I=Ae(R(()=>({as:e.as,type:y.type})),t.buttonRef);return()=>{var i;let a={open:t.menuState.value===0},{...r}=e,u={ref:t.buttonRef,id:v,type:I.value,"aria-haspopup":"menu","aria-controls":(i=M(t.itemsRef))==null?void 0:i.id,"aria-expanded":t.menuState.value===0,onKeydown:o,onKeyup:s,onClick:p};return U({ourProps:u,theirProps:r,slot:a,attrs:y,slots:f,name:"MenuButton"})}}}),Ye=N({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:y,slots:f,expose:b}){var m;let v=(m=e.id)!=null?m:`headlessui-menu-items-${V()}`,t=_("MenuItems"),o=w(null);b({el:t.itemsRef,$el:t.itemsRef}),Be({container:R(()=>M(t.itemsRef)),enabled:R(()=>t.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function s(a){var r;switch(o.value&&clearTimeout(o.value),a.key){case g.Space:if(t.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),t.search(a.key);case g.Enter:if(a.preventDefault(),a.stopPropagation(),t.activeItemIndex.value!==null){let u=t.items.value[t.activeItemIndex.value];(r=M(u.dataRef.domRef))==null||r.click()}t.closeMenu(),ie(M(t.buttonRef));break;case g.ArrowDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Next);case g.ArrowUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Previous);case g.Home:case g.PageUp:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.First);case g.End:case g.PageDown:return a.preventDefault(),a.stopPropagation(),t.goToItem(k.Last);case g.Escape:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>{var u;return(u=M(t.buttonRef))==null?void 0:u.focus({preventScroll:!0})});break;case g.Tab:a.preventDefault(),a.stopPropagation(),t.closeMenu(),A(()=>_e(M(t.buttonRef),a.shiftKey?ne.Previous:ne.Next));break;default:a.key.length===1&&(t.search(a.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}function p(a){switch(a.key){case g.Space:a.preventDefault();break}}let I=Fe(),i=R(()=>I!==null?(I.value&j.Open)===j.Open:t.menuState.value===0);return()=>{var a,r;let u={open:t.menuState.value===0},{...d}=e,l={"aria-activedescendant":t.activeItemIndex.value===null||(a=t.items.value[t.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(r=M(t.buttonRef))==null?void 0:r.id,id:v,onKeydown:s,onKeyup:p,role:"menu",tabIndex:0,ref:t.itemsRef};return U({ourProps:l,theirProps:d,slot:u,attrs:y,slots:f,features:ae.RenderStrategy|ae.Static,visible:i.value,name:"MenuItems"})}}}),xe=N({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:y,attrs:f,expose:b}){var m;let v=(m=e.id)!=null?m:`headlessui-menu-item-${V()}`,t=_("MenuItem"),o=w(null);b({el:o,$el:o});let s=R(()=>t.activeItemIndex.value!==null?t.items.value[t.activeItemIndex.value].id===v:!1),p=Ne(o),I=R(()=>({disabled:e.disabled,get textValue(){return p()},domRef:o}));se(()=>t.registerItem(v,I)),ge(()=>t.unregisterItem(v)),be(()=>{t.menuState.value===0&&s.value&&t.activationTrigger.value!==0&&A(()=>{var n,c;return(c=(n=M(o))==null?void 0:n.scrollIntoView)==null?void 0:c.call(n,{block:"nearest"})})});function i(n){if(e.disabled)return n.preventDefault();t.closeMenu(),ie(M(t.buttonRef))}function a(){if(e.disabled)return t.goToItem(k.Nothing);t.goToItem(k.Specific,v)}let r=Ee();function u(n){r.update(n)}function d(n){r.wasMoved(n)&&(e.disabled||s.value||t.goToItem(k.Specific,v,0))}function l(n){r.wasMoved(n)&&(e.disabled||s.value&&t.goToItem(k.Nothing))}return()=>{let{disabled:n}=e,c={active:s.value,disabled:n,close:t.closeMenu},{...h}=e;return U({ourProps:{id:v,ref:o,role:"menuitem",tabIndex:n===!0?void 0:-1,"aria-disabled":n===!0?!0:void 0,disabled:void 0,onClick:i,onFocus:a,onPointerenter:u,onMouseenter:u,onPointermove:d,onMousemove:d,onPointerleave:l,onMouseleave:l},theirProps:{...f,...h},slot:c,attrs:f,slots:y,name:"MenuItem"})}}});const q=Ie(X.ui.strategy,X.ui.dropdown,Je),et=N({components:{HMenu:We,HMenuButton:Xe,HMenuItems:Ye,HMenuItem:xe,UIcon:ue,UAvatar:le,UKbd:re},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},openDelay:{type:Number,default:()=>q.default.openDelay},closeDelay:{type:Number,default:()=>q.default.closeDelay},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:y}){const{ui:f,attrs:b}=ze("dropdown",Y(e,"ui"),q,Y(e,"class")),m=R(()=>he(e.mode==="hover"?{offsetDistance:0}:{},e.popper,f.value.popper)),[v,t]=qe(m.value),o=w(null);let s=null,p=null;se(()=>{var c,h;const l=(c=v.value)==null?void 0:c.$.provides;if(!l)return;const n=Object.getOwnPropertySymbols(l);o.value=n.length&&l[n[0]],e.open&&((h=o.value)==null||h.openMenu())});const I=R(()=>{var h,$,C;if(e.mode!=="hover")return{};const l=((h=e.popper)==null?void 0:h.offsetDistance)||(($=f.value.popper)==null?void 0:$.offsetDistance)||8,n=(C=m.value.placement)==null?void 0:C.split("-")[0],c=`${l}px`;return n==="top"||n==="bottom"?{paddingTop:c,paddingBottom:c}:n==="left"||n==="right"?{paddingLeft:c,paddingRight:c}:{paddingTop:c,paddingBottom:c,paddingLeft:c,paddingRight:c}});function i(){o.value&&(o.value.menuState===0?o.value.closeMenu():o.value.openMenu())}function a(){e.mode!=="hover"||!o.value||(p&&(clearTimeout(p),p=null),o.value.menuState!==0&&(s=s||setTimeout(()=>{o.value.openMenu&&o.value.openMenu(),s=null},e.openDelay)))}function r(){e.mode!=="hover"||!o.value||(s&&(clearTimeout(s),s=null),o.value.menuState!==1&&(p=p||setTimeout(()=>{o.value.closeMenu&&o.value.closeMenu(),p=null},e.closeDelay)))}function u(l,n,{href:c,navigate:h,close:$,isExternal:C}){n.click&&n.click(l),c&&!C&&(h(l),$())}x(()=>e.open,(l,n)=>{o.value&&(n===void 0||l===n||(l?o.value.openMenu():o.value.closeMenu()))}),x(()=>{var l;return(l=o.value)==null?void 0:l.menuState},(l,n)=>{n===void 0||l===n||y("update:open",l===0)});const d=oe;return Ce(()=>ve("$ctlRmIk4j0")),{ui:f,attrs:b,popper:m,trigger:v,container:t,containerStyle:I,onTouchStart:i,onMouseEnter:a,onMouseLeave:r,onClick:u,getNuxtLinkProps:Ve,twMerge:Se,twJoin:ke,NuxtLink:d}}}),tt=["disabled"];function at(e,y,f,b,m,v){const t=E("HMenuButton"),o=ue,s=le,p=re,I=E("HMenuItem"),i=oe,a=E("HMenuItems"),r=E("HMenu");return S(),O(r,H({as:"div",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:P(({open:u})=>[L(t,{ref:"trigger",as:"div",disabled:e.disabled,class:T(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstart:we(e.onTouchStart,["prevent"])},{default:P(()=>[ee(e.$slots,"default",{open:u,disabled:e.disabled},()=>[K("button",{disabled:e.disabled}," Open ",8,tt)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstart"]),u&&e.items.length?(S(),D("div",{key:0,ref:"container",class:T([e.ui.container,e.ui.width]),style:Re(e.containerStyle)},[L(Te,H({appear:""},e.ui.transition),{default:P(()=>[K("div",null,[e.popper.arrow?(S(),D("div",{key:0,"data-popper-arrow":"",class:T(Object.values(e.ui.arrow))},null,2)):F("",!0),L(a,{class:T([e.ui.base,e.ui.divide,e.ui.ring,e.ui.rounded,e.ui.shadow,e.ui.background,e.ui.height]),static:""},{default:P(()=>[(S(!0),D(z,null,J(e.items,(d,l)=>(S(),D("div",{key:l,class:T(e.ui.padding)},[(S(!0),D(z,null,J(d,(n,c)=>(S(),O(i,H({key:c},e.getNuxtLinkProps(n),{custom:""}),{default:P(({href:h,target:$,rel:C,navigate:pe,isExternal:ce,isActive:Q})=>[L(I,{disabled:n.disabled},{default:P(({active:Z,disabled:G,close:me})=>[(S(),O(Pe(h?"a":"button"),{href:G?void 0:h,rel:C,target:$,class:T(e.twMerge(e.twJoin(e.ui.item.base,e.ui.item.padding,e.ui.item.size,e.ui.item.rounded,Z||Q?e.ui.item.active:e.ui.item.inactive,G&&e.ui.item.disabled),n.class)),onClick:B=>e.onClick(B,n,{href:h,navigate:pe,close:me,isExternal:ce})},{default:P(()=>[ee(e.$slots,n.slot||"item",{item:n},()=>{var B;return[n.icon?(S(),O(o,{key:0,name:n.icon,class:T(e.twMerge(e.twJoin(e.ui.item.icon.base,Z||Q?e.ui.item.icon.active:e.ui.item.icon.inactive),n.iconClass))},null,8,["name","class"])):n.avatar?(S(),O(s,H({key:1},{size:e.ui.item.avatar.size,...n.avatar},{class:e.ui.item.avatar.base}),null,16,["class"])):F("",!0),K("span",{class:T(e.twMerge(e.ui.item.label,n.labelClass))},te(n.label),3),(B=n.shortcuts)!=null&&B.length?(S(),D("span",{key:2,class:T(e.ui.item.shortcuts)},[(S(!0),D(z,null,J(n.shortcuts,W=>(S(),O(p,{key:W},{default:P(()=>[De(te(W),1)]),_:2},1024))),128))],2)):F("",!0)]})]),_:2},1032,["href","rel","target","class","onClick"]))]),_:2},1032,["disabled"])]),_:2},1040))),128))],2))),128))]),_:3},8,["class"])])]),_:3},16)],6)):F("",!0)]),_:3},16,["class","onMouseleave"])}const St=ye(et,[["render",at]]);export{St as default};
