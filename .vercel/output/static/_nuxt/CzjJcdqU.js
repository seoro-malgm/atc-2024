import{l as c,R as d,aq as l,T as o,g as u,x as f,J as v}from"./BMtV3dYn.js";function p(t){const r=`group-${l().uid}`,a=c({children:[],register(n){this.children.push(n)},unregister(n){const e=this.children.indexOf(n);e>-1&&this.children.splice(e,1)},...t});d(r,a)}function G({ui:t,props:i}){const r=l();if(d("ButtonGroupContextConsumer",!0),o("ButtonGroupContextConsumer",!1))return{size:u(()=>i.size),rounded:u(()=>t.value.rounded)};let n=r.parent,e;for(;n&&!e;){if(n.type.name==="ButtonGroup"){e=o(`group-${n.uid}`);break}n=n.parent}const s=u(()=>e==null?void 0:e.value.children.indexOf(r));return f(()=>{e==null||e.value.register(r)}),v(()=>{e==null||e.value.unregister(r)}),{size:u(()=>(e==null?void 0:e.value.size)||i.size),rounded:u(()=>!e||s.value===-1?t.value.rounded:e.value.children.length===1?e.value.ui.rounded:s.value===0?e.value.rounded.start:s.value===e.value.children.length-1?e.value.rounded.end:"rounded-none")}}export{G as a,p as u};
