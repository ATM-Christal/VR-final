<template>
    <div >
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>评测自媒体</el-breadcrumb-item>
                <el-breadcrumb-item>我的评测自媒体</el-breadcrumb-item>
            </el-breadcrumb>
        </div>


        <el-row style="margin-top: 20px">
            <el-col  v-if="mseList.length">
                <el-row :gutter="20" class="list-header">
                    <el-col :span="11">
                        <div>
                            <span class="">
                                文章标题
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div>
                            <span class=""><em class="left"></em>发表时间<em class="right"></em></span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div>
                            <span class="">
                                评测评价
                            </span>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div>
                            操作
                        </div>
                    </el-col>
                </el-row>
                <ul class="">
                    <li v-for="mse in mseList" :key="mse" class="mse-item">
                        <el-row :gutter="20">
                            <el-col :span="11">
                                <div class="grid-content">
                                    <span class="title">
                                    <p>{{ mse.evaluationTitle}}</p>
                                    </span>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content">
                                    <span class="time">{{ timeFomat(mse.updateTime) }}</span>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="mse-info">
                                    <span class="zan-count">
                                        <i class="fa fa-thumbs-o-up"></i>
                                        <em>{{ mse.ups}}</em>
                                    </span>
                                    <span class="cai-count">
                                        <i class="fa fa-thumbs-o-down"></i>
                                        <em>{{ mse.downs}}</em>
                                    </span>
                                    <span class="comment-count">
                                        <i class="fa fa-commenting-o"></i>
                                    <em>{{ mse.comments}}</em>
                                    </span>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div>
                                    <el-button @click="handleView(mse)" type="primary" size="small">查看</el-button>
                                    <el-button @click="handleEdit(mse)" type="" size="small">编辑</el-button>
                                    <el-button @click="handleDel(mse)" type="danger" size="small">删除</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </li>
                </ul>

                <div class="pagination">
                    <el-pagination
                            @current-change="handleCurrentChange"
                            :current-page.sync="pageNum"
                            :page-size="pageSize"
                            layout="prev, pager, next, jumper"
                            :total="pageTotal">
                    </el-pagination>
                </div>
            </el-col>
            <p v-else class="not-found">
                未找到相关内容。。。
            </p>

        </el-row>

    </div>
</template>

<script>

    export default {

        data: function(){
            return {
//                hostURL:'http://116.56.140.85:8080/VR',
                hostURL:'/VR',
                searchData: '',
                mseList:[
                    {
                        evaluationId: 12,
                        titlePic: 'static/img/bg.jpg',
                        authorId:'1',
                        authorName:'dawn',
                        evaluationTitle:'很正经的文章标题很正经的文章标题很正经的文章标题很正经的文章标题很正经的文章标题很正经的文章标题',
                        postTime:'2017/08/01',
                        updateTime:'2017/08/01',
                        type:null,
                        evaluationText: '',
                        ups:2,
                        downs:5,
                        comments:2,
                        view: 0,
                    },
                    {
                        evaluationId: 1,
                        titlePic: 'static/img/bg.jpg',
                        authorId:'1',
                        authorName:'dawn',
                        evaluationTitle:'很正经的文章标题',
                        postTime:'2017/08/01',
                        updateTime:'2017/08/01',
                        type:null,
                        evaluationText: '',
                        ups:2,
                        downs:5,
                        comments:2,
                        view: 0,
                    },
                    {
                        evaluationId: 1,
                        titlePic: 'static/img/bg.jpg',
                        authorId:'1',
                        authorName:'dawn',
                        evaluationTitle:'很正经的文章标题',
                        postTime:'2017/08/01',
                        updateTime:'2017/08/01',
                        type:null,
                        evaluationText: '',
                        ups:2,
                        downs:5,
                        comments:2,
                        view: 0,
                    },
                    {
                        evaluationId: 1,
                        titlePic: 'static/img/bg.jpg',
                        authorId:'1',
                        authorName:'dawn',
                        evaluationTitle:'很正经的文章标题',
                        postTime:'2017/08/01',
                        updateTime:'2017/08/01',
                        type:null,
                        evaluationText: '',
                        ups:2,
                        downs:5,
                        comments:2,
                        view: 0,
                    },
                    {
                        evaluationId: 1,
                        titlePic: 'static/img/bg.jpg',
                        authorId:'1',
                        authorName:'dawn',
                        evaluationTitle:'很正经的文章标题',
                        postTime:'2017/08/01',
                        updateTime:'2017/08/01',
                        type:null,
                        evaluationText: '',
                        ups:2,
                        downs:5,
                        comments:2,
                        view: 0,
                    },
                ],
                pageNum: 1,
                pageTotal: 0,
                pageSize: 10
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
            timeFomat(str){
                if(str === '刚刚')
                    return str;
                else {
                    let date = new Date(str);
                    let fmt = "yyyy-MM-dd hh:mm";
                    var o = {
                        "M+" : date.getMonth()+1,                 //月份
                        "d+" : date.getDate(),                    //日
                        "h+" : date.getHours(),                   //小时
                        "m+" : date.getMinutes(),                 //分
                        "s+" : date.getSeconds(),                 //秒
                        "q+" : Math.floor((date.getMonth()+3)/3), //季度
                        "S"  : date.getMilliseconds()             //毫秒
                    };
                    if(/(y+)/.test(fmt))
                        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
                    for(var k in o)
                        if(new RegExp("("+ k +")").test(fmt))
                            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
                    return fmt;
                }
            },
            getMseList(pageNum){
                var self = this;
                self.mseList=[];
                self.$axios({
                    url:'/evaluations/mylist?size=10&page='+pageNum,
                    method:'get',
                    baseURL: self.hostURL,
                }).then((response)=>{
                    self.mseList = [];
                    self.mseList = response.data.object['list'];
                    console.log(response.data);
                    self.pageTotal = response.data.object['page'].pageNum * self.pageSize;
                    console.log(self.pageTotal);
                }).catch((error)=>{
                    console.log(error);
                    self.codeParsing(error.response.status);
                });
            },
            handleCurrentChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.pageNum);
                self.getMseList(self.pageNum);
            },
            handleView(mse){
                var self=this;
                console.log(mse);
                self.$router.push('/user/mse?'+mse.evaluationId);
            },
            handleEdit(mse){
                var self=this;
                console.log(mse);
                self.$router.push('/user/mse-self-edit?'+mse.evaluationId);
            },
            handleDel(mse){
                var self=this;
                self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    //del
                    self.$axios({
                        url:'/evaluations/evaluation/' + mse.evaluationId,
                        method:'DELETE',
                        baseURL: self.hostURL,
                    }).then((response)=>{
                        console.log(response.data.object);
                        /*self.picValue = null;
                         self.picTitle = '';
                         self.title = '';
                         self.content = null;
                         self.$refs.ue.execCommand('cleardoc');*/
                        self.$notify({
                            title: '成功！',
                            message: '测评删除成功。',
                            type: 'success'
                        });
                        self.getMseList(self.pageNum);
                    }).catch((error)=>{
                        console.log(error);
                        self.codeParsing(error.response.status);
                    });
                }).catch(() => {
                    self.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        },
        mounted(){
            var self = this;
            var user_name=localStorage.getItem("ms_username");
            if(user_name==""){
                this.$router.replace('/login');
            }
            self.getMseList(self.pageNum);
        }
    }
</script>

<style scoped>
    .crumbs{
        text-decoration: none;
    }
    .pagination{
        margin-left:50px;
    }
    /**/
    li, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a{
        cursor: pointer;
    }
    a:hover{
        text-decoration: none;
        color: #5188a6!important;
    }
    .list-header{
        margin-bottom: 20px;
        color: #607590;
    }
    .mse-item{
        margin-bottom: 15px;
        border-bottom:dotted 1px #ccc;
    }
    .title{
        font-size: 22px;
        font-weight: bold;
        color: #48576a;
        /*display: block;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;*/
    }
    .time {
        font-size: 12px;
        color: #999;
    }
    .comment-count, .zan-count, .cai-count{
        color: #999;
        margin-right: 8px;
    }
    .not-found{
        font-size: 24px;
        color: #bac4ce;
        width: 240px;
        margin: 0 auto;
        padding-top: 20px;
    }


</style>