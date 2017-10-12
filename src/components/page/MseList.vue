<template>
    <div >
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>媒体自评测</el-breadcrumb-item>
                <el-breadcrumb-item>媒体自评测</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
            <!--<div class="search">
                <i class="fa fa-search search-icon"></i>
                <input placeholder="搜索" v-model="searchData" class="text_search"/>
            </div>-->
            <a href="javascript:void(0);" class="write-article" @click="goMseEdit()">
                <i class="fa fa-pencil"></i>
                写篇原创
            </a>
        </el-row>


        <el-row style="margin-top: 20px">
            <el-col :span="8" v-if="search.length">
                <ul class="card">
                    <li v-for="mse in search" :key="mse">
                        <a class="item-pic" href="javascript:void(0);" @click="mseClick(mse)">
                            <img :src="mse.titlePic">
                            <span class="time"><em class="left"></em>{{ timeFomat(mse.updateTime) }}<em class="right"></em></span>
                        </a>
                        <div class="item-info-box">
                            <h2 class="item-name">
                                <a href="javascript:void(0);" @click="mseClick(mse)" title="">{{ mse.evaluationTitle }}</a>
                            </h2>
                            <div class="item-info" v-html="mseInfo(mse.evaluationText)"></div>
                        </div>
                        <div class="item-bot">
                            <span class="comment-count">
                                    <i class="fa fa-commenting-o"></i>
                                    <em>{{ mse.comments}}</em>
                            </span>
                            <span class="cai-count">
                                    <i class="fa fa-thumbs-o-down"></i>
                                    <em>{{ mse.downs}}</em>
                            </span>
                            <span class="zan-count">
                                    <i class="fa fa-thumbs-o-up"></i>
                                    <em>{{ mse.ups}}</em>
                            </span>
                            <span class="nickname">
                                    <i class="fa fa-user-circle-o"></i>
                                    <em>{{ mse.authorName}}</em>
                            </span>
                        </div>
                    </li>
                </ul>

                <div class="pagination card">
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
                        evaluationId: 1,
                        titlePic: 'static/img/bg.jpg',
                        authorId:'dawn',
                        authorName:'1',
                        evaluationTitle:'',
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
                pageSize: 6
            }
        },
        computed:{
            search: function () {
                var searchData = this.searchData;

                if(searchData){
                    return this.mseList.filter(function (mse) {
                        return Object.keys(mse).some(function (key) {
                            return String(mse[key]).toLowerCase().indexOf(searchData) > -1
                        })
                    })
                }

                return this.mseList;
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
                    url:'/evaluations/list?size=6&page='+pageNum,
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
            mseClick(mse){
                var self=this;
                console.log("click mse");
                console.log(mse);
                self.$router.push('/user/mse?'+mse.evaluationId);
            },
            goMseEdit(){
                var self=this;
                self.$router.push('/user/mse-edit');
            },
            mseInfo(str){
                var start = str.indexOf('<p');
                var end = str.indexOf('</p>');
                return str.slice(start,end+4);
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
    .search {
        margin: 0 auto;
        border: 2px solid #dcdcdc;
        width: 354px;
        background-color: #fff;
        border-radius: 4px;
    }
    .text_search {
        border: 0;
        padding-left: 8px;
        width: 320px;
        color: #999;
        -webkit-appearance: caret;
        height: 36px;
        outline: none;
        font-size: 20px;
    }
    .search-icon {
        width: 16px;
        height: 16px;
        border: 0;
        float: right;
        margin: 10px 10px 0 0;
        background-color: transparent;
        cursor: pointer;
        color: #ccc;
    }
    .write-article {
        margin-top: -39px;
        float: right;
        width: 104px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #dcdcdc;
        text-align: center;
        font-size: 14px;
        color: #333;
        border-radius: 16px;
        -moz-border-radius: 16px;
        -webkit-border-radius: 16px;
    }
    .write-article a{
        color: #000;
    }
    .write-article:hover {
        border-color: #2e76a8;
        color: #2e76a8;
    }
    a:hover{
        text-decoration: none;
        color: #5188a6!important;
    }
    .write-article i {
        font-size: 20px;
        vertical-align: -1px;
        margin-right: 5px;
        display: inline-block;
    }
    .card{
        width: 1095px;
        overflow: hidden;
    }
    .card li{
        width: 320px;
        margin-right: 45px;
        float: left;
        margin-bottom: 30px;
    }
    .item-pic{
        width: 320px;
        height: 180px;
        margin-bottom: 8px;
        display: block;
        position: relative;
        overflow: hidden;
    }
    .item-pic img{
        /*max-width: 320px;*/
        /*max-height: 180px;*/
        width: 320px;
        height: 180px;
        -webkit-transition: all .3s ease 0s;
        transition: all .3s ease 0s;
    }
    .item-pic:hover img {
        transform: scale(1.05);
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
    }
    .item-pic .time {
        position: absolute;
        bottom: 0;
        right: 10px;
        padding: 0 6px 0 5px;
        font-size: 10px;
        line-height: 14px;
        background-color: #fff;
        background-color: rgba(255,255,255,0.8);
        border-radius: 3px 3px 0 0;
    }
    .time {
        font-size: 12px;
        color: #999;
    }
    .item-pic .time .left {
        position: absolute;
        left: -2px;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 2px solid rgba(255,255,255,0.8);
        border-left: 2px solid transparent;
    }
    .item-pic .time .right {
        position: absolute;
        right: -2px;
        bottom: 0;
        width: 0;
        height: 0;
        border-bottom: 2px solid rgba(255,255,255,0.8);
        border-right: 2px solid transparent;
    }
    .item-info-box{
        height: 90px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .item-info-box .item-name{
        line-height: 20px;
        max-height: 40px;
        overflow: hidden;
        margin-bottom: 10px;
        display: block;
        font-weight: normal;
        font-size: 14px;
    }
    .item-name a {
        color: #333;
    }
    .item-info-box .item-info{
        max-height: 60px;
        line-height: 20px;
        color: #999;
        font-size: 12px;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .item-bot {
        height: 30px;
        border-bottom: 2px solid #fff;
    }
    .card li:hover .item-bot {
        border-color: #347ac1;
    }
    .item-bot span {
        float: right;
        margin-left: 15px;
        margin-top: 1px;
    }
    .item-bot span i {
        vertical-align: -2px;
        margin-right: 3px;
    }
    .item-bot span em {
        color: #333;
        font-size: 12px;
        font-style: normal;
    }
    .comment-count, .zan-count, .cai-count{
        color: #999;
    }
    .item-bot .nickname {
        float: left;
        margin-left: 0;
        max-width: 160px;
        height: 20px;
        line-height: 20px;
        margin-top: 0;
        color: #333;
        font-size: 12px;
    }
    .item-bot .nickname i {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        margin-right: 7px;
        display: block;
        float: left;
        font-size: 20px;
    }
    .not-found{
        font-size: 24px;
        color: #bac4ce;
        width: 240px;
        margin: 0 auto;
        padding-top: 20px;
    }
    /**/

</style>