import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0,
    data: []
}

const actions = {
    addComment({ commit, state }, text) {
        commit('add', text)
    },
    subComment({ commit, state }, index) {
        commit('sub', index)
    }
}

const mutations = {
    add(state, text) {
        state.data.push(text);
        state.count ++;
    },
    sub(state, index) {
        state.data.splice(index, 1);
        state.count --;
    }
}

const store = new Vuex.Store({
    state,
    actions,
    mutations
})

export default store

