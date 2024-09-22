<script>
//Import components
import SearchMoviesInput from './SearchMoviesInput.vue';

export default {
    data() {
        return {

        };
    },

    components: {
        SearchMoviesInput,
    },

    methods: {

    }
};
</script>

<template>
    <header class="container d-flex justify-content-between align-items-center">
        <div>
            logo
        </div>
        <SearchMoviesInput />
    </header>
</template>

<style lang='scss' scoped></style>