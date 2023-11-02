<template>
  <form class="edit-todos" @submit.prevent="handleEdit">
    <label>title: <input type="text" v-model="title" /></label>
    <label
      >details: <textarea cols="30" rows="10" v-model="details"></textarea>
    </label>
    <button>save</button>
  </form>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
    };
  },

  mounted() {
    fetch(`http://localhost:3000/projects/${this.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.title = data.title;
        this.details = data.details;
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  methods: {
    handleEdit() {
      fetch(`http://localhost:3000/projects/${this.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
        }),
      }).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
<style>
.edit-todos {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.edit-todos label {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
}
.edit-todos input {
  height: 30px;
  border: 0;
  border-bottom: 1px solid grey;
  width: 200px;
}
.edit-todos textarea {
  border: 0;
  border-bottom: 1px solid grey;
  max-width: 200px;
  max-height: 400px;
}
</style>
