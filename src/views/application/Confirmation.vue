<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> Confirmation </template>
      <template v-slot:content>
        <div class="grid p-fluid">
          <div class="field col-2">
            <label for="selectedUnit">Selected Unit</label>
            <b name="selectedUnit"
              >{{ formData.selectedUnit ? formData.selectedUnit : '-' }}
            </b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="class">Name</label>
            <b
              >{{ formData.firstname ? formData.firstname : '-' }}
              {{ formData.middlename ? formData.middlename : '-' }}
              {{ formData.lastname ? formData.lastname : '-' }}</b
            >
          </div>
          <div class="field md:col-2 col-6">
            <label for="address">address</label>
            <b>{{ formData.address ? formData.address : '-' }}</b>
            <b>{{ formData.city ? formData.city : '-' }}</b>
            <b>{{ formData.state ? formData.state : '-' }}</b>
            <b>{{ formData.zip ? formData.zip : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">phone</label>
            <b>{{ formData.homephone ? formData.homephone : '-' }}</b>
            <b>{{ formData.workphone ? formData.workphone : '-' }}</b>
            <b>{{ formData.cellphone ? formData.cellphone : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">email</label>
            <b>{{ formData.email ? formData.email : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">SSN</label>
            <b>{{ formData.social ? formData.social : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">date of birth</label>
            <b>{{ formData.bday ? formData.bday : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">license</label>
            <b>{{ formData.license ? formData.license : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Vehicle</label>
            <b>{{ formData.carmake ? formData.carmake : '-' }}</b>
            <b>{{ formData.carmodel ? formData.carmodel : '-' }}</b>
            <b>{{ formData.caryear ? formData.caryear : '-' }}</b>
          </div>
          <div class="field md:col-3 col-6">
            <label for="Age">Current Employer</label>
            <b>{{
              formData.currentEmployer ? formData.currentEmployer : '-'
            }}</b>
            <b>{{
              formData.currentEmployerPhone
                ? formData.currentEmployerPhone
                : '-'
            }}</b>
            <b>{{
              formData.currentEmployerAddress
                ? formData.currentEmployerAddress
                : '-'
            }}</b>
            <b>{{
              formData.currentEmployementLength
                ? formData.currentEmployementLength
                : '-'
            }}</b>
            <b>{{
              formData.currentPosition ? formData.currentPosition : '-'
            }}</b>
            <b>{{
              formData.currentMonthlyIncome
                ? formData.currentMonthlyIncome
                : '-'
            }}</b>
            <b>{{
              formData.currentSupervisor ? formData.currentSupervisor : '-'
            }}</b>
            <b>{{
              formData.currentEmployerMail ? formData.currentEmployerMail : '-'
            }}</b>
          </div>
          <div class="field md:col-3 col-6">
            <label for="Age">Previous Employer</label>
            <b>{{
              formData.previousEmployer ? formData.previousEmployer : '-'
            }}</b>
            <b>{{
              formData.previousEmployerPhone
                ? formData.previousEmployerPhone
                : '-'
            }}</b>
            <b>{{
              formData.previousEmployerAddress
                ? formData.previousEmployerAddress
                : '-'
            }}</b>
            <b>{{
              formData.previousEmployementLength
                ? formData.previousEmployementLength
                : '-'
            }}</b>
            <b>{{
              formData.previousPosition ? formData.previousPosition : '-'
            }}</b>
            <b>{{
              formData.previousMonthlyIncome
                ? formData.previousMonthlyIncome
                : '-'
            }}</b>
            <b>{{
              formData.previousSupervisor ? formData.previousSupervisor : '-'
            }}</b>
            <b>{{
              formData.previousEmployerMail
                ? formData.previousEmployerMail
                : '-'
            }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Other Income</label>
            <b>{{ formData.otherIncome ? formData.otherIncome : '-' }}</b>
            <b>{{ formData.incomeSources ? formData.incomeSources : '-' }}</b>
            <b>{{
              formData.incomeFromSources ? formData.incomeFromSources : '-'
            }}</b>
          </div>

          <div class="field md:col-2 col-6">
            <label for="Age">Current Landlord</label>
            <b>{{
              formData.currentLandlord ? formData.currentLandlord : '-'
            }}</b>
            <b>{{
              formData.currentYearsLived ? formData.currentYearsLived : '-'
            }}</b>
            <b>{{
              formData.currentLandlordPhone
                ? formData.currentLandlordPhone
                : '-'
            }}</b>
            <b>{{
              formData.currentLandlordEmail
                ? formData.currentLandlordEmail
                : '-'
            }}</b>

            <b>{{
              formData.currentLandlordAddress
                ? formData.currentLandlordAddress
                : '-'
            }}</b>

            <b>{{
              formData.currentLandlordCity ? formData.currentLandlordCity : '-'
            }}</b>

            <b>{{
              formData.currentLandlordState
                ? formData.currentLandlordState
                : '-'
            }}</b>

            <b>{{
              formData.currentReasonLeaving
                ? formData.currentReasonLeaving
                : '-'
            }}</b>

            <b>{{
              formData.currentLeaseExp ? formData.currentLeaseExp : '-'
            }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Second to Last Landlord</label>
            <b>{{
              formData.secondLastLandlord ? formData.secondLastLandlord : '-'
            }}</b>
            <b>{{
              formData.secondLastYearsLived
                ? formData.secondLastYearsLived
                : '-'
            }}</b>
            <b>{{
              formData.secondLastLandlordPhone
                ? formData.secondLastLandlordPhone
                : '-'
            }}</b>
            <b>{{
              formData.secondLastLandlordEmail
                ? formData.secondLastLandlordEmail
                : '-'
            }}</b>

            <b>{{
              formData.secondLastLandlordAddress
                ? formData.secondLastLandlordAddress
                : '-'
            }}</b>

            <b>{{
              formData.secondLastLandlordCity
                ? formData.secondLastLandlordCity
                : '-'
            }}</b>

            <b>{{
              formData.secondLastLandlordState
                ? formData.secondLastLandlordState
                : '-'
            }}</b>

            <b>{{
              formData.secondLastReasonLeaving
                ? formData.secondLastReasonLeaving
                : '-'
            }}</b>

            <b>{{
              formData.secondLastLeaseExp ? formData.secondLastLeaseExp : '-'
            }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Third to Last Landlord</label>
            <b>{{
              formData.thirdLastLandlord ? formData.thirdLastLandlord : '-'
            }}</b>
            <b>{{
              formData.thirdLastYearsLived ? formData.thirdLastYearsLived : '-'
            }}</b>
            <b>{{
              formData.thirdLastLandlordPhone
                ? formData.thirdLastLandlordPhone
                : '-'
            }}</b>
            <b>{{
              formData.thirdLastLandlordEmail
                ? formData.thirdLastLandlordEmail
                : '-'
            }}</b>

            <b>{{
              formData.thirdLastLandlordAddress
                ? formData.thirdLastLandlordAddress
                : '-'
            }}</b>

            <b>{{
              formData.thirdLastLandlordCity
                ? formData.thirdLastLandlordCity
                : '-'
            }}</b>

            <b>{{
              formData.thirdLastLandlordState
                ? formData.thirdLastLandlordState
                : '-'
            }}</b>

            <b>{{
              formData.thirdLastReasonLeaving
                ? formData.thirdLastReasonLeaving
                : '-'
            }}</b>

            <b>{{
              formData.thirdLastLeaseExp ? formData.thirdLastLeaseExp : '-'
            }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Evictions</label>
            <b>{{ formData.eviction ? formData.eviction : '-' }}</b>
            <b>{{ formData.explain ? formData.explain : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Occupants</label>
            <b>{{ formData.OccupantCount ? formData.OccupantCount : '-' }}</b>

            <template v-for="occ in formData.occupantList">
              <template v-for="key in Object.keys(occ)">
                <b>{{ key ? occ[key] : '-' }}</b>
              </template>
            </template>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Voucher</label>
            <b>{{ formData.voucher ? formData.voucher : '-' }}</b>
            <b>{{ formData.agency ? formData.agency : '-' }}</b>
            <b>{{ formData.agencyPhone ? formData.agencyPhone : '-' }}</b>
            <b>{{ formData.CaseWorker ? formData.CaseWorker : '-' }}</b>
            <b>{{ formData.cosigner ? formData.cosigner : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Desired Move in</label>
            <b>{{ formData.desiredMovein ? formData.desiredMovein : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Creditors</label>
            <b>{{ formData.creditors ? formData.creditors : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Police Called</label>
            <b>{{ formData.desiredMovein ? formData.desiredMovein : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Sex Offender</label>
            <b>{{ formData.sexOffender ? formData.sexOffender : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Criminal Offender</label>
            <b>{{
              formData.criminalOffense ? formData.criminalOffense : '-'
            }}</b>
            <b>{{
              formData.explainCriminal ? formData.explainCriminal : '-'
            }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Landlord Tenant Court</label>
            <b>{{ formData.summoned ? formData.summoned : '-' }}</b>
            <b>{{
              formData.explainSummoned ? formData.explainSummoned : '-'
            }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Bankruptcy</label>
            <b>{{ formData.bankrupt ? formData.bankrupt : '-' }}</b>
            <b>{{
              formData.explainBankrupt ? formData.explainBankrupt : '-'
            }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">pets</label>
            <b>{{ formData.pets ? formData.pets : '-' }}</b>
          </div>
          <div class="field md:col-2 col-6">
            <label for="Age">Relative Contact Information</label>
            <b>{{
              formData.relativeFirstName ? formData.relativeFirstName : '-'
            }}</b>
            <b>{{
              formData.relativeLastName ? formData.relativeLastName : '-'
            }}</b>
            <b>{{
              formData.relativeAddress ? formData.relativeAddress : '-'
            }}</b>
            <b>{{ formData.relativePhone ? formData.relativePhone : '-' }}</b>
            <b>{{ formData.relativeEmail ? formData.relativeEmail : '-' }}</b>
            <b>{{ formData.relativeState ? formData.relativeState : '-' }}</b>
            <b>{{ formData.relativeCity ? formData.relativeCity : '-' }}</b>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <Disclaimer />
        <div class="p-fluid grid binding">
          <div class="field col-12">
            <label for="datestamp">Today's Date:</label>
            <InputMask
              mask="99/99/9999"
              id="datestamp"
              v-bind:placeholder="datestamp"
              :disabled="true"
            />
          </div>
          <div class="field col-12">
            <label for="consent"
              >By checking this box, I acknowledge that this electronic
              signature is the legal equivalent of my manual signature on this
              rental application.</label
            >
            <Checkbox
              v-model="consent"
              id="consent"
              :binary="true"
              :class="{
                'p-invalid': validationErrors.consent && submitted,
              }"
            /><small
              v-show="validationErrors.consent && submitted"
              class="p-error"
              >Your Acknowledgement is required.</small
            >
          </div>
          <div class="field col-12">
            <label for="signature">Signature (full name)</label>
            <InputText
              v-model="signature"
              id="signature"
              :class="{
                'p-invalid': validationErrors.signature && submitted,
              }"
            /><small
              v-show="validationErrors.signature && submitted"
              class="p-error"
              >Your Signature is required.</small
            >
          </div>
        </div>
        <div class="grid grid-nogutter justify-content-between">
          <Button label="Back" @click="prevPage()" icon="pi pi-angle-left" />
          <Button
            label="Complete"
            @click="complete()"
            icon="pi pi-check"
            iconPos="right"
            class="p-button-success"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';
import Disclaimer from '../../components/Disclaimer.vue';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import InputMask from 'primevue/inputmask';
import formData from '../../../formData';

export default {
  data() {
    if (import.meta.env.DEV || import.meta.env.VITE_DATA) {
      return formData;
    } else {
      return {
        datestamp: new Date().toLocaleDateString('en-US'),
        consent: '',
        signature: '',
        submitted: false,
        validationErrors: {},
      };
    }
  },
  components: { InputText, InputMask, Checkbox, Card, Disclaimer },
  props: {
    formData: Object,
  },
  methods: {
    prevPage() {
      this.$emit('prev-page', { pageIndex: 4 });
    },
    complete() {
      if (this.validateForm()) {
        this.$emit('complete', {
          datestamp: this.datestamp,
          consent: this.consent,
          signature: this.signature,
        });
      }
      this.submitted = true;
    },

    validateForm() {
      function validate(nameArray) {
        nameArray.forEach((name) => {
          if (!this[name]) {
            this.validationErrors[name] = true;
          } else delete this.validationErrors[name];
        });
      }

      let validateContext = validate.bind(this);
      validateContext(['consent', 'signature']);

      return !Object.keys(this.validationErrors).length;
    },
  },
};
</script>

<style lang="sass">
.field
  flex-direction: column

.binding
  margin: 0 auto
  text-align: left
  max-width: 60%
</style>
