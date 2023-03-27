import{_ as N}from"./layout.3005c493.js";import{B as C}from"./banner.08a3b69c.js";import{a as V,C as c,b as E,r as n,o as s,e as r,f as t,w as e,F as i,h as _,t as l,i as f,v as L}from"./entry.bb2058a4.js";const z={name:"Contact",components:{BannerVue:C},data(){return{contact:c.EN,language:E()}},computed:{getLng(){return this.language.$state.language}},watch:{getLng(m){m=="EN"?this.contact=c.EN:this.contact=c.TH}},mounted(){this.$route.params.language=="en"&&(this.contact=c.EN),this.$route.params.language=="th"&&(this.contact=c.TH)}},T={class:"text-center"},j={class:"text-h6 mb-5"},F={class:"text-center"},H={class:"text-h5 mb-5"};function M(m,S,q,D,o,G){const h=n("BannerVue"),u=n("v-icon"),d=n("v-avatar"),p=n("v-card-item"),v=n("v-card"),g=n("v-col"),x=n("v-btn"),b=n("v-card-actions"),k=n("v-img"),w=n("v-row"),y=n("v-container"),B=N;return s(),r(i,null,[t(h,{title:o.contact.title},null,8,["title"]),t(B,null,{default:e(()=>[t(y,{class:"mt-n16"},{default:e(()=>[t(w,{class:"mt-n16"},{default:e(()=>[t(g,{class:"px-sm-16 px-md-6 px-lg-16",cols:"12",md:"6"},{default:e(()=>[t(v,{class:"mx-auto"},{default:e(()=>[t(p,null,{default:e(()=>[_("div",T,[t(d,{size:"64",class:"my-3"},{default:e(()=>[t(u,{icon:"mdi-phone",size:"60",color:"green-darken-4"})]),_:1}),_("div",j,l(o.contact.phone.title),1),(s(!0),r(i,null,f(o.contact.phone.contents,a=>(s(),r("div",{class:"text-body-1 mb-4",key:a},l(a),1))),128))])]),_:1})]),_:1})]),_:1}),t(g,{class:"px-sm-16 px-md-6 px-lg-16",cols:"12",md:"6"},{default:e(()=>[t(v,{class:"mx-auto"},{default:e(()=>[t(p,null,{default:e(()=>[_("div",F,[t(d,{size:"64",class:"my-3"},{default:e(()=>[t(u,{icon:"mdi-map-marker",size:"60",color:"green-darken-4"})]),_:1}),_("div",H,l(o.contact.location.title),1),(s(!0),r(i,null,f(o.contact.location.contents,a=>(s(),r("div",{class:"text-body-1 mb-4",key:a},l(a),1))),128))])]),_:1}),t(b,{class:"d-flex justify-end"},{default:e(()=>[t(x,{variant:"outlined",color:"green-darken-4",href:"https://goo.gl/maps/tt8ZuMeBCbkqshgG6",target:"_blank",rel:"noreferrer","prepend-icon":"mdi-image-marker"},{default:e(()=>[L(l(o.contact.location.button),1)]),_:1})]),_:1}),t(k,{src:"https://www.upkasia.com/wp-content/uploads/2015/05/Map-UPK.jpg",cover:"",class:"ma-4"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}const Z=V(z,[["render",M]]);export{Z as default};
