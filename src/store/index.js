import { createStore } from "vuex";

export default createStore({
  state: {
    ages: [5, 10, 20, 25, 50, 100],
    verticalLength1317: 5,
    verticalLength1824: 10,
    verticalLength2534: 15,
  },
  mutations: {
    SET_13_17(state, payload) {
      state.verticalLength1317 = payload;
    },
    SET_18_24(state, payload) {
      state.verticalLength1824 = payload;
    },
    SET_25_34(state, payload) {
      state.verticalLength2534 = payload;
    },
  },
  actions: {
    updateBarValue({ commit }, updateData) {
      switch (updateData.ageRange) {
        case "13_17":
          commit("SET_13_17", updateData.age);
          break;
        case "18_24":
          commit("SET_18_24", updateData.age);
          break;
        case "25_34":
          commit("SET_25_34", updateData.age);
          break;
        default:
      }
    },
  },
  getters: {
    getBarLengths(state) {
      return {
        verticalLength1317: state.verticalLength1317,
        verticalLength1824: state.verticalLength1824,
        verticalLength2534: state.verticalLength2534,
      };
    },
    getAges(state) {
      return state.ages;
    },
  },
});
