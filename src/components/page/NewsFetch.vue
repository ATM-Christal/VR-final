<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 新闻管理</el-breadcrumb-item>
                <el-breadcrumb-item>新闻获取</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-row>
            <div v-if="!busying" style="margin-top: 20px;">
                <el-form :inline="true" :model="form" :rules="rules" ref="form">
                    <el-form-item label="爬虫网站" prop="url">
                        <el-select v-model="form.url" placeholder="网站">
                            <el-option label="VR兔（http://www.ekblad.net）" value="http://www.ekblad.net"></el-option>
                            <el-option label="VR" value="www."></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="爬虫页数" prop="page">
                        <el-select v-model="form.page" placeholder="页数">
                            <el-option label="5" value="5"></el-option>
                            <el-option label="10" value="10"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" @click="submitForm('form')">开始爬虫</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div v-else class="not-found" style="margin-top: 20px;margin-bottom: 20px;height: 70px;">
                <div v-loading="busying" element-loading-text="新闻获取中"></div>
            </div>
        </el-row>

        <el-table :data="datalist" border style="width: 100%" ref="multipleTable">
            <!--<el-table-column type="selection" width="80"></el-table-column>-->
            <el-table-column prop="lastEditTime" label="日期" sortable width="150">
            </el-table-column>
            <el-table-column prop="author" label="来源" width="120">
            </el-table-column>
            <el-table-column prop="title" label="标题">
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template scope="scope">
                    <el-button size="small" type="primary"
                               @click="handleEdit(scope.$index, scope.row)">审核
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="cur_page"
                    layout="prev, next">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
//                hostURL: '/VR',
                hostURL:'http://119.23.175.192:8080/VR',
                datalist: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                del_succ: true,
                busying: false,
                form: {
                    url: '',
                    page: ''
                },
                rules: {
                    url: [
                        { required: true, message: '请选择爬虫网站', trigger: 'change' }
                    ],
                    page: [
                        { required: true, message: '请选择爬虫页数', trigger: 'change' }
                    ],
                }
            }
        },
        mounted(){
            var self = this;
            self.getNews(self.cur_page);
        },
        methods: {
            polling(){
                console.log('00000000000000')
                /*self.$axios({
                    url: '/news_lists/' + str + '/0',
                    method: 'get',
                    baseURL: self.hostURL
                }).then((response)=> {

                }).catch((error)=> {

                });*/
            },
            submitForm(formName) {
                let self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.busying = true;
                        var interval = setInterval(function () {
                            /*self.$axios({
                                url: '/news_lists/' + str + '/0',
                                method: 'get',
                                baseURL: self.hostURL
                            }).then((response)=> {
                                self.busying = response.busying;
                                if (!self.busying) {
                                    self.getNews(self.cur_page);
                                    clearInterval(interval);
                                }
                            }).catch((error)=> {

                            });*/

                        }, 60000);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getNewsBySelector(str, type){
                var self = this;
                self.datalist = [];
                self.$axios({
                    url: '/news_lists/' + str + '/' + type,
                    method: 'get',
                    baseURL: self.hostURL
                }).then((response)=> {
                    if (response.data.length == 0) {
                        if (self.cur_page != 1) {
                            self.cur_page = self.cur_page - 1;
                            self.$message({
                                type: 'info',
                                message: '已经是最后一页了！'
                            });
                        }
                    } else {
                        self.datalist = [];
                        self.datalist = response.data;
                    }
                    //self.datalist = [];
                    //self.datalist = response.data;
                }).catch((error)=> {
                    self.$message({
                        type: 'info',
                        message: 'connect fail'
                    });
                });
            },
            newschange() {
                this.cur_page = 1;
                this.getNewsBySelector(this.cur_page, this.select_cate);
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
            getNews(str){
                var self = this;
                //self.datalist=[];
                self.$axios({
                    url: '/news_lists/' + str + '/0',
                    method: 'get',
                    baseURL: self.hostURL
                }).then((response)=> {
                    console.log("len=" + response.data.length);
                    if (response.data.length == 0) {
                        if (self.cur_page != 1) {
                            self.cur_page = self.cur_page - 1;
                            self.$message({
                                type: 'info',
                                message: '已经是最后一页了！'
                            });
                        }
                    } else {
                        self.datalist = [];
                        self.datalist = response.data;
                    }

                }).catch((error)=> {
                    console.log(error);
                    self.$message({
                        type: 'info',
                        message: 'connect fail'
                    });
                });
            },
            handleCurrentChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.cur_page);
                if (self.select_cate == "") {
                    self.getNews(self.cur_page);
                } else {
                    self.getNewsBySelector(this.cur_page, this.select_cate);
                }

            },
            search(){
                this.is_search = true;
                console.log("is_search")
            },
            handleEdit(index, row) {
                var self = this;
                self.$router.push('/admin/news-examine?' + self.datalist[index].id);
            },
        }
    }
</script>

<style>
    .content {
        float: left;
        width: 70%;
    }

    .not-found {
        font-size: 24px;
        color: #91b5da;
        width: 240px;
        margin: 0 auto;
        padding-top: 20px;
    }
</style>