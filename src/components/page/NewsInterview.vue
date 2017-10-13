<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/user/news-list"><i class="el-icon-date"></i>VR资讯</el-breadcrumb-item>
                <el-breadcrumb-item>专访</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
            <el-col :span='20'>
                <div class="list-wrap">
                    <el-tabs v-model="activePane" @tab-click="handleClick">
                        <el-tab-pane label="专访" name="first">

                        <div style="width: 790px;text-align: center;margin: 0 auto;">
                        <el-carousel :interval='4000' type="card" height="250px" >
                            <el-carousel-item v-for="(item, index) in newsList" v-if="index <= 2" :key="item" >
                                <h3 style="text-align: center;" @click="picClick(item.id)"> <img :src="item.picLocation" width="400px" height="250px" /> 
                                </h3>
                            </el-carousel-item>
                        </el-carousel>
                        </div>

                            <ul class="news-list">
                                <li class="news-item" v-for="news in newsList" @click="newsClick(news)">
                                    <a href="javascript:void(0);" class="link-tit" title="">
                                        <img :src="news.picLocation">
                                        <span class="news-title">{{news.title}}</span>
                                        <span class="news-desc">{{news.newsAbstract}}</span>
                                    </a>
                                </li>
                            </ul>
                            
                            <div class="pagination">
                                <el-pagination
                              @current-change="handleCurrentChange"
                              :current-page.sync="pageNum"
                              layout="prev, next">
                            </el-pagination>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    
    export default {
        data: function(){
            return {
                hostURL:'/VR',
                activePane: 'first',
                newsList:[
                    {
                        id:1,
                        title:'fuuuuuuu',
                        newsAbstract:'11111111111111111111111111111111111111',
                        picLocation:'./static/img/img.jpg',
                    },
                    {
                        id:2,
                        title:'fxxxxxxuu',
                        newsAbstract:'22222222222222222222222222222222222222222',
                        picLaocation:'./static/img/img.jpg',
                    }
                ],
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
            handleClick(){
                // operate the tab
            },
            picClick(index) {
                this.$router.push('/user/news?'+index);
            },
            getNews(str){
                var self = this;
                self.newsList=[];
                self.$axios({
                    url:'/news_list/'+str+'/5',
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    if(response.data.length==0){
                        self.pageNum=self.pageNum-1;
                        self.$message({
                            type:'info',
                            message:'暂无下一页数据'
                        });
                    }else{
                        self.newsList = [];
                        self.newsList= response.data;
                    }
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
                self.getNews(self.pageNum);
            },
            newsClick(news){
                var self=this;
                console.log("11111111");
                console.log(news);
                self.$router.push('/user/interviewpage?'+news.id);
            }

        },
        mounted(){
            var self = this;
            var user_name=localStorage.getItem("ms_username");
            if(user_name==""){
                this.$router.replace('/login');
            }
            self.getNews(self.pageNum);
        }
    }
</script>

<style scoped>
.crumbs{
    text-decoration: none;
}
.form-box{
    width:300px;
    margin-top:50px;
    margin-left:0px;
    box-shadow:0 0 8px 0
        rgba(232,237,250,.9),0 2px 4px 0
        rgba(232,237,250,.9);
    padding:50px 50px 50px 10px;  
}
.submit-btn{
    width:220px;
    margin-left:80px;
}
.submit-btn button{
    width:100%; 
}

/*=======================================*/
ul {
    list-style: none;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}
li {
    list-style-type:none;
    padding-bottom:10px;
    border-bottom: 1px solid #ccc;
}
a {
    text-decoration: none;
}
a:hover, a:visited {
    text-decoration: none;
}
.news-item{
    height: 124px;
    margin-bottom: 24px;
    overflow: hidden;
}
.news-list .news-item .link-tit {
    color: #e9c06c;
}
.news-list .news-item img{
    display: block;
    float:left;
    margin-right: 20px;
    width:200px;

}
.news-list .news-item .news-title{
    display: block;
    font-size: 22px;
    font-weight: lighter;
    color: #3e3e3e;
    line-height: 50px;
    height: 50px;
    overflow: hidden;
}
.news-list .news-desc {
    display: block;
    height: 60px;
    overflow: hidden;
    font-size: 14px;
    color: #898989;
    line-height: 1.5;
}

.pagination{
    margin-left:50px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 250px;
    margin: 0;
  }
  


</style>