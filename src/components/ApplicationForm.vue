<template>
  <div class="application-offset">
    <Toast />
    <h2>
      Rental Application For 439 W. Washington | {{ this.$route.params.id }}
    </h2>
    <small>Ionia, Michigan, 48846</small>
    <Divider />
    <h3>An Equal Housing Opportunity</h3>
    <div class="card">
      <Steps :model="items" :readonly="true" />
    </div>
    <form method="post" @submit.prevent="">
      <router-view
        v-slot="{ Component }"
        :formData="formObject"
        @prevPage="prevPage($event)"
        @nextPage="nextPage($event)"
        @complete="complete"
        :units="units"
      >
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </form>
  </div>
</template>

<script>
import Steps from 'primevue/steps';
import Toast from 'primevue/toast';
import Divider from 'primevue/divider';

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import Disclaimer from './Disclaimer.vue';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();
    const id = route.params.id;
    console.log(id);
    const items = ref([
      {
        label: 'Personal',
        to: '/' + id + '/application',
      },
      {
        label: 'Employment History',
        to: '/' + id + '/application/EmploymentHistory',
      },
      {
        label: 'Rental History',
        to: '/' + id + '/application/RentalHistory',
      },
      {
        label: 'Confirmation',
        to: '/' + id + '/application/confirmation',
      },
    ]);
    const formObject = ref({});

    const nextPage = (event) => {
      for (let field in event.formData) {
        formObject.value[field] = event.formData[field];
      }

      router.push(items.value[event.pageIndex + 1].to);
    };
    const prevPage = (event) => {
      router.push(items.value[event.pageIndex - 1].to);
    };
    const complete = () => {
      toast.add({
        severity: 'success',
        summary: 'Order submitted',
        detail:
          'Dear, ' +
          formObject.value.firstname +
          ' ' +
          formObject.value.lastname +
          ' your order completed.',
      });
    };

    return { items, formObject, nextPage, prevPage, complete };
  },
  props: ['units'],
  components: { Steps, Toast, Disclaimer },
};
</script>

<style lang="sass">
.application-offset
  margin-top: 10rem
::v-deep(b)
  display: block


::v-deep(.p-card-body)
  padding: 2rem

.stepsdemo-content
  margin-top: 1rem
</style>
