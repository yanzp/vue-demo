import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages';
import Goods from '@/pages/goods';
import Comment from '@/pages/comment';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
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
        }
    ],
    linkActiveClass: 'active'
})