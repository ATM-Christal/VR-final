webpackJsonp([27],{528:function(t,e,a){a(787);var i=a(132)(a(601),a(731),"data-v-66743ef3",null);t.exports=i.exports},601:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{hostURL:"/VR",ivrURL:"/products/ivr",svrURL:"/products/svr",evrURL:"/products/evr",activePane:"ivr",selected:1,comparedNum:0,ajaxData:{list:[{id:1,salesmodel:"name1",productmodel:"name1.1",picLocation:"111dd"}]},ivrList:[],svrList:[],evrList:[],ipageNum:1,ipageTotal:9,ipageSize:1,epageNum:1,epageTotal:9,epageSize:1,spageNum:1,spageTotal:9,spageSize:1}},methods:{tabClick:function(t){var e=this;switch(e.comparedNum=0,t.index){case"0":e.getivrList();break;case"1":e.getsvrList();break;case"2":e.getevrList()}},handleIvrChange:function(){var t=this;console.log("current-Page:"),console.log(t.ipageNum),t.getivrList()},handleSvrChange:function(){var t=this;console.log("current-Page:"),console.log(t.spageNum),t.getsvrList()},handleEvrChange:function(){var t=this;console.log("current-Page:"),console.log(t.epageNum),t.getevrList()},getivrList:function(){var t=this,e=this,a=e.ivrURL+"/"+e.ipageNum;e.$axios({url:a,methods:"get",baseURL:e.hostURL}).then(function(t){e.ivrList=[],e.ajaxData=t.data.data;for(var a=0;a<e.ajaxData.payload.length;a++)e.ivrList[a]=e.ajaxData.payload[a];e.ipageTotal=e.ajaxData.code}).catch(function(e){t.$message({type:"info",message:"connection fail,press F12 to see the error in console"}),console.log("ERROR:"),console.log(e)})},getsvrList:function(){var t=this,e=this,a=e.svrURL+"/"+e.spageNum;e.$axios({url:a,methods:"get",baseURL:e.hostURL}).then(function(t){e.svrList=[],e.ajaxData=t.data.data;for(var a=0;a<e.ajaxData.payload.length;a++)e.svrList[a]=e.ajaxData.payload[a];e.spageTotal=e.ajaxData.code}).catch(function(e){t.$message({type:"info",message:"connection fail,press F12 to see the error in console"}),console.log("ERROR:"),console.log(e)})},getevrList:function(){var t=this,e=this,a=e.evrURL+"/"+e.epageNum;e.$axios({url:a,methods:"get",baseURL:e.hostURL}).then(function(t){e.evrList=[],e.ajaxData=t.data.data;for(var a=0;a<e.ajaxData.payload.length;a++)e.evrList[a]=e.ajaxData.payload[a];e.epageTotal=e.ajaxData.code}).catch(function(e){t.$message({type:"info",message:"connection fail,press F12 to see the error in console"}),console.log("ERROR:"),console.log(e)})},ivrClick:function(t){var e=this;e.selected=1,localStorage.setItem("salesModel",t.id),localStorage.setItem("proName",t.salesmodel),localStorage.setItem("proPic",t.picLocation),e.$router.push("/user/ivr-comment?"+t.id)},svrClick:function(t){var e=this;e.selected=2,localStorage.setItem("salesModel",t.id),localStorage.setItem("proName",t.salesmodel),localStorage.setItem("proPic",t.picLocation),e.$router.push("/user/svr-comment?"+t.id)},evrClick:function(t){var e=this;e.selected=3,localStorage.setItem("salesModel",t.id),localStorage.setItem("proName",t.salesmodel),localStorage.setItem("proPic",t.picLocation),e.$router.push("/user/evr-comment?"+t.id)}},mounted:function(){var t=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login");var e=localStorage.getItem("activePane");null!=e&&(t.activePane=e),"ivr"==t.activePane?t.getivrList():"svr"==t.activePane?t.getsvrList():"evr"==t.activePane&&t.getevrList(),localStorage.setItem("activePane","ivr")}}},658:function(t,e,a){e=t.exports=a(58)(void 0),e.push([t.i,".crumbs[data-v-66743ef3]{text-decoration:none}.form-box[data-v-66743ef3]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}ul[data-v-66743ef3]{list-style:none;display:block}li[data-v-66743ef3]{list-style-type:none;width:100%;border:1px solid #ccc}a[data-v-66743ef3],a[data-v-66743ef3]:hover,a[data-v-66743ef3]:visited{text-decoration:none}.product-list[data-v-66743ef3]{width:1000px}.product-item[data-v-66743ef3]{cursor:pointer;float:left;width:240px;height:260px;padding:30px 20px 20px;text-align:center}.product-img[data-v-66743ef3]{width:200px;height:200px;margin:0 auto}.product-img img[data-v-66743ef3]{width:100%}.product-item h3[data-v-66743ef3]{margin-top:12px;margin-bottom:12px;font-size:20px;font-weight:lighter}.pagination[data-v-66743ef3]{margin-left:50px}",""])},731:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:"/user/product-list"}},[a("i",{staticClass:"el-icon-date"}),t._v("产品中心")]),t._v(" "),a("el-breadcrumb-item",[t._v("产品列表")])],1)],1),t._v(" "),a("el-row",[a("div",{staticClass:"list-wrap"},[a("el-tabs",{on:{"tab-click":t.tabClick},model:{value:t.activePane,callback:function(e){t.activePane=e},expression:"activePane"}},[a("el-tab-pane",{attrs:{label:"一体机",name:"ivr"}},[a("el-row",[a("ul",{staticClass:"product-list clearfix"},t._l(t.ivrList,function(e){return a("li",{staticClass:"product-item",attrs:{type:"primary"},on:{click:function(a){t.ivrClick(e)}}},[a("div",{staticClass:"product-img"},[a("img",{attrs:{src:e.picLocation}})]),t._v(" "),a("h3",[t._v(t._s(e.brand))]),t._v(" "),a("h3",[t._v(t._s(e.salesmodel))])])}))]),t._v(" "),a("el-row",[a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.ipageNum,"page-size":9,layout:"total, prev, pager, next",total:t.ipageTotal},on:{"current-change":t.handleIvrChange,"update:currentPage":function(e){t.ipageNum=e}}})],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"PC头显",name:"svr"}},[a("el-row",[a("ul",{staticClass:"product-list clearfix"},t._l(t.svrList,function(e){return a("li",{staticClass:"product-item",attrs:{type:"primary"},on:{click:function(a){t.svrClick(e)}}},[a("div",{staticClass:"product-img"},[a("img",{attrs:{src:e.picLocation}})]),t._v(" "),a("h3",[t._v(t._s(e.brand))]),t._v(" "),a("h3",[t._v(t._s(e.salesmodel))])])}))]),t._v(" "),a("el-row",[a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.spageNum,"page-size":9,layout:"total, prev, pager, next",total:t.spageTotal},on:{"current-change":t.handleSvrChange,"update:currentPage":function(e){t.spageNum=e}}})],1)])],1),t._v(" "),a("el-tab-pane",{attrs:{label:"手机盒子",name:"evr"}},[a("el-row",[a("ul",{staticClass:"product-list clearfix"},t._l(t.evrList,function(e){return a("li",{staticClass:"product-item",attrs:{type:"primary"},on:{click:function(a){t.evrClick(e)}}},[a("div",{staticClass:"product-img"},[a("img",{attrs:{src:e.picLocation}})]),t._v(" "),a("h3",[t._v(t._s(e.brand))]),t._v(" "),a("h3",[t._v(t._s(e.salesmodel))])])}))]),t._v(" "),a("el-row",[a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.epageNum,"page-size":9,layout:"total, prev, pager, next",total:t.epageTotal},on:{"current-change":t.handleEvrChange,"update:currentPage":function(e){t.epageNum=e}}})],1)])],1)],1)],1)])],1)},staticRenderFns:[]}},787:function(t,e,a){var i=a(658);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(133)("40a7f226",i,!0)}});