import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            // redirect: '/login'
            redirect: '/login'   // /login
        },
        {
            path:'/nologin',
            component: resolve => require(['../components/page/noLogin.vue'],resolve)
        },
        {
            path: '/user',
            component: resolve => require(['../components/common/userHome.vue'], resolve),
            children:[
                {
                    path: '/user/change-nick',
                    component: resolve => require(['../components/page/changeNick.vue'],resolve)
                },
                {
                    path: '/user/change-password',
                    component: resolve => require(['../components/page/changePassword.vue'],resolve)
                },
                {
                    path: '/user/news-finance',
                    component: resolve => require(['../components/page/NewsFinance.vue'],resolve)
                },
                {
                    path: '/user/news-industry',
                    component: resolve => require(['../components/page/NewsIndustry.vue'],resolve)
                },
                {
                    path: '/user/news-firm',
                    component: resolve => require(['../components/page/NewsFirm.vue'],resolve)
                },
                {
                    path: '/user/news-interview',
                    component: resolve => require(['../components/page/NewsInterview.vue'],resolve)
                },
                {
                    path: '/user/news-technology',
                    component: resolve => require(['../components/page/NewsTechnology.vue'],resolve)
                },
                {
                    path: '/user/news-list',
                    component: resolve => require(['../components/page/NewsList.vue'],resolve)
                },
                {
                    path: '/user/news',
                    component: resolve => require(['../components/page/News.vue'],resolve)
                },
                {
                    path: '/user/financepage',
                    component: resolve => require(['../components/page/FinancePage.vue'],resolve)
                },
                {
                    path: '/user/technologypage',
                    component: resolve => require(['../components/page/TechnologyPage.vue'],resolve)
                },
                {
                    path: '/user/interviewpage',
                    component: resolve => require(['../components/page/InterviewPage.vue'],resolve)
                },
                {
                    path: '/user/firmpage',
                    component: resolve => require(['../components/page/FirmPage.vue'],resolve)
                },
                {
                    path: '/user/industrypage',
                    component: resolve => require(['../components/page/IndustryPage.vue'],resolve)
                },
                {
                    path: '/user/product-list',
                    component: resolve => require(['../components/page/ProductList.vue'],resolve)
                },
                {
                    path: '/user/product-compare',
                    component: resolve => require(['../components/page/ProductCompare.vue'],resolve)
                },
                {
                    path: '/user/mse-list',
                    component: resolve => require(['../components/page/MseList.vue'],resolve),
                },
                {
                    path: '/user/mse-self',
                    component: resolve => require(['../components/page/MseSelf.vue'],resolve),
                },
                {
                    path: '/user/mse-self-edit',
                    component: resolve => require(['../components/page/MseSelfEdit.vue'],resolve),
                },
                {
                    path: '/user/mse',
                    component: resolve => require(['../components/page/Mse.vue'],resolve)
                },
                {
                    path: '/user/mse-edit',
                    component: resolve => require(['../components/page/MseEdit.vue'],resolve)
                },
                {
                    path: '/user/mse-edit',
                    component: resolve => require(['../components/page/MseEdit.vue'],resolve)
                },
                {
                    path: '/user/questionaire',
                    component: resolve => require(['../components/page/Questionaire.vue'],resolve)
                },
                {
                    path: '/user/questionaire/statistic',
                    component: resolve => require(['../components/page/QStatistic.vue'],resolve)
                },
                {
                    path: '/user/ivr-comment',
                    component: resolve => require(['../components/page/ivrComment.vue'],resolve),
                },
                {
                    path: '/user/svr-comment',
                    component: resolve => require(['../components/page/svrComment.vue'],resolve)
                },
                {
                    path: '/user/evr-comment',
                    component: resolve => require(['../components/page/evrComment.vue'],resolve)
                },
                {
                    path: '/user/ivr-comment/ivr',
                    component: resolve => require(['../components/page/ivr.vue'],resolve)
                },
                {
                    path: '/user/svr-comment/svr',
                    component: resolve => require(['../components/page/svr.vue'],resolve)
                },
                {
                    path: '/user/evr-comment/evr',
                    component: resolve => require(['../components/page/evr.vue'],resolve)
                },
                {
                    path: '/user/BBS',
                    component: resolve => require(['../components/page/bbs.vue'],resolve)
                },
                {
                    path:'/user/tieZi',
                    component:resolve => require(['../components/page/tieZi.vue'], resolve)
                },
                {
                    path:'/user/Post',
                    component:resolve => require(['../components/page/Post.vue'], resolve)
                },
                {
                    path: '/user/pedia',
                    component: resolve => require(['../components/page/pedia.vue'],resolve)
                },
                {
                    path: '/user/pedia2',
                    component: resolve => require(['../components/page/pedia2.vue'],resolve)
                },
                {
                    path: '/user/encyclopedia-prop',
                    component: resolve => require(['../components/page/encyclopedia-prop.vue'],resolve)
                }

            ]
        },
        {
            path: '/admin/administratorLogin',
            component: resolve => require(['../components/page/AdministratorLogin.vue'], resolve)
        },
        {
            // 管理员入口
            path: '/admin',
            component: resolve => require(['../components/common/adminHome.vue'], resolve),
            children: [
                {
                    path: '/admin/administrator',
                    component: resolve => require(['../components/page/Administrator.vue'], resolve)
                },
                {
                    path: '/admin/UploadFile',
                    component: resolve => require(['../components/page/UploadFile.vue'],resolve)
                },
                {
                    path: '/admin/bbs',
                    component: resolve => require(['../components/page/AdminBBS.vue'],resolve)
                },
                {
                    path: '/admin/news-editor',
                    component: resolve => require(['../components/page/NewsEditor.vue'],resolve)
                },
                {
                    path: '/admin/editor',
                    component: resolve => require(['../components/page/Editor.vue'],resolve)
                },
                {
                    path: '/admin/news-release',
                    component: resolve => require(['../components/page/NewsRelease.vue'],resolve)
                },
                {
                    path: '/admin/Encyclopedia',
                    component: resolve => require(['../components/page/AdminstratorEncyclopedia.vue'],resolve)
                },
                {
                    path: '/admin/encyclopediaDelete',
                    component: resolve => require(['../components/page/AdministratorEncyclopediaDelete.vue'], resolve)
                },
                {
                    path: '/admin/Questionaire',
                    component: resolve => require(['../components/page/adminQuestionaire.vue'],resolve)
                },
                {
                    path: '/admin/User',
                    component: resolve => require(['../components/page/adminUser.vue'],resolve)
                },
                {
                    path: '/admin/mseAdmin',
                    component: resolve => require(['../components/page/MseAdmin.vue'],resolve)
                },
                {
                    path: '/admin/mseAdminView',
                    component: resolve => require(['../components/page/MseAdminView.vue'],resolve)
                },
                {
                    path: '/admin/mseAdminEdit',
                    component: resolve => require(['../components/page/MseAdminEdit.vue'],resolve)
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
