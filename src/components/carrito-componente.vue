<template>
    <span class="position-relative">
        <img src="@/assets/img/carrito.png" width=40 data-bs-toggle="modal" data-bs-target="#ventanaCarrito">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{carritoCantidad}}
        </span>
    </span>

    <div id="ventanaCarrito" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Carrito: (Precio Total: {{this.precioTotal}}€)</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <div v-if="carritoCantidad==0">El carrito está vacío.<br>HAZ EL FAVOR DE COMPRAR ALGO, QUE ESTAMOS EN REBAJAS!!!!!</div>
                        <div v-for="elementoDeCarrito in store.carrito" :key="elementoDeCarrito.id" style="border-top:1px solid black">
                            <img :src="elementoDeCarrito.modelo.imagen" width=50> {{elementoDeCarrito.modelo.nombre}} {{elementoDeCarrito.modelo.precio}}€
                            Cantidad: {{elementoDeCarrito.cantidad}}
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn boton-naranja" :disabled="carritoCantidad==0" >Pagar y finalizar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {store} from '@/components/store.js'
export default {
    name:'carritoComponente',
    data: function() {
        return {
            store
        }
    },
    computed:{
        precioTotal:function(){
            let suma=0
            for(let i in this.store.carrito) {
                suma=suma+this.store.carrito[i].modelo.precio * this.store.carrito[i].cantidad
            }
            return suma
        },
        carritoCantidad:function() {
            let suma=0
            for(let i in this.store.carrito)
                suma=suma+this.store.carrito[i].cantidad
            return suma
        }
    },
}
</script>