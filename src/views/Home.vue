<template>
    <div>       
    <Carousel/>
    <Category/>
 
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Category from './Category.vue';



    export default {
    name: "HomeC",
    components: { Carousel, Category }
}
</script>

<style  scoped>

</style>