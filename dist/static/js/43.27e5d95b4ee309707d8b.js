webpackJsonp([43],{510:function(e,t,a){a(771);var s=a(132)(a(582),a(712),"data-v-2f24cd76",null);e.exports=s.exports},582:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{allowSubmit:!0,hostURL:"/VR",successType:"success",cancelType:"primary",mse:{evaluationId:1,titlePic:"",authorId:"",authorName:"",evaluationTitle:"",postTime:null,updateTime:"",type:null,evaluationText:{id:0,evaluationBody:""},ups:0,downs:0,comments:0,view:-1},pageNum_nc:1,pageTotal_nc:null,pageNum_hc:1,pageTotal_hc:null,pageSize:10,activeName2:"first",textarea:"",display_hot:!1,display_new:!1,userCurrent:"",thumbs:-1,hot_data:{hot_comments:[{id:"",userId:"",userName:"",comment:"",postTime:null,view:0,ups:0,childComments:[{userId:"",userName:"",comment:"",postTime:null}]}]},new_data:{new_comments:[{id:"",userId:"",userName:"",comment:"",postTime:null,view:-1,ups:0,childComments:[{userId:"",userName:"",comment:"",postTime:null}]}]},hot_reply:{replys:[{appear:0,textarea:"",postTime:null}]},new_reply:{replys:[{appear:0,textarea:"",postTime:null}]},e_id:null}},methods:{codeParsing:function(e){var t=this,a=function(e,a){t.$notify({title:e,message:a,type:"error"})};switch(e){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},timeFomat:function(e){var t="yyyy-MM-dd hh:mm",a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in a)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[s]:("00"+a[s]).substr((""+a[s]).length)));return t},timeFomatMse:function(e){var t=this,a=new Date(e);return"发布于 "+t.timeFomat(a)},timeFomatComment:function(e){var t=this,a=Date.parse(new Date),s=new Date(e),o=a-parseInt(e);return 0===parseInt(o/6e4)?"刚刚":parseInt(o/6e4)<11?parseInt(o/6e4)+"分钟前":t.timeFomat(s)},handleCurrentChange:function(){var e=this;console.log(e.e_id),e.getNewComments(e.e_id,e.pageNum_nc)},refreshComment:function(){var e=this;e.getHotComments(e.e_id,e.pageNum_hc),e.getNewComments(e.e_id,e.pageNum_nc)},postTextArea:function(e){var t=this;t.$axios({url:"/evaluations/"+t.mse.evaluationId+"/parentComment?content="+t.textarea,method:"post",baseURL:t.hostURL}).then(function(a){console.log(a.data),t.userCurrent=a.data.object.userName,t.new_data.new_comments.reverse(),t.new_data.new_comments.push({id:a.data.object.id,userId:a.data.object.userId,userName:t.userCurrent,comment:e,postTime:a.data.object.postTime,childComments:[]}),t.new_data.new_comments.reverse();var s=t.new_data.new_comments.length;t.new_reply.replys=[];for(var o=0;o<s;o++)t.new_reply.replys.push({appear:0,textarea:""});t.textarea="",t.refreshComment()}).catch(function(e){t.codeParsing(e.response.status),console.log(e)})},refreshNewData:function(){var e=this,t=e.textarea;console.log(t),""!=t&&(e.$message("评论成功！"),e.postTextArea(t))},replyHotClick:function(e,t){var a=this;a.hot_reply.replys[t].appear?""==a.hot_reply.replys[t].textarea?a.hot_reply.replys[t].appear=0:(a.$axios({url:"/evaluations/comments/"+e.id+"/childComment?comment="+a.hot_reply.replys[t].textarea,method:"post",baseURL:a.hostURL}).then(function(e){console.log(e.data);var s=e.data.object;a.userCurrent=s.userName,a.$message("回复成功！"),a.hot_data.hot_comments[t].childComments?a.hot_data.hot_comments[t].childComments.push({userId:e.data.object.userId,userName:a.userCurrent,comment:s.comment,postTime:"刚刚"}):(a.hot_data.hot_comments[t].childComments=[{userId:e.data.object.userId,userName:a.userCurrent,comment:s.comment,postTime:"刚刚"}],console.log(1))}).catch(function(e){a.codeParsing(e.response.status),console.log(e)}),a.hot_reply.replys[t].textarea="",a.hot_reply.replys[t].appear=0):a.hot_reply.replys[t].appear=1},replyNewClick:function(e,t){var a=this;console.log(e),a.new_reply.replys[t].appear?""==a.new_reply.replys[t].textarea?a.new_reply.replys[t].appear=0:(a.$axios({url:"/evaluations/comments/"+e.id+"/childComment?comment="+a.new_reply.replys[t].textarea,method:"post",baseURL:a.hostURL}).then(function(s){console.log(s.data);var o=s.data.object;a.userCurrent=o.userName,a.$message("回复成功！");var n=a.new_data.new_comments.indexOf(e);console.log(n),e.childComments?a.new_data.new_comments[t].childComments.push({userId:s.data.object.userId,userName:a.userCurrent,comment:o.comment,postTime:"刚刚"}):(console.log(e),e.childComments=[{userId:s.data.object.userId,userName:a.userCurrent,comment:o.comment,postTime:"刚刚"}],console.log(11111),console.log(e)),console.log(a.new_data.new_comments[n].childComments)}).catch(function(e){console.log(e)}),a.new_reply.replys[t].textarea="",a.new_reply.replys[t].appear=0):a.new_reply.replys[t].appear=1},getHotComments:function(e){var t=this;t.hot_data={hot_comments:[{id:"",userId:"",authorName:"",comment:"",postTime:null,view:0,ups:0,childComments:[{userId:"",authorName:"",comment:"",postTime:null}]}]},t.hot_reply={replys:[{appear:0,textarea:""}]},t.$axios({url:"/evaluations/"+e+"/comments?orderType=2",method:"get",baseURL:t.hostURL}).then(function(e){var a=e.data.object;t.display_hot=!0,t.hot_data.hot_comments=a.result,console.log(a);var s=t.hot_data.hot_comments.length;t.hot_reply.replys=[];for(var o=0;o<s;o++)t.hot_reply.replys.push({appear:0,textarea:""})}).catch(function(e){t.codeParsing(e.response.status),console.log(e)})},getNewComments:function(e,t){var a=this;a.new_data={new_comments:[{id:"",userId:"",authorName:"",comment:"",postTime:null,childComments:[{userId:"",authorName:"",comment:"",postTime:null}]}]},a.new_reply={replys:[{appear:0,textarea:""}]},a.$axios({url:"/evaluations/"+e+"/comments?page="+t,method:"get",baseURL:a.hostURL}).then(function(e){var t=e.data.object.result;console.log(e.data.object.result),a.pageTotal_nc||(a.pageTotal_nc=e.data.object.totalCount),a.display_new=!0,a.new_data.new_comments=t;var s=a.new_data.new_comments.length;a.new_reply.replys=[];for(var o=0;o<s;o++)a.new_reply.replys.push({appear:0,textarea:""})}).catch(function(e){a.codeParsing(e.response.status),console.log(e)})},postCommLike:function(e,t){var a=this;a.$axios({url:"/evaluations/comments/"+e.id+"/view?type="+t,method:"post",baseURL:a.hostURL}).then(function(e){console.log(e)}).catch(function(e){a.codeParsing(e.response.status),console.log(e)})},commentLikeClick:function(e){var t=this;e.view=0==e.view?-1:0;var a=0==e.view?1:-1;e.ups+=a,1==a?t.postCommLike(e,0):t.$axios({url:"/evaluations/comments/"+e.id+"/view",method:"delete",baseURL:t.hostURL}).then(function(e){console.log(e.data)}).catch(function(e){t.codeParsing(e.response.status),console.log(e)})},postView:function(e){var t=this;t.$axios({url:"/evaluations/"+t.mse.evaluationId+"/view?type="+e,method:"post",baseURL:t.hostURL}).then(function(e){console.log(e.data)}).catch(function(e){t.codeParsing(e.response.status),console.log(e)})},deleteView:function(){var e=this;e.$axios({url:"/evaluations/"+e.mse.evaluationId+"/view",method:"delete",baseURL:e.hostURL}).then(function(e){console.log(e.data)}).catch(function(t){e.codeParsing(t.response.status),console.log(t)})},proLikeClick:function(){var e=this;e.thumbs=0===e.thumbs?-1:0,0===e.thumbs?e.postView(0):e.deleteView();var t=0===e.thumbs?1:-1;e.mse.ups+=t},proUnlikeClick:function(){var e=this;e.thumbs=1===e.thumbs?-1:1,1===e.thumbs?e.postView(1):e.deleteView();var t=1===e.thumbs?1:-1;e.mse.downs+=t},mseContent:function(e){var t=String(e).replace(/<p/g,'<p style="margin-bottom:20px"');return t=t.replace(/<h2/g,'<h2 style="margin-bottom:20px"'),t=t.replace(/<h3/g,'<h3 style="margin-bottom:20px"'),t=t.replace(/<img/g,'<img style="display:block;margin: auto"')},getMseData:function(e){var t=this;t.mse={},t.$axios({url:"/evaluations/"+e,method:"GET",baseURL:t.hostURL}).then(function(e){t.mse=e.data.object.evaluation,t.thumbs=t.mse.view,console.log(t.mse.view)}).catch(function(e){t.codeParsing(e.response.status),console.log(e.response.status)})}},computed:{},mounted:function(){var e=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login");var t=location.href.split("?"),a=t[1];e.e_id=a,console.log(a),e.getMseData(a),e.getHotComments(a,e.pageNum_hc),e.getNewComments(a,e.pageNum_nc)}}},642:function(e,t,a){t=e.exports=a(58)(void 0),t.push([e.i,"a[data-v-2f24cd76]{color:#5188a6;text-decoration:none;cursor:pointer}.mse-img[data-v-2f24cd76]{width:710px;margin:0 auto}.mse-img img[data-v-2f24cd76]{max-width:710px;max-height:300px;display:block;margin:0 auto}.recommend_tab[data-v-2f24cd76]{line-height:1em;overflow:hidden;width:710px;margin:0 auto;padding-bottom:20px}.recommend_tab>span.mse-author[data-v-2f24cd76]{float:left;line-height:28px;width:600px;overflow:hidden;margin:0 auto}.mse-author[data-v-2f24cd76]{font-size:12px;float:left;line-height:24px;overflow:hidden;word-break:break-all;white-space:nowrap;text-overflow:ellipsis}.mse-author a[data-v-2f24cd76]{line-height:24px;margin-right:10px}.grey[data-v-2f24cd76]{color:#999}article>h1[data-v-2f24cd76]{font-size:28px;margin-bottom:20px;word-break:break-all;text-align:center}.mse-content[data-v-2f24cd76]{color:#333;line-height:24px;word-break:break-all;max-width:780px;margin:0 auto}.product-comment[data-v-2f24cd76]{padding-top:20px;width:100%;text-align:center;max-width:810px;margin:0 auto}.comment[data-v-2f24cd76]{margin:20px;width:100%}.my-comment[data-v-2f24cd76]{float:left;width:80%}.comment-btn[data-v-2f24cd76]{margin-left:10px}.comment-content[data-v-2f24cd76]{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name[data-v-2f24cd76]{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply[data-v-2f24cd76]{width:70%}.user-comment[data-v-2f24cd76]{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container[data-v-2f24cd76]{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content[data-v-2f24cd76]{display:flex}.reply-name[data-v-2f24cd76]{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content[data-v-2f24cd76]{float:right;width:80%}.sub-reply-content[data-v-2f24cd76]{font-size:13px;text-align:left;width:100%}.reply-time[data-v-2f24cd76]{color:#666;width:100%;text-align:right;font-size:10px;padding:5px 0}.comment-time[data-v-2f24cd76]{color:#666;font-size:10px;width:100%;text-align:left;margin-top:10px}.comment-right[data-v-2f24cd76]{flex:1;padding:10px}.comment-content-btn[data-v-2f24cd76],.reply-btn[data-v-2f24cd76]{width:100%}",""])},712:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[a("i",{staticClass:"el-icon-date"}),e._v("评测自媒体")]),e._v(" "),a("el-breadcrumb-item",{attrs:{to:"/user/mse-list"}},[e._v("评测自媒体")]),e._v(" "),a("el-breadcrumb-item",[e._v("评测自媒体文章")])],1)],1),e._v(" "),a("el-row",[a("div",{staticClass:"abstract"},[a("div",{staticClass:"mse-img"},[a("img",{attrs:{src:e.mse.titlePic,alt:""}})]),e._v(" "),a("div",{staticClass:"recommend_tab"},[a("span",{staticClass:"mse-author"},[a("a",{attrs:{href:""}},[e._v(e._s(e.mse.authorName))]),e._v(" "),a("span",{staticClass:"grey"},[e._v("\n                        "+e._s(e.timeFomatMse(e.mse.updateTime))+"\n                    ")])])]),e._v(" "),a("article",[a("h1",{staticClass:"mse-title"},[e._v(e._s(e.mse.evaluationTitle))]),e._v(" "),a("div",{staticClass:"mse-content",domProps:{innerHTML:e._s(e.mseContent(e.mse.evaluationText))}})])])]),e._v(" "),a("el-row",[a("div",{staticClass:"product-comment"},[a("div",{staticClass:"comment"},[a("div",{staticClass:"my-comment"},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入您对该产品的评价",resize:"none"},model:{value:e.textarea,callback:function(t){e.textarea="string"==typeof t?t.trim():t},expression:"textarea"}})],1),e._v(" "),a("div",{staticClass:"comment-btn"},[a("el-button-group",{staticStyle:{"margin-bottom":"10px"}},[a("el-button",{attrs:{icon:"circle-check",size:"small",disabled:1==e.thumbs,type:0==e.thumbs?e.successType:e.cancelType},on:{click:function(t){e.proLikeClick()}}},[e._v("\n                            赞"+e._s(e.mse.ups)+"\n                        ")]),e._v(" "),a("el-button",{attrs:{size:"small",disabled:0==e.thumbs,type:1==e.thumbs?e.successType:e.cancelType},on:{click:function(t){e.proUnlikeClick()}}},[e._v("\n                            踩"+e._s(e.mse.downs)),a("i",{staticClass:"el-icon-circle-cross el-icon--right"})])],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.refreshNewData()}}},[e._v("发表评论")])],1)]),e._v(" "),a("el-tabs",{staticStyle:{width:"100%"},attrs:{type:"card"},on:{"tab-click":e.refreshComment},model:{value:e.activeName2,callback:function(t){e.activeName2=t},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"最热评论",name:"first"}},e._l(e.hot_data.hot_comments,function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.display_hot,expression:"display_hot"}],staticClass:"comment-content"},[a("p",{staticClass:"user-name"},[e._v(e._s(t.userName))]),e._v(" "),a("div",{staticClass:"comment-reply"},[a("p",{staticClass:"user-comment"},[e._v(e._s(t.comment))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.hot_reply.replys[s].appear,expression:"hot_reply.replys[index].appear"}],staticStyle:{"{padding":"0 5px"},attrs:{type:"textarea",placeholder:"回复评论",resize:"none"},model:{value:e.hot_reply.replys[s].textarea,callback:function(t){e.hot_reply.replys[s].textarea="string"==typeof t?t.trim():t},expression:"hot_reply.replys[index].textarea"}}),e._v(" "),e._l(t.childComments,function(t){return a("div",{staticClass:"reply-container"},[a("div",{staticClass:"sub-reply-content"},[a("p",{staticClass:"reply-name"},[e._v(e._s(t.userName)+"：")]),e._v(" "),a("div",{staticClass:"reply-content"},[a("p",{staticClass:"sub-reply-content"},[e._v(e._s(t.comment))])])]),e._v(" "),a("p",{staticClass:"reply-time"},[e._v(e._s(e.timeFomatComment(t.postTime)))])])})],2),e._v(" "),a("div",{staticClass:"comment-right"},[a("div",{staticClass:"comment-content-btn"},[a("el-button",{attrs:{type:"primary",icon:"circle-check",size:"small",type:0==t.view?e.successType:e.cancelType},on:{click:function(a){e.commentLikeClick(t)}}},[e._v("赞"+e._s(t.ups)+"\n                                ")]),e._v(" "),a("div",{staticClass:"reply-btn"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.replyHotClick(t,s)}}},[e._v("回复")])],1)],1),e._v(" "),a("p",{staticClass:"comment-time"},[e._v(e._s(e.timeFomatComment(t.postTime)))])])])})),e._v(" "),a("el-tab-pane",{attrs:{label:"最新评论",name:"second"}},[e._l(e.new_data.new_comments,function(t,s){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.display_new,expression:"display_new"}],staticClass:"comment-content"},[a("p",{staticClass:"user-name"},[e._v(e._s(t.userName))]),e._v(" "),a("div",{staticClass:"comment-reply"},[a("p",{staticClass:"user-comment"},[e._v(e._s(t.comment))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:e.new_reply.replys[s].appear,expression:"new_reply.replys[index].appear"}],staticStyle:{"{padding":"0 5px"},attrs:{type:"textarea",placeholder:"回复评论",resize:"none"},model:{value:e.new_reply.replys[s].textarea,callback:function(t){e.new_reply.replys[s].textarea="string"==typeof t?t.trim():t},expression:"new_reply.replys[index].textarea"}}),e._v(" "),e._l(t.childComments,function(t){return a("div",{staticClass:"reply-container"},[a("div",{staticClass:"sub-reply-content"},[a("p",{staticClass:"reply-name"},[e._v(e._s(t.userName)+"：")]),e._v(" "),a("div",{staticClass:"reply-content"},[a("p",{staticClass:"sub-reply-content"},[e._v(e._s(t.comment))])])]),e._v(" "),a("p",{staticClass:"reply-time"},[e._v(e._s(e.timeFomatComment(t.postTime)))])])})],2),e._v(" "),a("div",{staticClass:"comment-right"},[a("div",{staticClass:"comment-content-btn"},[a("el-button",{attrs:{type:"primary",icon:"circle-check",size:"small",type:0==t.view?e.successType:e.cancelType},on:{click:function(a){e.commentLikeClick(t)}}},[e._v("赞"+e._s(t.ups)+"\n                                ")]),e._v(" "),a("div",{staticClass:"reply-btn"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.replyNewClick(t,s)}}},[e._v("回复")])],1)],1),e._v(" "),a("p",{staticClass:"comment-time"},[e._v(e._s(e.timeFomatComment(t.postTime)))])])])}),e._v(" "),a("div",{staticClass:"pagination card"},[a("el-pagination",{attrs:{"current-page":e.pageNum_nc,"page-size":e.pageSize,layout:"prev, pager, next, jumper",total:e.pageTotal_nc},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNum_nc=t}}})],1)],2)],1)],1)])],1)},staticRenderFns:[]}},771:function(e,t,a){var s=a(642);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(133)("02b39dbe",s,!0)}});