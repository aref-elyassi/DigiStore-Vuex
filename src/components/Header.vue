<template>
    <div>
        <div class="text-head">
            <img :src="require('@/assets/img/image2.png')" alt="">
            </div>

            <nav>
                <ul class="right-list">
                    <li>
                        <router-link class="router" to="/">خانه</router-link>
                        </li>
                    <li>
                        <router-link to="/"  class="router">قوانین</router-link>

                    </li>
                    <li>
                        <router-link to="/about" class="router">درباره ما</router-link>
                    </li>
                    <li>
                        <router-link to="/allproduct" class="router">محصولات</router-link>
                    </li>
                    <li>
                        <router-link to="/login" class="router">ورود/ثبت نام</router-link>
                    </li>
                </ul>
              
                <ul class="left-list">
                    <li>
                        <router-link to="/" class="router">
                            <span>سبدخرید</span>
                          <span class="badge rounded-pill bg-light me-1">1</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
    </div>
</template>

<script>
    export default {
        name:'HeaderComponent'
    }
</script>

<style  scoped>
.badge{
    color: #000;
}
img{
    width: 20rem;
    height: 10rem;
    transition: 2s transform;
   
}
img:hover{
    transform: scale(1.1);

}
.text-head{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
nav{
    background: #e65c4f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  
}
ul{
    display: flex;
    align-items: center;
}
li{
    list-style: none;
}
.right-list{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.right-list li{
    margin-right: 15px;
}
.left-list li{
 margin-left: 15px;
}
.main-list{
    font-size: xx-large;
    font-weight: 600;
}
.router{
    text-decoration: none;
    color: #fff
}
.router:hover{
  
    color: rgb(238, 32, 32);
}
</style>