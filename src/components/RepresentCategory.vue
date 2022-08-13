<template>
    <div class="category">
        <h1>دسته بندی نمایندگی ها</h1>
       <select class="form-select" @change="onChange($event)" v-model="value" aria-label="Default select example">         
            
            <option value="1">تهران</option>
            <option value="2">اصفهان</option>
            <option value="3">شیراز</option>
            <option value="4"> ارومیه</option>
            <option value="5">مشهد</option>
            <option value="5">تبریز</option>
        </select>      
        <div class="largecard" v-for="rep in represents" :key="rep.id">
            <div class="myProduct">
                <h1>{{rep.title}}</h1>

                <div class="smallcards">
                    <div  v-for="re in rep.represent" :key="re.id">        
                        <SmallRep :represent="re"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
import SmallRep from './SmallRep.vue';

    export default {
    setup() {
        const store = useStore();
        const represents = reactive({});
        function onChange(event) {
            represents.value = computed(() => store.getters.getRepresentsById(event.target.value));
        }
        return { represents, onChange };
    },
    components: { SmallRep }
}
</script>

<style  scoped>
.form-select{
    width: 15%;
    height: 3rem;
    margin-right: 20px;
    margin-top: 2rem;
}
.category{
    display: flex;
   align-items: center;
    flex-direction: column;
    margin-top: 5rem;
}
.category>h1{
    border-bottom: 2px solid #000;
}
.smallcards{
display: flex;
}

.myProduct{
    display: flex;
    align-items: center;
    justify-content: space-evenly  ;
    flex-direction: column;
}
.myProduct>h1{
    border-bottom:2px solid #000 ;
}
.largecard{
    width: 80%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;
}
</style>