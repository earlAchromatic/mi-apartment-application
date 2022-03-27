<template>
  <div class="faq-offset opaque">
    <h2>Frequently Asked Questions</h2>
    <Fieldset legend="Do you perform background checks?" :toggleable="true">
      <b>Yes</b>, we do.
    </Fieldset>
    <Fieldset legend="How much does the application cost?" :toggleable="true">
      <b>The application costs $25 per applicant.</b> This cost is used to cover
      the cost of background checks and administration.
    </Fieldset>
    <Fieldset legend="Do you allow pets?" :toggleable="true">
      While pets make the world a better place, we unfortunately
      <b>do not allow</b>
      them in our apartments.
    </Fieldset>
    <Fieldset legend="Where are these apartments located?" :toggleable="true">
      The units shown on this site are all located at
      <b>439 West Washington St.</b> in Ionia, Michigan.
    </Fieldset>
    <Fieldset legend="Are the apartments furnished?" :toggleable="true">
      The units are <b>not </b>furnished. Bring your own couch!
    </Fieldset>
    <Fieldset
      legend="Are Utilities included in the rent price?"
      :toggleable="true"
    >
      <b>Water is included.</b> Other utilities like Gas, Electric, Internet and
      Trash are the tenant's responsibility.
    </Fieldset>
    <Fieldset legend="How much is the security deposit?" :toggleable="true">
      The security deposit is <b>1x the price of rent.</b>
    </Fieldset>
  </div>
</template>

<script>
import Fieldset from 'primevue/fieldset';
export default {
  components: { Fieldset },
};
</script>

<style lang="sass" scoped>
.p-fieldset
    margin-bottom: 2rem
.faq-offset
    margin-top: 10rem
</style>
