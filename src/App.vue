<template>
  <div class="main ui container">
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

<style lang="stylus" >
  body
    background-color: #f1f4f9 !important 
</style>
