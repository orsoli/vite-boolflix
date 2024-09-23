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