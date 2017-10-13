<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i>管理员</el-breadcrumb-item>
                <el-breadcrumb-item to="/admin/mseAdmin">评测自媒体管理</el-breadcrumb-item>
                <el-breadcrumb-item>评测自媒体文章编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div v-if="edit">
            <el-row class="vii">
                <form method="POST" action="/VR/upload">
                    <h3 class="step">1.标题图像</h3>
                    <VueImgInputer ref="vii" v-model="picValue" :imgSrc="imgSrc" accept="image/*" theme="light" size="large" @onChange="fileChange"></VueImgInputer>
                    <!--<img :src="dataUrl" />-->
                </form>
            </el-row>
            <el-row class="title">
                <h3 class="step">2.评测标题</h3>
                <input type="text" v-model="title" placeholder="文章标题" style="outline: none;">
            </el-row>
            <el-row class="ql">
                <h3 class="step" style="margin-bottom: 10px">3.评测内容</h3>
                <div class="quill-editor">
                    <!-- quill-editor -->
                    <quill-editor
                            red="quil"
                            v-model="quillEditor"
                            :options="editorOption">
                    </quill-editor>
                    <!--<div class="html ql-editor" v-html="quillEditor"></div>-->
                </div>
            </el-row>
            <el-row>
                <input class="subBtn active" type="button" value="提交" @click="subMse()"/>
            </el-row>
        </div>
        <div v-else>
            <p>提交成功～</p>
        </div>
    </div>

</template>
<script>
        import VueImgInputer from 'vue-img-inputer'
    import quilEditor from 'vue-quill-editor'
    export default {
        components:{
            VueImgInputer,
            quilEditor
        },
        data() {
            return {
                hostURL:'/VR',
//                hostURL:'http://116.56.140.85:8080/VR',
                imgSrc:"",
                subSuccess: false,
                edit:true,
                e_id:null,
                userId: null,
                picValue: null,
                picTitle:'',
                title: null,
                quillEditor: null,
                editorOption: {
                    modules: {
                        toolbar: [
                            [{ 'header': [2, 3, false] }],
                            ['bold', 'italic'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['image']
                        ]
                    },
                    placeholder: '请编写您的媒体自媒体测评...',
                },
            };
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
            fileChange(picValue, name) {
                let self =this;
                console.log('picValue:', picValue);
                console.log('FileName:', name);
                console.log(picValue.imgSrc);
                let data = new FormData();
//                    使用FormData.append来添加键/值对到表单里面;
                data.append('file', picValue);
                self.$axios({
                    url:'/upload', //{uid}
                    method:'post',
                    baseURL: self.hostURL,
                    data:data
                }).then((response)=>{
                    this.picTitle = response.data.object;
                    console.log(this.picTitle);
                }).catch((error)=>{
                    console.log(error);
                });
            },
            subMse(){
                let self = this;
                if(self.title && self.quillEditor && self.picTitle){

                    let mse={
                        evaluationId:self.e_id,
                        titlePic: self.picTitle,
                        evaluationTitle: self.title,
                        authorId:self.userId,
                        evaluationText:{
                            evaluationBody:self.quillEditor
                        },
                        postTime: Date.parse(new Date())
                    };
                    console.log(mse);
                    /**/
                    self.$axios({
                        url:'/admins/evaluations/evaluation',
                        method:'put',
                        baseURL: self.hostURL,
                        data: mse,
                    }).then((response)=>{
                        console.log(response.data.object);
                        /*self.picValue = null;
                         self.picTitle = '';
                         self.title = '';
                         self.content = null;
                         self.$refs.ue.execCommand('cleardoc');*/
                        self.$notify({
                            title: '成功！',
                            message: '成功修改测评。',
                            type: 'success'
                        });
//                        let res = response.data.object;
//                        console.log(res.evaluationId);
//                        self.edit = false;
                        self.$router.push('/admin/mseAdminView?' + self.e_id);
                    }).catch((error)=>{
                        console.log(error);
                        self.codeParsing(error.response.status);
                    });
                }else{
                    self.$notify({
                        title: '提示！',
                        message: '请填写媒体自评测的标题、标题图片及（或）文章内容后再进行提交。',
                        type: 'error'
                    });
                }

            },
            getMseData(id){
                var self = this;
                self.$axios({
                    url:'/evaluations/'+id,
                    method:'GET',
                    baseURL: self.hostURL
                }).then((response)=>{
                    let mse = response.data.object.evaluation;
                    console.log(mse);
//                    self.mse = data['evaluation'];
                    self.picTitle = mse.titlePic;
                    self.imgSrc = mse.titlePic;
                    self.quillEditor = mse.evaluationText;
                    self.title = mse.evaluationTitle;
                    self.userId = mse.authorId
                }).catch((error)=>{
                    self.codeParsing(error.response.status);
                    console.log(error.response.status);
                });
            },
        },
        computed:{
        },
        mounted(){
            var self = this;
            var arr = location.href.split('?');
            var mse_id = arr[1];
            self.e_id = mse_id;
            self.getMseData(mse_id);
            /*self.imgSrc = self.mse.titlePic;
            self.quillEditor = self.mse.evaluationText;
            self.title = self.mse.evaluationTitle;*/
        }
    };
</script>
<style scoped>
    .vii div{
        /*width: 710px;*/
        margin: 0 auto;
        display: block;
    }
    .vii div div img{
        max-width: 710px;
        max-height: 300px;
    }
    .title input {
        width: 645px;
        font-size: 24px;
        font-weight: 400;
        color: rgb(153, 153, 153);
        margin-top: 20px;
        padding-right: 0;
        line-height: 36px;
        float: left;
        border: 0;
    }
    .vii, .title, .ql{
        margin-bottom: 20px;
    }
    .step{
        color: #5a5a5a
    }
    .subBtn{
        width: 90px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        color: #fff;
        background-color: #5a5a5a;
        border: 0;
        margin-right: 15px;
        font-size: 14px;
        float: left;
    }
    .active{
        background-color: #5188a6;
        cursor: pointer;
    }
</style>