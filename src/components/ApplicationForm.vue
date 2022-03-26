<template>
  <div class="application-offset">
    <Toast />
    <h2>
      Rental Application For 439 W. Washington | {{ this.$route.params.id }} |
      Ionia, Michigan, 48846
    </h2>

    <Divider />
    <div class="equalhousing">
      <img class="icon" src="../assets/equalhousing.png" alt="" />
      <h3>An Equal Housing Opportunity</h3>
    </div>

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
        <keep-alive>
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

const sendpdfURL = '/.netlify/functions/send-pdf';

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
      let bodyData = new FormData();
      bodyData.append('form-name', 'Application');
      for (const [key, value] of Object.entries(formObject.value)) {
        if (key === 'occupantList') {
          for (const [OLkey, OLvalue] of Object.entries(
            formObject.value.occupantList
          )) {
            bodyData.append(
              `firstName_${Number(OLkey) + 1}`,
              OLvalue[`firstName_${Number(OLkey) + 1}`]
            );
            bodyData.append(
              `middleName_${Number(OLkey) + 1}`,
              OLvalue[`middleName_${Number(OLkey) + 1}`]
            );
            bodyData.append(
              `lastName_${Number(OLkey) + 1}`,
              OLvalue[`lastName_${Number(OLkey) + 1}`]
            );
            bodyData.append(
              `socialSecurity_${Number(OLkey) + 1}`,
              OLvalue[`socialSecurity_${Number(OLkey) + 1}`]
            );
            bodyData.append(
              `relationship_${Number(OLkey) + 1}`,
              OLvalue[`relationship_${Number(OLkey) + 1}`]
            );
          }
        } else {
          bodyData.append(key, value);
        }
      }

      console.log(...bodyData);

      try {
        fetch('/', {
          method: 'POST',
          body: bodyData,
        })
          .then((res) => {
            console.log('Initial POST to Netlify:');
            console.log(res.ok);
          })
          .then(() => {
            fetch(sendpdfURL, {
              method: 'POST',
              body: bodyData,
            });
          })
          .then((res) => {
            console.log('POST to Netlify Function');
          })
          .then(() => {
            toast.add({
              severity: 'success',
              summary: 'Application submitted',
              detail:
                'Dear, ' +
                formObject.value.firstname +
                ' ' +
                formObject.value.lastname +
                ' your application has been submitted.',
            });
            router.push('thanks');
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        if (errCount >= 1) {
          router.push('404');
        } else {
          toast.add({
            severity: 'error',
            summary: 'Your Application has NOT been submitted.',
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
.equalhousing
  display: flex
  justify-content: center
  &>*
    margin-left: 1rem
.icon
  width: 4rem
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
