<template>
    <div class="sidebar">
        <div class="subsidebar">
         <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex:'/admin/news-editor',
                hello:"hahahaha",
                items: [
                    // {
                    //     icon: 'el-icon-menu',
                    //     index: '/admin/administrator',
                    //     title: '用户管理'
                    // },
                    
                    {
                        icon: 'el-icon-menu',
                        index: '1',
                        title: '新闻管理',
                        subs: [
                            {
                                index: '/admin/news-editor',
                                title: '新闻编辑'
                            },
                            {
                                index: '/admin/news-release',
                                title: '新闻发布'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '/admin/UploadFile',
                        title: '产品管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '/admin/bbs',
                        title: '论坛管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '2',
                        title: '百科管理',
                        subs: [
                            {
                                index: '/admin/Encyclopedia',
                                title: '审核'
                            },

                            {
                                index: '/admin/encyclopediaDelete',
                                title: '删除'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '/admin/mseAdmin',
                        title: '评测自媒体管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '/admin/Questionaire',
                        title: '问卷管理'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '/admin/User',
                        title: '用户管理'
                    },
                    // {
                    //     icon: 'el-icon-menu',
                    //     index: '5',
                    //     title: '评价模块管理'
                    // },
                    
                ]
            }
        },
        computed:{
            onRoutes(){
                // return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: relative;
        float: left;
        width: 250px;
        /*left: -5px;*/
        /*top: 70px;*/
        /*bottom:0;*/
        background: #324157;
        bottom: 0px;
        height:100%
    }
    .sidebar > ul {
        height:100%;
    }
    .subsidebar{
        display: block;
        position: fixed;
        float: left;
        width: 250px;
        /*left: -5px;*/
        top: 70px;
        /*bottom:0;*/
        background: #324157;
        bottom: 0px;
        height:100%
    }
</style>
