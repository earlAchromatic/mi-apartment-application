<template>
  <form method="post" @submit.prevent="">
    <div class="p-fluid grid">
      <div class="field col-12 md:col-4">
        <label for="unit">Which Unit are you requesting maintenance for?</label>
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
        >
      </div>
      <div class="field col-12 md:col-4">
        <label for="fullname">Enter your Full Name:</label>
        <InputText
          id="fullname"
          type="text"
          name="fullname"
          v-model="fullname"
        /><small v-show="validationErrors.fullname && submitted" class="p-error"
          >Your Full Name is required.</small
        >
      </div>
      <div class="field col-12 md:col-4">
        <label for="datestamp">Today's Date:</label>
        <InputMask
          mask="99/99/9999"
          id="datestamp"
          v-bind:placeholder="datestamp"
          :disabled="true"
        />
      </div>
      <div class="field col-12">
        <label for="issue">Describe the Maintenance Issue in Detail:</label>
        <Textarea
          id="issue"
          type="text"
          name="issue"
          v-model="issue"
          :autoResize="true"
          rows="5"
          cols="30"
        ></Textarea>
        <small v-show="validationErrors.issue && submitted" class="p-error"
          >You Must Describe Your Issue.</small
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
</template>

<script>
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Requirements from '../components/Requirements.vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import Textarea from 'primevue/textarea';

export default {
  components: {
    InputNumber,
    InputText,
    Requirements,
    Button,
    Divider,
    TriStateCheckbox,
    Textarea,
  },
  props: ['units'],
  data() {
    return {
      selectedUnit: null,
      units: this.units,
      fullname: this.fullname,
      datestamp: new Date().toLocaleDateString('en-US'),
      issue: this.issue,
      validationErrors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      if (this.validateForm()) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': 'Maintenance',
            unit: this.selectedUnit.name,
            fullname: this.fullname,
            datestamp: this.datestamp,
            issue: this.issue,
          }),
        })
          .then(() => {
            this.$router.push('maintenance-request-submitted');
          })
          .catch(() => {
            this.$router.push('404');
          });
      }
    },
    validateForm() {
      if (!this.selectedUnit) {
        this.validationErrors['selectedUnit'] = true;
      } else delete this.validationErrors['selectedUnit'];

      if (!this.selectedUnit) {
        this.validationErrors['fullname'] = true;
      } else delete this.validationErrors['fullname'];
      if (!this.selectedUnit) {
        this.validationErrors['issue'] = true;
      } else delete this.validationErrors['issue'];

      return !Object.keys(this.validationErrors).length;
    },
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
  },
};
</script>

<style lang="sass"></style>
