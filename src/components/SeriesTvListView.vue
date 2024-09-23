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
    <div class="container">
        <h1>
            Series TV
        </h1>

        <!-- <div class="col" v-for="searchedResult in store.searchedSeriesTvResults" :key="searchedResult.id">
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
        </div> -->


        <div class="row flex-nowrap overflow-x-scroll">
            <div class="col" v-for="searchedResult in store.searchedSeriesTvResults" :key="searchedResult.id">
                <InfoMediaCard :title="searchedResult.name" :original-title="searchedResult.original_name"
                    :language="searchedResult.original_language" :rates="searchedResult.vote_average"
                    :back-drop-path="searchedResult.backdrop_path" :image-url="store.imageUrl" />
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped></style>