// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import {store} from './store';

// import VueRouter from 'vue-router';
import CreateToDo from './components/CreateToDo';
import ToDoList from './components/ToDoList';

Vue.config.productionTip = false;

/* eslint-disable no-new */
var vue = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store: store
});

// Vue.use(VueRouter);

/* const routes = [
  { path: '/addToDo', component: CreateToDo },
  { path: '/listToDos', component: ToDoList }
]; */

/* const router = new VueRouter({
  routes: routes
}); */