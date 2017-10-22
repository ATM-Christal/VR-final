<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/user/questionaire"><i class="el-icon-date"></i>满意度调查</el-breadcrumb-item>
                <el-breadcrumb-item to="/user/questionaire">问卷填写</el-breadcrumb-item>
                <el-breadcrumb-item>问卷结果</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="questionaire">
            <p>问卷结果统计</p>
            <hr>
            <div class='questionbox'>
                <form id="questions">
                    <div class="single_question" v-for="a in data.statistic">
                        <p style="margin-bottom:10px">{{a.question}}</p>
                        <div class="answer">
                            <div class="radio" >
                                <div class="text">是</div>
                                <div class="percent">
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="a.onePercentage"></el-progress>
                                </div>
                            </div>
                            <div class="radio">
                                <div class="text">否</div>
                                <div class="percent">
                                    <el-progress :text-inside="true" :stroke-width="18" :percentage="a.twoPercentage" status="exception"></el-progress>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
     
         
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                hostURL:"/VR",
                uid:"1",

                data:{
                    statistic:[{
                        question:"1.你是谁？",
                        onePercentage:"66.67",
                        twoPercentage:"33.33"
                    },{
                        question:"2.我是谁？",
                        onePercentage:"50.00",
                        twoPercentage:"50.00"
                    }]
                },
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
            getData(){
                console.log("get statistic")
                var self = this;
                self.data={
                    statistic:[]
                };
                self.$axios({
                    url:'/Answer/statistic?producttype='+localStorage.getItem('pro_type'),
                    method:'get',
                    baseURL: self.hostURL
                }).then((response)=>{
                    console.log(response.data);
                    self.data.statistic= response.data;
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
            // var arr = location.href.split('?');
            // var id = arr[1];
            // console.log(id);
            self.getData();  
        }
    }
</script>

<style>
.crumbs{
    text-decoration: none;
}
.bread{
    font-size: 16px;
}
#questions{
    margin-left: 30px;
}
.questionaire p{
    font-size: 18px;
    margin-top: 30px;
}
.questionaire hr{
    width: 72.7%;
}
.submit_btn{
    margin-left: 180px;
    margin-top: 30px
}
.questionbox{
    padding: 28px;
    width: 800px;
    border: 1px solid #E1E1E1;
    box-shadow: 0 0 2px rgba(0,0,0,.1);
    margin-top: 20px;
}
.answer{
    width: 100%;
    padding-left: 15px;
}
.radio{
    width: 100%;
    display: flex;
}
.text{
     width:20px;   
}
.percent{
    flex: 1;
    /*margin-left:20px;*/
}
</style>