<<<<<<<< HEAD:.vercel/output/static/_nuxt/6AvqbR5G.js
import{c as A,i as P}from"./CLwdy1Ud.js";import{Z as T,k as f,ab as S,X as m,Y as y,$ as c,g as H,G as R,m as j,A as C,aW as k,Q as B,D as F}from"./Bc1ekGIV.js";import{a as L}from"./BfCOjykb.js";import{s as M,f as O}from"./-9-usMqW.js";import{o as h,A as b}from"./DvjvfX2V.js";function Q(e,t,o,r){A.isServer||T(s=>{e=e??window,e.addEventListener(t,o,r),s(()=>e.removeEventListener(t,o,r))})}var $=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))($||{});function X(){let e=f(0);return L("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Y({defaultContainers:e=[],portals:t,mainTreeNodeRef:o}={}){let r=f(null),s=P(r);function n(){var a,u,p;let i=[];for(let l of e)l!==null&&(l instanceof HTMLElement?i.push(l):"value"in l&&l.value instanceof HTMLElement&&i.push(l.value));if(t!=null&&t.value)for(let l of t.value)i.push(l);for(let l of(a=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?a:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(l.contains(h(r))||l.contains((p=(u=h(r))==null?void 0:u.getRootNode())==null?void 0:p.host)||i.some(v=>l.contains(v))||i.push(l));return i}return{resolveContainers:n,contains(a){return n().some(u=>u.contains(a))},mainTreeNodeRef:r,MainTreeNode(){return o!=null?null:S(O,{features:M.Hidden,ref:r})}}}let x=Symbol("ForcePortalRootContext");function G(){return c(x,!1)}let Z=m({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:o}){return y(x,e.force),()=>{let{force:r,...s}=e;return b({theirProps:s,ourProps:{},slot:{},slots:t,attrs:o,name:"ForcePortalRoot"})}}});function I(e){let t=P(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let o=t.getElementById("headlessui-portal-root");if(o)return o;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let _=m({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:o}){let r=f(null),s=H(()=>P(r)),n=G(),a=c(N,null),u=f(n===!0||a==null?I(r.value):a.resolveTarget()),p=f(!1);R(()=>{p.value=!0}),T(()=>{n||a!=null&&(u.value=a.resolveTarget())});let i=c(g,null),l=!1,v=F();return j(r,()=>{if(l||!i)return;let d=h(r);d&&(C(i.register(d),v),l=!0)}),C(()=>{var d,w;let E=(d=s.value)==null?void 0:d.getElementById("headlessui-portal-root");E&&u.value===E&&u.value.children.length<=0&&((w=u.value.parentElement)==null||w.removeChild(u.value))}),()=>{if(!p.value||u.value===null)return null;let d={ref:r,"data-headlessui-portal":""};return S(k,{to:u.value},b({ourProps:d,theirProps:e,slot:{},attrs:o,slots:t,name:"Portal"}))}}}),g=Symbol("PortalParentContext");function z(){let e=c(g,null),t=f([]);function o(n){return t.value.push(n),e&&e.register(n),()=>r(n)}function r(n){let a=t.value.indexOf(n);a!==-1&&t.value.splice(a,1),e&&e.unregister(n)}let s={register:o,unregister:r,portals:t};return[t,m({name:"PortalWrapper",setup(n,{slots:a}){return y(g,s),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}})]}let N=Symbol("PortalGroupContext"),J=m({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:o}){let r=B({resolveTarget(){return e.target}});return y(N,r),()=>{let{target:s,...n}=e;return b({theirProps:n,ourProps:{},slot:{},attrs:t,slots:o,name:"PortalGroup"})}}});export{z as A,Q as E,Y as N,_,J as a,$ as d,X as n,Z as u};
========
import{c as A,i as P}from"./D-c6Xj13.js";import{Z as C,k as f,ab as S,X as m,Y as y,$ as c,g as H,G as R,m as j,A as T,aP as k,T as B,D as F}from"./Jfc5g3KL.js";import{a as L}from"./ClVE3-Tp.js";import{s as M,f as O}from"./Dvas-1qW.js";import{o as h,A as b}from"./T1iDph84.js";function X(e,t,o,r){A.isServer||C(s=>{e=e??window,e.addEventListener(t,o,r),s(()=>e.removeEventListener(t,o,r))})}var $=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))($||{});function Y(){let e=f(0);return L("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Z({defaultContainers:e=[],portals:t,mainTreeNodeRef:o}={}){let r=f(null),s=P(r);function n(){var a,u,p;let i=[];for(let l of e)l!==null&&(l instanceof HTMLElement?i.push(l):"value"in l&&l.value instanceof HTMLElement&&i.push(l.value));if(t!=null&&t.value)for(let l of t.value)i.push(l);for(let l of(a=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?a:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(l.contains(h(r))||l.contains((p=(u=h(r))==null?void 0:u.getRootNode())==null?void 0:p.host)||i.some(v=>l.contains(v))||i.push(l));return i}return{resolveContainers:n,contains(a){return n().some(u=>u.contains(a))},mainTreeNodeRef:r,MainTreeNode(){return o!=null?null:S(O,{features:M.Hidden,ref:r})}}}let x=Symbol("ForcePortalRootContext");function G(){return c(x,!1)}let _=m({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:o}){return y(x,e.force),()=>{let{force:r,...s}=e;return b({theirProps:s,ourProps:{},slot:{},slots:t,attrs:o,name:"ForcePortalRoot"})}}});function I(e){let t=P(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let o=t.getElementById("headlessui-portal-root");if(o)return o;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let z=m({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:o}){let r=f(null),s=H(()=>P(r)),n=G(),a=c(N,null),u=f(n===!0||a==null?I(r.value):a.resolveTarget()),p=f(!1);R(()=>{p.value=!0}),C(()=>{n||a!=null&&(u.value=a.resolveTarget())});let i=c(g,null),l=!1,v=F();return j(r,()=>{if(l||!i)return;let d=h(r);d&&(T(i.register(d),v),l=!0)}),T(()=>{var d,w;let E=(d=s.value)==null?void 0:d.getElementById("headlessui-portal-root");E&&u.value===E&&u.value.children.length<=0&&((w=u.value.parentElement)==null||w.removeChild(u.value))}),()=>{if(!p.value||u.value===null)return null;let d={ref:r,"data-headlessui-portal":""};return S(k,{to:u.value},b({ourProps:d,theirProps:e,slot:{},attrs:o,slots:t,name:"Portal"}))}}}),g=Symbol("PortalParentContext");function J(){let e=c(g,null),t=f([]);function o(n){return t.value.push(n),e&&e.register(n),()=>r(n)}function r(n){let a=t.value.indexOf(n);a!==-1&&t.value.splice(a,1),e&&e.unregister(n)}let s={register:o,unregister:r,portals:t};return[t,m({name:"PortalWrapper",setup(n,{slots:a}){return y(g,s),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}})]}let N=Symbol("PortalGroupContext"),Q=m({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:o}){let r=B({resolveTarget(){return e.target}});return y(N,r),()=>{let{target:s,...n}=e;return b({theirProps:n,ourProps:{},slot:{},attrs:t,slots:o,name:"PortalGroup"})}}});export{J as A,X as E,Z as N,z as _,Q as a,$ as d,Y as n,_ as u};
>>>>>>>> dev:.vercel/output/static/_nuxt/GU3B1dDk.js
