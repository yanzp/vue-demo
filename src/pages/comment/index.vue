<template>
    <div class="comment">
        <div class="tabs">
            <span v-for="(item, index) in tabs" 
                :key="index" 
                :class="{'active': currentIndex == index}"
                @click="onActive(index)">{{ item }}</span>
        </div>
        <div class="tabs-content">
            <div class="item" v-for="(item, index) in data" :key="index">
                <div class="img"><img src="item.src" /></div>
                <div class="details">
                    <span class="author">{{ item.author }}</span>
                    <Star :num="item.num"></Star>
                    <p class="issue">{{ item.content }}</p>
                    <span class="date">{{ item.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Star from '@/components/Star';
import axios from 'axios';
import urlSet from '@/config/urlSet';
// URLSearchParams未定义的问题，IE9不支持URLSearchParams
// import qs from 'qs';
// var params = {
// 'param1':1,
// 'param2':2
// }
// qs.stringify(params)

export default {
    data() {
        return {
            tabs: [ '全部', '有图', '点评' ],
            currentIndex: 0,
            data: []
        }
    },
    methods: {
        onActive: function(index) {
            this.currentIndex = index;
        }
    },
    created() {
        var $this = this;
        axios.get(urlSet.comment).then(function(response){
            if (response.status == 200) {
                $this.data = response.data.data;
            }
        }).catch(err => {
            console.log(err)
        })
    },
    components: {
        Star
    }
}
</script>

<style lang="less">

</style>
