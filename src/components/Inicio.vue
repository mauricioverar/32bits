<template>
  <div>
    <h1 v-text="titulo"></h1>
    <h2 v-text="subtitulo"></h2>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'Inicio',

  computed: {
    ...mapState(['titulo', 'subtitulo']),
  },
}
</script>