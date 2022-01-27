<template>
  <Requirements :unit="this.selectedUnit" />
  <Card class="instructions">
    <template #title> Submit This Form to Schedule A Showing </template>
    <template #subtitle> Pre-Application </template>
    <template #content>
      Submit the following form and we will reach out to you to schedule a time
      to see the apartment. Available showing times are
      <b>Monday-Friday from 3pm to 6pm and Saturday from 1pm to 6pm</b>
      If you need to schedule a showing outside of these times, please fill out
      the form below and email us at
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
          apartment with full amenities including air conditioning and laundry.
          The rent for this unit is:
          {{
            Number(this.selectedUnit.rent).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              maximumSignificantDigits: 3,
            })
          }}, not including electric and water.
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
        <small v-show="validationErrors.firstname && submitted" class="p-error"
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
        <ToggleButton
          v-model="income"
          name="income"
          id="income"
          onLabel="Yes I Do."
          offLabel="No I Do Not."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        /><small v-show="validationErrors.income && submitted" class="p-error"
          >You Must Select Yes or No.</small
        >
      </div>
      <div class="field col-12 md:col-4">
        <label for="credit">Do You Have A Credit Score of At Least 660?</label>
        <ToggleButton
          v-model="credit"
          name="credit"
          id="credit"
          onLabel="Yes I Do."
          offLabel="No I Do Not."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        />
      </div>
      <div class="field col-12 md:col-4">
        <label for="felony">Do You Have Felonies on Your Record?</label>
        <ToggleButton
          name="felony"
          id="felony"
          v-model="felony"
          onLabel="Yes I Do."
          offLabel="No I Do Not."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        />
      </div>
      <div class="field col-12 md:col-4">
        <label for="landlord"
          >Do You Have At Least 3 Good Landlord References?</label
        >
        <ToggleButton
          name="landlord"
          id="landlord"
          v-model="landlord"
          onLabel="Yes I Do."
          offLabel="No I Do Not."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        />
      </div>

      <div class="field col-12 md:col-4">
        <label for="smoker">Are You A Smoker?</label>
        <ToggleButton
          name="smoker"
          id="smoker"
          v-model="smoker"
          onLabel="No I Am Not."
          offLabel="Yes I Am."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        />
      </div>
      <div class="field col-12 md:col-4">
        <label for="pets">Do You Have Pets?</label>
        <ToggleButton
          name="pets"
          id="pets"
          v-model="pets"
          onLabel="No I Do Not."
          offLabel="Yes I Do."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
          :class="{ neg: pets }"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="evictions">Do You Have Previous Evictions?</label>
        <ToggleButton
          name="evictions"
          id="evictions"
          v-model="evictions"
          onLabel="No I Do Not."
          offLabel="Yes I Do."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="bg">Can You Pass A Background Check?</label>
        <ToggleButton
          name="bg"
          id="bg"
          v-model="bg"
          onLabel="Yes I Can."
          offLabel="No I Cannot."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        />
      </div>
      <div class="field col-12 md:col-4">
        <label for="fee"
          >Are You Willing to Pay the $40 Application Fee (charged after seeing
          the property, before application)?</label
        >
        <ToggleButton
          name="fee"
          id="fee"
          v-model="fee"
          onLabel="Yes I Am."
          offLabel="No I Am Not."
          onIcon="pi pi-check"
          offIcon="pi pi-times"
        />
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
  computed: {},
  data() {
    return {
      selectedUnit: null,
      units: [
        {
          name: "Unit A",
          descr: "1 Br, 1 Ba",
          avail: true,
          rent: 950,
          sqft: 900,
        },
        {
          name: "Unit B",
          descr: "2 Br, 1 Ba",
          avail: true,
          rent: 1250,
          sqft: 2000,
        },
      ],
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
      console.log(id);
      let unit = this.units.filter((e) => {
        console.log(e);
        return e.name === id;
      });
      console.log(unit);
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

.descr
  text-align: left
</style>
