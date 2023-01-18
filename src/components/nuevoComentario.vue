<template>
    <div>
        <textarea rows=4 cols=50 v-model="nuevoComentario"></textarea>
        Valoración:
        <select v-model="nuevaValoracion">
            <option v-for="numero in 5" :value="numero" :key="numero">{{numero}}</option>
        </select>
        <button @click="añadirComentario">Añadir comentario</button>
    </div>
</template>
<script>
export default {
    name:'nuevoComentario',
    data:function(){
        return {
            nuevoComentario:"",
            nuevaValoracion:0
        }
    },
    emits: ['nuevo-comentario'],
    methods:{
        añadirComentario:function() {
            if (this.nuevoComentario.length>5 && this.nuevaValoracion>0) {
                this.$emit("nuevo-comentario",
                    {texto:this.nuevoComentario,valoracion:this.nuevaValoracion,fecha:this.fecha()}
                )
                this.nuevoComentario=""
                this.nuevaValoracion=""
            }
            else {
                alert("Falta información en la valoración: o bien no has seleccionado una valoración o bien el comentario es demasiado corto.")
            }
        },
        fecha:function () {
            let d=new Date();   //recogemos la fecha y hora actuales
            let day = d.getDate()
            let month = d.getMonth() + 1
            let year = d.getFullYear()
    
            if(month < 10){
                //d=day+"-0"+month+"-"+year
                d=(`${day}-0${month}-${year}`)
            }else{
                d=(`${day}-${month}-${year}`)
            }
            return d;
        }
    },
}
</script>