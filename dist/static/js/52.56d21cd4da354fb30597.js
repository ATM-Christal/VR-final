webpackJsonp([52],{499:function(t,e,l){l(802);var a=l(132)(l(572),l(746),null,null);t.exports=a.exports},572:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l(188);e.default={components:{quillEditor:a.quillEditor},data:function(){return{editorOption:{modules:{toolbar:[[{header:[2,3,!1]}],["bold","italic"],[{list:"ordered"},{list:"bullet"}],["image"]]},placeholder:"请编写您的内容..."},tableData1:[],tableData2:[{}],tableData3:[{}],hostURL:"/VR",display_comm:!1,display_subcomm:!1,dialogFormVisible1:!1,dialogFormVisible2:!1,dialogFormVisible3:!1,dialogFormVisible4:!1,ruleForm:{title:"",contents:"",theme:""},rules:{title:[{required:!0,message:"请输入帖子标题",trigger:"blur"}],contents:[{required:!0,message:"请输入帖子内容",trigger:"blur"}],theme:[{required:!0,message:"请选择帖子主题",trigger:"change"}]},str:"",select:"",message:"",response:"",options:[{label:"讨论",name:"discussion"},{label:"分享",name:"share"},{label:"求助",name:"help"},{label:"教程",name:"tutorial"},{label:"评测",name:"evaluation"},{label:"手机VR",name:"phonevr"},{label:"电脑VR",name:"computervr"}],formLabelWidth:"120px",tiezi1:{id:""},comment:{id:""}}},methods:{handleSelectionChange1:function(t){this.multipleSelection1=t},handleSelectionChange2:function(t){this.multipleSelection2=t},handleSelectionChange3:function(t){this.multipleSelection3=t},getData1:function(){var t=this;t.$axios({url:"/adminPostSList",method:"get",baseURL:t.hostURL}).then(function(e){t.tableData1=[],t.tableData1=e.data;for(var l=0;l<t.tableData1.length;l++)"discussion"==t.tableData1[l].theme&&(t.tableData1[l].theme="讨论"),"share"==t.tableData1[l].theme&&(t.tableData1[l].theme="分享"),"help"==t.tableData1[l].theme&&(t.tableData1[l].theme="求助"),"tutorial"==t.tableData1[l].theme&&(t.tableData1[l].theme="教程"),"evaluation"==t.tableData1[l].theme&&(t.tableData1[l].theme="评测"),"phonevr"==t.tableData1[l].theme&&(t.tableData1[l].theme="手机VR"),"computervr"==t.tableData1[l].theme&&(t.tableData1[l].theme="电脑VR"),1==t.tableData1[l].good&&(t.tableData1[l].good="是"),1==t.tableData1[l].good&&(t.tableData1[l].good="是"),0==t.tableData1[l].good&&(t.tableData1[l].good="否"),0==t.tableData1[l].good&&(t.tableData1[l].good="否")}).catch(function(e){console.log(e),t.$message({type:"info",message:"connect fail"})})},getData2:function(t){console.log(t.id),this.tiezi1=t;var e=this;e.$axios({url:"/adminPostCommentList/"+t.id,method:"get",baseURL:e.hostURL}).then(function(t){e.tableData2=[],e.tableData2=t.data,e.display_comm=!0}).catch(function(t){console.log(t),e.$message({type:"info",message:"connect fail"})})},getData3:function(t){console.log(t.id),this.comment=t;var e=this;e.$axios({url:"/adminPostResponseList/"+t.id,method:"get",baseURL:e.hostURL}).then(function(l){e.tableData3=[],e.tableData3=l.data;for(var a=0;a<e.tableData3.length;a++)e.tableData3[a].messageLeaving=t.id;e.display_subcomm=!0}).catch(function(t){console.log(t),e.$message({type:"info",message:"connect fail"})})},del1:function(){for(var t=0;t<this.multipleSelection1.length;t++)for(var e=0;e<this.tableData1.length;e++)this.tableData1[e].id==this.multipleSelection1[t].id&&this.tableData1.splice(e,1);var l=new Array;console.log(this.multipleSelection1.length);for(var a=0;a<this.multipleSelection1.length;a++)l.push(this.multipleSelection1[a].id),console.log(this.multipleSelection1[a].id);var s=this;s.$axios({url:"/adminPostDelete",method:"post",baseURL:s.hostURL,data:l}).catch(function(t){console.log(t)}),this.$message({type:"success",message:"删除成功"})},del2:function(){for(var t=0;t<this.multipleSelection2.length;t++)for(var e=0;e<this.tableData2.length;e++)this.tableData2[e].id==this.multipleSelection2[t].id&&this.tableData2.splice(e,1);var l=new Array;console.log(this.multipleSelection2.length);for(var a=0;a<this.multipleSelection2.length;a++)l.push(this.multipleSelection2[a].id),console.log(this.multipleSelection2[a].id);var s=this;s.$axios({url:"/adminPostCommentDelete",method:"post",baseURL:s.hostURL,data:l}).catch(function(t){console.log(t)}),this.$message({type:"success",message:"删除成功"})},del3:function(){for(var t=0;t<this.multipleSelection3.length;t++)for(var e=0;e<this.tableData3.length;e++)this.tableData3[e].id==this.multipleSelection3[t].id&&this.tableData3.splice(e,1);var l=new Array;console.log(this.multipleSelection3.length);for(var a=0;a<this.multipleSelection3.length;a++)l.push(this.multipleSelection3[a].id),console.log(this.multipleSelection3[a].id);var s=this;s.$axios({url:"/adminPostResponseDelete",method:"post",baseURL:s.hostURL,data:l}).catch(function(t){console.log(t)}),this.$message({type:"success",message:"删除成功"})},postTiezi:function(){console.log(this.ruleForm.title),console.log(this.ruleForm.contents),console.log(this.ruleForm.theme);var t=this;t.$axios({url:"/adminPostAdd",method:"post",baseURL:t.hostURL,data:{title:this.ruleForm.title,contents:this.ruleForm.contents,theme:this.ruleForm.theme,AdminId:"1"}}).catch(function(e){console.log(e),t.$message({type:"error",message:"connect fail"})}),this.ruleForm.title="",this.ruleForm.contents="",this.ruleForm.theme=""},refresh:function(){location.reload()},search:function(){var t=this;console.log(this.select),console.log(this.str);var e,l=this;1==this.select&&(e="posterName"),2==this.select&&(e="date"),console.log(e),l.$axios({url:"/adminPostFind/"+e+"?find="+this.str,method:"get",baseURL:l.hostURL}).then(function(e){var l=e.data;t.tableData1.splice(0,t.tableData1.length);for(var a=0;a<l.length;a++)t.tableData1.splice(a,1,l[a])}).catch(function(t){console.log(t),l.$message({type:"info",message:"connect fail"})})},up:function(t){console.log(t.id);var e=this.tableData1.indexOf(t),l=this.tableData1[e];l.good="是",this.tableData1.splice(e,1,l);var a=this;a.$axios({url:"/adminPostSetGood/"+t.id,method:"post",baseURL:a.hostURL,data:{good:1}}).catch(function(t){console.log(t)})},down:function(t){console.log(t.id);var e=this.tableData1.indexOf(t),l=this.tableData1[e];l.good="否",this.tableData1.splice(e,1,l);var a=this;a.$axios({url:"/adminPostSetGood/"+t.id,method:"post",baseURL:a.hostURL,data:{good:0}}).catch(function(t){console.log(t)})},handleSave:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.dialogFormVisible1=!1,e.$message({type:"success",message:"保存成功，请点完成并刷新按钮"})})},handlePost:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.dialogFormVisible1=!1,e.postTiezi(),e.$message({type:"success",message:"发帖成功"})})},edit1:function(t){if(console.log(t.id),console.log(this.ruleForm.title),console.log(this.ruleForm.contents),console.log(this.ruleForm.theme),""==this.ruleForm.title||""==this.ruleForm.contents||""==this.ruleForm.theme)this.$message({type:"warning",message:"未完成编辑"});else{var e=this.tableData1.indexOf(t),l=this.tableData1[e];l.title=this.ruleForm.title,l.contents=this.ruleForm.contents,l.theme=this.ruleForm.theme,"discussion"==l.theme&&(l.theme="讨论"),"share"==l.theme&&(l.theme="分享"),"help"==l.theme&&(l.theme="求助"),"tutorial"==l.theme&&(l.theme="教程"),"evaluation"==l.theme&&(l.theme="评测"),"phonevr"==l.theme&&(l.theme="手机VR"),"computervr"==l.theme&&(l.theme="电脑VR"),this.tableData1.splice(e,1,l),console.log(l);var a=this;a.$axios({url:"/adminPostUpdate/"+t.id,method:"post",baseURL:a.hostURL,data:{title:this.ruleForm.title,contents:this.ruleForm.contents,theme:this.ruleForm.theme}}).catch(function(t){console.log(t)}),this.ruleForm.title="",this.ruleForm.contents="",this.ruleForm.theme=""}},edit2:function(t){if(""==this.message)this.$message({type:"warning",message:"未完成编辑"});else{console.log(t.id),console.log(this.message);var e=this.tableData2.indexOf(t),l=this.tableData2[e];l.message=this.message,this.tableData2.splice(e,1,l),console.log(l);var a=this;a.$axios({url:"/adminPostCommentUpdate/"+t.id,method:"post",baseURL:a.hostURL,data:{message:this.message}}).catch(function(t){console.log(t)}),this.message=""}},edit3:function(t){if(""==this.response)this.$message({type:"warning",message:"未完成编辑"});else{console.log(t.id),console.log(this.response);var e=this.tableData3.indexOf(t),l=this.tableData3[e];l.messageResponse=this.response,this.tableData3.splice(e,1,l),console.log(l);var a=this;a.$axios({url:"/adminPostResponseUpdate/"+t.id,method:"post",baseURL:a.hostURL,data:{response:this.response}}).catch(function(t){console.log(t)}),this.response=""}}},created:function(){this.getData1()}}},675:function(t,e,l){e=t.exports=l(58)(void 0),e.push([t.i,".content{float:left;width:70%}.list-btn-ground{text-align:left}.title1{font-size:20px;font-weight:700;margin:20px}.class1{text-align:center}.class2{font-size:30px;text-align:left;margin:30px}.class3{text-align:left;margin:20px}",""])},746:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("p",{staticClass:"title1"},[t._v("\n        帖子列表\n    ")]),t._v(" "),l("div",{staticClass:"list-btn-ground",staticStyle:{"margin-bottom":"20px"}},[l("el-row",[l("el-col",{attrs:{span:8}},[l("el-button",{attrs:{type:"danger"},on:{click:t.del1}},[t._v("删除选中帖")]),t._v(" "),l("el-button",{attrs:{type:"warning"},on:{click:function(e){t.dialogFormVisible4=!0}}},[t._v("发帖")]),t._v(" "),l("el-button",{attrs:{type:"success"},on:{click:function(e){t.refresh()}}},[t._v("刷新页面")]),t._v(" "),l("el-dialog",{staticClass:"class1",staticStyle:{width:"100%"},attrs:{title:"发帖",visible:t.dialogFormVisible4,size:"small"},on:{"update:visible":function(e){t.dialogFormVisible4=e}}},[l("el-form",{ref:"ruleForm",staticClass:"class2",attrs:{model:t.ruleForm,rules:t.rules,size:"small"}},[l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{label:"标题","label-width":t.formLabelWidth,prop:"title"}},[l("el-input",{staticClass:"class1",attrs:{"auto-complete":"off"},model:{value:t.ruleForm.title,callback:function(e){t.ruleForm.title=e},expression:"ruleForm.title"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"内容","label-width":t.formLabelWidth,prop:"contents"}},[l("quill-editor",{ref:"myTextEditor2",staticStyle:{"line-height":"1"},attrs:{options:t.editorOption},model:{value:t.ruleForm.contents,callback:function(e){t.ruleForm.contents=e},expression:"ruleForm.contents"}})],1),t._v(" "),l("el-form-item",{staticClass:"class1",attrs:{prop:"theme"}},[l("el-select",{attrs:{placeholder:"请选择主题"},model:{value:t.ruleForm.theme,callback:function(e){t.ruleForm.theme=e},expression:"ruleForm.theme"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.name}})}))],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",slot:"footer"},[l("el-button",{attrs:{type:"success"},on:{click:function(e){t.handlePost("ruleForm")}}},[t._v("确定发帖")]),t._v(" "),l("el-button",{attrs:{type:"warning"},on:{click:function(e){t.dialogFormVisible4=!1}}},[t._v("关闭窗口")])],1)],1)],1),t._v(" "),l("el-col",{attrs:{span:3}},[l("div",[l("el-select",{attrs:{placeholder:"请选择属性"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[l("el-option",{attrs:{label:"用户名",value:"1"}}),t._v(" "),l("el-option",{attrs:{label:"发布日期",value:"2"}})],1)],1)]),t._v(" "),l("el-col",{attrs:{span:6}},[l("div",[l("el-input",{attrs:{placeholder:"请输入对应字符串进行查找"},model:{value:t.str,callback:function(e){t.str=e},expression:"str"}},[l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){t.search()}},slot:"append"})],1)],1)])],1)],1),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData1,border:"","max-height":"500","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange1}},[l("el-table-column",{attrs:{type:"selection",width:"80",fixed:""}}),t._v(" "),l("el-table-column",{attrs:{prop:"id",label:"序号",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"title",label:"标题",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"contents",label:"内容",width:"250"}}),t._v(" "),l("el-table-column",{attrs:{prop:"date",label:"发帖日期",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"posterId",label:"用户ID",width:"125"}}),t._v(" "),l("el-table-column",{attrs:{prop:"posterName",label:"用户名",width:"140"}}),t._v(" "),l("el-table-column",{attrs:{prop:"totalComments",label:"评论数",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"theme",label:"主题",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"upvote",label:"点赞数",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{prop:"downvote",label:"踩数",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"good",label:"精品贴",width:"150"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"430"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticClass:"list-btn-ground",attrs:{type:"primary",size:"small"},on:{click:function(l){t.getData2(e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{staticClass:"list-btn-ground",attrs:{type:"",size:"small"},on:{click:function(e){t.dialogFormVisible1=!0}}},[t._v("编辑")]),t._v(" "),l("el-button",{directives:[{name:"show",rawName:"v-show",value:"否"==e.row.good,expression:"scope.row.good=='否'"}],staticClass:"list-btn-ground",attrs:{type:"success",size:"small",icon:"edit"},on:{click:function(l){t.up(e.row)}}},[t._v("加精")]),t._v(" "),l("el-button",{directives:[{name:"show",rawName:"v-show",value:"是"==e.row.good,expression:"scope.row.good=='是'"}],staticClass:"list-btn-ground",attrs:{type:"warning",size:"small",icon:"check"},on:{click:function(l){t.down(e.row)}}},[t._v("取精")]),t._v(" "),l("el-button",{staticClass:"list-btn-ground",attrs:{type:"success",size:"small"},on:{click:function(l){t.edit1(e.row)}}},[t._v("完成并刷新")]),t._v(" "),l("el-dialog",{staticClass:"class1",staticStyle:{width:"100%"},attrs:{title:"编辑",visible:t.dialogFormVisible1,size:"small"},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[l("el-form",{ref:"ruleForm",staticClass:"class2",attrs:{model:t.ruleForm,rules:t.rules,size:"small"}},[l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{label:"标题","label-width":t.formLabelWidth,prop:"title"}},[l("el-input",{staticClass:"class1",attrs:{"auto-complete":"off"},model:{value:t.ruleForm.title,callback:function(e){t.ruleForm.title=e},expression:"ruleForm.title"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"内容","label-width":t.formLabelWidth,prop:"contents"}},[l("quill-editor",{ref:"myTextEditor",staticStyle:{"line-height":"1"},attrs:{options:t.editorOption},model:{value:t.ruleForm.contents,callback:function(e){t.ruleForm.contents=e},expression:"ruleForm.contents"}})],1),t._v(" "),l("el-form-item",{staticClass:"class1",attrs:{prop:"theme"}},[l("el-select",{attrs:{placeholder:"请选择主题"},model:{value:t.ruleForm.theme,callback:function(e){t.ruleForm.theme=e},expression:"ruleForm.theme"}},t._l(t.options,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.name}})}))],1),t._v(" "),l("el-form-item",{staticClass:"class1"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.handleSave("ruleForm")}}},[t._v("保存并关闭窗口")])],1)],1)],1)],1)],1)]}}])})],1),t._v(" "),l("el-row",{directives:[{name:"show",rawName:"v-show",value:t.display_comm,expression:"display_comm"}]},[l("el-col",{attrs:{offset:0}},[l("p",{staticClass:"title1"},[t._v("\n                评论一览\n            ")]),t._v(" "),l("div",{staticClass:"list-btn-ground"},[l("el-button",{attrs:{type:"danger"},on:{click:t.del2}},[t._v("删除选中评论")])],1),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData2,border:"","max-height":"500","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange2}},[l("el-table-column",{attrs:{type:"selection",width:"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"id",label:"序号",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"message",label:"内容",width:"332"}}),t._v(" "),l("el-table-column",{attrs:{prop:"upvote",label:"点赞数",width:"200"}}),t._v(" "),l("el-table-column",{attrs:{prop:"belong",label:"所属帖子",width:"200"}}),t._v(" "),l("el-table-column",{attrs:{prop:"releasetime",label:"发布时间",width:"200"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticClass:"list-btn-ground",attrs:{type:"primary",size:"small"},on:{click:function(l){t.getData3(e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{staticClass:"list-btn-ground",attrs:{type:"primary",size:"small"},on:{click:function(e){t.dialogFormVisible2=!0}}},[t._v("编辑")]),t._v(" "),l("el-button",{staticClass:"list-btn-ground",attrs:{type:"success",size:"small"},on:{click:function(l){t.edit2(e.row)}}},[t._v("完成并刷新")]),t._v(" "),l("el-dialog",{staticClass:"class1",staticStyle:{width:"100%"},attrs:{title:"编辑",visible:t.dialogFormVisible2,size:"small"},on:{"update:visible":function(e){t.dialogFormVisible2=e}}},[l("el-form",{staticClass:"class2",attrs:{size:"small"}},[l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{label:"评论","label-width":t.formLabelWidth}},[l("el-input",{staticClass:"class1",attrs:{"auto-complete":"off"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible2=!1}}},[t._v("保存并关闭窗口")])],1)],1)]}}])})],1)],1)],1),t._v(" "),l("el-row",{directives:[{name:"show",rawName:"v-show",value:t.display_subcomm,expression:"display_subcomm"}]},[l("el-col",{attrs:{offset:0}},[l("p",{staticClass:"title1"},[t._v("\n                嵌套评论\n            ")]),t._v(" "),l("div",{staticClass:"list-btn-ground"},[l("el-button",{attrs:{type:"danger"},on:{click:t.del3}},[t._v("删除选中回复")])],1),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData3,border:"","max-height":"500","tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange3}},[l("el-table-column",{attrs:{type:"selection",width:"80"}}),t._v(" "),l("el-table-column",{attrs:{prop:"id",label:"序号",width:"132"}}),t._v(" "),l("el-table-column",{attrs:{prop:"messageLeaving",label:"所属母评论",width:"197"}}),t._v(" "),l("el-table-column",{attrs:{prop:"messageResponse",label:"回复信息",width:"200"}}),t._v(" "),l("el-table-column",{attrs:{prop:"releasetime",label:"发布时间",width:"200"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{staticClass:"list-btn-ground",attrs:{type:"primary",size:"small"},on:{click:function(e){t.dialogFormVisible3=!0}}},[t._v("编辑")]),t._v(" "),l("el-button",{staticClass:"list-btn-ground",attrs:{type:"success",size:"small"},on:{click:function(l){t.edit3(e.row)}}},[t._v("完成并刷新")]),t._v(" "),l("el-dialog",{staticClass:"class1",staticStyle:{width:"100%"},attrs:{title:"编辑",visible:t.dialogFormVisible3,size:"small"},on:{"update:visible":function(e){t.dialogFormVisible3=e}}},[l("el-form",{staticClass:"class2",attrs:{size:"small"}},[l("el-row",[l("el-col",{attrs:{span:22}},[l("el-form-item",{attrs:{label:"评论","label-width":t.formLabelWidth}},[l("el-input",{staticClass:"class1",attrs:{"auto-complete":"off"},model:{value:t.response,callback:function(e){t.response=e},expression:"response"}})],1)],1)],1)],1),t._v(" "),l("div",{staticClass:"dialog-footer",slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible3=!1}}},[t._v("关闭窗口")])],1)],1)]}}])})],1)],1)],1)],1)},staticRenderFns:[]}},802:function(t,e,l){var a=l(675);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);l(133)("39afe6bd",a,!0)}});