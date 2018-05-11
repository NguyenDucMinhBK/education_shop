import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from '../components/ExampleComponent.vue'

Vue.use(VueRouter)

let routes = [
  {path: '/', name: 'Example', component: ExampleComponent}
];

export default new VueRouter({
  mode: 'history',
  routes
});