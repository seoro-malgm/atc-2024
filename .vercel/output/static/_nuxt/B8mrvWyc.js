import{c as N,i as P}from"./D1CEbZDt.js";import{W as C,j as f,a9 as S,M as m,S as y,T as c,g as j,s as M,l as R,I as T,aU as A,H as B,as as F}from"./DKUbIslQ.js";import{a as I}from"./B_1fjTXx.js";import{s as L,f as O}from"./Ck9INWQ7.js";import{o as h,A as w}from"./cidcNeUU.js";function _(e,t,o,r){N.isServer||C(s=>{e=e??window,e.addEventListener(t,o,r),s(()=>e.removeEventListener(t,o,r))})}var k=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(k||{});function z(){let e=f(0);return I("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function J({defaultContainers:e=[],portals:t,mainTreeNodeRef:o}={}){let r=f(null),s=P(r);function n(){var a,u,p;let i=[];for(let l of e)l!==null&&(l instanceof HTMLElement?i.push(l):"value"in l&&l.value instanceof HTMLElement&&i.push(l.value));if(t!=null&&t.value)for(let l of t.value)i.push(l);for(let l of(a=s==null?void 0:s.querySelectorAll("html > *, body > *"))!=null?a:[])l!==document.body&&l!==document.head&&l instanceof HTMLElement&&l.id!=="headlessui-portal-root"&&(l.contains(h(r))||l.contains((p=(u=h(r))==null?void 0:u.getRootNode())==null?void 0:p.host)||i.some(v=>l.contains(v))||i.push(l));return i}return{resolveContainers:n,contains(a){return n().some(u=>u.contains(a))},mainTreeNodeRef:r,MainTreeNode(){return o!=null?null:S(O,{features:L.Hidden,ref:r})}}}let x=Symbol("ForcePortalRootContext");function $(){return c(x,!1)}let Q=m({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:o}){return y(x,e.force),()=>{let{force:r,...s}=e;return w({theirProps:s,ourProps:{},slot:{},slots:t,attrs:o,name:"ForcePortalRoot"})}}});function G(e){let t=P(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let o=t.getElementById("headlessui-portal-root");if(o)return o;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let V=m({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:o}){let r=f(null),s=j(()=>P(r)),n=$(),a=c(H,null),u=f(n===!0||a==null?G(r.value):a.resolveTarget()),p=f(!1);M(()=>{p.value=!0}),C(()=>{n||a!=null&&(u.value=a.resolveTarget())});let i=c(g,null),l=!1,v=F();return R(r,()=>{if(l||!i)return;let d=h(r);d&&(T(i.register(d),v),l=!0)}),T(()=>{var d,E;let b=(d=s.value)==null?void 0:d.getElementById("headlessui-portal-root");b&&u.value===b&&u.value.children.length<=0&&((E=u.value.parentElement)==null||E.removeChild(u.value))}),()=>{if(!p.value||u.value===null)return null;let d={ref:r,"data-headlessui-portal":""};return S(A,{to:u.value},w({ourProps:d,theirProps:e,slot:{},attrs:o,slots:t,name:"Portal"}))}}}),g=Symbol("PortalParentContext");function X(){let e=c(g,null),t=f([]);function o(n){return t.value.push(n),e&&e.register(n),()=>r(n)}function r(n){let a=t.value.indexOf(n);a!==-1&&t.value.splice(a,1),e&&e.unregister(n)}let s={register:o,unregister:r,portals:t};return[t,m({name:"PortalWrapper",setup(n,{slots:a}){return y(g,s),()=>{var u;return(u=a.default)==null?void 0:u.call(a)}}})]}let H=Symbol("PortalGroupContext"),Y=m({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:o}){let r=B({resolveTarget(){return e.target}});return y(H,r),()=>{let{target:s,...n}=e;return w({theirProps:n,ourProps:{},slot:{},attrs:t,slots:o,name:"PortalGroup"})}}});export{X as A,_ as E,J as N,V as _,Y as a,k as d,z as n,Q as u};
