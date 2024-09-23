<script>
// Import components
import MoviesListView from './MoviesListView.vue';
import SeriesTvListView from './SeriesTvListView.vue';

export default {
    data() {
        return {

        };
    },

    components: {
        MoviesListView,
        SeriesTvListView,
    },

    methods: {

    }
};
</script>

<template>
    <main>
        <MoviesListView />
        <SeriesTvListView />
    </main>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";
</style>