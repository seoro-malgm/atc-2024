import{_ as g}from"./zqOI_95T.js";import{_ as x}from"./Aq_Awm4b.js";import{g as m,l as y,x as T,A as k,k as h,c as O,b as n,w as s,B as R,C,o as I,d as N,h as p}from"./DMHAXQVH.js";import{u as $}from"./Da75yhFc.js";import{v as c}from"./DdsGjWaM.js";const A={__name:"login",setup(B){const l=R(),f=m(()=>l.public.mode),t=y({email:null,pwd:null});T(()=>{f.value==="development"&&(t.value={email:l.public.authId,pwd:l.public.authPwd})});const _=m(()=>({notValue:Object.values(t.value).some(o=>o==null||o==="")})),r=$(),v=k(),w=h(),b=async o=>{o.preventDefault();try{const e=await $fetch("/api/auth/login",{method:"POST",body:{...t.value}});if(e){const{uid:u,refreshToken:d,accessToken:i}=e;v.setToken(i),r.add({id:"login-complete",title:"로그인에 성공하였습니다.",icon:"memory:login"}),w.push("/admin")}}catch(e){r.add({id:"login-fail",title:`ERROR ${e.statusCode}`,description:e.data.message||"로그인중에 문제가 발생하였습니다.",icon:"memory:alert-octagon",color:"red"})}};return(o,e)=>{const u=g,d=x,i=C;return I(),O("div",null,[n(i,{name:"auth-body"},{title:s(()=>[N(" LOGIN ")]),content:s(()=>[n(d,{cancelable:!1,validate:_.value,onSubmit:e[2]||(e[2]=a=>b(a)),onOnFocus:e[3]||(e[3]=a=>o.onFocused=!0),submitText:"Login"},{default:s(()=>[n(u,{form:t.value,title:"Email",bind:"email",inputType:"email",onInput:e[0]||(e[0]=a=>t.value.email=a),autocomplete:"user-email",required:"",id:"user-email",validate:p(c)("email",t.value.email)},null,8,["form","validate"]),n(u,{form:t.value,title:"Password",bind:"pwd",inputType:"password",onInput:e[1]||(e[1]=a=>t.value.pwd=a),autocomplete:"current-password",required:"",id:"user-pwd",validate:p(c)("password",t.value.pwd)},null,8,["form","validate"])]),_:1},8,["validate"])]),_:1})])}}};export{A as default};