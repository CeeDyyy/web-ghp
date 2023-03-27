import{_ as l}from"./layout.3005c493.js";import{B as m}from"./banner.08a3b69c.js";import{a as d,b as p,r as a,o as h,e as f,f as n,w as g,F as _,h as t,t as o}from"./entry.bb2058a4.js";const w={heading:"Knowledge Center",title:"Lube oil systems \u2013 API 614",subtitle:"Explore our smooth operating lube systems",content:"The lube oil systems are custom engineered to meet the industry lubrication needs. Manufactured and tested as per Aramco specification 32-SAMSS-013, API 614, API 611, API 610, API 618 as well as manufacturer\u2019s standards.",img:"https://www.sulzer.com/-/media/images/products/pumps/firewater-pumps/dsc_7570.ashx?mw=564&hash=37C0FC924276842EF748D52EB1349D4BFC52043C"},b={heading:"\u0E2A\u0E32\u0E23\u0E30\u0E19\u0E48\u0E32\u0E23\u0E39\u0E49",title:"Lube oil systems \u2013 API 614",subtitle:"Explore our smooth operating lube systems",content:"The lube oil systems are custom engineered to meet the industry lubrication needs. Manufactured and tested as per Aramco specification 32-SAMSS-013, API 614, API 611, API 610, API 618 as well as manufacturer\u2019s standards.",img:"https://www.sulzer.com/-/media/images/products/pumps/firewater-pumps/dsc_7570.ashx?mw=564&hash=37C0FC924276842EF748D52EB1349D4BFC52043C"},s={EN:w,TH:b},x={name:"LubeOilSystemsAPI614",components:{BannerVue:m},data(){return{info:s.EN,language:p()}},computed:{getLng(){return this.language.$state.language}},watch:{getLng(i){i=="EN"?this.info=s.EN:this.info=s.TH}},mounted(){this.$route.params.language=="en"&&(this.info=s.EN),this.$route.params.language=="th"&&(this.info=s.TH)}},y={class:"d-flex justify-center text-h4 font-weight-thin mb-4"},A={class:"d-flex justify-center text-h6 mb-16 text-center"},E={class:"my-4"},B={class:"d-flex justify-center"},C=["src","alt"];function I(i,P,S,N,e,F){const r=a("BannerVue"),c=a("v-divider"),u=l;return h(),f(_,null,[n(r,{title:e.info.heading},null,8,["title"]),n(u,null,{default:g(()=>[t("h1",y,o(e.info.title),1),n(c,{class:"mx-auto mt-2 mb-4",width:"5%",thickness:"2.5px",color:"grey"}),t("h3",A,o(e.info.subtitle),1),t("p",E,o(e.info.content),1),t("div",B,[t("img",{src:e.info.img,width:"600",cover:"",alt:e.info.title},null,8,C)])]),_:1})],64)}const D=d(x,[["render",I]]);export{D as default};
