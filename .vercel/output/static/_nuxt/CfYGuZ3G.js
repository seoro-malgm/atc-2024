import{_ as f,l as m,n as d,o,c as s,a as i,t as c,s as y,Y as v,a1 as h,h as g,L as q,v as S}from"./mAU7enPn.js";const b={class:"input-group"},x=["for"],B={class:"input-title"},j={key:0,class:"input-desc"},k=["type","placeholder","required","autocomplete","id","invalid"],D={__name:"text",props:{id:{type:String,default:"input-text-obj"},title:{type:String,default:null},desc:{type:String,default:null},inputType:{type:String,default:null},form:{type:Object,required:!0,default:null},bind:{type:String,required:!0,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},autocomplete:{type:String,default:null},validate:{type:[Boolean,Object],default:!1}},emits:{input:e=>!0},setup(e,{emit:r}){const n=e,u=r,t=m(null);return d(()=>t.value,(l,a)=>{u("input",l)}),d(()=>n.form[n.bind],(l,a)=>{t.value=l,u("input",l)}),(l,a)=>(o(),s("div",b,[i("label",{class:"input-label",for:e.id},[i("span",B,c(e.title),1),e.desc?(o(),s("p",j,c(e.desc),1)):y("",!0),v(i("input",{type:e.inputType?e.inputType:"text","onUpdate:modelValue":a[0]||(a[0]=p=>q(t)?t.value=p:null),placeholder:e.placeholder||"입력해주세요.",required:e.required,autocomplete:e.autocomplete,id:e.id,class:S([{invalid:e.required&&!e.validate}]),invalid:e.required&&!e.validate},null,10,k),[[h,g(t)]])],8,x)]))}},V=f(D,[["__scopeId","data-v-3ae8aced"]]);export{V as _};
