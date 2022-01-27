<template>
  <Card class="req">
    <template #content>
      <h2>Do You Qualify to Rent This Unit?</h2>
      <Fieldset legend="Income">
        <p>
          Must be 3x Rent Total. For This Unit, that number is 3 x $1,200/mo. =
          $3,600/mo. <b>Do you make at least $3,600 per month?</b>
        </p>
      </Fieldset>
      <Fieldset legend="Credit Score">
        <p>
          Credit Score of At Least 660.
          <b>Do you have a Credit Score of 650 or higher?</b>
        </p>
      </Fieldset>
      <Fieldset legend="Criminal History">
        <p>No Felonies. <b>Do You have a history of Felonies?</b></p>
      </Fieldset>
      <Fieldset legend="Misc">
        <p>
          No Smokers. No Pets Allowed. <b>Do You Smoke? Do You Have Pets?</b>
        </p>
      </Fieldset>
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card ";
import Fieldset from "primevue/fieldset";
export default {
  components: { Card, Fieldset },
};
</script>

<style lang="sass">
.req
    top: -100px
    position: relative

fieldset
    margin-bottom: 1rem


.fieldset p
    line-height: 1
    margin: 0

.p-fieldset .p-fieldset-content
    padding: 0

.p-fieldset .p-fieldset-legend
    margin-right: auto
</style>
