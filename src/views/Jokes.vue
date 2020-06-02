<template>
    <div>
        {{categories}}
        <form @submit.prevent="getJoke">
            <input type="text" v-model="category"> <br/>

            <label> Single </label>
            <input type="radio" id="single" value="single" v-model="type">
            <br/>
            <label> Two Part </label>
            <input type="radio" id="twopart" value="twopart" v-model="type">
            <br/>
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
        data(){
          return {
              type: "single",
              category : 'Dark'
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
            const payload = {
                category : this.category,
                type: this.type
            }
            this.$store.dispatch("loadJoke", payload)
            }
        }
    }



</script>

<style scoped>

</style>