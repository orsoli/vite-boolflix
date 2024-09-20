<script>
// Import Components
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppMain from './components/AppMain.vue'

export default {
  data() {
    return {
    }
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  methods: {

  }
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss">
@use "../node_modules/bootstrap/scss/bootstrap.scss";
@use "../styles/generics.scss"
</style>
