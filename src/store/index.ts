import { createStore } from 'vuex'
import Vuex from 'vuex' ;
// import Vue, { shallowReactive } from 'vue' ;

const store = new Vuex.Store({
state: {
    token: localStorage.getItem('token') || '',
    // userData: JSON.parse(localStorage.getItem('userData')) || '',
    userData: {}
  },
  getters: {
    // get data from state or computing data that we need
    storageToken: (state) => {
      return state.token;
    },

    storageUserData: (state) => { return state.userData },
  },
  mutations: {
   
  },
  actions: {
    
    
    
    // after login(authenticated), store token & userInfo in vuex and localstorage
    setToken({ state }, token) {
      state.token = token
      localStorage.setItem('token', token)
    },

    setUserData({ state }, user) {
      state.userData = user
      localStorage.setItem('userData', JSON.stringify(user))
    },

    logout({ state }) {
      state.token = '';
      state.userData = '';
      localStorage.removeItem('token');
      localStorage.removeItem('userData');
    },

    userDataLoad() {
      // Load user data when the store is initialized
      const userData = localStorage.getItem('userData');
      if (userData != null) {
        try {
          const loadUserData = JSON.parse(userData);
          this.state.userData = loadUserData;
          // console.log(this.state.userData);
        } catch {
          console.log("error ");
        }
      } 
    }

  },
  modules: {
    
  },
})





export default store;


  // const userData = JSON.parse(localStorage.getItem('userData')!);
  // if (state.token) {
    // state.userData = userData;
  // }
// },




