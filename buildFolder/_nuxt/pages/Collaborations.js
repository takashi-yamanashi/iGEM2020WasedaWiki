(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{399:function(t,e,x){var content=x(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,x(18).default)("f614a944",content,!0,{sourceMap:!1})},401:function(t,e,x){"use strict";var o=x(399);x.n(o).a},402:function(t,e,x){(e=x(17)(!1)).push([t.i,".left_box[data-v-3a2e271f]{padding:0}.sidebar[data-v-3a2e271f]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-3a2e271f]{padding:80px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-3a2e271f]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-3a2e271f],.h1_box_text[data-v-3a2e271f]{padding-bottom:0}.h1_text[data-v-3a2e271f]{font-size:60px}.h1_imbox[data-v-3a2e271f]{display:block;position:relative}.h1_image[data-v-3a2e271f]{position:absolute;top:-30px;left:-30px;height:150px}.h2_text[data-v-3a2e271f]{font-size:30px;border-bottom:5px solid #000}.fade-enter-active[data-v-3a2e271f],.fade-leave-active[data-v-3a2e271f]{transition:.5s}.fade-enter[data-v-3a2e271f],.fade-leave-to[data-v-3a2e271f]{opacity:0;transform:scale(0)}.navi_icon[data-v-3a2e271f]{width:200px;height:200px}.navi_image[data-v-3a2e271f]{position:relative;padding-top:100px;margin:0 auto}.navi_image[data-v-3a2e271f],.navi_text[data-v-3a2e271f]{display:block;width:200px}.navi_text[data-v-3a2e271f]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-3a2e271f]{position:absolute;top:120px;left:20px}#triangle[data-v-3a2e271f],.navi_svg[data-v-3a2e271f]{width:160px;height:160px}#triangle[data-v-3a2e271f]{stroke-dasharray:510.293}.title_text[data-v-3a2e271f]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-3a2e271f]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-3a2e271f]{width:100%;padding:0;margin:0}a[data-v-3a2e271f]:link{text-decoration:none}a[data-v-3a2e271f]:link,a[data-v-3a2e271f]:visited{color:#000}a[data-v-3a2e271f]:hover{color:#ff69b4}a[data-v-3a2e271f]:active{color:#000}",""]),t.exports=e},403:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},420:function(t,e,x){"use strict";x.r(e);x(7);var o={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1,!1,!1,!1]}},methods:{pushScrollY:function(t){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var e=0;e<this.check.length;e++)this.scrollY>=this.sectionOffsetTop[e]&&this.scrollY<this.sectionOffsetTop[e+1]&&(this.check[e]=!0);var x=document.documentElement.scrollHeight;this.scrollPer=510.293*(1-this.scrollY/(x-910))},pushElementOffsetTop:function(){var t=this;["Qdaitop","section_02","section_03","section_04","section_05","section_06"].forEach((function(e){var element=document.getElementById(e),x=Math.round(window.scrollY+element.getBoundingClientRect().top);t.sectionOffsetTop.push(x)}))},onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>500}},toTop:function(){this.$vuetify.goTo(0)}},mounted:function(){this.pushElementOffsetTop()}},r=(x(401),x(86)),l=x(123),n=x.n(l),c=x(260),v=x(389),d=x(390),_=x(179),f=x(393),h=x(403),m=x.n(h),w=x(228),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,x=t._self._c||e;return x("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[x("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[x("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?x("v-col",{staticClass:"left_box",attrs:{align:"left"}},[x("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[x("v-row",{staticClass:"navi_image"},[x("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[x("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),t._v(" "),x("circle",{style:{"stroke-dashoffset":t.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),t._v(" "),t._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),t._v(" "),x("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),t._v(" "),x("v-row",{staticClass:"navi_text"},[x("a",{attrs:{href:"Collaborations#Qdai"}},[x("v-row",{class:{title_text:!0,title_text_active:t.check[0]}},[t._v("Qai")])],1),t._v(" "),x("v-row",{class:{title_text:!0,title_text_active:t.check[1]}},[t._v(" Title1 2 ")]),t._v(" "),x("v-row",{class:{title_text:!0,title_text_active:t.check[2]}},[t._v(" Title2 3 ")]),t._v(" "),x("v-row",{class:{title_text:!0,title_text_active:t.check[3]}},[t._v(" Top2 4 ")]),t._v(" "),x("v-row",{class:{title_text:!0,title_text_active:t.check[4]}},[t._v(" Title1 5 ")])],1)],1)],1):t._e(),t._v(" "),x("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[x("v-row",{attrs:{justify:"center","text-align":"left"}},[x("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[x("v-col",{staticClass:"h1_box_text",attrs:{id:"Qdai"}},[x("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[t._v("Collaborations")])]),t._v(" "),t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?x("v-col",{staticClass:"h1_imbox",attrs:{fluid:"","ma-0":"","pa-0":""}},[x("img",{staticClass:"h1_image",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]):t._e()],1)],1),t._v(" "),x("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"Qdaitop"}},[x("v-row",{staticClass:"row_max-box"},[x("h2",{staticClass:"h2_text"},[t._v("Qdai")])]),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("v-col",[x("h3",[t._v("About")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                          ")])],1),t._v(" "),x("v-col",[x("img",{attrs:{src:"https://2020.igem.org/wiki/images/0/01/T--Waseda--iGEMwasedalogo.svg"}})])],1),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("v-col",[x("img",{attrs:{src:"https://2020.igem.org/wiki/images/0/01/T--Waseda--iGEMwasedalogo.svg"}})]),t._v(" "),x("v-col",[x("h3",[t._v("Why did we decide to do this collaboration?")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext text\n                        ")])],1)],1),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("v-row",{staticClass:"row_max-box"},[x("h3",[t._v("How did we help each other?")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                          ")])],1)],1),t._v(" "),x("v-row",{staticClass:"row_max-box",attrs:{fluid:"","ma-0":"","pa-0":""}},[x("v-col",{staticClass:"row_max-box"},[x("h3",[t._v("What did we learn from this collaboration?")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                          ")])],1)],1),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("img",{attrs:{src:"https://2020.igem.org/wiki/images/0/01/T--Waseda--iGEMwasedalogo.svg"}})])],1),t._v(" "),x("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_02"}},[x("v-row",{staticClass:"row_max-box"},[x("h2",[t._v("XXXXX")])]),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("v-col",[x("h3",[t._v("About")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                          ")])],1),t._v(" "),x("v-col",[x("img",{attrs:{src:"https://2020.igem.org/wiki/images/0/01/T--Waseda--iGEMwasedalogo.svg"}})])],1),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("v-col",[x("img",{attrs:{src:"https://2020.igem.org/wiki/images/0/01/T--Waseda--iGEMwasedalogo.svg"}})]),t._v(" "),x("v-col",[x("h3",[t._v("Why did we decide to do this collaboration?")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext texttext text\n                          text texttext texttext texttext texttext texttext texttext text\n                        ")])],1)],1),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("v-row",{staticClass:"row_max-box"},[x("h3",[t._v("How did we help each other?")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                          ")])],1)],1),t._v(" "),x("v-row",{staticClass:"row_max-box",attrs:{fluid:"","ma-0":"","pa-0":""}},[x("v-col",{staticClass:"row_max-box"},[x("h3",[t._v("What did we learn from this collaboration?")]),t._v(" "),x("P",[t._v("text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext texttext text\n                            text texttext texttext texttext texttext texttext texttext text\n                          ")])],1)],1),t._v(" "),x("v-row",{staticClass:"row_max-box"},[x("img",{attrs:{src:"https://2020.igem.org/wiki/images/0/01/T--Waseda--iGEMwasedalogo.svg"}})])],1),t._v(" "),x("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_03"}},[t._v(" area 3 ")]),t._v(" "),x("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_04"}},[t._v(" area 4 ")]),t._v(" "),x("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_05"}},[t._v(" area 5 ")]),t._v(" "),x("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_06"}}),t._v(" "),x("v-row",[x("transition",{attrs:{name:"fade"}},[x("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[x("v-icon",[t._v("mdi-arrow-up")])],1)],1)],1)],1)],1),t._v(" "),x("v-row",{attrs:{justify:"center",align:"center"}})],1)],1)}),[],!1,null,"3a2e271f",null);e.default=component.exports;n()(component,{VBtn:c.a,VCol:v.a,VContainer:d.a,VIcon:_.a,VRow:f.a}),m()(component,{Scroll:w.b})}}]);