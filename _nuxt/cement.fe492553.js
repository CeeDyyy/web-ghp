import{_ as d}from"./layout.3005c493.js";import{B as g}from"./banner.08a3b69c.js";import{K as h}from"./kumear.e104b838.js";import{a as x,b as v,r as e,o as w,e as b,f as t,w as o,F as B,h as r,t as i}from"./entry.bb2058a4.js";const N={title:"General Industries",subtitle:"Cement",content:""},V={title:"\u0E2D\u0E38\u0E15\u0E2A\u0E32\u0E2B\u0E01\u0E23\u0E23\u0E21\u0E17\u0E31\u0E48\u0E27\u0E44\u0E1B",subtitle:"\u0E2D\u0E38\u0E15\u0E2A\u0E32\u0E2B\u0E01\u0E23\u0E23\u0E21\u0E0B\u0E35\u0E40\u0E21\u0E19\u0E15\u0E4C",content:""},n={EN:N,TH:V},E={name:"Cement",components:{BannerVue:g,KumearVue:h},data(){return{cement:n.EN,language:v()}},computed:{getLng(){return this.language.$state.language}},watch:{getLng(c){c=="EN"?this.cement=n.EN:this.cement=n.TH}},mounted(){this.$route.params.language=="en"&&(this.cement=n.EN),this.$route.params.language=="th"&&(this.cement=n.TH)}},H={class:"d-flex justify-center text-h4 font-weight-thin mb-4"};function y(c,C,K,L,s,T){const m=e("BannerVue"),l=e("v-divider"),u=e("v-img"),a=e("v-col"),_=e("v-row"),p=e("KumearVue"),f=d;return w(),b(B,null,[t(m,{title:s.cement.title},null,8,["title"]),t(f,null,{default:o(()=>[r("h1",H,i(s.cement.subtitle),1),t(l,{class:"mx-auto mt-2 mb-16",width:"5%",thickness:"2.5px",color:"grey"}),t(_,null,{default:o(()=>[t(a,{cols:"12",sm:"6",class:"d-flex justify-center"},{default:o(()=>[t(u,{src:"https://images.unsplash.com/photo-1630816058207-b99271ccab34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",width:"400","aspect-ratio":3/2})]),_:1}),t(a,{cols:"12",sm:"6",class:"d-flex align-center text-center"},{default:o(()=>[r("div",null,i(s.cement.content),1)]),_:1})]),_:1}),t(p)]),_:1})],64)}const G=x(E,[["render",y]]);export{G as default};
