<template>
    <div class="category">
       <select class="form-select" @change="onChange($event)" v-model="value" aria-label="Default select example">
          <option  selected>انتخاب کنید</option>
            <option value="1">گوشی</option>
            <option value="2">ساعت هوشمند</option>
            <option value="3">یخچال</option>
            <option value="4"> تلویزیون</option>
            <option value="5">لباسشویی</option>
        </select>
       
        <div class="largecard" v-for="pro in products" :key="pro.id">
            <div class="myProduct">
                <h1>{{pro.title}}</h1>
                <div class="smallcards">
                    <div  v-for="p in pro.product" :key="p.id">        
                        <SmallCard :products="p"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { computed,reactive } from 'vue';
import { useStore } from 'vuex';
import SmallCard from '@/components/SmallCard.vue';


    export default {
    name: "CategoryComponent",
    setup() {
        const store = useStore();
        var products = reactive({});
        function onChange(event) {
            products.value = computed(() => store.getters.getProductsById(event.target.value));
            console.log(products.value.product);
        }
        return { onChange, products };
    },
    components: { SmallCard }
}
</script>

<style  scoped>
.form-select{
    width: 15%;
    height: 3rem;
}
.category{
    display: flex;
    justify-content: space-between;
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
.largecard{
    width: 80%;
display: flex;
align-items: center;
justify-content: center;
}
</style>