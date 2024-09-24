<script>
// Import store
import { store } from '../js/store';

//Import axios
import axios from 'axios';

//Import components
import BaseButton from './base/BaseButton.vue';
import BaseInput from './base/BaseInput.vue';

export default {
    data() {
        return {
            // Variables
            searchValue: "", // Store input value

            store
        };
    },

    components: {
        BaseButton,
        BaseInput,
    },

    methods: {
        // Call search Movie Api
        getSearchedMovieResults(inputValue) {
            this.searchValue = inputValue
            axios.get(this.store.searchMovieUrl, {
                params: {
                    api_key: this.store.api_key,
                    query: this.searchValue
                }
            }).then((response) => {
                this.store.searchedMovieResults = response.data.results // Store movie search results
                console.log(this.store.searchedMovieResults); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api Movie results is finished") // Print message after api riturn results
                });
        },

        // Call Tv series Api
        getSearchedSeriesTvResults(inputValue) {
            this.searchValue = inputValue
            axios.get(this.store.searchSeriesTvUrl, {
                params: {
                    api_key: this.store.api_key,
                    query: this.searchValue
                }
            }).then((response) => {
                this.store.searchedSeriesTvResults = response.data.results // Store movie search results
                console.log(this.store.searchedSeriesTvResults); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api TV results is finished") // Print message after api riturn results
                });
        },

        // Call Genre API
        getGenreList() {
            axios.get(this.store.genreUrl, {
                params: {
                    api_key: this.store.api_key
                }
            }).then((response) => {
                this.store.genreList = response.data.genres // Store movie search results
                console.log(this.store.genreList); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api Gener list") // Print message after api riturn results
                });
        },

        // Define a function to call back searched functions
        getSearchedResults(inputValue) {
            this.getSearchedMovieResults(inputValue)
            this.getSearchedSeriesTvResults(inputValue)
            this.getGenreList()
        }



    }
};
</script>

<template>
    <header class="bg-black py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo">
                <h1>BOOLFLIX</h1>
            </div>
            <div class="search-field d-flex gap-1">
                <BaseInput placeholder="Search Movies or Series TV" @input-event="getSearchedResults" />
            </div>
        </div>
    </header>
</template>

<style lang='scss' scoped>
h1 {
    color: red;
}
</style>