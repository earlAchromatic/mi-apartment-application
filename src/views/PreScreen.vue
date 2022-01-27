<template>
  <Requirements />
  <form method="post" @submit.prevent="">
    <div class="p-fluid">
      <div class="field">
        <label for="findouthow"
          >How Did You Hear About this Rental's Availability?</label
        >
        <InputText
          id="findouthow"
          type="text"
          name="findouthow"
          v-model="findouthow"
        />
      </div>
      <div class="field">
        <label for="firstname">Firstname</label>
        <InputText
          id="firstname"
          name="firstname"
          v-model="firstname"
          :class="{ 'p-invalid': validationErrors.firstname && submitted }"
        />
        <small v-show="validationErrors.firstname && submitted" class="p-error"
          >Firstname is required.</small
        >
      </div>
      <div class="field">
        <label for="lastname">Lastname</label>
        <InputText
          id="lastname"
          name="lastname"
          v-model="lastname"
          :class="{ 'p-invalid': validationErrors.lastname && submitted }"
        />
        <small v-show="validationErrors.lastname && submitted" class="p-error"
          >Lastname is required.</small
        >
      </div>
      <div class="field">
        <label for="age">Age</label>
        <InputNumber id="age" name="age" v-model="age" />
      </div>
    </div>

    <Divider align="center">
      <Button
        label="Button"
        icon="pi pi-search"
        class="p-button-outlined"
        @click="handleSubmit"
        >Get Your Application</Button
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

export default {
  components: { InputNumber, InputText, Requirements, Button, Divider },
  data() {
    return {
      findouthow: "",
      firstname: "",
      lastname: "",
      age: null,
      submitted: false,
      validationErrors: {},
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      if (this.validateForm()) {
        console.log("Posting");
        console.log(
          `{
            findouthow: ${this.findouthow},
            firstname: ${this.firstname}
            }`
        );
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "Prescreen",
            findouthow: this.findouthow,
            firstname: this.firstname,
            lastname: this.lastname,
            age: this.age,
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
      if (!this.firstname.trim()) this.validationErrors["firstname"] = true;
      else delete this.validationErrors["firstname"];
      if (!this.lastname.trim()) this.validationErrors["lastname"] = true;
      else delete this.validationErrors["lastname"];
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
};
</script>
