<script>
//Import store
import { store } from '../js/store';

// Import Components
import InfoMediaCard from './InfoMediaCard.vue';

export default {
    data() {
        return {
            store
        };
    },

    components: {
        InfoMediaCard,
    },

    methods: {

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
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";

h1 {
    text-decoration: underline;
}
</style>