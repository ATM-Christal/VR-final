<template>
    <div>
        <!--帖子列表-->
        <p class="title1">
            帖子列表
        </p>
        <div class="list-btn-ground" style="margin-bottom: 20px">
            <el-row>
                <el-col :span="8">
                    <el-button type="danger" @click="del1">删除选中帖</el-button>
                    <el-button type="warning" @click="dialogFormVisible4 = true">发帖</el-button>
                    <el-button type="success" @click="refresh()">刷新页面</el-button>
                    <el-dialog class="class1" title="发帖" :visible.sync="dialogFormVisible4" style="width: 100%" size="small">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  size="small" class="class2">
                            <el-row>
                                <el-col :span="22">
                                    <el-form-item label="标题" :label-width="formLabelWidth" prop="title" >
                                        <el-input class="class1" v-model="ruleForm.title" auto-complete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="内容" :label-width="formLabelWidth" prop="contents">
                                        <quill-editor ref="myTextEditor2" v-model="ruleForm.contents" :options="editorOption" style="line-height: 1;"></quill-editor>
                                        <!--<el-input type="textarea" :rows="15" class="class1" v-model="ruleForm.contents" auto-complete="off"></el-input>-->
                                    </el-form-item>
                                    <el-form-item  class="class1" prop="theme">
                                        <el-select v-model="ruleForm.theme" placeholder="请选择主题">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.name">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="success" @click="handlePost('ruleForm',ruleForm)">确定发帖</el-button>
                            <el-button type="warning" @click="handleclose()">关闭窗口</el-button>
                        </div>
                    </el-dialog>
                </el-col>
                <el-col :span="3">
                    <div >
                        <el-select v-model="select"  placeholder="请选择属性" >
                            <el-option label="用户名" value="1"></el-option>
                            <el-option label="发布日期" value="2"></el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="6" >
                    <div >
                        <el-input placeholder="请输入对应字符串进行查找" v-model="str" >
                            <el-button slot="append" type ="primary" icon="search" @click="search()"></el-button>
                        </el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-table
                ref="multipleTable"
                :data="tableData1"
                border
                max-height="500"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange1">
            <el-table-column
                    type="selection"
                    width="80"
                    fixed>
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="序号"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="title"
                    label="标题"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="内容"
                    width="250">
                <template scope="scope">
                    <div v-html="bbsInfo(scope.row.contents)"></div>
                </template>
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="发帖日期"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="posterId"
                    label="用户ID"
                    width="125">
            </el-table-column>
            <el-table-column
                    prop="posterName"
                    label="用户名"
                    width="140">
            </el-table-column>
            <el-table-column
                    prop="totalComments"
                    label="评论数"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="theme"
                    label="主题"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="upvote"
                    label="点赞数"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="downvote"
                    label="踩数"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="good"
                    label="精品贴"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="430">
                <template scope="scope">
                    <el-button class="list-btn-ground" type="primary" size="small" @click="getData2(scope.row)" >查看</el-button>
                    <el-button class="list-btn-ground" type="" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button class="list-btn-ground" v-show="scope.row.good=='否'" type="success" @click="up(scope.row)" size="small" icon="edit">加精</el-button>
                    <el-button class="list-btn-ground" v-show="scope.row.good=='是'" type="warning" @click="down(scope.row)" size="small" icon="check">取精</el-button>
                    <!-- <el-button class="list-btn-ground" :plain="true" type="warning" size="small" @click="up(scope.row)">加精</el-button>-->
                    <!--<el-button class="list-btn-ground" type="success" size="small" @click="edit1(scope.row)" >完成并刷新</el-button>-->

                    <!--<el-dialog class="class1" title="编辑" :modal-append-to-body="false" :visible.sync="dialogFormVisible1" style="width: 100%" size="small">-->
                    <el-dialog class="class1" title="编辑" :visible.sync="dialogFormVisible1" style="width: 100%" size="small">
                        <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" size="small" class="class2">
                            <el-row>
                                <el-col :span="22">
                                    <el-form-item label="标题" :label-width="formLabelWidth" prop="title" >
                                        <el-input class="class1" v-model="ruleForm2.title" auto-complete="off"></el-input>
                                    </el-form-item>
                                    <el-form-item label="内容" :label-width="formLabelWidth" prop="contents">
                                        <quill-editor ref="myTextEditor" v-model="ruleForm2.contents" :options="editorOption" style="line-height: 1;"></quill-editor>
                                        <!--<el-input type="textarea" :rows="15" class="class1" v-model="ruleForm.contents" auto-complete="off"></el-input>-->
                                    </el-form-item>
                                    <el-form-item  class="class1" prop="theme">
                                        <el-select v-model="ruleForm2.theme" placeholder="请选择主题">
                                            <el-option
                                                    v-for="item in options"
                                                    :key="item.value"
                                                    :label="item.label"
                                                    :value="item.name">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item class="class1">
                                        <el-button type="primary" @click="handleSave('ruleForm2')" >保存并关闭窗口</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-dialog>
                </template>
            </el-table-column>
        </el-table>
        

        <!--选中帖子后展示帖子中的评论-->
        <el-row v-show="display_comm">
            <el-col :offset="0" >
                <p class=title1>
                    评论一览
                </p>
                <div class="list-btn-ground">
                    <el-button type="danger" @click="del2">删除选中评论</el-button>
                </div>
                <el-table
                        ref="multipleTable"
                        :data="tableData2"
                        border
                        max-height="500"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange2">
                    <el-table-column
                            type="selection"
                            width="80">
                    </el-table-column>
                    <!--<el-table-column
                            prop="id"
                            label="序号"
                            width="120">
                    </el-table-column>-->
                    <el-table-column
                    label="序号"
                    type="index"
                    width="120">
                    </el-table-column>
                    <el-table-column
                            prop="message"
                            label="内容"
                            width="332">
                    </el-table-column>
                    <el-table-column
                            prop="upvote"
                            label="点赞数"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="belong"
                            label="所属帖子"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="releasetime"
                            label="发布时间"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="300">
                        <template scope="scope">
                            <el-button class="list-btn-ground" type="primary" size="small" @click="getData3(scope.row)">查看</el-button>
                            <el-button class="list-btn-ground" type="primary" size="small" @click="dialogFormVisible2 = true">编辑</el-button>
                            <el-button class="list-btn-ground" type="success" size="small" @click="edit2(scope.row)" >完成并刷新</el-button>

                            <el-dialog class="class1" title="编辑" :visible.sync="dialogFormVisible2" style="width: 100%" size="small">
                                <el-form  size="small" class="class2">
                                    <el-row>
                                        <el-col :span="22">
                                            <el-form-item label="评论" :label-width="formLabelWidth" >
                                                <el-input class="class1" v-model="message" auto-complete="off"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button type="primary" @click="dialogFormVisible2 = false">保存并关闭窗口</el-button>
                                </div>
                            </el-dialog>
                        </template>
                    </el-table-column>
                </el-table>
                
            </el-col>
        </el-row>
        <el-row v-show="display_subcomm">
            <el-col :offset="0">
                <p class=title1>
                    嵌套评论
                </p>
                <div class="list-btn-ground">
                    <el-button type="danger" @click="del3">删除选中回复</el-button>
                </div>
                <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        border
                        max-height="500"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange3">
                    <el-table-column
                            type="selection"
                            width="80">
                    </el-table-column>
                    <!--<el-table-column
                            prop="id"
                            label="序号"
                            width="132">
                    </el-table-column>-->
                    <el-table-column
                    label="序号"
                    type="index"
                    width="132">
                    </el-table-column>
                    <el-table-column
                            prop="messageLeaving"
                            label="所属母评论"
                            width="197">
                    </el-table-column>
                    <el-table-column
                            prop="messageResponse"
                            label="回复信息"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="releasetime"
                            label="发布时间"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            label="操作">
                        <template scope="scope">
                            <el-button class="list-btn-ground" type="primary" size="small" @click="dialogFormVisible3 = true">编辑</el-button>
                            <el-button class="list-btn-ground" type="success" size="small" @click="edit3(scope.row)" >完成并刷新</el-button>

                            <el-dialog class="class1" title="编辑" :visible.sync="dialogFormVisible3" style="width: 100%" size="small">
                                <el-form  size="small" class="class2">
                                    <el-row>
                                        <el-col :span="22">
                                            <el-form-item label="评论" :label-width="formLabelWidth" >
                                                <el-input class="class1" v-model="response" auto-complete="off"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                    <el-button type="primary" @click="dialogFormVisible3 = false">关闭窗口</el-button>
                                </div>
                            </el-dialog>
                        </template>
                    </el-table-column>
                </el-table>
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { quillEditor } from 'vue-quill-editor';
    export default {
        components: {
            quillEditor
        },
        data() {
            return {
                editorOption: {
                    modules: {
                        toolbar: [
                            [{ 'header': [2, 3, false] }],
                            ['bold', 'italic'],
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                            ['image']
                        ]
                    },
                    placeholder: '请编写您的内容...',
                },
                tableData1:[],
//                tableData1:[{id:1,title:'fff',contents:'jfSjkefndbsrvklaefblvkdfblkvhsfbjv',date:'8888888',posterId:55,posterName:'ddd',totalComments:56,theme:'ff',upvote:0,downvote:0,good:false}],
                tableData2:[{}],
                tableData3:[{}],
                hostURL:'/VR',
//                hostURL:'http://119.23.175.192:8080/VR',
                display_comm:false,
                display_subcomm:false,
                dialogFormVisible1: false,
                dialogFormVisible2: false,
                dialogFormVisible3: false,
                dialogFormVisible4: false,
                ruleForm: {
                    title: '',
                    contents: '',
                    theme: ''
                },
                ruleForm2: {
                    id:null,
                    title: '',
                    contents: '',
                    theme: ''
                },
                rules: {
                    title: [
                        { required: true, message: '请输入帖子标题', trigger: 'blur' }
                    ],
                    contents: [
                        { required: true, message: '请输入帖子内容', trigger: 'blur' }
                    ],
                    theme: [
                        { required: true, message: '请选择帖子主题', trigger: 'change' }
                    ]
                },
                str:'' ,
                select:'',
                message: '',
                response: '',
                options: [
                    {label:'讨论', name:'discussion'},
                    {label:'分享', name:'share'},
                    {label:'求助', name:'help'},
                    {label:'教程', name:'tutorial'},
                    {label:'评测', name:'evaluation'},
                    {label:'手机VR', name:'phonevr'},
                    {label:'电脑VR', name:'computervr'}
                ],
                formLabelWidth: '120px',
                tiezi1:{id:''},
                comment:{id:''},
            }

        },
        methods: {
            bbsInfo(str){
                var res1 = str.replace(/<img[^>]+>/ig,"")
                var res = res1.replace(/h[2,3]/ig,"p")
                return res;
            },
            handleSelectionChange1(val) {
                this.multipleSelection1 = val;
            },
            handleSelectionChange2(val) {
                this.multipleSelection2 = val;
            },
            handleSelectionChange3(val) {
                this.multipleSelection3 = val;
            },
            handleEdit(item){
//                this.teizi = item;
//                console.log(this.ruleForm2.id)
                this.dialogFormVisible1 = true
                this.ruleForm2 = item;
            },
            handleclose(){
                let self = this;
                self.ruleForm.title='';
                self.ruleForm.contents='';
                self.ruleForm.theme='';
                self.dialogFormVisible4 = false;
            },
            //获取帖子列表
            getData1(){
                var self = this;
                self.$axios({
                    url:'/adminPostSList',
                    method:'get',
                    baseURL:self.hostURL
                }).then((response)=>{
                    self.tableData1 = [];
                    self.tableData1 = response.data;
                    for(var i=0;i<self.tableData1.length;i++){
                        if(self.tableData1[i].theme=='discussion'){
                            self.tableData1[i].theme='讨论';
                        }
                        if(self.tableData1[i].theme=='share'){
                            self.tableData1[i].theme='分享';
                        }
                        if(self.tableData1[i].theme=='help'){
                            self.tableData1[i].theme='求助';
                        }
                        if(self.tableData1[i].theme=='tutorial'){
                            self.tableData1[i].theme='教程';
                        }
                        if(self.tableData1[i].theme=='evaluation'){
                            self.tableData1[i].theme='评测';
                        }
                        if(self.tableData1[i].theme=='phonevr'){
                            self.tableData1[i].theme='手机VR';
                        }
                        if(self.tableData1[i].theme=='computervr'){
                            self.tableData1[i].theme='电脑VR';
                        }
                        if(self.tableData1[i].good==true){
                            self.tableData1[i].good="是";
                        }
                        if(self.tableData1[i].good==1){
                            self.tableData1[i].good="是";
                        }
                        if(self.tableData1[i].good==false){
                            self.tableData1[i].good="否";
                        }
                        if(self.tableData1[i].good==0){
                            self.tableData1[i].good="否";
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
            //传数据，选中帖子
            getData2(tiezi){
                console.log(tiezi.id);
                this.tiezi1=tiezi;
                var self=this;
                self.$axios({
                    url:'/adminPostCommentList/'+tiezi.id, //{tid}
                    method:'get',
                    baseURL: self.hostURL,
                }).then((response)=>{
                    self.tableData2 = [];
                    self.tableData2 = response.data;
                    self.display_comm=true;
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },
            getData3(tiezi){
                console.log(tiezi.id);
                this.comment=tiezi;
                var self=this;
                self.$axios({
                    url:'/adminPostResponseList/'+tiezi.id, //{tid}
                    method:'get',
                    baseURL: self.hostURL,
                }).then((response)=>{
                    self.tableData3 = [];
                    self.tableData3 = response.data;
                    for(var i=0;i<self.tableData3.length;i++){
                        self.tableData3[i].messageLeaving=tiezi.id;
                    }
                    self.display_subcomm=true;
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });
            },
            //传数据删除帖子
            del1(){
                for(var i=0; i<this.multipleSelection1.length;i++){
                    for(var j=0;j<this.tableData1.length;j++){
                        if(this.tableData1[j].id==this.multipleSelection1[i].id){
                            this.tableData1.splice(j,1);
                        }
                    }
                }
                var temp=new Array();
                console.log(this.multipleSelection1.length);
                for(var x=0;x<this.multipleSelection1.length;x++){
                    temp.push(this.multipleSelection1[x].id);
                    console.log(this.multipleSelection1[x].id);
                }

                var self=this;
                self.$axios({
                    url:'/adminPostDelete',
                    method:'post',
                    baseURL: self.hostURL,
                    data:temp
                }).catch((error)=>{
                    console.log(error);
                });
                this.$message({
                    type: 'success',
                    message:'删除成功'
                });
            },
            del2(){
                for(var i=0; i<this.multipleSelection2.length;i++){
                    for(var j=0;j<this.tableData2.length;j++){
                        if(this.tableData2[j].id==this.multipleSelection2[i].id){
                            this.tableData2.splice(j,1);
                        }
                    }
                }
                var temp=new Array();
                console.log(this.multipleSelection2.length);
                for(var x=0;x<this.multipleSelection2.length;x++){
                    temp.push(this.multipleSelection2[x].id);
                    console.log(this.multipleSelection2[x].id);
                }
                var self=this;
                self.$axios({
                    url:'/adminPostCommentDelete',
                    method:'post',
                    baseURL: self.hostURL,
                    data:temp
                }).catch((error)=>{
                    console.log(error);
                });
                this.$message({
                    type: 'success',
                    message:'删除成功'
                });
            },
            del3(){
                for(var i=0; i<this.multipleSelection3.length;i++){
                    for(var j=0;j<this.tableData3.length;j++){
                        if(this.tableData3[j].id==this.multipleSelection3[i].id){
                            this.tableData3.splice(j,1);
                        }
                    }
                }
                var temp=new Array();
                console.log(this.multipleSelection3.length);
                for(var x=0;x<this.multipleSelection3.length;x++){
                    temp.push(this.multipleSelection3[x].id);
                    console.log(this.multipleSelection3[x].id);
                }
                var self=this;
                self.$axios({
                    url:'/adminPostResponseDelete',
                    method:'post',
                    baseURL: self.hostURL,
                    data:temp
                }).catch((error)=>{
                    console.log(error);
                });
                this.$message({
                    type: 'success',
                    message:'删除成功'
                });
            },
            postTiezi(item){
                /*console.log(this.ruleForm.title);
                console.log(this.ruleForm.contents);
                console.log(this.ruleForm.theme);*/
                var self=this;
                self.$axios({
                    url:'/adminPostAdd',
                    method:'post',
                    baseURL: self.hostURL,
                    data:{
                        title: item.title,
                        contents: item.contents,
                        theme: item.theme,
                        AdminId: '1'
                    }
                }).then((response)=>{
                    self.$message({
                        type: 'success',
                        message:'发帖成功'
                    });
                    self.getData1();
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type: 'error',
                        message:'connect fail'
                    });
                });
                self.ruleForm.title='';
                self.ruleForm.contents='';
                self.ruleForm.theme='';
            },
            refresh(){
                location.reload();
            },
            search(){
                console.log(this.select);
                console.log(this.str);
                var self=this;
                var temp;
                if(this.select==1){
                    temp='posterName';
                }
                if(this.select==2){
                    temp='date';
                }
                console.log(temp);
                self.$axios({
                    url:'/adminPostFind/'+temp + '?find=' + this.str,
                    method:'get',
                    baseURL: self.hostURL,
                    /*data:{
                     option: temp,
                     find: this.str
                     }*/
                }).then((response)=>{
                    var newTable = response.data;
                    this.tableData1.splice(0,this.tableData1.length);
                    for(var i=0;i<newTable.length;i++){
                        this.tableData1.splice(i,1,newTable[i]);
                    }
                }).catch((error)=>{
                    console.log(error);
                    self.$message({
                        type:'info',
                        message:'connect fail'
                    });
                });

            },
            up(tiezi){
                console.log(tiezi.id);
                const index = this.tableData1.indexOf(tiezi);
                var updatedData=this.tableData1[index];
                updatedData.good='是';
                this.tableData1.splice(index, 1,updatedData);
                var self=this;
                self.$axios({
                    url:'/adminPostSetGood/'+tiezi.id,
                    method:'post',
                    baseURL: self.hostURL,
                    data: {good:1}
                }).catch((error)=>{
                    console.log(error);
                });
            },
            down(tiezi){
                console.log(tiezi.id);
                const index = this.tableData1.indexOf(tiezi);
                var updatedData=this.tableData1[index];
                updatedData.good='否';
                this.tableData1.splice(index, 1,updatedData);
                var self=this;
                self.$axios({
                    url:'/adminPostSetGood/'+tiezi.id,
                    method:'post',
                    baseURL: self.hostURL,
                    data: {good:0}
                }).catch((error)=>{
                    console.log(error);
                });
            },
            handleSave(formName){
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogFormVisible1 = false;
                        this.edit1();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handlePost(formName,item){
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.dialogFormVisible4 = false;
                        this.postTiezi(item);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            edit1(){
                /* form: {
                 title: '',
                 contents: '',
                 theme: ''
                 },*/

//                console.log(tiezi.id);
                /*console.log(this.ruleForm2.title);
                console.log(this.ruleForm2.contents);
                console.log(this.ruleForm2.theme);*/
                if( this.ruleForm2.title==''||this.ruleForm2.contents==''||this.ruleForm2.theme==''){
                    this.$message({
                        type: 'warning',
                        message:'未完成编辑'
                    });
                }
                else{
                    const index = this.tableData1.indexOf(this.ruleForm2);
                    var updatedData=this.tableData1[index];
                    updatedData.title=this.ruleForm2.title;
                    updatedData.contents=this.ruleForm2.contents;
                    updatedData.theme=this.ruleForm2.theme;
                    if(updatedData.theme=='discussion'){
                        updatedData.theme='讨论';
                    }
                    if(updatedData.theme=='share'){
                        updatedData.theme='分享';
                    }
                    if(updatedData.theme=='help'){
                        updatedData.theme='求助';
                    }
                    if(updatedData.theme=='tutorial'){
                        updatedData.theme='教程';
                    }
                    if(updatedData.theme=='evaluation'){
                        updatedData.theme='评测';
                    }
                    if(updatedData.theme=='phonevr'){
                        updatedData.theme='手机VR';
                    }
                    if(updatedData.theme=='computervr'){
                        updatedData.theme='电脑VR';
                    }
                    this.tableData1.splice(index, 1,updatedData);

                    console.log(updatedData);
                    var self=this;
                    self.$axios({
                        url:'/adminPostUpdate/'+this.ruleForm2.id,
                        method:'post',
                        baseURL: self.hostURL,
                        data:{
                            title: this.ruleForm2.title,
                            contents: this.ruleForm2.contents,
                            theme: this.ruleForm2.theme
                        }
                    }).then((response)=>{
                        this.$message({
                            type: 'success',
                            message:'保存成功'
                        });
                        this.getData1();
                    }).catch((error)=>{
                        console.log(error);
                    });
                    this.ruleForm2.title='';
                    this.ruleForm2.id=null;
                    this.ruleForm2.contents='';
                    this.ruleForm2.theme='';
                }

            },
            edit2(tiezi){
                if(this.message==''){
                    this.$message({
                        type: 'warning',
                        message:'未完成编辑'
                    });
                }
                else{
                    console.log(tiezi.id);
                    console.log(this.message);

                    const index = this.tableData2.indexOf(tiezi);
                    var updatedData=this.tableData2[index];
                    updatedData.message=this.message;
                    this.tableData2.splice(index, 1,updatedData);
                    console.log(updatedData);
                    var self=this;
                    self.$axios({
                        url:'/adminPostCommentUpdate/'+tiezi.id,
                        method:'post',
                        baseURL: self.hostURL,
                        data:{message:this.message}
                    }).catch((error)=>{
                        console.log(error);
                    });
                    this.message='';
                }

            },
            edit3(tiezi){
                if(this.response==''){
                    this.$message({
                        type: 'warning',
                        message:'未完成编辑'
                    });
                }
                else{
                    console.log(tiezi.id);
                    console.log(this.response);

                    const index = this.tableData3.indexOf(tiezi);
                    var updatedData=this.tableData3[index];
                    updatedData.messageResponse=this.response;
                    this.tableData3.splice(index, 1,updatedData);
                    console.log(updatedData);

                    var self=this;
                    self.$axios({
                        url:'/adminPostResponseUpdate/'+tiezi.id,
                        method:'post',
                        baseURL: self.hostURL,
                        data:{response:this.response}
                    }).catch((error)=>{
                        console.log(error);
                    });
                    this.response='';
                }
            }
        },
        created(){
            var self = this;
            self.getData1();
        }
    }
</script>

<style>
    .content{
        float: left;
        width: 70%;
    }
    .list-btn-ground {
        /*margin: 10px auto;*/
        text-align: left;   
        /*margin: 20px;             */
    }
    .title1{
        font-size: 20px;
        font-weight:bold;
        margin: 20px;
    }
    .class1{
        text-align: center;
    }
    .class2{
        font-size: 30px;
        text-align: left;
        margin:30px;
    }
    .class3{
        text-align: left;
        margin:20px;
    }
</style>
