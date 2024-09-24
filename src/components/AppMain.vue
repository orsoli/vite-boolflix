<script>
// Import components
import MediaCardsList from './MediaCardsList.vue';

export default {
    data() {
        return {

        };
    },

    components: {
        MediaCardsList,
    },

    methods: {

    }
};
</script>

<template>
    <main class="text-white py-2">
        <MediaCardsList />
    </main>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";

main {
    background-color: #434343;
}
</style>