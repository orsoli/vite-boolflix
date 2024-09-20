<script>
// Import components

//Import store
import { store } from '../js/store';

export default {
    data() {
        return {
            store,
        };
    },

    components: {

    },

    methods: {

    }
};  
</script>

<template>
    <div class="card w-25" v-if="store.searchedResults">
        <ul class="list-group list-group-flush" v-for="searchedResult in store.searchedResults"
            :key="searchedResult.id">
            <li class="list-group-item">Title: {{ searchedResult.title }}</li>
            <li class="list-group-item">Original Title: {{ searchedResult.original_title }}</li>
            <li class="list-group-item">
                Language: <span :class="`fi fi-${searchedResult.original_language}`"></span>
                {{ searchedResult.original_language }}
            </li>
            <li class="list-group-item">Rating: {{ searchedResult.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "/node_modules/flag-icons/css/flag-icons.min.css";
</style>