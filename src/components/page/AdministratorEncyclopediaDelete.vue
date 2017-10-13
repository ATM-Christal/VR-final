
<template>

<div >
<div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-edit"></i> 百科管理</el-breadcrumb-item>
                <el-breadcrumb-item>词条删除</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
<el-input v-model="search" placeholder="请输入词条属性"style="width: 500px;margin-bottom:20px"></el-input>
<el-button type="primary" icon="search"@click="getEncyclopedia()">搜索</el-button>



  <el-table
     :data="tableData"
     border
     width=700
     max-height="500">
     <el-table-column
       prop="id"
       label="词条编号"
       width=130>
     </el-table-column>
     
     <el-table-column
       prop="keyword"
       label="词条名"
       width=200>
     </el-table-column>
     <el-table-column
       prop="prop_keyword"
       label="词条属性">
     </el-table-column>
     <el-table-column
       label="操作"
       width=120>
       <template scope="scope">
         <el-button
           @click.native.prevent="deleteRow(scope.$index, tableData)"
           type="danger"
           size="small">
           删除
         </el-button>
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


</div>
</template>



<script>
export default {
  
    data() {
      return {
        search:'',
        hostURL:'/VR',
        activePane: 'first',
                // data:[
                //     {"encyclopedia":
                //         {"id":2,
                //          "keyword":"VR应用",
                //          "type":"VR应用",
                //          "changenote":"changenote2",
                //          "upvote":1,
                //          "downvote":0},
                //          "encyclopedia_prop":[
                //              {"id":2,
                //               "prop_id":0,
                //               "prop_keyword":"1.地产漫游",
                //               "content":"在虚拟现实系统中自由行走、任意观看，冲击力强，能使客户获得身临其境的真实感受，促进了合同签约的速度。",
                //               "changenote":"changenote2.0"},
                //              {"id":2,
                //               "prop_id":1,
                //               "prop_keyword":"2.虚拟样板间",
                //               "content":"用于商业项目长期招商、招租、用于各类评比活动。一次性投入，可以应用在项目报批、建设、销售、招商招租等各个环节，并可以永久使用。",
                //               "changenote":"changenote2.1"},
                //              {"id":2,
                //               "prop_id":2,
                //               "prop_keyword":"3.多专业协调",
                //               "content":"多类型车辆行驶路线与其他布置、净空高度，如道路桥梁仿真。",
                //               "changenote":"changenote2.2"}]
                //         }],
            tableData:[],
            // tableData:[
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"1.地产漫游"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"2.虚拟样板间"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"1.地产漫游"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"2.虚拟样板间"},
            //      {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"1.地产漫游"},
            //     {"id":2,
            //      "keyword":"VR应用",
            //      "prop_keyword":"2.虚拟样板间"},],
        // encyclopediaList:[
        //     {
        //         id:1,
        //         classify:'一级目录名',
        //         keyword:'二级目录名',
        //         type:"",
        //         changenote:'who change',
        //         firstprop:'2222222222222222',
        //     },
        //     {
        //         id:2,
        //         keyword:'ffffffff',
        //         type:"",
        //         changenote:'1111111111111111111111111111111111',
        //         firstprop:'222222222222',
        //     }
        // ],
        pageNum:1,
      }
    },
    methods:{
    handleCurrentChange(){
        console.log(this.pageNum);
        this.getData(this.pageNum);
    },
    deleteRow(index,encyclopediaList){
    var self=this;
    var deleteData = {
            prop_keyword:"",
            pageNum:1
        };
        deleteData.prop_keyword=self.tableData[index].prop_keyword;
        deleteData.pageNum=self.pageNum;
        self.$axios({
            url:'/encyclopediaDelete',
            method:'post',
            baseURL:self.hostURL,
            data:deleteData
        }).then((response)=>{
            var state=response.data;
            if(state==0){
                self.$message({
                type:'info',
                message:'删除失败，该词条还有修改请求未处理'
                });
            }
            else{
                self.$message({
                type:'info',
                message:'删除成功'
                });
                self.tableData.splice(index,1);
            }
            
        }).catch((error)=>{
            self.$message({
                type:'info',
                message:'connect fail'
            });
        });

    },
    getEncyclopedia(){
        var self = this;
        self.encyclopediaList=[];
        var searchData = {
            keyword:"",
            pageNum:1
        };
        searchData.keyword=self.search;
        searchData.pageNum=self.pageNum;
        self.$axios({
            url:'/encyclopediaSearch',
            method:'post',
            baseURL:self.hostURL,
            data:searchData
        }).then((response)=>{
            self.tableData = [];
            self.tableData = response.data;
        }).catch((error)=>{
            self.$message({
                type:'info',
                message:'connect fail'
            });
        });
    },
    getData(pn){
        var self = this;
        self.$axios({
            url: '/encyclopedia/getall/'+pn,
            method: 'get',
            baseURL: self.hostURL,
        }).then((response)=> {
            self.tableData=[];
            var data=response.data;
            for(var i=0;i<data.length;i++){
                var sub=data[i].encyclopedia_prop;
                for(var j=0;j<sub.length;j++){
                    self.tableData.push({id:data[i].encyclopedia.id,
                                keyword:data[i].encyclopedia.keyword,
                                prop_keyword:sub[j].prop_keyword});
                }
                
            }
        }).catch((error)=> {
            console.log(error);
        });
    }

  },
  mounted(){
    var self = this;
    // self.items=[];
    self.getData(self.pageNum);
  },
  }

</script>





<style>
.content {
        float: left;
        width: 70%;
    }

.pagination {
  margin-left:50px;
}

.crumbs {
  text-decoration: none;
}
</style>
