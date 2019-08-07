<template>
    <div class="header">
        <div class="nav" v-for="(item, index) in tabs" :key="index">
            <router-link :to="item.url">{{ item.name }}</router-link>
        </div>
        <div @click="fn">test</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: []
        }
    },
    props: {
        tabs: Array,
        name: '',
        fn: Function
    },
    mounted() {
        this.data = this.tabs
    },
    created() {
    },
    methods: {

    }
}
</script>

<style>

</style>

