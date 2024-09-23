<script>
export default {
    data() {
        return {


        };
    },

    props: {
        title: {
            type: String,
            required: true,
        },
        originalTitle: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        rates: {
            type: Number,
            required: true
        },
        backDropPath: {
            type: null,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },

    },

    components: {

    },

    methods: {

    }
};
</script>

<template>
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Title: {{ title }}</li>
            <li class="list-group-item">Original Title: {{ originalTitle }}</li>
            <li class="list-group-item">
                Language: <span :class="`fi fi-${language}`"></span>
                {{ language }}
            </li>
            <li class="list-group-item">
                <div class="no-stars" v-if="rates === 0">
                    <p>No stars rating</p>
                </div>
                <div class="rating-star" v-else>
                    <i class="bi bi-star-fill" v-for="i in Math.round(rates / 2)" :key="i"></i>
                </div>
            </li>
            <li class="list-group-item"><img :src="`${imageUrl}${backDropPath}`" :alt="`${originalTitle} cover`">
            </li>
        </ul>
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

    img {
        max-width: 100%;
        border: 1px solid black;
        border-radius: 5px;
    }
}
</style>