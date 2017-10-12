<template>
    <div class="header">
        <div class="logo">虚拟现实产品质量评估平台</div>
        <div class="nav-menu">
            <el-menu theme="dark" :default-active="activeIndex" @select="onRoutes" class="el-menu-demo" mode="horizontal" id="navigator" unique-opened router>
              <template v-for="item in items" >
                <template v-if="item.subs" >
                    <el-submenu :index="item.index" >
                        <template slot="title"><span class="nav-tab">{{ item.title }}</span></template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index" @click="check(subItem)"><span>{{ subItem.title }}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
            </el-menu>
        </div>
        <div class="user-info">
            <el-dropdown trigger="hover" @command="handleCommand">
                <span class="el-dropdown-link">
                    <!-- <img class="user-logo" src="../../../static/img/img.jpg"> -->
                    {{ username }}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: '',
                hostUrl:'/VR',
                activeIndex: '/user/news-list',
                items: [
                    {
                        icon: 'el-icon-menu',
                        index: '0',
                        title: '产品中心',
                        subs: [
                            {
                                index: '/user/product-list',
                                title: '产品列表'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '1',
                        title: '产品对比',
                        subs: [
                            {
                                index: '',
                                title: '查看对比'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: 'VR资讯',
                        subs: [
                            {
                                index: '/user/news-list',
                                title: '最新'
                            },
                            
                            {
                                index: '/user/news-finance',
                                title: '融资'
                            },
                            {
                                index: '/user/news-industry',
                                title: '产业'
                            },
                            {
                                index: '/user/news-firm',
                                title: '厂商'
                            },
                            {
                                index: '/user/news-interview',
                                title: '专访'
                            },
                            {
                                index: '/user/news-technology',
                                title: '技术'
                            },
                            

                        ]
                    },
                    {
                       icon: 'el-icon-menu',
                       index: '3',
                       title: 'VR论坛',
                       subs: [
                           {
                               index: '/user/BBS',
                               title: '进入论坛'
                           },
                       ]
                    },
                    {
                       icon: 'el-icon-menu',
                       index: '4',
                       title: 'VR百科',
                       subs: [
                           {
                               index: '/user/pedia',
                               title: '百科搜索'
                           },
                           {
                               index: '/user/pedia2',
                               title: '目录浏览'
                           }
                       ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '5',
                        title: '媒体自评测',
                        subs: [
                            {
                                index: '/user/mse-list',
                                title: '媒体自评测'
                            },
                            {
                                index: '/user/mse-self',
                                title: '我的媒体自评测'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '6',
                        title: '满意度调查',
                        subs: [
                            {
                                index: '/user/questionaire',
                                title: '问卷填写'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        index: '7',
                        title: '个人信息管理',
                        subs: [
                            {
                                index: '/user/change-nick',
                                title: '修改昵称'
                            },
                            {
                                index: '/user/change-password',
                                title: '修改密码'
                            }
                        ]
                    }
                ],
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            },

        },
        methods:{
            handleCommand(command) {
                if(command == 'loginout'){
                    this.$axios({
                        url: '/user/logoff',
                        method: 'get',
                        baseURL: this.hostUrl
                    })
                    .then((response) => {
                        localStorage.removeItem('ms_username');
                        sessionStorage.clear();
                        this.$router.push('/login');
                    })
                    .catch((error) => {
                        localStorage.removeItem('ms_username');
                        sessionStorage.clear();
                        this.$router.push('/login');
                    });  
                }
            },
            check(item){
                if(item.title=='查看对比'){
                    var t=JSON.parse(localStorage.getItem('compare_data'));
                    if(t.data.length===0)
                    {
                        this.$message("您还没有加入对比的产品");
                    }else{
                        this.$router.push('/user/product-compare');
                    }
                }
            },
            onRoutes(){

            }
        },
        mounted(){
            var s = this.$route.path.split('/');
             var route = s[s.length - 1].split('?')[0];
             var res;
             /*switch (route)
             {
             case 'product-compare':
             res = '1';
             break;
             case 'news-list':
             case 'news-finance':
             case 'news-industry':
             case 'news-firm':
             case 'news-interview':
             case 'news-technology':
             res = '2';
             break;
             case 'BBS':
             res = '3';
             break;
             case 'pedia':
             case 'pedia':
             res = '4';
             break;
             case 'mse-list':
             case 'mse':
             case 'mse-self':
             case 'mse-edit':
             res = '5';
             break;
             case 'questionaire':
             res = '6';
             break;
             case 'change-nick':
             case 'change-password':
             res = '7';
             break;
             default:
             res = '0';
             break;
             }
             console.log(res);*/
             this.activeIndex = '/user/' + route;
        }
    }
</script>
<style scoped>
    .header {
        z-index: 1290;
        margin: 0 auto;
        min-width: 1400px;
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:300px;
        text-align: center;
        left: auto;
        top: auto;
        margin: 0;
        position: relative;
    }
    .nav-menu{
        float:left;
        margin-top:10px;
        line-height:70px;
        position: absolute;
        left: 300px;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }   
    .nav-tab{
        font-size: 16px;
    }

</style>
