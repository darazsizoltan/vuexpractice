<template>
    <div>
        {{categories}}
        sajt
    </div>

</template>

<script>


    // import axios from "axios";
    // import Joke from "@/components/Joke";
    import {mapState} from 'vuex';

    export default {
        name: "Jokes",
        components: {


        },
        data(){
            return {
                categories: []
            }
        },
        created() {
            this.$state.dispatch("loadCategories")
        },
        computed: {
            ...mapState([
                'categories',
                'joke'
            ])
        }
    }



</script>

<style scoped>

</style>