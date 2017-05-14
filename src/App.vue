<template>
  <div class="ui container">
    <header-fixed />
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { HeaderFixed } from 'shared/Layout'

export default {
  name: 'app',
  components: {
    HeaderFixed
  }
}
</script>

<style scoped>

</style>
