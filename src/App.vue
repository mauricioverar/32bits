<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav class="navbar navbar-light" style="background-color: black">
      <div class="block">
        <router-link :to="{ name: 'inicio' }" class="menu">Inicio</router-link>
        <router-link :to="{ name: 'busquedas' }" class="menu">Búsquedas</router-link>
        <router-link :to="{ name: 'ventas' }" class="menu">Ventas</router-link>
        <router-link :to="{ name: 'total' }" class="menu">Total</router-link>
      </div>
      <!-- Navbar content -->
    </nav>
    <div class="title">
      <h1 v-text="titulo"></h1>
      <h2 v-text="subtitulo"></h2>
    </div>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    
    return {
      busquedaPorId: "",
      subtitulo:"Juegos de PC y consolas"
    };
  },
  computed: {
    titulo() {
      return "32bits";
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.block {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.menu {
  color: white;
  margin-left: 40px;
}
</style>
