import Vue from 'vue'
import Vuex from 'vuex'
// Example vue module
import example from './modules/example'
Vue.use(Vuex)

/*
For more info on how to use Vuex modules , see the examples at the git repo : https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart/store
 */
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        // example
    },
    strict: debug,
})