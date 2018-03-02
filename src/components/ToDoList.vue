/* eslint-disable */
<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    
    <to-do v-on:delete-todo="deleteTodo" v-bind:key="index" v-for="(todo, index) in todos" v-bind:todo="todo" v-bind:compData="compData" v-bind:index="index">
    </to-do>

    <!-- <ul>
        <li v-bind:key="todo.id" v-for="todo in todos">{{todo.title}}</li>
    </ul> -->

  <!-- <p>{{todos}}</p> -->
  </div>
</template>

<script type = "text/javascript" >

import ToDo from './ToDo';

export default {
    created: function() {
        console.log('in ToDoList.vue');
    },
    data: function() {
        return {compData:[{compData1: 'TestData'}]};
    },
    components: { ToDo },
    // props: ['todos'],
    computed: {
        todos() {
            console.log(this.$store.state.todos);
            return this.$store.state.todos.filter(todo => {return !todo.done});
        } 
    },
    methods: {
        deleteTodo(todoData) {
            const todoIndex = this.todos.indexOf(todoData);
            this.todos.splice(todoIndex, 1);
        },
    }
};
</script>
<style>
</style>