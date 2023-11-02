<template>
  <div class="list">
    <button @click="showList('all')">All</button>
    <button @click="showList('complete')">completed</button>
    <button @click="showList('ongoing')">on going</button>
  </div>
</template>
<script>
export default {
  methods: {
    showList(by) {
      this.$emit("filterList", by);
    },
  },
};
</script>
<style></style>
