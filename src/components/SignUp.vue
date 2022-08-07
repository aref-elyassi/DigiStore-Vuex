<template>
    <div class="main-form">
        <div class="form">
            <Form>
                <span>نام</span>
                <input type="text">
                <span>نام خانوادگی</span>
                <input type="text">
                 <span>تلفن</span>
                <input type="phone">
                <span>نام کاربری</span>
                <Input type="text"></Input>
                <span>رمز عبور</span>
                <Input type="password"></Input>
                <button type="btn">ثبت</button>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SignUp'
    }
</script>

<style  scoped>
.main-form{
    height:55vh
}
span{
    color: #000;
}
.main-form{
width:100%;
display:flex;
align-items:center;
justify-content:center;
margin-top:2rem
}
.form{
    width:40%;
    display:flex;
    justify-content:center;
    border:1px solid gray;
    border-radius:5px;
}
.form>Form{
    padding:10px;
    display:flex;
    flex-direction:column
}
.form>Form>button{
    margin-top:2rem;
     background:#42a7f5;
      border:1px solid #1069ae;
     border-radius:5px
}
.form>Form>input{
    width:20rem;
    transition:.8s ease-in-out width;
      border:none;
      border-radius: 5px;
    border-top:2px solid #42a7f5;
       

}
.form>Form>input:focus{
 background:#42a7f5;

}
.router{
    text-decoration:none;
    color:#000;
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