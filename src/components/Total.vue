<template>
  <div>
    <div>
      <p><label v-text="totalVentas"></label></p>
      <p>Cantidad de juegos vendidos: <label v-text="ventas.length"></label></p>

      <ul>
        <p>Listado total de ventas</p>
        <li v-for="(producto, id) in ventas" :key="id">
          <label
            >{{ producto.id }} | {{ producto.nombre }} | {{ producto.precio }} |
          </label>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
  name: "Total",
  data() {
    return {
      id: 0,
    }
  },

  computed: {
    ...mapGetters(["productosConStock", "juegosDisponibles", "ventas"]),

    ...mapState({
      totalVentas: (state) => {
        return `Monto Total Ventas: $${state.totalVentas}`
      },
    }),
  },
}
</script>