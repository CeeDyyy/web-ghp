import{_ as k}from"./layout.3005c493.js";import{K as u}from"./knowledge-center.41b500e7.js";import{a as w,b,r as o,o as t,c as _,w as a,h as e,t as r,e as n,i as d,F as f,f as h,y as N}from"./entry.bb2058a4.js";const D={name:"Picture-Library",data(){return{info:u.EN,Data:u,language:b()}},computed:{getLng(){return this.language.$state.language}},watch:{getLng(c){c=="EN"?this.info=this.Data.EN:this.info=this.Data.TH}},mounted(){this.$route.params.language=="en"?this.info=this.Data.EN:this.$route.params.language=="th"&&(this.info=this.Data.TH)}},L={class:"d-flex justify-center text-h3 font-weight-medium mt-16 mb-12"},E={key:0},$=["href"],j={class:"d-flex justify-center text-h5"},B=["href"],C={class:"text-center font-weight-bold text-h6"};function V(c,F,H,K,i,S){const m=o("v-divider"),g=o("v-col"),p=o("v-row"),x=k;return t(),_(x,null,{default:a(()=>[e("h1",L,r(i.info.title),1),(t(!0),n(f,null,d(i.info.contents,(s,y)=>(t(),n("div",{key:y,class:"my-16"},[s.url==="/picture-library"?(t(),n("div",E,[e("a",{href:"knowledge-center"+s.url,class:"text-black text-decoration-none"},[e("h2",j,r(s.title),1)],8,$),h(m,{class:"mx-auto mt-2 mb-4",width:"5%",thickness:"2.5px",color:"grey"}),e("div",null,[h(p,{class:"d-flex justify-space-around align-center mb-6"},{default:a(()=>[(t(!0),n(f,null,d(s.list,(l,v)=>(t(),_(g,{key:v,cols:"12",sm:"3"},{default:a(()=>[e("a",{href:"."+l.url,class:"d-flex justify-center text-black text-decoration-none"},[e("h3",C,r(l.title),1)],8,B)]),_:2},1024))),128))]),_:2},1024)])])):N("",!0)]))),128))]),_:1})}const z=w(D,[["render",V]]);export{z as default};
