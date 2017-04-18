<template>
  <div id="toolbar">
    <i @click="addNote" class="fa fa-plus"></i>
    <i @click="toggleFavNote" class="fa fa-star-o"
        :class="{ starred: activeNote.favorite }"></i>
    <i @click="deleteNote" class="fa fa-close"></i>
  </div>
</template>

<script>
export default {
  methods: {
    addNote() {
      this.$store.dispatch('addNote');
    },
    toggleFavNote() {
      this.$store.dispatch('toggleFavNote');
    },
    deleteNote() {
      this.$store.dispatch('deleteNote');
    },
  },
  computed: {
    activeNote() {
      return this.$store.getters.activeNote;
    },
  },
};

</script>
