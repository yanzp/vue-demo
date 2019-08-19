import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    count: 0,
    data: []
}

const actions = {
    addComment({ commit, state }, obj) {
        commit('add', obj)
    },
    subComment({ commit, state }, index) {
        commit('sub', index)
    }
}

const mutations = {
    add(state, obj) {
        state.data.push(obj);
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

