<template>
  <Card class="req">
    <template #content>
      <h2>Do You Qualify to Rent This Unit?</h2>
      <Fieldset legend="Income">
        <p>
          Must be 3x Rent Total. For This Unit, that number is 3 x
          {{
            Number(this.unitReq ? this.unitReq.rent : 1000).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 3,
              }
            )
          }}/mo. =
          {{
            Number(this.unitReq ? this.unitReq.rent * 3 : 3000).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 3,
              }
            )
          }}/mo.
          <b
            >Do you make at least
            {{
              Number(
                this.unitReq ? this.unitReq.rent * 3 : 3000
              ).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 3,
              })
            }}
            per month?</b
          >
        </p>
      </Fieldset>
      <Fieldset legend="Credit Score">
        <p>
          Credit Score of At Least 660.
          <b>Do you have a Credit Score of 660 or higher?</b>
        </p>
      </Fieldset>
      <Fieldset legend="Criminal History">
        <p>No Felonies. <b>Do You have a history of Felonies?</b></p>
      </Fieldset>
      <Fieldset legend="Landlord References">
        <p>
          Must Have Good References From Past 3 Landlords.
          <b>Do You Have At Least 3 Good Landlord References?</b>
        </p>
      </Fieldset>
      <Fieldset legend="Misc">
        <p>
          No Previous Evictions. No Smokers. No Pets Allowed. Must Pass
          Background Check.
          <b
            >Have You Been Evicted? Do You Smoke? Do You Have Pets? Can You Pass
            A Background Check?</b
          >
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
  props: ["unit"],
  data() {
    return {
      unitReq: this.unit,
    };
  },
};
</script>

<style lang="sass">

.req
    top: -100px
    position: relative
    h2
        width: 100%
fieldset
    margin-bottom: 1rem
    max-width: 25rem

.fieldset p
    line-height: 1
    margin: 0

.p-fieldset .p-fieldset-content
    padding: 0

.p-fieldset .p-fieldset-legend
    margin-right: auto

.p-card-content
    display: flex
    flex-direction: row
    flex-wrap: wrap
</style>
