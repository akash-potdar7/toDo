/* eslint-disable */
<template>
  <div>

  <input v-model="todo.title" type='text' ref='title' @change="titleOnChange" defaultValue="">
  <p>{{todo.title}} &nbsp;
      {{index}}
      <span><button v-on:click="deleteTodo(index)">Delete</button></span>
  </p>

  <!-- <p>{{compData}}</p> -->

  </div>

</template>

<script type="text/javascript">
export default {
  props: ['todo', 'compData', 'index'],
  methods: {
      deleteTodo: function(index) {
          console.log(index);
          this.$emit('delete-todo', this.todo);
      },
      titleOnChange : function() {
          console.log('On change of title new = ' + this.todo.title);
      },
  },
  watch : {
        'todo.title': function(val, oldVal) {
            console.log(oldVal + ' -> ' + val);
        }
  }
}
</script>