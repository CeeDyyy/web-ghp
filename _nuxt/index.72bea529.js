import{_ as k}from"./layout.3005c493.js";import{P as u}from"./product-brochure.fc10b706.js";import{a as w,b as N,r as a,o as t,c as h,w as r,h as e,t as c,e as o,i as d,F as _,f}from"./entry.bb2058a4.js";const b={name:"Product-Brochure",data(){return{info:u.EN,Data:u,language:N()}},computed:{getLng(){return this.language.$state.language}},watch:{getLng(i){i=="EN"?this.info=this.Data.EN:this.info=this.Data.TH}},mounted(){this.$route.params.language=="en"?this.info=this.Data.EN:this.$route.params.language=="th"&&(this.info=this.Data.TH)}},B={class:"d-flex justify-center text-h3 font-weight-medium mt-16 mb-12"},D=["href"],E={class:"d-flex justify-center text-h5"},L=["href"],$=["src"],j={key:1,class:"text-center font-weight-bold text-h6"};function P(i,C,F,H,l,S){const m=a("v-divider"),g=a("v-col"),p=a("v-row"),x=k;return t(),h(x,null,{default:r(()=>[e("h1",B,c(l.info.title),1),(t(!0),o(_,null,d(l.info.contents,(n,y)=>(t(),o("div",{key:y,class:"my-16"},[e("a",{href:"product-brochure"+n.url,class:"text-black text-decoration-none"},[e("h2",E,c(n.title),1)],8,D),f(m,{class:"mx-auto mt-2 mb-4",width:"5%",thickness:"2.5px",color:"grey"}),e("div",null,[f(p,{class:"d-flex justify-space-around align-center mb-6"},{default:r(()=>[(t(!0),o(_,null,d(n.list,(s,v)=>(t(),h(g,{key:v,cols:"12",sm:"3"},{default:r(()=>[e("a",{href:"product-brochure"+s.url,class:"d-flex justify-center text-black text-decoration-none"},[s.img!==""?(t(),o("img",{key:0,src:s.img,width:"200"},null,8,$)):(t(),o("h3",j,c(s.title),1))],8,L)]),_:2},1024))),128))]),_:2},1024)])]))),128))]),_:1})}const z=w(b,[["render",P]]);export{z as default};
