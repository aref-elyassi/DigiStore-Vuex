<template>
  <div class="smallcard">
    <img :src="require(`@/assets/img/${products.image}`)" alt="">
    <h5>{{products.name}}</h5>
   <div class="button">   
       <button class="btn btn-primary">اضافه کردن به سبد خرید</button>
       <router-link class="router" :to="{name:'productId',params:{id:products.id}}">نمایش جزئیات محصول</router-link>
   </div>
  </div>
</template>

<script>

    export default {
        props:{
            products:Object
        },
        name:'SmallCard'
       
    }
</script>

<style scoped>
.btn{
    margin-top:15px; 
    width: 12rem;
    height: 2rem;
    text-align: center;
 
}
.button{
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
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
    margin-top: 20px;
}
.router:hover{
    color: rgb(255, 0, 55);
}
</style>