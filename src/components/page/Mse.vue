<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>评测自媒体</el-breadcrumb-item>
                <el-breadcrumb-item to="/user/mse-list">评测自媒体</el-breadcrumb-item>
                <el-breadcrumb-item>评测自媒体文章</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
            <div class="abstract">
                <div class="mse-img">
                    <img :src="mse.titlePic" alt="">
                </div>
                <div class="recommend_tab">
                    <span class="mse-author">
                        <a href="">{{mse.authorName}}</a>
                        <span class="grey">
                            {{ timeFomatMse(mse.updateTime) }}
                        </span>
                    </span>
                </div>
                <article>
                    <h1 class="mse-title">{{mse.evaluationTitle}}</h1>
                    <div class="mse-content" v-html="mseContent(mse.evaluationText)"></div>
                    <!--<p class="">{{mse.mse_abstract}}</p>-->
                </article>
            </div>
        </el-row>
        <el-row>
            <div class="product-comment">
                <div class="comment">
                    <div class="my-comment">
                        <el-input type="textarea" :rows="3" placeholder="请输入您对该产品的评价" v-model.trim="textarea"
                                  resize=none>
                        </el-input>
                    </div>
                    <div class="comment-btn">
                        <el-button-group style="margin-bottom:10px">
                            <el-button icon="circle-check" size="small" @click="proLikeClick()"
                                       :disabled="thumbs==1?true:false" :type="thumbs==0?successType:cancelType">
                                赞{{mse.ups}}
                            </el-button>
                            <el-button size="small" @click="proUnlikeClick()" :disabled="thumbs==0?true:false"
                                       :type="thumbs==1?successType:cancelType">
                                踩{{mse.downs}}<i class="el-icon-circle-cross el-icon--right"></i></el-button>
                        </el-button-group>
                        <el-button type="primary" @click="refreshNewData()">发表评论</el-button>
                    </div>
                </div>

                <el-tabs v-model="activeName2" @tab-click="refreshComment" type="card" style="width:100%">
                    <el-tab-pane label="最热评论" name="first">
                        <div class="comment-content" v-for="(hot,index) in hot_data.hot_comments" v-show="display_hot">
                            <p class="user-name">{{hot.userName}}</p>
                            <div class="comment-reply">
                                <p class="user-comment">{{hot.comment}}</p>
                                <el-input style="{padding: 0 5px;}" v-show="hot_reply.replys[index].appear"
                                          type="textarea" placeholder="回复评论"
                                          v-model.trim="hot_reply.replys[index].textarea" resize=none>
                                </el-input>
                                <div class="reply-container" v-for="reply in hot.childComments">
                                    <div class="sub-reply-content">
                                        <p class="reply-name">{{reply.userName}}：</p>
                                        <div class="reply-content">
                                            <p class="sub-reply-content">{{reply.comment}}</p>
                                        </div>
                                    </div>
                                    <p class="reply-time">{{timeFomatComment(reply.postTime)}}</p>
                                </div>
                            </div>
                            <div class="comment-right">
                                <div class="comment-content-btn">
                                    <el-button type="primary" icon="circle-check" size="small"
                                               @click="commentLikeClick(hot)"
                                               :type="hot.view==0?successType:cancelType">赞{{hot.ups}}
                                    </el-button>
                                    <div class="reply-btn">
                                        <el-button type="text" @click="replyHotClick(hot,index)">回复</el-button>
                                    </div>
                                </div>
                                <p class="comment-time">{{timeFomatComment(hot.postTime)}}</p>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="最新评论" name="second">
                        <div class="comment-content" v-for="(new_,index) in new_data.new_comments" v-show="display_new">
                            <p class="user-name">{{new_.userName}}</p>
                            <div class="comment-reply">
                                <p class="user-comment">{{new_.comment}}</p>
                                <el-input style="{padding: 0 5px;}"
                                          v-show="new_reply.replys[index].appear"
                                          type="textarea" placeholder="回复评论"
                                          v-model.trim="new_reply.replys[index].textarea" resize=none>
                                </el-input>
                                <div class="reply-container" v-for="reply in new_.childComments">
                                    <div class="sub-reply-content">
                                        <p class="reply-name">{{reply.userName}}：</p>
                                        <div class="reply-content">
                                            <p class="sub-reply-content">{{reply.comment}}</p>
                                        </div>
                                    </div>
                                    <p class="reply-time">{{ timeFomatComment(reply.postTime)}}</p>
                                </div>
                            </div>
                            <div class="comment-right">
                                <div class="comment-content-btn">
                                    <el-button type="primary" icon="circle-check" size="small"
                                               @click="commentLikeClick(new_)"
                                               :type="new_.view==0?successType:cancelType">赞{{new_.ups}}
                                    </el-button>
                                    <div class="reply-btn">
                                        <el-button type="text" @click="replyNewClick(new_,index)">回复</el-button>
                                    </div>
                                </div>
                                <p class="comment-time">{{ timeFomatComment(new_.postTime) }}</p>
                            </div>
                        </div>
                        <div class="pagination card">
                            <el-pagination
                                    @current-change="handleCurrentChange"
                                    :current-page.sync="pageNum_nc"
                                    :page-size="pageSize"
                                    layout="prev, pager, next, jumper"
                                    :total="pageTotal_nc">
                            </el-pagination>
                        </div>
                    </el-tab-pane>

                </el-tabs>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                allowSubmit: true,
                hostURL: "/VR",
//                hostURL:"http://119.23.175.192:8080/VR",
                successType: "success",
                cancelType: "primary",
                mse: {
                    evaluationId: 1,
                    titlePic: '',
                    authorId: '',
                    authorName: '',
                    evaluationTitle: '',
                    postTime: null,
                    updateTime: '',
                    type: null,
                    evaluationText: {
                        id: 0,
                        evaluationBody: ''
                    },
                    ups: 0,
                    downs: 0,
                    comments: 0,
                    view: -1
                },

                pageNum_nc: 1,
                pageTotal_nc: null,
                pageNum_hc: 1,
                pageTotal_hc: null,
                pageSize: 10,

                activeName2: 'first',
                textarea: "",
                display_hot: false,
                display_new: false,
                userCurrent: '',

                thumbs: -1,
                hot_data: {
                    hot_comments: [{
                        id: "",
                        userId: '',
                        userName: '',
                        comment: "",
                        postTime: null,
                        view: 0,
                        ups: 0,
                        childComments: [{
                            userId: "",
                            userName: '',
                            comment: "",
                            postTime: null
                        }]
                    }]
                },
                new_data: {
                    new_comments: [{
                        id: "",
                        userId: '',
                        userName: '',
                        comment: "",
                        postTime: null,
                        view: -1,
                        ups: 0,
                        childComments: [{
                            userId: "",
                            userName: '',
                            comment: "",
                            postTime: null
                        }]
                    }]
                },
                hot_reply: {
                    replys: [{
                        appear: 0,
                        textarea: "",
                        postTime: null
                    }]
                },
                new_reply: {
                    replys: [{
                        appear: 0,
                        textarea: "",
                        postTime: null
                    }]
                },

                e_id: null
            }
        },
        methods: {
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
            timeFomat(date){
                let fmt = "yyyy-MM-dd hh:mm";
                var o = {
                    "M+": date.getMonth() + 1,                 //月份
                    "d+": date.getDate(),                    //日
                    "h+": date.getHours(),                   //小时
                    "m+": date.getMinutes(),                 //分
                    "s+": date.getSeconds(),                 //秒
                    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
                    "S": date.getMilliseconds()             //毫秒
                };
                if (/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            },
            timeFomatMse(str){
                let self = this;
                let date = new Date(str);
                return '发布于 ' + self.timeFomat(date);
            },
            timeFomatComment(str){
                let self = this;
                let curr = Date.parse(new Date());
                let date = new Date(str);
                let deta = curr - parseInt(str);
                if(parseInt(deta/60000) === 0){
                    return '刚刚';
                }else if(parseInt(deta/60000) < 11){
                    return parseInt(deta/60000) + '分钟前';
                }else
                    return self.timeFomat(date);
            },
            handleCurrentChange(){
                var self = this;
                console.log(self.e_id);
                self.getNewComments(self.e_id, self.pageNum_nc);
            },
            refreshComment() {
                var self = this;
                self.getHotComments(self.e_id, self.pageNum_hc);
                self.getNewComments(self.e_id, self.pageNum_nc);
            },
            //留言
            postTextArea(text){
                var self = this;
                self.$axios({
                    url: '/evaluations/' + self.mse.evaluationId + '/parentComment?content=' + self.textarea,
                    method: 'post',
                    baseURL: self.hostURL,
                }).then((response)=>{
//                    console.log(response.data);
                    self.$message('评论成功！');
                    self.userCurrent = response.data.object.userName;
//                    console.log(self.userCurrent);
                    self.new_data.new_comments.reverse();
//                    console.log(response.data.object.id)
                    self.new_data.new_comments.push({
                        id: response.data.object.id,
                        userId: response.data.object.userId,
                        userName: self.userCurrent,
                        comment: text,
                        postTime: response.data.object.postTime,
                        childComments: []
                    });
                    self.new_data.new_comments.reverse();
                    // console.log("self id:"+self.hot_data.hot_comments[0].id);
                    var len = self.new_data.new_comments.length;
                    self.new_reply.replys = [];
                    for (var i = 0; i < len; i++)
                        self.new_reply.replys.push({
                            appear: 0,
                            textarea: ""
                        });
                    self.textarea = "";
                    /*if(self.activeName2==="first"){
                        self.activeName2==="second";

                    }*/
                    self.refreshComment();
                }).catch((error)=> {
                    self.codeParsing(error.code);
                    console.log(error);
                });
            },
            refreshNewData(){
                var self = this;
                var text = self.textarea;
//                console.log(text);
                if (text != "") {
                    self.postTextArea(text);
                }
            },
            //回复-热评
            replyHotClick(item, index){
                var self = this;
                if (!self.hot_reply.replys[index].appear) {
                    self.hot_reply.replys[index].appear = 1;
                } else {
                    if (self.hot_reply.replys[index].textarea == '') self.hot_reply.replys[index].appear = 0;
                    else {
//                        let replyUser;
                        //发送数据给后台
                        self.$axios({
                            url: '/evaluations/comments/' + item.id + '/childComment?comment=' + self.hot_reply.replys[index].textarea,
                            method: 'post',
                            baseURL: self.hostURL,
                        }).then((response)=> {
                            console.log(response.data);
                            let reply = response.data.object;
                            self.userCurrent = reply.userName;
                            self.$message('回复成功！');
                            if (!self.hot_data.hot_comments[index].childComments) {
                                self.hot_data.hot_comments[index].childComments = [{
                                    userId: response.data.object.userId,
                                    userName: self.userCurrent,
                                    comment: reply.comment,
                                    postTime: response.data.object.postTime
                                }];
//                                console.log(1);
                            } else {
                                self.hot_data.hot_comments[index].childComments.push({
                                    userId: response.data.object.userId,
                                    userName: self.userCurrent,
                                    comment: reply.comment,
                                    postTime: response.data.object.postTime
                                });
                            }
                        }).catch((error)=> {
                            self.codeParsing(error.code);
//                            console.log(error);
                        });

                        /*self.hot_data.hot_comments[index].messageResponses.push({
                         userName: self.userCurrent,
                         comment: self.hot_reply.replys[index].textarea,
                         postTime: "刚刚"
                         });*/
                        self.hot_reply.replys[index].textarea = '';
                        self.hot_reply.replys[index].appear = 0;
                    }
                }
            },
            //回复-最新评价
            replyNewClick(item, index){
                var self = this;
                console.log(item)
                if (!self.new_reply.replys[index].appear) {
                    self.new_reply.replys[index].appear = 1;
                } else {
                    if (self.new_reply.replys[index].textarea == '') self.new_reply.replys[index].appear = 0;
                    else {
//                        let replyUser;
                        //发送数据给后台
                        self.$axios({
                            url: '/evaluations/comments/' + item.id + '/childComment?comment=' + self.new_reply.replys[index].textarea,
                            method: 'post',
                            baseURL: self.hostURL,
                        }).then((response)=> {
                            console.log(response.data);
                            let reply = response.data.object;
                            self.userCurrent = reply.userName;
                            self.$message('回复成功！');
                            let i = self.new_data.new_comments.indexOf(item)
                            console.log(i)
                            /*self.new_data.new_comments[i].childComments=[{
                             userId: "",
                             userName:'',
                             comment: "",
                             postTime: null
                             }]*/
                            if (!item.childComments) {
                                console.log(item);
                                item.childComments = [{
                                    userId: response.data.object.userId,
                                    userName: self.userCurrent,
                                    comment: reply.comment,
                                    postTime: response.data.object.postTime
                                }];
//                                console.log(11111);
//                                console.log(item);
                            } else {
                                self.new_data.new_comments[index].childComments.push({
                                    userId: response.data.object.userId,
                                    userName: self.userCurrent,
                                    comment: reply.comment,
                                    postTime: response.data.object.postTime
                                });
                            }

//                            console.log(self.new_data.new_comments[i].childComments)
                        }).catch((error)=> {
                            self.codeParsing(error.code);
//                            console.log(error);
                        });

                        self.new_reply.replys[index].textarea = '';
                        self.new_reply.replys[index].appear = 0;
                    }
                }
            },
            /*获得评论*/
            //1.获得热评
            getHotComments(id){
                var self = this;
                self.hot_data = {
                    hot_comments: [{
                        id: "",
                        userId: '',
                        authorName: '',
                        comment: "",
                        postTime: null,
                        view: 0,
                        ups: 0,
                        childComments: [{
                            userId: "",
                            authorName: '',
                            comment: "",
                            postTime: null
                        }]
                    }]
                };
                self.hot_reply = {
                    replys: [
                        {
                            appear: 0,
                            textarea: ""
                        }]
                };
                self.$axios({
                    url: '/evaluations/' + id + '/comments?orderType=2',
                    method: 'get',
                    baseURL: self.hostURL,
                }).then((response)=> {
                    let res = response.data.object;
                    self.display_hot = true;
                    self.hot_data.hot_comments = res.result;
//                    self.hot_data.hot_comments.reverse();
                    console.log(res)
                    var len = self.hot_data.hot_comments.length;
                    self.hot_reply.replys = [];
                    for (var i = 0; i < len; i++)
                        self.hot_reply.replys.push({
                            appear: 0,
                            textarea: ""
                        });
                }).catch((error)=> {
                    self.codeParsing(error.response.status);
                    console.log(error);
                });
            },
            //2.获得最新评论
            getNewComments(id, pageNum){
                var self = this;
                self.new_data = {
                    new_comments: [{
                        id: "",
                        userId: '',
                        authorName: '',
                        comment: "",
                        postTime: null,
                        childComments: [{
                            userId: "",
                            authorName: '',
                            comment: "",
                            postTime: null
                        }]
                    }]
                };
                self.new_reply = {
                    replys: [
                        {
                            appear: 0,
                            textarea: ""
                        }]
                };
                self.$axios({
                    url: '/evaluations/' + id + '/comments?page=' + pageNum,
                    method: 'get',
                    baseURL: self.hostURL,
                }).then((response)=> {
                    let res = response.data.object.result;
                    console.log(response.data.object.result);
                    if (!self.pageTotal_nc)
                        self.pageTotal_nc = response.data.object.totalCount
                    self.display_new = true;
                    self.new_data.new_comments = res;
//                    self.new_data.new_comments.reverse();
//                    console.log("self id:" + self.new_data.new_comments[0].id);
                    var len = self.new_data.new_comments.length;
                    self.new_reply.replys = [];
                    for (var i = 0; i < len; i++)
                        self.new_reply.replys.push({
                            appear: 0,
                            textarea: ""
                        });
                }).catch((error)=> {
                    self.codeParsing(error.response.status);
                    console.log(error);
                });
            },

            //评论点赞（用于后台存储被点赞的评论）
            postCommLike(item, val){
                var self = this;
                self.$axios({
                    url: '/evaluations/comments/' + item.id + '/view?type=' + val,
                    method: 'post',
                    baseURL: self.hostURL,
                }).then((response)=> {
                    console.log(response)
                }).catch((error)=> {
                    self.codeParsing(error.response.status);
                    console.log(error);
                });
            },
            commentLikeClick(item){
                var self = this;
                item.view = (item.view == 0) ? -1 : 0;
                var value = (item.view == 0) ? 1 : -1;
                item.ups += value;
                if (value == 1)
                    self.postCommLike(item, 0);
                else {
                    self.$axios({
                        url: '/evaluations/comments/' + item.id + '/view',
                        method: 'delete',
                        baseURL: self.hostURL,
                    }).then((response)=> {
                        console.log(response.data);
                    }).catch((error)=> {
                        self.codeParsing(error.response.status);
                        console.log(error);
                    });
                }

            },


            //看法
            postView(val){
                var self = this;
                self.$axios({
                    url: '/evaluations/' + self.mse.evaluationId + '/view?type=' + val,
                    method: 'post',
                    baseURL: self.hostURL,
                }).then((response)=> {
                    console.log(response.data);
                }).catch((error)=> {
                    self.codeParsing(error.response.status);
                    console.log(error);
                });
            },
            deleteView(){
                var self = this;
                self.$axios({
                    url: '/evaluations/' + self.mse.evaluationId + '/view',
                    method: 'delete',
                    baseURL: self.hostURL,
                }).then((response)=> {
                    console.log(response.data);
                }).catch((error)=> {
                    self.codeParsing(error.response.status);
                    console.log(error);
                });
            },
            //点赞
            proLikeClick(){
                var self = this;
                self.thumbs = (self.thumbs === 0) ? -1 : 0;
                if (self.thumbs === 0) {
                    self.postView(0);
                }
                else {
                    self.deleteView();
                }
                var value = (self.thumbs === 0) ? 1 : -1;
                self.mse.ups += value;
            },
            //点踩
            proUnlikeClick(){
                var self = this;
                self.thumbs = (self.thumbs === 1) ? -1 : 1;
                if (self.thumbs === 1) {
                    self.postView(1);
                }
                else {
                    self.deleteView();
                }
                var value = (self.thumbs === 1) ? 1 : -1;
                self.mse.downs += value;
            },
            // 设置文章样式
            mseContent(str){
                var res = String(str).replace(/<p/g, "<p style=\"margin-bottom\:20px\"");
                res = res.replace(/<h2/g, "<h2 style=\"margin-bottom\:20px\"");
                res = res.replace(/<h3/g, "<h3 style=\"margin-bottom\:20px\"");
                res = res.replace(/<img/g, "<img style=\"display\:block\;margin\: auto\"");
                return res;
            },
            //get文章
            getMseData(id){
                var self = this;
                self.mse = {};
                self.$axios({
                    url: '/evaluations/' + id,
                    method: 'GET',
                    baseURL: self.hostURL
                }).then((response)=> {
                    self.mse = response.data.object.evaluation;
//                    console.log(response.data);
                    self.thumbs = self.mse.view;
                    console.log(self.mse.view);
                }).catch((error)=> {
                    self.codeParsing(error.response.status);
                    console.log(error.response.status);
                });
            },
        },
        computed: {},
        mounted(){
            var self = this;
            var user_name=localStorage.getItem("ms_username");
            if(user_name==""){
                this.$router.replace('/login');
            }
            var arr = location.href.split('?');
            var mse_id = arr[1];
            self.e_id = mse_id;
            console.log(mse_id);
            self.getMseData(mse_id);
//        self.getProThumbs();
            self.getHotComments(mse_id, self.pageNum_hc);
            self.getNewComments(mse_id, self.pageNum_nc);
        }
    }
</script>

<style scoped>
    a {
        color: #5188a6;
        text-decoration: none;
        cursor: pointer;
    }

    .mse-img {
        /*background: #333;*/
        width: 710px;
        margin: 0 auto;
        /*padding-bottom: 10px;*/
    }

    .mse-img img {
        max-width: 710px;
        max-height: 300px;
        display: block;
        margin: 0 auto;
    }

    .recommend_tab {
        line-height: 1em;
        overflow: hidden;
        width: 710px;
        margin: 0 auto;
        padding-bottom: 20px;
    }

    .recommend_tab > span.mse-author {
        float: left;
        line-height: 28px;
        width: 600px;
        overflow: hidden;
        margin: 0 auto;
    }

    .mse-author {
        font-size: 12px;
        float: left;
        line-height: 24px;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .mse-author a {
        line-height: 24px;
        margin-right: 10px;
    }

    .grey {
        color: #999;
    }

    article > h1 {
        font-size: 28px;
        margin-bottom: 20px;
        word-break: break-all;
        text-align: center;
    }

    .mse-content {
        color: #333;
        line-height: 24px;
        word-break: break-all;
        max-width: 780px;
        margin: 0 auto;
    }

    /**/
    .product-comment {
        padding-top: 20px;
        width: 100%;
        text-align: center;
        max-width: 810px;
        margin: 0 auto;
    }

    .comment {
        margin: 20px;
        width: 100%;
    }

    .my-comment {
        float: left;
        width: 80%;
    }

    .comment-btn {
        margin-left: 10px;
    }

    .comment-content {
        display: flex;
        width: 100%;
        padding: 15px 5px 5px 5px;
        border-bottom: 1px solid #DDDDDD;
    }

    .user-name {
        font-size: 15px;
        color: #666666;
        width: 15%;
        text-align: left;
    }

    .comment-reply {
        /*flex:1;*/
        width: 70%;
    }

    .user-comment {
        font-size: 17px;
        text-align: left;
        /*font-weight: lighter; */
        width: 100%;
        padding-bottom: 15px;
    }

    .reply-container {
        /*background:#DDDDDD;*/
        width: 80%;
        margin: 10px 0 0 50px;
        /*padding: 10px 5px 15px 20px;*/
        border-bottom: 1px solid #DDDDDD;
    }

    .sub-reply-content {
        width: 100%;
        display: flex;
    }

    .reply-name {
        color: #20A0FF;
        font-size: 13px;
        text-align: right;
        flex: 1;
    }

    .reply-content {
        float: right;
        width: 80%;
        /*margin-left: -20%;*/
        /*overflow: hidden;*/
    }

    .sub-reply-content {
        font-size: 13px;
        text-align: left;
        width: 100%;
    }

    .reply-time {
        color: #666666;
        width: 100%;
        text-align: right;
        font-size: 10px;
        padding: 5px 0;
    }

    .comment-time {
        /*position: relative;*/
        color: #666666;
        font-size: 10px;
        width: 100%;
        text-align: left;
        margin-top: 10px;
        /*bottom: 0;*/
    }

    .comment-right {
        /*text-align: left;*/
        /*width: 15%;*/
        flex: 1;
        padding: 10px;
    }

    .comment-content-btn {
        width: 100%;
    }

    .reply-btn {
        width: 100%;
    }
</style>