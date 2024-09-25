<script>
//Import store
import { store } from '../js/store';

// Import Axios
import axios from 'axios';

// Import Components
import InfoMediaCard from './InfoMediaCard.vue';
import BaseSelect from './base/BaseSelect.vue';

export default {
    data() {
        return {
            // Variables

            store
        };
    },

    components: {
        InfoMediaCard,
        BaseSelect
    },

    methods: {
        // Call API to get Top Rate movie
        getTopRatedMovie() {
            axios.get(this.store.topRatedMoviesUrl, {
                params: {
                    api_key: this.store.api_key,
                }
            }).then((response) => {
                store.searchedMovieResults = response.data.results // Store movie search results
                console.log(store.searchedMovieResults); // Test print in console

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
            axios.get(this.store.topRatedSeriesTvUrl, {
                params: {
                    api_key: this.store.api_key,
                }
            }).then((response) => {
                store.searchedSeriesTvResults = response.data.results // Store movie search results
                console.log(store.searchedSeriesTvResults); // Test print in console
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
                .finally(() => {
                    console.log("Geting api top rated SeriesTv is finished") // Print message after api riturn results
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

        // Call Api to get actress
        getMovieActres(movieId) {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
                params: {
                    api_key: this.store.api_key,
                }
            }).then((response) => {
                this.store.moviesCasts = response.data.cast
                console.log(this.store.moviesCasts.slice(0, 5)) // Test console log
            })
                .catch((error) => {
                    console.log(error); // Print errors in console
                })
        },

    },

    created() {
        this.getTopRatedMovie()
        this.getTopRatedSeriesTv()
        this.getGenreList()
    },
};
</script>

<template>
    <!-- Select options section -->
    <div class="container d-flex justify-content-end">
        <BaseSelect @select-option="getGenreSelected" :opitions-list="this.store.genreList" />
    </div>
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
                    :genre-id="searchedResult.genre_ids" :genres-objs="store.genreList" :image-url="store.imageUrl" />
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
                    :genre-id="searchedResult.genre_ids" :genres-objs="store.genreList" :image-url="store.imageUrl" />
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