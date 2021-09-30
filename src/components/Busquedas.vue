<template>
    <div><!---->
        <div>
            <p><label v-text="ocupado"></label>
            <input type="button" value="Cambiar estado" @click="modificarOcupado"></p>
            <p><label v-text="totalVentas"></label></p>
            <hr />
            <h1>Productos Disponibles</h1>
            <ul>
            <li v-for="(producto, clave) in productosConStock" :key="clave" :style="[{backgroundColor:producto.color}]">
                <label>{{producto.id}} | {{producto.nombre}} |{{producto.stock}} | {{producto.precio}} | </label>
                <input type="button" value="Vender" @click="vender(producto)">
            </li>
            </ul>
            <hr />
        </div>
            <router-view></router-view>
        
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    
    return {
      busquedaPorId: "",
      subtitulo:"Juegos de PC y consolas"
    };
  },

  methods: {

  ...mapMutations(['modificarOcupado']),
  ...mapActions(['modificarOcupado', 'simularOcupado']),


    /*modificarOcupado(){
      this.$store.dispatch('modificarOcupado')
    },
    vender(producto){
      this.$store.dispatch('vender', producto)
    }*/
  },

  computed: {
    titulo() {
      return "32bits";
    },

    ...mapGetters(["productosConStock"]),
    

    productoDisponiblePorId() {
      return this.$store.getters.productoDisponiblePorId(this.busquedaPorId);
    },

    ...mapState({
      ocupado: (state) => {
        return state.ocupado ? "Ocupado" : "Disponible";
      },
      totalVentas: (state) => {
        return `Total: $${state.totalVentas}`;
      },
    }),
  },
}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}


</style>
