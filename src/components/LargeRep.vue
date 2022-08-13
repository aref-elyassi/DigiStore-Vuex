<template>
    <div class="largerep" v-for="rep in represrnts" :key="rep.id">
        <div class="myrepresent">
                <h1>{{rep.title}}</h1>
                <div class="smallrep">

                    <div v-for="re in rep.represent" :key="re.id">
                    <SmallRep :represent="re"/>
                </div>
                </div>
        </div>

    </div>
</template>

<script>
import { computed } from '@vue/reactivity';

import { useStore } from 'vuex';
import SmallRep from './SmallRep.vue';

    export default {
    setup() {
        const store = useStore();
        const represrnts = computed(() => store.getters.allRepresentatives);
        return{represrnts}
    },
    components: { SmallRep }
}
</script>

<style  scoped>
.smallrep{
display: flex;
}

.myrepresent{
    display: flex;
    align-items: center;
    justify-content: space-evenly  ;
    flex-direction: column;
}
.myrepresent>h1{
    border-bottom: 2px solid #000;
}
.largerep{
    margin-top: 5rem;
}
</style>