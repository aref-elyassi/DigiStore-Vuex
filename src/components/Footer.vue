<template>
    <div class="footer">
        <footer>
            <ul>
                <li>
                    <router-link class="router" to="/">
                        <p>خانه</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="router" to="/rules">
                        <p>مقررات</p>
                    </router-link>
                </li>
                <li>
                    <router-link class="router" to="/products">
                        <p>محصولات</p>
                    </router-link>
                </li>
                 <li>
                    <router-link class="router" to="/login">
                        <p>ورود</p>
                    </router-link>
                </li>
            </ul>
             <ul>
            <li>
                <p>گوشی</p>
            </li>
             <li>
                <p>تلویزیون</p>
            </li>
             <li>
                <p>یخچال</p>
            </li>
             <li>
                <p>لباسشویی</p>
            </li>
           </ul>
           <ul>
            <li>
                <p> بهترین محصولات را از ما بخواهید</p>
            </li>
            <li>
                <p>آدرس:تهران خیابان انقلاب</p>
            </li>
            <li>
                <p>تلفن:021123456789</p>
            </li>
           </ul>
          
          <div class="left-footer">
           <img :src="require('@/assets/img/image2.png')" alt="">
          </div>

        </footer>
    </div>
    <div class="law">
        <p>© تمامی حقوق محفوظ است ۱۳۸۵ - ۱۴۰۱</p>
    </div>
</template>

<script>
    export default {
        name:'FooterComponent'
    }
</script>

<style  scoped>
.footer{
    display: flex;
    width: 100%;
   margin-top: 20px;
    background: #00001c;
    color: #fff;
}
footer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
ul{
    display: flex;
    flex-direction: column;
}
li{
    list-style: none;
}
.router{
    text-decoration: none;
    color: #fff;
}
.router:hover{
    color: rgb(165, 42, 50);
}
img{
    width: 15rem;
    height: 7rem;
}
.left-footer{
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
.law{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: rgb(45, 45, 45);
    color: #fff;
}
</style>