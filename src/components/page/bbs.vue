<template>
  <div>

    <!--头部-->
    <el-col :span="16">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-date"></i> <span class="bread">VR论坛</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!--帖子-->
      <el-tabs class="Navigation"  v-model="activeName"  @tab-click="handleTabClick">
        <el-tab-pane v-for="item in options" :label="item.label" :name="item.key" :key="item.key">
          <div>
            <ul class = "li">
              <li v-for="data in datalist" :key="data.id">
                <div class="tiezi">
                  <el-col :span="2" >
                    <div class = "response">{{data.totalComments}}</div>
                  </el-col>
                  <el-col :span="22">
                    <div class = "title-head">
                      <a @click="tieZiClick(data)" href="javascript:void(0);" class="link" title="">{{data.title}}</a>
                      <pre class ="author-date"><span>{{data.posterName}}</span>     {{data.date}}</pre>
                    </div>
                  </el-col>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>

      <!--换页-->
      <div style ="margin-top: 25px">
        <el-pagination
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="pageTotal"
                align="center"
                @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </el-col>

    <!--发帖按钮-->
    <el-col :span="5" :offset="1"  class ="button">
      <el-tooltip content="发帖" placement="right" effect="light">
        <div class="post" @click = "handlePost"></div>
      </el-tooltip>
      <el-tooltip content="刷新" placement="right" effect="light">
        <div class="refresh" @click = "refresh"></div>
      </el-tooltip>
      <!--<el-tooltip content="分享" placement="right" effect="light">
        <div class="share" @click = "scrollMe"></div>
      </el-tooltip>-->
    </el-col>
  </div>
</template>

<script>
    import ElInput from "../../../node_modules/element-ui/packages/input/src/input";
    import ElTabPane from "../../../node_modules/element-ui/packages/tabs/src/tab-pane";
    export default{
        components: {
            ElTabPane,
            ElInput},
        data(){
            return {
                datalist: [{
                    id: '1',
                    theme: 'discussion',
                    good: false,
                    title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                    contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                    date: '2017/8/10',
                    posterId: 'kijj',
                    posterName: '我',
                    totalComments: '1',
                    upvote: 0,
                    downvote:0
                },
                    {
                        id: '1',
                        theme: 'share',
                        good: false,
                        title: '房间时代峰峻客户',
                        contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                        date: '2017/8/10',
                        posterId: 'kijj',
                        posterName: '我',
                        totalComments: '1',
                        upvote: 0,
                        downvote:0
                    },
                    {
                        id: '1',
                        theme: 'help',
                        good: false,
                        title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                        contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                        date: '2017/8/10',
                        posterId: 'kijj',
                        posterName: '我',
                        totalComments: '1',
                        upvote: 0,
                        downvote:0
                    },
                    {
                        id: '1',
                        theme: 'tutorial',
                        good: false,
                        title: '好难',
                        contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                        date: '2017/8/10',
                        posterId: 'kijj',
                        posterName: '我',
                        totalComments: '1',
                        upvote: 0,
                        downvote:0
                    },
                    {
                        id: '1',
                        theme: 'evaluation',
                        good: false,
                        title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                        contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                        date: '2017/8/10',
                        posterId: 'kijj',
                        posterName: '我',
                        totalComments: '1',
                        upvote: 0,
                        downvote:0
                    },
                    {
                        id: '1',
                        theme: 'phonevr',
                        good: false,
                        title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                        contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                        date: '2017/8/10',
                        posterId: 'kijj',
                        posterName: '我',
                        totalComments: '1',
                        upvote: 0,
                        downvote:0
                    },
                    {
                        id: '1',
                        theme: 'computervr',
                        good: false,
                        title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                        contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                        date: '2017/8/10',
                        posterId: 'kijj',
                        posterName: '我',
                        totalComments: '1',
                        upvote: 0,
                        downvote:0
                    },
                    {
                        id: '1',
                        theme: '讨论',
                        good: false,
                        title: '是的尽快发货健康就好刷卡的房间黑科技好看下次时代峰峻和新街口 ',
                        contents: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
                        date: '2017/8/10',
                        posterId: 'kijj',
                        posterName: '我',
                        totalComments: '1',
                        upvote: 0,
                        downvote:0
                    },
                ],
                options: [
                    {label:'全部', key:'all'},
                    {label:'精品', key:'good'},
                    {label:'讨论', key:'discussion'},
                    {label:'分享', key:'share'},
                    {label:'求助', key:'help'},
                    {label:'教程', key:'tutorial'},
                    {label:'评测', key:'evaluation'},
                    {label:'手机VR', key:'phonevr'},
                    {label:'电脑VR', key:'computervr'}
                ],
                hostURL:'/VR',
                //标签栏
                activeName: "all",
                //帖子标题
                tieZiTitle:"",
                //帖子内容
                tieZiMessage:"",
                //每页帖子数量
                pageSize:10,
                //帖子总数
                pageTotal:100,
                //当前页面
                currentPage: 1
            }
        },
        methods: {
            //获取后台帖子数据
            getTieZi(page){
                var self = this;
                self.datalist=[];
                self.$axios({
                    url:'/bbs_list/'+ page +'?theme=' + localStorage.getItem("theme"),
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.datalist = [];
                    self.datalist = response.data;
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },

            //获取贴子总数
            getPageTotal(){
                var self = this;
                self.$axios({
                    url:'/total_post' + '?theme=' + localStorage.getItem("theme"),
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.pageTotal = response.data;
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },

            //下一页
            handleCurrentChange() {
                var self = this;
                console.log("currentPage:");
                console.log(self.currentPage);
                self.getTieZi(self.currentPage);
            },

            //点击进入帖子
            tieZiClick(tieZi){
                var self=this;
                for (let i=0; i<self.options.length;i++){
                    if(self.options[i].key==tieZi.theme){
                        localStorage.setItem("tieZiTheme", self.options[i].label);
                    }
                }
                localStorage.setItem("tieZiID",tieZi.id);
                localStorage.setItem("tieZiGood",tieZi.good);
                localStorage.setItem("tieZiTitle",tieZi.title);
                localStorage.setItem("tieZiContents",tieZi.contents);
                localStorage.setItem("tieZiDate",tieZi.date);
                localStorage.setItem("tieZiPosterId",tieZi.posterId);
                localStorage.setItem("tieZiPosterName",tieZi.posterName);
                localStorage.setItem("tieZiTotalComments",tieZi.totalComments);
                localStorage.setItem("tieZiTotalUpVote",tieZi.upvote);
                localStorage.setItem("tieZiTotalDownVote",tieZi.downvote);
                self.$router.push('/user/tieZi?'+tieZi.id);
            },

            //发帖按钮处理
            handlePost(){
                var self=this;
                self.$router.push('/user/Post');
            },

            //标签页切换
            handleTabClick(){
                var self = this;
                localStorage.setItem("theme", self.activeName);
              /*
               console.log("currentPage:");
               console.log(this.currentPage);
               console.log("activeName:");
               console.log(this.activeName);
               */
                //console.log(self.themeEn);
                self.getTieZi(self.currentPage);
                self.getPageTotal();
            },
            //刷新页面
            refresh(){
                location.reload(true);
            }
        },

       mounted(){
          var self = this;
          var user_name=localStorage.getItem("ms_username");
          if(user_name==""){
              this.$router.replace('/login');
          }
          localStorage.setItem("theme", self.activeName);
          self.getTieZi(self.currentPage);
          self.getPageTotal();
       }
    }
</script>

<style scoped>
  .crumbs{
    text-decoration: none;
  }
  .bread{
    font-size: 13px;
    color:#48576a;
  }
  .Navigation{
    margin: 30px 0 0 0;
  }
  .li {
    list-style:none;
  }
  .tiezi {
    height: 100px;
    border-bottom: solid 1px #e4e4e4;
    margin-top: 30px;
  }
  .author-date{
    margin-top: 5px;
    text-align: right;
    color: #8391a5;
    font-size: 12px;
    font-family:"Microsoft Yahei";
  }
  .title-head{
    margin-top: 15px;
    margin-left: 10px;
  }
  .link{
    color: #324057;
  }
  a.link:hover{
    color: #20A0FF;
  }
  .response{
    padding-top: 20px;
    height: 60px;
    width: 70px;
    background-image: url("../../assets/response.png");
    background-repeat: no-repeat;
    background-size: 70px 60px;
    text-align: center;
    color: #8a8a8a;
    font-size: 16px;
  }
  .button{
    margin-top: 130px;
  }
  .post{
    position: fixed;
    width:40px;
    height: 40px;
    border: 1px solid #E5E9F2;
    background-color: #4db3ff;
    background-image: url("../../assets/post.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  div.post:hover {
    border-color: #73ccff;
    background-color: #73ccff;
  }
  .refresh{
    margin-top: 60px;
    position: fixed;
    width:40px;
    height: 40px;
    border: 1px solid #E5E9F2;
    background-image: url("../../assets/refresh.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  div.refresh:hover {
    border-color: #73ccff;
  }
  .share{
    margin-top: 110px;
    position: fixed;
    width:40px;
    height: 40px;
    border: 1px solid #E5E9F2;
    background-image: url("../../assets/share.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  div.share:hover {
    border-color: #73ccff;
  }
</style>
