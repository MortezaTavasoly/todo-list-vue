<template>
  <div class="single-todo" :class="{ completed: todo.completed }">
    <div class="title-details" @click="handleShowDetails">
      <h3 class="title">{{ todo.title }}</h3>
      <p class="details" v-if="showDetails">
        {{ todo.details }}
      </p>
    </div>

    <div class="btns">
      <router-link :to="{ name: 'Edit', params: { id: todo.id } }"
        ><p>edit</p></router-link
      >
      <p @click="handleRemove(todo.id)" class="del-butt">delete</p>
      <p @click="handlecomplete(todo)" class="check-butt">complete</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["todo"],

  data() {
    return {
      showDetails: false,
    };
  },

  methods: {
    handleShowDetails() {
      this.showDetails = !this.showDetails;
      console.log(this.showDetails);
    },
    handleRemove(id) {
      fetch(`http://localhost:3000/projects/${id}`, { method: "DELETE" })
        .then(() => {
          this.$emit("delete", id);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    handlecomplete(todo) {
      fetch(`http://localhost:3000/projects/${todo.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !this.todo.completed }),
      }).then(() => {
        this.$emit("complete", todo.id);
      });
    },
  },
};
</script>
<style>
.single-todo {
  background-color: red;
  width: 600px;
  display: flex;
  background-color: rgb(226, 226, 226);
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
  border-left: 3px solid grey;
}

.completed {
  border-left: 3px solid green;
  transition: 0.3s ease;

  background-color: #858585;
}
.completed .check-butt {
  background-color: greenyellow;
}
.check-butt:hover {
  background-color: green;
  color: white;
}
.del-butt:hover {
  color: white;
  background-color: red;
}
.details {
  margin-left: 30px;
}
.btns {
  align-items: center;
  justify-content: center;
  display: flex;
}

.btns a {
  text-decoration: none;
}
.btns a p:hover {
  color: white;
  background-color: rgb(70, 70, 143);
}
.btns p {
  color: #555;
  margin-right: 10px;
  padding: 5px 10px;
  transition: 0.3s ease;

  cursor: pointer;
  background-color: rgb(185, 223, 248);
}
.title {
  padding: 10px 20px;
  cursor: pointer;
}
.completed .title {
  text-decoration: line-through;
}
</style>
