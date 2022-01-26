<template>
  <div>
    <Toast />

    <div class="card">
      <Steps :model="items" :readonly="true" />
    </div>

    <router-view
      v-slot="{ Component }"
      :formData="formObject"
      @prevPage="prevPage($event)"
      @nextPage="nextPage($event)"
      @complete="complete"
    >
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import Steps from "primevue/steps";
import Toast from "primevue/toast";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

export default {
  setup() {
    const router = useRouter();
    const toast = useToast();
    const items = ref([
      {
        label: "Personal",
        to: "/",
      },
      {
        label: "Seat",
        to: "/steps/seat",
      },
      {
        label: "Payment",
        to: "/steps/payment",
      },
      {
        label: "Confirmation",
        to: "/steps/confirmation",
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
        severity: "success",
        summary: "Order submitted",
        detail:
          "Dear, " +
          formObject.value.firstname +
          " " +
          formObject.value.lastname +
          " your order completed.",
      });
    };

    return { items, formObject, nextPage, prevPage, complete };
  },
  components: { Steps, Toast },
};
</script>

<style lang="sass">
::v-deep(b)
  display: block


::v-deep(.p-card-body)
  padding: 2rem

.field
    display: flex
    flex-wrap: wrap
.p-dropdown
    width: 100%
label
  padding-top: 1rem
  padding-bottom: 0.5rem
</style>
