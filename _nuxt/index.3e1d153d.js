import{a as f,z as x,b as g,r as l,o as w,e as b,f as t,w as e,A as v,h as s,t as a,v as h}from"./entry.bb2058a4.js";import k from"./order.747c3d89.js";const y={title:"Online Tools",subtitle:"Tools Lorem ipsum dolor sit amet, consectetur adipiscing elit.",sulzer:{title:"Sulzer Pumps",subtitle:"Purchase good quality pump ~~~"},kumera:{title:"Kumera Gear",subtitle:"Kumera Power-Plaza is the online digital marketplace for Kumera Power Transmissions and associated spare parts."}},z={title:"\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E2D\u0E2D\u0E19\u0E44\u0E25\u0E19\u0E4C",subtitle:"\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D \u0E1E\u0E32\u0E27\u0E40\u0E27\u0E2D\u0E23\u0E4C\u0E1A\u0E39\u0E4A \u0E1B\u0E32\u0E2A\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E41\u0E2B\u0E27\u0E27\u0E2A\u0E44\u0E15\u0E23\u0E04\u0E4C\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E04\u0E27\u0E32\u0E23\u0E34\u0E0A\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E04\u0E32\u0E23\u0E4C \u0E2A\u0E35\u0E48\u0E41\u0E22\u0E01 \u0E42\u0E1A\u0E15\u0E31\u0E4B\u0E19 \u0E41\u0E1A\u0E15",sulzer:{title:"Sulzer Pumps",subtitle:"Purchase good quality pump ~~~"},kumera:{title:"Kumera Gear",subtitle:"Kumera Power-Plaza is the online digital marketplace for Kumera Power Transmissions and associated spare parts."}},n={EN:y,TH:z};const P={name:"Orders",components:{OrderVue:k},setup(){const{smAndUp:i}=x();return{smAndUp:i}},data(){return{tools:n.EN,language:g()}},computed:{getLng(){return this.language.$state.language}},watch:{getLng(i){i=="EN"?this.tools=n.EN:this.tools=n.TH}},mounted(){this.$route.params.language=="en"&&(this.tools=n.EN),this.$route.params.language=="th"&&(this.tools=n.TH)}},T={class:"d-flex justify-center text-h3 text-white"},N={class:"d-flex justify-center text-h6 text-white mb-16 text-center"},j={class:"text-h4 text-white text-center"},E={class:"text-subtitle-1 text-white text-center mx-16"},H={class:"d-flex justify-center"},K={class:"text-h4 text-white text-center"},A={class:"text-subtitle-1 text-white text-center mx-16"},B={class:"d-flex justify-center"};function S(i,V,D,u,o,G){const r=l("v-divider"),d=l("v-btn"),c=l("v-container"),m=l("v-col"),_=l("v-row"),p=l("v-parallax");return w(),b("div",null,[t(p,{class:v(["d-flex justify-center",u.smAndUp?"align-center mt-n16":"pt-10"]),src:"https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",height:u.smAndUp?"100vh":"100%"},{default:e(()=>[t(c,null,{default:e(()=>[s("h1",T,a(o.tools.title),1),t(r,{class:"mx-auto mt-2 mb-4",width:"10%",thickness:"2.5px",color:"white"}),s("h3",N,a(o.tools.subtitle),1),t(c,null,{default:e(()=>[t(_,null,{default:e(()=>[t(m,{cols:"12",sm:"6"},{default:e(()=>[t(c,{class:"d-flex justify-center"},{default:e(()=>[s("div",null,[s("h2",j,a(o.tools.sulzer.title),1),s("h5",E,a(o.tools.sulzer.subtitle),1),t(r,{class:"mt-2 mb-3 mx-auto",width:"10%",thickness:"2.5px",color:"white"}),s("div",H,[t(d,{variant:"flat",class:"bg-yellow-darken-1 text-green-darken-4 font-weight-bold mt-3",href:"online-tools/sulzer-pumps","min-width":"9rem"},{default:e(()=>[h(" Sulzer Pumps ")]),_:1})])])]),_:1})]),_:1}),t(r,{vertical:"",color:"white",class:"d-none d-sm-flex"}),t(m,{cols:"12",sm:"6"},{default:e(()=>[t(c,{class:"d-flex justify-center"},{default:e(()=>[s("div",null,[s("h2",K,a(o.tools.kumera.title),1),s("h5",A,a(o.tools.kumera.subtitle),1),t(r,{class:"mt-2 mb-3 mx-auto",width:"10%",thickness:"2.5px",color:"white"}),s("div",B,[t(d,{variant:"flat",class:"bg-yellow-darken-1 text-green-darken-4 font-weight-bold mt-3",href:"online-tools/kumera-gear","min-width":"9rem"},{default:e(()=>[h(" Kumera Power Plaza ")]),_:1})])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["class","height"])])}const C=f(P,[["render",S],["__scopeId","data-v-a4315fdb"]]);export{C as default};
