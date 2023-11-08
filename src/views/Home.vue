<template>
  <div class="home">
    <Lists @filterList="handleFilterdList" />
    <div class="todos" v-for="todo in showFilterdList" :key="todo.id">
      <SingleTodo
        :todo="todo"
        @delete="handleRemove"
        @complete="handleComplete"
      />
    </div>
  </div>
</template>
<script>
import SingleTodo from "../components/SingleTodo.vue";
import Lists from "../components/Lists.vue";

export default {
  components: { SingleTodo, Lists },

  data() {
    return {
      todos: [],
      curr: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => (this.todos = data));
  },
  computed: {
    showFilterdList() {
      if (this.curr === "complete") {
        return this.todos.filter((todo) => {
          return todo.completed;
        });
      } else if (this.curr === "ongoing") {
        return this.todos.filter((todo) => {
          return !todo.completed;
        });
      } else {
        return this.todos;
      }
    },
  },
  methods: {
    handleFilterdList(by) {
      this.curr = by;
    },
    handleRemove(id) {
      console.log(id);
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.todos.find((todo) => {
        return todo.id === id;
      });
      console.log(p.completed);
      p.completed = !p.completed;
    },
  },
};
</script>
<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
button {
  margin: 20px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.3s ease;
}
button:hover {
  background-color: silver;
}
</style>
