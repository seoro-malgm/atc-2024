import{X as D,y as F,g as l,a9 as H,aa as K,a8 as p,ab as i,a0 as I,a1 as g}from"./B9edyuLz.js";import _ from"./d2DRL3oH.js";import{u as A}from"./Bya3ph3U.js";import{m as L}from"./DOl6dAT8.js";import"./Bwugh9D7.js";import"./qsMMcMsd.js";const Q={wrapper:"flex flex-col gap-2 w-full",base:"flex flex-row flex-nowrap flex-shrink overflow-hidden",background:"bg-gray-200 dark:bg-gray-700",transition:"transition-all",rounded:"rounded-full",shadow:"",list:"list-disc list-inside",orientation:{"rounded-none":{left:"rounded-s-none",right:"rounded-e-none"},"rounded-sm":{left:"rounded-s-sm",right:"rounded-e-sm"},rounded:{left:"rounded-s",right:"rounded-e"},"rounded-md":{left:"rounded-s-md",right:"rounded-e-md"},"rounded-lg":{left:"rounded-s-lg",right:"rounded-e-lg"},"rounded-xl":{left:"rounded-s-xl",right:"rounded-e-xl"},"rounded-2xl":{left:"rounded-s-2xl",right:"rounded-e-2xl"},"rounded-3xl":{left:"rounded-s-3xl",right:"rounded-e-3xl"},"rounded-full":{left:"rounded-s-full",right:"rounded-e-full"}},default:{size:"md",icon:"i-heroicons-minus-20-solid"}},x=I(g.ui.strategy,g.ui.meter,L),B=I(g.ui.strategy,g.ui.meterGroup,Q),te=D({components:{UIcon:_},inheritAttrs:!1,slots:Object,props:{min:{type:Number,default:0},max:{type:Number,default:100},size:{type:String,default:()=>x.default.size,validator(t){return Object.keys(x.meter.bar.size).includes(t)}},indicator:{type:Boolean,default:!1},icon:{type:String,default:()=>B.default.icon},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t,{slots:m}){const{ui:o,attrs:P}=A("meterGroup",F(t,"ui"),B),{ui:n}=A("meter",void 0,x);if(!m.default)throw new Error("Meter Group has no Meter children.");const U=l(()=>t.min>t.max?t.max:t.min),E=l(()=>t.max<t.min?t.min:t.max),v=l(()=>H(m)),w=l(()=>o.value.orientation[o.value.rounded]);function J(r,a,e){if(a==e)return r<a?0:100;a>e&&(e=[a,a=e][0]);const u=(r-a)/(e-a)*100;return Math.max(0,Math.min(100,u))}const z=l(()=>v.value.map(r=>r.props.label)),h=l(()=>v.value.map(r=>J(r.props.value,t.min,t.max))),b=l(()=>Math.max(0,Math.max(h.value.reduce((r,a)=>r+a,0)))),f=l(()=>v.value.map((r,a)=>{var d,s,c,y,C,M,$,G,j,k,N,S,O;const e={};e.style={width:`${h.value[a]}%`},e.size=t.size,e.min=U.value,e.max=E.value,e.ui=((d=r.props)==null?void 0:d.ui)||{},e.ui.wrapper=((c=(s=r.props)==null?void 0:s.ui)==null?void 0:c.wrapper)||"",e.ui.wrapper+=[(C=(y=r.props)==null?void 0:y.ui)==null?void 0:C.wrapper,o.value.background,o.value.transition].filter(Boolean).join(" "),e.ui.meter=(($=(M=r.props)==null?void 0:M.ui)==null?void 0:$.meter)||{},e.ui.meter.background=`bg-${r.props.color}-500 dark:bg-${r.props.color}-400`,e.ui.meter.rounded="rounded-none",e.ui.meter.bar=((k=(j=(G=r.props)==null?void 0:G.ui)==null?void 0:j.meter)==null?void 0:k.bar)||{},a===0&&(e.ui.meter.rounded=`${w.value.left} rounded-e-none`),a===v.value.length-1&&(e.ui.meter.rounded=`${w.value.right} rounded-s-none`),z.value[a]=r.props.label;const u=K(r,e);return(N=u.children)==null||delete N.label,(S=u.props)==null||delete S.indicator,(O=u.props)==null||delete O.label,u})),R=l(()=>p(o.value.base,o.value.background,o.value.rounded,o.value.shadow,n.value.meter.size[t.size])),V=l(()=>p(n.value.indicator.container)),X=l(()=>p(n.value.indicator.text,n.value.indicator.size[t.size])),q=l(()=>{const r=[void 0,i("div",{class:R.value},f.value),void 0];return t.indicator?r[0]=i("div",{class:V.value},[i("div",{class:X.value,style:{width:`${b.value}%`}},Math.round(b.value)+"%")]):m.indicator&&(r[0]=m.indicator({percent:b.value})),r[2]=i("ol",{class:o.value.list},z.value.map((a,e)=>{var d;const u=l(()=>{var s,c;return p(n.value.label.base,n.value.label.text,n.value.color[(s=f.value[e])==null?void 0:s.props.color]??n.value.label.color.replaceAll("{color}",((c=f.value[e])==null?void 0:c.props.color)??n.value.default.color),n.value.label.size[t.size])});return i("li",{class:u.value},[i(_,{name:((d=f.value[e])==null?void 0:d.props.icon)??t.icon}),`${a} (${Math.round(h.value[e])}%)`])})),r});return()=>i("div",{class:o.value.wrapper,...P.value},q.value)}});export{te as default};
