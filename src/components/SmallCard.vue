<template>
  <div class="smallcard">
    <img :src="require(`@/assets/img/${productsDetail.image}`)" alt="">
    <h3>{{productsDetail.name}}</h3>
    <p>{{productsDetail.description}}</p>
    <p>قیمت:{{productsDetail.price}}تومان</p>
   <div class="button">
    <button class="btn btn-info" :to="`/${productsDetail.id}`">نمایش جزئیات محصول</button>
       <button class="btn btn-primary">اضافه کردن به سبد خرید</button>
   </div>
  </div>
</template>

<script>

    export default {
        props:['productsDetail'],
        name:'SmallCard'
       
    }
</script>

<style scoped>

.button{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
}
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
.router{
    text-decoration: none;
    color: #000;
}
.router:hover{
    color: blue;
}
</style>