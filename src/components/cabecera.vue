<template>
  <header>
    <div>Buscar:<input size="30" v-model="store.filtro" /></div>
    <router-link to="/">Buscar</router-link>
    <carritoComponente></carritoComponente>
    <LoginVue></LoginVue>
    <small>{{ store.userData.nombre }}</small>
  </header>
</template>

<script>
import { store } from "@/components/store.js";
import carritoComponente from "@/components/carrito-componente.vue";
import LoginVue from "../views/LoginVue.vue";

export default {
  name: "cabecera",
  components: { carritoComponente,LoginVue },
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
