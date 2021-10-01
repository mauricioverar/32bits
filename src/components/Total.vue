<template>
<div>
  <p><label v-text="totalVentas"></label></p>
  </div>
</template>

<script>

export default {
  data() {
    
    return {
      busquedaPorId: "",
      subtitulo:"Juegos de PC y consolas",
      styleObject: {
            fontWeight:'bold',
            color:'black',
        },
    };
  },
  computed: {
    totalVentas: (state) => {
        return `Total: $${state.totalVentas}`;
      },
  }
}
</script>