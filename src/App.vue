<script>
// Import Components
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  data() {
    return {
    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {

  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss";
@use "../styles/generics.scss"
</style>
