<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/user/pedia"><i class="el-icon-date"></i> VR百科</el-breadcrumb-item>
                <el-breadcrumb-item>百科搜索</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="banner">
	         	<h3>KNOW MORE ABOUT</h3>
		        <h2><span>VR </span></h2>
		        <h4>Search for what you want to know</h4>
	      </div>
        <div class="awa" id="about">
		    <div class="pedia-container">
                <div class="pedia-box">
                    <input type="text" v-model="search" placeholder=" 输入词条关键字" />
                    <!--<button class="search-btn" @click="search()">search</button>-->
                    <el-button type="primary" class="search-btn" @click="getEncyclopedia()">搜索</el-button>
                </div>
                <div id="show-pedias">
                  
                    <div v-for="item in encyclopediaList" class="single-item" @click="encyclopediaClick(item)">
                         <a href="javascript:void(0);" class="link-tit" title=""></a>
                         <h1>{{item.keyword}}</h1>
                         <article>{{item.prop_keyword}}</article>
                    </div>
                </div>
            </div>
            <div class="pagination" v-show="pagination_show">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="pageNum"
                    layout="prev, next">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script>

    export default {
        data: function(){
            return {
                search:'',
                hostURL:'/VR',
                activePane: 'first',
                encyclopediaList:[
                    {
                        id:1,
                        keyword:'fuuuuuuu',
                        type:"",
                        changenote:'11111111111111111111111111111111111111',
                        prop_keyword:'2222222222222222',
                    },
                    {
                        id:2,
                        keyword:'ffffffff',
                        type:"",
                        changenote:'1111111111111111111111111111111111',
                        prop_keyword:'222222222222',
                    }
                ],
                pagination_show:false,
                pageNum:1,
                pageTotal:20,
                pageSize:1
            }
        },
        methods:{
            codeParsing(code) {
                let self = this;
                var msg = (err_title, err_message)=> {
                    self.$notify({
                        title: err_title,
                        message: err_message,
                        type: 'error'
                    });
                };
                switch (code) {
                    case -1:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 201:
                        msg('输入域错误', '验证码错误');
                        break;
                    case 300:
                        msg('输入域错误', '邮箱或密码错误');
                        break;
                    case 301:
                        msg('权限问题', '用户已禁用，请联系管理员');
                        break;
                    case 302:
                        msg('权限问题', '用户未激活，请去邮箱激活用户');
                        break;
                    case 303:
                        msg('注册问题', '邮箱已占用，请更改邮箱');
                        break;
                    case 304:
                        msg('注册问题', '昵称已占用，请更改昵称');
                        break;
                    case 401:
                        msg('权限问题', '用户无权访问，请联系管理员');
                        break;
                    case 402:
                        msg('操作错误', '删除错误,请刷新重试');
                        break;
                    case 415:
                        msg('操作错误', '文件类型错误，请上传正确文件类型');
                        break;
                    case 500:
                        msg('系统错误', '未知错误，请上报管理员');
                        break;
                    case 600:
                        msg('TIME_OUT', '访问超时，请检查网络连接');
                        break;
                    case 700:
                        msg('激活错误', '非法激活链接，请联系管理员');
                        break;
                    case 800:
                        msg('激活错误', '用户已被激活，请直接登录');
                        break;
                    case 1000:
                        msg('系统错误', '参数错误，上报管理员');
                        break;
                    case 1001:
                        msg('权限问题', '用户未登录，请重新登录');
                        break;
                    case 1002:
                        msg('系统错误', '参数错误，上报管理员');
                        break;
                    default:
                        break;
                }
            },
            getEncyclopedia(){
                var self = this;
                self.encyclopediaList=[];
                var searchData = {
                    keyword:"",
                    pageNum:1
                };
                searchData.keyword=self.search;
                searchData.pageNum=self.pageNum;
                self.$axios({
                    url:'/encyclopediaSearch',
                    method:'post',
                    baseURL:self.hostURL,
                    data:searchData
                }).then((response)=>{
                    self.encyclopediaList = [];
                    self.encyclopediaList = response.data;
                    self.pagination_show=true;
                }).catch((error)=>{
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },
            handleCurrentChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.pageNum);
                self.getEncyclopedia();
            },
            encyclopediaClick(item){
                var self=this;
                console.log(item.id);
                self.$router.push('/user/encyclopedia-prop?'+item.id);

            }

        },

        mounted(){
            var self = this;
            var user_name=localStorage.getItem("ms_username");
            if(user_name==""){
                this.$router.replace('/login');
            }
            self.encyclopediaList=[];
            if(self.encyclopediaList.length==0){
                self.pagination_show=false;
            }
        }
    }
</script>

<style>
/*.{
	padding: 0;
	margin: 0;
	background: #FFF;
	font-family: 'open Sans', sans-serif;
}*/

.crumbs{
    text-decoration: none;
}

.banner{
	background:url('../../assets/ab1.jpg') no-repeat 0px 0px;
	background-size:cover;
	min-height:500px;
  min-width:640px;
}
.banner h3{
	color:#fff;
	font-size:30px;
	letter-spacing:1px;
	text-transform:uppercase;
	padding-top:18%;
	font-weight:600;
  text-align: center;
}
.banner h2{
	color:#fff;
	font-size:50px;
	letter-spacing:1px;
	font-weight:700;
	text-transform:uppercase;
	margin:30px 0px;
  text-align: center;
}
.banner h2 span{
	color:#00bcd4;
}
.banner h4{
	color:#fff;
	font-size:14px;
	letter-spacing:1px;
	text-transform:uppercase;
	background:#00bcd4;
	width:20%;
	margin:0 auto;
	padding:10px 0px;
  text-align: center;
}

.awa{
	padding:50px 0px;
  background: #778899;
}

.pedia-box {
    height: 45px;
    width: 800px;
    margin: 0 10%;
    margin-top: 0px;
    position: relative;
}

.pedia-box input {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 700px;
    height: 45px;
    font-size: 18px;
    float: left;
    padding-left: 0px;
    padding-right: 10px;
    overflow: hidden;
}

.search-btn {
    height: 45px;
    width: 100px;
    border: 1px solid #FFC107;
    background-color:#FFC107;
    color: white;
    font-size: 16px;
    font-weight: bold;
    float: left;
}
.search-btn {
    cursor: pointer
}
.link-tit{
    color: #e9c06c;
}
#show-pedias{
  max-width:800px;
  margin:0 auto;
}
.single-item,.eg-item{
  padding:20px;
  margin:20px 0;
  box-sizing:border-box;
  background:#eee;
  cursor:pointer;
}

.pagination{
    margin-right:120px;
}

</style>
