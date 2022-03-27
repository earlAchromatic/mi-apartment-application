<template>
  <Card class="opaque">
    <template #header>
      <img src="../assets/home2.jpg" alt="" />
    </template>
    <template #title>
      <h2>About Ionia.Apartments</h2>
    </template>
    <template #content>
      <h3>Our Units</h3>
      <p>
        Relax and unwind in our high quality downtown Ionia apartments. All units are fully equipped with a washer and dryer, new kitchen appliances and off-street parking.
        Stay cool in the summer and warm in the winter with the AC/Heater.
        Other amenities available vary per unit but include full basement access, a backyard great for leisure activities, great 2nd story views of the iconic Ionia Bridge and a cozy enclosed sideporch.
      </p>
      <h3>Our Philosophy</h3>
      <p>
        At Ionia.Apartments, we believe in providing and maintaining quality
        homes for the Ionia community. Ionia.Apartments prides itself on
        continuously striving to be one of the best places to live in downtown Ionia. Welcome home.
      </p>

      <h3>Our Promise</h3>
      <p>
        We promise to: 
        
        <ul> 
            <li>Respond to maintenance requests in a timely fashion.</li>
               <li> Complete all maintenance issues and repairs efficiently, quickly, and courteously.</li>
               <li> Consistently improve and maintain the historic aesthetic of the property.</li>
               <li> Provide exceptional service and support to all residents.</li>
               <li>Support the hardworking residents of the Ionia Community by providing quality dwellings.</li>
        </ul>
      </p>
    </template>
    <template #footer>
      <router-link to="/">
        <Button icon="pi pi-check" label="Schedule A Showing Today" />
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
    
    max-width: 45rem
    margin: 0 auto

.p-card-content
    p
        text-align: left
h2
    margin: 0
</style>
