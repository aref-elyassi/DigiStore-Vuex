<template>
    <div class="category">
        <h1>دسته بندی محصولات</h1>
       <select class="form-select" @change="onChange($event)" v-model="value" aria-label="Default select example">         
            
            <option value="1">گوشی</option>
            <option value="2">ساعت هوشمند</option>
            <option value="3">یخچال</option>
            <option value="4"> تلویزیون</option>
            <option value="5">لباسشویی</option>
        </select>      
        <div class="largecard" v-for="pr in product" :key="pr.id">
    <div class="myProduct">

        <h1>{{pr.title}}</h1>
        <div class="smallcards">
            <div  v-for="p in pr.product" :key="p.id">        
                <div class="smallcard">
                    <img :src="require(`@/assets/img/${p.image}`)" alt="">
                    <hr>
                    <h5>{{p.name}}</h5>
                    <div class="button">   
                        <router-link class="router" :to="{name:'productId',params:{id:p.id}}">نمایش جزئیات محصول</router-link>
                        <button @click="addToCart(p)">اضافه کردن به سبد خرید</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

</template>

<script>
import { computed,reactive } from 'vue';
import { useStore } from 'vuex';



    export default {
    name: "CategoryComponent",
    setup() {
        const store = useStore();
        var product = reactive({});
        function onChange(event) {
            product.value = computed(() => store.getters.getProductsById(event.target.value));
            console.log(product.value.product,product.value);
        }
         function addToCart(p){
             store.dispatch('addToCart',p)
         }   
        return { onChange, product,addToCart };
    },
   
}
</script>

<style  scoped>
.smallcards{
display: flex;
}

.myProduct{
    display: flex;
    align-items: center;
    justify-content: space-evenly  ;
    flex-direction: column;
}
button{
    margin-top:15px;   
    text-align: center;
    background: #3ebed7;
    border: 1px solid #fff;
    border-radius: 5px;
    height: 2rem;
 
}
button:hover{
    background: #f15d03;
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
    border-bottom: 2px solid #000;
}
.router:hover{
    color: rgb(255, 0, 55);
     border-bottom: 2px solid rgb(255, 0, 55);;
}
.form-select{
    width: 15%;
    height: 3rem;
    margin-right: 20px;
    margin-top: 2rem;
}
.category{
    display: flex;
   align-items: center;
    flex-direction: column;
    margin-top: 2rem;
    
    padding: 20px;
}
.category>h1{
    border-bottom: 2px solid #000;
}
.smallcards{
display: flex;
}

.myProduct{
    display: flex;
    align-items: center;
    justify-content: space-evenly  ;
    flex-direction: column;
}
.myProduct>h1{
    border-bottom:2px solid #000 ;
}
.largecard{
    width: 80%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;
}
</style>