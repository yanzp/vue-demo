<template>
    <div>
        <Header 
            name="header"
            :tabs="tabs" 
            :fn="onTab"
            ></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '@/components/header';
export default {
    data() {
        return {
            tabs: [
                { name: '首页', url: '/' }, 
                { name: '评价', url: '/comment' },
                { name: '新闻', url: '/goods' }, 
                { name: '关注', url: '/' }
            ]
        }
    },
    methods: {
        onTab: function() {
            console.log('------------')
        }
    },
    components: {
        Header
    }
}
</script>

