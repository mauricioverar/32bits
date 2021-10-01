import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        ocupado: false,
        totalVentas: 0,

        productos: [
            { id: "0001", nombre: "Sekiro", stock: 100, precio: 30000, color: "red", destacado: true },
            { id: "0002", nombre: "Fifa 21", stock: 100, precio: 25000, color: "blue", destacado: false },
            { id: "0003", nombre: "Gears of War 4", stock: 100, precio: 15000, color: "green", destacado: true },
            {
              id: "0004",
              nombre: "Mario Tennis Aces",
              stock: 100,
              precio: 35000, 
              color: "yellow", 
              destacado: false
            },
            { id: "0005", nombre: "Bloodborne", stock: 100, precio: 10000, color: "blue", destacado: false },
            { id: "0006", nombre: "Forza Horizon 4", stock: 100, precio: 20000, color: "red", destacado: true },

        ],
    },
    getters: {
    productosConStock: (state) => {
        // state contiene los estados del store
        return state.productos.filter((producto) => {
          //filtro de los productos para sólo retornar aquellos que tengan stock
          console.log(producto.stock)
          return producto.stock > 0;
        });
      },
      productosBaratosDisponibles: (state, getters) => {
        //add parámetro llamado getters el cual contiene acceso a todos los getters de este store
        return getters.productosConStock.filter((producto) => {
          return producto.precio < 1000;
        });
      },
      productoDisponiblePorId: (state, getters) => (id) => {//add para que nuestros getters sean parametrizables
        return getters.productosConStock.filter((producto) => {
          return producto.id == id;
        });
      },
    },
    mutations: {
      venderProducto(state, producto){
        state.productos.forEach((p)=>{
          if(p.id == producto.id && p.stock > 0){
            p.stock--
          }
        })
      },
      actualizarTotal(state, producto){//adelan
        state.totalVentas += producto.precio
      } 
    },
    actions: {
      async vender({commit, dispatch}, producto){
        console.log(commit)
        await dispatch('procesarVenta', producto).then(()=>{//Con esto, primero se ejecutará la venta y luego se disparará la actualización del monto total
          alert('Venta procesada')
        }).catch(()=>{
          alert('Venta rechazada. No hay stock o el producto no existe')
        })
        dispatch('actualizarTotal', producto)
      },
      async procesarVenta({commit, state}, producto){ 
        return new Promise((resolve, reject)=>{
          let tiempoEjecucion = Math.floor((Math.random() * 3000) + 1)
          console.log(tiempoEjecucion)
          setTimeout(() => {
            let resultado = false
            state.productos.forEach((p)=>{
              if(p.id == producto.id && p.stock > 0){
                commit('venderProducto', producto)
                resultado = true
              }
            })
            if(resultado)
              resolve()
            else
              reject()
          }, tiempoEjecucion);
        })
      },
      actualizarTotal({commit}, producto){
        return new Promise((resolve, reject)=>{
          console.log(resolve)
          console.log(reject)
          let tiempoEjecucion = Math.floor((Math.random() * 3000) + 1)
          setTimeout(() => {
            commit('actualizarTotal', producto)
          }, tiempoEjecucion);
        })
      }
    }
})
export default store