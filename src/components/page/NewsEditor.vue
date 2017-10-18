<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 新闻管理</el-breadcrumb-item>
                <el-breadcrumb-item>新闻编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
            <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
            <el-select @change="newschange" v-model="select_cate" placeholder="筛选新闻类型" class="handle-select mr10" style="width: 150px;">
                <el-option key="1" label="最新" value="1"></el-option>
                <el-option key="2" label="融资" value="2"></el-option>
                <el-option key="3" label="产业" value="3"></el-option>
                <el-option key="4" label="厂商" value="4"></el-option>
                <el-option key="5" label="专访" value="5"></el-option>
                <el-option key="6" label="技术" value="6"></el-option>
            </el-select>
            <!--<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>-->
        </div>
        <el-table :data="datalist" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="80"></el-table-column>
            <el-table-column prop="lastEditTime" label="日期" sortable width="150">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="120">
            </el-table-column>
            <el-table-column prop="title" label="标题" >
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
                hostURL:'/VR',
                datalist: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                del_succ:true,
                
            }
        },
        mounted(){
            var self = this;
            self.getNews(self.cur_page);
        },
        methods: {

            getNewsBySelector(str, type){
                var self = this;
                self.datalist=[];
                self.$axios({
                    url:'/news_lists/'+str+'/' + type,
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.datalist = [];
                    self.datalist = response.data;
                }).catch((error)=>{
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },
            newschange() {
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
                    url:'/news_lists/'+str+'/0',
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    console.log("len="+response.data.length);
                    if(response.data.length==0){
                        if(self.cur_page!=1){
                            self.cur_page=self.cur_page-1;
                            self.$message({
                                type:'info',
                                message:'已经是最后一页了！'
                            });
                        }
                    }else{
                        self.datalist = [];
                        self.datalist = response.data;
                    }
                    
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },
            handleCurrentChange(){
                var self = this;
                console.log("current-Page:");
                console.log(self.cur_page);
                self.getNews(self.cur_page);
            },
            search(){
                this.is_search = true;
                console.log("is_search")
            },
            handleEdit(index, row) {
                var self=this;
                // localStorage.setItem("news_path",self.datalist[index].path);
                self.$router.push('/admin/editor?'+self.datalist[index].id);
            },
            handleDelete(index, row) {
                var self = this;
                self.$confirm('此操作将永久删除该条新闻，是否继续？','提示',{
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    type:'warning'
                }).then(()=> {
                    self.$axios({
                    url:'/news_delete/'+self.datalist[index].id,
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                        self.$message({
                            type: 'success',
                            message:'删除成功！'
                        });
                        self.datalist.splice(index,1);
                }).catch((error)=>{
                    self.$message({
                        type:'info',
                        message:'删除失败！'
                    });
                });
                }).catch(()=>{
                    this.$message({
                        type:'info',
                        message:'已取消删除'
                    });
                });
                
            },
            delAll(){
                const self = this;
                length = self.multipleSelection.length;
                for (let i = 0; i < length; i++) {
                    self.delOne(self.multipleSelection[i]);
                }
                if(del_succ==true){
                    self.$message({
                        type: 'success',
                        message:'删除成功！'
                    });
                    self.datalist=self.datalist.filter(t => !self.multipleSelection.some(s => s.id === t.id))
                }
                if(self.datalist.length==0){
                    self.getNews(self.cur_page);
                }
            },
            delOne(selection){
                var self=this;
                self.$axios({
                        url:'/news_delete/'+selection.id,
                        method:'get',
                        baseURL:self.hostURL
                    }).then((response)=>{
                        
                    }).catch((error)=>{
                        self.del_succ=false;
                        self.$message({
                            type:'info',
                            message:'connect fail'
                        });
                });
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style>
.content {
    float: left;
    width: 70%;
}
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>