<template>
    <div class="mainContent">
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
                </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img :src="require('@/assets/img/Xiaomi.png')" class="d-block w-100" alt="...">
     
    </div>
    <div class="carousel-item">
      <img :src="require('@/assets/img/a52s.png')" class="d-block w-100" alt="...">
    </div>
  </div>
            </div>
        </div>
        <h1>محصولات ما</h1>
        <div>
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ContentSlider'
    }
</script>

<style  scoped>
.mainContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
}
img{
    width: 10rem;
    height: 10rem;
}
</style>