<template>
  <div>
    <div class="list">
      <listaVenta
        :busquedas="busca"
        :listaTotal="productosConStock"
        :selUsuario="busqueda" >
      </listaVenta>

      <p>Cantidad de stock total de juegos: <span v-text="juegosTotales"></span></p>
      <p>Cantidad de productos con stock: <span v-text="productosConStock.length"></span>
      </p>

      <hr />
      <ul>
        <li
          v-for="(producto, clave) in productosConStock"
          :key="clave"
          :style="[styleObject]" >
          <label>
            {{ producto.id }} | {{ producto.nombre }} |{{ producto.stock }} | {{ producto.precio }} |
          </label>
          <input type="button" value="Vender" @click="vender(producto)" />
        </li>
      </ul>
      <hr />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
import ListaVenta from "./Lista"

export default {
  data() {
    return {
      busquedaPorId: "",
      busqueda: "",
      subtitulo: "Juegos de PC y consolas",

      styleObject: {
        fontWeight: "bold",
        color: "black",
      },
    };
  },

  methods: {
    ...mapActions(["vender"]),
  },
  components: {
    ListaVenta,
  },

  computed: {
    ...mapGetters(["productosConStock", "juegosDisponibles", "ventas"]),

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