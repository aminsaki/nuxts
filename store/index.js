import Vuex from 'vuex'
import prodcuts from '@/Api/data.json'
import users from '@/Api/users.json'


/// you dispatch on action
/// you commit to mutation


export default () => {
  return new Vuex.Store({

    //date
    state: {
      loadedPosts: [],
      token: '',

    },
    // changes  the state
    mutations: {
      setPost(state, post) {

        state.loadedPosts = prodcuts;
        console.log(prodcuts);
      },

      setToken(state, token) {

        console.log('login', token);

        state.token = token;
      }

    },
    // commit  mutations
    actions: {
      setPost({commit}, post) {
           commit('setPost', post);
      },

      async login({commit}, credenials) {

        ///axops call
        const username = users[0].username;
        const password = users[0].password


        if (credenials.username === username && credenials.password === password) {
          /// change  toke  to  credenials
          // await commit(Login, credenials);
          await commit("setToken", users[0].token);

        }


      }

    },
    /// compoute   or get states
    getters: {
      loadedPost(stats) {

        return stats.loadedPosts
      }

    },


  });
}
