<template>
    <div>
        <div class="buttons" :class="css" @click="click">
            <span class="iconfont"
                :class="iconName"
                v-if="iconName"></span>
            <span>{{ txt }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        txt: null,
        iconName: null,
        click: Function,
        css: null,
    }
}
</script>

<style lang="less" scoped>
.buttons {
    display: inline-block;
    cursor: pointer;
    padding: 3px 15px;
    border: 1px solid #ddd;

}
</style>