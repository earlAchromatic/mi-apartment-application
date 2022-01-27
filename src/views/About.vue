<template>
  <Card>
    <template #header>
      <img src="../assets/home2.jpg" alt="" />
    </template>
    <template #title>
      <h2>About Ionia.Apartments</h2>
    </template>
    <template #content>
      <h3>Our Units</h3>
      <p>
        Relax and unwind in a 1,000 sq foot two bedroom and one bathroom
        apartment. Fully equipped with a washer and dryer and onsite parking.
        Stay cool in the summer and warm in the winter with the AC/Heater.
        Basement access is perfect for storage and enjoy the side porch access
        and watch the sunrise over Ionia’s historic downtown.
      </p>
      <h3>Our Philosophy</h3>
      <p>
        We at Washington Apartments believe in providing and maintaining quality
        homes for the Ionia community. Washington Apartments prides itself on
        continuously striving to be one of the best rental properties in Ionia
        County. Welcome home.
      </p>

      <h3>Our Promise</h3>
      <p>
        At Washington Apartments, we promise to: Return all phone calls within
        24 business hours Complete all maintenance issues and repairs
        efficiently, quickly, and courteously Consistently improve the aesthetic
        look of the property Provide exceptional service and support to
        residents
      </p>
    </template>
    <template #footer>
      <router-link to="/application">
        <Button icon="pi pi-check" label="Apply" />
      </router-link>
    </template>
  </Card>
</template>

<script>
import Skeleton from "primevue/skeleton";
import Card from "primevue/card";
export default {
  components: { Skeleton, Card },
};
</script>

<style lang="sass" scoped>
.p-card
    background: initial
    max-width: 45rem
    margin: 0 auto

.p-card-content
    p
        text-align: left
</style>
