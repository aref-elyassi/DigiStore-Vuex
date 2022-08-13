<template>
    <div class="represent">
             <img :src="require(`@/assets/img/${represent.image}`)" alt=""/>
             <h3>آدرس:{{represent.address}}</h3>
           <router-link class="router" :to="{name:'representId',params:{id:represent.id}}">نمایش جزئیات نمایندگی</router-link>
    </div>
</template>

<script>
    export default {
        name:'SmallRep',
        props:{
            represent:Object
        }
    }
</script>

<style  scoped>
.represent{
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
  
}
.represent>img{
    width: 15rem;
    height: 15rem;
    object-fit: contain;
   
}
.representx>p{
    text-align: justify;
    padding: 15px;
}
.router{
    text-decoration: none;
    color: #000;
    margin-top: 20px;
    border-bottom: 2px solid #000;
}
.router:hover{
    color: rgb(255, 0, 55);
     border-bottom: 2px solid rgb(255, 0, 55);;
}
</style>