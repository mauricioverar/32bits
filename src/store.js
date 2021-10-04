import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ocupado: false,
    totalVentas: 0,
    subtitulo: "Juegos de PC y consolas",
    titulo: "32bits",
    ventas: [],

    productos: [
      {
        id: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        id: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        id: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        id: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        id: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        id: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {
    ventas: (state) => {
      const ventas = state.ventas.map((p) => {
        const producto = state.productos.find(
          (producto) => producto.id == p.id
        )
        return { ...producto, cant: p.cant }
      })
      return ventas;
    },

    productosConStock: (state) => {
      return state.productos.filter((producto) => {
        return producto.stock > 0;
      })
    },
    productoDisponiblePorId: (state, getters) => (id) => {
      return getters.productosConStock.filter((producto) => {
        return producto.id == id
      })
    },
    juegosDisponibles: (state) => {
      return state.productos.length
    },
  },
  mutations: {
    venderProducto(state, producto) {
      state.productos.forEach((p) => {
        if (p.id == producto.id && p.stock > 0) {
          p.stock--
        }
      })
    },

    registrarVenta(state, producto) {
      state.ventas.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
      })
    },
    actualizarTotal(state, producto) {
      state.totalVentas += producto.precio
    },
  },
  actions: {
    async vender({ commit, dispatch }, producto) {
      console.log(commit)
      await dispatch("procesarVenta", producto)
        .then(() => {
          dispatch("registrarVenta", producto).then(() => {})
          alert("Venta procesada")
        })
        .catch(() => {
          alert("Venta rechazada. No hay stock o el producto no existe")
        })
      dispatch("actualizarTotal", producto)
    },
    async procesarVenta({ commit, state }, producto) {
      return new Promise((resolve, reject) => {
        let tiempoEjecucion = Math.floor(Math.random() * 2000 + 1)
        setTimeout(() => {
          let resultado = false
          state.productos.forEach((p) => {
            if (p.id == producto.id && p.stock > 0) {
              commit("venderProducto", producto)
              resultado = true
            }
          })
          if (resultado) resolve()
          else reject()
        }, tiempoEjecucion)
      })
    },
    async registrarVenta({ commit }, producto) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("registrarVenta", producto)
          resolve()
        }, 1000)
      })
    },
    actualizarTotal({ commit }, producto) {
      return new Promise((resolve, reject) => {
        console.log(resolve)
        console.log(reject)
        let tiempoEjecucion = Math.floor(Math.random() * 3000 + 1)
        setTimeout(() => {
          commit("actualizarTotal", producto)
        }, tiempoEjecucion)
      })
    },
  },
})
export default store
