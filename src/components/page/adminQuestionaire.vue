<template>
    <div>
        <el-row>
            <div class="list-wrap"p>
                <el-tabs v-model="activePane" @tab-click="tabClick">
                    <el-tab-pane label="修改问卷" name="modify">
                        <p class="hint">*所有修改在点击提交问卷按钮后才生效</p>
                        <el-button type="primary" icon="plus" @click="addQuestionaire" style="margin-left:50px">新建问卷</el-button>
                        <div class="selector" style="margin-bottom:20px">
                            <div class="protype_selector">
                                <el-select v-model="ques_type.value" placeholder="请选择问卷" @change="sendProType()">
                                    <el-option v-for="item in ques_type.opts" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="prosales_selector" v-show="display_submit">
                                <el-input style="width:200" v-model="questionname" placeholder="请输入问卷名"></el-input>
                            </div>
                        </div>
                        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
                            <el-form-item
                                v-for="(domain, index) in dynamicValidateForm.domains"
                                :label="'问题' + (index+1)"
                                :key="domain.key"
                                :prop="'domains.' + index + '.value'"
                                :rules="{
                                required: true, message: '问题不能为空', trigger: 'blur'
                                }"
                            >
                                <el-input v-model="domain.value" style="width:300px" ></el-input>
                                <el-switch class="switch" width="75" v-model="domain.type" on-value="single" off-value="essay"
                                on-text="单选题" off-text="问答题" on-color="#13ce66" off-color="#ff4949">
                                </el-switch>
                                <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                            </el-form-item>
                            <el-form-item >
                                <el-button v-show="display_submit" type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                                <el-button v-show="display_submit" @click="addDomain">新增问题</el-button>
                                <el-button v-show="display_del" :plain="true" type="danger" @click="deleteQuestionare">删除问卷</el-button>
                            </el-form-item>
                        </el-form>
                    </el-tab-pane>
                    <el-tab-pane label="问卷结果统计" name="statistic">
                        <div class="selector">
                            <div class="protype_selector">
                                <el-select v-model="pro_type.value" placeholder="请选择问卷" @change="getStatistic()">
                                    <el-option v-for="item in pro_type.opts" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                        <div class='questionbox'>
                            <form id="questions">
                                <div style="margin-bottom:20px" v-for="(a,index) in data.statistic">
                                    <p class="single_question">{{"问题"+(index+1)+". "+a.question}}</p>
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
                hostUrl: '/VR',
                activePane: 'modify',
                data: {
                    code: 200,
                    statistic:[],
                },
                display_submit:false,
                display_del:false,
                dynamicValidateForm: {
                    domains: [
                    //     {
                    //     value: '你是谁？',
                    //     type:'single'
                    // },{
                    //     value: '你对某个产品有什么建议？',
                    //     type:'essay'
                    //}
                    ],
                },
                ques_data:{
                    questions:[
                    //     {
                    //     id:1,
                    //     question:"你是谁？",
                    //     questiontype:"single"
                    // },{
                    //     id:3,
                    //     question:"你对某个产品有什么建议？",
                    //     questiontype:"essay"
                    // }
                    ]
                },
                pro_type:{
                    opts: [
                        {label:"a",value:"a"}
                    ], 
                        value: ''
                },
                ques_type:{
                    opts: [
                        {label:'b',value:'b'}
                    ], 
                        value: ''
                },
                questionname:''
            }
        },

        methods: {
            codeParsing(code) {
                var msg = (Title, Message) => {
                    this.$message({
                        title: Title,
                        message: Message,
                        type: 'error'
                    });
                };
                switch(code) {
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
                    case 400:
                        msg('权限问题', '用户未登录，请重新登录');
                        break;
                    case 401:
                        msg('权限问题', '用户无权访问，请联系管理员');
                        break;
                    case 402:
                        msg('操作错误', '删除错误,请刷新重试');
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
                    default:
                        break;
                }
            },
            tabClick(val){
                var self= this;
                switch(val.index){
                    case "0":
                        self.getQuestions();
                        break;
                    case "1":
                        break;
                    default:
                        break;
                }
            },
            submitForm(formName) {
                // console.log(formName);
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.questionname.trim()!=""){
                        var postData=[];
                        for(var i=0;i<this.dynamicValidateForm.domains.length;i++){
                            postData.push({question:this.dynamicValidateForm.domains[i].value,
                                        questiontype:this.dynamicValidateForm.domains[i].type,
                                        questionname:this.questionname});
                        }
                        console.log(postData);
                        this.$axios({
                            url:'/admin/Question/modify',
                            method:'post',
                            baseURL:this.hostUrl,
                            data:postData
                        }).then(response=>{
                            this.data.code=response.data.code;
                            if (this.data.code == 200){
                                this.$message("问卷提交成功！");
                                this.display_del=true;
                            }else{
                                this.codeParsing(this.data.code);
                            }
                        });
                    }else{
                        this.$message("问卷名未填写！");
                    }
            
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                value: '',
                type:'single',
                key: Date.now()
                });
            },
            
            getStatistic(){
                var self = this;
                self.data={
                    statistic:[]
                    // {
                    //     question:"你是谁？",
                    //     onePercentage:"66.67",
                    //     twoPercentage:"33.33"
                    // },{
                    //     question:"我是谁？",
                    //     onePercentage:"50.00",
                    //     twoPercentage:"50.00"
                    // }]
                };
                self.$axios({
                    url:'/Answer/statistic?producttype='+self.pro_type.value,
                    method:'get',
                    baseURL: self.hostUrl
                }).then((response)=>{
                    console.log(response.data);
                    self.data.statistic= response.data;
                }).catch((error)=>{
                    console.log(error);
                });
            },
            deleteQuestionare(){
                var self=this;
                console.log("delete")
                self.$axios({
                    url:'/Question/deleteQuestionare?questionnariename='+self.questionname,
                    method:'get',
                    baseURL:self.hostUrl,
                    //data:{questionnairename:self.pro_type.value}
                }).then(response=>{
                    self.$message('问卷删除成功！');
                    self.dynamicValidateForm.domains=[];
                    self.display_submit=false;
                    self.display_del=false;
                }).catch((error)=>{
                    console.log(error);
                });
            },
            addQuestionaire(){
                var self=this;
                self.questionname='';
                self.dynamicValidateForm.domains=[];
                self.dynamicValidateForm.domains.push({
                            value:'',type:'single'});
                self.display_submit=true;
            },
            sendProType(){
                var self=this;
                console.log("type");
                self.dynamicValidateForm.domains=[];
                self.questionname=self.ques_type.value;
                self.$axios({
                    url:'/Question/type?type='+self.ques_type.value,
                    method:'get',
                    baseURL:self.hostUrl
                }).then(response=>{
                    for(var i=0;i<response.data.length;i++){
                        self.dynamicValidateForm.domains.push({
                            value:response.data[i].question,type:response.data[i].questiontype})
                    }
                    //self.dynamicValidateForm.domains= response.data;
                    console.log(self.dynamicValidateForm.domains);
                    self.display_submit=true;
                    self.display_del=true;
                }).catch((error)=>{
                    console.log(error);
                });
            },
            getQuestions(){
                var self=this;
                //self.dynamicValidateForm.domains=[];
                self.$axios({
                    url:'/Question',
                    method:'get',
                    baseURL: self.hostUrl
                }).then((response)=>{
                    console.log(response.data);
                    self.pro_type.opts=[];
                    for(var i=0;i<response.data.length;i++){
                        self.pro_type.opts.push({value:response.data[i],label:response.data[i]});
                        self.ques_type.opts.push({value:response.data[i],label:response.data[i]});
                    }
                    
                }).catch((error)=>{
                    console.log(error);
                });
            },
            
        },
        mounted(){
            var self=this;
            self.getQuestions();
        },
        created(){
            var self=this;
        }
    }
</script>

<style>
.content {
        float: left;
        width: 70%;
}
.switch{
    margin-left:10px;
    margin-right:10px;
}
.hint{
    font-size:13px;
    color:#8492A6;
    margin-bottom:20px
}
#questions{
    margin-left: 30px;
}
.questionbox{
    padding: 28px;
    width: 800px;
    margin-top: 20px;
}
.single_question{
    margin:0 0 10px 0;
    font-size:17px;
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
.selector{
    width:700px;
    margin-top: 20px;
    display: flex;
}
.protype_selector{
    margin-left:50px;
    float:left;
}
.prosales_selector{
    margin-left: 40px;
    flex: 1;
    
}
</style>