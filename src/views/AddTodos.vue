<template>
  <form class="add-todos" @submit.prevent="handleSubmit">
    <label>title: <input type="text" v-model="title" /></label>
    <label
      >details: <textarea cols="30" rows="10" v-model="details"></textarea>
    </label>
    <button>save</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleSubmit() {
      let newTodo = {
        title: this.title,
        details: this.details,
        completed: false,
      };

      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
<style>
.add-todos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.add-todos label {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}
.add-todos input {
  height: 30px;
  border: 0;
  border-bottom: 1px solid grey;
  width: 200px;
}
.add-todos textarea {
  border: 0;
  border-bottom: 1px solid grey;
  max-width: 200px;
  max-height: 400px;
}
</style>
