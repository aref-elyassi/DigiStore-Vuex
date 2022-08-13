<template>
    <div class="allrep">
        <h1>لیست نمایندگی ها</h1>
        <LargeRep/>
    </div>
</template>

<script>
import LargeRep from '@/components/LargeRep.vue';
    export default {
    components: { LargeRep }
}
</script>

<style  scoped>
.allrep{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
}
.allrep>h1{
    border-bottom: 2px solid #000;
}
</style>