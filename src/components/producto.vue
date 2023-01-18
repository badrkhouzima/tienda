<template>
    <div v-if="jsonRecibido" class="container_producto">
        <div><h1>{{nombre}}</h1>
        <button v-on:click="comprar" :disabled="modelos[indiceSeleccionado].stock==0">Compra</button>
        <table><tr>
            <td><img :src="modelos[indiceSeleccionado].imagen" width=150></td>
            <td>
                <div v-for="(modelo,indice) in modelos" style="display:flex" :key="modelo.id">
                    <li class="circuloColor" @click="indiceSeleccionado=indice" :style="{'background-color':modelo.color}"></li>{{modelo.nombre}}
                </div>
                
            </td>
        </tr></table>
        <div v-if="modelos[indiceSeleccionado].stock > 0">Stock: {{modelos[indiceSeleccionado].stock}}</div>
        <div v-else style="background-color:red;color:white">No hay stock</div>
        
        <br>
        Precio: {{modelos[indiceSeleccionado].precio}}€
        </div>
        <nuevoComentario @nuevo-comentario="añadirComentario"></nuevoComentario>
        <comentarios :lista="comentarios"></comentarios>
    </div>
    {{cargaProducto()}}
</template>
<script>
import nuevoComentario from '@/components/nuevoComentario.vue'
import comentarios from '@/components/comentarios.vue'

export default {
  name: 'producto',
  components: {nuevoComentario,comentarios},
  /*props: {
    msg: String
  }*/
    props:['id'],
    watch: {
        id:function(nuevoValor,viejoValor){
            if (nuevoValor!=viejoValor)
                this.jsonRecibido=false;
        }
        
    },
    data:function() {
        return {
            indiceSeleccionado:0,
            nombre:"",
            modelos:[],
            /*nombre:"Maleta",
            indiceSeleccionado:0,
            modelos: [
                {nombre:"Golden rose", color:"#e7b2a4",stock:10,precio:30,cantidad:0,imagen:"img/bolsa_rosa.png"},
                {nombre:"Verde pistacho", color:"#a9d39e",stock:20,precio:50,cantidad:0,imagen:"img/bolsa_verde.png"},
                {nombre:"Lila", color:"#e594eb",stock:0,precio:40,cantidad:0,imagen:"img/bolsa_lila.png"},
            ],*/
            comentarios:[],
            jsonRecibido:false
        }
    },
    created:function() {
        /*let url="http://46.101.223.217/pcd/productos.php?id="+this.id
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(json => {         //'json' ya es el 'JSON texto' transformado a array, como lo hacíamos con JSON.parse()
                console.log(json)
                this.nombre=json.nombre
                this.modelos=json.modelos
                this.indiceSeleccionado=0
            })*/
    },
    methods: {
        comprar:function() {
            this.$emit("compra-de-producto",this.modelos[this.indiceSeleccionado])
        },
        añadirComentario:function(c) {
            this.comentarios.push(c)
            
        },
        cargaProducto:function (){
            console.log("cargaProducto")
            if (this.jsonRecibido==false) {
                let url="http://46.101.223.217/pcd/productos.php?id="+this.id
                fetch(url)
                    .then(respuesta => respuesta.json())
                    .then(json => {         //'json' ya es el 'JSON texto' transformado a array, como lo hacíamos con JSON.parse()
                        console.log(json)
                        this.nombre=json.nombre
                        this.modelos=json.modelos
                        this.comentarios=json.comentarios
                        this.indiceSeleccionado=0
                        this.jsonRecibido=true;
                    })
            }
            
        }
    },                        
    emits: ['compra-de-producto'],  
}
</script>
<style scoped>
/* .container_producto{
    margin-left: 100px;
} */
div{
    margin-left: 100px;  
}

</style>