<template>
<div class="content">
    <div class="smallcard">
        <img :src="require(`@/assets/img/${products.image}`)" alt="">
            <h3>{{products.name}}</h3>
            <p>{{products.description}}</p>
            <p>قیمت:{{products.price}}تومان</p>
            <p>ساخت:{{products.country}}</p>
            <router-link class="router" to="/products">برگشت به صفحه محصولات</router-link>
    </div>
</div>
</template>

<script>
    export default {
        props:['products']
    }
</script>

<style  scoped>
.content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.smallcard{
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 5px;
    margin: 10px;
    width: 50%;
    background: #f3f3f3;
    box-shadow: 5px 5px 5px 0 rgb(230, 230, 230);
   
}
.router{
    text-decoration: none;
    color: #000;

}
.router:hover{
    border-bottom: 1px solid #e33247;
    color:#e33247 ;
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