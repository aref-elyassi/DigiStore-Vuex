<template>
 <div class="app">
  <Header/>
   <router-view/>
 </div>
</template>
<script>
import Header from './components/Header.vue';

  export default{
    components: { Header }
}
</script>
<style>
@font-face {
  font-family: "Yekan";
  src: local("Yekan"),
   url(./assets/B_Yekan/Yekan.ttf) format("truetype");
}

.app{
  font-family: Yekan;
  direction: rtl;
}

</style>
