webpackJsonp([10],{545:function(e,t,a){a(782);var i=a(132)(a(619),a(725),null,null);e.exports=i.exports},553:function(e,t,a){e.exports=a.p+"static/img/ab1.1783f5d.jpg"},619:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pageNum:1,pageTotal:20,pageSize:1,hostURL:"/VR",items:[{id:1,keyword:"fuuuuuuu",type:"",changenote:"11111111111111111111111111111111111111",prop_keyword:"2222222222222222"},{id:2,keyword:"ffffffff",type:"",changenote:"1111111111111111111111111111111111",prop_keyword:"222222222222"}],type:"VR简介",typeList:["VR简介","VR应用","VR历史"]}},methods:{codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},getTypes:function(){var e=this;e.typeList=[],e.$axios({url:"/encyclopediaDir",method:"post",baseURL:e.hostURL,data:"notype"}).then(function(t){e.typeList=t.data}).catch(function(t){e.$message({type:"info",message:"connect fail"})})},search:function(e,t){var a=this,i={type:"",pageNum:1};i.type=e,i.pageNum=t,a.$axios({url:"/encyclopediaTypeDir",method:"post",baseURL:a.hostURL,data:i}).then(function(e){a.items=[],a.items=e.data}).catch(function(e){a.$message({type:"info",message:"connect fail"})})},selected:function(e){var t=this;t.type=e,t.search(e,1)},handleCurrentChange:function(){var e=this;console.log("current-Page:"),console.log(e.pageNum);var t=e.type,a=e.pageNum;e.search(t,a)},encyclopediaClick:function(e){var t=this;console.log(e.id),t.$router.push("/user/encyclopedia-prop?"+e.id)}},mounted:function(){var e=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login"),e.selected("VR简介")}}},655:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,".crumbs{text-decoration:none}.banner{background:url("+a(553)+') no-repeat 0 0;background-size:cover;min-height:600px;min-width:850px}.banner h3{font-size:30px;padding-top:18%;font-weight:600}.banner h2,.banner h3{color:#fff;letter-spacing:1px;text-transform:uppercase;text-align:center}.banner h2{font-size:50px;font-weight:700;margin:30px 0}.banner h2 span{color:#00bcd4}.banner h4{color:#fff;font-size:14px;letter-spacing:1px;text-transform:uppercase;background:#00bcd4;width:20%;margin:0 auto;padding:10px 0;text-align:center}.about-w3-agile{padding:50px 0}.about-w3-agile box{color:#000;text-transform:uppercase;font-size:25px;letter-spacing:2px;font-weight:700;text-align:left;position:relative;margin-bottom:50px}.about-w3-agile box:before{background:#d9d9d9;width:45%}.about-w3-agile box:before,.about-w3-agile h3:after{content:"";height:3px;position:absolute;top:170%;left:0}.about-w3-agile h3:after{background:#fff;width:10%}.about-w3-agile h3:before{width:25%}.about-w3-agile h3{margin-top:30px}.eg-item{padding:20px;margin:20px 0;box-sizing:border-box;background:#eee}#navigation{float:left;width:200px;font-family:Arial}#navigation ul{list-style-type:none;margin:0;padding:0}#navigation li{border-bottom:1px solid #fff;height:45px;display:block;padding:5px 5px 5px .5em;text-decoration:none;border-left:12px solid #00bcd4;border-right:1px solid #fff;background-color:#789;color:#fff}#navigation li:link,#navigation li a:visited{background-color:#c11136;color:#fff}#navigation li :hover{background-color:#ffc107;color:#ff0}#show-items{max-width:800px;margin:0 auto;cursor:pointer}.sing-item{padding:20px;margin:20px 0;box-sizing:border-box;background:#eee}.pagination{margin-left:50px}',""])},725:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/pedia"}},[a("i",{staticClass:"el-icon-date"}),e._v("VR百科 ")]),e._v(" "),a("el-breadcrumb-item",[e._v("目录浏览")])],1)],1),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"about-w3-agile",attrs:{id:"about"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{attrs:{id:"navigation"}},[a("div",{staticClass:"collection"},[a("ul",e._l(e.typeList,function(t){return a("a",{staticClass:"collection-item",class:{active:e.type==t},attrs:{href:"#/user/pedia2"},on:{click:function(a){e.selected(t)}}},[a("li",[e._v(e._s(t))])])}))])])]),e._v(" "),a("el-col",{attrs:{span:18}},[a("div",{attrs:{id:"show-items"}},e._l(e.items,function(t){return a("div",{staticClass:"sing-item",on:{click:function(a){e.encyclopediaClick(t)}}},[a("a",{staticClass:"link-tit",attrs:{href:"javascript:void(0);",title:""}}),e._v(" "),a("h2",[e._v(e._s(t.keyword))]),e._v(" "),a("article",[e._v(e._s(t.prop_keyword))])])}))])],1)],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.pageNum,layout:"prev, next"},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNum=t}}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"banner"},[a("h3",[e._v("KNOW MORE ABOUT")]),e._v(" "),a("h2",[a("span",[e._v("VR ")])])])}]}},782:function(e,t,a){var i=a(655);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(133)("599a01ca",i,!0)}});