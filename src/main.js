import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
//import '../static/css/theme-green/index.css';       // 浅绿色主题
// import VueBlu from 'vue-blu';
// import 'vue-blu/dist/css/vue-blu.min.css';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';    
import "babel-polyfill";
import * as d3 from 'd3';
import VueQuillEditor from 'vue-quill-editor'
// var d3 = require("d3");
import VueImgInputer from 'vue-img-inputer'
Vue.component('VueImgInputer', VueImgInputer)

Vue.use(ElementUI);
Vue.use(VueQuillEditor);
// Vue.use(VueBlu);
// Vue.use(iView);
Vue.prototype.$axios = axios;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

String.prototype.gblen = function() {  
	var len = 0;  
	for (var i=0; i<this.length; i++)
	if(this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {  
		len += 2;  
	} else {  
		len ++;  
	}
	return len;  
}