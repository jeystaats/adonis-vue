import VueRouter from 'vue-router'
// Import our components and pages
import Home from './views/Home'

let routes = [
    {
        path: '/',
        component: Home
    },
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
})