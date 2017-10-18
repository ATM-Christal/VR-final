<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/user/pedia"><i class="el-icon-date"></i> <span class="bread">VR百科</span></el-breadcrumb-item>
                <el-breadcrumb-item><span class="bread">百科知识</span></el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="sidebar" v-if="seen">
           <div class="container">
			        <h3 class="wthree_head">
                 <i class="fa fa-envelope" aria-hidden="true"></i>
                 <span>编辑</span>
              </h3>
              <el-input placeholder="词条名" id="keySpace" v-model="keyword"></el-input>
              <el-input placeholder="词条属性" id="pkSpace" v-model="prop_keyword"></el-input>
              <textarea placeholder="内容" id="conSpace" v-model="content"></textarea>
              <el-button class="or-btn" style="margin-left:30%;margin-top:10px" type="primary" @click="submit()">提交</el-button>
              <el-button class="or-btn" style="margin-top:10px" type="primary" @click="close()">关闭</el-button>
          </div>
        </div>

        <div class="events">
        	  <div class="container">
                <div class="news-box">
                    <h2 class="title">{{keyword}}</h2>
                    <div class="borderline clearfix">
                        <p class="artinfo"><span class="author"></span> </p>
                    </div>
                    <div class="article">
                        <ul class="news-list">
                            <li class="news-item" v-for="encyclopedia_prop in encyclopedia_propData">
                                <a href="javascript:void(0);" class="link-tit" title="">
                                   <span class="news-title">{{encyclopedia_prop.prop_keyword}}</span>
                                   <span class="news-desc">{{encyclopedia_prop.content}}</span>
                                </a>
                                <el-button style="float:right" type="warning" @click="edit(encyclopedia_prop)">编辑</el-button>
                            </li>
                        </ul>
                   </div>

            <div class="news-comment">
                <el-button-group>
                  <el-button type="primary" icon="circle-check" @click="up()">赞{{upvote}}</el-button>
                  <el-button type="primary" @click="down()">踩{{downvote}}<i class="el-icon-circle-cross el-icon--right"></i></el-button>
                </el-button-group>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>

    export default {
        data: function(){
            return {
                seen:false,
                activeName2: 'first',
                allowSubmit:true,
                hostURL:"/VR",
                id:"1",
                prop_id:"1",
                keyword:"",
                prop_keyword:"",
                content:"",
                upvote:1,
                downvote:1,
                changenote:"a1",
                encyclopedia_propData:[
                    {
                        id:"1",
                        prop_id:"1",
                        keyword:"",
                        prop_keyword:"",
                        content:"a",
                        changenote:"a1",

                    },
                    {
                        id:"2",
                        prop_id:"2",
                        keyword:"",
                        prop_keyword:"",
                        content:"b",
                        changenote:"b1",

                    }
                ]
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
            getEncyclopedia_propData(id){
                var self = this;
                self.encyclopedia_propData = [];
                self.$axios({
                    url:'/encyclopedia-prop/'+id,
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    self.encyclopedia_propData = response.data;

                    console.log(encyclopedia_propData);
                }).catch((error)=>{
                    console.log(error);
                });
            },
            getEncyclopediaData(id){
                var self=this;
                var encydata={
                    id:1,
                    keyword:'',
                    type:'',
                    changenote:'',
                    upvote:1,
                    downvote:1
                };
                 self.$axios({
                    url:'/encyclopedia-votedata/'+id,
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    encydata = response.data;
                    self.id=encydata.id;
                    self.keyword=encydata.keyword;
                    self.upvote=encydata.upvote;
                    self.downvote=encydata.downvote;
                }).catch((error)=>{
                    console.log(error);
                });

            },
            edit(encyclopedia_prop){
                var self=this;
                self.seen=true;
                self.id=encyclopedia_prop.id;
                self.keyword=encyclopedia_prop.keyword;
                self.prop_id=encyclopedia_prop.prop_id;
                self.prop_keyword=encyclopedia_prop.prop_keyword;
                self.content=encyclopedia_prop.content;
                self.changenote=self.changenote;



            },
            close(){
                var self=this;
                self.seen=false;
            },
            submit(){
                var self=this;
                var submitdata={
                    id:"1",
                    prop_id:"1",
                    keyword:"",
                    prop_keyword:"",
                    content:"a",
                    changenote:"a1",
                };
                submitdata.id=self.id;
                submitdata.prop_id=self.prop_id;
                submitdata.keyword=self.keyword;
                submitdata.prop_keyword=self.prop_keyword;
                submitdata.content=self.content;
                submitdata.changenote=localStorage.getItem('ms_username');
                self.$axios({
                    url:'/encyclopedia-propChange',
                    method:'post',
                    baseURL: self.hostURL,
                    data:submitdata
                }).then((response)=>{
                    var state=response.data;
                    if(state==1){
                        self.$message({
                        type:'info',
                        message:'提交成功'
                        });
                        self.close();
                    }
                }).catch((error)=>{
                    console.log(error);
                });

            },
            up()
            {
                var self=this;
                var sid=self.id;
                var username=localStorage.getItem('ms_username');
                var votenote='encyclopedia-vote'+sid;
                var flag=localStorage.getItem(votenote);
                if(username==flag)
                {
                    self.$message({
                        type:'info',
                        message:'您已经对该条百科做出评价'
                        });
                    return ;
                }
                self.$axios({
                    url:'/encyclopedia-up/'+sid,
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    var state=response.data;
                    if(state==1){
                        self.$message({
                        type:'info',
                        message:'赞成功'
                        });
                        self.upvote=self.upvote+1;
                        localStorage.setItem(votenote, username);

                    }
                    
                }).catch((error)=>{
                    console.log(error);
                });

            },
            down()
            {
                var self=this;
                var sid=self.id;
                var username=localStorage.getItem('ms_username');
                var votenote='encyclopedia-vote'+sid;
                var flag=localStorage.getItem(votenote);
                if(username==flag)
                {
                    self.$message({
                        type:'info',
                        message:'您已经对该条百科做出评价'
                        });
                    return ;
                }
                self.$axios({
                    url:'/encyclopedia-down/'+sid,
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    var state=response.data;
                    if(state==1){
                        self.$message({
                        type:'info',
                        message:'踩成功'
                        });
                        self.downvote=self.downvote+1;
                        localStorage.setItem(votenote, username);
                    }
                    
                }).catch((error)=>{
                    console.log(error);
                });

            },

        },
        mounted(){
            var self= this;
            var user_name=localStorage.getItem("ms_username");
            if(user_name==""){
                this.$router.replace('/login');
            }
            self.encyclopedia_propData=[];
            console.log("2222");
            var arr = location.href.split('?');
            console.log(arr[1]);
            var encyclopedia_id = arr[1];
            self.id=encyclopedia_id;
            console.log(encyclopedia_id);
            self.getEncyclopedia_propData(encyclopedia_id);
            self.getEncyclopediaData(encyclopedia_id);
            var not='';
            localStorage.setItem('encyclopedia-vote',not);
        }
    }
</script>

<style scoped>
.crumbs{
    text-decoration: none;
}
.bread{
    font-size: 16px;
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
.news-box{
    padding: 28px;
    width: 800px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
}
.news-title{
    font-size: 22px;
    color: #287D7C;
    line-height: 50px;
    font-weight: normal;
        display: block;
}
.borderline{
    border-bottom: 1px dotted #BFBFBF;
}
.artinfo{
    float: left;
    padding-bottom: 5px;
    color: #999;
        margin: 0;
    padding: 0;
    display: block;
}
.author{
    color: #666;
}
.article p{
    padding: 30px 0 50px;
    font-size: 18px;
    color: #333;
    line-height: 200%;
    text-indent:2em;
}
.article {
    display: inline-block;
    line-height: 26px;
    padding-bottom: 25px;
}
.news-img{
    text-align: center;
}
.news-comment{
    margin-top: 20px;
    text-align: center;
}
</style>

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
.or-btn{
    border: 1px solid #f2af00;
    background: #f2af00;
}
.news-item,.eg-item{
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
.news-list .news-item .news-title,.eg-title{
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
.sidebar{
    display: block;
    position: absolute;
    width: 400px;
    right: 0;
    top: 0;
    bottom:0;
    background: #2E363F;
}
.sidebar > ul {
    height:100%;
}

.events {
    padding: 0em 0em;
}
.title,.eg-title {
    font-size: 2em;
    color:#778899;
    margin-bottom: 1em;
    font-family: 'Marvel', sans-serif;
}
.news-title {
    font-size: 2em;
    color: #f2af00;
    font-family: 'Marvel', sans-serif;
}
.event-text p {
    font-size: 1em;
    color:#777676;
    line-height: 1.8em;
    margin-top: 0.5em;
}
.event-text a {
    font-size: 0.95em;
    color: #fff;
    background:#a2b040;
    padding: 0.5em 1em;
    display: inline-block;
    margin-top: 0.8em;
    border-radius: 3px;
}
.event-text a:hover {
	background:#f2af00;
}
.events-grid {
    margin-bottom:3em;
}
.wthree_head{
	font-size:2em;
	color:#f2af00;
	text-align:center;
	text-transform: capitalize;
}
.wthree_head i{
	display: block;
    text-align: center;
    color: #fff;
    background: #ff0101;
    margin: 0 auto;
    border-radius: 25px;
    line-height: 1.5;
    margin-bottom: .5em;
}
.wthree_head span{
	display: block;
    font-size: .5em;
    padding: .5em 0;
    border-top: 1px solid #f2af00;
    border-bottom: 1px solid #f2af00;
    width: 11%;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin: 0 auto;
}

.el-input{
  padding:8px;
  width:95%;
}
#conSpace {
  height:200px;
  width:380px;
  margin-left:10px;
}
</style>
