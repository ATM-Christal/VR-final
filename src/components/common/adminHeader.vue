<template>
    <div class="header">
        <div class="subheader">
            <div class="logo">&nbsp&nbsp&nbsp虚拟现实产品质量评估平台(管理员)</div>
        <!-- <div class="user-info">
            <el-dropdown trigger="hover" @command="handleCommand">
                <span class="el-dropdown-link"> -->
                    <!-- <img class="user-logo" src="../../../static/img/img.jpg"> -->
                    <!-- {{ username }}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="loginout">注销</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div> -->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'root',
                hostUrl:'/VR'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
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
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        overflow: auto;
    }
    .subheader {
        z-index:50;
        position: fixed;
        top:0;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        overflow: auto;
    }
    .subheader .logo{
        float: left;
        width: 100%;
        background-color:#324157;
        text-align: left;
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
</style>
