import Vue from 'vue';
import App from './App';
import router from './router';
import './fonts/iconfont.css';
import './css/common.less';
import 'babel-polyfill';
// Pormise的问题，Axios不能直接兼容IE9
import promise from 'es6-promise';

promise.polyfill()

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})