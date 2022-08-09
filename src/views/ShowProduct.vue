<template>
    <div>
        <SmallCard :productsDetail="product"/>
    </div>
</template>

<script>
import SmallCard from '@/components/SmallCard.vue'
import {computed} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
    export default {
        name:'ShowProduct',
    components: { SmallCard },
    setup() {
        
        const router = useRoute();
        const store=useStore()
        const product=computed(()=>store.getter.getProdutById(`${router.params.id}`))
        return{product}
    }

}
</script>

<style  scoped>

</style>