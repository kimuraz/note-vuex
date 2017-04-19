<template>
  <div class="notes-list">
    <div class="list-btns">
      <button @click="show = 'all'">All</button>
      <button @click="show = 'favorites'">Favorites</button>
    </div>
    <ul v-for="note in filteredNotes">
      <li @click="setActiveNote(note)" :class="{'selected-note': activeNote === note}">{{ note.title }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: 'all',
      };
    },
    methods: {
      setActiveNote(note) {
        this.$store.dispatch('setActiveNote', note);
      },
    },
    computed: {
      activeNote() {
        return this.$store.getters.activeNote;
      },
      notes() {
        return this.$store.getters.notes;
      },
      filteredNotes() {
        if (this.show === 'all') {
          this.setActiveNote(this.notes[0]);
          return this.notes;
        } else if (this.show === 'favorites') {
          const filtered = this.notes.filter(note => note.favorite);
          this.setActiveNote(filtered[0]);
          return filtered;
        }
        return this.notes;
      },
    },
  };
</script>
