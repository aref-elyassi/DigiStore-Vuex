<template>
    <div>
            <CardView :products="product"/>
    </div>
</template>

<script>



import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import CardView from '@/components/CardView.vue';


    export default {
    setup() {
      
        const store = useStore();
        const router = useRoute();
       const product = computed(() => store.getters.getProductById(router.params.id));
        console.log(router.params.id);
        return { product };
    },
    components: { CardView }
}
 

</script>

<style  scoped>

</style>