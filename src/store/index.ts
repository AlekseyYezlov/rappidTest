import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authentificated: localStorage.getItem('token') || false,
    token: localStorage.getItem('token') || null,
    emailToAuth: 'alex@gmail.com',
    passwordToAuth: 'rappidDocumentationIsNotEasy'
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.authentificated = true;
      localStorage.setItem('token', token);
    }
  },
  actions: {
    login({ commit, state }, user) {
      console.log(user);
      if (user) {
        if (user.email !== state.emailToAuth && user.password !== state.passwordToAuth) {
          return false;
        } else {
          const hashStr = (str: string) => {
            let finalHash = 0;
            for (let i = 0; i < str.length; i++) {
              const charCode = str.charCodeAt(i);
              finalHash += charCode;
            }
            return finalHash;
          };
          const token = hashStr(user.toString());
          commit('setToken', token);
          return token;
        }
      }
    },
  },

  getters: {
    authCheck: state => state.token
  },
  modules: {
  }
});
