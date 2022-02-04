<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> Rental History </template>
      <template v-slot:subtitle> Enter your rental history details </template>
      <template v-slot:content>
        <h3>Current Home</h3>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-4">
            <label for="currentLandlord">Current Landlord</label>
            <InputText
              id="currentLandlord"
              v-model="currentLandlord"
              :class="{
                'p-invalid': validationErrors.currentLandlord && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentLandlord && submitted"
              class="p-error"
              >Current Landlord is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="currentYearsLived">Years Living at Address</label>
            <InputNumber
              mode="decimal"
              showButtons
              buttonLayout="stacked"
              :step="0.25"
              id="currentYearsLived"
              v-model="currentYearsLived"
              :class="{
                'p-invalid': validationErrors.currentYearsLived && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentYearsLived && submitted"
              class="p-error"
              >Years Occupied is required.</small
            >
          </div>
          <div class="field col-12 md:col-6">
            <label for="currentLandlordAddress">Landlord Address</label>
            <InputText
              id="currentLandlordAddress"
              v-model="currentLandlordAddress"
              :class="{
                'p-invalid':
                  validationErrors.currentLandlordAddress && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentLandlordAddress && submitted"
              class="p-error"
              >Landlord Address is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentLandlordCity">Landlord City</label>
            <InputText
              id="currentLandlordCity"
              v-model="currentLandlordCity"
              :class="{
                'p-invalid': validationErrors.currentLandlordCity && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentLandlordCity && submitted"
              class="p-error"
              >Landlord City is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="currentLandlordState">Landlord State</label>
            <InputText
              id="currentLandlordState"
              v-model="currentLandlordState"
              :class="{
                'p-invalid': validationErrors.currentLandlordState && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentLandlordState && submitted"
              class="p-error"
              >Landlord State is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="currentLandlordPhone">Landlord Phone</label>
            <InputMask
              mask="999-999-9999"
              id="currentLandlordPhone"
              v-model="currentLandlordPhone"
              :class="{
                'p-invalid': validationErrors.currentLandlordPhone && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentLandlordPhone && submitted"
              class="p-error"
              >Landlord Phone is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentLandlordEmail">Landlord Email</label>
            <InputText
              id="currentLandlordEmail"
              v-model="currentLandlordEmail"
              :class="{
                'p-invalid': validationErrors.currentLandlordEmail && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentLandlordEmail && submitted"
              class="p-error"
              >Landlord Email is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentLeaseExp">Lease Expiration (mm/dd/yyyy)</label>
            <InputMask
              mask="99/99/9999"
              id="currentLeaseExp"
              v-model="currentLeaseExp"
              :class="{
                'p-invalid': validationErrors.currentLeaseExp && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentLeaseExp && submitted"
              class="p-error"
              >Lease Expiration is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="currentReasonLeaving">Reason for Leaving</label>
            <InputText
              id="currentReasonLeaving"
              v-model="currentReasonLeaving"
              :class="{
                'p-invalid': validationErrors.currentReasonLeaving && submitted,
              }"
            />
            <small
              v-show="validationErrors.currentReasonLeaving && submitted"
              class="p-error"
              >Reason Leaving is required.</small
            >
          </div>
        </div>
        <h3>Previous Home</h3>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-4">
            <label for="secondLastLandlord">Previous Landlord</label>
            <InputText
              id="secondLastLandlord"
              v-model="secondLastLandlord"
              :class="{
                'p-invalid': validationErrors.secondLastLandlord && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastLandlord && submitted"
              class="p-error"
              >Current Landlord is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="secondLastYearsLived">Years Living at Address</label>
            <InputNumber
              mode="decimal"
              showButtons
              buttonLayout="stacked"
              :step="0.25"
              id="secondLastYearsLived"
              v-model="secondLastYearsLived"
              :class="{
                'p-invalid': validationErrors.secondLastYearsLived && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastYearsLived && submitted"
              class="p-error"
              >Years Occupied is required.</small
            >
          </div>
          <div class="field col-12 md:col-6">
            <label for="secondLastLandlordAddress">Landlord Address</label>
            <InputText
              id="secondLastLandlordAddress"
              v-model="secondLastLandlordAddress"
              :class="{
                'p-invalid':
                  validationErrors.secondLastLandlordAddress && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastLandlordAddress && submitted"
              class="p-error"
              >Landlord Address is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="secondLastLandlordCity">Landlord City</label>
            <InputText
              id="secondLastLandlordCity"
              v-model="secondLastLandlordCity"
              :class="{
                'p-invalid':
                  validationErrors.secondLastLandlordCity && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastLandlordCity && submitted"
              class="p-error"
              >Landlord City is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="secondLastLandlordState">Landlord State</label>
            <InputText
              id="secondLastLandlordState"
              v-model="secondLastLandlordState"
              :class="{
                'p-invalid':
                  validationErrors.secondLastLandlordState && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastLandlordState && submitted"
              class="p-error"
              >Landlord State is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="secondLastLandlordPhone">Landlord Phone</label>
            <InputMask
              mask="999-999-9999"
              id="secondLastLandlordPhone"
              v-model="secondLastLandlordPhone"
              :class="{
                'p-invalid':
                  validationErrors.secondLastLandlordPhone && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastLandlordPhone && submitted"
              class="p-error"
              >Landlord Phone is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="secondLastLandlordEmail">Landlord Email</label>
            <InputText
              id="secondLastLandlordEmail"
              v-model="secondLastLandlordEmail"
              :class="{
                'p-invalid':
                  validationErrors.secondLastLandlordEmail && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastLandlordEmail && submitted"
              class="p-error"
              >Landlord Email is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="secondLastLeaseExp"
              >Lease Expiration (mm/dd/yyyy)</label
            >
            <InputMask
              mask="99/99/9999"
              id="secondLastLeaseExp"
              v-model="secondLastLeaseExp"
              :class="{
                'p-invalid': validationErrors.secondLastLeaseExp && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastLeaseExp && submitted"
              class="p-error"
              >Expiration is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="secondLastReasonLeaving">Reason for Leaving</label>
            <InputText
              id="secondLastReasonLeaving"
              v-model="secondLastReasonLeaving"
              :class="{
                'p-invalid':
                  validationErrors.secondLastReasonLeaving && submitted,
              }"
            />
            <small
              v-show="validationErrors.secondLastReasonLeaving && submitted"
              class="p-error"
              >Reason Leaving is required.</small
            >
          </div>
        </div>
        <template
          v-if="
            currentYearsLived + secondLastYearsLived <=
              this.previousRentalThreshold &&
            currentYearsLived !== null &&
            secondLastYearsLived !== null
          "
        >
          <h3>Previous Home</h3>
          <div class="p-fluid grid">
            <div class="field col-12 md:col-4">
              <label for="thirdLastLandlord">Previous Landlord</label>
              <InputText
                id="thirdLastLandlord"
                v-model="thirdLastLandlord"
                :class="{
                  'p-invalid': validationErrors.thirdLastLandlord && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastLandlord && submitted"
                class="p-error"
                >Current Landlord is required.</small
              >
            </div>
            <div class="field col-12 md:col-2">
              <label for="thirdLastYearsLived">Years Living at Address</label>
              <InputNumber
                mode="decimal"
                showButtons
                buttonLayout="stacked"
                :step="0.25"
                id="thirdLastYearsLived"
                v-model="thirdLastYearsLived"
                :class="{
                  'p-invalid':
                    validationErrors.thirdLastYearsLived && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastYearsLived && submitted"
                class="p-error"
                >Years Occupied is required.</small
              >
            </div>
            <div class="field col-12 md:col-6">
              <label for="thirdLastLandlordAddress">Landlord Address</label>
              <InputText
                id="thirdLastLandlordAddress"
                v-model="thirdLastLandlordAddress"
                :class="{
                  'p-invalid':
                    validationErrors.thirdLastLandlordAddress && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastLandlordAddress && submitted"
                class="p-error"
                >Landlord Address is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="thirdLastLandlordCity">Landlord City</label>
              <InputText
                id="thirdLastLandlordCity"
                v-model="thirdLastLandlordCity"
                :class="{
                  'p-invalid':
                    validationErrors.thirdLastLandlordCity && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastLandlordCity && submitted"
                class="p-error"
                >Landlord City is required.</small
              >
            </div>
            <div class="field col-12 md:col-2">
              <label for="thirdLastLandlordState">Landlord State</label>
              <InputText
                id="thirdLastLandlordState"
                v-model="thirdLastLandlordState"
                :class="{
                  'p-invalid':
                    validationErrors.thirdLastLandlordState && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastLandlordState && submitted"
                class="p-error"
                >Landlord State is required.</small
              >
            </div>
            <div class="field col-12 md:col-2">
              <label for="thirdLastLandlordPhone">Landlord Phone</label>
              <InputMask
                mask="999-999-9999"
                id="thirdLastLandlordPhone"
                v-model="thirdLastLandlordPhone"
                :class="{
                  'p-invalid':
                    validationErrors.thirdLastLandlordPhone && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastLandlordPhone && submitted"
                class="p-error"
                >Landlord Phone is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="thirdLastLandlordEmail">Landlord Email</label>
              <InputText
                id="thirdLastLandlordEmail"
                v-model="thirdLastLandlordEmail"
                :class="{
                  'p-invalid':
                    validationErrors.thirdLastLandlordEmail && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastLandlordEmail && submitted"
                class="p-error"
                >Landlord Email is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="thirdLastLeaseExp"
                >Lease Expiration (mm/dd/yyyy)</label
              >
              <InputMask
                mask="99/99/9999"
                id="thirdLastLeaseExp"
                v-model="thirdLastLeaseExp"
                :class="{
                  'p-invalid': validationErrors.thirdLastLeaseExp && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastLeaseExp && submitted"
                class="p-error"
                >Expiration is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="thirdLastReasonLeaving">Reason for Leaving</label>
              <InputText
                id="thirdLastReasonLeaving"
                v-model="thirdLastReasonLeaving"
                :class="{
                  'p-invalid':
                    validationErrors.thirdLastReasonLeaving && submitted,
                }"
              />
              <small
                v-show="validationErrors.thirdLastReasonLeaving && submitted"
                class="p-error"
                >Reason Leaving is required.</small
              >
            </div>
          </div>
        </template>
        <h3>Evictions</h3>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-4">
            <label for="eviction"
              >Have you ever been evicted or sued by a landlord?</label
            >
            <SelectButton
              v-model="eviction"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small
              v-show="validationErrors.eviction && submitted"
              class="p-error"
              >Yes or No is required.</small
            >
          </div>
          <div v-if="eviction === 'yes'" class="field col-12 md:col-8">
            <label for="explain">Explain:</label>
            <InputText
              id="explain"
              v-model="explain"
              :class="{
                'p-invalid': validationErrors.explain && submitted,
              }"
            />
            <small
              v-show="validationErrors.explain && submitted"
              class="p-error"
              >Explanation is required.</small
            >
          </div>
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
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Disclaimer from '../../components/Disclaimer.vue';
export default {
  components: { Card, Button, Checkbox, InputMask, InputText, Disclaimer },
  data() {
    return {
      previousRentalThreshold: 3,
      units: this.units,
      currentLandlord: '',
      currentYearsLived: null,
      currentLandlordPhone: '',
      currentLandlordEmail: '',
      currentLandlordAddress: '',
      currentLandlordCity: '',
      currentLandlordState: '',
      currentReasonLeaving: '',
      currentLeaseExp: '',
      secondLastLandlord: '',
      secondLastYearsLived: null,
      secondLastLandlordPhone: '',
      secondLastLandlordEmail: '',
      secondLastLandlordAddress: '',
      secondLastLandlordCity: '',
      secondLastLandlordState: '',
      secondLastLeaseExp: '',
      secondLastReasonLeaving: '',
      thirdLastLandlord: '',
      thirdLastYearsLived: null,
      thirdLastLandlordPhone: '',
      thirdLastLandlordEmail: '',
      thirdLastLandlordAddress: '',
      thirdLastLandlordCity: '',
      thirdLastLandlordState: '',
      thirdLastLeaseExp: '',
      thirdLastReasonLeaving: '',
      eviction: null,
      explain: '',
      submitted: false,
      validationErrors: {},
    };
  },
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
          console.log(name);
          if (!this[name]) {
            this.validationErrors[name] = true;
            scrollToTop();
          } else delete this.validationErrors[name];
        });
      }

      let validateContext = validate.bind(this);

      let toValidate = [
        'currentLandlord',
        'currentYearsLived',
        'currentLandlordPhone',
        'currentLandlordEmail',
        'currentLandlordAddress',
        'currentLandlordCity',
        'currentLandlordState',
        'currentReasonLeaving',
        'currentLeaseExp',
        'secondLastLandlord',
        'secondLastYearsLived',
        'secondLastLandlordPhone',
        'secondLastLandlordEmail',
        'secondLastLandlordAddress',
        'secondLastLandlordCity',
        'secondLastLandlordState',
        'secondLastLeaseExp',
        'secondLastReasonLeaving',
        'eviction',
      ];

      validateContext(toValidate);

      let thirdRentalData = [
        'thirdLastLandlord',
        'thirdLastYearsLived',
        'thirdLastLandlordPhone',
        'thirdLastLandlordEmail',
        'thirdLastLandlordAddress',
        'thirdLastLandlordCity',
        'thirdLastLandlordState',
        'thirdLastLeaseExp',
        'thirdLastReasonLeaving',
      ];

      if (
        this.currentYearsLived + this.secondLastYearsLived <=
        this.previousRentalThreshold
      ) {
        validateContext(thirdRentalData);
      } else {
        thirdRentalData.forEach((entry) => {
          delete this.validationErrors[entry];
        });
      }

      if (this.eviction === 'yes') {
        validateContext(['explain']);
      } else {
        delete this.validationErrors['explain'];
      }

      return !Object.keys(this.validationErrors).length;
    },
    nextPage() {
      this.submitted = true;
      if (this.validateForm()) {
        this.$emit('next-page', {
          formData: {},
          pageIndex: 2,
        });
      }
    },
    prevPage() {
      this.$emit('prev-page', { pageIndex: 2 });
    },
  },
};
</script>
<style lang="sass" scoped>
.p-fluid .p-buttonset
  width: 100%
</style>
