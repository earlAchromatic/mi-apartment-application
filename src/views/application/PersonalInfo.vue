<template>
  <div ref="root" class="stepsdemo-content">
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
              :class="{
                'p-invalid': validationErrors.selectedUnit && submitted,
              }"
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
              <InputText
                id="middlename"
                v-model="middlename"
                :class="{
                  'p-invalid': validationErrors.middlename && submitted,
                }"
              />
              <small
                v-show="validationErrors.middlename && submitted"
                class="p-error"
                >Middle Name is required.</small
              >
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
                <InputText
                  id="address"
                  v-model="address"
                  :class="{
                    'p-invalid': validationErrors.address && submitted,
                  }"
                />
                <small
                  v-show="validationErrors.address && submitted"
                  class="p-error"
                  >Street Address is required.</small
                >
              </div>

              <div class="field col-12 md:col-4">
                <label for="city">City</label>
                <InputText
                  id="city"
                  v-model="city"
                  :class="{
                    'p-invalid': validationErrors.city && submitted,
                  }"
                />
                <small
                  v-show="validationErrors.city && submitted"
                  class="p-error"
                  >City is required.</small
                >
              </div>
              <div class="field col-12 md:col-8">
                <label for="state">State</label>
                <InputText
                  id="state"
                  v-model="state"
                  :class="{
                    'p-invalid': validationErrors.state && submitted,
                  }"
                />
                <small
                  v-show="validationErrors.state && submitted"
                  class="p-error"
                  >State is required.</small
                >
              </div>
              <div class="field col-12 md:col-4">
                <label for="zip">Zip Code</label>
                <InputText
                  id="zip"
                  v-model="zip"
                  :class="{
                    'p-invalid': validationErrors.zip && submitted,
                  }"
                /><small
                  v-show="validationErrors.zip && submitted"
                  class="p-error"
                  >Zip Code is required.</small
                >
              </div>
            </div>

            <div class="grid col-12 md:col-6">
              <h4>Contact</h4>
              <div class="field col-12 md:col-4">
                <label for="homephone">Home Phone</label>
                <InputMask
                  mask="999-999-9999"
                  id="homephone"
                  v-model="homephone"
                  :class="{
                    'p-invalid': validationErrors.homephone && submitted,
                  }"
                /><small
                  v-show="validationErrors.homephone && submitted"
                  class="p-error"
                  >Your Home Phone is required.</small
                >
              </div>
              <div class="field col-12 md:col-4">
                <label for="cellphone">Cell Phone</label>
                <InputMask
                  mask="999-999-9999"
                  id="cellphone"
                  v-model="cellphone"
                  :class="{
                    'p-invalid': validationErrors.cellphone && submitted,
                  }"
                />
                <small
                  v-show="validationErrors.cellphone && submitted"
                  class="p-error"
                  >Your Cell Phone is required.</small
                >
              </div>
              <div class="field col-12 md:col-4">
                <label for="workphone">Work Phone</label>
                <InputMask
                  mask="999-999-9999"
                  id="workphone"
                  v-model="workphone"
                  :class="{
                    'p-invalid': validationErrors.workphone && submitted,
                  }"
                /><small
                  v-show="validationErrors.workphone && submitted"
                  class="p-error"
                  >Your Work Phone is required.</small
                >
              </div>
              <div class="field col-12 md:col-6">
                <label for="email">Email</label>
                <InputText
                  id="email"
                  v-model="email"
                  :class="{
                    'p-invalid': validationErrors.email && submitted,
                  }"
                /><small
                  v-show="validationErrors.homephone && submitted"
                  class="p-error"
                  >Your Email is required.</small
                >
              </div>
            </div>
            <div class="field col-12 md:col-6">
              <label for="social">Social Security Number</label>
              <InputMask
                mask="999-99-9999"
                id="social"
                v-model="social"
                :class="{
                  'p-invalid': validationErrors.social && submitted,
                }"
              /><small
                v-show="validationErrors.social && submitted"
                class="p-error"
                >Social Security Number is required.</small
              >
            </div>
            <div class="field col-12 md:col-6">
              <label for="bday">Date of Birth (mm/dd/yyyy)</label>
              <InputMask
                mask="99/99/9999"
                id="bday"
                v-model="bday"
                :class="{
                  'p-invalid': validationErrors.bday && submitted,
                }"
              /><small
                v-show="validationErrors.bday && submitted"
                class="p-error"
                >Date of Birth is required.</small
              >
            </div>
            <div class="field col-12 md:col-6">
              <label for="license">Driver's License</label>
              <InputMask
                mask="a 999 999 999 999"
                id="license"
                v-model="license"
                :class="{
                  'p-invalid': validationErrors.license && submitted,
                }"
              /><small
                v-show="validationErrors.license && submitted"
                class="p-error"
                >Driver's License Number is required.</small
              >
            </div>
            <div class="upload field col-12">
              <FileUpload
                name="licenseimg"
                :auto="true"
                :maxFileSize="8000000"
                accept="image/*"
                :customUpload="true"
                @uploader="licenseUploader"
                @remove="licenseimg = null"
              >
                <template #empty>
                  <p>Drag and drop files to here to upload driver's license.</p>
                  <small>*Max file size 8MB</small>
                </template>
              </FileUpload>
              <small
                v-show="validationErrors.licenseimg && submitted"
                class="p-error"
                >Driver's License Image is required.</small
              >
            </div>
          </div>

          <h3>Vehicle Information</h3>
          <div class="grid p-fluid">
            <div class="field col-12 md:col-6">
              <label for="carmake">Make</label>
              <InputText
                id="carmake"
                v-model="carmake"
                :class="{
                  'p-invalid': validationErrors.carmake && submitted,
                }"
              /><small
                v-show="validationErrors.carmake && submitted"
                class="p-error"
                >Vehicle Make is required.</small
              >
            </div>
            <div class="field col-12 md:col-6">
              <label for="carmodel">Model</label>
              <InputText
                id="carmodel"
                v-model="carmodel"
                :class="{
                  'p-invalid': validationErrors.carmodel && submitted,
                }"
              /><small
                v-show="validationErrors.carmodel && submitted"
                class="p-error"
                >Vehicle Model is required.</small
              >
            </div>
            <div class="field col-12 md:col-6">
              <label for="caryear">Year</label>
              <InputMask
                mask="9999"
                id="caryear"
                v-model="caryear"
                :class="{
                  'p-invalid': validationErrors.caryear && submitted,
                }"
              /><small
                v-show="validationErrors.caryear && submitted"
                class="p-error"
                >Vehicle Year is required.</small
              >
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
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Disclaimer from '../../components/Disclaimer.vue';
import Divider from 'primevue/divider';
import FileUpload from '../../components/FileUpload.vue';

import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const root = ref(null);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      console.log(root.value); // this is your $el
    });

    return {
      root,
    };
  },
  props: ['units'],
  data() {
    return {
      units: this.units,
      selectedUnit: null,
      middlename: '',
      firstname: '',
      lastname: '',
      unit: '',
      address: '',
      city: '',
      state: '',
      zip: null,
      homephone: null,
      workphone: null,
      cellphone: null,
      email: '',
      social: '',
      bday: '',
      license: '',
      licenseimg: null,
      carmake: '',
      carmodel: '',
      caryear: '',
      submitted: false,
      validationErrors: {},
    };
  },
  components: {
    Button,
    Card,
    InputNumber,
    InputText,
    Disclaimer,
    Divider,
    FileUpload,
    InputMask,
  },
  methods: {
    licenseUploader(event) {
      this.licenseimg = event.files;
      console.log(this.licenseimg);
    },
    nextPage() {
      this.submitted = true;
      if (this.validateForm()) {
        this.$emit('next-page', {
          formData: {
            selectedUnit: this.selectedUnit,
            middlename: this.middlename,
            firstname: this.firstname,
            lastname: this.lastname,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip,
            homephone: this.homephone,
            workphone: this.workphone,
            cellphone: this.cellphone,
            email: this.email,
            social: this.social,
            bday: this.bday,
            license: this.license,
            licenseimg: this.licenseimg,
            carmake: this.carmake,
            carmodel: this.carmodel,
            caryear: this.caryear,
          },
          pageIndex: 0,
        });
      }
    },
    validateForm() {
      function scrollToTop() {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
      }

      function validate(nameArray) {
        nameArray.forEach((name) => {
          console.log(name);
          if (!this[name]) {
            this.validationErrors[name] = true;
            scrollToTop();
          } else delete this.validationErrors[name];
        });
      }

      let validateContext = validate.bind(this);

      let toValidate = [
        'selectedUnit',
        'firstname',
        'middlename',
        'lastname',
        'address',
        'city',
        'state',
        'zip',
        'social',
        'email',
        'bday',
        'carmake',
        'carmodel',
        'caryear',
        'license',
        'licenseimg',
        'homephone',
        'cellphone',
        'workphone',
      ];

      validateContext(toValidate);

      return !Object.keys(this.validationErrors).length;
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
});
</script>

<style lang="sass" scoped>
h3, h4
  width: 100%

.upload
  flex-direction: column

  .p-component
    width: 100%
</style>
