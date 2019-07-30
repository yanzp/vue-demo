<template>
    <div>
        <div v-for="(item, index) in data" :key="index">{{ item }}</div>
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
        tabs: Array
    },
    mounted() {
        this.data = this.tabs
    }
}
</script>

<style>

</style>

