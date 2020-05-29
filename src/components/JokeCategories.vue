<template>
    <div v-for="category in categories">
        <Category v-bind:category="category"/>
    </div>
</template>

<script>
    import axios from "axios";
    import Category from "@/components/Category";

    export default {
        name: "JokeCategories",
        components:{
            Category
        },
        props: ["JokeCategories"],
        data(){
            return {
                categories: []
            }
        },
        created() {
            axios.get('https://sv443.net/jokeapi/v2/categories')
                .then(res => this.categories = res.data)
                .catch(err => console.log(err))
        }
    }
</script>

<style scoped>

</style>