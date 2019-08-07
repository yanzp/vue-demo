import Vue from 'vue';
import App from './App';
import router from './router';
import './fonts/iconfont.css';
import './css/common.less';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})