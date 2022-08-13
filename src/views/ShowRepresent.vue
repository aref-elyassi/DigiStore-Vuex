<template>
    <div>
        <CardRep :represent="represent"/>
    </div>
</template>

<script>



import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import CardRep from '../components/CardRep.vue';






    export default {
    setup() {
        const store = useStore();
        const router = useRoute();
        const represent = computed(() => store.getters.getRepresentById(router.params.id));
        console.log(router.params.id, represent.value);
        return { represent };
    },
    components: { CardRep }
}
 

</script>

<style  scoped>

</style>