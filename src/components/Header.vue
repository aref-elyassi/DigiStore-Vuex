<template>
    <div>
            <nav>
                <ul class="right-list">
                    <li>
                        <router-link class="router" to="/">خانه</router-link>
                        </li>
                    <li>
                        <router-link to="/"  class="router">قوانین</router-link>

                    </li>
                    <li>
                        <router-link to="/" class="router">درباره ما</router-link>
                    </li>
                    <li>
                        <router-link to="/" class="router">محصولات</router-link>
                    </li>
                </ul>
                <ul class="left-list">
                    <li>
                          <router-link to="/" class="router">ورود/ثبت نام</router-link>
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


nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  
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
.router{
    text-decoration: none;
    color: #000;
}
.router:hover{
    text-decoration: underline;
    color: red;
}
</style>