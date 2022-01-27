<template>
  <div class="">
    <h2>Frequently Asked Questions</h2>
    <Fieldset legend="Do you perform background checks?" :toggleable="true">
      Yes, we do.
    </Fieldset>
    <Fieldset legend="How much does the application cost?" :toggleable="true">
      The application costs $40. This cost is used to cover the cost of
      background checks and administration.
    </Fieldset>
    <Fieldset legend="How you allow pets?" :toggleable="true">
      While pets make the world a better place, we unfortunately do not allow
      them in our apartments.
    </Fieldset>
  </div>
</template>

<script>
import Fieldset from "primevue/fieldset";
export default {
  components: { Fieldset },
};
</script>

<style lang="sass" scoped>
.p-fieldset
    margin-bottom: 2rem
</style>
