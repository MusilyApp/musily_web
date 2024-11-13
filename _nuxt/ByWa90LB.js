import{d as m,i as _,t as n,v as d,x as o,J as h,K as a,L as g,M as k,r as $,N as b,z as i,A as u,B as f}from"./9BE0-fyE.js";import{_ as v}from"./DlAUqK2U.js";const B=["width","height"],z={id:"layer1"},T=["transform"],D=["transform"],C=["transform"],L=["transform"],O=m({__name:"MusilyLogo",props:{width:{default:"50px"},height:{default:"50px"},color:{default:"primary-color-fill"}},setup(c){const e=_(()=>"matrix(2.2103642,0,0,2.2103642,-178.83088,-168.01899)"),t=_(()=>"matrix(4.1879507,0,0,4.1879507,-1474.247,-171.14083)"),p=_(()=>"matrix(-2.4086062,2.4086062,2.4086062,2.4086062,799.05868,-908.82819)"),l=_(()=>"matrix(2.4086062,2.4086062,-2.4086062,2.4086062,-514.67338,-908.85235)");return(s,r)=>(n(),d("svg",{width:s.width,height:s.height,viewBox:"0 0 270.93333 270.93333",xmlns:"http://www.w3.org/2000/svg","xmlns:svg":"http://www.w3.org/2000/svg","aria-hidden":"true"},[o("g",z,[o("g",{id:"g1",transform:h(e),class:a(s.color),style:{fillOpacity:1,strokeWidth:.670686,strokeDasharray:"none"}},[o("path",{id:"path10",class:a(s.color),style:{fillOpacity:1,strokeWidth:.160147,strokeDasharray:"none"},d:"m 385.64632,64.295236 c 1.40264,-0.0029 3.34142,1.287942 4.04743,3.731006 0.52767,1.825928 0.36672,4.295465 -1.22131,7.349485 -0.95112,1.829138 -2.13476,3.416184 -2.88713,4.347455 -0.69524,-1.07762 -1.28088,-2.454208 -2.03749,-4.094438 -0.29872,-0.647564 -2.37813,-5.286075 -1.82906,-7.76585 0.35302,-1.59432 1.31745,-3.562201 3.92756,-3.567658 z",transform:h(t)},null,10,D),o("g",{id:"g10-0",transform:h(p),class:a(s.color),style:{fillOpacity:1,strokeWidth:.196897,strokeDasharray:"none"}},r[0]||(r[0]=[o("path",{id:"path9-2",d:"m 356.36106,68.357885 c 0.7737,-1.636422 2.16101,-2.778077 4.30219,-2.782553 3.01342,-0.0063 8.03947,4.844435 3.47466,13.62322 -1.16938,2.248885 -2.62465,4.200123 -3.54967,5.3451 -0.31942,-2.029155 -2.36407,-5.318959 -3.73743,-8.25649 -1.33988,-2.543341 -1.65956,-5.261498 -0.48975,-7.929277 z"},null,-1),o("path",{id:"path10-3",d:"m 356.36106,68.357885 c 0.7737,-1.636422 2.16101,-2.778077 4.30219,-2.782553 3.01342,-0.0063 8.03947,4.844435 3.47466,13.62322 -1.16938,2.248885 -2.62465,4.200123 -3.54967,5.3451 -0.31942,-2.029155 -2.36407,-5.318959 -3.73743,-8.25649 -1.33988,-2.543341 -1.65956,-5.261498 -0.48975,-7.929277 z"},null,-1)]),10,C),o("g",{id:"g10-2",transform:h(l),class:a(s.color),style:{fillOpacity:1,strokeWidth:.196897,strokeDasharray:"none"}},r[1]||(r[1]=[o("path",{id:"path9-28",d:"m 356.36106,68.357885 c 0.7737,-1.636422 2.16101,-2.778077 4.30219,-2.782553 3.01342,-0.0063 8.03947,4.844435 3.47466,13.62322 -1.16938,2.248885 -2.62465,4.200123 -3.54967,5.3451 -0.31942,-2.029155 -2.36407,-5.318959 -3.73743,-8.25649 -1.33988,-2.543341 -1.65956,-5.261498 -0.48975,-7.929277 z"},null,-1)]),10,L),o("path",{id:"path12-3",class:a(s.color),style:{fillOpacity:1,stroke:"none",strokeWidth:.670686,strokeDasharray:"none",strokeOpacity:1},d:"m 104.57359,169.7411 c 21.49113,-5.72538 45.43826,-5.80657 67.33108,-2.76881 3.2103,0.53508 13.53472,2.62545 12.6302,7.26078 -1.23796,4.62171 -10.08538,0.80733 -12.99545,-0.0135 -36.41781,-9.6677 -77.606488,-1.28685 -66.96583,-4.47843 z"},null,2)],10,T)])],8,B))}}),j=v(O,[["__scopeId","data-v-10d90cbc"]]),F=m({__name:"Text",props:{font:{default:"label-medium"},color:{default:()=>"text-color-text"},overflow:{default:void 0},opacity:{default:1}},setup(c){return(e,t)=>(n(),d("span",{class:a([e.font,e.color]),style:k({opacity:e.opacity})},[e.overflow?(n(),d("div",{key:0,class:a({"text-overflow-ellipsis":e.overflow==="ellipsis"})},[g(e.$slots,"default")],2)):g(e.$slots,"default",{key:1})],6))}}),W=m({__name:"CircularProgress",props:{color:{default:"primary-color-border-top"}},setup(c){return(e,t)=>(n(),d("span",{class:a(["loader",e.color])},null,2))}}),N=["disabled"],E=m({__name:"FilledButton",props:{disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},emits:["click"],setup(c,{emit:e}){const t=c,p=e;function l(){!t.disabled&&!t.loading&&p("click")}const s=$(!1);function r(){s.value=!0}function w(){s.value=!1}return(y,q)=>{const x=W;return n(),d("button",{class:a(["ly-filled-button"]),disabled:y.disabled,onClick:l,onFocus:r,onBlur:w},[y.loading?(n(),b(x,{key:0,color:"on-primary-color-border-top"})):g(y.$slots,"default",{key:1},void 0,!0)],40,N)}}}),M=v(E,[["__scopeId","data-v-f2c59ae0"]]),S={style:{height:"calc(100vh - 100px)"},class:"d-flex flex-col align-center justify-center px-5"},V={class:"d-flex justify-center"},A={class:"d-flex justify-center align-center"},I={class:"text-align-center"},P={class:"text-align-center"},J={class:"mt-2 text-align-center"},K={class:"d-flex justify-center mt-3 flex-col flex-md-row",style:{gap:"4px"}},Q=m({__name:"index",setup(c){return(e,t)=>{const p=j,l=F,s=M;return n(),d("div",S,[o("nav",V,[i(p,{width:"150px",height:"150px"})]),o("div",A,[o("div",I,[i(l,{font:"display-small-200"},{default:u(()=>t[0]||(t[0]=[f(" Enjoy your music with ")])),_:1}),o("div",P,[i(l,{font:"display-small-600"},{default:u(()=>t[1]||(t[1]=[f(" A great music app. ")])),_:1})]),o("div",J,[i(l,{font:"label-small-300",opacity:.5},{default:u(()=>t[2]||(t[2]=[f(" Simple and free music app with no distractions, no ads. Esfficient and easy to use. ")])),_:1})]),o("div",K,[i(s,null,{default:u(()=>t[3]||(t[3]=[f("Download")])),_:1}),i(s,null,{default:u(()=>t[4]||(t[4]=[f("Download via Telegram")])),_:1})])])])])}}});export{Q as default};
