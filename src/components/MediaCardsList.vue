<script>
//Import store
import { store } from '../js/store';

// Import Axios
import axios from 'axios';

// Import Components
import InfoMediaCard from './InfoMediaCard.vue';

export default {
    data() {
        return {
            // Variables
            topRatedMoviesUrl: "https://api.themoviedb.org/3/movie/top_rated", // Top rated movies url

            topRatedSeriesTvUrl: "https://api.themoviedb.org/3/tv/top_rated", // Top rated series Tv url

            store
        };
    },

    components: {
        InfoMediaCard,
    },

    methods: {
        // Call API to get Top Rate movie
        getTopRatedMovie() {
            axios.get(this.topRatedMoviesUrl, {
                params: {
                    api_key: "da70f1679892aee02a44255296352973",
                }
            }).then((response) => {
                store.searchedMovieResults = response.data.results // Store movie search results
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api top rated Movies is finished") // Print message after api riturn results
                });
        },

        // Call API to get Top Rate Series Tv
        getTopRatedSeriesTv() {
            axios.get(this.topRatedSeriesTvUrl, {
                params: {
                    api_key: "da70f1679892aee02a44255296352973",
                }
            }).then((response) => {
                store.searchedSeriesTvResults = response.data.results // Store movie search results
                console.log(store.searchedMovieResults); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api top rated Movies is finished") // Print message after api riturn results
                });
        },

    },

    created() {
        this.getTopRatedMovie()
        this.getTopRatedSeriesTv()
    }
};
</script>

<template>
    <!-- Movie section  -->
    <div class="container mb-5">
        <h1>
            Movies
        </h1>
        <div class="row flex-nowrap overflow-x-scroll">
            <div class="col" v-for="searchedResult in store.searchedMovieResults" :key="searchedResult.id">
                <InfoMediaCard :title="searchedResult.title" :original-title="searchedResult.original_title"
                    :language="searchedResult.original_language" :rates="searchedResult.vote_average"
                    :back-drop-path="searchedResult.poster_path" :over-view="searchedResult.overview"
                    :image-url="store.imageUrl" />
            </div>
        </div>
    </div>

    <!-- Series Tv section  -->
    <div class="container mb-5">
        <h1>
            Series TV
        </h1>
        <div class="row flex-nowrap overflow-x-scroll">
            <div class="col" v-for="searchedResult in store.searchedSeriesTvResults" :key="searchedResult.id">
                <InfoMediaCard :title="searchedResult.name" :original-title="searchedResult.original_name"
                    :language="searchedResult.original_language" :rates="searchedResult.vote_average"
                    :back-drop-path="searchedResult.poster_path" :over-view="searchedResult.overview"
                    :image-url="store.imageUrl" />
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";

h1 {
    text-decoration: underline;
}
</style>