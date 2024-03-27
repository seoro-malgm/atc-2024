import{u as b}from"./C8UXK6Mt.js";import{_ as p,D as g,m as S,q as _,r as E,E as h,o as O,c as $,j,C as A}from"./DFjfPBi9.js";import{e as J}from"./BtEjgvAg.js";class m extends Error{constructor(s){super(s),this.message=s,Object.setPrototypeOf(this,m.prototype)}}const F=g({props:{schema:{type:Object,default:void 0},state:{type:Object,required:!0},validate:{type:Function,default:()=>[]},validateOn:{type:Array,default:()=>["blur","input","change","submit"]}},emits:["submit","error"],setup(e,{expose:s,emit:r}){const n=b("$Z55GngiEgp"),u=J(`form-${n}`);S(()=>{u.on(async t=>{var i;t.type!=="submit"&&((i=e.validateOn)!=null&&i.includes(t.type))&&await d(t.path,{silent:!0})})}),_(()=>{u.reset()});const a=E([]);h("form-errors",a),h("form-events",u);const f=E({});h("form-inputs",f);async function y(){let t=await e.validate(e.state);if(e.schema)if(Z(e.schema))t=t.concat(await q(e.state,e.schema));else if(Y(e.schema))t=t.concat(await B(e.state,e.schema));else if(C(e.schema))t=t.concat(await M(e.state,e.schema));else if(P(e.schema))t=t.concat(await U(e.state,e.schema));else throw new Error("Form validation failed: Unsupported form schema");return t}async function d(t,i={silent:!1}){let o=t;if(t&&!Array.isArray(t)&&(o=[t]),o){const c=a.value.filter(l=>!o.includes(l.path)),v=(await y()).filter(l=>o.includes(l.path));a.value=c.concat(v)}else a.value=await y();if(a.value.length>0){if(i.silent)return!1;throw new m(`Form validation failed: ${JSON.stringify(a.value,null,2)}`)}return e.state}async function w(t){var o;const i=t;try{(o=e.validateOn)!=null&&o.includes("submit")&&await d();const c={...i,data:e.state};r("submit",c)}catch(c){if(!(c instanceof m))throw c;const v={...i,errors:a.value.map(l=>({...l,id:f.value[l.path]}))};r("error",v)}}return s({validate:d,errors:a,setErrors(t,i){a.value=t,i?a.value=a.value.filter(o=>o.path!==i).concat(t):a.value=t},async submit(){await w(new Event("submit"))},getErrors(t){return t?a.value.filter(i=>i.path===t):a.value},clear(t){t?a.value=a.value.filter(i=>i.path!==t):a.value=[]}}),{onSubmit:w}}});function Y(e){return e.validate&&e.__isYupSchema__}function k(e){return e.inner!==void 0}async function B(e,s){try{return await s.validate(e,{abortEarly:!1}),[]}catch(r){if(k(r))return r.inner.map(n=>({path:n.path??"",message:n.message}));throw r}}function Z(e){return e.parse!==void 0}async function q(e,s){const r=await s.safeParseAsync(e);return r.success===!1?r.error.issues.map(n=>({path:n.path.join("."),message:n.message})):[]}function C(e){return e.validateAsync!==void 0&&e.id!==void 0}function I(e){return e.isJoi===!0}async function M(e,s){try{return await s.validateAsync(e,{abortEarly:!1}),[]}catch(r){if(I(r))return r.details.map(n=>({path:n.path.join("."),message:n.message}));throw r}}function P(e){return e._parse!==void 0}async function U(e,s){const r=await s._parse(e);return r.issues?r.issues.map(n=>{var u;return{path:((u=n.path)==null?void 0:u.map(a=>a.key).join("."))||"",message:n.message}}):[]}function V(e,s,r,n,u,a){return O(),$("form",{onSubmit:s[0]||(s[0]=A((...f)=>e.onSubmit&&e.onSubmit(...f),["prevent"]))},[j(e.$slots,"default")],32)}const N=p(F,[["render",V]]);export{N as default};
