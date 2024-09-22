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
            searchMovieUrl: "https://api.themoviedb.org/3/search/movie", // Store search Movies url
            searchTvUrl: "https://api.themoviedb.org/3/search/tv", // Store search Tv url
            searchInputResult: "", // Store the input search result

        };
    },

    components: {

    },

    methods: {
        // Call search Movie Api
        getSearchedMovieResults(url, search) {
            axios.get(url, {
                params: {
                    api_key: "da70f1679892aee02a44255296352973",
                    query: search
                }
            }).then((response) => {
                store.searchedMovieResults = response.data.results // Store movie search results
                console.log(store.searchedMovieResults); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api Movie results is finished") // Print message after api riturn results
                });
        },

        // Call Tv series Api
        getSearchedTvResults(url, search) {
            axios.get(url, {
                params: {
                    api_key: "da70f1679892aee02a44255296352973",
                    query: search
                }
            }).then((response) => {
                store.searchedTvResults = response.data.results // Store movie search results
                console.log(store.searchedTvResults); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api TV results is finished") // Print message after api riturn results
                });
        },

        // Define a function to call all api
        getSearchedResults() {
            this.getSearchedMovieResults(this.searchMovieUrl, this.searchInputResult);
            this.getSearchedTvResults(this.searchTvUrl, this.searchInputResult)
        },
    }
};
</script>

<template>
    <div class="input-group m-3 w-25">
        <input type="text" class="form-control" placeholder="Search Movies or Series"
            aria-label="Search Movies or Series" aria-describedby="button-addon2" v-model="searchInputResult"
            @keyup="getSearchedResults">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2"
            @click="getSearchedResults">Search</button>
    </div>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss"
</style>