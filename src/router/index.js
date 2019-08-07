import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages';
import Goods from '@/pages/goods';
import Comment from '@/pages/comment';
import Other from '@/pages/other';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'Main',
            component: Main
        },
        {
            path: '/comment',
            name: 'Comment',
            component: Comment
        },
        {
            path: '/goods',
            name: 'Goods',
            component: Goods
        },
        {
            path: '/other',
            name: 'Other',
            component: Other
        }
    ],
    linkActiveClass: 'active'
})