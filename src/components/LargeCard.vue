<template>
    <div v-for="pr in product" :key="pr.id">
            <h1>{{pr.title}}</h1>
            <div v-for="p in pr.product" :key="p.id">        
                <SmallCard :productsDetail="p"/>
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

</style>