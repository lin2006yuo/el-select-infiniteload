

const routes = [
    {
        path: '/',
        component: () => import('@/views/zha'),
        cname: '杂',
        name: 'mixin',
        beforeEnter: (to, from, next) => {
            console.log({ to, from })
            next()
        }
    },
    {
        path: '/animation#123',
        component: () => import('@/views/animation'),
        cname: '动画',
        name: 'animation'
    },
    {
        path: '/lodash',
        component: () => import('@/views/lodash'),
        cname: 'Lodash',
        name: 'lodash'
    },
    {
        path: '/router/:id',
        component: () => import('@/views/router'),
        cname: 'Router',
        name: 'router'
    },
    {
        path: '/vuex',
        component: () => import('@/views/vuex'),
        cname: 'Vuex',
        name: 'vuex'
    },
    {
        path: '/axios',
        component: () => import('@/views/axios'),
        cname: 'Axios',
        name: 'axios'
    },
    {
        path: '/component',
        component: () => import('@/views/component'),
        cname: '组件',
        name: 'components'
    },
    {
        path: '/menu_page',
        component: () => import('@/views/menu-page'),
        cname: '递归组件/菜单',
        name: 'menu'
    },
    {
        path: '/iview',
        component: () => import('@/views/iview'),
        cname: 'iview',
        name: 'iview',
        redirect: 'folder-tree',
        children: [
            {
                path: '/folder-tree',
                component: () => import('@/views/folder-tree/folder-tree.vue')
            }
        ]
    },
    {
        path: '/table',
        component: () => import('@/views/table'),
        cname: '表格',
        name: 'table'
    },
    {
        path: '/upload',
        component: () => import('@/views/upload'),
        cname: '文件上传/下载',
        name: 'upload'
    },
    {
        path: '/form',
        component: () => import('@/views/form'),
        cname: '表单',
        name: 'form'
    },
    {
        path: '/authorization',
        component: () => import('@/views/authorization'),
        cname: '权限页',
        name: 'authorization'
    },
    {
        path: '/login',
        component: () => import('@/views/login'),
        cname: '登陆',
        name: 'login'
    },
    {
        path: '/company',
        component: () => import('@/views/company'),
        cname: '公司测试',
        name: 'company'
    },
    {
        path: '*',
        cname: '404',
        name: '404',
        component: () => import('@/views/login')
    },
    {
        path: '/vnode',
        cname: 'vnode',
        name: 'vnode',
        component: () => import('@/views/vnode')
    }
]


export default routes