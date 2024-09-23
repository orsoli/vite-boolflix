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
    <div class="container">
        <h1>
            Movies
        </h1>
        <div class="row flex-nowrap overflow-x-scroll">
            <div class="col" v-for="searchedResult in store.searchedMovieResults" :key="searchedResult.id">
                <InfoMediaCard :title="searchedResult.title" :original-title="searchedResult.original_title"
                    :language="searchedResult.original_language" :rates="searchedResult.vote_average"
                    :back-drop-path="searchedResult.backdrop_path" :image-url="store.imageUrl" />
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped></style>