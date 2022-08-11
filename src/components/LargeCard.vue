<template>
    <div class="largecard" v-for="pr in product" :key="pr.id">
    <div class="myProduct">

        <h1>{{pr.title}}</h1>
        <div class="smallcards">
            <div  v-for="p in pr.product" :key="p.id">        
                <SmallCard :products="p"/>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import SmallCard from '@/components/SmallCard.vue'

    export default {
        components:{
            SmallCard
        },
    setup() {
        const store = useStore();
        const product = computed(() => store.getters.allProducts);
        return { product };
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
</style>