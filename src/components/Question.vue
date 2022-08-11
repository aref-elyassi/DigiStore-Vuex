<template>
    <div >
        <form class="question">
            <div class="nameAndFamily">
                <input class="form-control" v-model="nameinput"  type="text" placeholder="نام">
                <span>{{errorname}}</span>
                <input class="form-control" type="text" v-model="familyinput" placeholder="نام خانوادگی">
                <span>{{errorfamily}}</span>
            </div>
            <div class="emailAndMobile">
                <input class="form-control" type="text" v-model="mobileinput" placeholder="موبایل">
                <span>{{errormobile}}</span>
                <input class="form-control" type="text" v-model="emailinput" placeholder="ایمیل">
                <span>{{erroremail}}</span>
            </div>
            <div class="text">
                <textarea class="form-control"  cols="90" rows="10" v-model="textinput" placeholder="متن خود را وارد کنید"></textarea>
                <span>{{errortext}}</span>
            </div>
            <button class="btn btn-dark">ارسال</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'QuestionComponent'
    }
</script>

<style  scoped>
.question{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.nameAndFamily,.emailAndMobile,.text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
}
input{
    margin:0 1px;
    width: 20rem;
}
.btn{
    width: 20rem;
}
textarea{
    width: 100%;
}
</style>