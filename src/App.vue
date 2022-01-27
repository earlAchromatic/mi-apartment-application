<template>
  <Navbar />
  <div class="centered">
    <router-view />
  </div>
</template>

<script setup lang="ts">
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import Navbar from "./components/Navbar.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="sass">
html
  font-size: 12px
.centered
    max-width: 90vw
    max-width: 960px
    margin: 0 auto
    margin-top: 14rem
.field
    display: flex
    flex-wrap: wrap
.p-dropdown
    width: 100%
label
  padding-top: 1rem
  padding-bottom: 0.5rem
a
  text-decoration: none
</style>
