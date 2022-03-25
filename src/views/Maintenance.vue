<template>
  <div class="offset">
    <Card class="instructions">
      <template #title> Maintenance Request Form</template>
      <template #subtitle> Sorry to hear you are having a problem. </template>
      <template #content>
        Please Submit All Maintenance Requests in the Form below and we will
        address the issue in as soon as possible.
      </template>
    </Card>
    <MaintenanceForm :units="units"> </MaintenanceForm>
  </div>
</template>

<script setup>
import MaintenanceForm from '../components/MaintenanceForm.vue';

const props = defineProps(['units']);
</script>

<style lang="sass" scoped>

.offset
  margin-top: 10rem
  padding: 1rem
</style>
