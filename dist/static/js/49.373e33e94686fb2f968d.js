webpackJsonp([49],{503:function(e,t,o){o(772);var n=o(132)(o(575),o(714),null,null);e.exports=n.exports},575:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{msg:"",message:"",pageNum:1,hostURL:"/VR",content_show:!1,id:"1",prop_id:"0",keyword:"",prop_keyword:"VR资讯",content:"VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。",changenote:"a",encyclopedia_propchangerequrire:[{requireid:"1",id:"1",prop_id:"0",keyword:"",prop_keyword:"VR资讯",content:"VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。",changenote:"a"},{requireid:"2",id:"1",prop_id:"1",keyword:"",prop_keyword:"VR资讯",content:"VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。",changenote:"a"}]}},methods:{handleRowHandle:function(e,t,o){console.log(e.content),this.message=e.content,this.id=e.id,this.prop_id=e.prop_id,this.keyword=e.keyword,this.prop_keyword=e.prop_keyword,this.content=e.content,this.changenote=e.changenote,this.content_show=!0},handleCurrentChange:function(){var e=this;console.log("current-Page:"),console.log(e.pageNum),e.getRequireList(),e.content_show=!1},open1:function(){var e=this;if(-1==e.id)return void e.$message({type:"info",message:"修改失败，请选择一项请求"});var t={id:"1",prop_id:"0",prop_keyword:"VR资讯",content:"VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。",changenote:"a"};t.id=e.id,t.prop_id=e.prop_id,t.prop_keyword=e.prop_keyword,t.content=e.content,t.changenote=e.changenote,e.$axios({url:"/encyclopedia-propRequireOpen1",method:"post",baseURL:e.hostURL,data:t}).then(function(t){1==t.data?(e.$message({type:"info",message:"修改成功"}),e.getRequireList(),e.id=-1,e.prop_id=-1,e.message="",e.content_show=!1):e.$message({type:"info",message:"修改失败"})}).catch(function(e){console.log(e)})},open2:function(){var e=this;if(-1==e.id)return void e.$message({type:"info",message:"删除失败，请选择一项请求"});var t={id:"1",prop_id:"0",prop_keyword:"VR资讯",content:"VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。",changenote:"a"};t.id=e.id,t.prop_id=e.prop_id,t.prop_keyword=e.prop_keyword,t.content=e.content,t.changenote=e.changenote,e.$axios({url:"/encyclopedia-propRequireOpen2",method:"post",baseURL:e.hostURL,data:t}).then(function(t){1==t.data?(e.$message({type:"info",message:"删除成功"}),e.getRequireList(),e.id=-1,e.prop_id=-1,e.message="",e.content_show=!1):e.$message({type:"info",message:"删除失败"})}).catch(function(e){console.log(e)})},getRequireList:function(){var e=this,t=e.pageNum;e.encyclopedia_propchangerequrire=[],e.$axios({url:"/encyclopedia-propRequire/"+t,method:"get",baseURL:e.hostURL}).then(function(t){e.encyclopedia_propchangerequrire=t.data}).catch(function(e){console.log(e)})}},mounted:function(){this.getRequireList()}}},643:function(e,t,o){t=e.exports=o(58)(void 0),t.push([e.i,".content{float:left;width:70%}.content_title{text-align:center;text-transform:uppercase;color:#a7c942}.content_p{text-indent:50px;text-align:justify;letter-spacing:3px}.pagination{margin-left:50px}.crumbs{text-decoration:none}",""])},714:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"crumbs"},[o("el-breadcrumb",{attrs:{separator:"/"}},[o("el-breadcrumb-item",[o("i",{staticClass:"el-icon-edit"}),e._v(" 百科管理")]),e._v(" "),o("el-breadcrumb-item",[e._v("词条审核")])],1)],1),e._v(" "),[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.encyclopedia_propchangerequrire,border:"","max-height":"500"},on:{"row-click":e.handleRowHandle}},[o("el-table-column",{attrs:{prop:"requireid",label:"请求号",width:"120"}}),e._v(" "),o("el-table-column",{attrs:{prop:"keyword",label:"词条名",width:"300"}}),e._v(" "),o("el-table-column",{attrs:{prop:"prop_keyword",label:"词条属性"}}),e._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{size:"small"},on:{click:e.handleClick}},[e._v("查看")])]}}])})],1),e._v(" "),o("div",{staticClass:"pagination"},[o("el-pagination",{attrs:{"current-page":e.pageNum,layout:"prev, next"},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.pageNum=t}}})],1),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.content_show,expression:"content_show"}]},[o("h2",{staticClass:"content_title"},[e._v("  内容概述   ")]),e._v(" "),o("div",{staticStyle:{"margin-top":"10px",border:"1px solid #A7C942"}},[o("p",{staticClass:"content_p",staticStyle:{margin:"10px"}},[e._v(e._s(e.message))])]),e._v(" "),o("br"),o("br"),e._v(" "),o("div",{staticStyle:{float:"right"}},[o("el-button",{attrs:{type:"success"},on:{click:e.open1}},[e._v("通过")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:e.open2}},[e._v("不通过")])],1)])]],2)},staticRenderFns:[]}},772:function(e,t,o){var n=o(643);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(133)("baf27fd8",n,!0)}});