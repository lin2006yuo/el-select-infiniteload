

const  routes = [
    {
        path: '/',
        component: () => import('@/views/zha'),
        name: '杂'
    },
    {
        path: '/animation',
        component: () => import('@/views/animation'),
        name: '动画'
    }
]

export default routes