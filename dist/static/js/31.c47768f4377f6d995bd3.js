webpackJsonp([31],{522:function(e,t,a){a(776);var i=a(132)(a(596),a(718),"data-v-46b704b4",null);e.exports=i.exports},596:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{hostURL:"/VR",activePane:"first",newsList:[{id:1,title:"fuuuuuuu",newsAbstract:"11111111111111111111111111111111111111",picLocation:"./static/img/img.jpg"},{id:2,title:"fxxxxxxuu",newsAbstract:"22222222222222222222222222222222222222222",picLaocation:"./static/img/img.jpg"}],pageNum:1,pageTotal:20,pageSize:1}},methods:{codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},handleClick:function(){},picClick:function(e){this.$router.push("/user/news?"+e)},getNews:function(e){var t=this;t.newsList=[],t.$axios({url:"/news_list/"+e+"/5",method:"get",baseURL:t.hostURL}).then(function(e){0==e.data.length?(t.pageNum=t.pageNum-1,t.$message({type:"info",message:"暂无下一页数据"})):(t.newsList=[],t.newsList=e.data)}).catch(function(e){t.$message({type:"info",message:"connect fail"})})},handleCurrentChange:function(){var e=this;console.log("current-Page:"),console.log(e.pageNum),e.getNews(e.pageNum)},newsClick:function(e){var t=this;console.log("11111111"),console.log(e),t.$router.push("/user/interviewpage?"+e.id)}},mounted:function(){var e=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login"),e.getNews(e.pageNum)}}},649:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".crumbs[data-v-46b704b4]{text-decoration:none}.form-box[data-v-46b704b4]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-46b704b4]{width:220px;margin-left:80px}.submit-btn button[data-v-46b704b4]{width:100%}ul[data-v-46b704b4]{list-style:none;display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px}li[data-v-46b704b4]{list-style-type:none;padding-bottom:10px;border-bottom:1px solid #ccc}a[data-v-46b704b4],a[data-v-46b704b4]:hover,a[data-v-46b704b4]:visited{text-decoration:none}.news-item[data-v-46b704b4]{height:124px;margin-bottom:24px;overflow:hidden}.news-list .news-item .link-tit[data-v-46b704b4]{color:#e9c06c}.news-list .news-item img[data-v-46b704b4]{display:block;float:left;margin-right:20px;width:200px}.news-list .news-item .news-title[data-v-46b704b4]{display:block;font-size:22px;font-weight:lighter;color:#3e3e3e;line-height:50px;height:50px;overflow:hidden}.news-list .news-desc[data-v-46b704b4]{display:block;height:60px;overflow:hidden;font-size:14px;color:#898989;line-height:1.5}.pagination[data-v-46b704b4]{margin-left:50px}.el-carousel__item h3[data-v-46b704b4]{color:#475669;font-size:14px;opacity:.75;line-height:250px;margin:0}",""])},718:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/news-list"}},[a("i",{staticClass:"el-icon-date"}),e._v("VR资讯")]),e._v(" "),a("el-breadcrumb-item",[e._v("专访")])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"list-wrap"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activePane,callback:function(t){e.activePane=t},expression:"activePane"}},[a("el-tab-pane",{attrs:{label:"专访",name:"first"}},[a("div",{staticStyle:{width:"790px","text-align":"center",margin:"0 auto"}},[a("el-carousel",{attrs:{interval:4e3,type:"card",height:"250px"}},e._l(e.newsList,function(t,i){return i<=2?a("el-carousel-item",{key:t},[a("h3",{staticStyle:{"text-align":"center"},on:{click:function(a){e.picClick(t.id)}}},[a("img",{attrs:{src:t.picLocation,width:"400px",height:"250px"}})])]):e._e()}))],1),e._v(" "),a("ul",{staticClass:"news-list"},e._l(e.newsList,function(t){return a("li",{staticClass:"news-item",on:{click:function(a){e.newsClick(t)}}},[a("a",{staticClass:"link-tit",attrs:{href:"javascript:void(0);",title:""}},[a("img",{attrs:{src:t.picLocation}}),e._v(" "),a("span",{staticClass:"news-title"},[e._v(e._s(t.title))]),e._v(" "),a("span",{staticClass:"news-desc"},[e._v(e._s(t.newsAbstract))])])])})),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.pageNum,layout:"prev, next"},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNum=t}}})],1)])],1)],1)])],1)],1)},staticRenderFns:[]}},776:function(e,t,a){var i=a(649);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(133)("19ba8ebb",i,!0)}});