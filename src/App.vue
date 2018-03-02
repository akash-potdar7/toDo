/* eslint-disable */
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToDoList,
    CreateToDo
  },
  data: function() {
    return {}
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
