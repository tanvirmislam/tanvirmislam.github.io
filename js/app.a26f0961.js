!function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(d&&d(e);p.length;)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;r.push([0,"chunk-vendors"]),a()}({0:function(t,e,a){t.exports=a("56d7")},"36cc":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a("d3b7");var n=a("5530"),i=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),r=a("ecee"),s=a("c074"),o=a("f2d1"),l=a("ad3d");r.c.add(s.i,s.e,s.h,s.j,s.m,s.p,s.d,s.c,s.a,s.o,s.l,s.n,s.g,s.b,s.k,s.f,o.a,o.d,o.e,o.c,o.b);var c=a("f309"),d=new c.a({theme:{dark:!0}}),u=a("bc3a"),p=a.n(u),f=a("8c4f"),v=(a("fb6a"),a("96cf"),a("1da1")),m={data:function(){return{titles:["Develop","Innovate","Solve Problems","Visualize","Scale","Secure"],titleIndex:0,titleCharIndex:0,isTitleBeingWritten:!0,titleText:"",textEditorSign:"|",isSleeping:!1,showExploreOptions:!1}},mounted:function(){var t=this,e=document.querySelector("#introcard"),a=document.querySelector("#intro-header"),n=window.innerWidth,i=parseInt(e.style.maxWidth.slice(0,-2));a.style.fontSize="".concat(n<i?4/i*n:4,"em"),setInterval((function(){return t.updateTitleAnimation()}),150)},methods:{updateTitleAnimation:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isSleeping){e.next=2;break}return e.abrupt("return");case 2:if(!t.isTitleBeingWritten||t.titleText!==t.titles[t.titleIndex]){e.next=10;break}return t.isTitleBeingWritten=!1,t.textEditorSign="",e.next=7,t.sleep(1500);case 7:t.textEditorSign="|",e.next=19;break;case 10:if(t.isTitleBeingWritten||0!==t.titleText.length){e.next=18;break}return t.titleIndex=(t.titleIndex+1)%t.titles.length,t.isTitleBeingWritten=!0,t.titleCharIndex=0,e.next=16,t.sleep(200);case 16:e.next=19;break;case 18:t.isTitleBeingWritten?(t.titleText+=t.titles[t.titleIndex][t.titleCharIndex],t.titleCharIndex+=1):(t.titleText=t.titleText.slice(0,-1),t.titleCharIndex-=Math.max(0,t.titleCharIndex-1));case 19:case"end":return e.stop()}}),e)})))()}}},b=(a("593a"),a("2877")),h=a("6544"),x=a.n(h),w=a("8212"),g=a("8336"),C=a("b0af"),y=a("99d9"),S=a("62ad"),_=a("a523"),j=a("ce7e"),O=a("0789"),T=a("132d"),V=a("0fd9"),E=a("2fa4"),I=Object(b.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"mx-auto px-2 py-2",attrs:{id:"introcard","max-width":"550",color:"rgb(54, 54, 54, 0.2)"}},[n("div",{staticClass:"wow fadeInUp",attrs:{"data-wow-duration":"1.5s"}},[n("v-card-title",{staticClass:"justify-center mb-8",attrs:{id:"intro-header"}},[""===t.titleText?n("span",[t._v(" "+t._s(t.textEditorSign)+" ")]):n("span",[t._v(" "+t._s(t.titleText)+t._s(t.textEditorSign)+" ")])])],1),n("div",{staticClass:"wow fadeIn",attrs:{"data-wow-delay":"1s","data-wow-duration":"1.5s"}},[n("v-card-title",{staticClass:"justify-center",attrs:{id:"intro-name"}},[n("v-avatar",{staticClass:"mr-3",attrs:{size:"40"}},[n("img",{attrs:{src:a("5e56"),alt:"Tanvir"}})]),t._v(" Tanvir Islam ")],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{staticClass:"wow fadeIn red--text text--lighten-1",attrs:{small:"",depressed:"","data-wow-duration":"2s"},on:{click:function(e){t.showExploreOptions=!t.showExploreOptions}}},[n("span",[t._v(" Explore ")]),n("v-icon",[t._v(t._s(t.showExploreOptions?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),n("v-expand-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showExploreOptions,expression:"showExploreOptions"}]},[n("v-divider"),n("v-card-actions",[n("v-container",[n("v-row",[n("v-col",[n("v-btn",{staticClass:"mr-2 mb-2",attrs:{small:"",depressed:""}},[n("span",{staticClass:"title-1 mr-2"},[n("font-awesome-icon",{attrs:{icon:["fas","project-diagram"]}})],1),n("span",[t._v(" Projects ")])]),n("v-btn",{staticClass:"mr-2 mb-2",attrs:{small:"",depressed:""}},[n("span",{staticClass:"title-1 mr-2"},[n("font-awesome-icon",{attrs:{icon:["fas","flask"]}})],1),n("span",[t._v(" Research ")])]),n("v-btn",{staticClass:"mr-2 mb-2",attrs:{small:"",depressed:""}},[n("span",{staticClass:"title-1 mr-2"},[n("font-awesome-icon",{attrs:{icon:["fas","brain"]}})],1),n("span",[t._v(" Problem Solving ")])])],1)],1),n("v-row",[n("v-col",[n("v-btn",{staticClass:"mr-2 mb-2",attrs:{small:"",depressed:""}},[n("span",{staticClass:"title-1 mr-2"},[n("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}})],1),n("span",[t._v(" About Me ")])]),n("v-btn",{staticClass:"mr-2 mb-2",attrs:{small:"",depressed:""}},[n("span",{staticClass:"title-1 mr-2"},[n("font-awesome-icon",{attrs:{icon:["fas","file-alt"]}})],1),n("span",[t._v(" Resume ")])])],1)],1)],1)],1)],1)])],1)],1)}),[],!1,null,null,null),k=I.exports;x()(I,{VAvatar:w.a,VBtn:g.a,VCard:C.a,VCardActions:y.a,VCardTitle:y.c,VCol:S.a,VContainer:_.a,VDivider:j.a,VExpandTransition:O.a,VIcon:T.a,VRow:V.a,VSpacer:E.a});var P={components:{introcard:k},data:function(){return{subtitles:["Develop","Innovate","Solve Problems","Visualize","Scale","Secure"],subtitleIndex:0,subtitleCharIndex:0,isSubtitleBeingWritten:!0,subtitleText:"",textEditorSign:"|",isSleeping:!1,showExploreOptions:!1}},mounted:function(){this.adjustCardPosition(),window.addEventListener("resize",this.adjustCardPosition)},beforeDestroy:function(){window.removeEventListener("resize",this.adjustCardPosition)},methods:{adjustCardPosition:function(){var t=document.querySelector("#particles-js"),e=document.querySelector("#introcard-container"),a=.45*window.innerHeight-.5*e.offsetHeight;e.style.top="".concat(a,"px"),e.style.width="".concat(t.offsetWidth,"px"),e.style.textAlign="center"}}},W=(a("7df3"),Object(b.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",{attrs:{id:"home"}},[e("v-row",{staticClass:"slide",attrs:{id:"first-slide",align:"center",justify:"center"}},[e("v-col",[e("vue-particles",{attrs:{id:"particles-js",color:"#dedede",particleOpacity:.5,particlesNumber:90,shapeType:"triangle",particleSize:5,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.1,linesDistance:200,moveSpeed:1,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"repulse"}}),e("div",{attrs:{id:"introcard-container"}},[e("introcard")],1)],1)],1)],1)],1)}),[],!1,null,null,null)),B=W.exports;x()(W,{VCol:S.a,VContainer:_.a,VRow:V.a});var M=[{name:"Home",path:"/",component:B,display:"Home",meta:{title:"tanvirmislam"}},{path:"*",redirect:"/"}];i.a.use(f.a);var z=new f.a({mode:"history",routes:M});z.beforeEach((function(t,e,a){document.title=t.meta.title,a()}));var A=z,D=a("31bd"),R=a("2f62"),$=a("0e44");i.a.use(R.a);var q=new R.a.Store({modules:{},plugins:[Object($.a)({})]}),H=a("98c9"),L={data:function(){return{}}},J=(a("68b3"),Object(b.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[e("v-card-text",{staticClass:"py-2 white--text text-right"},[e("span",{staticClass:"caption mr-2"},[this._v("@ Tanvir Islam")]),e("v-btn",{attrs:{fab:"",depressed:"",small:"",text:"",href:"https://www.linkedin.com/in/tanvirmislam/",target:"_blank"}},[e("span",{staticClass:"subtitle-1"},[e("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),e("v-btn",{attrs:{fab:"",depressed:"",small:"",text:"",href:"https://github.com/tanvirmislam",target:"_blank"}},[e("span",{staticClass:"subtitle-1"},[e("font-awesome-icon",{attrs:{icon:["fab","github-alt"]}})],1)])],1)],1)}),[],!1,null,null,null)),N=J.exports;x()(J,{VBtn:g.a,VCard:C.a,VCardText:y.b});var F={components:{"app-footer":N}},U=a("7496"),G=a("a75b"),K=a("553a"),Q=Object(b.a)(F,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-app",[e("v-content",[e("v-container",[e("router-view")],1)],1),e("v-divider"),e("v-footer",{attrs:{dark:"",padless:""}},[e("app-footer")],1)],1)],1)}),[],!1,null,null,null),X=Q.exports;x()(Q,{VApp:U.a,VContainer:_.a,VContent:G.a,VDivider:j.a,VFooter:K.a}),i.a.config.productionTip=!1,i.a.prototype.$http=p.a,i.a.component("font-awesome-icon",l.a),i.a.use(c.a),i.a.use(H.a),Object(D.sync)(q,A),i.a.mixin({methods:{sleep:function(t){var e=this;return this.isSleeping=!0,new Promise((function(a,n){setTimeout((function(){e.isSleeping=!1,a()}),t)}))}}}),new i.a(Object(n.a)({store:q,router:A,vuetify:d},X)).$mount("#app")},"593a":function(t,e,a){"use strict";var n=a("8ba8");a.n(n).a},"5e56":function(t,e,a){t.exports=a.p+"img/avatar.cb6f82c2.jpg"},"68b3":function(t,e,a){"use strict";var n=a("a693");a.n(n).a},"7df3":function(t,e,a){"use strict";var n=a("36cc");a.n(n).a},"8ba8":function(t,e,a){},a693:function(t,e,a){}});
//# sourceMappingURL=app.a26f0961.js.map