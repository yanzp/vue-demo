<template>  
    <div class="comment-area">
        <h3>vuex使用例子</h3>
        <div class="form clearfix">
            <textarea v-model="text"></textarea>
            <span class="method">选择方式：</span>
            <select v-model="val">
                <option v-for="(item, index) in options" 
                    :key="index"
                    :value="item.id">{{ item.name }}</option>
            </select>
            <button class="btn blue-btn" @click="addComment()">添加</button>
        </div>

        <span>共{{ count }}条数据</span>
        <ul class="list">
            <li v-for="(item, index) in data" :key="index">
                <input type="checkbox" v-model="check" :value="index" />
                <span>{{ item.text }}</span> 
                <span>{{ item.val == 1? '收款':'转账' }}</span>
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
            val: null,
            check: [],
            options: [
                { id: 1, name: '收款' },
                { id: 2, name: '转账' }
            ]
        }
    },
    computed: {
        ...mapState({
            count: state => state.count,
            data: state => state.data
        }),
        getVal() {
            return this.val;
        }
    },
    methods: {
        ...mapActions({
            add: 'addComment',
            sub: 'subComment'
        }),
        addComment() {
            var obj = {
                text: this.text,
                val: this.val
            }
            this.add(obj);
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
.list {}
</style>
