import{_ as d,o as c,c as r,a as t,j as y,y as g,r as f,h as p,t as m,x as v,z as x,A as S,s as w,B as I,b as _,w as $,d as q,C as B,p as C,e as N}from"./DFjfPBi9.js";import{u as T}from"./C3_6Umtx.js";const V={__name:"section",props:{headerClass:{type:String,default:null}},setup(e){return(a,n)=>(c(),r("header",{class:g(["border-t",e.headerClass])},[t("h4",null,[y(a.$slots,"default",{},void 0,!0)])],2))}},k=d(V,[["__scopeId","data-v-8777b1f8"]]),D={class:"input-group"},j=["for"],E={class:"input-title"},z={key:0,class:"input-desc"},M=["type","placeholder","required","autocomplete","id"],R={__name:"text",props:{id:{type:String,default:"input-text-obj"},title:{type:String,default:null},desc:{type:String,default:null},inputType:{type:String,default:null},form:{type:Object,required:!0,default:null},bind:{type:String,required:!0,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:null},autocomplete:{type:String,default:null}},emits:{input:e=>!0},setup(e,{emit:a}){const n=e,l=a,o=f(null);return p(()=>o.value,(s,i)=>{l("input",s)}),p(()=>n.form[n.bind],(s,i)=>{o.value=s,l("input",s)}),(s,i)=>(c(),r("div",D,[t("label",{class:"input-label",for:e.id},[t("span",E,m(e.title),1),e.desc?(c(),r("p",z,m(e.desc),1)):v("",!0),x(t("input",{type:e.inputType?e.inputType:"text","onUpdate:modelValue":i[0]||(i[0]=u=>I(o)?o.value=u:null),placeholder:e.placeholder||"입력해주세요.",required:e.required,autocomplete:e.autocomplete,id:e.id},null,8,M),[[S,w(o)]])],8,j)]))}},U=d(R,[["__scopeId","data-v-fccb3567"]]),b=e=>(C("data-v-c395144a"),e=e(),N(),e),A={class:"section-subscribe"},F={class:"wrap"},L={class:"form-wrap"},O=b(()=>t("header",{class:"form-header"},[t("h5",null,"사전예약하세요"),t("p",{class:"text-lg"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque repellat explicabo deserunt molestias. Earum ullam obcaecati fugit laborum rem cum excepturi molestiae dolor aut odio perferendis distinctio delectus vitae, fuga laboriosam sed minima. Necessitatibus, rerum! Natus, dignissimos. ")],-1)),G={class:"form-body"},H=b(()=>t("footer",{class:"form-footer"},[t("button",{type:"submit",class:"btn-submit"},"등록")],-1)),J={__name:"subscribeForm",setup(e){const a=f({email:null}),n=T(),l=o=>{n.add({id:"submitted",title:"등록이 완료되었습니다.",icon:"ic:baseline-check-circle",color:"spring-green"})};return(o,s)=>{const i=k,u=U;return c(),r("section",A,[_(i,{class:"border-b"},{default:$(()=>[q(" SUBSCRIBE ")]),_:1}),t("div",F,[t("div",L,[t("form",{action:"submit",onSubmit:B(l,["prevent"]),class:"form"},[O,t("section",G,[_(u,{form:a.value,bind:"email",onInput:s[0]||(s[0]=h=>a.value.email=h),title:"이메일"},null,8,["form"])]),H],32)])])])}}},Q=d(J,[["__scopeId","data-v-c395144a"]]);export{k as _,Q as a};
