<template>
  <div>

    <!--头部-->
    <el-col :span="16">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-date"></i> <span class="bread">消息中心</span></el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!--帖子-->
      <el-tabs class="Navigation"  v-model="activeName"  @tab-click="handleTabClick">
        <el-tab-pane v-for="item in options" :label="item.label" :name="item.key" :key="item.key">
          <div>
            <ul class = "li">
              <li v-for="data in datalist" :key="data.msgid">
                <div class="tiezi">
                  <el-col :span="22">
                    <div class = "title-head">
                      <a @click="tieZiClick(data)" href="javascript:void(0);" class="link" title="">管理员{{data.msgtype}}了您{{data.type}}</a>
                      <pre class ="author-date">{{data.date}}</pre>
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
                        id: 1,
                        msgid:1,
                        type: 'tiezi',
                        msgtype:'删除',
                        title: 'tiezitiezitiezi',
                        date: '2017-10-16 19:13:34',
                        readflag:0
                    },
                    {
                        id:2,
                        msgid: 2,
                        type: 'pingce',
                        msgtype:'修改',
                        title: 'pingcepingcepingce',
                        date: '2017-10-17 19:13:34',
                        readflag:0
                    },
                    {
                        id:3,
                        msgid: 3,
                        type:'baike',
                        msgtype: '通过',
                        title: 'tiezitiezitiezi0',
                        date: '2017-10-18 19:13:34',
                        readflag:1
                    },
                ],
                options: [
                    {label:'未读消息', key:'newmsg'},
                    {label:'已读消息', key:'oldmsg'},
                ],
                hostURL:'/VR',
                //标签栏
                activeName: "newmsg",
                //帖子标题
                tieZiTitle:"",
                //帖子内容
                tieZiMessage:"",
                //每页帖子数量
                pageSize:10,
                //帖子总数
                pageTotal:1,
                //当前页面
                currentPage: 1
            }
        },
        methods: {
            //获取后台帖子数据
            getTieZi(page){
                var self = this;
                self.datalist=[];
                // for(var i=0;i<self.datalist.length;i++){
                //       if(self.datalist[i].type=="tiezi"){
                //         self.datalist[i].type="发表的帖子";
                //       }else if(self.datalist[i].type=="pingce"){
                //         self.datalist[i].type="发表的评测";
                //       }else if(self.datalist[i].type=="baike"){
                //         self.datalist[i].type="修改的百科词条";
                //       }
                //     }
                console.log(self.activeName)
                self.$axios({
                    url:'/msg_list/'+ page +'?readflag=' + self.activeName,
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.datalist = [];
                    self.datalist = response.data;
                    for(var i=0;i<self.datalist.length;i++){
                      if(self.datalist[i].type=="tiezi"){
                        self.datalist[i].type="发表的帖子";
                      }else if(self.datalist[i].type=="pingce"){
                        self.datalist[i].type="发表的评测";
                      }else if(self.datalist[i].type=="baike"){
                        self.datalist[i].type="修改的百科词条";
                      }
                    }
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
                    url:'/total_msg' + '?readflag=' + self.activeName,
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.pageTotal = response.data.pagetotal;
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
                // for (let i=0; i<self.options.length;i++){
                //     if(self.options[i].key*1==tieZi.readflag){
                //         localStorage.setItem("readflag", self.options[i].key);
                //     }
                // }
                self.$axios({
                    url:'/changeMsgType' + '?msgid=' + tieZi.id,
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
                localStorage.setItem("msgID",tieZi.msgid);
                localStorage.setItem("msgType",tieZi.type);
                localStorage.setItem("msgOpType",tieZi.msgtype);
                localStorage.setItem("msgTitle",tieZi.title);
                localStorage.setItem("msgDate",tieZi.date);
                self.$router.push('/user/msg?'+tieZi.id);
            },

            //标签页切换
            handleTabClick(){
                var self = this;
                //localStorage.setItem("readflag", self.activeName);
              /*
               console.log("currentPage:");
               console.log(this.currentPage);
               console.log("activeName:");
               console.log(this.activeName);
               */
                //console.log(self.themeEn);
                self.currentPage=1;
                self.getTieZi(self.currentPage);
                self.getPageTotal();
            },
        },

       mounted(){
          var self = this;
          var user_name=localStorage.getItem("ms_username");
          if(user_name==""){
              this.$router.replace('/login');
          }
          //localStorage.setItem("readflag", self.activeName);
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
    height: 60px;
    border-bottom: solid 1px #e4e4e4;
    margin-top: 30px;
  }
  .author-date{
    /*margin-top: 5px;*/
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
