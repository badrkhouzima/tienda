<template>
  <div v-for="(producto, indice) in productosFiltrados">
    <div v-if="indice % 3 == 0" class="flex-container mt-4">
      <div v-for="subindice in 3" class="flex-1 text-center">
        <div
          v-if="indice + (subindice - 1) < productosFiltrados.length"
          class=""
        >
          <router-link
            :to="{
              name: 'MuestraProducto',
              params: {
                idProducto: productosFiltrados[indice + (subindice - 1)].id,
              },
            }"
          >
            <img
              :src="productosFiltrados[indice + (subindice - 1)].imagen"
              height="100"
            />
          </router-link>
          <br />{{ productosFiltrados[indice + (subindice - 1)].nombre }}
          <br />{{ productosFiltrados[indice + (subindice - 1)].precio }}€
        </div>
      </div>
      <!--<div v-if="indice+1<productos.length" class="flex-1" style="text-align: center;">
                <img :src="productos[indice+1].imagen" height="100">
                <br>{{productos[indice+1].nombre}}
                <br>{{productos[indice+1].precio}}€
            </div>
            <div v-if="indice+2<productos.length" class="flex-1" style="text-align: center;">
                <img :src="productos[indice+2].imagen" height="100">
                <br>{{productos[indice+2].nombre}}
                <br>{{productos[indice+2].precio}}€
            </div>-->
    </div>
  </div>
</template>
<script>
import { store } from "@/components/store.js";
export default {
  name: "GaleriaView",
  data: function () {
    return {
      store,
      productos: [],
     // filtro: store.filtro,
    };
  },
  created: function () {
    let url = "http://46.101.223.217/pcd/productos.php";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => {
        //'json' ya es el 'JSON texto' transformado a array, como lo hacíamos con JSON.parse()
        console.log(json);
        this.productos = json;
      });
  },
  computed: {
    productosFiltrados: function () {
      const filtro = this.store.filtro.toLowerCase();
      const productos_filtrado = this.productos.filter((ele) =>
        ele.nombre.toLowerCase().includes(filtro)
      );
      return productos_filtrado;
    },
  },
};
</script>
<style scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.flex-1 {
  flex: 1;
}
.contorno {
  border: 1px solid black;
  border-radius: 15px;
}
</style>
