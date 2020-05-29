<template>
    <div>
        {{categories}}
        <form @submit.prevent="getJoke">
            <input type="text" v-model="category">
            <input type="submit">
        </form>
        <div v-if="joke.type === 'single'">
            {{joke.joke}}
        </div>
        <div v-else>
            <p>{{joke.setup}}</p>
            <p>{{joke.delivery}}</p>
        </div>
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
              category : 'Programming'
          }
        },
        created() {
            this.$store.dispatch("loadCategories")
        },
        computed: {
            ...mapState({
                categories: 'categories',
                joke:'joke'}
    )
    },
    methods: {
        getJoke() {
                this.$store.dispatch("loadJoke", this.category)
            }
        }
    }



</script>

<style scoped>

</style>