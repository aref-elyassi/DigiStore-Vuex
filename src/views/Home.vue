<template>
    <div>       
    <Carousel/>
    <CategoryProduct/>
    <RepresentCategory/>
 
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import CategoryProduct from '@/components/ProductCategory.vue';
import RepresentCategory from '@/components/RepresentCategory.vue';



    export default {
    name: "HomeC",
    components: { Carousel, CategoryProduct, RepresentCategory }
}
</script>

<style  scoped>

</style>