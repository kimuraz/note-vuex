export const addNote = ({ dispatch }) => {
  dispatch('ADD_NOTE');
};

export const setActiveNote = ({ dispatch }, note ) => {
  dispatch('SET_ACTIVE_NOTE', note)
};

export const editNoteTitle = ({ dispatch }, t ) => {
  dispatch('EDIT_NOTE_TITLE', t.target.value);
};

export const editNoteText = ({ dispatch }, t ) => {
  dispatch('EDIT_NOTE_TEXT', t.target.value);
};

export const deleteNote = ({ dispatch }, note ) => {
  dispatch('DELETE_NOTE', note);
};

export const toggleFavNote = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE');
};
