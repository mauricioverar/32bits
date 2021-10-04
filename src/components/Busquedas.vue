<template>
  <div>
    <lista
      :busquedas="busca"
      :listaTotal="productosConStock"
      :selUsuario="busqueda" >
    </lista>

    <p>Búsqueda de Juegos</p>
    <input type="text" v-model="busqueda" />
    <p>Cantidad de juegos totales: <span v-text="juegosDisponibles"></span></p>
    <p>Cantidad de stock total de juegos <span v-text="juegosTotales"></span></p>
    <div>
      <hr />
      <h3>Listado de Juegos</h3>
      <ul class="list">
        <li
          v-for="(producto, clave) in productosConStock"
          :key="clave"
          :style="[styleObject, { backgroundColor: producto.color }]" >
          <label>{{ producto.id }} | {{ producto.nombre }} |{{ producto.stock }} |
            {{ producto.precio }} |
          </label>
        </li>
      </ul>
      <hr />
    </div>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import Lista from "./Lista"

export default {
  data() {
    return {
      busquedaPorId: "",
      busqueda: "",

      styleObject: {
        fontWeight: "bold",
        color: "black",
      },
    }
  },

  components: {
    Lista,
  },

  computed: {
    ...mapGetters(["productosConStock", "juegosDisponibles"]),

    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.busquedaPorId)
    },

    ...mapState({
      totalVentas: (state) => {
        return `Total Ventas: $${state.totalVentas}`
      },
    }),

    juegosTotales() {
      let total = 0
      for (var i of this.$store.getters.productosConStock) {
        total = total + parseInt(i.stock)
      }
      return total
    },

    busca() {
      return this.$store.getters.productoDisponiblePorId(this.busqueda)
    },
  },
}
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
.list {
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: justify;
}
</style>
