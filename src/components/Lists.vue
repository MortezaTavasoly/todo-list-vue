<template>
  <div class="list">
    <button @click="showList('all')" :class="{ all: state === 'all' }">
      All
    </button>
    <button
      @click="showList('complete')"
      :class="{ all: state === 'complete' }"
    >
      completed
    </button>
    <button @click="showList('ongoing')" :class="{ all: state === 'ongoing' }">
      on going
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      state: "all",
    };
  },
  methods: {
    showList(by) {
      this.state = by;
      this.$emit("filterList", by);
    },
  },
};
</script>
<style>
.all,
.complete,
.ongoing {
  background-color: grey;
  color: white;
}
</style>
