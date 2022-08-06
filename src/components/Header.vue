<template>
    <div class="container-fluid">
        <div class="row">
            <header>
                <nav>
                    <ul class="right-list">
                        <li>خانه</li>
                        <li>قوانین</li>
                        <li>درباره ما</li>
                        <li>محصولات</li>
                    </ul>
                    <ul class="left-list">
                        <li>ورود/ثبت نام</li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HeaderComponent'
    }
</script>

<style  scoped>

header{
    
    height: auto;
   
}
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
</style>