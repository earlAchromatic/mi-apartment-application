<template>
  <Navbar />
  <div class="centered">
    <router-view :units="this.units" />
  </div>
  <span
    >Thank You for Using <a href="/">Ionia.Apartments</a>. All Are Welcome To
    Apply for Tenancy.
  </span>
</template>

<script setup lang="ts">
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Navbar from "./components/Navbar.vue";
import { ref } from "vue";

const units = ref([
  {
    name: "Unit A",
    shortDescr: "1 Br, 1 Ba",
    longDescr:
      "Enjoy great views of Ionia and the charm of original exposed brick in this cozy 900 sq. foot, one bedroom and one bathroom apartment. Fully equipped with a washer and dryer and off-street parking. Stay cool in the summer and warm in the winter with the Forced Air AC & Furnace. Walking distance from shops and restaurants in historic downtown Ionia, Michigan.",
    image: "/src/assets/unitA-feature.jpg",
    avail: true,
    rent: 950,
    sqft: 900,
    photoJSON: "/data/unitA_photos.json",
  },
  {
    name: "Unit B",
    shortDescr: "2 Br, 1 Ba",
    longDescr:
      "Relax and unwind in this spacious 2,000 sq foot, two bedroom and one bathroom apartment complete with living and dining rooms with lovely original stained glass french doors and new flooring. Fully equipped with a brand new washer and dryer and off-street, 2 car parking. Stay cool in the summer and warm in the winter with the forced air AC & furnace. Basement access is perfect for storage and recreation and enjoy the side porch access and watch the sunrise over Ionia’s historic downtown.",
    image: "/src/assets/unitB-feature.jpg",
    avail: true,
    rent: 1250,
    sqft: 2000,
    photoJSON: "/data/unitB_photos.json",
  },
  {
    name: "Unit C",
    shortDescr: "2 Br, 1 Ba",
    longDescr:
      "Welcome home to your spacious 1,300. sq foot, two bedroom and one bathroom apartment with walk in closets and a galley kitchen. Fully equipped with a brand new washer and dryer and off-street, 2 car parking. Stay cool in the summer and warm in the winter with the forced air AC & furnace. The shady backyard access is perfect for leisure activities.",
    image: "/src/assets/unitC-feature.jpg",
    avail: false,
    rent: 1550,
    sqft: 1300,
    photoJSON: "/data/unitC_photos.json",
  },
]);
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
body
  margin: 0
$gutter: 10rem
.centered
    max-width: 90vw
    max-width: 960px
    margin: 0 auto
    min-height: calc( 100vh - 12rem )
.field
    display: flex
    flex-wrap: wrap
    align-content: flex-start
.p-dropdown
    width: 100%
label
  padding-top: 1rem
  padding-bottom: 0.5rem
a
  text-decoration: none
.p-card
  background: #f3f3f3
.grid
  .p-card-content
    text-align: left
</style>
