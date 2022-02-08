<template>
  <div class="application-offset">
    <Toast />
    <h2>
      Rental Application For 439 W. Washington | {{ this.$route.params.id }}
    </h2>
    <small @click="obj()">Ionia, Michigan, 48846</small>
    <Divider />
    <h3>An Equal Housing Opportunity</h3>
    <div class="card">
      <Steps :model="items" :readonly="true" />
    </div>
    <form method="post" @submit.prevent="">
      <router-view
        v-slot="{ Component }"
        :formData="formObject"
        @prevPage="prevPage($event)"
        @nextPage="nextPage($event)"
        @complete="complete($event)"
        :units="units"
      >
        <keep-alive
          >g
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </form>
  </div>
</template>

<script>
import Steps from 'primevue/steps';
import Toast from 'primevue/toast';
import Divider from 'primevue/divider';

import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useToast } from 'primevue/usetoast';
import Disclaimer from './Disclaimer.vue';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const toast = useToast();
    const id = route.params.id;

    const items = ref([
      {
        label: 'Personal',
        to: '/' + id + '/application',
      },
      {
        label: 'Employment History',
        to: '/' + id + '/application/EmploymentHistory',
      },
      {
        label: 'Rental History',
        to: '/' + id + '/application/RentalHistory',
      },
      {
        label: 'Other',
        to: '/' + id + '/application/Other',
      },
      {
        label: 'Confirmation',
        to: '/' + id + '/application/confirmation',
      },
    ]);
    const formObject = ref({});
    let errCount = 0;

    const nextPage = (event) => {
      for (let field in event.formData) {
        console.log(field);
        formObject.value[field] = event.formData[field];
      }
      router.push(items.value[event.pageIndex + 1].to);
    };
    const prevPage = (event) => {
      router.push(items.value[event.pageIndex - 1].to);
    };
    const complete = (evt) => {
      let datestamp = evt.datestamp;
      let consent = evt.consent;
      let sig = evt.signature;

      formObject.value.consent = consent;
      formObject.value.datestamp = datestamp;
      formObject.value.signature = sig;
      handleSubmit();
    };

    const encode = function (data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    };

    const handleSubmit = () => {
      try {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'Application',
            selectedUnit: formObject.value.selectedUnit.name,
            middlename: formObject.value.middlename,
            firstname: formObject.value.firstname,
            lastname: formObject.value.lastname,
            address: formObject.value.address,
            city: formObject.value.city,
            state: formObject.value.state,
            zip: formObject.value.zip,
            homephone: formObject.value.homephone,
            workphone: formObject.value.workphone,
            cellphone: formObject.value.cellphone,
            email: formObject.value.email,
            social: formObject.value.social,
            bday: formObject.value.bday,
            license: formObject.value.license,
            carmake: formObject.value.carmake,
            carmodel: formObject.value.carmodel,
            caryear: formObject.value.caryear,
            currentEmployer: formObject.value.currentEmployer,
            currentEmployerPhone: formObject.value.currentEmployerPhone,
            currentEmployerAddress: formObject.value.currentEmployerAddress,
            currentEmploymentLength: formObject.value.currentEmploymentLength,
            currentPosition: formObject.value.currentPosition,
            currentMonthlyIncome: formObject.value.currentMonthlyIncome,
            currentSupervisor: formObject.value.currentSupervisor,
            currentEmployerEmail: formObject.value.currentEmployerEmail,
            previousEmployer: formObject.value.previousEmployer,
            previousEmployerPhone: formObject.value.previousEmployerPhone,
            previousEmployerAddress: formObject.value.previousEmployerAddress,
            previousEmploymentLength: formObject.value.previousEmploymentLength,
            previousPosition: formObject.value.previousPosition,
            previousMonthlyIncome: formObject.value.previousMonthlyIncome,
            previousSupervisor: formObject.value.previousSupervisor,
            previousEmployerEmail: formObject.value.previousEmployerEmail,
            otherIncome: formObject.value.otherIncome,
            incomeSources: formObject.value.incomeSources,
            incomeFromSources: formObject.value.incomeFromSources,
            currentLandlord: formObject.value.currentLandlord,
            currentYearsLived: formObject.value.currentYearsLived,
            currentLandlordPhone: formObject.value.currentLandlordPhone,
            currentLandlordEmail: formObject.value.currentLandlordEmail,
            currentLandlordAddress: formObject.value.currentLandlordAddress,
            currentLandlordCity: formObject.value.currentLandlordCity,
            currentLandlordState: formObject.value.currentLandlordState,
            currentReasonLeaving: formObject.value.currentReasonLeaving,
            currentLeaseExp: formObject.value.currentLeaseExp,
            secondLastLandlord: formObject.value.secondLastLandlord,
            secondLastYearsLived: formObject.value.secondLastYearsLived,
            secondLastLandlordPhone: formObject.value.secondLastLandlordPhone,
            secondLastLandlordEmail: formObject.value.secondLastLandlordEmail,
            secondLastLandlordAddress:
              formObject.value.secondLastLandlordAddress,
            secondLastLandlordCity: formObject.value.secondLastLandlordCity,
            secondLastLandlordState: formObject.value.secondLastLandlordState,
            secondLastLeaseExp: formObject.value.secondLastLeaseExp,
            secondLastReasonLeaving: formObject.value.secondLastReasonLeaving,
            thirdLastLandlord: formObject.value.thirdLastLandlord,
            thirdLastYearsLived: formObject.value.thirdLastYearsLived,
            thirdLastLandlordPhone: formObject.value.thirdLastLandlordPhone,
            thirdLastLandlordEmail: formObject.value.thirdLastLandlordEmail,
            thirdLastLandlordAddress: formObject.value.thirdLastLandlordAddress,
            thirdLastLandlordCity: formObject.value.thirdLastLandlordCity,
            thirdLastLandlordState: formObject.value.thirdLastLandlordState,
            thirdLastLeaseExp: formObject.value.thirdLastLeaseExp,
            thirdLastReasonLeaving: formObject.value.thirdLastReasonLeaving,
            eviction: formObject.value.eviction,
            explain: formObject.value.explain,
            voucher: formObject.value.voucher,
            occupantCount: formObject.value.occupantCount,
            desiredMovein: formObject.value.desiredMovein,
            cosigner: formObject.value.cosigner,
            agency: formObject.value.agency,
            agencyPhone: formObject.value.agencyPhone,
            caseWorker: formObject.value.caseWorker,
            creditors: formObject.value.creditors,
            policeCalled: formObject.value.policeCalled,
            sexOffender: formObject.value.sexOffender,
            criminalOffense: formObject.value.criminalOffense,
            explainCriminal: formObject.value.explainCriminal,
            explainSummons: formObject.value.explainSummons,
            summoned: formObject.value.summoned,
            explainBankrupt: formObject.value.explainBankrupt,
            bankrupt: formObject.value.bankrupt,
            pets: formObject.value.pets,
            relativeFirstName: formObject.value.relativeFirstName,
            relativeLastName: formObject.value.relativeLastName,
            relativeAddress: formObject.value.relativeAddress,
            relativePhone: formObject.value.relativePhone,
            relativeEmail: formObject.value.relativeEmail,
            relativeState: formObject.value.relativeState,
            relativeCity: formObject.value.relativeCity,
            firstName_1: formObject.value.occupantList[0]
              ? formObject.value.occupantList[0].firstName_1
              : null,
            middleName_1: formObject.value.occupantList[0]
              ? formObject.value.occupantList[0].middleName_1
              : null,
            lastName_1: formObject.value.occupantList[0]
              ? formObject.value.occupantList[0].lastName_1
              : null,
            socialSecurity_1: formObject.value.occupantList[0]
              ? formObject.value.occupantList[0].socialSecurity_1
              : null,
            relationship_1: formObject.value.occupantList[0]
              ? formObject.value.occupantList[0].relationship_1
              : null,
            firstName_2: formObject.value.occupantList[1]
              ? formObject.value.occupantList[1].firstName_2
              : null,
            middleName_2: formObject.value.occupantList[1]
              ? formObject.value.occupantList[1].middleName_2
              : null,
            lastName_2: formObject.value.occupantList[1]
              ? formObject.value.occupantList[1].lastName_2
              : null,
            socialSecurity_2: formObject.value.occupantList[1]
              ? formObject.value.occupantList[1].socialSecurity_2
              : null,
            relationship_2: formObject.value.occupantList[1]
              ? formObject.value.occupantList[1].relationship_2
              : null,
            firstName_3: formObject.value.occupantList[2]
              ? formObject.value.occupantList[2].firstName_3
              : null,
            middleName_3: formObject.value.occupantList[2]
              ? formObject.value.occupantList[2].middleName_3
              : null,
            lastName_3: formObject.value.occupantList[2]
              ? formObject.value.occupantList[2].lastName_3
              : null,
            socialSecurity_3: formObject.value.occupantList[2]
              ? formObject.value.occupantList[2].socialSecurity_3
              : null,
            relationship_3: formObject.value.occupantList[2]
              ? formObject.value.occupantList[2].relationship_3
              : null,
            firstName_4: formObject.value.occupantList[3]
              ? formObject.value.occupantList[3].firstName_4
              : null,
            middleName_4: formObject.value.occupantList[3]
              ? formObject.value.occupantList[3].middleName_4
              : null,
            lastName_4: formObject.value.occupantList[3]
              ? formObject.value.occupantList[3].lastName_4
              : null,
            socialSecurity_4: formObject.value.occupantList[3]
              ? formObject.value.occupantList[3].socialSecurity_4
              : null,
            relationship_4: formObject.value.occupantList[3]
              ? formObject.value.occupantList[3].relationship_4
              : null,
            firstName_5: formObject.value.occupantList[4]
              ? formObject.value.occupantList[4].firstName_5
              : null,
            middleName_5: formObject.value.occupantList[4]
              ? formObject.value.occupantList[4].middleName_5
              : null,
            lastName_5: formObject.value.occupantList[4]
              ? formObject.value.occupantList[4].lastName_5
              : null,
            socialSecurity_5: formObject.value.occupantList[4]
              ? formObject.value.occupantList[4].socialSecurity_5
              : null,
            relationship_5: formObject.value.occupantList[4]
              ? formObject.value.occupantList[4].relationship_5
              : null,
            datestamp: formObject.value.datestamp,
            consent: formObject.value.consent,
            signature: formObject.value.signature,
          }),
        })
          .then((req) => console.log(req.body))
          .then(() => {
            toast.add({
              severity: 'success',
              summary: 'Order submitted',
              detail:
                'Dear, ' +
                formObject.value.firstname +
                ' ' +
                formObject.value.lastname +
                ' your application has been submitted.',
            });
            router.push('thanks');
          })
          .catch(() => {
            console.log('ERROR FILLING OUT FORM');
            router.push('404');
          });
      } catch (err) {
        if (errCount >= 1) {
          router.push('404');
        } else {
          toast.add({
            severity: 'error',
            summary: 'Your application has NOT been submitted.',
            detail:
              'Something out of ordinary happened... Please make sure that each of the form sections are completely filled out and try again.',
          });
          errCount++;
        }
        console.error(err);
      }
    };

    return { items, formObject, nextPage, prevPage, complete, errCount };
  },
  props: ['units'],
  components: { Steps, Toast, Disclaimer },
  methods: {},
};
</script>

<style lang="sass">
.application-offset
  margin-top: 10rem
::v-deep(b)
  display: block


::v-deep(.p-card-body)
  padding: 2rem

.stepsdemo-content
  margin-top: 1rem
.p-steps .p-steps-item .p-menuitem-link .p-steps-title
  padding: 0.5rem
.p-steps ul
  flex-wrap: wrap
</style>
