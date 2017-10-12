<template>
  <div>
    <!--头部-->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/user/BBS"><i class="el-icon-date"></i> VR论坛</el-breadcrumb-item>
        <el-breadcrumb-item>查看内容</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="tieZi-box">
      <h2 class="title"><el-tag class = "theme">{{tieZiData.theme}}</el-tag>{{tieZiData.title}}</h2>
      <div class="borderline"></div>
      <div  class="artinfo"><pre><span class="author">{{tieZiData.posterName}}</span>    发表于{{tieZiData.date}}</pre></div>
        <div class="article" v-html="content(tieZiData.contents)"></div>

      <div class="tieZi-comment">
        <div class="comment">
          <div class="my-comment">
            <el-input type="textarea" :rows="3" placeholder="请输入您对该贴的评价" v-model.trim="textarea" resize=none>
            </el-input>
          </div>
          <div class="comment-btn">
            <el-button-group style="margin-bottom:10px" >
              <el-button icon="circle-check" size="small" @click="proLikeClick()" :disabled="pro_thumbs.state==-1?true:false" :type="pro_thumbs.state==1?successType:cancelType">
                赞{{tieZiData.upvote}}</el-button>
              <el-button size="small" @click="proUnlikeClick()" :disabled="pro_thumbs.state==1?true:false" :type="pro_thumbs.state==-1?successType:cancelType">
                踩{{tieZiData.downvote}}<i class="el-icon-circle-cross el-icon--right"></i></el-button>
            </el-button-group>
            <el-button type="primary" @click="refreshNewData()">发表评论</el-button>
          </div>
        </div>

        <el-tabs v-model="activeName2" type="card" style="width:100%">
          <el-tab-pane label="最热评论" name="first">
            <div class="comment-content" v-for="(hot,index) in hot_data.hot_comments" v-show="display_hot">
              <p class="user-name">{{hot.user.nickname}}</p>
              <div class="comment-reply">
                <p class="user-comment">{{hot.message}}</p>
                <el-input style="{padding: 0 5px;}" v-show="hot_reply.replys[index].appear" type="textarea" placeholder="回复评论" v-model.trim="hot_reply.replys[index].textarea" resize=none>
                </el-input>
                <div class="reply-container" v-for="reply in hot.messageResponses">
                  <div class="sub-reply-content">
                    <p class="reply-name">{{reply.user.nickname}}：</p>
                    <div class="reply-content">
                      <p class="sub-reply-content">{{reply.messageResponse}}</p>
                    </div>
                  </div>
                  <p class="reply-time">{{reply.releasetime}}</p>
                </div>
              </div>
              <div class="comment-right">
                <div class="comment-content-btn">
                  <el-button type="primary" icon="circle-check" size="small" @click="commentLikeClick(hot)"
                             :type="hot.state==1?successType:cancelType">赞{{hot.upvote}}</el-button>
                  <div class="reply-btn">
                    <el-button type="text" @click="replyHotClick(hot,index)">回复</el-button>
                  </div>
                </div>
                <p class="comment-time">{{hot.releasetime}}</p>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="最新评论" name="second">
            <div class="comment-content" v-for="(new_,index) in new_data.new_comments" v-show="display_new">
              <p class="user-name">{{new_.user.nickname}}</p>
              <div class="comment-reply">
                <p class="user-comment">{{new_.message}}</p>
                <el-input style="{padding: 0 5px;}" v-show="new_reply.replys[index].appear" type="textarea" placeholder="回复评论" v-model.trim="new_reply.replys[index].textarea" resize=none>
                </el-input>
                <div class="reply-container" v-for="reply in new_.messageResponses">
                  <div class="sub-reply-content">
                    <p class="reply-name">{{reply.user.nickname}}：</p>
                    <div class="reply-content">
                      <p class="sub-reply-content">{{reply.messageResponse}}</p>
                    </div>
                  </div>
                  <p class="reply-time">{{reply.releasetime}}</p>
                </div>
              </div>
              <div class="comment-right">
                <div class="comment-content-btn">
                  <el-button type="primary" icon="circle-check" size="small" @click="commentLikeClick(new_)"
                             :type="new_.state==1?successType:cancelType">赞{{new_.upvote}}</el-button>
                  <div class="reply-btn">
                    <el-button type="text" @click="replyNewClick(new_,index)">回复</el-button>
                  </div>
                </div>
                <p class="comment-time">{{new_.releasetime}}</p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
    import ElRow from "../../../node_modules/element-ui/packages/row/src/row";

    export default {
        components: {
            ElRow,
            ElButton},
        data: function(){
            return {
                activeName2: 'first',
                allowSubmit:true,
                hostURL:"/VR",
                successType:"success",
                cancelType:"primary",

                tieZiData:{
                    id: '1',
                    theme: '讨论',
                    good: false,
                    title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                    contents: '<p>开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf</p>',
                    date: '2017/8/10',
                    posterId: 'kijj',
                    posterName: '我',
                    totalComments: '1',
                    upvote: 0,
                    downvote:0
                },
                options: [
                    {label:'讨论', name:'discussion'},
                    {label:'分享', name:'share'},
                    {label:'求助', name:'help'},
                    {label:'教程', name:'tutorial'},
                    {label:'评测', name:'evaluation'},
                    {label:'手机VR', name:'phonevr'},
                    {label:'电脑VR', name:'computervr'}
                ],
                // uid:'1',
                textarea:"",
                display_hot:false,
                display_new:false,


                pro_thumbs:{
                    type:"PC头显",
                    upvote:50,
                    downvote:10,
                    state:0
                },
                hot_data:{
                    hot_comments:[{
                        id:1,
                        user:{
                            id:1,
                            nickname:null
                        },
                        message:"1",
                        upvote:2,
                        belong:"8",
                        releasetime:null,
                        messageResponses:[{
                            user:{
                                id:10,
                                nickname:null,
                            },
                            messageResponse:"555",
                            releasetime:null
                        }],
                        state:0,
                    }],
                },
                new_data:{
                    new_comments:[{
                        id:2,
                        user:{
                            id:2,
                            nickname:null
                        },
                        message:"2",
                        upvote:3,
                        belong:"4",
                        releasetime:null,
                        messageResponses:[{
                            user:{
                                id:11,
                                nickname:null,
                            },
                            messageResponse:"5555",
                            releasetime:null
                        }],
                        state:0,
                    }],
                },
                hot_reply:{
                    replys:[{
                        appear:0,
                        textarea:""
                    }]
                },
                new_reply:{
                    replys:[{
                        appear:0,
                        textarea:""
                    }]
                }
            }
        },
        // computed:{
        //     reversedArr:function(){
        //         var arr={};
        //         arr=this.new_data.new_comments;
        //         return arr.reverse();
        //     },
        // },
        methods:{
            content(str){
                var res = String(str).replace(/<p/g, "<p style=\"margin-bottom\:20px\"");
                res = res.replace(/<h2/g, "<h2 style=\"margin-bottom\:20px\"");
                res = res.replace(/<h3/g, "<h3 style=\"margin-bottom\:20px\"");
                res = res.replace(/<img/g, "<img style=\"display\:block\;margin\: auto\"");
                return res;
            },
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
            //留言
            postTextArea(){
                var self=this;
                self.$axios({
                    url:'/MessageLeaving/'+localStorage.getItem('ms_userid'), //{uid}
                    method:'post',
                    baseURL: self.hostURL,
                    data:{
                        content:self.textarea, //时间在后台取得
                        belong:'T' + localStorage.getItem("tieZiID")
                    }
                }).catch((error)=>{
                    console.log(error);
                });
            },
            //评论数增加
            postResponse(){
                var self=this;
                self.$axios({
                    url:'/post_comment/'+localStorage.getItem("tieZiID"), //{uid}
                    method:'post',
                    baseURL: self.hostURL,
                }).catch((error)=>{
                    console.log(error);
                });
            },
            //处理评论
            refreshNewData(){
                var self=this;
                var text=self.textarea;
                //.log(text);
                if(text!=""){
                    self.$message('评论成功！');
                    self.postTextArea();
                    self.postResponse();
                    //新
                    self.new_data.new_comments.reverse();
                    self.new_data.new_comments.push({
                        id:"",
                        user:{
                            id:"",
                            nickname:localStorage.getItem("ms_username")
                        },
                        message:text,
                        upvote:"0",
                        belong:"0",
                        releasetime:"刚刚",
                        /*
                        messageResponses:[{
                            user:{
                                id:"",
                                nickname:null,
                            },
                            messageResponse:"",
                            releasetime:null
                        }],
                        */
                        state:0,
                    });
                    self.new_data.new_comments.reverse();
                    // console.log("self id:"+self.hot_data.hot_comments[0].id);
                    var len=self.new_data.new_comments.length;
                    self.new_reply.replys=[];
                    for(var i=0;i<len;i++)
                        self.new_reply.replys.push({
                            appear:0,
                            textarea:""
                        });
                    self.textarea="";

                    //火
                    self.hot_data.hot_comments.push({
                        id:"",
                        user:{
                            id:"",
                            nickname:localStorage.getItem("ms_username")
                        },
                        message:text,
                        upvote:"0",
                        belong:"0",
                        releasetime:"刚刚",
                        /*
                        messageResponses:[{
                            user:{
                                id:"",
                                nickname:null,
                            },
                            messageResponse:"",
                            releasetime:null
                        }],
                        */
                        state:0,
                    });
                    // console.log("self id:"+self.hot_data.hot_comments[0].id);
                    var len=self.hot_data.hot_comments.length;
                    self.hot_reply.replys=[];
                    for(var i=0;i<len;i++)
                        self.hot_reply.replys.push({
                            appear:0,
                            textarea:""
                        });
                    self.textarea="";
                }
            },
            //回复-热评
            replyHotClick(item,index){
                var self=this;
                if(!self.hot_reply.replys[index].appear){
                    self.hot_reply.replys[index].appear=1;
                }else{
                    if(self.hot_reply.replys[index].textarea=='') self.hot_reply.replys[index].appear=0;
                    else{
                        //发送数据给后台
                        self.$axios({
                            url:'/MessageResponse/'+localStorage.getItem('ms_userid'), //{uid}
                            method:'post',
                            baseURL: self.hostURL,
                            data:{
                                content:self.hot_reply.replys[index].textarea,
                                leavingid:item.id
                            }
                        }).catch((error)=>{
                            console.log(error);
                        });
                        self.$message('回复成功！');
                        self.hot_data.hot_comments[index].messageResponses.push({
                            user:{
                                id:"",
                                nickname:localStorage.getItem('ms_username'),
                            },
                            messageResponse:self.hot_reply.replys[index].textarea,
                            releasetime:"刚刚"
                        });
                        self.hot_reply.replys[index].textarea='';
                        self.hot_reply.replys[index].appear=0;
                    }
                }
            },
            //回复-最新评价
            replyNewClick(item,index){
                var self=this;
                if(!self.new_reply.replys[index].appear){
                    self.new_reply.replys[index].appear=1;
                }else{
                    if(self.new_reply.replys[index].textarea=='') self.new_reply.replys[index].appear=0;
                    else{
                        //发送数据给后台
                        self.$axios({
                            url:'/MessageResponse/'+localStorage.getItem('ms_userid'), //{uid}
                            method:'post',
                            baseURL: self.hostURL,
                            data:{
                                content:self.new_reply.replys[index].textarea,
                                leavingid:item.id
                            }
                        }).catch((error)=>{
                            console.log(error);
                        });
                        self.$message('回复成功！');
                        self.new_data.new_comments[index].messageResponses.push({
                            user:{
                                id:"",
                                nickname:localStorage.getItem('ms_username'),
                            },
                            messageResponse:self.new_reply.replys[index].textarea,
                            releasetime:"刚刚"
                        });
                        self.new_reply.replys[index].textarea='';
                        self.new_reply.replys[index].appear=0;
                    }
                }
            },
          /*获得评论*/
            //1.获得热评
            getHotComments(){
                var self=this;
                self.hot_data={
                    hot_comments:[{
                        id:"",
                        user:{
                            id:"",
                            nickname:null
                        },
                        message:"",
                        upvote:"",
                        belong:"",
                        releasetime:null,
                        messageResponses:[{
                            user:{
                                id:"",
                                nickname:null,
                            },
                            messageResponse:"",
                            releasetime:null
                        }],
                        state:0,
                    }]
                };
                self.hot_reply={
                    replys:[
                        {
                            appear:0,
                            textarea:""
                        }]
                };
                self.$axios({
                    url:'/MessageLeaving/show/'+localStorage.getItem('ms_userid')+'?belong=T'+localStorage.getItem("tieZiID") +'&condition=hot',
                    method:'get',
                    baseURL: self.hostURL,
                    // data:{
                    // condition:"hot",
                    // belong:localStorage.getItem("salesModel")
                    // }
                }).then((response)=>{
                    //console.log("resp hot id:"+response.data[0].id);
                    //console.log("self hot id:"+self.hot_data.hot_comments[0].id);
                    self.display_hot=true;
                    self.hot_data.hot_comments= response.data;
                    self.hot_data.hot_comments.reverse();
                    //console.log("self hot id:"+self.hot_data.hot_comments[0].id);
                    var len=self.hot_data.hot_comments.length;
                    self.hot_reply.replys=[];
                    for(var i=0;i<len;i++)
                        self.hot_reply.replys.push({
                            appear:0,
                            textarea:""
                        });
                }).catch((error)=>{
                    console.log(error);
                });
            },
            //2.获得最新评论
            getNewComments(){
                var self=this;
                self.new_data={
                    new_comments:[{
                        id:"",
                        user:{
                            id:"",
                            nickname:null
                        },
                        message:"",
                        upvote:"",
                        belong:"",
                        releasetime:null,
                        messageResponses:[{
                            user:{
                                id:"",
                                nickname:null,
                            },
                            messageResponse:"",
                            releasetime:null
                        }],
                        state:0,
                    }]
                };
                self.new_reply={
                    replys:[
                        {
                            appear:0,
                            textarea:""
                        }]
                };
                self.$axios({
                    url:'/MessageLeaving/show/'+localStorage.getItem('ms_userid')+'?belong=T'+ localStorage.getItem("tieZiID") +'&condition=time',
                    method:'get',
                    baseURL: self.hostURL,
                    // data:{
                    // condition:"time",
                    // belong:localStorage.getItem("salesModel")
                    // }
                }).then((response)=>{
                    //.log("resp new id:"+response.data[0].id);
                    //console.log("self new id:"+self.new_data.new_comments[0].id);
                    self.display_new=true;
                    self.new_data.new_comments= response.data;
                    self.new_data.new_comments.reverse();
                    //console.log("self new id:"+self.new_data.new_comments[0].id);
                    var len=self.new_data.new_comments.length;
                    self.new_reply.replys=[];
                    for(var i=0;i<len;i++)
                        self.new_reply.replys.push({
                            appear:0,
                            textarea:""
                        });
                }).catch((error)=>{
                    console.log(error);
                });
            },

            //评论点赞（用于后台存储被点赞的评论）
            postCommLike(item,val){
                var self=this;
                self.$axios({
                    url:'/MessageLeaving/upvote/'+localStorage.getItem('ms_userid'),
                    method:'post',
                    baseURL: self.hostURL,
                    data:{
                        id:item.id,
                        value:val,
                    }
                }).catch((error)=>{
                    console.log(error);
                });
            },
            commentLikeClick(item){
                var self=this;
                item.state=(item.state==1)?0:1;
                var value=(item.state==1)?1:-1;
                item.upvote+=value;
                self.postCommLike(item,value);
            },

            //获取产品点赞数
            getProThumbs(){
                var self=this;
                self.pro_thumbs={
                    type:"PC头显",
                    upvote:10,
                    downvote:20,
                    state:0
                };
                //.log("proname: "+
                //    localStorage.getItem("tieZiID"));
                self.$axios({
                    url:'/Thumbs/'+localStorage.getItem('ms_userid'),
                    method:'post',
                    baseURL: self.hostURL,
                    data:{
                        belong:localStorage.getItem("tieZiID")
                    }
                }).then((response)=>{
                    // self.pro_thumbs={};
                    //console.log("response.data:upvote "+response.data.upvote);
                    //console.log("self data:upvote "+self.pro_thumbs.upvote);
                    self.pro_thumbs= response.data;
                    //console.log("self data:upvote "+self.pro_thumbs.upvote);
                }).catch((error)=>{
                    console.log(error);
                });
            },
            //点赞
            postProLike(val){
                var self=this;
                self.$axios({
                    url:'/posts/upvote/'+localStorage.getItem('tieZiID'),
                    method:'post',
                    baseURL: self.hostURL,
                    data:{
                        value:val
                    }
                }).then((response)=>{
                    localStorage.setItem("tieZiTotalUpVote",this.tieZiData.upvote);
                }).catch((error)=>{
                    console.log(error);
                });
            },
            proLikeClick(){
                var self=this;
                self.pro_thumbs.state=(self.pro_thumbs.state==1)?0:1;
                var value=(self.pro_thumbs.state==1)?1:-1
                //self.pro_thumbs.upvote+=value;
                self.tieZiData.upvote+=value;
                self.postProLike(value);
            },
            //点踩
            postProUnlike(val){
                var self=this;
                self.$axios({
                    url:'/posts/downvote/'+localStorage.getItem('tieZiID'),
                    method:'post',
                    baseURL: self.hostURL,
                    data:{
                        value:val
                    }
                }).then((response)=>{
                    localStorage.setItem("tieZiTotalDownVote",this.tieZiData.downvote);
                }).catch((error)=>{
                    console.log(error);
                });
            },
            proUnlikeClick(){
                var self=this;
                self.pro_thumbs.state=self.pro_thumbs.state==-1?0:-1;
                var value=self.pro_thumbs.state==-1?1:-1;
                //self.pro_thumbs.downvote+=value;
                self.tieZiData.downvote+=value;
                //console.log(self.pro_thumbs.state+" "+self.pro_thumbs.downvote);
                self.postProUnlike(value);
            },
            getTieZiData(){
                this.tieZiData.id = localStorage.getItem("tieZiID")
                this.tieZiData.theme = localStorage.getItem("tieZiTheme");
                this.tieZiData.good = localStorage.getItem("tieZiGood");
                this.tieZiData.title = localStorage.getItem("tieZiTitle");
                this.tieZiData.contents = localStorage.getItem("tieZiContents");
                this.tieZiData.date = localStorage.getItem("tieZiDate");
                this.tieZiData.posterId = localStorage.getItem("tieZiPosterId");
                this.tieZiData.posterName = localStorage.getItem("tieZiPosterName");
                this.tieZiData.totalComments = localStorage.getItem("tieZiTotalComments");
                this.tieZiData.upvote = parseInt(localStorage.getItem("tieZiTotalUpVote"));
                this.tieZiData.downvote = parseInt(localStorage.getItem("tieZiTotalDownVote"));
                //.log("tieZi");
                //console.log(this.tieZiData);
            }
          /*
           //获取帖子数据
           getTieZiData(str){
           var self = this;
           self.tieZiData=[];
           self.$axios({
           url:'/posts/'+str,
           method:'get',
           baseURL:self.hostURL
           }).then((response)=>{
           self.tieZiData = {};
           self.tieZiData = response.data;
           self.chTheme = "";
           console.log(self.tieZiData);
           for (let i=0; i<self.options.length;i++){
           if(self.options[i].name==self.tieZiData.theme){
           self.chTheme = self.options[i].label;
           }
           }
           console.log("theme:");
           console.log(self.chTheme);
           }).catch((error)=>{
           console.log(error);
           self.$message({
           type:'info',
           message:'connect fail'
           });
           });
           }
           */

          /*
           //获得产品简介
           getProIntro(){
           var self=this;
           self.pro_intro={};
           self.$axios({
           url:'/Profile',
           method:'get',
           baseURL: self.hostURL,
           data:{
           product:localStorage.getItem("salesModel")
           }
           }).then((response)=>{
           self.pro_intro= response.data;
           // self.intro.pic_location=localStorage.getItem("proPic");
           // self.intro.pro_name=localStorage.getItem("salesModel");
           }).catch((error)=>{
           console.log(error);
           });
           },
           */

            //获取进入页面时需要加载的所有数据
            // getData(){
            //     var self=this;
            //     self.getIntro();
            //     self.getProThumbs();
            //     self.getHotComments();
            //     self.getNewComments();
            // },
        },

        created(){
            this.getTieZiData();
        },

        mounted(){
            var self= this;
            var user_name=localStorage.getItem("ms_username");
            if(user_name==""){
                this.$router.replace('/login');
            }
            //console.log("初始化");
            self.getProThumbs();
            self.getHotComments();
            self.getNewComments();
        }
    }

</script>

<style scoped>
  .crumbs{
    text-decoration: none;
  }
  .theme{
    height: 28px;
    color: #FFFFFF;
    background-color: #ff6d6d;
    font-size: 18px;
    font-weight: 600;
    margin-right: 8px;
    line-height: 28px;
  }
  .title{
    font-size: 22px;
    color: #38444D;
    line-height: 50px;
    font-weight: 600;
    display: block;
  }
  .borderline{
    border-bottom: 1px dotted #BFBFBF;
  }
  .artinfo{
    margin-top: 5px;
    color: #999;
    display: block;
    font-size: 13px;
  }
  .author{
    color: dodgerblue;
  }
  .article p{
    padding: 20px 0 50px 0;
    font-size: 18px;
    color: #333;
    line-height: 180%;
  }
  .article {
    line-height: 26px;
    padding-bottom: 25px;
  }
  .tieZi-box{
    padding: 28px;
    width: 800px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
  }
  .intro-header img{
    width: 200px;
    height: 200px;
    margin: 0 -12% 0 0;
  }
  .intro-header h3{
    margin-top: 5px;
    font-size: 20px;
    font-weight: bold;
  }
  .intro-body p{
    /*margin-top: 10px;*/
    /*margin-left: 30%;*/
    width: 100%;
    font-size: 15px;
    font-weight: lighter;
  }
  .intro-body .btn{
    float:right;
  }
  .tieZi-comment{
    margin-top: 20px;
    width: 100%;
    text-align: center;
  }
  .comment{
    margin: 20px;
    width:100%;
  }
  .my-comment{
    float: left;
    width: 80%;
  }
  .comment-btn{
    margin-left: 10px;
  }
  .comment-content{
    display: flex;
    width: 100%;
    padding: 15px 5px 5px 5px;
    border-bottom: 1px solid #DDDDDD;
  }
  .user-name{
    font-size: 15px;
    color: #666666;
    width: 15%;
    text-align: left;
  }
  .comment-reply{
    /*flex:1;*/
    width: 70%;
  }
  .user-comment{
    font-size: 17px;
    text-align:left;
    /*font-weight: lighter; */
    width: 100%;
    padding-bottom: 15px;
  }
  .reply-container{
    /*background:#DDDDDD;*/
    width:80%;
    margin: 10px 0 0 50px;
    /*padding: 10px 5px 15px 20px;*/
    border-bottom: 1px solid #DDDDDD;
  }
  .sub-reply-content{
    width: 100%;
    display: flex;
  }
  .reply-name{
    color:#20A0FF;
    font-size: 13px;
    text-align: right;
    flex: 1;
  }
  .reply-content{
    float: right;
    width: 80%;
    /*margin-left: -20%;*/
    /*overflow: hidden;*/
  }
  .sub-reply-content{
    font-size: 13px;
    text-align: left;
    width: 100%;
  }
  .reply-time{
    color:#666666;
    width: 100%;
    text-align: right;
    font-size:10px;
    padding: 5px 0;
  }
  .comment-time{
    /*position: relative;*/
    color:#666666;
    font-size:10px;
    width: 100%;
    text-align: left;
    margin-top: 10px;
    /*bottom: 0;*/
  }
  .comment-right{
    /*text-align: left;*/
    /*width: 15%;*/
    flex: 1;
    padding: 10px;
  }
  .comment-content-btn{
    width: 100%;
  }
  .reply-btn{
    width: 100%;
  }
</style>