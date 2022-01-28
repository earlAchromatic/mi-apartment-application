<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> Personal Information </template>
      <template v-slot:subtitle> Enter your personal information </template>
      <template v-slot:content>
        <div class="p-fluid">
          <div class="field col-12 md:col-4">
            <label for="unit">Which Unit are you interested in?</label>
            <Dropdown
              id="unit"
              name="unit"
              v-model="this.selectedUnit"
              :options="units"
              optionLabel="name"
              placeholder="Select a Unit"
            /><small
              v-show="validationErrors.selectedUnit && submitted"
              class="p-error"
              >Must Select A Unit.</small
            >
          </div>
          <h3>Legal Name</h3>
          <div class="p-fluid grid">
            <div class="field col-12 md:col-2">
              <label for="firstname">First Name</label>
              <InputText
                id="firstname"
                v-model="firstname"
                :class="{
                  'p-invalid': validationErrors.firstname && submitted,
                }"
              />
              <small
                v-show="validationErrors.firstname && submitted"
                class="p-error"
                >First Name is required.</small
              >
            </div>
            <div class="field col-12 md:col-2">
              <label for="middlename">Middle Name</label>
              <InputNumber id="middlename" v-model="middlename" />
            </div>
            <div class="field col-12 md:col-2">
              <label for="lastname">Last Name</label>
              <InputText
                id="lastname"
                v-model="lastname"
                :class="{ 'p-invalid': validationErrors.lastname && submitted }"
              />
              <small
                v-show="validationErrors.lastname && submitted"
                class="p-error"
                >Last Name is required.</small
              >
            </div>
          </div>
          <h3>General Information</h3>
          <div class="grid p-fluid">
            <div class="grid col-12 md:col-6">
              <h4>Current Address</h4>
              <div class="field col-12 md:col-8">
                <label for="address">Street Address</label>
                <InputNumber id="address" v-model="address" />
              </div>
              <div class="field col-12 md:col-4">
                <label for="city">City</label>
                <InputNumber id="city" v-model="city" />
              </div>
              <div class="field col-12 md:col-8">
                <label for="state">State</label>
                <InputNumber id="state" v-model="state" />
              </div>
              <div class="field col-12 md:col-4">
                <label for="zip">Zip Code</label>
                <InputNumber id="zip" v-model="zip" />
              </div>
            </div>

            <div class="grid col-12 md:col-6">
              <h4>Contact</h4>
              <div class="field col-12 md:col-4">
                <label for="homephone">Home Phone</label>
                <InputNumber id="homephone" v-model="homephone" />
              </div>
              <div class="field col-12 md:col-4">
                <label for="cellphone">Cell Phone</label>
                <InputNumber id="cellphone" v-model="cellphone" />
              </div>
              <div class="field col-12 md:col-4">
                <label for="workphone">Work Phone</label>
                <InputNumber id="workphone" v-model="workphone" />
              </div>
              <div class="field col-12 md:col-6">
                <label for="email">Email</label>
                <InputNumber id="email" v-model="email" />
              </div>
            </div>
            <div class="field col-12 md:col-6">
              <label for="social">Social Security Number</label>
              <InputNumber id="social" v-model="social" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="bday">Date of Birth</label>
              <InputNumber id="bday" v-model="bday" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="license">Driver's License</label>
              <InputNumber id="license" v-model="license" />
            </div>
          </div>

          <h3>Vehicle Information</h3>
          <div class="grid p-fluid">
            <div class="field col-12 md:col-6">
              <label for="make">vehicle Make</label>
              <InputNumber id="carmake" v-model="make" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="model">Model</label>
              <InputNumber id="carmodel" v-model="model" />
            </div>
            <div class="field col-12 md:col-6">
              <label for="year">Year</label>
              <InputNumber id="caryear" v-model="year" />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <Disclaimer />
        <div class="grid grid-nogutter justify-content-between">
          <i></i>

          <Button
            label="Next"
            @click="nextPage()"
            icon="pi pi-angle-right"
            iconPos="right"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Disclaimer from "../../components/Disclaimer.vue";
import Divider from "primevue/divider";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["units"],
  data() {
    return {
      selectedUnits: null,
      middlename: "",
      firstname: "",
      lastname: "",
      unit: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      homephone: "",
      workphone: "",
      cellphone: "",
      email: "",
      social: "",
      bday: "",
      license: "",
      carmake: "",
      carmodel: "",
      caryear: "",
      submitted: false,
      validationErrors: {},
    };
  },
  components: { Button, Card, InputNumber, InputText, Disclaimer, Divider },
  methods: {
    nextPage() {
      this.submitted = true;
      if (this.validateForm()) {
        this.$emit("next-page", {
          formData: {
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age,
          },
          pageIndex: 0,
        });
      }
    },
    validateForm() {
      if (!this.firstname.trim()) this.validationErrors["firstname"] = true;
      else delete this.validationErrors["firstname"];
      if (!this.lastname.trim()) this.validationErrors["lastname"] = true;
      else delete this.validationErrors["lastname"];
      return !Object.keys(this.validationErrors).length;
    },
  },
});
</script>

<style lang="sass" scoped>
h3, h4
  width: 100%
</style>
