<template>
    <div class="goods">
        <span>{{ count }}</span>
        <div class="star" @mouseout="onOut()">
            <span class="iconfont icon-star"
                :class="{'active': index <= currentIndex, 'is-hover': index <= hoverIndex}" 
                v-for="(item, index) in step"
                :key="index"
                @click="onStar(index)"
                @mouseover="onOver(index)">
            </span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            step: 5,
            currentIndex: -1,
            hoverIndex: -1
        }
    },
    computed: {
        ...mapState({
            count: state => state.count
        })
    },
    methods: {
        onStar: function(index) {
            this.currentIndex = index;
            this.hoverIndex = -1;
        },
        onOver: function(index) {
            this.currentIndex = -1;
            this.hoverIndex = index;
        },
        onOut: function() {
            this.hoverIndex = -1;
        }
    }
}
</script>

<style>

</style>

