<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 新闻获取</el-breadcrumb-item>
                <el-breadcrumb-item>新闻内容审核</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="form-box">
            <el-form ref="news" :rules="rules" :model="news" label-width="80px">
                <el-form-item label="新闻标题" prop='title'>
                    <el-input v-model="news.title" placeholder="请输入新闻标题"></el-input>
                </el-form-item>
                <el-form-item label="新闻类型" prop='type'>
                    <el-select v-model="news.type" placeholder="请选择新闻类型">
                        <el-option key='1' label="最新" value='1'></el-option>
                        <el-option key="2" label="融资" value="2"></el-option>
                        <el-option key="3" label="产业" value="3"></el-option>
                        <el-option key="4" label="厂商" value="4"></el-option>
                        <el-option key="5" label="专访" value="5"></el-option>
                        <el-option key="6" label="技术" value="6"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="作者" prop='author'>
                    <!--<el-input v-model="news.author" placeholder="请输入作者" style="width: 100px;"></el-input>-->
                    <el-input v-model="news.author" placeholder="" style="width: 100px;"></el-input>
                </el-form-item>
                <el-form-item label="来源" prop='source'>
                    <!--<el-input v-model="news.source" placeholder="请输入来源" style="width: 150px;"></el-input>-->
                    <el-input v-model="news.source" placeholder="" style="width: 150px;"></el-input>
                </el-form-item>
                <el-form-item label="发布时间" prop='lastEditTime'>
                    <!--<el-input v-model="news.lastEditTime" placeholder="yyyy-mm-dd" style="width: 150px;"></el-input>-->
                    <el-input v-model="news.lastEditTime" placeholder="" style="width: 150px;"></el-input>
                </el-form-item>
                <el-form-item label="标题图" prop='picLocation'>
                    <!--<el-input v-model="news.picLocation" style="width: 600px;" placeholder="请输入图片的URL"></el-input>-->
                    <el-input v-model="news.picLocation" style="width: 600px;" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="内容概述" prop='newsAbstract'>
                    <el-input type="textarea" v-model="news.newsAbstract" style="width: 600px;"
                              placeholder="请输入新闻概述"></el-input>
                </el-form-item>

                <el-form-item label="新闻内容" prop='content'>
                    <quill-editor ref="myTextEditor" v-model="news.content" :options="editorOption"
                                  style="line-height: 1;width: 800px;"></quill-editor>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit('news')">审核通过</el-button>
                    <el-button type="primary" @click="onCancel">取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    import {quillEditor} from 'vue-quill-editor';
    export default {
        data: function () {
            return {
                editorOption: {
                    modules: {
                        toolbar: [
                            [{'header': [2, 3, false]}],
                            ['bold', 'italic'],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            ['image']
                        ]
                    },
                    placeholder: '请编写您的内容...',
                },
                hostURL: '/VR',
//                hostURL:'http://119.23.175.192:8080/VR',
                select_cast: '',
                news: {
                    id: 3,
                    tag: null,
                    title: "痛失手机江山的联想，想要在VR热潮中分一杯羹",
                    path: "D:\\VR新闻爬虫\\test2",
                    lastEditTime: "2017-06-11",
                    source: "来源：POPPUR",
                    upvote: null,
                    downvote: null,
                    editorId: null,
                    author: "百度VR",
                    newsAbstract: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只",
                    content: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只可惜初出茅庐的联想并没有什么经验，无奈在苹果和小米的拉锯战中成为了炮灰。虽然联想在2014年收购了手机界骨灰级元老摩托罗拉，但这条路始终还是没有想象中的那么好走。先是苹果傲视群雄，后来OPPO、vivo崛起，势单力薄的联想手机想要站稳脚跟还是有点难的。根据此前的消息，联想手机业务分支品牌ZUK已经暂停运营了。痛失手机江山之后，联想将落脚点放在了潜力巨大的虚拟现实领域。去年10月，联想与微软进行了合作，未来两者将会在混合现实领域(包括增强现实和虚拟现实)共同谋求发展，开辟新天地。随后联想也很快推出了一款主打入门的混合现实头显，斩获了不少用户的好评。而在最近的CES亚洲展上，联想还推出了首款背包VR PC——Avalon  VR。这款PC外观设计精致，虽然采用了金属机身的设计，但整机的重量也仅有2.5kg(包括电池)。配置方面，Avalon  VR最高支持英特尔酷睿i7处理器，32GB DDR4内存以及512GB PCI-E固态硬盘，同时内置AMD Radeon  RX480/580独立显卡，足以轻松应对市面上所有VR游戏。此外，该电脑还采用了双电池设计，并且支持热插拔，官方称其普通模式下的续航时间可达10小时，即使是在高性能下进行VR体验也能坚持1.5小时。而为了帮助主机散热，该机还配备了水冷散热系统，出风口也设置在了背对背部的位置，避免热风吹向人体。根据联想的介绍，之后张艺谋VR体验店会全线采用Avalon  VR背包电脑，可见联想在VR界的地位还是值得被肯定的。而随着与微软的合作更加深入之后，未来联想还会在增强现实乃至混合现实界混出一片天地。不知道未来的PC市场究竟会变成怎样呢?真是越来越期待了呀。Via：POPPUR",
                    picLocation: "http://www.vrrb.cn/d/file/kuaixun/2017-06-11/74ba6748a8a88ed7b083e961a7ff9da4.jpg",
                    isPush: null,
                    type: 1
                },
                rules: {
                    title: [
                        {required: true, message: '请输入新闻标题', trigger: 'blur'}
                    ],
                    type: [
                        {required: true, message: '请选择新闻类型', trigger: 'change'}
                    ],
                    author: [
                        {required: true, message: '请输入作者', trigger: 'blur'}
                    ],
                    source: [
                        {required: true, message: '请输入来源', trigger: 'blur'}
                    ],
                    lastEditTime: [
                        {required: true, message: '请输入时间', trigger: 'blur'}
                    ],
                    picLocation: [
                        {required: true, type: 'url', message: '请输入图片的URL', trigger: 'blur'}
                    ],
                    newsAbstract: [
                        {required: true, message: '请输入新闻概述', trigger: 'blur'},
                        {min: 5, max: 100, message: '长度在5到100个字符', trigger: 'blur'}
                    ],
                    content: [
                        {required: true, message: '请输入新闻内容', trigger: 'blur'}
                    ]
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor;
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({editor, html, text}) {
                this.content = html;
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
            getNewsData(id){
                var self = this;
                self.news = {};
                self.$axios({
                    url: '/news/' + id,
                    method: 'get',
                    baseURL: self.hostURL
                }).then((response)=> {
                    self.news = response.data;
                    self.news.lastEditTime = self.news.lastEditTime.replace("发布时间：","");
                    self.news.type = self.news.type.toString();
                }).catch((error)=> {
                    console.log(error);
                });
            },
            onSubmit(formName) {
                var self = this;
                self.$refs[formName].validate((valid)=> {
                    if (valid) {
                        self.$axios({
//                            url: '/NewsSubmit' + '?id=' + self.news.id + '&author=' + self.news.author + '&lastEditTime=' + self.news.lastEditTime + '&newsAbstract=' + self.news.newsAbstract + '&picLocation=' + self.news.picLocation + '&source=' + self.news.source + '&title=' + self.news.title + '&type=' + self.news.type + "&content=" + self.news.content + "&path=" + self.news.path,
                            url: '/NewsSubmit',
                            method: 'post',
                            data: {
                                id:self.news.id,
                                author: self.news.author,
                                lastEditTime: self.news.lastEditTime,
                                newsAbstract: self.news.newsAbstract,
                                picLocation: self.news.picLocation,
                                source: self.news.source,
                                title: self.news.title,
                                type: self.news.type,
                                content: self.news.content,
                                path: self.news.path
                            },
                            baseURL: self.hostURL,
                        }).catch((error)=> {
                            console.log(error);
                        });
                        self.$message.success('修改成功！');
                        self.$router.push("/admin/news-editor");
                    }
                    else {
                        self.$message.error('请输入全部信息！');
                    }
                })

            },
            onCancel() {
                this.$router.push("/admin/news-examine");
            },
        },
        mounted(){
            var self = this;
            var arr = location.href.split('?');
            var news_id = arr[1];
            console.log(news_id);
            self.getNewsData(news_id);
        }
    }


</script>

<style>
    .content {
        float: left;
        width: 70%;
    }
</style>