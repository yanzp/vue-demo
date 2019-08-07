<template>
    <div class="comment">
        <div class="tabs">
            <span v-for="(item, index) in tabs" 
                :key="index" 
                :class="{'active': currentIndex == index}"
                @click="onActive(index)">{{ item }}</span>
        </div>
        <div class="tabs-content">
            <div class="item">
                <div class="img"><img src="" /></div>
                <div class="details">
                    <span class="author">用户名称</span>
                    <Star :num="4"></Star>
                    <p class="issue">不知道要说啥，这个地方就是放评论啦，随便说点啥，好吧，那就这样吧。</p>
                    <span class="date">2019.07.16</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Star from '@/components/Star';
export default {
    data() {
        return {
            tabs: [ '全部', '有图', '点评' ],
            currentIndex: 0
        }
    },
    methods: {
        onActive: function(index) {
            this.currentIndex = index;
        }
    },
    components: {
        Star
    }
}
</script>

<style lang="less">

</style>
