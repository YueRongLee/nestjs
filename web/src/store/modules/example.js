/* eslint-disable require-jsdoc */

const example = {
  state() {
    return {
      update: '',
    };
  },
  mutations: {
    UPDATE(state, criteria) {
      state.update = criteria[criteria];
    },
  },
  actions: {
    // criteria，參數包進物件再傳入
    update({ commit }, criteria) {
      commit('UPDATE', criteria);
    },
  },
  getters: {
    // 前端取值 使用 mapGetters
    getState(state) {
      return state.update;
    },
  },
};

export default example;
