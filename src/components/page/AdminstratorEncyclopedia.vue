
<template>
	<div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-edit"></i> 百科管理</el-breadcrumb-item>
                <el-breadcrumb-item>词条审核</el-breadcrumb-item>
            </el-breadcrumb>
        </div>


				<template>
  <el-table
    :data="encyclopedia_propchangerequrire"
    border
    style="width: 100% "
		max-height="500"
    @row-click='handleRowHandle'
		>

    <el-table-column  prop="requireid"  label="请求号"  width="120">  </el-table-column>
    <el-table-column    prop="keyword"  label="词条名"  width="300"></el-table-column>
    <el-table-column  prop="prop_keyword"  label="词条属性"  ></el-table-column>
		<el-table-column
      label="操作"
      width="100">
      <template scope="scope">
        <el-button @click="handleClick" size="small">查看</el-button>

      </template>
      </el-table-column>


    </el-table>
  <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page.sync="pageNum"
                layout="prev, next">
            </el-pagination>
  </div>

<div v-show="content_show">
  <h2 class="content_title">  内容概述   </h2>
  <div style="margin-top:10px;border: 1px solid #A7C942;">
    <p class="content_p" style="margin:10px;">{{ message}}</p>
  </div>
	
	<br></br>

  <div style="float:right">

  <el-button type="success" @click="open1">通过</el-button>

  <el-button type="danger" @click="open2">不通过</el-button>
  </div>
</div>
</template>

</div>






</template>

<script>


export default {

data: function(){
      return {
				msg:'',
        message: "",
        pageNum:1,
        hostURL:'/VR',
        content_show:false,
        id: '1',
        prop_id:"0",
        keyword:"",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote:"a",
        encyclopedia_propchangerequrire:[
          {
            requireid:"1",
            id: '1',
            prop_id:"0",
            keyword:"",
            prop_keyword: 'VR资讯',
            content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
            changenote:"a"
          },
          {
            requireid:"2",
            id: '1',
            prop_id:"1",
            keyword:"",
            prop_keyword: 'VR资讯',
            content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
            changenote:"a"
          },
          ]
      }
    },

    methods:{
    handleRowHandle(row ,event,column)
    {
      console.log(row.content);
      this.message =  row.content;
      this.id=row.id;
      this.prop_id=row.prop_id;
      this.keyword=row.keyword;
      this.prop_keyword=row.prop_keyword;
      this.content=row.content;
      this.changenote=row.changenote;
      this.content_show=true;
    },
    handleCurrentChange(){
      var self = this;
      console.log("current-Page:");
      console.log(self.pageNum);
      self.getRequireList();
      self.content_show=false;
    },
    open1()//通过按钮

    {
      var self=this;
      if(self.id==-1)
      {
        self.$message({
            type:'info',
            message:'修改失败，请选择一项请求'
            });
        return;
      }

      var updatedata={
        id: '1',
        prop_id:"0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote:"a"
      };
      updatedata.id=self.id;
      updatedata.prop_id=self.prop_id;
      updatedata.prop_keyword=self.prop_keyword;
      updatedata.content=self.content;
      updatedata.changenote=self.changenote;

      self.$axios({
          url:'/encyclopedia-propRequireOpen1',
          method:'post',
          baseURL: self.hostURL,
          data:updatedata
      }).then((response)=>{
        var state=response.data;
        if(state==1){
          self.$message({
            type:'info',
            message:'修改成功'
            });
            self.getRequireList();
            self.id=-1;
            self.prop_id=-1;
            self.message='';
            self.content_show=false;
        }
        else{
          self.$message({
            type:'info',
            message:'修改失败'
            });
        }
      }).catch((error)=>{
          console.log(error);
      });


    },
    open2()//不通过按钮
    {
      var self=this;
      if(self.id==-1)
      {
        self.$message({
            type:'info',
            message:'删除失败，请选择一项请求'
            });
        return;
      }
      var updatedata={
        id: '1',
        prop_id:"0",
        prop_keyword: 'VR资讯',
        content: 'VR资源网产业新闻频道,为您带来最新的VR行业新闻、虚拟现实最新设备资讯、VR投资创业相关资讯。',
        changenote:"a"
      };
      updatedata.id=self.id;
      updatedata.prop_id=self.prop_id;
      updatedata.prop_keyword=self.prop_keyword;
      updatedata.content=self.content;
      updatedata.changenote=self.changenote;
      self.$axios({
          url:'/encyclopedia-propRequireOpen2',
          method:'post',
          baseURL: self.hostURL,
          data:updatedata
      }).then((response)=>{
        var state=response.data;
        if(state==1){
          self.$message({
            type:'info',
            message:'删除成功'
            });
            self.getRequireList();
            self.id=-1;
            self.prop_id=-1;
            self.message='';
            self.content_show=false;
        }
        else{
          self.$message({
            type:'info',
            message:'删除失败'
            });
        }
      }).catch((error)=>{
          console.log(error);
      });


    },
    /*
            .then(() => {
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              });
            }

    */
    getRequireList(){
      var self=this;
      var page=self.pageNum;
      self.encyclopedia_propchangerequrire=[];
      self.$axios({
          url:'/encyclopedia-propRequire/'+page,
          method:'get',
          baseURL: self.hostURL,
      }).then((response)=>{
        self.encyclopedia_propchangerequrire=response.data;
      }).catch((error)=>{
          console.log(error);
      });


    }
  },
  mounted(){
    var self=this;
    self.getRequireList();

  }


  }
</script>


<style>
.content {
        float: left;
        width: 70%;
    }
.content_title{
text-align: center;
text-transform: uppercase;
color: #A7C942;
}
.content_p{
text-indent: 50px;
text-align:justify;
letter-spacing:3px;
}
.pagination{
    margin-left:50px;
}

.crumbs{
    text-decoration: none;
}

</style>
