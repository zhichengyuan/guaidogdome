import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/student',
            name: 'student',
            component: () =>
                import ('../components/student.vue'),
        },
        {
            path: '/studentDetails/:id',
            name: 'studentDetails',
            component: () =>
                import ('../components/studentDetails.vue'),
        }
    ]
})