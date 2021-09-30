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
        // pertenece a state?
    //contiene todos los getters (acá solo hay uno productosConStock)
    productosConStock: (state) => {
        // state contiene los estados del store
        return state.productos.filter((producto) => {
          //filtro de los productos para sólo retornar aquellos que tengan stock
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
    mutations: {},
    actions: {}
})
export default store