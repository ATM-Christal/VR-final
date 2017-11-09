webpackJsonp([8],{518:function(t,e,a){a(785);var i=a(132)(a(605),a(725),"data-v-2eec6f72",null);t.exports=i.exports},553:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ElRow",componentName:"ElRow",props:{gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/2+"px",t.marginRight=t.marginLeft),t}}}},555:function(t,e,a){var i=a(132)(a(553),a(556),null,null);t.exports=i.exports},556:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"el-row",class:["start"!==t.justify?"is-justify-"+t.justify:"","top"!==t.align?"is-align-"+t.align:"",{"el-row--flex":"flex"===t.type}],style:t.style},[t._t("default")],2)},staticRenderFns:[]}},560:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ElButton",props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean},methods:{handleClick:function(t){this.$emit("click",t)}}}},573:function(t,e,a){var i=a(132)(a(560),a(577),null,null);t.exports=i.exports},577:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.size?"el-button--"+t.size:"",{"is-disabled":t.disabled,"is-loading":t.loading,"is-plain":t.plain}],attrs:{disabled:t.disabled,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?a("i",{staticClass:"el-icon-loading"}):t._e(),t._v(" "),t.icon&&!t.loading?a("i",{class:"el-icon-"+t.icon}):t._e(),t._v(" "),t.$slots.default?a("span",[t._t("default")],2):t._e()])},staticRenderFns:[]}},605:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(573),o=i(n),s=a(555),r=i(s);e.default={components:{ElRow:r.default,ElButton:o.default},data:function(){return{activeName2:"first",allowSubmit:!0,hostURL:"/VR",successType:"success",cancelType:"primary",msgData:{},type:"帖子"}},methods:{codeParsing:function(t){var e=this,a=function(t,a){e.$notify({title:t,message:a,type:"error"})};switch(t){case-1:a("系统错误","未知错误，请上报管理员");break;case 201:a("输入域错误","验证码错误");break;case 300:a("输入域错误","邮箱或密码错误");break;case 301:a("权限问题","用户已禁用，请联系管理员");break;case 302:a("权限问题","用户未激活，请去邮箱激活用户");break;case 303:a("注册问题","邮箱已占用，请更改邮箱");break;case 304:a("注册问题","昵称已占用，请更改昵称");break;case 401:a("权限问题","用户无权访问，请联系管理员");break;case 402:a("操作错误","删除错误,请刷新重试");break;case 415:a("操作错误","文件类型错误，请上传正确文件类型");break;case 500:a("系统错误","未知错误，请上报管理员");break;case 600:a("TIME_OUT","访问超时，请检查网络连接");break;case 700:a("激活错误","非法激活链接，请联系管理员");break;case 800:a("激活错误","用户已被激活，请直接登录");break;case 1e3:a("系统错误","参数错误，上报管理员");break;case 1001:a("权限问题","用户未登录，请重新登录");break;case 1002:a("系统错误","参数错误，上报管理员")}},getTieZiData:function(){this.msgData.id=localStorage.getItem("msgID"),this.msgData.type=localStorage.getItem("msgType"),this.msgData.msgtype=localStorage.getItem("msgOpType"),this.msgData.title=localStorage.getItem("msgTitle"),this.msgData.date=localStorage.getItem("msgDate")},msgClick:function(t,e){"tieZi"==msgData.type?this.$router.push("/user/tieZi?"+e):"mse"==msgData.type&&this.$router.push("/user/mse-self?"+e)}},created:function(){this.getTieZiData()},mounted:function(){""==localStorage.getItem("ms_username")&&this.$router.replace("/login")}}},660:function(t,e,a){e=t.exports=a(58)(void 0),e.push([t.i,".crumbs[data-v-2eec6f72]{text-decoration:none}.theme[data-v-2eec6f72]{height:28px;color:#fff;background-color:#ff6d6d;font-size:18px;font-weight:600;margin-right:8px;line-height:28px}.title[data-v-2eec6f72]{font-size:22px;color:#38444d;line-height:50px;font-weight:600;display:block}.borderline[data-v-2eec6f72]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-2eec6f72]{margin-top:5px;color:#999;display:block;font-size:13px}.author[data-v-2eec6f72]{color:#1e90ff}.article p[data-v-2eec6f72]{padding:20px 0 50px;font-size:18px;color:#333;line-height:180%}.article[data-v-2eec6f72]{line-height:26px;padding-bottom:25px;margin-top:20px}.tieZi-box[data-v-2eec6f72]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.intro-header img[data-v-2eec6f72]{width:200px;height:200px;margin:0 -12% 0 0}.intro-header h3[data-v-2eec6f72]{margin-top:5px;font-size:20px;font-weight:700}.intro-body p[data-v-2eec6f72]{width:100%;font-size:15px;font-weight:lighter}.intro-body .btn[data-v-2eec6f72]{float:right}.tieZi-comment[data-v-2eec6f72]{margin-top:20px;width:100%;text-align:center}.comment[data-v-2eec6f72]{margin:20px;width:100%}.my-comment[data-v-2eec6f72]{float:left;width:80%}.comment-btn[data-v-2eec6f72]{margin-left:10px}.comment-content[data-v-2eec6f72]{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name[data-v-2eec6f72]{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply[data-v-2eec6f72]{width:70%}.user-comment[data-v-2eec6f72]{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container[data-v-2eec6f72]{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content[data-v-2eec6f72]{display:flex}.reply-name[data-v-2eec6f72]{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content[data-v-2eec6f72]{float:right;width:80%}.sub-reply-content[data-v-2eec6f72]{font-size:13px;text-align:left;width:100%}.reply-time[data-v-2eec6f72]{color:#666;width:100%;text-align:right;font-size:10px;padding:5px 0}.comment-time[data-v-2eec6f72]{color:#666;font-size:10px;width:100%;text-align:left;margin-top:10px}.comment-right[data-v-2eec6f72]{flex:1;padding:10px}.comment-content-btn[data-v-2eec6f72],.reply-btn[data-v-2eec6f72]{width:100%}.msg-content[data-v-2eec6f72]{padding-top:20px}",""])},725:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/msg-center"}},[a("i",{staticClass:"el-icon-date"}),t._v(" 消息中心")]),t._v(" "),a("el-breadcrumb-item",[t._v("查看消息")])],1)],1),t._v(" "),a("div",{staticClass:"tieZi-box"},[a("h2",{staticClass:"title"},[t._v("管理员"+t._s(t.msgData.msgtype)+"了您发表的"+t._s("tieZi"==t.msgData.type?"一条帖子":"一篇评测"))]),t._v(" "),a("div",{staticClass:"borderline"}),t._v(" "),a("div",{staticClass:"msg-content"},[t._v("    管理员于 "+t._s(t.msgData.date)+" "+t._s(t.msgData.msgtype)+"了您的"+t._s("tieZi"==t.msgData.type?"一条帖子":"一篇评测")+"：\n        "),a("a",{staticClass:"link",attrs:{href:"javascript:void(0);",title:""},on:{click:function(e){t.msgClick(t.msgData.type,t.msgData.id)}}},[t._v(t._s(t.msgData.title))])])])])},staticRenderFns:[]}},785:function(t,e,a){var i=a(660);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(133)("1268278e",i,!0)}});