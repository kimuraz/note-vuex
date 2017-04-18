<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>

import Editor from './components/Editor';
import NoteList from './components/NoteList';
import Toolbar from './components/Toolbar';

export default {
  name: 'app',
  components: {
    Editor,
    NoteList,
    Toolbar,
  },
};
</script>
