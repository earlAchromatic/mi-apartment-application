<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> Other Information </template>
      <template v-slot:subtitle> Enter your other information below. </template>
      <template v-slot:content>
        <h3>Current Home</h3>
        <div class="p-fluid grid">
          <div class="field col-12 md:col-2">
            <label for="occupantCount"
              >Number of Occupants Covered by Application:</label
            >
            <InputNumber
              id="occupantCount"
              mode="decimal"
              showButtons
              buttonLayout="stacked"
              :min="0"
              :max="10"
              :step="1"
              v-model="occupantCount"
              placeholder="0"
              :class="{
                'p-invalid': validationErrors.occupantCount && submitted,
              }"
            />
            <small
              v-show="validationErrors.occupantCount && submitted"
              class="p-error"
              >Occupant Count is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="desiredMovein">Move in Date Desired:</label>
            <InputMask
              mask="99/99/9999"
              id="desiredMovein"
              v-model="desiredMovein"
              :class="{
                'p-invalid': validationErrors.desiredMovein && submitted,
              }"
            />
            <small
              v-show="validationErrors.desiredMovein && submitted"
              class="p-error"
              >Move in date is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="cosigner"
              >Will Someone Co-sign this lease with you?</label
            >
            <SelectButton
              v-model="cosigner"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small
              v-show="validationErrors.cosigner && submitted"
              class="p-error"
              >Yes or no is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="voucher">Rental Assistance or Voucher?</label>
            <SelectButton
              v-model="voucher"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small
              v-show="validationErrors.voucher && submitted"
              class="p-error"
              >Yes or no is required.</small
            >
          </div>
          <template v-if="voucher === 'yes'">
            <div class="field col-12 md:col-4">
              <label for="agency">Agency</label>
              <InputText
                id="agency"
                v-model="agency"
                :class="{
                  'p-invalid': validationErrors.agency && submitted,
                }"
              />
              <small
                v-show="validationErrors.agency && submitted"
                class="p-error"
                >Agency is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="agencyphone">Agency Phone</label>
              <InputMask
                mask="999-999-9999"
                id="agencyphone"
                v-model="agencyphone"
                :class="{
                  'p-invalid': validationErrors.agencyphone && submitted,
                }"
              />
              <small
                v-show="validationErrors.agencyphone && submitted"
                class="p-error"
                >Agency Phone is required.</small
              >
            </div>
            <div class="field col-12 md:col-4">
              <label for="caseWorker">Case Worker</label>
              <InputText
                id="caseWorker"
                v-model="caseWorker"
                :class="{
                  'p-invalid': validationErrors.caseWorker && submitted,
                }"
              />
              <small
                v-show="validationErrors.caseWorker && submitted"
                class="p-error"
                >Case Worker is required.</small
              >
            </div>
          </template>
          <div class="field col-12 md:col-12">
            <label for="creditors"
              >Current Creditors including charge cards, student loans, and
              commercial loans.</label
            >
            <Textarea
              rows="5"
              cols="6"
              id="creditors"
              v-model="creditors"
              :class="{
                'p-invalid': validationErrors.creditors && submitted,
              }"
            />
            <small
              v-show="validationErrors.creditors && submitted"
              class="p-error"
              >Creditors list is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="criminalOffense"
              >Have you ever been convicted of a criminal offense?</label
            >
            <SelectButton
              v-model="criminalOffense"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small
              v-show="validationErrors.criminalOffense && submitted"
              class="p-error"
              >Yes or No is required.</small
            >
          </div>
          <div v-if="criminalOffense === 'yes'" class="field col-12 md:col-12">
            <label for="explainCriminalOffense">Explain:</label>
            <Textarea
              rows="5"
              cols="6"
              id="explainCriminalOffense"
              v-model="explainCriminalOffense"
              :class="{
                'p-invalid':
                  validationErrors.explainCriminalOffense && submitted,
              }"
            />
            <small
              v-show="validationErrors.explainCriminalOffense && submitted"
              class="p-error"
              >Explanation is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="sexOffender">Are you a convicted sex offender?</label>
            <SelectButton
              v-model="sexOffender"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small
              v-show="validationErrors.sexOffender && submitted"
              class="p-error"
              >Yes or No is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="summoned"
              >Have you ever been summoned to landlord tenant court?</label
            >
            <SelectButton
              v-model="summoned"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small
              v-show="validationErrors.summoned && submitted"
              class="p-error"
              >Yes or No is required.</small
            >
          </div>
          <div v-if="summoned === 'yes'" class="field col-12 md:col-12">
            <label for="explainSummons">Explain:</label>
            <Textarea
              rows="5"
              cols="6"
              id="explainSummons"
              v-model="explainSummons"
              :class="{
                'p-invalid': validationErrors.explainSummons && submitted,
              }"
            />
            <small
              v-show="validationErrors.explainSummons && submitted"
              class="p-error"
              >Explanation is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="policeCalled"
              >How many times were the police called to your current
              address?</label
            >
            <InputNumber
              mode="decimal"
              showButtons
              buttonLayout="stacked"
              :min="0"
              :max="10"
              :step="1"
              id="policeCalled"
              v-model="policeCalled"
              placeholder="0"
              :class="{
                'p-invalid': validationErrors.policeCalled && submitted,
              }"
            />
            <small
              v-show="validationErrors.policeCalled && submitted"
              class="p-error"
              >Answer is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="bankrupt">Have you ever filed for Bankruptcy?</label>
            <SelectButton
              v-model="bankrupt"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small
              v-show="validationErrors.bankrupt && submitted"
              class="p-error"
              >Yes or No is required.</small
            >
          </div>
          <div v-if="bankrupt === 'yes'" class="field col-12 md:col-12">
            <label for="explainBankrupt">Explain:</label>
            <Textarea
              rows="5"
              cols="6"
              id="explainBankrupt"
              v-model="explainBankrupt"
              :class="{
                'p-invalid': validationErrors.explainBankrupt && submitted,
              }"
            />
            <small
              v-show="validationErrors.explainBankrupt && submitted"
              class="p-error"
              >Explanation is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="pets">Do you have any pets?</label>
            <SelectButton
              v-model="pets"
              :options="['yes', 'no']"
              :multiple="false"
            />
            <small v-show="validationErrors.pets && submitted" class="p-error"
              >Yes or No is required.</small
            >
          </div>
        </div>
        <h3>Relative Contact Information</h3>
        <span
          >Enter the name and contact information of the closest relative not
          residing with applicant.</span
        >
        <div class="p-fluid grid">
          <div class="field col-12 md:col-2">
            <label for="relativeFirstName">Relative's First Name</label>
            <InputText
              id="relativeFirstName"
              v-model="relativeFirstName"
              :class="{
                'p-invalid': validationErrors.relativeFirstName && submitted,
              }"
            />
            <small
              v-show="validationErrors.relativeFirstName && submitted"
              class="p-error"
              >First Name is required.</small
            >
          </div>
          <div class="field col-12 md:col-2">
            <label for="relativeLastName">Relative's Last Name</label>
            <InputText
              id="relativeLastName"
              v-model="relativeLastName"
              :class="{
                'p-invalid': validationErrors.relativeLastName && submitted,
              }"
            />
            <small
              v-show="validationErrors.relativeLastName && submitted"
              class="p-error"
              >Last Name is required.</small
            >
          </div>
          <div class="field col-12 md:col-8">
            <label for="relativeAddress">Relative's Street Address</label>
            <InputText
              id="relativeAddress"
              v-model="relativeAddress"
              :class="{
                'p-invalid': validationErrors.relativeAddress && submitted,
              }"
            />
            <small
              v-show="validationErrors.relativeAddress && submitted"
              class="p-error"
              >Street Address is required.</small
            >
          </div>

          <div class="field col-12 md:col-4">
            <label for="relativeCity">Relative's City</label>
            <InputText
              id="relativeCity"
              v-model="relativeCity"
              :class="{
                'p-invalid': validationErrors.relativeCity && submitted,
              }"
            />
            <small
              v-show="validationErrors.relativeCity && submitted"
              class="p-error"
              >City is required.</small
            >
          </div>
          <div class="field col-12 md:col-8">
            <label for="relativeState">Relative's State</label>
            <InputText
              id="relativeState"
              v-model="relativeState"
              :class="{
                'p-invalid': validationErrors.relativeState && submitted,
              }"
            />
            <small
              v-show="validationErrors.relativeState && submitted"
              class="p-error"
              >State is required.</small
            >
          </div>
          <div class="field col-12 md:col-4">
            <label for="relativePhone">Relative's Phone</label>
            <InputMask
              mask="999-999-9999"
              id="relativePhone"
              v-model="relativePhone"
              :class="{
                'p-invalid': validationErrors.relativePhone && submitted,
              }"
            /><small
              v-show="validationErrors.relativePhone && submitted"
              class="p-error"
              >Home Phone is required.</small
            >
          </div>
          <div class="field col-12 md:col-6">
            <label for="relativeEmail">Relative's Email</label>
            <InputText
              id="relativeEmail"
              v-model="relativeEmail"
              :class="{
                'p-invalid': validationErrors.relativeEmail && submitted,
              }"
            /><small
              v-show="validationErrors.relativeEmail && submitted"
              class="p-error"
              >Email is required.</small
            >
          </div>
        </div>
        <h3>Occupant Information</h3>
        <span
          ><strong
            >Please list the names of ALL persons that will be living with you
            at this address and provide the information as indicated for each
            person:</strong
          ></span
        >
        <div class="p-fluid grid">
          <template v-for="(occupant, i) in occupantList" :key="i">
            <hr />
            <h4>Occupant {{ i + 1 }}</h4>
            <div class="field col-12 md:col-2">
              <label :for="'firstName_' + (i + 1)"> First Name</label>
              <InputText
                :id="'firstName_' + (i + 1)"
                v-model="occupant[`firstName_${i + 1}`]"
                :class="{
                  'p-invalid':
                    validationErrors[`firstName_${i + 1}`] && submitted,
                }"
              />
              <small
                v-show="validationErrors[`firstName_${i + 1}`] && submitted"
                class="p-error"
                >First Name is required.</small
              >
            </div>

            <div class="field col-12 md:col-2">
              <label :for="'middleName_' + (i + 1)">Middle Name</label>
              <InputText
                :id="'middleName_' + (i + 1)"
                v-model="occupant[`middleName_${i + 1}`]"
                :class="{
                  'p-invalid':
                    validationErrors[`middleName_${i + 1}`] && submitted,
                }"
              />
              <small
                v-show="validationErrors[`middleName_${i + 1}`] && submitted"
                class="p-error"
                >Middle Name is required.</small
              >
            </div>

            <div class="field col-12 md:col-2">
              <label :for="'lastName_' + (i + 1)">Last Name</label>
              <InputText
                :id="'lastName_' + (i + 1)"
                v-model="occupant[`lastName_${i + 1}`]"
                :class="{
                  'p-invalid':
                    validationErrors[`lastName_${i + 1}`] && submitted,
                }"
              />
              <small
                v-show="validationErrors[`lastName_${i + 1}`] && submitted"
                class="p-error"
                >Last Name is required.</small
              >
            </div>
            <div class="field col-12 md:col-3">
              <label :for="'socialSecurity_' + (i + 1)"
                >Social Security Number</label
              >
              <InputMask
                mask="999-999-9999"
                :id="'socialSecurity_' + (i + 1)"
                v-model="occupant[`socialSecurity_${i + 1}`]"
                :class="{
                  'p-invalid':
                    validationErrors[`socialSecurity_${i + 1}`] && submitted,
                }"
              />
              <small
                v-show="
                  validationErrors[`socialSecurity_${i + 1}`] && submitted
                "
                class="p-error"
                >Social Security Number is required.</small
              >
            </div>
            <div class="field col-12 md:col-3">
              <label :for="'relationship_' + (i + 1)">Relationship</label>
              <InputText
                :id="'relationship_' + (i + 1)"
                v-model="occupant[`relationship_${i + 1}`]"
                :class="{
                  'p-invalid':
                    validationErrors[`relationship_${i + 1}`] && submitted,
                }"
              />
              <small
                v-show="validationErrors[`relationship_${i + 1}`] && submitted"
                class="p-error"
                >Relationship is required.</small
              >
            </div>
          </template>
        </div>
        <Button
          @click="addOccupant()"
          class="adder"
          icon="pi pi-plus"
          label="Add Occupant"
          :disabled="!canAdd"
        >
        </Button>
        <Button
          @click="removeOccupant()"
          class="adder"
          icon="pi pi-minus"
          label="Remove Occupant"
          :disabled="!canSubtract"
        >
        </Button>
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
import Textarea from 'primevue/textarea';
import Disclaimer from '../../components/Disclaimer.vue';
import formData from '../../../formData';
export default {
  components: {
    Card,
    Button,
    Checkbox,
    InputMask,
    InputText,
    Disclaimer,
    Textarea,
  },
  data() {
    if (import.meta.env.DEV || import.meta.env.VITE_DATA) {
      return formData;
    } else {
      return {
        occupantList: [
          {
            firstName_1: '',
            middleName_1: '',
            lastName_1: '',
            socialSecurity_1: '',
            relationship_1: '',
          },
        ],
        units: this.units,
        voucher: null,
        occupantCount: null,
        desiredMovein: '',
        cosigner: '',
        agency: '',
        agencyPhone: '',
        caseWorker: '',
        creditors: '',
        policeCalled: null,
        sexOffender: null,
        criminalOffense: null,
        explainCriminal: '',
        explainSummons: '',
        summoned: null,
        explainBankrupt: '',
        bankrupt: null,
        pets: null,
        relativeFirstName: '',
        relativeLastName: '',
        relativeAddress: '',
        relativePhone: '',
        relativeEmail: '',
        relativeState: '',
        relativeCity: '',
        submitted: false,
        validationErrors: {},
      };
    }
  },
  computed: {
    canSubtract() {
      if (this.occupantList.length > 1) {
        return true;
      } else return false;
    },
    canAdd() {
      if (this.occupantList.length < 5) {
        return true;
      } else return false;
    },
  },
  methods: {
    addOccupant() {
      let i = this.occupantList.length + 1;
      this.occupantList.push({
        ['firstName_' + i]: '',
        ['middleName_' + i]: '',
        ['lastName_' + i]: '',
        ['socialSecurity_' + i]: '',
        ['relationship_' + i]: '',
      });
    },
    removeOccupant() {
      this.occupantList.pop();
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
          if (!this[name]) {
            this.validationErrors[name] = true;
            scrollToTop();
          } else delete this.validationErrors[name];
        });
      }

      let validateContext = validate.bind(this);

      let toValidate = [
        'voucher',
        'occupantCount',
        'desiredMovein',
        'cosigner',
        'creditors',
        'sexOffender',
        'criminalOffense',
        'summoned',
        'bankrupt',
        'pets',
        'relativeFirstName',
        'relativeLastName',
        'relativeAddress',
        'relativePhone',
        'relativeEmail',
        'relativeState',
        'relativeCity',
      ];

      validateContext(toValidate);

      let occupantValidationArray = [];

      this.occupantList.forEach((occupant) => {
        Object.keys(occupant).forEach((key, i) => {
          if (occupant[key]) {
            delete this.validationErrors[key];
          } else {
            occupantValidationArray.push(key);
          }
        });
      });

      validateContext(occupantValidationArray);

      if (this.summoned === 'yes') {
        validateContext(['explainSummons']);
      } else {
        delete this.validationErrors['explainSummons'];
      }

      if (this.criminalOffense === 'yes') {
        validateContext(['explainCriminal']);
      } else {
        delete this.validationErrors['explainCriminal'];
      }

      if (this.bankrupt === 'yes') {
        validateContext(['explainBankrupt']);
      } else {
        delete this.validationErrors['explainBankrupt'];
      }

      return !Object.keys(this.validationErrors).length;
    },
    nextPage() {
      this.submitted = true;
      if (this.validateForm()) {
        this.$emit('next-page', {
          formData: {
            occupantList: this.occupantList,
            voucher: this.voucher,
            occupantCount: this.occupantCount,
            desiredMovein: this.desiredMovein,
            cosigner: this.cosigner,
            agency: this.agency,
            agencyPhone: this.agencyPhone,
            caseWorker: this.caseWorker,
            creditors: this.creditors,
            policeCalled: this.policeCalled,
            sexOffender: this.sexOffender,
            criminalOffense: this.criminalOffense,
            explainCriminal: this.explainCriminal,
            explainSummons: this.explainSummons,
            summoned: this.summoned,
            explainBankrupt: this.explainBankrupt,
            bankrupt: this.bankrupt,
            pets: this.pets,
            relativeFirstName: this.relativeFirstName,
            relativeLastName: this.relativeLastName,
            relativeAddress: this.relativeAddress,
            relativePhone: this.relativePhone,
            relativeEmail: this.relativeEmail,
            relativeState: this.relativeState,
            relativeCity: this.relativeCity,
          },
          pageIndex: 3,
        });
      }
    },
    prevPage() {
      this.$emit('prev-page', { pageIndex: 3 });
    },
  },
  updated() {
    console.log('------');
    console.dir(JSON.stringify(this.validationErrors));
  },
};
</script>
<style lang="sass" scoped>
.p-fluid .p-buttonset
  width: 100%
h4
    width: 100%
    text-align: left
hr
    width: 80%
.adder
    width: 30%
    margin: 1rem
</style>
