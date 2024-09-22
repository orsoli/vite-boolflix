<script>
// Import components

//Import store
import { store } from '../js/store';

export default {
    data() {
        return {
            // Varables
            stars: 0, // Stars number variable
            //Store
            store,
        };
    },

    components: {

    },

    methods: {
        // Convert rating value get from url to the integer from 0-5
        ratingStarsNumber(ratingNumber) {
            this.stars = Math.round(ratingNumber / 2) // Asigne stars variable
        }
    }
};  
</script>

<template>
    <!-- Movie section  -->
    <div class="container">
        <h1>
            Movies
        </h1>
        <div class="row flex-nowrap overflow-x-scroll">
            <div class="col" v-for="searchedResult in store.searchedMovieResults" :key="searchedResult.id">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Title: {{ searchedResult.title }}</li>
                        <li class="list-group-item">Original Title: {{ searchedResult.original_title }}</li>
                        <li class="list-group-item">
                            Language: <span :class="`fi fi-${searchedResult.original_language}`"></span>
                            {{ searchedResult.original_language }}
                        </li>
                        <li class="list-group-item">
                            <div class="no-stars" v-if="searchedResult.vote_average === 0">
                                <p>No stars rating</p>
                            </div>
                            <div class="rating-star" v-else>
                                <i class="bi bi-star-fill" v-for="i in Math.round(searchedResult.vote_average / 2)"
                                    :key="i"></i>
                            </div>
                        </li>
                        <li class="list-group-item"><img :src="`${store.imageUrl}${searchedResult.backdrop_path}`"
                                :alt="`${searchedResult.original_title} cover`">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Series TV section  -->
    <div class="container">
        <h1>
            TV Series
        </h1>
        <div class="row flex-nowrap overflow-x-scroll">
            <div class="col" v-for="searchedResult in store.searchedTvResults" :key="searchedResult.id">
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Title: {{ searchedResult.name }}</li>
                        <li class="list-group-item">Original Title: {{ searchedResult.original_name }}</li>
                        <li class="list-group-item">
                            Language: <span :class="`fi fi-${searchedResult.original_language}`"></span>
                            {{ searchedResult.original_language }}
                        </li>
                        <li class="list-group-item">
                            <div class="no-stars" v-if="searchedResult.vote_average === 0">
                                <p>No stars rating</p>
                            </div>
                            <div class="rating-star" v-else>
                                <i class="bi bi-star-fill" v-for="i in Math.round(searchedResult.vote_average / 2)"
                                    :key="i"></i>
                            </div>
                        </li>
                        <li class="list-group-item"><img :src="`${store.imageUrl}${searchedResult.backdrop_path}`"
                                :alt="`${searchedResult.original_title} cover`">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
@use "/node_modules/flag-icons/css/flag-icons.min.css";

.card {
    width: 400px;

    .bi-star-fill {
        color: goldenrod;
    }
}
</style>