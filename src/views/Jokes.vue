<template>
    <div>
        <ul id="example-1">
            <li v-for="category in categories" :key="category">
                {{ category }}
            </li>
        </ul>
        <form @submit.prevent="getJoke">

            <select v-model="selected"  >
                <option v-for="category in categories" :key="category" v-bind:value="category">{{ category }}</option>
            </select>
            <br/>
            <label> Single </label>
            <input type="radio" id="single" value="single" v-model="type">
            <br/>
            <label> Two Part </label>
            <input type="radio" id="twopart" value="twopart" v-model="type">
            <br/>
            <input type="submit">
        </form>
        <div v-if="isSingleTpye">
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
        data() {
            return {
                type: "single",
                selected: ''
            }
        },
        created() {
            this.$store.dispatch("loadCategories")
        },
        computed: {
            ...mapState({
                    categories: 'categories',
                    joke: 'joke'
                },
            ),
            isSingleTpye: function () {
                return this.joke.type === 'single' ? true: false;
            }
        },
        methods: {
            getJoke() {
                const payload = {
                    category: this.selected,
                    type: this.type
                }
                this.$store.dispatch("loadJoke", payload)
            }
        },
    }


</script>

<style scoped>

</style>