import{P as G,_ as q,o as a,c as r,p as E,e as A,a as e,k as l,g as z,Q as H,m as P,G as U,A as K,R as I,h as $,F as b,n as y,M as J,t as V,q as Z,b as s,w as p,s as N,d as k}from"./Bc1ekGIV.js";import{_ as j,a as M}from"./DoIwaU_Y.js";import{_ as O}from"./S_NYMxyP.js";import{u as ee,a as T,b as B}from"./BuS1H8og.js";import{_ as L}from"./B7ckmyYV.js";import{_ as te}from"./Bjz4UKv2.js";const se=G("/video/reels-dummy.mp4"),F=t=>(E("data-v-8caa6924"),t=t(),A(),t),oe={id:"hero"},ne=F(()=>e("div",{class:"title"},[e("h1",null,"5th ATC HERE"),e("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit voluptatem tempore dolore ab quasi laboriosam eum veniam nisi, tempora praesentium quam deleniti beatae autem! Consequatur harum temporibus praesentium accusamus. ")],-1)),ae=F(()=>e("div",{class:"content"},[e("video",{src:se,autoplay:"",playsinline:"",muted:"",loop:""})],-1)),re=[ne,ae],ce={__name:"hero",props:{data:{type:String,default:null}},setup(t){return(v,n)=>(a(),r("section",oe,re))}},ie=q(ce,[["__scopeId","data-v-8caa6924"]]),le={class:"item-description"},ue={key:0},_e={class:"item-image-wrapper"},de={class:"marquee-images"},me={__name:"scrollHorizontal",props:{items:{type:Array,default:()=>[]}},setup(t){const v=t,n=l(null),_=l(null),i=l(null),h=z(()=>{var u;return(u=n==null?void 0:n.value)==null?void 0:u.offsetTop}),o=H({currentScrollTop:0,scrollX:0,scrollY:0,isSticky:!1}),{sourceType:d}=ee(n);T(n);const g=T(_);T(i);const f=z(()=>{const u=v.items.length;return g.width.value*(u-1)+(u+1)*40+160});z(()=>data);const w=()=>{if(!n.value||!i.value)return;const u=g.top.value<=0;o.isSticky=u},S=u=>{o.currentScrollTop=window.scrollY||document.documentElement.scrollTop,w(),(o!=null&&o.isSticky||d.value==="mouse")&&(o.scrollX=o.currentScrollTop-h.value)},c=l(!1),x=()=>{c.value=window.innerWidth<=1024};return P(c,u=>{}),U(()=>{c.value=window.innerWidth<=1024,window.addEventListener("resize",x),window.addEventListener("scroll",S,{passive:!0})}),K(()=>{window.removeEventListener("resize",x),window.removeEventListener("scroll",S)}),(u,Ze)=>{const Q=O,X=j,Y=M;return a(),r("div",null,[e("div",{class:N(["horizontal-scroll",{"is-mobile-view":c.value}]),ref_key:"wrapper",ref:n,style:{}},[e("div",{class:"horizontal-scroll-body",ref_key:"body",ref:_},[e("div",{class:"horizontal-scroll-container",ref_key:"container",ref:i},[e("div",{class:"horizontal-scroll-section",style:I(c.value?{transform:"translate3d(0, 0, 0)"}:{transform:`translate3d(-${$(f)<=o.scrollX?$(f):o.scrollX}px, 0, 0)`}),ref:"scrollSection"},[(a(!0),r(b,null,y(t.items,(m,W)=>(a(),r("article",{class:"item",key:W},[J(u.$slots,"item-description",{},()=>[e("div",le,[e("h4",null,V(m.description.title),1),m!=null&&m.description.paragraph?(a(),r("p",ue,V(m==null?void 0:m.description.paragraph),1)):Z("",!0)])],!0),e("figure",_e,[s(Q,{fit:"cover",src:m.src,preload:""},null,8,["src"])])]))),128))],4),s(Y,null,{default:p(()=>[e("div",de,[(a(),r(b,null,y(10,m=>s(X,{key:m})),64))])]),_:1})],512)],512)],2),e("div",{class:"hidden lg:block scroll-block",style:I({height:c.value?"unset":`${$(f)}px`})},null,4)])}}},pe=q(me,[["__scopeId","data-v-ec052dcb"]]),C=t=>(E("data-v-2751bee9"),t=t(),A(),t),ve={class:"content"},he={class:"part inner"},fe=C(()=>e("header",{class:"article-header"},[e("h5",null,"내국인")],-1)),ge=C(()=>e("section",{class:"article-body"},[e("p",null," 내국인에겐 내국어 설명으로만 이루어지도록 작성하고, 외국인내용으로는 영어만 작성함 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe atque laborum, porro consequuntur quos vel mollitia accusamus! Quaerat, earum. Similique, explicabo quos? Mollitia pariatur nihil molestiae beatae voluptatem porro voluptatibus? ")],-1)),be={class:"article-footer"},ye={class:"part outer"},we=C(()=>e("header",{class:"article-header"},[e("h5",null,"for Foreigners")],-1)),$e=C(()=>e("section",{class:"article-body"},[e("p",null," 안에들어가는 내용은 글자로 했지만, 슬라이드사진을 넣어도 될것같습니다. 혹은 그래픽으로요. praesentium soluta sed consequuntur doloremque pariatur fugiat, itaque aliquam tempore iste veritatis magni ipsum voluptates totam? Impedit inventore vitae ratione, molestias quas voluptas vel nulla deserunt voluptatem cum. Accusamus incidunt pariatur possimus sapiente aut doloremque at dolor aliquid iste eos voluptatem cum excepturi dolores eius quaerat commodi accusantium vel nemo quod, modi voluptatum, quidem labore, molestiae ducimus. Illum animi vitae quis cum nobis accusantium possimus iure doloremque impedit. ")],-1)),ke={class:"article-footer"},qe={__name:"conference",props:{data:{type:String,default:null}},setup(t){const v=l(),[n,_]=[l(null),l(null)],[i,h]=[l(!1),l(!1)];return B(n,([{isIntersecting:o}],d)=>{i.value=o}),B(_,([{isIntersecting:o}],d)=>{h.value=o}),(o,d)=>{const g=L,f=te,w=O;return a(),r("section",{class:"section-conference border-b-0",ref_key:"container",ref:v},[s(g,null,{default:p(()=>[k(" CONFERENCE ")]),_:1}),e("div",ve,[e("section",he,[e("article",{class:"article",style:I({transform:`rotate(-4deg) translateY(${$(i)?"0":"150%"})`}),ref_key:"partInner",ref:n},[fe,ge,e("footer",be,[s(f,{class:"link-item inner",to:"https://www.event-us.kr/1986production/event/79474?utm_source=eventus&utm_medium=organic&utm_campaign=search-result&utm_term=%ED%8A%B8%EB%A0%88%EC%9D%BC)",target:"_blank"},{default:p(()=>[k(" 내국인 예약하기 ")]),_:1})])],4),s(w,{class:"bg",src:"/images/dummy.jpeg"})]),e("section",ye,[e("article",{class:"article",style:I({transform:`rotate(-4deg) translateY(${$(h)?"0":"150%"})`}),ref_key:"partOuter",ref:_},[we,$e,e("footer",ke,[s(f,{class:"link-item outer",to:"https://www.eventbrite.com/e/5th-asia-trails-conference-tickets-873734773227?aff=oddtdtcreator",target:"_blank"},{default:p(()=>[k(" Reserve! ")]),_:1})])],4),s(w,{class:"bg",src:"/images/dummy.jpeg"})])])],512)}}},Se=q(qe,[["__scopeId","data-v-2751bee9"]]),xe={class:"section-festival border-b-0"},Ie=e("div",{class:"border-t min-h-svh"},"...",-1),Ee={__name:"festival",props:{data:{type:String,default:null}},setup(t){return(v,n)=>{const _=L;return a(),r("section",xe,[s(_,null,{default:p(()=>[k(" WALKING FESTIVAL ")]),_:1}),Ie])}}},Ae=Ee,R=t=>(E("data-v-3243e0af"),t=t(),A(),t),Le={class:"section-faq"},Ce={class:"faq-list"},ze={class:"faq-item"},Te={class:"faq-header"},Ve=["onClick"],Be=R(()=>e("strong",null,"Q.",-1)),Ne={class:"text"},je=R(()=>e("section",{class:"faq-a"},[e("div",{class:"faq-collapse"},[e("div",{class:"collapse-content"},[e("strong",null,"A."),e("p",{class:"text"}," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad totam laborum delectus nulla fugit non autem, quibusdam optio sunt voluptates odit dignissimos, ipsam at cum possimus nobis unde error consequatur? ")])])],-1)),Me={__name:"faq",props:{data:{type:String,default:null}},setup(t){const v=l(12),n=l(null),_=i=>{i===n.value?n.value=null:n.value=i};return(i,h)=>{const o=L;return a(),r("section",Le,[s(o,null,{default:p(()=>[k(" FAQ ")]),_:1}),e("ul",Ce,[(a(!0),r(b,null,y(v.value,d=>(a(),r("li",ze,[e("article",{class:N(["faq",{shown:n.value===d}])},[e("header",Te,[e("button",{role:"button",class:"faq-q",onClick:g=>_(d)},[Be,e("span",Ne," Lorem ipsum dolor sit, amet consectetur adipisicing elit? "+V(d),1)],8,Ve)]),je],2)]))),256))])])}}},Oe=q(Me,[["__scopeId","data-v-3243e0af"]]),Fe=[{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"},{name:"우리은행",src:"wooribank.svg"}],D=t=>(E("data-v-dc50f1b2"),t=t(),A(),t),Re={class:"marquee-images"},De={class:"section-sponsorers border-b-0"},Qe={class:"list-wrapper"},Xe={class:"list-container"},Ye={class:"list-sponsor"},We={class:"logo"},Ge=["src","alt"],He=D(()=>e("div",{class:"border-t min-h-screen"},"스폰셔 혜택...",-1)),Pe=D(()=>e("div",{class:"border-t"},"미팅 예약페이지로 이동 버튼...",-1)),Ue={class:"marquee-images"},Ke={class:"marquee-images"},Je={__name:"index",setup(t){const v=l([{src:"/images/dummy.jpeg",description:{title:"지리산이 속삭이는생명, 평화, 공존의 메세지"}},{src:"/images/dummy.jpeg",description:{title:"대한민국 최초·최대 국립공원",paragraph:"1967년 대한민국 1호 국립공원 지정 총 면적 483km² 대한민국 최대 국립공원 (여의도 면적의 57.5배)"}},{src:"/images/dummy.jpeg",description:{title:"우리나라 최다 생물종 서식지",paragraph:"국내 국립공원 중 최다 생물종(8,869종) 서식지 반달곰 등 멸종위기 129종 서식지(2023년)"}},{src:"/images/dummy.jpeg",description:{title:"우리나라 최초 도보여행 순례길",paragraph:"2007년 대한민국 최초 장거리 도보여행 순례길 조성 / 2021년 대한민국 1호 국가숲길 지정"}},{src:"/images/dummy.jpeg",description:{title:"우리나라 최대 트래킹 성지",paragraph:"지리산둘레길 이용객수 616만명 (2023년 누적) / 총 길이 289.4km 순례자(완주자) 2,988명 (2023년 누적)"}}]);return(n,_)=>{const i=ie,h=j,o=M,d=pe,g=Se,f=Ae,w=L,S=Oe;return a(),r("div",null,[s(i),s(o,null,{default:p(()=>[e("div",Re,[(a(),r(b,null,y(10,c=>s(h,{key:c})),64))])]),_:1}),s(d,{items:v.value},null,8,["items"]),s(g),s(f),e("section",De,[s(w,null,{default:p(()=>[k(" SPONSORS ")]),_:1}),e("div",Qe,[e("div",Xe,[e("ul",Ye,[(a(!0),r(b,null,y($(Fe),(c,x)=>(a(),r("li",{key:x},[e("div",We,[e("img",{src:`/images/sponsors/${c.src}`,alt:`${c.name} 로고이미지`},null,8,Ge)])]))),128))])])]),He,Pe]),s(o,null,{default:p(()=>[e("div",Ue,[(a(),r(b,null,y(10,c=>s(h,{key:c})),64))])]),_:1}),s(S),s(o,null,{default:p(()=>[e("div",Ke,[(a(),r(b,null,y(10,c=>s(h,{key:c})),64))])]),_:1})])}}},rt=q(Je,[["__scopeId","data-v-dc50f1b2"]]);export{rt as default};