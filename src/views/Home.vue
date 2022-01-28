<template>
  <div class="offset">
    <span>Hi There 👋, From Ionia.Apartments and</span>
    <h2>Welcome Home.</h2>
    <div class="grid">
      <template v-for="unit in units">
        <div class="col-12 md:col-4">
          <Card>
            <template #header>
              <TourGallery :photoSrc="unit.photoJSON" />
            </template>
            <template #title>
              {{ unit.shortDescr }} |
              {{
                Number(unit.rent).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumSignificantDigits: 3,
                })
              }}</template
            >
            <template #subtitle>439 W. Washington | {{ unit.name }}</template>
            <template #content> {{ unit.longDescr }} </template>
            <template #footer>
              <router-link v-if="unit.avail" :to="'/' + unit.name + '/screen'">
                <Button> Schedule Showing for {{ unit.name }} </Button>
              </router-link>
              <Button
                v-else=""
                label="Property Currently Rented"
                disabled="disabled"
              ></Button>
            </template>
          </Card>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Card from "primevue/card";
import TourGallery from "../components/TourGallery.vue";
</script>

<script>
export default {
  components: { TourGallery },
  props: ["units"],
};
</script>

<style lang="sass" scoped>
.offset
  margin-top: 10rem
h2
  font-size: 5rem
  margin: 0rem auto
</style>
