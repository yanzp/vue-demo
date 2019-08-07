<template>
    <div>
        <Header 
            name="header"
            :tabs="tabs" 
            :fn="onTab"
            ></Header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header';
export default {
    data() {
        return {
            tabs: [
                { name: '首页', url: '/index' }, 
                { name: '评价', url: '/comment' },
                { name: '评级', url: '/goods' }, 
                { name: '关注', url: '/other' }
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

