import{H as G,_ as w,o as _,c as f,p as V,e as A,a as e,l as h,g as F,I as Q,n as q,x as L,J as ee,K as E,h as I,F as R,q as O,D as Z,t as k,s as P,b as s,v as T,L as X,w as y,i as te,y as U,d as x,M as oe}from"./BMtV3dYn.js";import{_ as Y,a as se,b as ne}from"./BTEYwz13.js";import{_ as H}from"./B8h68Ptf.js";import{u as ae,a as M}from"./DeWGoNHF.js";import{_ as le}from"./CGS6lMc8.js";import N from"./CXecvLwm.js";import{_ as re}from"./D_QfMnk0.js";import ie from"./SWtDyUMQ.js";import{_ as J}from"./ZinzVbZs.js";import ce from"./C6NSRpjm.js";import de from"./BvMh13n1.js";import{u as ue}from"./CjD14mHo.js";import pe from"./DGdug_OB.js";import"./CWFhXWUN.js";import"./qsMMcMsd.js";import"./DmD39Dta.js";import"./qNbwXxVP.js";import"./BmY9I-XV.js";import"./5x1eLl7A.js";import"./IsvatUqc.js";import"./Bq3cn0b_.js";import"./BEZaq20C.js";import"./O9sTFHwV.js";import"./-BGVwXjg.js";import"./CsMUtdCX.js";import"./w7OcSrDP.js";import"./D_PkXLZw.js";import"./jthpZqva.js";import"./CxIZtCgj.js";import"./B62BLRBD.js";import"./CLhuw8NQ.js";import"./C1IwaZyg.js";import"./CzjJcdqU.js";import"./DDckxVhV.js";import"./BXhPC6Xk.js";import"./WAz3cXDc.js";import"./QRliJ_Oj.js";import"./aPxrJPp6.js";import"./blSOxsGD.js";const _e=G("/video/reels-dummy.mp4"),W=t=>(V("data-v-8caa6924"),t=t(),A(),t),me={id:"hero"},fe=W(()=>e("div",{class:"title"},[e("h1",null,"5th ATC HERE"),e("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit voluptatem tempore dolore ab quasi laboriosam eum veniam nisi, tempora praesentium quam deleniti beatae autem! Consequatur harum temporibus praesentium accusamus. ")],-1)),he=W(()=>e("div",{class:"content"},[e("video",{src:_e,autoplay:"",playsinline:"",muted:"",loop:""})],-1)),ve=[fe,he],ge={__name:"hero",props:{data:{type:String,default:null}},setup(t){return(c,o)=>(_(),f("section",me,ve))}},be=w(ge,[["__scopeId","data-v-8caa6924"]]),ye={class:"item-description"},$e={key:0},xe={class:"item-image-wrapper"},we={__name:"scrollHorizontal",props:{items:{type:Array,default:()=>[]}},setup(t){const c=t,o=h(null),d=h(null),n=h(null),i=F(()=>{var g;return(g=o==null?void 0:o.value)==null?void 0:g.offsetTop}),a=Q({currentScrollTop:0,scrollX:0,scrollY:0,isSticky:!1}),{sourceType:l}=ae(o);M(o);const m=M(d);M(n);const p=F(()=>{const g=c.items.length;return m.width.value*(g-1)+(g+1)*40+160});F(()=>data);const u=()=>{if(!o.value||!n.value)return;const g=m.top.value<=0;a.isSticky=g},v=g=>{a.currentScrollTop=window.scrollY||document.documentElement.scrollTop,u(),(a!=null&&a.isSticky||l.value==="mouse")&&(a.scrollX=a.currentScrollTop-i.value)},r=h(!1),S=()=>{r.value=window.innerWidth<=1024};return q(r,g=>{}),L(()=>{r.value=window.innerWidth<=1024,window.addEventListener("resize",S),window.addEventListener("scroll",v,{passive:!0})}),ee(()=>{window.removeEventListener("resize",S),window.removeEventListener("scroll",v)}),(g,D)=>{const B=H,z=Y;return _(),f("div",null,[e("div",{class:T(["horizontal-scroll",{"is-mobile-view":r.value}]),ref_key:"wrapper",ref:o,style:{}},[e("div",{class:"horizontal-scroll-body",ref_key:"body",ref:d},[e("div",{class:"horizontal-scroll-container",ref_key:"container",ref:n},[e("div",{class:"horizontal-scroll-section",style:E(r.value?{transform:"translate3d(0, 0, 0)"}:{transform:`translate3d(-${I(p)<=a.scrollX?I(p):a.scrollX}px, 0, 0)`}),ref:"scrollSection"},[(_(!0),f(R,null,O(t.items,($,b)=>(_(),f("article",{class:"item",key:b},[Z(g.$slots,"item-description",{},()=>[e("div",ye,[e("h4",null,k($.description.title),1),$!=null&&$.description.paragraph?(_(),f("p",$e,k($==null?void 0:$.description.paragraph),1)):P("",!0)])],!0),e("figure",xe,[s(B,{fit:"cover",src:$.src,preload:""},null,8,["src"])])]))),128))],4),s(z)],512)],512)],2),e("div",{class:"hidden lg:block scroll-block",style:E({height:r.value?"unset":`${I(p)}px`})},null,4)])}}},Se=w(we,[["__scopeId","data-v-ed1d9a93"]]),ke={class:"input-group"},Ie={class:"input-label"},qe={class:"input-title"},Fe={key:0,class:"input-desc"},Ve={__name:"selectMenu",props:{title:{type:String,required:!0,default:"제목"},desc:{type:String,default:null},placeholder:{type:String,default:null},form:{type:Object,default:null},options:{type:Array,default:[]},searchablePlaceholder:{type:String,default:null},searchAttributes:{type:Array,default:[]},bind:{type:String,default:null},multiple:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},valueAttribute:{type:String,default:"label"},localStorage:{type:String,default:null}},emits:{input:t=>!0},setup(t,{emit:c}){const o=t,d=h([]),n=c;return q(()=>d.value,(i,a)=>{n("input",i)}),q(()=>o.form[o.bind],(i,a)=>{d.value=i,n("input",i)}),L(()=>{if(o.form[o.bind]&&console.log("props.form[props.bind] :",o.form[o.bind]),o.localStorage){const i=localStorage.getItem(o.localStorage);i&&(d.value=JSON.parse(i))}}),(i,a)=>{const l=ie;return _(),f("div",ke,[e("div",Ie,[e("span",qe,k(t.title),1),t.desc?(_(),f("p",Fe,k(t.desc),1)):P("",!0),s(l,{modelValue:I(d),"onUpdate:modelValue":a[0]||(a[0]=m=>X(d)?d.value=m:null),options:t.options,"search-attributes":[...t.searchAttributes],multiple:t.multiple,searchable:t.searchable,searchablePlaceholder:t.searchablePlaceholder||"검색...",placeholder:t.placeholder||"선택하세요",class:"input",size:"lg","value-attribute":t.valueAttribute},null,8,["modelValue","options","search-attributes","multiple","searchable","searchablePlaceholder","placeholder","value-attribute"])])])}}},Ae=w(Ve,[["__scopeId","data-v-07f88cd6"]]),Be={class:"input-group"},ze={class:"input-label"},Ce={class:"input-title"},Ee={class:"flex items-center"},Te={__name:"check",props:{title:{type:String,default:null},form:{type:Object,default:null},color:{type:String,default:"primary"},bind:{type:String,default:null}},emits:{input:t=>!0},setup(t,{emit:c}){const o=t,d=c,n=h(null);return q(()=>n.value,(i,a)=>{d("input",i)}),q(()=>o.form[o.bind],(i,a)=>{n.value=i,d("input",i)}),(i,a)=>{const l=ce;return _(),f("div",Be,[e("label",ze,[e("span",Ce,k(t.title),1),e("div",Ee,[s(l,{modelValue:I(n),"onUpdate:modelValue":a[0]||(a[0]=m=>X(n)?n.value=m:null)},{label:y(()=>[Z(i.$slots,"default",{},void 0,!0)]),_:3},8,["modelValue"])])])])}}},je=w(Te,[["__scopeId","data-v-a33bda1b"]]);function C(t,c){const o={name:/^[a-zA-Z가-힣\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\u30A0-\u30FF][a-zA-Z가-힣\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\u30A0-\u30FF\s]*$/,email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/};return F(()=>o[t].test(c)&&c!==""&&c!==null)}const Me=t=>(V("data-v-6130c3cc"),t=t(),A(),t),Ue={class:"modal-header"},Le=Me(()=>e("h6",null,"소식 구독하기",-1)),Ne={class:"modal-body"},De={class:"modal-footer"},Re=["disabled"],Oe={__name:"subscribe",props:{shown:{type:Boolean,default:null}},setup(t,{emit:c}){const o=t,d=c,n=h(!1);q(()=>o.shown,(v,r)=>{n.value=v}),q(()=>n.value,(v,r)=>{d("toggle",v)});const i=h([{label:"한국어",value:"한국어"},{label:"English",value:"영어"},{label:"中文",value:"중국어"},{label:"日本語",value:"일본어"}]),a=h({eventOccurredBy:"SUBSCRIBER",confirmEmailYN:"N",groupIds:["330508"],subscribers:[]}),l=h({email:null,name:null,send_agreed:!1,ad_agreed:!1}),m=F(()=>{var r;const v={email:C("email",l.value.email).value,name:C("name",l.value.name).value,send_agreed:(r=l.value)==null?void 0:r.send_agreed};return Object.values(v).every(S=>S===!0)}),p=ue(),u=async v=>{const r={...a.value,subscribers:[{...l.value,$ad_agreed:l.value.ad_agreed?"Y":"N",subscribed_date:new Date}]};try{await $fetch("/api/stibee/lists/subscribers",{method:"POST",body:r})&&(n.value=!1,p.add({id:`subscriber-added-${new Date().getTime()}`,title:"정상적으로 구독이 완료됐습니다.",color:"spring-green",icon:"memory:checkbox-marked"}))}catch{n.value=!1,p.add({id:`subscriber-add-fail-${new Date().getTime()}`,title:"구독에 실패했습니다.",color:"red",icon:"bxs:x-square"})}};return(v,r)=>{const S=N,g=re,D=Ae,B=J,z=je,$=de;return _(),te($,{modelValue:n.value,"onUpdate:modelValue":r[6]||(r[6]=b=>n.value=b),class:"modal"},{default:y(()=>[e("form",null,[e("header",Ue,[Le,e("button",{onClick:r[0]||(r[0]=U(b=>n.value=!1,["prevent"]))},[s(S,{name:"bxs:x-square"})])]),e("section",Ne,[s(g,{form:l.value,id:"subscriber-email",bind:"email",type:"email",required:"required",title:"이메일",placeholder:"구독자님의 이메일을 입력해주세요",onInput:r[1]||(r[1]=b=>l.value.email=b),"required:":!0,validate:I(C)("email",l.value.email)},null,8,["form","validate"]),s(g,{form:l.value,id:"subscriber-name",bind:"name",type:"text",required:"required",title:"이름",placeholder:"구독받으실 구독자님의 이름을 입력해주세요.",class:"mt-4",onInput:r[2]||(r[2]=b=>l.value.name=b),"required:":!0,validate:I(C)("name",l.value.name)},null,8,["form","validate"]),s(D,{class:"my-4",form:a.value,title:"언어 선택","value-attribute":"label",options:i.value,placeholder:"구독으로 받을 메일의 언어를 선택해주세요.",onInput:r[3]||(r[3]=b=>l.value.lang=b)},null,8,["form","options"]),s(z,{form:l.value,bind:"$send_agreed",required:"required",title:"수신동의 여부",class:"mt-4",onInput:r[4]||(r[4]=b=>l.value.send_agreed=b)},{default:y(()=>[e("span",null,[x(" (필수) "),s(B,{href:"/",target:"_blank",class:"underline text-hawkes-blue-800"},{default:y(()=>[x(" 개인정보 수집 및 이용 ")]),_:1}),x(" 에 동의합니다. ")])]),_:1},8,["form"]),s(z,{form:l.value,bind:"$ad_agreed",required:"required",class:"mt-4",onInput:r[5]||(r[5]=b=>l.value.ad_agreed=b)},{default:y(()=>[e("span",null,[x(" (선택) "),s(B,{href:"/",target:"_blank",class:"underline text-hawkes-blue-800"},{default:y(()=>[x(" 광고성 정보 수신 ")]),_:1}),x(" 에 동의합니다. ")])]),_:1},8,["form"])]),e("footer",De,[e("button",{onClick:U(u,["prevent"]),disabled:!m.value}," 구독하기 ",8,Re)])]),x(" formValidate: "+k(m.value),1)]),_:1},8,["modelValue"])}}},Ze=w(Oe,[["__scopeId","data-v-6130c3cc"]]),Pe=t=>(V("data-v-9b0e2742"),t=t(),A(),t),Xe={class:"section-conference",ref:"container"},Ye=Pe(()=>e("div",{class:"description"},[e("p",null," 컨퍼런스 및 워킹페스티벌이 10월에 열린다. 행사 전에 행사진행소식과 할인혜택 등 다양한 소식을 들려드리겠다. 관심있으면 구독해라 ")],-1)),He={class:"content"},Je={class:"part left"},We={class:"article-body"},Ke={class:"article-footer"},Ge={__name:"conference",props:{data:{type:String,default:null}},setup(t){const c=[{src:"/images/dummy.jpeg",transform:"rotate(4deg)"},{src:"/images/dummy.jpeg",transform:"rotate(15deg)"},{src:"/images/dummy.jpeg",transform:"rotate(-9deg)"},{src:"/images/dummy.jpeg",transform:"rotate(-13deg)"}],o=h(!1);return(d,n)=>{const i=le,a=H,l=N,m=Ze;return _(),f("section",Xe,[s(i,null,{default:y(()=>[x(" 소식 구독하기 ")]),_:1}),Ye,e("div",He,[e("section",Je,[e("button",{class:"article-wrap",onClick:n[0]||(n[0]=U(p=>o.value=!0,["prevent"])),ref:"articleLeft"},[e("article",null,[e("section",We,[(_(),f(R,null,O(c,(p,u)=>s(a,{alt:`컨퍼런스 ${u+1}번째 이미지`,class:T({first:u===0}),src:`${p.src}`,style:E({transform:`translate(-50%, -50%) ${p.transform}`,transitionDelay:`${u*.1}s`}),key:u},null,8,["alt","class","src","style"])),64))]),e("footer",Ke,[e("span",null,[x(" 미리 소식 구독하기 "),s(l,{class:"icon",name:"bxs:paper-plane"})])])])],512)]),s(m,{shown:o.value,onToggle:n[1]||(n[1]=p=>o.value=p)},null,8,["shown"])])],512)}}},Qe=w(Ge,[["__scopeId","data-v-9b0e2742"]]),K=t=>(V("data-v-93dbb922"),t=t(),A(),t),et=K(()=>e("polygon",{class:"cls-1",points:"153.32 51.03 102.29 0 73.79 28.51 125.07 79.79 153.32 51.03"},null,-1)),tt=K(()=>e("polygon",{class:"cls-1",points:"182.08 79.79 125.07 79.79 0 79.79 0 120.1 126.1 120.1 73.79 172.42 102.29 200.92 174.25 128.97 183.12 120.1 202.76 100.46 182.08 79.79"},null,-1)),ot=[et,tt],st={__name:"arr",props:{dir:{type:String,default:"right"},color:{type:String,default:"block"}},setup(t){const c=h({right:"0deg",left:"180deg",down:"90deg",uo:"270deg"});return(o,d)=>(_(),f("div",{id:"icon-arr",class:T(`bg-${t.color}`)},[(_(),f("svg",{class:"icon","data-name":"레이어 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 202.76 200.92",style:E({transform:`rotate(${c.value[t.dir]})`})},ot,4))],2))}},nt=w(st,[["__scopeId","data-v-93dbb922"]]),at=oe('<svg data-name="layer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.58 204.8" data-v-cf113135><g data-v-cf113135><polygon class="cls-1" points="77.21 123.62 116.17 162.58 116.17 123.62 157.96 123.62 157.96 47.19 36.62 47.19 36.62 123.62 77.21 123.62" data-v-cf113135></polygon><rect class="cls-2" x="36.62" y="123.62" width="40.59" height="40.59" data-v-cf113135></rect><polygon class="cls-2" points="116.17 162.58 77.21 123.62 77.21 164.21 117.79 204.8 117.79 164.21 116.17 164.21 116.17 162.58" data-v-cf113135></polygon><polygon class="cls-2" points="116.17 123.62 116.17 162.58 117.79 164.21 157.96 164.21 157.96 123.62 116.17 123.62" data-v-cf113135></polygon><polygon class="cls-2" points="116.17 164.21 117.79 164.21 116.17 162.58 116.17 164.21" data-v-cf113135></polygon><rect class="cls-2" x="36.62" width="121.34" height="38.22" data-v-cf113135></rect><rect class="cls-2" x="157.96" y="38.22" width="36.62" height="85.41" data-v-cf113135></rect><polygon class="cls-2" points="36.62 123.62 36.62 38.22 0 38.22 0 123.62 13.4 123.62 36.62 123.62" data-v-cf113135></polygon></g><rect class="cls-2" x="86.32" y="57.5" width="22" height="54.31" data-v-cf113135></rect><path class="cls-3" d="M97.32,27.22h0c-6.08,0-11,4.93-11,11h22c0-6.08-4.93-11-11-11Z" data-v-cf113135></path><path class="cls-2" d="M97.32,49.22h0c6.08,0,11-4.93,11-11h-22c0,6.08,4.93,11,11,11Z" data-v-cf113135></path></svg>',1),lt=[at],rt={__name:"info",props:{dir:{type:String,default:"right"},color:{type:String,default:"block"}},setup(t){return h({right:"0deg",left:"180deg",down:"90deg",uo:"270deg"}),(c,o)=>(_(),f("div",{id:"icon-info",class:T(`bg-${t.color}`)},lt,2))}},it=w(rt,[["__scopeId","data-v-cf113135"]]),ct=window.setInterval,j=t=>(V("data-v-b32d8eaf"),t=t(),A(),t),dt={id:"sponsor-benefits"},ut={class:"content"},pt={class:"content-benefit"},_t=j(()=>e("header",{class:"benefit-header"},[e("h5",null,"함께하기"),e("p",{class:"description"}," 사단법인 숲길의 ‘2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스 조직위원회’는 더욱 아름답고 풍성한 행사를 만들기 위한 다양한 형태의 협업과 후원을 환영합니다. ")],-1)),mt={class:"item"},ft=["src"],ht=["disabled","onClick"],vt=["disabled","onClick"],gt={class:"content-cta"},bt=j(()=>e("header",{class:"cta-header"},[e("h5",null,"저희와 함께하시겠어요?")],-1)),yt={class:"cta-body"},$t={class:"body-graphic"},xt=j(()=>e("p",{class:"body-desc"}," 저희는 미팅을 거쳐서 스폰서 혜택을 귀사에 맞춰드릴 수 있습니다. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit! ",-1)),wt={class:"cta-footer"},St=j(()=>e("span",null,"혜택 자세히 보고 미팅 예약하기",-1)),kt={__name:"sponsorBenefits",props:{data:{type:String,default:null}},setup(t){const c=[{src:"https://picsum.photos/1920/1080?random=2",title:"2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스를 후원하는 이유는 무엇입니까?",description:"파트너 후원은 사단법인 숲길이 지리산 환경을 보호하고 다양한 사회공헌 프로그램들을 풍성하게 운영할 수 있도록 도와줍니다. 환경보호와 사회공헌활동을 중요한 미션으로 여기는 소중한 파트너들의 후원, 지원 및 협업으로 숲길의 이러한 노력이 꽃을 피울 수 있었습니다."},{src:"https://picsum.photos/1920/1080?random=3",title:"누가 참가하게 될까요?",description:"숲길은 아름다운 지리산의 자연을 다음 세대에게 그대로 물려주기 위하여 여러 단체, 기업, 공공기관 및 이해관계자들과 긴밀히 협업해왔습니다. 우리는 이러한 파트너들의 소중한 지원에 깊은 감사를 표합니다."},{src:"https://picsum.photos/1920/1080?random=4",title:"2024 지리산 걷기축제 & 아시아 트레일즈 컨퍼런스는 친환경적으로 진행되나요?",description:"사단법인 숲길이 가장 중요하게 생각하는 것은 우리가 행하는 모든 행위가 자연에 해를 끼치지 않는 방향으로 이루어져야 한다는 점입니다. 이번 행사 또한 다르지 않습니다. 우리가 어떻게 친환경적으로 행사를 만들어 나가는지 함께 지켜봐주세요!"},{src:"https://picsum.photos/1920/1080?random=5",title:"함께하기",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"https://picsum.photos/1920/1080?random=6",title:"함께하기",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"}],o=h();return L(()=>{ct(()=>{if(o.value){if(o.value.page===o.value.pages)return o.value.select(0);o.value.next()}},3e3)}),(d,n)=>{const i=nt,a=pe,l=it,m=N,p=J;return _(),f("div",dt,[e("div",ut,[e("div",pt,[_t,s(a,{items:c,ui:{item:"basis-full"},arrows:"",ref_key:"carouselRef",ref:o,class:"carousel"},{default:y(({item:u})=>[e("figure",mt,[e("img",{src:u.src,class:"item-image",draggable:"false"},null,8,ft),e("figcaption",null,[e("h6",null,k(u.title),1),e("p",null,k(u.description),1)])])]),prev:y(({onClick:u,disabled:v})=>[e("button",{disabled:v,onClick:u,class:"btn prev"},[s(i,{dir:"left",color:"spring-green-400"})],8,ht)]),next:y(({onClick:u,disabled:v})=>[e("button",{disabled:v,onClick:u,class:"btn next"},[s(i,{dir:"right",color:"spring-green-400"})],8,vt)]),_:1},512)]),e("div",gt,[bt,e("section",yt,[e("div",$t,[s(l,{class:"icon"})]),xt]),e("footer",wt,[s(p,{to:"/together",class:"link-item"},{default:y(()=>[St,s(m,{class:"icon",name:"bxs:paper-plane"})]),_:1})])])])])}}},It=w(kt,[["__scopeId","data-v-b32d8eaf"]]),_o={__name:"index",setup(t){const c=h([{src:"/images/dummy.jpeg",description:{title:"지리산이 속삭이는생명, 평화, 공존의 메세지"}},{src:"/images/dummy.jpeg",description:{title:"대한민국 최초·최대 국립공원",paragraph:"1967년 대한민국 1호 국립공원 지정 총 면적 483km² 대한민국 최대 국립공원 (여의도 면적의 57.5배)"}},{src:"/images/dummy.jpeg",description:{title:"우리나라 최다 생물종 서식지",paragraph:"국내 국립공원 중 최다 생물종(8,869종) 서식지 반달곰 등 멸종위기 129종 서식지(2023년)"}},{src:"/images/dummy.jpeg",description:{title:"우리나라 최초 도보여행 순례길",paragraph:"2007년 대한민국 최초 장거리 도보여행 순례길 조성 / 2021년 대한민국 1호 국가숲길 지정"}},{src:"/images/dummy.jpeg",description:{title:"우리나라 최대 트래킹 성지",paragraph:"지리산둘레길 이용객수 616만명 (2023년 누적) / 총 길이 289.4km 순례자(완주자) 2,988명 (2023년 누적)"}}]);return(o,d)=>{const n=be,i=Y,a=Se,l=Qe,m=se,p=It,u=ne;return _(),f("div",null,[s(n),s(i),s(a,{items:c.value},null,8,["items"]),s(l),s(m),s(p),s(u),s(i)])}}};export{_o as default};
