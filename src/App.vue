<template>
  <div id="app">
    <nav class="navbar navbar-light" style="background-color: black">
      <div class="block">
        <router-link :to="{ name: 'inicio' }" class="menu">Inicio</router-link>
        <router-link :to="{ name: 'busquedas' }" class="menu">Búsquedas</router-link>
        <router-link :to="{ name: 'ventas' }" class="menu">Ventas</router-link>
        <router-link :to="{ name: 'total' }" class="menu">Total</router-link>
      </div>
    </nav>
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
      
    }
  },
}
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
  margin-left: 10vw;
}
</style>
