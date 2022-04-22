<template>
  <div class="form-group mb-3">
    <input type="text" v-model="telNo" class="form-control" placeholder="Phone">
    <div class="alert alert-danger" v-for="error in telNoValidate.$errors">
      {{ error.$message }}
    </div>
  </div>

  <div class="form-group mb-3">
    <input type="text" v-model="smsCode" class="form-control" placeholder="SMS Code">
    <div class="alert alert-danger" v-for="error in smsCodeValidate.$errors">
      {{ error.$message }}
    </div>
  </div>

  <button type="button" class="btn btn-primary mx-3" @click="firstButtonControl">Phone Check</button>
  <button type="button" class="btn btn-info" @click="secondButtonControl">SMS Code Check</button>

</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";
import store from "../store";

const telNo = ref("5384000042");

const smsCode = ref("123456");

const telNoRules = computed(() => ({
  telNo: {
    required: helpers.withMessage(
        "Telefon Numaranız zorunlu bir alandır.",
        required
    ),
    minlength: helpers.withMessage(
        "Telefon Numaranız 10 haneli olmalıdır.",
        minLength(10)
    ),
    maxlength: helpers.withMessage(
        "Telefon Numaranız 10 haneli olmalıdır.",
        maxLength(10)
    ),
  },
}));

const smsCodeRules = computed(() => ({
  smsCode: {
    required: helpers.withMessage(
        "SMS Kodu zorunlu bir alandır.",
        required
    ),
    minlength: helpers.withMessage(
        "SMS Kodu 6 haneli olmalıdır.",
        minLength(6)
    ),
    maxlength: helpers.withMessage(
        "SMS Kodu 6 haneli olmalıdır.",
        maxLength(6)
    ),
  },
}));

const smsCodeValidate = useVuelidate(smsCodeRules, { smsCode });
const telNoValidate = useVuelidate(telNoRules, { telNo });

const firstButtonControl = async () => {
  const isValid = await telNoValidate.value.$validate();
  console.log(`Phone Check. ${isValid}`)
};

const secondButtonControl = async () => {
  const isValid = await smsCodeValidate.value.$validate();
  console.log(`SMS Code Check. ${isValid}`)
};

</script>
<style scoped></style>