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
    <div class="card-info d-none">
        <ul class="list-unstyled">
            <li><strong>Title:</strong> {{ title }}</li>
            <li><strong>Original Title: </strong> {{ originalTitle }}</li>
            <li>
                <strong>Language:</strong> <span :class="`fi fi-${language}`"></span>
                {{ language }}
            </li>
            <li>
                <div class="no-stars" v-if="rates === 0">
                    <p>No stars rating</p>
                </div>
                <div class="rating-star" v-else>
                    <span><strong>Rates:</strong></span> <i class="bi bi-star-fill" v-for="i in Math.round(rates / 2)"
                        :key="i"></i>
                </div>
            </li>
        </ul>
    </div>
    <div class="poser">
        <img :src="`${imageUrl}${backDropPath}`" :alt="`${originalTitle} cover`">
    </div>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
@use "/node_modules/flag-icons/css/flag-icons.min.css";

.card-info {

    .bi-star-fill {
        color: goldenrod;
    }

}

img {
    height: 300px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>