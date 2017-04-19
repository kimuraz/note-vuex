import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {},
  },
  mutations: {
    ADD_NOTE(state) {
      const newNote = {
        title: 'New note',
        text: 'Type text',
        favorite: false,
      };
      state.notes.push(newNote);
      state.activeNote = newNote;
    },

    EDIT_NOTE_TITLE(state, title){
      state.activeNote.title = title;
    },

    EDIT_NOTE_TEXT(state, text){
      state.activeNote.text = text;
    },

    DELETE_NOTE(state){
      const idx = state.notes.indexOf(state.activeNote);
      if(idx !== -1) {
        state.notes.splice(idx, 1);
        state.activeNote = state.notes[0];
      }

    },

    TOGGLE_FAVORITE(state){
      state.activeNote.favorite = !state.activeNote.favorite;
    },

    SET_ACTIVE_NOTE(state, note){
      state.activeNote = note;
    },

  },
  actions: {
    addNote({ commit }) {
      commit('ADD_NOTE');
    },
    setActiveNote({ commit }, note ) {
      commit('SET_ACTIVE_NOTE', note);
    },
    editNoteTitle({ commit }, t ) {
      commit('EDIT_NOTE_TITLE', t);
    },
    editNoteText({ commit }, t ) {
      commit('EDIT_NOTE_TEXT', t);
    },
    deleteNote({ commit }) {
      commit('DELETE_NOTE');
    },
    toggleFavNote({ commit }) {
      commit('TOGGLE_FAVORITE');
    },
  },
  getters: {
    activeNoteTitle: state => state.activeNote.title,
    activeNoteText: state => state.activeNote.text,
    activeNote: state => state.activeNote,
    notes: state => state.notes,
  },

});
