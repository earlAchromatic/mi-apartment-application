<template>
  <div class="screen-offset">
    <Requirements :unit="this.selectedUnit" />
    <Card class="instructions">
      <template #title> Submit This Form to Schedule A Showing </template>
      <template #subtitle> Pre-Application </template>
      <template #content>
        Submit the following form and we will reach out to you to schedule a
        time to see the apartment. Available showing times are
        <b>Monday-Friday from 3pm to 6pm and Saturday from 1pm to 6pm</b>
        If you need to schedule a showing outside of these times, please fill
        out the form below and email us at
        <a href="mailto:info@ionia.apartments">info@ionia.apartments</a> and we
        will do our best to accomodate.
      </template>
    </Card>
    <form method="post" @submit.prevent="">
      <div class="p-fluid grid">
        <div class="field col-12 md:col-4">
          <label for="unit">Which Unit are you interested in?</label>
          <Dropdown
            id="unit"
            name="unit"
            v-model="selectedUnit"
            :options="units"
            optionLabel="name"
            placeholder="Select a Unit"
          /><small
            v-show="validationErrors.selectedUnit && submitted"
            class="p-error"
            >Must Select A Unit.</small
          ><small class="descr" v-if="this.selectedUnit !== null"
            >This unit is a {{ this.selectedUnit.descr }},
            {{ Number(this.selectedUnit.sqft).toLocaleString() }} square ft.
            apartment with full amenities including air conditioning and
            laundry. The rent for this unit is:
            {{
              Number(this.selectedUnit.rent).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 3,
              })
            }}, not including electric, gas, and internet.
          </small>
        </div>

        <div class="field col-12 md:col-8">
          <label for="findouthow"
            >How Did You Hear About this Unit's Availability?</label
          >
          <InputText
            id="findouthow"
            type="text"
            name="findouthow"
            v-model="findouthow"
          /><small
            v-show="validationErrors.findouthow && submitted"
            class="p-error"
            >How You Heard is required.</small
          >
        </div>
        <div class="field col-12 md:col-6">
          <label for="firstname">First Name</label>
          <InputText
            id="firstname"
            name="firstname"
            v-model="firstname"
            :class="{ 'p-invalid': validationErrors.firstname && submitted }"
          />
          <small
            v-show="validationErrors.firstname && submitted"
            class="p-error"
            >First Name is required.</small
          >
        </div>
        <div class="field col-12 md:col-6">
          <label for="lastname">Last Name</label>
          <InputText
            id="lastname"
            name="lastname"
            v-model="lastname"
            :class="{ 'p-invalid': validationErrors.lastname && submitted }"
          />
          <small v-show="validationErrors.lastname && submitted" class="p-error"
            >Last Name is required.</small
          >
        </div>
        <div class="field col-12 md:col-6">
          <label for="phone">Phone Number</label>
          <InputText
            id="phone"
            name="phone"
            v-model="phone"
            :class="{ 'p-invalid': validationErrors.phone && submitted }"
          />
          <small v-show="validationErrors.phone && submitted" class="p-error"
            >Phone Number is required.</small
          >
        </div>
        <div class="field col-12 md:col-6">
          <label for="email">Email</label>
          <InputText
            id="email"
            name="email"
            v-model="email"
            :class="{ 'p-invalid': validationErrors.email && submitted }"
          />
          <small v-show="validationErrors.email && submitted" class="p-error"
            >Email Address is required.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="income"
            >Do You Have At Least 3x Rent ({{
              Number(
                this.selectedUnit ? this.selectedUnit.rent * 3 : 3600
              ).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumSignificantDigits: 3,
              })
            }}) as Income?</label
          >
          <SelectButton
            v-model="income"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.income && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="credit"
            >Do You Have A Credit Score of At Least 660?</label
          >
          <SelectButton
            v-model="credit"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.credit && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="felony">Do You Have Felonies on Your Record?</label>
          <SelectButton
            v-model="felony"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.felony && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="landlord"
            >Do You Have At Least 3 Good Landlord References?</label
          >
          <SelectButton
            v-model="landlord"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.landlord && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>

        <div class="field col-12 md:col-4">
          <label for="smoker">Are You A Smoker?</label>
          <SelectButton
            v-model="smoker"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.smoker && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="pets">Do You Have Pets?</label>
          <SelectButton
            v-model="pets"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.pets && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="evictions">Do You Have Previous Evictions?</label>
          <SelectButton
            v-model="evictions"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small
            v-show="validationErrors.evictions && submitted"
            class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="bg">Can You Pass A Background Check?</label>
          <SelectButton
            v-model="bg"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.bg && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
        <div class="field col-12 md:col-4">
          <label for="fee"
            >Are You Willing to Pay the $40 Application Fee (charged after
            seeing the property, before application)?</label
          >
          <SelectButton
            v-model="fee"
            :options="['yes', 'no']"
            :multiple="false"
          />
          <small v-show="validationErrors.fee && submitted" class="p-error"
            >You Must Select Yes or No.</small
          >
        </div>
      </div>

      <Divider align="center">
        <Button
          label="Button"
          icon="pi pi-search"
          class="p-button-outlined"
          @click="handleSubmit"
          >Submit</Button
        >
      </Divider>
    </form>
  </div>
</template>

<script>
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Requirements from "../components/Requirements.vue";
import Button from "primevue/button";
import Divider from "primevue/divider";
import TriStateCheckbox from "primevue/tristatecheckbox";

export default {
  components: {
    InputNumber,
    InputText,
    Requirements,
    Button,
    Divider,
    TriStateCheckbox,
  },
  props: ["units"],
  data() {
    return {
      selectedUnit: null,
      units: this.units,
      findouthow: "",
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      income: null,
      credit: null,
      felony: null,
      landlord: null,
      evictions: null,
      smoker: null,
      pets: null,
      bg: null,
      fee: null,
      submitted: false,
      validationErrors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      if (this.validateForm()) {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "Prescreen",
            unit: this.selectedUnit.name,
            findouthow: this.findouthow,
            firstname: this.firstname,
            lastname: this.lastname,
            phone: this.phone,
            email: this.email,
            income: this.income,
            credit: this.credit,
            felony: this.felony,
            landlord: this.landlord,
            smoker: this.smoker,
            pets: this.pets,
            evictions: this.evictions,
            bg: this.bg,
            fee: this.fee,
          }),
        })
          .then(() => {
            this.$router.push("thanks");
          })
          .catch(() => {
            this.$router.push("404");
          });
      }
    },
    validateForm() {
      if (!this.selectedUnit) {
        this.validationErrors["selectedUnit"] = true;
      } else delete this.validationErrors["selectedUnit"];

      if (!this.findouthow.trim()) {
        this.validationErrors["findouthow"] = true;
      } else delete this.validationErrors["findouthow"];

      if (!this.firstname.trim()) {
        this.validationErrors["firstname"] = true;
      } else delete this.validationErrors["firstname"];

      if (!this.lastname.trim()) {
        this.validationErrors["lastname"] = true;
      } else delete this.validationErrors["lastname"];

      if (!this.phone) {
        this.validationErrors["phone"] = true;
      } else delete this.validationErrors["phone"];

      if (this.email === "" || !this.email.includes("@")) {
        console.log(this.email);
        this.validationErrors["email"] = true;
      } else delete this.validationErrors["email"];

      if (this.income === null) {
        this.validationErrors["income"] = true;
      } else delete this.validationErrors["income"];

      if (this.credit === null) {
        this.validationErrors["credit"] = true;
      } else delete this.validationErrors["credit"];

      if (this.felony === null) {
        this.validationErrors["felony"] = true;
      } else delete this.validationErrors["felony"];

      if (this.landlord === null) {
        this.validationErrors["landlord"] = true;
      } else delete this.validationErrors["landlord"];

      if (this.smoker === null) {
        this.validationErrors["smoker"] = true;
      } else delete this.validationErrors["smoker"];

      if (this.pets === null) {
        this.validationErrors["pets"] = true;
      } else delete this.validationErrors["pets"];

      if (this.evictions === null) {
        this.validationErrors["evictions"] = true;
      } else delete this.validationErrors["evictions"];

      if (this.bg === null) {
        this.validationErrors["bg"] = true;
      } else delete this.validationErrors["bg"];

      if (this.fee === null) {
        this.validationErrors["fee"] = true;
      } else delete this.validationErrors["fee"];

      return !Object.keys(this.validationErrors).length;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
  },
  mounted() {
    if (this.$route.params.id) {
      let id = this.$route.params.id;
      let unit = this.units.filter((e) => {
        return e.name === id;
      });
      this.selectedUnit = unit[0];
    }
  },
};
</script>

<style lang="sass">
.instructions

  .p-card-content
    display: block
    text-align: left
form
  padding: 2rem

  .field
    flex-direction: column
  .p-selectbutton
    width: 100%
  .grid
    align-items: flex-end

.descr
  text-align: left
.screen-offset
  margin-top: 14rem
</style>
