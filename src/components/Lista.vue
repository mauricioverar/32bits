<template>
  <div>
      <ul v-show="selUsuario !='' && busquedas.length > 0">
          <li v-for="(item,index) in busquedas" :key="index">
              <label>
                  {{item.codigo}} | {{item.nombre}} | {{item.stock}} | {{item.precio}}
              </label>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Lista',
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
  }
}
</script>