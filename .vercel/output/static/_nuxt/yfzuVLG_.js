import{_ as f,k as m,m as o,o as d,c as s,a as u,t as r,q as y,V as h,W as g,h as v,U as S}from"./is6tbSo-.js";const q={class:"input-group"},x=["for"],b={class:"input-title"},k={key:0,class:"input-desc"},B=["type","placeholder","required","autocomplete","id"],V={__name:"text",props:{id:{type:String,default:"input-text-obj"},title:{type:String,default:null},desc:{type:String,default:null},inputType:{type:String,default:null},form:{type:Object,required:!0,default:null},bind:{type:String,required:!0,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:null},autocomplete:{type:String,default:null}},emits:{input:e=>!0},setup(e,{emit:c}){const a=e,i=c,t=m(null);return o(()=>t.value,(l,n)=>{i("input",l)}),o(()=>a.form[a.bind],(l,n)=>{t.value=l,i("input",l)}),(l,n)=>(d(),s("div",q,[u("label",{class:"input-label",for:e.id},[u("span",b,r(e.title),1),e.desc?(d(),s("p",k,r(e.desc),1)):y("",!0),h(u("input",{type:e.inputType?e.inputType:"text","onUpdate:modelValue":n[0]||(n[0]=p=>S(t)?t.value=p:null),placeholder:e.placeholder||"입력해주세요.",required:e.required,autocomplete:e.autocomplete,id:e.id},null,8,B),[[g,v(t)]])],8,x)]))}},D=f(V,[["__scopeId","data-v-27f932c3"]]);export{D as _};
