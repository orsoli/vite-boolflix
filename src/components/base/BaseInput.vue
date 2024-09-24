<script>
import { store } from '../../js/store';

export default {
    data() {
        return {
            // Declared variables
            inputResult: "", // Store the input search result

            store

        };
    },

    props: {
        placeholder: {
            type: String,
            required: true
        },
    },

    components: {

    },

    methods: {
        onChangeHandling(inputValue) {
            this.$emit('inputEvent', inputValue)
        },
    }
};
</script>

<template>
    <input type="text" class="form-control" :placeholder="placeholder" v-model.trim="this.inputResult"
        @keyup="onChangeHandling(this.inputResult)">
</template>

<style lang='scss' scoped>
@use "/node_modules/bootstrap/scss/bootstrap.scss";

input::placeholder {
    font-size: 14px; // Get font-size of text in placeholder
}
</style>