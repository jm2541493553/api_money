import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/index',
            redirect: '/be_dashboard'
        },
        {
            path: '/admin_index',
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
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '财务管理' }
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
                    path: '/be_icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/be_Icon.vue'),
                    meta: { title: '财务管理' }
                },
                {
                    path: '/be_table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/be_BaseTable.vue'),
                    meta: { title: '操作功能' }
                },
                {
                    path: '/be_tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/be_Tabs.vue'),
                    meta: { title: '团队管理' }
                },
                {
                    path: '/be_form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/be_BaseForm.vue'),
                    meta: { title: '修改信息' }
                },
                {
                    // 权限页面
                    path: '/be_permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/be_Permission.vue'),
                    meta: { title: '安全设置'}
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
