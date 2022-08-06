<template>
 <div class="app">
  <Header/>
   <router-view class="router"/>
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
  background: #c9d8b9;
}

</style>
