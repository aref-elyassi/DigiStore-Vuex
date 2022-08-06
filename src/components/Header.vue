<template>
    <div class="container">
            <header>
                <nav>
                    <ul>
                        <li>خانه</li>
                        <li>قوانین</li>
                        <li>درباره ما</li>
                        <li>محصولات</li>
                    </ul>
                    <ul>
                        <li>ورود/ثبت نام</li>
                    </ul>
                </nav>
            </header>
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
}
li{
    list-style: none;
}
</style>