<template>
  <div class="editor">
    <input type="text" class="title" placeholder="Title"
        :value="activeNoteTitle"
        @input="editNoteTitle" :disabled="notes.length === 0">
    </input>
    <textarea :value="activeNoteText" class="text" placeholder="Text"
        @input="editNoteText" :disabled="notes.length === 0">
    </textarea>
  </div>
</template>

<script>

export default {
  methods: {
    editNoteTitle(e) {
      this.$store.dispatch('editNoteTitle', e.target.value);
    },
    editNoteText(e) {
      this.$store.dispatch('editNoteText', e.target.value);
    },
  },
  computed: {
    activeNoteTitle() {
      return this.$store.getters.activeNoteTitle;
    },
    activeNoteText() {
      return this.$store.getters.activeNoteText;
    },
    notes() {
      return this.$store.getters.notes;
    },
  },
};

</script>
