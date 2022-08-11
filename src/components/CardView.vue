<template>
     <div class="smallcard">
    <img :src="require(`@/assets/img/${products.image}`)" alt="">
    <h3>{{products.name}}</h3>
    <p>{{products.description}}</p>
    <p>قیمت:{{products.price}}تومان</p>
    </div>
</template>

<script>
    export default {
        props:{
            products:Object
        }
    }
</script>

<style  scoped>
.smallcard{
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 5px;
    margin: 10px;
   
}
.smallcard>img{
    width: 15rem;
    height: 15rem;
    object-fit: contain;
}
.smallcard>p{
      text-align: justify;
    padding: 15px;
}
</style>