(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{415:function(e,t,o){var content=o(449);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("f96ceec2",content,!0,{sourceMap:!1})},448:function(e,t,o){"use strict";var n=o(415);o.n(n).a},449:function(e,t,o){(t=o(17)(!1)).push([e.i,"p[data-v-6e4b9ec6]{font-size:24px}.left_box[data-v-6e4b9ec6]{padding:0}.sidebar[data-v-6e4b9ec6]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/1/18/T--Waseda--MakiBlack.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-6e4b9ec6]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-6e4b9ec6]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-6e4b9ec6],.h1_box_text[data-v-6e4b9ec6]{padding-bottom:0}.h1_text[data-v-6e4b9ec6]{font-size:60px}.h1_imbox[data-v-6e4b9ec6]{display:block;position:relative}.h1_image[data-v-6e4b9ec6]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-6e4b9ec6]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-6e4b9ec6]{width:100%}.image_top[data-v-6e4b9ec6]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-6e4b9ec6]{width:200px;height:200px}.navi_image[data-v-6e4b9ec6]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-6e4b9ec6],.navi_text[data-v-6e4b9ec6]{display:block;width:200px}.navi_text[data-v-6e4b9ec6]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-6e4b9ec6]{position:absolute;top:40px;left:20px}#triangle[data-v-6e4b9ec6],.navi_svg[data-v-6e4b9ec6]{width:160px;height:160px}#triangle[data-v-6e4b9ec6]{stroke-dasharray:510.293}.title_text[data-v-6e4b9ec6]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-6e4b9ec6]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-6e4b9ec6]{width:100%;padding:0;margin:0}.last_message[data-v-6e4b9ec6]{margin-bottom:400px}a[data-v-6e4b9ec6]:link{text-decoration:none}a[data-v-6e4b9ec6]:link,a[data-v-6e4b9ec6]:visited{color:#000}a[data-v-6e4b9ec6]:hover{color:#ff69b4}a[data-v-6e4b9ec6]:active{color:#000}",""]),e.exports=t},500:function(e,t,o){"use strict";o.r(t);o(7);var n={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1]}},methods:{pushScrollY:function(e){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var t=0;t<this.check.length;t++)this.scrollY>=this.sectionOffsetTop[t]&&this.scrollY<this.sectionOffsetTop[t+1]&&(this.check[t]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var e=this;["section_01","section_02","section_03","section_04","section_06"].forEach((function(t){var element=document.getElementById(t),o=Math.round(window.scrollY+element.getBoundingClientRect().top);e.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},r=(o(448),o(86)),l=o(187),c=o.n(l),d=o(393),h=o(394),m=o(398),v=o(188),_=o.n(v),f=o(124),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[e.$vuetify.breakpoint.lg||e.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),e._v(" "),o("circle",{style:{"stroke-dashoffset":e.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),e._v(" "),e._v("\n                                \n                                Sorry, your browser does not support inline SVG. \n                              ")]),e._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),e._v(" "),o("v-row",{staticClass:"navi_text"},[o("a",{attrs:{href:"Implementation#Intro"}},[o("v-row",{class:{title_text:!0,title_text_active:e.check[0]}},[e._v("Intorduction")])],1),e._v(" "),o("a",{attrs:{href:"Implementation#Learn"}},[o("v-row",{class:{title_text:!0,title_text_active:e.check[1]}},[e._v("Learn")])],1),e._v(" "),o("a",{attrs:{href:"Implementation#bs"}},[o("v-row",{class:{title_text:!0,title_text_active:e.check[2]}},[e._v("Brainstorming")])],1),e._v(" "),o("a",{attrs:{href:"Implementation#Interview"}},[o("v-row",{class:{title_text:!0,title_text_active:e.check[3]}},[e._v("Interview")])],1)])],1)],1):e._e(),e._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{attrs:{justify:"center","text-align":"left"}},[o("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[o("v-col",{staticClass:"h1_box_text",attrs:{id:"Intro"}},[o("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[e._v("Implementation")])])],1)],1),e._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}]},[o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_01"}},[o("v-col",[o("h3",[e._v("Intorduction")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("  \n                            Scientists in Synthetic biology always need to communicate with society.\n                            We thought about how our project could contribute to society.\n                          ")]),e._v(" "),o("p",{staticClass:"p_indent",attrs:{id:"Learn"}},[e._v(" \n                            First, We interviewed citizens and experts to verify the validity, safety, and ethics of the project. As a results, we confilmed the validity, safety, and ethics of the project. ( Go to Human Practice page)\n                            We decided to create our business model because we were very interested in the social implementation of our project.  It's not a good idea to implement your research project directly into real-world. It's important to adapt the implementation to the real-world needs.\n                             \n                          ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_02"}},[o("v-col",[o("h3",[e._v("Learn business model")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("  \n                            To learn the basics of business model, first, we went to interview Mr. Watanabe, who is the representative director of Maximize, inc. and is an expert in business model creation, we learned the basics of business model creation from them. The important things of the business model are 4 points: The What, Why, How and Who.\n                            As well as planning for scientific research, business model creation should learn from previous success.  From Mr. Watanabe’s point of view, a business has a higher probability of success when two of a four points are changed from the existing business success. The kind of change is called business model innovation.\n                          ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"bs"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/c7/T--Waseda--InpriFig1.png",alt:"Fig. 6-5-1 The important things of the business model are 4 points"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig. 6-5-1 The important things of the business model are 4 points")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_03"}},[o("v-col",[o("h3",[e._v("Brainstorming")]),e._v(" "),o("p",{staticClass:"p_indent"}),e._v(" "),o("p",{staticClass:"p_indent"},[e._v(" \n                            After the interview, we brainstormed to create a business model based on “SAMURAI” System (GO to Modelling page)\n                          ")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v(" \n                            The smell of monoterpenes has the ability to repellents insects. These are natural and are less likely to cause allergies than currently the non-natural products in use. People living with animals and families with small children have needed our products based on natural products. \n                            \n                            Monoterpene synthesis can take advantage of cell-free system. Monoterpenes are toxic in the cell and difficult to synthesize on a large scale. However, the cell-free system avoids toxicity and allows the mass synthesis of monoterpenes. (Go to monoterpen page)\n                          ")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v(' \n                            These are the "How" and "Who" of the four points of the business model. We have also made strong changes in the "What".\n                            \n                            We would like to use the advantage of the safe biotechnological properties of the cell-free system.\n\n                            We thought about producing the insect repellent of monoterpene in real-time, when we want to use it. The effectiveness of the insect repellent is reduced due to evaporation, using a monoterpene that has already been created. By producing it in real-time, contrary, the effect of the insect repellent could keep constant and for a longer time.\n                            To implement those features, we use the SAMURAI System using the mulit IFFL system.\n                             \n                          ')])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/4/44/T--Waseda--InpriFig2.png",alt:"Fig. 6-5-2 Our business model concept"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Our business model concept")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent",attrs:{id:"Interview"}},[e._v('    \n                            We would like to challenge the already established insect repellent market by updating the "How" and "Who" and "What" of existing better business model.                        \n                          ')])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_04"}},[o("v-col",[o("h3",[e._v("Interview")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("   \n                            　The most important thing about business success is matching the business model you create with the real-world issues.\n                              Many early business models are unsuccessful because they do not match the real-world needs.\n                              In order to improve the business model, it is important to repeat steps to verify the real-world needs and restructure the business model.\n                          ")]),e._v(" "),o("p",{staticClass:"p_indent"})])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/2/28/T--Waseda--InpriFig3.png",alt:"Fig. 6-5-3 Hypothesis-Verification Step"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig. 6-5-3 Hypothesis-Verification Step")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("  \n                            We interviewed a wide range of people, including friends around us, business model experts, with allergies, and pet owners who could be customers. \n                            By interviewing many people, we were able to examine the business model from a variety of perspectives.\n                            Then, our business model was more improved while addressing the challenges that emerged from the interview. \n                          ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/8/81/T--Waseda--InpriFig4.png",alt:"Fig. 6-5-4 online interview image"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig. 6-5-4 online interview image")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v(" \n                            Through this verification, we were able to confirm that there is a definite need for our business model. (Fig. 6-5-5 )                                                      \n                          ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/5/5d/T--Waseda--InpriFig5.png",alt:"Fig. 6-5-5 Brushed business model"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig. 6-5-5 Brushed business model")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("  \n                            But, surprisingly, in those interviews, we found that there was another great need.\n                            People who are concerned about whether or not they contain the substance that causes allergies are careful to determine whether or not they contain the source of their allergies.\n                          ")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("  \n                            We got the inspiration for detecting allergens and pivoted to a business model for substance detection using the cell-free system. (Go to integrate)\n                            \n                          ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("h2",[e._v("Integreate Human Practice is "),o("nuxt-link",{attrs:{to:"Entrepreneurship"}},[e._v("GO to Entrepreneurship page !!!! ")])],1)])],1),e._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_06"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"6e4b9ec6",null);t.default=component.exports;c()(component,{VCol:d.a,VContainer:h.a,VRow:m.a}),_()(component,{Scroll:f.b})}}]);