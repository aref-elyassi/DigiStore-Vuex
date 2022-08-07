<template>
    <div class="carousel">
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img :src="require('@/assets/img/S22.png')" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
       
        <h3>به روزترین گوشی های دنیا را از ما خرید کنید</h3>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img :src="require('@/assets/img/Xiaomi.png')" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        
        <h3>بهترین کیفیت ها را با ما تجربه کنید</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img :src="require('@/assets/img/a52s.png')" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      
         <h3>به روزترین گوشی های دنیا را از ما خرید کنید</h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
</template>

<script>
    export default {
        name:'CarouselComponent'
    }
</script>

<style  scoped>
.carousel-caption>h3 ,.carousel-caption>p{
  color:#000
}

.carousel-item{
  width: 100%;
  height: 25rem;
 
}
.carousel-item img{
  width: 30rem;
  height: 20rem;
  object-fit: contain;
}
.carousel{
  border-bottom: 2px solid #000;
   background: #78a6c8;
}
</style>