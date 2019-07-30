<template>
    <Menu :tabs="tabs"></Menu>
</template>

<script>
import Menu from '@/components/menu';
export default {
    data() {
        return {
            tabs: ['首页', '新闻', '热点', '关注']
        }
    },
    methods: {
        
    },
    components: {
        Menu
    }
}
</script>

<style>

</style>

