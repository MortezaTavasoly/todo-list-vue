<template>
  <div class="navbar">
    <router-link to="/"><h1>Home</h1></router-link> |
    <router-link to="/add"><h1>Add New Todo</h1></router-link>
  </div>
</template>
<script>
import AddTodos from "../views/AddTodos.vue";
import Home from "../views/Home.vue";
export default {
  components: { Home, AddTodos },
};
</script>
<style>
.navbar {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
.navbar a {
  margin: 10px 30px;
  text-decoration: none;
  color: #555;
}
.navbar a.router-link-active {
  color: #4ba84b;
}
</style>
