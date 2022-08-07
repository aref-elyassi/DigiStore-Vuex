<template>
    <div class="main-form">
        <div class="form">
            <Form>
                <span>نام کاربری</span>
                <Input type="text"></Input>
                 <span>رمز عبور</span>
                <Input type="password"></Input>
                <button type="btn">ورود</button>
                <div class="signUp">                   
                <router-link class="router" to="/signUp">اگر ثبت نام نکرده اید کلیک کنید.</router-link>
                </div>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LoginForm'
    }
</script>

<style  scoped>
.main-form{
    height:55vh
}
.main-form{
width:100%;
display:flex;
align-items:center;
justify-content:center;

}
.form{
    width:40%;
    display:flex;
    justify-content:center;
    border:1px solid gray;
    border-radius:5px;
    height:40vh;


}
.form>Form{
    padding:10px;
    display:flex;
    flex-direction:column
}
.form>Form>button{
    margin-top:2rem;
     background:#326789;
     border:1px solid #1069ae;
     border-radius:5px;
     color: #fff;
}
.form>Form>input{
    width:25rem;
    transition:.8s ease-in-out width;
    border:none;
    border-radius: 5px;
    border-top:2px solid #42a7f5
}
.form>Form>input:focus{
 background:#326789;
 color: #fff;

}
.router{
    text-decoration:none;
    color:#fff;
     margin-top:10px
}
.router:hover{
    color:Blue;
   
}
.signUp{
    display:flex;
    align-items:center;
    justify-content:center
}
</style>