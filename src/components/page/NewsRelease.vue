<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 新闻编辑模块</el-breadcrumb-item>
                <el-breadcrumb-item>新闻发布</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="news" :rules="rules" :model="news" label-width="80px">
                <el-form-item label="新闻标题" prop="title">
                    <el-input v-model="news.title" placeholder="请输入新闻标题"></el-input>
                </el-form-item>
                <el-form-item label="新闻类型" prop="type">
                    <el-select v-model="news.type" placeholder="请选择新闻类型">
                        <el-option key='1' label="最新" value='1'></el-option>
                        <el-option key="2" label="融资" value="2"></el-option>
                        <el-option key="3" label="产业" value="3"></el-option>
                        <el-option key="4" label="厂商" value="4"></el-option>
                        <el-option key="5" label="专访" value="5"></el-option>
                        <el-option key="6" label="技术" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="news.author" placeholder="请输入作者" style="width: 100px;"></el-input>
                </el-form-item>
                <el-form-item label="来源" prop="source">
                    <el-input v-model="news.source" placeholder="请输入来源" style="width: 150px;"></el-input>
                </el-form-item>
                <el-form-item label="发布时间" prop="lastEditTime">
                    <el-input v-model="news.lastEditTime" placeholder="yyyy-mm-dd" style="width: 150px;"></el-input>
                </el-form-item>
                <el-form-item label="标题图" prop="picLocation">
                    <el-input v-model="news.picLocation" style="width: 600px;" placeholder="请输入图片的URL"></el-input>
                </el-form-item>
                <el-form-item label="内容概述" prop="newsAbstract">
                    <el-input type="textarea" v-model="news.newsAbstract" style="width: 600px;"
                              placeholder="请输入新闻概述"></el-input>
                </el-form-item>

                <el-form-item label="新闻内容" prop="content">
                    <quill-editor ref="myTextEditor" v-model="news.content" :options="editorOption"
                                  style="line-height: 1;width: 800px;"></quill-editor>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit('news')" :loading="load">发布</el-button>
                    <el-button @click="resetForm('news')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    import {quillEditor} from 'vue-quill-editor';
    export default {
        components: {
            quillEditor
        },
        data: function () {
            return {
//                hostURL: 'http://116.56.140.85:8080/VR',
                hostURL: '/VR',
                load: false,
                select_cast: '',
                news: {
                    id: null,
                    tag: null,
                    title: null,
                    path: null,
                    lastEditTime: null,
                    source: null,
                    upvote: null,
                    downvote: null,
                    editorId: null,
                    author: null,
                    newsAbstract: null,
                    content: null,
                    picLocation: null,
                    isPush: null,
                    type: null
                },
                editorOption: {
                    modules: {
                        toolbar: [
                            [{'header': [2, 3, false]}],
                            ['bold', 'italic'],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            ['image']
                        ]
                    },
                    placeholder: '请编写您的新闻内容...',
                },
                rules: {
                    title: [
                        {required: true, message: '请输入新闻标题', trigger: 'blur'}
                    ],
                    type: [
                        {required: true, message: '请选择新闻类型', trigger: 'change'}
                    ],
                    author: [
                        {required: true, message: '请输入作者', trigger: 'blur'}
                    ],
                    source: [
                        {required: true, message: '请输入来源', trigger: 'blur'}
                    ],
                    lastEditTime: [
                        {required: true, message: '请输入时间', trigger: 'blur'}
                    ],
                    picLocation: [
                        {required: true, type: 'url', message: '请输入图片的URL', trigger: 'blur'}
                    ],
                    newsAbstract: [
                        {required: true, message: '请输入新闻概述', trigger: 'blur'},
                        {min: 5, max: 100, message: '长度在5到100个字符', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入新闻内容', trigger: 'blur'}
                    ]
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        },

        methods: {
            onEditorChange({editor, html, text}) {
                this.news.content = html;
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
            onSubmit(formName) {
                var self = this;
                self.$refs[formName].validate((valid)=> {
                    if (valid) {
                        self.$axios({
                            url: '/NewsRelease',
                            /*+ '?author=' + self.news.author +
                            '&lastEditTime=' + self.news.lastEditTime +
                            '&newsAbstract=' + self.news.newsAbstract +
                            '&picLocation=' + self.news.picLocation +
                            '&source=' + self.news.source +
                            '&title=' + self.news.title +
                            '&type=' + self.news.type +
                            "&content=" + self.news.content +
                            "&path=" + self.news.path,*/
                            data:{
                                author:self.news.author,
                                lastEditTime:self.news.lastEditTime,
                                newsAbstract:self.news.newsAbstract,
                                picLocation:self.news.picLocation,
                                source:self.news.source,
                                title:self.news.title,
                                type:self.news.type,
                                content:self.news.content,
                                path:self.news.path
                            },
                            method: 'post',
                            baseURL: self.hostURL
                        }).catch((error)=> {
                            console.log(error);
                        });
                        self.$message.success('发布成功！');
                        self.$refs[formName].resetFields();
                        self.$router.push('/admin/news-editor');
                    }
                    else {
                        self.$message.error('请输入全部信息！');
                    }
                })
                // self.load = true;
                // self.$message.success(self.news.content);
                // self.load = false;
            },
            resetForm(formName) {
                var self = this;
                self.$refs[formName].resetFields();
            }
        }
    }


</script>
<style>
    .content {
        float: left;
        width: 70%;
    }
</style>