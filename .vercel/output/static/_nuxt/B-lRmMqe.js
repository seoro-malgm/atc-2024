import Q from"./WzDVuwwS.js";import{_ as x,l as f,o as a,c as n,H as E,v as k,p as M,e as O,a as e,n as I,x as H,t as q,s as G,b as _,h as J,K as W,w as h,d as A,F as V,q as F,g as X,a0 as Y,M as Z}from"./W-AFi6ds.js";import{_ as U}from"./Rqd3q4jt.js";import{_ as ee}from"./D1EG-j10.js";import te from"./BcmoYCKr.js";import se from"./BKm9tF22.js";const K=t=>(M("data-v-93dbb922"),t=t(),O(),t),oe=K(()=>e("polygon",{class:"cls-1",points:"153.32 51.03 102.29 0 73.79 28.51 125.07 79.79 153.32 51.03"},null,-1)),ie=K(()=>e("polygon",{class:"cls-1",points:"182.08 79.79 125.07 79.79 0 79.79 0 120.1 126.1 120.1 73.79 172.42 102.29 200.92 174.25 128.97 183.12 120.1 202.76 100.46 182.08 79.79"},null,-1)),ae=[oe,ie],ne={__name:"arr",props:{dir:{type:String,default:"right"},color:{type:String,default:"block"}},setup(t){const m=f({right:"0deg",left:"180deg",down:"90deg",uo:"270deg"});return(s,i)=>(a(),n("div",{id:"icon-arr",class:k(`bg-${t.color}`)},[(a(),n("svg",{class:"icon","data-name":"레이어 2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 202.76 200.92",style:E({transform:`rotate(${m.value[t.dir]})`})},ae,4))],2))}},re=x(ne,[["__scopeId","data-v-93dbb922"]]),le={class:"input-group"},ce={class:"input-label"},ue={class:"input-title"},de={key:0,class:"input-desc"},me={__name:"selectMenu",props:{title:{type:String,required:!0,default:"제목"},desc:{type:String,default:null},placeholder:{type:String,default:null},form:{type:Object,default:null},options:{type:Array,default:[]},searchablePlaceholder:{type:String,default:null},searchAttributes:{type:Array,default:[]},bind:{type:String,default:null},multiple:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},valueAttribute:{type:String,default:"label"},localStorage:{type:String,default:null}},emits:{input:t=>!0},setup(t,{emit:m}){const s=t,i=f([]),d=m;return I(()=>i.value,(o,r)=>{d("input",o)}),I(()=>s.form[s.bind],(o,r)=>{i.value=o,d("input",o)}),H(()=>{if(s.form[s.bind]&&console.log("props.form[props.bind] :",s.form[s.bind]),s.localStorage){const o=localStorage.getItem(s.localStorage);o&&(i.value=JSON.parse(o))}}),(o,r)=>{const p=Q;return a(),n("div",le,[e("div",ce,[e("span",ue,q(t.title),1),t.desc?(a(),n("p",de,q(t.desc),1)):G("",!0),_(p,{modelValue:J(i),"onUpdate:modelValue":r[0]||(r[0]=g=>W(i)?i.value=g:null),options:t.options,"search-attributes":[...t.searchAttributes],multiple:t.multiple,searchable:t.searchable,searchablePlaceholder:t.searchablePlaceholder||"검색...",placeholder:t.placeholder||"선택하세요",class:"input",size:"lg","value-attribute":t.valueAttribute},null,8,["modelValue","options","search-attributes","multiple","searchable","searchablePlaceholder","placeholder","value-attribute"])])])}}},bt=x(me,[["__scopeId","data-v-2e9bfff2"]]),pe=[{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"}],_e={class:"section-sponsors border-b-0"},fe={class:"list-wrapper"},ge={class:"list-container"},be={class:"list-sponsor"},ve={class:"logo"},he=["src","alt","title"],qe={__name:"sponsors",props:{data:{type:String,default:null}},setup(t){return(m,s)=>{const i=U;return a(),n("section",_e,[_(i,null,{default:h(()=>[A(" 스폰서 ")]),_:1}),e("div",fe,[e("div",ge,[e("ul",be,[(a(!0),n(V,null,F(J(pe),(d,o)=>(a(),n("li",{key:o},[e("div",ve,[e("img",{src:`/images/sponsors/${d.src}`,alt:`${d.name} 로고이미지`,title:`${d.name} 로고이미지`},null,8,he)])]))),128))])])])])}}},vt=x(qe,[["__scopeId","data-v-6fb2f2ad"]]),we=[{src:"/images/dummy.jpeg",label:"컨퍼런스 스피치 세션 발표",defaultOpen:!0,content:"최대 20분간 세션을 발표할 수 있습니다. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"컨퍼런스 세션 중간 기업 광고 영상 송출",content:"짧고 강하게, 중간광고를 송출 가능 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"컨퍼런스 책자 내 기업 광고 (국/영문)",content:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"걷기축제 시작점 / 종점 부스",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"걷기축제 공식 홍보 영상 내 제품 노출",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"걷기축제 프로그램 가이드 내 기업 광고  (국/영문)",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"기업 제품 증정품 지급(굿즈 패키지)",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"기업 로고 노출 위치",content:"참여자 등번호, 현수막,스탠딩배너, 포스터, 웹사이트 등에 브랜드를 홍보하세요"},{src:"/images/dummy.jpeg",label:"사전 마케팅 캠페인 공동 제작",content:"ATC를 홍보하는 마케팅의 초입부터 함께 공동으로 제작에 참여하실 수 있습니다."},{src:"/images/dummy.jpeg",label:"지리산둘레길 공식 안내 책자 내 기업 광고",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"},{src:"/images/dummy.jpeg",label:"지리산둘레길 환경 프로그램 공동 제작 & 공동마케팅 (2024년 중)",content:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa asperiores error deleniti esse obcaecati, perferendis fuga incidunt id dolorem iste cupiditate dolor ad aliquid excepturi officia eaque nemo fugit!"}],ye={id:"sponsor-benefits"},$e={class:"content"},ke={key:0,class:"view-flex"},xe={class:"list-benefit"},Se={class:"benefit"},Ce={class:"item-header"},Pe={class:"item-label"},Ae={class:"image-wrap"},Ie={class:"caption-benefit"},Le={class:"item-desc"},Ne={key:1,class:"view-default"},je={class:"content-cta"},Be={class:"list-benefits"},Ve={class:"header-benefit"},Fe=["onClick"],Te={class:"item-collapse"},De={class:"content-collapse"},Me={class:"block lg:hidden border-y mb-2"},Oe={class:"content-benefit hidden lg:block"},Ue={class:"item"},ze=["disabled"],Re=["disabled"],Ee=["onClick"],He={__name:"sponsorBenefits",props:{viewType:{type:String,default:null}},setup(t){const m=X(()=>we),s=f(0),i=f(0);I(()=>s.value,(o,r)=>{d.value.select(o+1)});const d=f();return I(()=>i.value,async(o,r)=>{s.value=o}),(o,r)=>{const p=U,g=ee,w=te,b=re,S=se;return a(),n("div",ye,[_(p,{class:"-my-[1px]"},{default:h(()=>[A(" 스폰서 혜택 ")]),_:1}),e("div",$e,[t.viewType==="flex"?(a(),n("div",ke,[e("ul",xe,[(a(!0),n(V,null,F(m.value,(c,u)=>(a(),n("li",{key:u,class:"list-item"},[e("figure",Se,[e("header",Ce,[e("h6",Pe,q(c.label),1)]),e("div",Ae,[_(g,{src:c.src,alt:`${c.label} 이미지`},null,8,["src","alt"])]),e("figcaption",Ie,[e("p",Le,q(c.content),1)])])]))),128))])])):(a(),n("div",Ne,[e("div",je,[e("ul",Be,[(a(!0),n(V,null,F(m.value,(c,u)=>(a(),n("li",{key:u,class:"list-item"},[e("article",{class:k(["benefit",{open:u===s.value}])},[e("header",Ve,[e("button",{onClick:y=>i.value=u,class:k(["accordian-btn",{open:u===s.value}])},[A(q(c.label)+" ",1),_(w,{name:"ep:arrow-up-bold",class:k(["btn-icon",{open:u===s.value}])},null,8,["class"])],10,Fe)]),e("section",Te,[e("div",De,[e("figure",Me,[_(g,{src:c.src},null,8,["src"])]),A(" "+q(c.content),1)])])],2)]))),128))])]),e("div",Oe,[_(S,{items:m.value,ui:{item:"basis-full"},ref_key:"carouselRef",ref:d,class:"carousel",arrows:"",indicators:""},{default:h(({item:c})=>[e("figure",Ue,[_(g,{placeholder:"",src:c.src,class:"item-image",draggable:"false"},null,8,["src"])])]),prev:h(({onClick:c,disabled:u})=>[e("button",{disabled:u,onClick:r[0]||(r[0]=y=>i.value-=1),class:"btn prev"},[_(b,{dir:"left",color:"spring-green-400"})],8,ze)]),next:h(({onClick:c,disabled:u})=>[e("button",{disabled:u,onClick:r[1]||(r[1]=y=>i.value+=1),class:"btn next"},[_(b,{dir:"right",color:"spring-green-400"})],8,Re)]),indicator:h(({onClick:c,page:u,active:y})=>[e("button",{class:k(["indicator-btn",{active:y}]),onClick:l=>i.value=u-1},null,10,Ee)]),_:1},8,["items"])])]))])])}}},ht=x(He,[["__scopeId","data-v-fe5ae757"]]),T=t=>(M("data-v-d7f82fea"),t=t(),O(),t),Je={class:"symbol","data-name":"symbol",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1775.6 260"},Ke=T(()=>e("polygon",{class:"letter",points:"370.6 130 0 130 0 260 370.6 260 502.1 130 502.1 0 370.6 130"},null,-1)),Qe=T(()=>e("rect",{class:"letter",x:"502.1",y:"130",width:"131.6",height:"130"},null,-1)),Ge=T(()=>e("polygon",{class:"letter",points:"896.9 0 806.2 89.6 765.3 130 765.3 179.1 765.3 260 896.9 260 896.9 89.6 896.9 83.7 1028.5 83.7 1028.5 0 896.9 0"},null,-1)),We=["points"],Xe=T(()=>e("rect",{class:"letter",x:"633.7",width:"131.6",height:"130"},null,-1)),Ye=["points"],j="1264 89.6 1264 0 1110.2 0 1110.2 0 1028.5 83.7 1028.5 118.3 1028.5 173 1076.4 173 1179.6 173 1179.6 260 1264 260 1264 173 1179.6 173 1179.6 89.6 1264 89.6",z="1598.2 89.6 1598.2 0 1110.2 0 1110.2 0 1028.5 83.7 1028.5 118.3 1028.5 173 1076.4 173 1179.6 173 1179.6 260 1598.2 260 1598.2 173 1179.6 173 1179.6 89.6 1598.2 89.6",B="1395.6 0 1264 0 1351.4 86.4 1395.6 130 1351.4 173.6 1264 260 1395.6 260 1395.6 260 1775.6 260 1775.6 0 1395.6 0",R="1729.8 0 1598.2 0 1685.6 86.4 1729.8 130 1685.6 173.6 1598.2 260 1729.8 260 1729.8 260 1775.6 260 1775.6 0 1729.8 0",Ze=1300,et={__name:"symbol-large",setup(t){const{counter:m,reset:s,pause:i,resume:d}=Y(1e3,{controls:!0}),o=f(["#64ff93","#fff7cf","#ffcce4","#cfdcfc"]),r=f("#64ff93"),p=f(j),g=f(B);let w=null,b=1;function S(l){w||(w=l);const C=l-w,v=Math.min(C/Ze,1),P=c(v),L=b===1?j:z,D=b===1?z:j;p.value=u(L,D,P);const N=b===1?B:R,$=b===1?R:B;g.value=u(N,$,P),v<1||(w=null,b*=-1),requestAnimationFrame(S)}function c(l){return l<.5?4*l*l*l:(l-1)*(2*l-2)*(2*l-2)+1}function u(l,C,v){const P=c(v),L=l.split(" ").map(parseFloat),D=C.split(" ").map(parseFloat),N=[];for(let $=0;$<L.length;$++)N.push((1-P)*L[$]+P*D[$]);return N.join(" ")}function y(){b=1,p.value=j,g.value=B,requestAnimationFrame(S)}return H(()=>{y()}),I(()=>m.value,(l,C)=>{var v;l>=((v=o.value)==null?void 0:v.length)?(s(),r.value=o.value[0]):r.value=o.value[l]}),(l,C)=>(a(),n("svg",Je,[e("polygon",{class:"bg",points:"1685.6 86.4 1598.2 0 1179.9 0 1179.9 0 0 0 0 260 1179.9 260 1598.2 260 1685.6 173.6 1729.8 130 1685.6 86.4",style:E({fill:r.value})},null,4),e("g",null,[e("g",null,[Ke,Qe,Ge,e("polygon",{class:"letter-pin",points:p.value},null,8,We),Xe]),e("polygon",{class:"arrow",points:g.value},null,8,Ye)])]))}},qt=x(et,[["__scopeId","data-v-d7f82fea"]]),tt=t=>(M("data-v-19ed372b"),t=t(),O(),t),st={class:"section-faq"},ot={class:"faq-list"},it={class:"faq-item"},at={class:"faq-header"},nt=["onClick"],rt=tt(()=>e("strong",null,"Q.",-1)),lt={class:"text"},ct=Z('<section class="faq-a" data-v-19ed372b><div class="faq-collapse" data-v-19ed372b><div class="collapse-content" data-v-19ed372b><div class="content" data-v-19ed372b><strong data-v-19ed372b>A.</strong><p class="text" data-v-19ed372b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur necessitatibus omnis, aliquam accusantium quaerat minus incidunt tempore vel dolore esse consectetur eligendi consequuntur quia voluptas illo vero, magni alias! At, soluta. Animi, voluptate tenetur. Possimus recusandae ullam autem doloremque, nesciunt reprehenderit qui. Aliquam, minima voluptatibus vero porro numquam perferendis alias dolore quos consectetur aut autem fugiat sit, eligendi nemo. Hic laborum maiores, doloremque ab quibusdam ullam quis minima nostrum dicta quo incidunt similique praesentium officia cupiditate maxime inventore magnam dignissimos odit rem ea aliquid. Odit autem dignissimos eaque recusandae! Excepturi veritatis iure atque, reiciendis praesentium id nesciunt quisquam assumenda eligendi ut odio obcaecati facere perspiciatis mollitia laborum aliquam. Sit deserunt eligendi commodi ab sint dolore quidem quia magni iusto autem mollitia perferendis reprehenderit, natus adipisci at quibusdam velit. Consectetur quae maiores tenetur fugiat sint facere blanditiis iusto consequuntur, perspiciatis explicabo dolorem sed cumque dolor tempora minus a commodi fuga saepe vero ratione quod magnam. Delectus quas suscipit debitis veniam eos unde architecto, voluptates reprehenderit exercitationem quisquam velit fugit deleniti similique dolore eaque error autem voluptas fuga nisi vel! Distinctio in eius reprehenderit saepe doloribus ut odio vero, ratione veniam nulla natus ipsum doloremque. Corporis, distinctio repudiandae omnis nihil eius quod? </p></div><span class="block border-t border-grayscale-800 -mt-1" data-v-19ed372b></span></div></div></section>',1),ut={__name:"faq",props:{data:{type:String,default:null}},setup(t){const m=f(12),s=f(null),i=d=>{d===s.value?s.value=null:s.value=d};return(d,o)=>{const r=U;return a(),n("section",st,[_(r,null,{default:h(()=>[A(" 자주 묻는 질문 ")]),_:1}),e("ul",ot,[(a(!0),n(V,null,F(m.value,p=>(a(),n("li",it,[e("article",{class:k(["faq",{shown:s.value===p}])},[e("header",at,[e("button",{role:"button",class:"faq-q",onClick:g=>i(p)},[rt,e("span",lt," Lorem ipsum dolor sit, amet consectetur adipisicing elit? "+q(p),1)],8,nt)]),ct],2)]))),256))])])}}},wt=x(ut,[["__scopeId","data-v-19ed372b"]]);export{re as _,bt as a,vt as b,ht as c,qt as d,wt as e,we as f};