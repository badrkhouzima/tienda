<template>
  <header>
    <div class="buscar">
      <input
        size="30"
        v-model="store.filtro"
        placeholder="buscar articulos.."
      />
      <router-link to="/">Buscar</router-link>
    </div>
    <div class="carrito__login">
      <carritoComponente></carritoComponente>
      <LoginVue></LoginVue>
    </div>
    <!-- <small>{{ store.userData.nombre }}</small> -->
  </header>
</template>

<script>
import { store } from "@/components/store.js";
import carritoComponente from "@/components/carrito-componente.vue";
import LoginVue from "../views/LoginVue.vue";

export default {
  name: "cabecera",
  components: { carritoComponente, LoginVue },
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
  /* align-items: center; */
  /* justify-content: space-between; */
}
.carrito__login{
  display: flex;
  align-items: center;
}
</style>
