<template>
    <div class="comment">
        <div class="comment-area clearfix">
            <h3>我要评论</h3>
            <Star ref="star"></Star>
            <textarea placeholder="我要评论..." v-model="textarea"></textarea>
            <button class="btn blue-btn" @click="onComment">评论</button>
        </div>
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
import urlSet from '@/config/urlSet';
import request from '@/config/axios';

export default {
    data() {
        return {
            tabs: [ '全部', '有图', '点评' ],
            currentIndex: 0,
            data: [],
            textarea: null
        }
    },
    methods: {
        onActive: function(index) {
            this.currentIndex = index;
        },
        onComment: async function() {
            var params = {
                author: "author",
                num: this.$refs.star.currentIndex,
                content: this.textarea
            }

            try {
                // var response = await axios.post(urlSet.submit, qs.stringify(params));
                var response = await request(urlSet.submit, 'post', params);
                console.log(response.data);
            } catch (err) {
                console.error(err)
            }
        }
    },
    async created() {
        var $this = this;

        try {
            // var response = await axios.get(urlSet.comment);
            var response = await request(urlSet.comment, 'get');
            $this.data = response.data;
        } catch(err) {
            console.error(err)
        }   
    },
    components: {
        Star
    }
}
</script>

<style lang="less">

</style>


