import{f as h,E as x,g as u,G as p,k as R,c as f,b as y,w as C,H as D,o as l,i as E,r as T,a as k,t as B,q as F,I as q}from"./1IHVEBxC.js";import{_ as I}from"./CRt4P5hx.js";import{u as N}from"./DdTGsUA2.js";const O={key:0,class:"pt-4 border-t"},S=k("h6",{class:"text-2xl mb-3"},"form 데이터 미리보기 :",-1),P={class:"block w-full overflow-auto bg-gray-300 border text-wrap p-6 rounded-xl"},M={__name:"write",props:{col:{type:Object,default:null}},setup(c){const t=c,d=h(),i=x(),s=N(),w={works:FormWorks,blog:FormBlog,client:FormClient,estimates:FormEstimates},m=u(()=>w[t.col.key]);p(()=>{(!t.col.key||!m.value)&&(window.alert("잘못된 접근입니다."),i.go(-1))});const o=R({}),r=u(()=>{var a;return(a=d==null?void 0:d.query)==null?void 0:a.id});p(()=>{r.value&&v(r.value)});const v=async a=>{const e=await $fetch(`/api/${t.col.key}/document`,{method:"GET",params:{col:t.col.key},query:{id:a}});e&&(o.value={...e})},_=async a=>{try{await $fetch(`/api/${t.col.key}/document`,{method:"POST",body:{...o.value,createdAt:new Date().toLocaleString(),viewer:0}})&&(i.push(`/admin/${t.col.key}`),s.add({id:`work-added-${new Date().getTime()}`,title:"정상적으로 추가되었습니다..",icon:"memory:checkbox-marked"}))}catch(e){s.add({id:`${t.col.key}-write-fail`,title:`ERROR ${e.statusCode}`,description:e.data.message||"업로드중에 문제가 발생하여 실패햇습니다.",icon:"memory:alert-octagon",color:"red"})}},g=async a=>{try{await $fetch(`/api/${t.col.key}/document`,{method:"PUT",body:{...o.value},query:{id:r.value}})&&(i.push(`/admin/${t.col.key}`),s.add({id:`work-added-${new Date().getTime()}`,title:"정상적으로 수정되었습니다",icon:"memory:checkbox-marked"}))}catch(e){s.add({id:`${t.col.key}-update-fail`,title:`ERROR ${e.statusCode}`,description:e.data.message||"업데이트중에 문제가 발생하여 실패햇습니다.",icon:"memory:alert-octagon",color:"red"})}};return(a,e)=>{const b=q,$=I;return l(),f("div",null,[y(b),y($,{onSubmit:e[2]||(e[2]=D(n=>r.value?g():_(),["prevent"]))},{default:C(()=>[(l(),E(T(m.value),{col:c.col,id:r.value,form:o.value,onInput:e[0]||(e[0]=n=>o.value[n[0]]=n[1]),onInit:e[1]||(e[1]=n=>o.value=n)},null,40,["col","id","form"])),c.col.formPreview?(l(),f("div",O,[S,k("pre",P,"form: "+B(o.value)+`
      `,1)])):F("",!0)]),_:1})])}}};export{M as default};
