<template>
    <div>       
    <Carousel/>
    <LargeCard/>
    
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import LargeCard from '@/components/LargeCard.vue';
    export default {
    name: "HomeC",
    components: { Carousel, LargeCard }
}
</script>

<style  scoped>

</style>