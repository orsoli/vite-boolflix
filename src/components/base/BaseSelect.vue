<script>
export default {
    data() {
        return {

        };
    },

    props: {
        opitionsList: {
            type: Array,
            require: true
        }
    },

    components: {

    },

    methods: {
        onChangeHandling() {
            this.$emit('selectOption')
        }
    }
};
</script>

<template>
    <select @change="onChangeHandling">
        <option value="" disabled selected>Select Genre</option>
        <option v-for="option in opitionsList" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
</template>

<style lang='scss' scoped></style>