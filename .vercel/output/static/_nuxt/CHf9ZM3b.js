import{r as d,E as l,ay as a,H as c,k as t,m as o,q as v}from"./DFjfPBi9.js";function f(i){const r=`group-${a().uid}`,n=d({children:[],register(e){this.children.push(e)},unregister(e){const u=this.children.indexOf(e);u>-1&&this.children.splice(u,1)},...i});l(r,n)}function p({ui:i,props:s}){const r=a();let n=r.parent,e;for(;n&&!e;){if(n.type.name==="ButtonGroup"){e=c(`group-${n.uid}`);break}n=n.parent}const u=t(()=>e==null?void 0:e.value.children.indexOf(r));return o(()=>{e==null||e.value.register(r)}),v(()=>{e==null||e.value.unregister(r)}),{size:t(()=>(e==null?void 0:e.value.size)||s.size),rounded:t(()=>!e||u.value===-1?i.value.rounded:e.value.children.length===1?e.value.ui.rounded:u.value===0?e.value.rounded.start:u.value===e.value.children.length-1?e.value.rounded.end:"rounded-none")}}export{p as a,f as u};
