<template>
    <div >
        <form class="question" @submit.prevent="validate()">
            <div class="nameAndFamily">
                <div>   
                    <input class="form-control" v-model="form.name"  type="text" placeholder="نام">
                    <span>{{errorname}}</span>
                </div>
                <div>
                    <input class="form-control" type="text" v-model="form.family" placeholder="نام خانوادگی">
                    <span>{{errorfamily}}</span>
                </div>
            </div>
            <div class="emailAndMobile">
                <div>
                    <input class="form-control" type="text" v-model="form.mobile" placeholder="موبایل">
                    <span>{{errormobile}}</span>
                </div>
                <div>
                    <input class="form-control" type="text" v-model="form.email" placeholder="ایمیل">
                    <span>{{erroremail}}</span>
                </div>
            </div>
            <div class="text">
                <textarea class="form-control"  cols="90" rows="10" v-model="form.text" placeholder="متن خود را وارد کنید"></textarea>
                <span>{{errortext}}</span>
            </div>
            <button class="btn btn-dark">ارسال</button>
        </form>
    </div>
</template>

<script>
import { reactive,ref } from 'vue';
    export default {
        name:'QuestionComponent',
        setup() {
             const form=reactive({
                name:'',
                family:'',
                email:'',
                mobile:'',
                text:''
            })
            const errorname=ref()
            const errorfamily=ref()
            const erroremail=ref()
            const errormobile=ref()
            const errortext=ref()

            function validate() {
                if(form.name===""){
                    errorname.value="لطفا نام را وارد کنید"
                }
                 if(form.family==="")
                {
                    errorfamily.value="لطفا نام خانوادگی را وارد کنید"
                }
                 if(form.email===""){
                    erroremail.value="لطفا ایمیل را وارد کنید"
                 }
                 if(form.mobile===""){
                    errormobile.value="لطفا موبایل را وارد کنید"
                 }
                 if(form.text===""){
                    errortext.value="لطفا متن را وارد کنید"
                 }
            }
            return{validate,errorname,errorfamily,erroremail,errormobile,errortext,form}
        }
    }
</script>

<style  scoped>
.question{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.nameAndFamily,.emailAndMobile{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
}
.text{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    flex-direction: column; 
}
.nameAndFamily>div ,.emailAndMobile>div{
    display: flex;
    flex-direction: column;
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
span{
    color: red;
}
</style>