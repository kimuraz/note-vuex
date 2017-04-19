<template>
  <div>
    <ul v-for="note in notes">
      <li @click="setActiveNote(note)">{{ note.title }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      setActiveNote(note) {
        this.$store.dispatch('setActiveNote', note);
      },
    },
    computed: {
      notes() {
        return this.$store.getters.notes;
      },
    },
  };
</script>
