import U from"./qzjNJ8tb.js";import{_ as O}from"./Bso8UF2o.js";import B from"./AzK7Vm18.js";import{u as H}from"./D-Y0HPah.js";import{a as N}from"./BnPPvcK5.js";import{l as w}from"./cidcNeUU.js";import{_ as z,M,g as j,N as K,o,c as a,q as s,t as u,n as l,a as b,F as q,m as A,i as y,w as S,C as v,P as L,G as P,d as T}from"./DKUbIslQ.js";import"./xY5XUOcG.js";import"./qsMMcMsd.js";import"./CgVE3mSy.js";import"./EgiXLyZY.js";import"./B_1fjTXx.js";import"./D1CEbZDt.js";import"./CB4MaYBE.js";import"./D_z8RpLm.js";import"./Ck9INWQ7.js";import"./BxYtOgr-.js";import"./jthpZqva.js";import"./CxIZtCgj.js";const V=M({components:{HComboboxOption:N,UIcon:U,UAvatar:O,UKbd:B},props:{group:{type:Object,required:!0},query:{type:String,default:""},groupAttribute:{type:String,required:!0},commandAttribute:{type:String,required:!0},selectedIcon:{type:String,required:!0},ui:{type:Object,required:!0}},setup(e){const $=j(()=>{const n=e.group[e.groupAttribute];return typeof n=="function"?n(e.query):n});function C(n,{indices:I,value:g}){if(n===g)return"";let i="",d=0;I.forEach(p=>{const r=p[1]+1,k=r-p[0]>=e.query.length;i+=[g.substring(d,p[0]),k&&"<mark>",g.substring(p[0],r),k&&"</mark>"].filter(Boolean).join(""),d=r}),i+=g.substring(d);const h=i.indexOf("<mark>");return h>60&&(i=`...${i.substring(h-60)}`),i}return w(()=>H("$xnpcKX55nb")),{label:$,highlight:C}}}),E=["aria-label"],F=["innerHTML"];function G(e,$,C,n,I,g){const i=U,d=O,h=B,p=K("HComboboxOption");return o(),a("div",{class:s(e.ui.group.wrapper)},[e.label?(o(),a("h2",{key:0,class:s(e.ui.group.label)},u(e.label),3)):l("",!0),b("div",{class:s(e.ui.group.container),"aria-label":e.group[e.groupAttribute]},[(o(!0),a(q,null,A(e.group.commands,(r,k)=>(o(),y(p,{key:`${e.group.key}-${k}`,value:r,disabled:r.disabled,as:"template"},{default:S(({active:t,selected:m})=>[b("div",{class:s([e.ui.group.command.base,t?e.ui.group.command.active:e.ui.group.command.inactive,r.disabled?"cursor-not-allowed":"cursor-pointer"])},[b("div",{class:s(e.ui.group.command.container)},[v(e.$slots,`${e.group.key}-icon`,{group:e.group,command:r,active:t,selected:m},()=>[r.icon?(o(),y(i,{key:0,name:r.icon,class:s([e.ui.group.command.icon.base,t?e.ui.group.command.icon.active:e.ui.group.command.icon.inactive,r.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):r.avatar?(o(),y(d,L({key:1},{size:e.ui.group.command.avatar.size,...r.avatar},{class:e.ui.group.command.avatar.base,"aria-hidden":"true"}),null,16,["class"])):r.chip?(o(),a("span",{key:2,class:s(e.ui.group.command.chip.base),style:P({background:`#${r.chip}`})},null,6)):l("",!0)]),b("div",{class:s([e.ui.group.command.label,r.disabled&&e.ui.group.command.disabled])},[v(e.$slots,`${e.group.key}-command`,{group:e.group,command:r,active:t,selected:m},()=>{var c,f;return[r.prefix?(o(),a("span",{key:0,class:s(["flex-shrink-0",r.prefixClass||e.ui.group.command.prefix])},u(r.prefix),3)):l("",!0),b("span",{class:s(["truncate",{"flex-none":r.suffix||((c=r.matches)==null?void 0:c.length)}])},u(r[e.commandAttribute]),3),(f=r.matches)!=null&&f.length?(o(),a("span",{key:1,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix]),innerHTML:e.highlight(r[e.commandAttribute],r.matches[0])},null,10,F)):r.suffix?(o(),a("span",{key:2,class:s(["truncate",r.suffixClass||e.ui.group.command.suffix])},u(r.suffix),3)):l("",!0)]})],2)],2),m?(o(),y(i,{key:0,name:e.selectedIcon,class:s(e.ui.group.command.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])):t&&(e.group.active||e.$slots[`${e.group.key}-active`])?v(e.$slots,`${e.group.key}-active`,{key:1,group:e.group,command:r,active:t,selected:m},()=>[e.group.active?(o(),a("span",{key:0,class:s(e.ui.group.active)},u(e.group.active),3)):l("",!0)]):v(e.$slots,`${e.group.key}-inactive`,{key:2,group:e.group,command:r,active:t,selected:m},()=>{var c;return[(c=r.shortcuts)!=null&&c.length?(o(),a("span",{key:0,class:s(e.ui.group.command.shortcuts)},[(o(!0),a(q,null,A(r.shortcuts,f=>(o(),y(h,{key:f},{default:S(()=>[T(u(f),1)]),_:2},1024))),128))],2)):!r.disabled&&e.group.inactive?(o(),a("span",{key:1,class:s(e.ui.group.inactive)},u(e.group.inactive),3)):l("",!0)]})],2)]),_:2},1032,["value","disabled"]))),128))],10,E)],2)}const pe=z(V,[["render",G]]);export{pe as default};
