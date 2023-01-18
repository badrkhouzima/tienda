<template>
  <header>
    <div>Buscar:<input size="30" v-model="store.filtro" /></div>
    <router-link to="/">Buscar</router-link>
    <carritoComponente></carritoComponente>
    <login></login>
    <small>{{ store.userData.nombre }}</small>
  </header>
</template>

<script>
import { store } from "@/components/store.js";
import carritoComponente from "@/components/carrito-componente.vue";
import login from "@/components/login.vue";

export default {
  name: "cabecera",
  components: { carritoComponente,login },
  data: function () {
    return {
      store,
    };
  },
};
</script>

<style scoped>
header {
  display: flex;
  display: row;
}
</style>
