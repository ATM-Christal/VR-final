<template>
  <div>
    <!--头部-->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/user/msg-center"><i class="el-icon-date"></i> 消息中心</el-breadcrumb-item>
        <el-breadcrumb-item>查看消息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="tieZi-box">
      <h2 class="title">管理员{{msgData.msgtype==1?'删除':'修改'}}了您发表的{{msgData.type=='tieZi'?'一条帖子':'一篇评测'}}</h2>
      <div class="borderline"></div>
      <div class="msg-content">&nbsp&nbsp&nbsp&nbsp管理员于&nbsp{{msgData.date}}&nbsp{{msgData.msgtype==1?'删除':'修改'}}了您的{{msgData.type=='tieZi'?'一条帖子':'一篇评测'}}：
          <a @click="msgClick(msgData.type,msgData.id)" href="javascript:void(0);" class="link" title="">{{msgData.title}}</a></div>
      <!--<div  class="artinfo"><pre><span class="author">发表于{{msgData.date}}</pre></div>
        <div class="article" v-html="content(msgData.title)"></div>-->
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

                msgData:{
                  // id: '1',
                  // type: 'tieZi',
                  // theme:'newmsg',
                  // title: '管理员修改了您发表的一条帖子',
                  // date: '2017/8/10',
                },
                type:'帖子',
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
           
            getTieZiData(){
                this.msgData.id=localStorage.getItem("msgID");
                this.msgData.type=localStorage.getItem("msgType");
                this.msgData.msgtype=localStorage.getItem("msgOpType");
                this.msgData.title=localStorage.getItem("msgTitle");
                this.msgData.date=localStorage.getItem("msgDate");

                //.log("tieZi");
                //console.log(this.tieZiData);
            },
            msgClick(type,id){
                if(msgData.type=='tieZi'){
                  this.$router.push('/user/tieZi?'+id);
                }else if(msgData.type=='mse'){
                  this.$router.push('/user/mse-self?'+id);
                }
            }
         
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
    margin-top:20px;
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
  .msg-content{
    padding-top:20px;
  }
</style>