const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/issues.vue'], resolve)
    },
    {
        path: '/issues',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/issues.vue'], resolve)
    },
    {
        path: '/issues/:id',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/issue.vue'], resolve)
    }
];

export default routers;