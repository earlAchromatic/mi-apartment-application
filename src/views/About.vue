<template>
  <Card>
    <template #title>
      <h2>About Ionia.Apartments</h2>
    </template>
    <template #content>
      <div class="field col-12 md:col-6">
        <Skeleton class="mb-2"></Skeleton>
        <Skeleton width="10rem" class="mb-2"></Skeleton>
        <Skeleton width="5rem" class="mb-2"></Skeleton>
        <Skeleton height="2rem" class="mb-2"></Skeleton>
        <Skeleton width="10rem" height="4rem"></Skeleton>
      </div>
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
