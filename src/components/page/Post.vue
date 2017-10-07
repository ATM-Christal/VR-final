<template>
    <div>
        <!--头部-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/user/BBS"><i class="el-icon-date"></i> VR论坛</el-breadcrumb-item>
                <el-breadcrumb-item>发表帖子</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-row>
                <el-col :span ="3">
                    <el-form-item  prop="theme">
                        <el-select v-model="ruleForm.theme" placeholder="请选择主题分类">
                            <el-option v-for="item in options" :label="item.label" :value="item.name" :key="item.name"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span = "11" :offset = "1">
                    <el-form-item  prop="title">
                        <el-input v-model="ruleForm.title" placeholder="请输入帖子标题" :maxlength="30" @change="computeRestSize"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5" ><div class="title-size">还可输入<b class = "size-num">{{restSize}}</b>个字符</div></el-col>
            </el-row>
            <el-form-item prop="content">
                <el-col :span = "18">
                    <quill-editor
                            red="quil"
                            v-model="ruleForm.content"
                            :options="editorOption"
                            style="line-height: 1">
                    </quill-editor>
                    <!--<el-input type="textarea" :rows="20" v-model="ruleForm.content" placeholder="请输入帖子内容"   resize=none ></el-input>-->
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handlePost('ruleForm')">发表帖子</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import ElRow from "../../../node_modules/element-ui/packages/row/src/row";
    import { quillEditor } from 'vue-quill-editor';
    export default {
        components: {
            ElRow,
            quillEditor
        },
        data() {
            return {
                hostURL:'/VR',
                restSize: 30,
                editorOption: {
                    modules: {
                        toolbar: [
                            [{ 'header': [2, 3, false] }],
                            ['bold', 'italic'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['image']
                        ]
                    },
                    placeholder: '请编写您的内容...',
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
                ruleForm: {
                    theme: '',
                    title: '',
                    content: ''
                },
                rules: {
                    title: [
                        { required: true, message: '请输入帖子标题', trigger: 'blur' },
                        { min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
                    ],
                    theme: [
                        { required: true, message: '请选择帖子主题', trigger: 'change' }
                    ],
                    content: [
                        { required: true, message: '请输入帖子内容', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            //发数据给后台
            postText(){
                var self=this;
                self.$axios({
                    url:'/post_put/'+localStorage.getItem('ms_userid'), //{uid}
                    method:'post',
                    baseURL: self.hostURL,
                    data:{
                        theme: this.ruleForm.theme,
                        title: this.ruleForm.title,
                        content:this.ruleForm.content
                    }
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type: 'error',
                        message:'connect fail'
                    });
                });
            },

            //处理发帖按钮
            handlePost(formName){
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.postText();
                        this.$message({
                            type: 'success',
                            message:'发帖成功，正在跳回论坛'
                        });
                        this.$router.push('/user/BBS');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            //计算标题还可输入多少个字符
            computeRestSize(){
                if ( this.ruleForm.title.length <= 30)
                    this.restSize = 30 - this.ruleForm.title.length;
                else
                    this.restSize = 0;
            },

            mounted(){
                var user_name=localStorage.getItem("ms_username");
                if(user_name==""){
                    this.$router.replace('/login');
                }
            }
        },
    }
</script>

<style scoped>
    .crumbs{
        text-decoration: none;
    }
    .title-size{
        font-size: 14px;
        margin: 7px 0 0 15px;
        color: #8391a5;
    }
    .size-num{
        color: #434C52;
        margin: 0 2px;
    }
</style>