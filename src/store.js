import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state    : {
        showNavBg: null
    }, //call getters from computed property |
    getters  : {
        getNavBg: state => state.showNavBg
    },
    mutations: {
        setNavBg: (state, payload) => {
            state.showNavBg = payload
        }
    },
    actions  : {
        setNavBg: (context, payload) => {
            context.commit('setNavBg', payload)
        }
    }
})
