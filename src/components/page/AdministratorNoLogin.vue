<template>
    <div class="message"><h1>{{message}}<a href="#/admin/administratorLogin">{{tip}}</a></h1>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                message:"您没有登录，",
                tip:"点击此处登录"
            }
        }

    }
</script>
<style scoped>
    .message{
        position: absolute;
        top:0;
        width:100%;
        height:100%;
        background-color:#324157;
        text-align: center;
        color:#fff;

    }
    h1{
        display: block;
        margin-top:20%;
        font-weight: normal;
    }
    .message a{
        color:#20a0ff;
    }
</style>

