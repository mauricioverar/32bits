<template>
  <div>      
      <p>Listado de Juegos</p>
      <ul v-show="selUsuario==''">
      <li v-for="(item,index) in listaTotal" :key="index">
          <label>{{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}}
          <button @click="botonAccion(item.codigo)">Vender</button>
          </label>
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'ListaVenta',
  props: {
      busquedas: {
          type: Array,
          required: false
      },
      listaTotal: {
          type: Array,
          required: false
      },
      selUsuario: {
          type: String,
          required: false
      }
  },
  methods: {
      botonAccion(cod) {
          console.log('Boton presionado', cod)
      }
  }

}
</script>