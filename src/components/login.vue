<template>
  <div class="login">
    <input type="number" ref="idValue" />
    <input type="button" value="Login" @click="getData" />
  </div>
</template>
<script>
import { store } from "@/components/store.js";
export default {
  name: "login",
  data: function () {
    return {
      store,
      id: "",
      user: [],
    };
  },
  methods: {
    getData() {
      this.id = this.$refs.idValue.value;
      let url = "http://46.101.223.217/pcd/usuario.php?id=" + this.id;
      fetch(url)
        .then((res) => res.json())
        .then((resparam) => {
          console.log("check my json", resparam);
          this.store.userData = resparam;
         // this.user = json;
         console.log("check my store", this.store.userData);

        });
    },
  },
};
</script>

<style scoped>
.login {
  margin-left: 200px;
}
</style>
