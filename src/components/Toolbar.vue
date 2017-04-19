<template>
  <div id="toolbar" class="toolbar">
    <i @click="addNote" class="fa fa-plus fa-2x toolbar-btn"></i>
    <br/>
    <i @click="toggleFavNote" class="fa fa-star-o fa-2x toolbar-btn"
        :class="{ starred: activeNote.favorite }"></i>
    <br/>
    <i @click="deleteNote" class="fa fa-close fa-2x toolbar-btn"></i>
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
