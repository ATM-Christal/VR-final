webpackJsonp([15],{527:function(t,a,s){s(801);var e=s(132)(s(601),s(745),"data-v-cf6b75c0",null);t.exports=e.exports},549:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADGklEQVRYR8VX0VUbMRDcqSBQAVABpIKQCrKqIKECnApwKoBUgKlAmwoIFRAqCK4goYLNm3uSn+5O8t2RD+7Hz7Yszc6MdseQN37wxufLIgCqqiLySUSOAZyX4N39p4g8A7AY44+5hc0CoKpfROQawMGcjd39L4BVjPFuav1eAKp6JiIRwHHa6ClVambGinePqpIRTcyc8gt3fxaRYGa/WkCaAAZVb919xVOnKuL3lArAjYgckQ0R+Wpmm9pvqwB4OIDbVMWdmVGCxY+qbgB8TvuQiVEBIwCJ9nvq7e7fzGw9PDmxcwmAEpFqUsy1owNUdQ3gKjHxcSjHCEAIgbqRumrlZVVDYO6+MbOLCuCOCXrCzE7K73sACuq3McZsvNJoWZoXdyczWVd+zvfv3H1EtaoeACBLLOyi9EMPQAiBhuEmvUUZQQiBm5y6O01Fk5XgVgCuReQhxtjrEcmYHfghCzsAvEYA7kWkWj03CSF40vzQzAi2BMAq//CDGGPV3IW89EJ3jUsANwAu3f27ma1qlg8hdD9qVMju+FtEXmKM1YalqqMzdgDS5h/cfYdu7r2jxiLCm3PWMm+SIbO8k6kEkPUf0bsPSHm4iLBTng/lyb9X1Y4lXkkzO+xJkPVt6dcCkZkj9enwZtstfZTPKRnoDLYEgKpm5886fApAluDEzNiMJp+aqyfkykbd3bT/MuFS2YqrPjZh7YpMUfAKAO1ryCEE4LHWr/cYsDNcjLEbSlNPIdn7PJSGrTgPomornjpgQv88R3qdtjqMUpIhyl67HbReDqsoIlxDwE3jpl7xyGS1dxila5IHTnW0Fk2lm/N838oNeW0IgTmBYfZpKFc1kABgz+dUbIJInulmw74GVOSHaq9oRbLcs7k50ZPiphw17RPttwAY5blPdcbsC6UEwcPJBPP+ek7MTkOHGfIqpWlWrsMUnUFPxnIATD1lzDZK5O7bfJWSHEw7OZrnNPWQ0vTyWD5wfI5cRzOvImP8uhXFyz1m/TMqnM+GQzB8ZZUZ0JZ/y1I6pnH3TsRXA5hZ/aJlixhYtPPMxf8AFMwlP+ff13EAAAAASUVORK5CYII="},601:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s(549),i=function(t){return t&&t.__esModule?t:{default:t}}(e);a.default={data:function(){return{show1:!0,show2:!1,show3:!1,show4:!1,show5:!1,pic_hint:i.default,activeName2:"first",allowSubmit:!0,hostURL:"/VR",checkVisible:[!1,!1,!1],datas:[{id:1,brand:1,salesmodel:"name",productmodel:"name1",picLocation:"./static/img/img.jpg",screentype:"22222",monocularresolution:"222222",weight:1,cpu:1,memory:1,batteryCapacity:1,workingtemperature:1,bluerayirradiance:1,soundpressurelevel:1,maximumoutputvoltage:"110,  ≤150mv",broadbandcharacteristicvoltageofearphone:5555,boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",fieldangle:1,refreshrate:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1},{id:1,brand:1,salesmodel:"name",productmodel:"name1",picLocation:"./static/img/img.jpg",screentype:"22222",monocularresolution:"222222",weight:1,cpu:1,memory:1,batteryCapacity:1,workingtemperature:1,bluerayirradiance:1,soundpressurelevel:1,maximumoutputvoltage:1e3,broadbandcharacteristicvoltageofearphone:5555,boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",fieldangle:1,refreshrate:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1},{id:1,brand:1,salesmodel:"name",productmodel:"name1",picLocation:"./static/img/img.jpg",screentype:"22222",monocularresolution:"222222",weight:1,cpu:1,memory:1,batteryCapacity:1,workingtemperature:1,bluerayirradiance:1,soundpressurelevel:1,maximumoutputvoltage:1e3,broadbandcharacteristicvoltageofearphone:5555,boundarywarning:"222222222",radiationdisturbance:"./static/img/img.jpg",electrostaticdischarge:"./static/img/img.jpg",fieldangle:1,refreshrate:1,systemdelay:1,trackingmode:1,trackingrange:1,meanchangeofvisualacuity:1,ssqmean:1,cvsmean:1}]}},methods:{codeParsing:function(t){var a=this,s=function(t,s){a.$notify({title:t,message:s,type:"error"})};switch(t){case-1:s("系统错误","未知错误，请上报管理员");break;case 201:s("输入域错误","验证码错误");break;case 300:s("输入域错误","邮箱或密码错误");break;case 301:s("权限问题","用户已禁用，请联系管理员");break;case 302:s("权限问题","用户未激活，请去邮箱激活用户");break;case 303:s("注册问题","邮箱已占用，请更改邮箱");break;case 304:s("注册问题","昵称已占用，请更改昵称");break;case 401:s("权限问题","用户无权访问，请联系管理员");break;case 402:s("操作错误","删除错误,请刷新重试");break;case 415:s("操作错误","文件类型错误，请上传正确文件类型");break;case 500:s("系统错误","未知错误，请上报管理员");break;case 600:s("TIME_OUT","访问超时，请检查网络连接");break;case 700:s("激活错误","非法激活链接，请联系管理员");break;case 800:s("激活错误","用户已被激活，请直接登录");break;case 1e3:s("系统错误","参数错误，上报管理员");break;case 1001:s("权限问题","用户未登录，请重新登录");break;case 1002:s("系统错误","参数错误，上报管理员")}},getData:function(){for(var t=this,a={idList:[]},s="",e=JSON.parse(localStorage.getItem("compare_data")),i=0;i<e.data.length;i++)a.idList.push(e.data[i].id);var n=localStorage.getItem("kind");"ivr"==n?s="/ivrCompare":"svr"==n?s="/svrCompare":"evr"==n&&(s="/evrCompare"),t.datas={},t.$axios({url:s,method:"post",data:a,baseURL:t.hostURL}).then(function(a){if(t.datas=a.data.data.payload,0!=t.datas.length){t.checkVisible=[];for(var s=0;s<t.datas.length;s++)t.checkVisible.push(!1)}}).catch(function(t){console.log(t)})},parameter:function(){this.show1=!0,this.show2=!1,this.show3=!1,this.show4=!1,this.show5=!1},security:function(){this.show1=!1,this.show2=!0,this.show3=!1,this.show4=!1,this.show5=!1},compatibility:function(){this.show1=!1,this.show2=!1,this.show3=!0,this.show4=!1,this.show5=!1},properties:function(){this.show1=!1,this.show2=!1,this.show3=!1,this.show4=!0,this.show5=!1},asthenopia:function(){this.show1=!1,this.show2=!1,this.show3=!1,this.show4=!1,this.show5=!0}},mounted:function(){var t=this;""==localStorage.getItem("ms_username")&&this.$router.replace("/login"),t.getData()}}},674:function(t,a,s){a=t.exports=s(58)(void 0),a.push([t.i,".crumbs[data-v-cf6b75c0]{text-decoration:none}.bread[data-v-cf6b75c0]{font-size:16px}.form-box[data-v-cf6b75c0]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-cf6b75c0]{width:220px;margin-left:80px}.submit-btn button[data-v-cf6b75c0]{width:100%}.compare-box[data-v-cf6b75c0]{padding:28px;width:880px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1);margin-left:200px}.compare-table[data-v-cf6b75c0]{border-collapse:collapse;width:800px;margin-left:40px}.compare-table .cate-title[data-v-cf6b75c0]{text-align:left;height:35px;border:1px solid #e6e6e6;padding-left:10px;background:#fafafa}.compare-table td[data-v-cf6b75c0]{width:218px;padding:8px 0;zoom:1;text-align:center;word-wrap:break-word;word-break:break-all;border:1px solid #e6e6e6}.cate-title strong[data-v-cf6b75c0]{position:relative;display:block;padding-left:17px;height:20px;font:16px/20px Microsoft YaHei,arial;background-position:-87px 2px;color:#333;font-weight:700}.compare-table th[data-v-cf6b75c0]{padding:8px 10px;width:102px;border:1px solid #e6e6e6;background:#fafafa;font-weight:400;text-align:right;line-height:18px;font-size:14px}.param-content[data-v-cf6b75c0]{width:200px;white-space:nowrap}.param-content img[data-v-cf6b75c0]{width:100%;margin-left:7px}.main-left[data-v-cf6b75c0]{text-align:center;width:200px;float:left}",""])},745:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"crumbs"},[s("el-breadcrumb",{attrs:{separator:"/"}},[s("el-breadcrumb-item",[s("i",{staticClass:"el-icon-date"}),t._v("产品对比")]),t._v(" "),s("el-breadcrumb-item",[t._v("查看对比")])],1)],1),t._v(" "),s("div",{staticClass:"main-left"},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"#/1",router:!0,theme:"light"}},[s("el-menu-item",{staticClass:"menu-item",class:{isActive:t.active},attrs:{index:"#/1"},on:{click:function(a){t.parameter()}}},[t._v("产品参数")]),t._v(" "),s("el-menu-item",{staticClass:"menu-item",class:{isActive:!t.active},attrs:{index:"#/2"},on:{click:function(a){t.security()}}},[t._v("安全性")]),t._v(" "),s("el-menu-item",{staticClass:"menu-item",class:{isActive:!t.active},attrs:{index:"#/3"},on:{click:function(a){t.compatibility()}}},[t._v("电磁兼容性")]),t._v(" "),s("el-menu-item",{staticClass:"menu-item",class:{isActive:!t.active},attrs:{index:"#/4"},on:{click:function(a){t.properties()}}},[t._v("性能")]),t._v(" "),s("el-menu-item",{staticClass:"menu-item",class:{isActive:!t.active},attrs:{index:"#/5"},on:{click:function(a){t.asthenopia()}}},[t._v("视疲劳")])],1)],1),t._v(" "),s("div",{staticClass:"compare-box"},[t.show1?s("table",{staticClass:"compare-table"},[s("tbody",[s("tr",{staticClass:"cate-tr"},[t._m(0),t._v(" "),t._l(t.datas,function(t){return s("td",[s("div",{staticClass:"param-content"},[s("img",{attrs:{src:t.picLocation}})])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(1),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.brand))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(2),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.salesmodel))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(3),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.productmodel))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(4),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.screentype))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(5),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.monocularresolution))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(6),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.weight))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(7),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.cpu))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(8),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.memory))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(9),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.batteryCapacity))])])])})],2)])]):t._e(),t._v(" "),t.show2?s("table",{staticClass:"compare-table"},[s("tbody",[s("tr",{staticClass:"cate-tr"},[t._m(10),t._v(" "),t._l(t.datas,function(t){return s("td",[s("div",{staticClass:"param-content"},[s("img",{attrs:{src:t.picLocation}})])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        工作温度(℃)"),s("el-tooltip",{attrs:{content:"工作温度小于55℃表示正常",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1),t._v(" "),s("br")]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.workingtemperature))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(11),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.bluerayirradiance))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        声压(dB(A))"),s("el-tooltip",{attrs:{content:"声压小于100dB表示正常",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1)]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.soundpressurelevel))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        播放器最大输出电压(mV)"),s("el-tooltip",{attrs:{content:"最大输出电压小于150mV表示正常",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1),t._v(" "),s("br")]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.maximumoutputvoltage))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        耳机的宽带特征电压(mV)"),s("el-tooltip",{attrs:{content:"特征电压大于75mV表示正常",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1),t._v(" "),s("br")]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.broadbandcharacteristicvoltageofearphone))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(12),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.boundarywarning))])])])})],2)])]):t._e(),t._v(" "),t.show3?s("table",{staticClass:"compare-table"},[s("tbody",[s("tr",{staticClass:"cate-tr"},[t._m(13),t._v(" "),t._l(t.datas,function(t){return s("td",[s("div",{staticClass:"param-content"},[s("img",{attrs:{src:t.picLocation}})])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(14),t._v(" "),t._l(t.datas,function(a,e){return s("td",[s("el-button",{attrs:{type:"text"},on:{click:function(a){t.checkVisible[e]=!0}}},[t._v("点击查看")]),t._v(" "),s("el-dialog",{attrs:{title:"辐射骚扰",visible:t.checkVisible[e]},on:{"update:visible":function(a){var s=t.checkVisible,i=e;Array.isArray(s)?s.splice(i,1,a):t.checkVisible[e]=a}}},[s("img",{attrs:{src:a.radiationdisturbance}}),t._v(" "),s("div",{staticClass:"dialog-footer",slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(a){t.checkVisible[e]=!1}}},[t._v("确 定")])],1)])],1)})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(15),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.electrostaticdischarge))])])])})],2)])]):t._e(),t._v(" "),t.show4?s("table",{staticClass:"compare-table"},[s("tbody",[s("tr",{staticClass:"cate-tr"},[t._m(16),t._v(" "),t._l(t.datas,function(t){return s("td",[s("div",{staticClass:"param-content"},[s("img",{attrs:{src:t.picLocation}})])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        视场角(°)"),s("el-tooltip",{attrs:{content:"≥100为一级，＜100为二级",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1)]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.fieldangle))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        刷新率(Hz)"),s("el-tooltip",{attrs:{content:"＞80为一级，≤80为二级",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1)]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.refreshrate))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        系统延迟(ms)"),s("el-tooltip",{attrs:{content:"≤20为一级，＞20为二级",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1)]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.systemdelay))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(17),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.trackingmode))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[t._m(18),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",[t._v(t._s(a.trackingrange))])])])})],2)])]):t._e(),t._v(" "),t.show5?s("table",{staticClass:"compare-table"},[s("tbody",[s("tr",{staticClass:"cate-tr"},[t._m(19),t._v(" "),t._l(t.datas,function(t){return s("td",[s("div",{staticClass:"param-content"},[s("img",{attrs:{src:t.picLocation}})])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        视力变化均值"),s("el-tooltip",{attrs:{content:"＜0.1为一级，≥0.1为二级",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1)]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.meanchangeofvisualacuity))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        SSQ均值"),s("el-tooltip",{attrs:{content:"≤90为一级，＞90为二级",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1)]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.ssqmean))])])])})],2),t._v(" "),s("tr",{staticClass:"param-list"},[s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        CVS均值"),s("el-tooltip",{attrs:{content:"≤80为一级，＞80为二级",placement:"top"}},[s("img",{staticStyle:{width:"15px"},attrs:{src:t.pic_hint}})])],1)]),t._v(" "),t._l(t.datas,function(a){return s("td",[s("div",{staticClass:"param-content"},[s("span",{staticClass:"safety"},[t._v(t._s(a.cvsmean))])])])})],2)])]):t._e()])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("td",{staticClass:"cate-title"},[s("strong",[t._v("产品外观")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        品牌\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        销售型号\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        产品型号\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        屏幕类型\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        单眼分辨率\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        重量(kg)\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                       CPU(GHz)\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        内存(GB)\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        电池容量（mAh)\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("td",{staticClass:"cate-title"},[s("strong",[t._v("产品外观")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        蓝光辐照度(W·m^－2·sr^－1)\n                     ")]),t._v(" "),s("br"),t._v(" "),s("br")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        边界警示\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("td",{staticClass:"cate-title"},[s("strong",[t._v("产品外观")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        辐射骚扰\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        静电放电\n                     ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("td",{staticClass:"cate-title"},[s("strong",[t._v("产品外观")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        跟踪模式(m)\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("th",{staticClass:"cate-title"},[s("strong",[t._v("\n                        跟踪范围\n                    ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("td",{staticClass:"cate-title"},[s("strong",[t._v("产品外观")])])}]}},801:function(t,a,s){var e=s(674);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(133)("2ac831c2",e,!0)}});