<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> Employment History</template>
      <template v-slot:subtitle> Enter Your Employment Information </template>
      <template v-slot:content>
        <h3>Current Employment</h3>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-4">
            <label for="currentEmployer">Current Employer</label>
            <InputText
              id="currentEmployer"
              v-model="currentEmployer"
              :class="{
                'p-invalid': validationErrors.currentEmployer && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentEmployer && submitted"
              class="p-error"
              >Current Employer is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="currentEmploymentLength">Years Employed</label>
            <InputNumber
              mode="decimal"
              showButtons
              buttonLayout="stacked"
              :step="0.25"
              :min="0"
              id="currentEmploymentLength"
              v-model="currentEmploymentLength"
              :class="{
                'p-invalid':
                  validationErrors.currentEmploymentLength && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentEmploymentLength && submitted"
              class="p-error"
              >Employment Length is required.</small
            >
          </div>
          <div class="field col-12 md:col-6">
            <label for="currentEmployerAddress">Employer Address</label>
            <InputText
              id="currentEmployerAddress"
              v-model="currentEmployerAddress"
              :class="{
                'p-invalid':
                  validationErrors.currentEmployerAddress && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentEmployerAddress && submitted"
              class="p-error"
              >Employer Address is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="currentEmployerPhone">Employer Phone</label>
            <InputMask
              mask="999-999-9999"
              id="currentEmployerPhone"
              v-model="currentEmployerPhone"
              :class="{
                'p-invalid': validationErrors.currentEmployerPhone && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentEmployerPhone && submitted"
              class="p-error"
              >Employer Phone is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentPosition">Current Position</label>
            <InputText
              id="currentPosition"
              v-model="currentPosition"
              :class="{
                'p-invalid': validationErrors.currentPosition && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentPosition && submitted"
              class="p-error"
              >Position is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentMonthlyIncome">Gross Monthly Income</label>
            <InputText
              id="currentMonthlyIncome"
              v-model="currentMonthlyIncome"
              :class="{
                'p-invalid': validationErrors.currentMonthlyIncome && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentMonthlyIncome && submitted"
              class="p-error"
              >Income is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentSupervisor">Supervisor Full Name</label>
            <InputText
              id="currentSupervisor"
              v-model="currentSupervisor"
              :class="{
                'p-invalid': validationErrors.currentSupervisor && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentSupervisor && submitted"
              class="p-error"
              >Supervisor is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentEmployerEmail">Employer Email</label>
            <InputText
              id="currentEmployerEmail"
              v-model="currentEmployerEmail"
              :class="{
                'p-invalid': validationErrors.currentEmployerEmail && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentEmployerEmail && submitted"
              class="p-error"
              >Employer Email is required.</small
            >
          </div>
        </div>
        <template
          v-if="
            this.currentEmploymentLength < 1 &&
            this.currentEmploymentLength !== null
          "
        >
          <Divider layout="horizontal" />
          <h3>Previous Employment</h3>
          <div class="p-fluid grid">
            <div class="field col-12 md:col-4">
              <label for="previousEmployer">Previous Employer</label>
              <InputText
                id="previousEmployer"
                v-model="previousEmployer"
                :class="{
                  'p-invalid': validationErrors.previousEmployer && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousEmployer && submitted"
                class="p-error"
                >previous Employer is required.</small
              >
            </div>
            <div class="field col-12 md:col-2">
              <label for="previousEmploymentLength">Years Employed</label>
              <InputNumber
                mode="decimal"
                showButtons
                buttonLayout="stacked"
                :step="0.25"
                :min="0"
                id="previousEmploymentLength"
                v-model="previousEmploymentLength"
                :class="{
                  'p-invalid':
                    validationErrors.previousEmploymentLength && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousEmploymentLength && submitted"
                class="p-error"
                >Employment Length is required.</small
              >
            </div>

            <div class="field col-12 md:col-6">
              <label for="previousEmployerAddress">Employer Address</label>
              <InputText
                id="previousEmployerAddress"
                v-model="previousEmployerAddress"
                :class="{
                  'p-invalid':
                    validationErrors.previousEmployerAddress && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousEmployerAddress && submitted"
                class="p-error"
                >Employer Address is required.</small
              >
            </div>
            <div class="field col-12 md:col-2">
              <label for="previousEmployerAddress">Employer Phone</label>
              <InputMask
                mask="999-999-9999"
                id="previousEmployerPhone"
                v-model="previousEmployerPhone"
                :class="{
                  'p-invalid':
                    validationErrors.previousEmployerPhone && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousEmployerPhone && submitted"
                class="p-error"
                >Employer Phone is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="previousPosition">Previous Position</label>
              <InputText
                id="previousPosition"
                v-model="previousPosition"
                :class="{
                  'p-invalid': validationErrors.previousPosition && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousPosition && submitted"
                class="p-error"
                >Position is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="previousMonthlyIncome">Gross Monthly Income</label>
              <InputText
                id="previousMonthlyIncome"
                v-model="previousMonthlyIncome"
                :class="{
                  'p-invalid':
                    validationErrors.previousMonthlyIncome && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousMonthlyIncome && submitted"
                class="p-error"
                >Income is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="previousSupervisor">Supervisor Full Name</label>
              <InputText
                id="previousSupervisor"
                v-model="previousSupervisor"
                :class="{
                  'p-invalid': validationErrors.previousSupervisor && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousSupervisor && submitted"
                class="p-error"
                >Supervisor is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="previousEmployerEmail">Previous Employer Email</label>
              <InputText
                id="previousEmployerEmail"
                v-model="previousEmployerEmail"
                :class="{
                  'p-invalid':
                    validationErrors.previousEmployerEmail && submitted,
                }"
              />
              <small
                v-show="validationErrors.previousEmployerEmail && submitted"
                class="p-error"
                >Employer Email is required.</small
              >
            </div>
          </div>
        </template>
        <Divider layout="horizontal" />
        <h3>Other Income Sources</h3>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-4">
            <label for="otherIncome">Other Income?</label>
            <SelectButton
              v-model="otherIncome"
              :options="['yes', 'no']"
              :multiple="false"
              :class="{
                'p-invalid': validationErrors.otherIncome && submitted,
              }"
            />
            <small
              v-show="validationErrors.otherIncome && submitted"
              class="p-error"
              >Yes or No is required.</small
            >
          </div>
          <template v-if="this.otherIncome === 'yes'">
            <div class="field col-12 md:col-4">
              <label for="incomeSources">Name those Sources:</label>
              <InputText
                id="incomeSources"
                v-model="incomeSources"
                :class="{
                  'p-invalid': validationErrors.incomeSources && submitted,
                }"
              />
              <small
                v-show="validationErrors.incomeSources && submitted"
                class="p-error"
                >Income Sources is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="incomeFromSources">Gross Income From Sources:</label>
              <InputText
                id="incomeFromSources"
                v-model="incomeFromSources"
                :class="{
                  'p-invalid': validationErrors.incomeFromSources && submitted,
                }"
              />
              <small
                v-show="validationErrors.incomeFromSources && submitted"
                class="p-error"
                >Income From Sources is required.</small
              >
            </div>
          </template>
        </div>
      </template>
      <template v-slot:footer>
        <Disclaimer />
        <div class="grid grid-nogutter justify-content-between">
          <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" />
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
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import Disclaimer from '../../components/Disclaimer.vue';
import Divider from 'primevue/divider';
import InputMask from 'primevue/inputmask';

import formData from '../../../formData';
export default {
  data() {
    if (import.meta.env.DEV || import.meta.env.VITE_DATA) {
      return formData;
    } else {
      return {
        units: this.units,
        currentEmployer: '',
        currentEmployerPhone: '',
        currentEmployerAddress: '',
        currentEmploymentLength: 1,
        currentPosition: '',
        currentMonthlyIncome: '',
        currentSupervisor: '',
        currentEmployerEmail: '',
        previousEmployer: '',
        previousEmployerPhone: '',
        previousEmployerAddress: '',
        previousEmploymentLength: 0,
        previousPosition: '',
        previousMonthlyIncome: '',
        previousSupervisor: '',
        previousEmployerEmail: '',
        otherIncome: null,
        submitted: false,
        validationErrors: {},
      };
    }
  },
  components: { Card, Dropdown, Button, Disclaimer, Divider, InputMask },
  methods: {
    validateForm() {
      function scrollToTop() {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
      }

      function validate(nameArray) {
        nameArray.forEach((name) => {
          if (!this[name]) {
            this.validationErrors[name] = true;
            scrollToTop();
          } else delete this.validationErrors[name];
        });
      }

      let validateContext = validate.bind(this);

      let toValidate = [
        'currentEmployer',
        'currentEmploymentLength',
        'currentEmployerAddress',
        'currentEmployerPhone',
        'currentPosition',
        'currentMonthlyIncome',
        'currentSupervisor',
        'currentEmployerEmail',
        'otherIncome',
      ];

      validateContext(toValidate);

      let EmployerData = [
        'previousEmployer',
        'previousEmploymentLength',
        'previousEmployerAddress',
        'previousEmployerPhone',
        'previousPosition',
        'previousMonthlyIncome',
        'previousSupervisor',
        'previousEmployerEmail',
      ];

      if (this.currentEmploymentLength < 1) {
        validateContext(EmployerData);
      } else {
        EmployerData.forEach((entry) => {
          delete this.validationErrors[entry];
        });
      }

      if (this.otherIncome === null || this.otherIncome === '') {
        validateContext(['incomeSources', 'incomeFromSources']);
      } else {
        delete this.validationErrors['incomeSources'];
        delete this.validationErrors['incomeFromSources'];
      }

      return !Object.keys(this.validationErrors).length;
    },
    nextPage() {
      this.submitted = true;
      if (this.validateForm()) {
        this.$emit('next-page', {
          formData: {
            currentEmployer: this.currentEmployer,
            currentEmployerPhone: this.currentEmployerPhone,
            currentEmployerAddress: this.currentEmployerAddress,
            currentEmploymentLength: this.currentEmploymentLength,
            currentPosition: this.currentPosition,
            currentMonthlyIncome: this.currentMonthlyIncome,
            currentSupervisor: this.currentSupervisor,
            currentEmployerEmail: this.currentEmployerEmail,
            previousEmployer: this.previousEmployer,
            previousEmployerPhone: this.previousEmployerPhone,
            previousEmployerAddress: this.previousEmployerAddress,
            previousEmploymentLength: this.previousEmploymentLength,
            previousPosition: this.previousPosition,
            previousMonthlyIncome: this.previousMonthlyIncome,
            previousSupervisor: this.previousSupervisor,
            previousEmployerEmail: this.previousEmployerEmail,
            otherIncome: this.otherIncome,
            incomeSources: this.incomeSources,
            incomeFromSources: this.incomeFromSources,
          },
          pageIndex: 1,
        });
      }
    },
    prevPage() {
      this.$emit('prev-page', { pageIndex: 1 });
    },
  },
};
</script>

<style lang="sass" scoped>
.p-fluid .p-buttonset
  width: 100%
</style>
