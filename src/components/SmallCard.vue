<template>
  <div>
    <img :src="require(`@/assets/img/${productsDetail.image}`)" alt="">
    <h3>{{productsDetail.name}}</h3>
    <p>{{productsDetail.description}}</p>
    <p>{{productsDetail.price}}</p>
  </div>
</template>

<script>

    export default {
        props:['productsDetail'],
        name:'SmallCard'
       
    }
</script>

<style scoped>

</style>