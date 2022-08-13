<template>
    <div class="content">
        <div class="smallcard">

            <img :src="require(`@/assets/img/${represent.image}`)" alt=""/>
             <h3>آدرس:{{represent.address}}</h3>
             <p>{{represent.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'CardRep',
        props:['represent']
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
    background: #3ebed7;
    box-shadow: 2px 2px 5px 0 #3ebed7;
   
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