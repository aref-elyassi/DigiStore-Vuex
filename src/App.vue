<template>
 <div class="app">
  <Header/>
   
   <router-view class="router"></router-view>
 </div>
</template>
<script>
import Header from './components/Header.vue';

  export default{
    components: { Header }
}
</script>
<style scoped>
@font-face {
  font-family: "Yekan";
  src: local("Yekan"),
   url(./assets/B_Yekan/Yekan.ttf) format("truetype");
}

.app{
  font-family: Yekan;
  direction: rtl;
}
.router{
 
  margin-top: 0.5rem;
}

</style>
