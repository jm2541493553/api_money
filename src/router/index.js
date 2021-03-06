import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/jiangjinchaxun',
                    component: () => import(/* webpackChunkName: "jiangjinchaxun */ '../components/page/Upload.vue'),
                    meta: { title: '奖金查询' }
                },
                {
                    path: '/jiangjintixian',
                    component: () => import(/* webpackChunkName: "jiangjintixian */ '../components/page/Icon.vue'),
                    meta: { title: '奖金提现' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '操作功能' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: '团队管理' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '修改信息' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '安全设置'}
                },          
            ]
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/be_Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/be_dashboard',
                    component: () => import(/* webpackChunkName: "be_dashboard" */ '../components/page/be_Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/be_form',
                    component: () => import(/* webpackChunkName: "be_BaseForm */ '../components/page/be_BaseForm.vue'),
                    meta: { title: '结算功能' }
                },
                {
                    path: '/be_table',
                    component: () => import(/* webpackChunkName: "jiangjintixian */ '../components/page/be_BaseTable.vue'),
                    meta: { title: '结算功能' }
                },
                {
                    path: '/be_icon',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Icon.vue'),
                    meta: { title: '统计查询' }
                },
                {
                    path: '/be_tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/be_Tabs.vue'),
                    meta: { title: '修改功能' }
                },
                {
                    path: '/be_permission',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/be_Permission.vue'),
                    meta: { title: '系统管理' }
                },         
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
