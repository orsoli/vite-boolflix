<script>
import { store } from '../js/store';

export default {
    data() {
        return {
            // Variables
            isVisible: false, // Flag to do visible on hover

            store,

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
            required: false
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
        overView: {
            type: String,
            required: true
        },
        genreId: {
            type: Array,
            // required: true
        },
        genresObjs: {
            type: Array,
            required: false
        },
        mediaCast: {
            type: null,
            required: false
        }

    },

    components: {

    },

    methods: {
        visibilityHandling() {
            this.isVisible = !this.isVisible
        }

    }
};
</script>

<template>
    <div class="card-info overflow-x-scroll" @mouseenter="visibilityHandling" @mouseleave="visibilityHandling"
        role="button">
        <ul class="list-unstyled p-2" :class="{ 'd-none': !isVisible }">
            <li><strong>Title:</strong> {{ title }}</li>
            <li><strong>Original Title: </strong> {{ originalTitle }}</li>
            <li>
                <div class="no-stars" v-if="rates === 0">
                    <p>No stars rating</p>
                </div>
                <div class="rating-star" v-else>
                    <span><strong>Vote:</strong></span> <i class="bi bi-star-fill" v-for="i in Math.round(rates / 2)"
                        :key="i"></i>
                </div>
            </li>
            <li>
                <strong>Overview: </strong>
                <span class="overview">{{ overView }}</span>
            </li>
            <li>
                <strong>Actors: </strong>
                <span class="overview" v-for="actor in mediaCast" :key="actor.id">{{ actor.name }}</span>
            </li>
            <li class="d-flex gap-2">
                <strong>Genres: </strong>
                <ul class="list-unstyled d-flex align-items-center flex-wrap">
                    <li v-for="genre in genresObjs" :key="genre.id">
                        <span class="overview p-1" v-if="genreId.includes(genre.id)"> {{ genre.name
                            }} </span>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="poser" :class="{ 'd-none': isVisible }">
            <img :src="`${imageUrl}${backDropPath}`" :alt="`${originalTitle} cover`" role="button">
        </div>
    </div>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";
@use "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
@use "/node_modules/flag-icons/css/flag-icons.min.css";

.card-info {
    width: 200px;
    height: 300px;
    border: 1px solid white;
    background-color: #000000;

    .bi-star-fill {
        color: goldenrod;
        font-size: 14px;
        margin: 2px;
    }

    img {
        max-width: 100%;
        height: 300px;
    }

    strong {
        font-size: 14px;
    }

    li {
        font-size: 12px;
    }
}
</style>