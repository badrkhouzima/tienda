<template>
    <div style="background-color:#eee">
        <h4>Comentarios:</h4>
        <div v-for="comentario,indice in lista" :key="indice">
        {{comentario.fecha}} 
        <img v-for="n in comentario.valoracion" :key="n" src="@/assets/img/estrella2.png" width=10>
        <img v-for="n in 5-comentario.valoracion" :key="n" src="@/assets/img/estrella_gris.jpg" width=10>
        ({{comentario.valoracion}})
        <br>
        {{comentario.texto}}
        </div>
    </div>
</template>
<script>
export default {
    name:'comentarios',
    props:['lista'],
}
</script>