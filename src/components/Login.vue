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
    flex-direction:column;
   
}
.form>Form>button{
    margin-top:2rem;
     background:#f15d03;
     border:1px solid #f15d03;
     border-radius:5px;
     color: #000;
}
.form>Form>input{
    width:25rem;
    transition:.8s ease-in-out width;
    border:none;
    border-radius: 5px;
    border-top:2px solid #f15d03
}
.form>Form>input:focus{
 background:#f15d03;
 color: #000;

}
.router{
    text-decoration:none;
    color:#000  ;
     margin-top:10px
}
.router:hover{
    color:#f15d03;
   
}
.signUp{
    display:flex;
    align-items:center;
    justify-content:center
}
</style>