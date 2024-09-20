<script>
//Import components

// IMport store
import { store } from '../js/store';

//Import axios
import axios from 'axios';

export default {
    data() {
        return {
            store,
            // Variables
            searchUrl: "https://api.themoviedb.org/3/search/movie", // Store search movies url
            searchInputResult: "", // Store the input search result

        };
    },

    components: {

    },

    methods: {
        getSearchedResults() {
            axios.get(this.searchUrl, {
                params: {
                    api_key: "da70f1679892aee02a44255296352973",
                    query: this.searchInputResult
                }
            }).then((response) => {
                store.searchedResults = response.data.results // Store the results in searchedResults
                console.log(store.searchedResults); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api results is finished") // Print message after api riturn results
                });
        }
    }
};
</script>

<template>
    <div class="input-group m-3 w-25">
        <input type="text" class="form-control" placeholder="Search Movies or Series"
            aria-label="Search Movies or Series" aria-describedby="button-addon2" v-model="searchInputResult"
            @keyup="getSearchedResults">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2"
            @click="getSearchedResults">Button</button>
    </div>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss"
</style>