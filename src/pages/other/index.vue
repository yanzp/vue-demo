<template>  
    <div class="comment-area">
        <h3>vuex使用例子</h3>
        <textarea v-model="text"></textarea>
        <button class="btn blue-btn" @click="addComment()">添加</button>

        <span>共{{ count }}条数据</span>
        <ul class="list">
            <li v-for="(item, index) in data" :key="index">
                <input type="checkbox" v-model="check" :value="index" />
                <span>{{ item }}</span> 
                <button @click="subComment(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            text: null,
            check: []
        }
    },
    computed: {
        ...mapState({
            count: state => state.count,
            data: state => state.data
        })
    },
    methods: {
        ...mapActions({
            add: 'addComment',
            sub: 'subComment'
        }),
        addComment() {
            this.add(this.text);
            this.text = null;
        },
        subComment(index) {
            var bool = this.check.includes(index);
            if (bool) {
                this.sub(index);
                this.check = this.check.filter(function(item) {
                    return item != index;
                }) 
            } else {
                alert('您还未勾选')
            }        
        }
    }
}
</script>

<style lang="less">

</style>
