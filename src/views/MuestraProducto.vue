<template>
    
    <producto v-on:compra-de-producto="compraDeProducto" :id="idSeleccionado"></producto>

</template>
<script>
import producto from '@/components/producto.vue'
import {store} from '@/components/store.js'

export default {
  name: 'MuestraProducto',
  components: {producto},
    data: function() {
        return {
            store,
            idSeleccionado:1
        }
    },
    created:function() {
        this.idSeleccionado=this.$route.params.idProducto
    },
    methods:{
        buscaEnCarrito:function(modelo) {
            for(let i in this.store.carrito) {
                if (this.store.carrito[i].modelo.ref==modelo.ref) {
                    return this.store.carrito[i]
                }
            }
            return null
        },
        compraDeProducto:function(modelo) {
            console.log(modelo)
            let e=this.buscaEnCarrito(modelo)
            if (e==null)
                this.store.carrito.push({modelo:modelo,cantidad:1})    
            else
                e.cantidad++
        },
    },
    
}
</script>