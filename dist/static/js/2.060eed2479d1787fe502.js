webpackJsonp([2],{498:function(e,t,n){var i=n(132)(n(569),n(730),null,null);e.exports=i.exports},568:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"",hostUrl:"/VR",activeIndex:"/user/news-list",items:[{icon:"el-icon-menu",index:"0",title:"产品中心",subs:[{index:"/user/product-list",title:"产品列表"}]},{icon:"el-icon-menu",index:"1",title:"产品对比",subs:[{index:"",title:"查看对比"}]},{icon:"el-icon-menu",index:"2",title:"VR资讯",subs:[{index:"/user/news-list",title:"最新"},{index:"/user/news-finance",title:"融资"},{index:"/user/news-industry",title:"产业"},{index:"/user/news-firm",title:"厂商"},{index:"/user/news-interview",title:"专访"},{index:"/user/news-technology",title:"技术"}]},{icon:"el-icon-menu",index:"3",title:"VR论坛",subs:[{index:"/user/BBS",title:"进入论坛"}]},{icon:"el-icon-menu",index:"4",title:"VR百科",subs:[{index:"/user/pedia",title:"百科搜索"},{index:"/user/pedia2",title:"目录浏览"}]},{icon:"el-icon-menu",index:"5",title:"评测自媒体",subs:[{index:"/user/mse-list",title:"评测自媒体"},{index:"/user/mse-self",title:"我的评测自媒体"}]},{icon:"el-icon-menu",index:"6",title:"满意度调查",subs:[{index:"/user/questionaire",title:"问卷填写"}]},{icon:"el-icon-setting",index:"7",title:"个人信息管理",subs:[{index:"/user/change-nick",title:"修改昵称"},{index:"/user/change-password",title:"修改密码"}]}]}},computed:{username:function(){var e=localStorage.getItem("ms_username");return e||this.name}},methods:{handleCommand:function(e){var t=this;"loginout"==e&&this.$axios({url:"/user/logoff",method:"get",baseURL:this.hostUrl}).then(function(e){localStorage.removeItem("ms_username"),sessionStorage.clear(),t.$router.push("/login")}).catch(function(e){localStorage.removeItem("ms_username"),sessionStorage.clear(),t.$router.push("/login")})},check:function(e){if("查看对比"==e.title){0===JSON.parse(localStorage.getItem("compare_data")).data.length?this.$message("您还没有加入对比的产品"):this.$router.push("/user/product-compare")}},onRoutes:function(){}},mounted:function(){var e=this.$route.path.split("/"),t=e[e.length-1].split("?")[0];this.activeIndex="/user/"+t}}},569:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(689),o=i(s),a=n(690);i(a);t.default={components:{vHead:o.default},mounted:function(){console.log("home active")}}},570:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{hello:"hahahaha",items:[{icon:"el-icon-menu",index:"1",title:"VR资讯",subs:[{index:"/user/news-list",title:"新闻资讯"}]},{icon:"el-icon-setting",index:"2",title:"个人信息管理",subs:[{index:"/user/change-nick",title:"修改昵称"},{index:"/user/change-password",title:"修改密码"}]}]}},computed:{onRoutes:function(){}}}},627:function(e,t,n){t=e.exports=n(58)(void 0),t.push([e.i,".header[data-v-0d928ae6]{z-index:1290;margin:0 auto;min-width:1400px;position:relative;box-sizing:border-box;width:100%;height:70px;font-size:22px;line-height:70px;color:#fff}.header .logo[data-v-0d928ae6]{float:left;width:300px;text-align:center;left:auto;top:auto;margin:0;position:relative}.nav-menu[data-v-0d928ae6]{float:left;margin-top:10px;line-height:70px;position:absolute;left:300px}.user-info[data-v-0d928ae6]{float:right;padding-right:50px;font-size:16px;color:#fff}.user-info .el-dropdown-link[data-v-0d928ae6]{position:relative;display:inline-block;padding-left:50px;color:#fff;cursor:pointer;vertical-align:middle}.user-info .user-logo[data-v-0d928ae6]{position:absolute;left:0;top:15px;width:40px;height:40px;border-radius:50%}.el-dropdown-menu__item[data-v-0d928ae6]{text-align:center}.nav-tab[data-v-0d928ae6]{font-size:16px}",""])},649:function(e,t,n){t=e.exports=n(58)(void 0),t.push([e.i,".sidebar[data-v-484f33d3]{display:block;position:absolute;width:250px;left:0;top:70px;bottom:0;background:#2e363f}.sidebar>ul[data-v-484f33d3]{height:100%}",""])},689:function(e,t,n){n(756);var i=n(132)(n(568),n(697),"data-v-0d928ae6",null);e.exports=i.exports},690:function(e,t,n){n(778);var i=n(132)(n(570),n(720),"data-v-484f33d3",null);e.exports=i.exports},697:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"logo"},[e._v("虚拟现实产品质量评估平台")]),e._v(" "),n("div",{staticClass:"nav-menu"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":e.activeIndex,mode:"horizontal",id:"navigator","unique-opened":"",router:""},on:{select:e.onRoutes}},[e._l(e.items,function(t){return[t.subs?[n("el-submenu",{attrs:{index:t.index}},[n("template",{slot:"title"},[n("span",{staticClass:"nav-tab"},[e._v(e._s(t.title))])]),e._v(" "),e._l(t.subs,function(t,i){return n("el-menu-item",{key:i,attrs:{index:t.index},on:{click:function(n){e.check(t)}}},[n("span",[e._v(e._s(t.title))])])})],2)]:[n("el-menu-item",{attrs:{index:t.index}},[n("i",{class:t.icon}),e._v(e._s(t.title)+"\n                ")])]]})],2)],1),e._v(" "),n("div",{staticClass:"user-info"},[n("el-dropdown",{attrs:{trigger:"hover"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n                "+e._s(e.username)+"\n            ")]),e._v(" "),n("el-dropdown-menu",{slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"loginout"}},[e._v("注销")])],1)],1)],1)])},staticRenderFns:[]}},720:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.onRoutes,id:"navigator",theme:"dark","unique-opened":"",router:""}},[e._l(e.items,function(t){return[t.subs?[n("el-submenu",{attrs:{index:t.index}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e._v(e._s(t.title))]),e._v(" "),e._l(t.subs,function(t,i){return n("el-menu-item",{key:i,attrs:{index:t.index}},[e._v(e._s(t.title)+"\n                    ")])})],2)]:[n("el-menu-item",{attrs:{index:t.index}},[n("i",{class:t.icon}),e._v(e._s(t.title)+"\n                ")])]]})],2)],1)},staticRenderFns:[]}},730:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("v-head"),e._v(" "),n("div",{staticClass:"content"},[n("transition",{attrs:{name:"move"}},[n("router-view")],1)],1)],1)},staticRenderFns:[]}},756:function(e,t,n){var i=n(627);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(133)("54ff7226",i,!0)},778:function(e,t,n){var i=n(649);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(133)("8fef0c40",i,!0)}});