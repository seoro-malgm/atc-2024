import{s as r,E as s,z as c,c as u,o as l}from"./DKUbIslQ.js";import{u as n}from"./BhHmZ4V8.js";const p={__name:"logout",setup(i){return r(async()=>{const o=s(),t=c(),e=n();try{await $fetch("/api/auth/logout"),t.clearToken(),e.add({id:"logout-complete",title:"로그아웃에 성공하였습니다.",icon:"memory:logout"}),o.push("/auth/login")}catch(a){console.error("Logout failed:",a),e.add({id:"logout-failed",title:a,icon:"memory:alert-octagon",color:"red"})}}),(o,t)=>(l(),u("div",null,"this is logout"))}};export{p as default};
