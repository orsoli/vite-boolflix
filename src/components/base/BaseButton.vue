<script>
export default {
    data() {
        return {

        };
    },

    props: {
        text: {
            type: String,
            rewqired: true
        }
    },

    components: {

    },

    methods: {
        // Define function emiting clcik event
        onClickHandling() {
            this.$emit('clickEvent') // Emit event
        },
    }
};
</script>

<template>
    <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="onClickHandling">{{ text
        }}</button>
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";
</style>