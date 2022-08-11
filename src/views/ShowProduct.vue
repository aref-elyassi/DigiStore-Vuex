<template>
    <div>
            {{product.name}}
    </div>
</template>

<script>



import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';


    export default {
    setup() {
        let product = ref({})
        const store = useStore();
        const router = useRoute();
         product = computed(() => store.getters.getProductById(router.params.id));
         console.log(product);
        console.log(router.params.id);
        return { product };
    },
   
}
 

</script>

<style  scoped>

</style>