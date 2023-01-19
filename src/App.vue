<template>
  <nav>
    <router-link to="/">Galería</router-link>  |
    <cabecera></cabecera>
  </nav>
  <router-view/>
</template>

<script>
import cabecera from "./components/cabecera"

export default {
  name:'appVue',
  components: {cabecera}

}

</script>

<style>


nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>
