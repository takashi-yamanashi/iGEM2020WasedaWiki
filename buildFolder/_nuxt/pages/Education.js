(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{410:function(t,e,o){var content=o(431);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("96d040b6",content,!0,{sourceMap:!1})},430:function(t,e,o){"use strict";var c=o(410);o.n(c).a},431:function(t,e,o){(e=o(17)(!1)).push([t.i,"p[data-v-379ee7ce]{font-size:24px}.left_box[data-v-379ee7ce]{padding:0}.sidebar[data-v-379ee7ce]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-379ee7ce]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-379ee7ce]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-379ee7ce],.h1_box_text[data-v-379ee7ce]{padding-bottom:0}.h1_text[data-v-379ee7ce]{font-size:60px}.h1_imbox[data-v-379ee7ce]{display:block;position:relative}.h1_image[data-v-379ee7ce]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-379ee7ce]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-379ee7ce]{width:100%}.image_top[data-v-379ee7ce]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-379ee7ce]{width:200px;height:200px}.navi_image[data-v-379ee7ce]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-379ee7ce],.navi_text[data-v-379ee7ce]{display:block;width:200px}.navi_text[data-v-379ee7ce]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-379ee7ce]{position:absolute;top:40px;left:20px}#triangle[data-v-379ee7ce],.navi_svg[data-v-379ee7ce]{width:160px;height:160px}#triangle[data-v-379ee7ce]{stroke-dasharray:510.293}.title_text[data-v-379ee7ce]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-379ee7ce]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-379ee7ce]{width:100%;padding:0;margin:0}.last_message[data-v-379ee7ce]{margin-bottom:400px}a[data-v-379ee7ce]:link{text-decoration:none}a[data-v-379ee7ce]:link,a[data-v-379ee7ce]:visited{color:#000}a[data-v-379ee7ce]:hover{color:#ff69b4}a[data-v-379ee7ce]:active{color:#000}",""]),t.exports=e},482:function(t,e,o){"use strict";o.r(e);o(7);var c={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1,!1]}},methods:{pushScrollY:function(t){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var e=0;e<this.check.length;e++)this.scrollY>=this.sectionOffsetTop[e]&&this.scrollY<this.sectionOffsetTop[e+1]&&(this.check[e]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var t=this;["section_01","section_02","section_03","section_04"].forEach((function(e){var element=document.getElementById(e),o=Math.round(window.scrollY+element.getBoundingClientRect().top);t.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},l=(o(430),o(86)),r=o(124),n=o.n(r),d=o(396),v=o(397),h=o(401),m=o(189),f=o.n(m),x=o(125),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),t._v(" "),o("circle",{style:{"stroke-dashoffset":t.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),t._v(" "),t._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),t._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),t._v(" "),o("v-row",{staticClass:"navi_text"})],1)],1):t._e(),t._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("h3"),t._v(" "),o("p",{staticClass:"p_indent"}),t._v(" "),o("p",{staticClass:"p_indent"})])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"",alt:"Logo"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"})])]),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_01"}},[o("v-col",{staticClass:"last_message"})],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_02"}},[o("v-col",{staticClass:"last_message"})],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_03"}},[o("v-col",{staticClass:"last_message"})],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_04"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"379ee7ce",null);e.default=component.exports;n()(component,{VCol:d.a,VContainer:v.a,VRow:h.a}),f()(component,{Scroll:x.b})}}]);