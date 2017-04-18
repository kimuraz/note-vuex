<template>
  <div>
    <input type="text"
        :value="activeNoteTitle"
        @input="editNoteTitle">
    </input>
    <textarea :value="activeNoteText"
        @input="editNoteText">
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
  },
};

</script>
