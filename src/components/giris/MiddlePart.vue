<template>
  <div class="middlePartComponent">
    <div class="container">
      <form class="welcomePart">
        <div class="hosgeldiniz">Hoşgeldiniz</div>
        <div class="giris">Giriş Yapın</div>
        <div class="telContainer d-flex align-items-start">
          <input v-model="countryCode" type="text" class="countryCode" />
          <div class="telefonNoContainer">
            <input
              v-model="telNo"
              placeholder="Telefon Numaranız"
              type="number"
              class="telNo"
              :class="{ 'is-invalid':telNoValidate?.$errors.length}"
            />
            <div
              v-for="error in telNoValidate.$errors"
              :key="error.$uid"
              class="invalid-feedback"
            >
              {{ error.$message }}
            </div>
          </div>
        </div>
        <input
          v-if="state.userTelNoCorrect"
          placeholder="Sms Kodunu Giriniz"
          type="text"
          class="input"
          :class="{ 'is-invalid':smsCodeValidate?.$errors.length}"
          v-model="smsCode"
        />
        <div
          v-for="error in smsCodeValidate.$errors"
          :key="error.$uid"
          class="invalid-feedback"
        >
          {{ error.$message }}
        </div>
        <div v-if="state.accountBelongsToUser" class="sifrePart">
          <div class="sifreContainer">
            <input
              placeholder="Şifreniz"
              type="password"
              class="sifre"
              :class="{ 'is-invalid':passwordValidate?.$errors.length}"
              v-model="password"
            />
            <div
                v-for="error in passwordValidate.$errors"
                :key="error.$uid"
                class="invalid-feedback"
            >
              {{ error.$message }}
            </div>
          </div>
          <div class="loginActions">
            <div class="checkboxContainer">
              <div
                v-bind:class="{ checked: state.isChecked }"
                @click="handleCheck"
                class="unChecked"
              >
                <img
                  src="../../assets/img/giris/checkImg.svg"
                  alt=""
                  class="checkboxImg"
                />
              </div>
              <div @click="handleCheck" class="checkboxPara">Beni Hatırla</div>
            </div>
            <div class="forgotContainer">
              <img
                src="../../assets/img/giris/flash-circle-1.svg"
                alt=""
                class="forgotLogo"
              />
              <div class="forgotPara">Şifremi Unuttum</div>
            </div>
          </div>
        </div>
        <!-- first button -->
        <!-- show this button only if the user tel no is NOT correct -->
        <button
          v-if="!state.userTelNoCorrect"
          @click="firstButtonControl"
          class="tamamButton"
        >
          Tamam
        </button>
        <!-- second button -->
        <!-- show this button once the user's tel no is correct -->
        <button
          v-if="state.userTelNoCorrect"
          @click="secondButtonControl"
          class="tamamButton"
        >
          Tamam
        </button>
      </form>
      <div class="bulutPart">
        <div class="orta-bulut">
          <div class="imageGroup">
            <Carousel />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body modalItemsContainer">
            <!-- <img src="" alt="" class="modalImage"> -->
            <div class="modalTitle">Bu Kullanıcı hesabı size mi ait?</div>
            <div class="modalText">
              Girmiş olduğunuz {{ getUserData?.mobileNumber }} telefon numarası
              {{ getUserData?.givenName + " " + getUserData?.familyName }} adına
              kayıtlıdır
            </div>
            <button
              class="positiveBtn"
              data-bs-dismiss="modal"
              @click="confirmaccountBelongsToUser"
            >
              <div class="modalButtonText">Evet, bu hesap bana ait</div>
            </button>
            <button
              data-bs-dismiss="modal"
              @click="accountDoesNotBelongToUser"
              class="negativeBtn"
            >
              <div class="modalButtonText">Hayır, hesap bana ait değil</div>
            </button>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="staticBackdrop2"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdrop2Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body modalItemsContainer">
            <!-- <img src="" alt="" class="modalImage"> -->
            <div class="modalText">
              {{ getUserData?.mobileNumber }} telefon numarası ile ilişkilendilirmiş diğer profiller iptal edilecektir.
            </div>
            <div class="modalTitle">Devam etmek istiyor musunuz?</div>
            <button
              class="positiveBtn"
              data-bs-dismiss="modal"
              @click="accountCancelAction"
            >
              <div class="modalButtonText">Evet</div>
            </button>
            <button
              data-bs-dismiss="modal"
              @click="accountContinueAction"
              class="negativeBtn"
            >
              <div class="modalButtonText">Vazgeç</div>
            </button>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from "sweetalert2/dist/sweetalert2.js";
import Carousel from "./Carousel.vue";
import store from "../../store";
import { computed, onMounted, reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers
} from "@vuelidate/validators";
import { useRouter, useRoute } from "vue-router";
import { Modal } from 'bootstrap';


const router = useRouter();
const route = useRoute();

const state = reactive({
  isActive: false,
  isChecked: false,
  accountBelongsToUser: false,
  userTelNoCorrect: false,
  loginAction: false,
});

const telNo = ref("");

const smsCode = ref("");

const password = ref("");

const countryCode = ref("+90");

const handleCheck = () => {
  state.isChecked = !state.isChecked;
};

const showError = () => {
  state.isActive = true;
};

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
    required: helpers.withMessage("SMS Kodu zorunlu bir alandır.", required),
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

const passwordRules = computed(() => ({
  password: {
    required: helpers.withMessage("Şifreniz zorunlu bir alandır.", required),
    minlength: helpers.withMessage(
        "Şifre 6 haneli olmalıdır.",
        minLength(6)
    ),
    maxlength: helpers.withMessage(
        "Şifre 6 haneli olmalıdır.",
        maxLength(6)
    ),
  },
}));

const telNoValidate = useVuelidate(telNoRules,{ telNo });
const smsCodeValidate = useVuelidate(smsCodeRules,{ smsCode });
const passwordValidate = useVuelidate(passwordRules,{ password });

const firstButtonControl = async () => {
  const isValid = await telNoValidate.value.$validate();

  if (!isValid) return;

  await store.dispatch("auth/phoneNotify", countryCode.value + telNo.value);
  state.userTelNoCorrect = true;
};

let myModal = null,
    myModal2 = null;

const secondButtonControl = async () => {

  if (state.accountBelongsToUser) {

    const isValidPhone = await telNoValidate.value.$validate();
    const isValidSmsCode = await smsCodeValidate.value.$validate();
    const isValidPassword = await passwordValidate.value.$validate();

    if (!isValidPhone || !isValidSmsCode || !isValidPassword) return;

    await store
      .dispatch("auth/loginAction", password.value)
      .then((res) => {
        store.commit("auth/SET_TOKEN", {
          token: res.data.access_token,
          expire: res.data.expires_in,
        });

        store.commit("auth/SET_REFRESH_TOKEN", res.data.refresh_token);

        if (state.isChecked)
          localStorage.setItem("refreshToken", res.data.refresh_token);

        router.push("anasayfa");
      })
      .catch((error) => {
        if (error.response) {
          new Swal({
            icon: "error",
            title: error.response.data.error_description,
            showConfirmButton: false,
            timer: 2000,
          });
        }
        console.log(error.response);
      });
  } else {
    const isValidPhone = await telNoValidate.value.$validate();
    const isValidSmsCode = await smsCodeValidate.value.$validate();

    if (!isValidPhone || !isValidSmsCode) return;

    store.commit('auth/SET_NOTIFICATION_CODE', smsCode.value)

    await store
      .dispatch("auth/phoneVerify", smsCode.value)
      .then((res) => {
        if (res.data.profileId == null) {
          router.push("kayit");
        } else {
          store.commit("auth/SET_NOTIFICATION_USER_DATA", res.data);
          myModal.show()
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const confirmaccountBelongsToUser = () => {
  store.commit(
    "auth/SET_PROFILE_ID",
    store.getters["auth/_notification_user_data"]?.profileId
  );
  localStorage.setItem(
    "profileId",
    store.getters["auth/_notification_user_data"]?.profileId
  );
  state.accountBelongsToUser = true;
};

const accountDoesNotBelongToUser = () => {
  myModal.hide()
  myModal2.show()
};

const accountContinueAction = () => {
  myModal.hide()
  state.accountBelongsToUser = true
}
const accountCancelAction = async () => {

  await store.dispatch('auth/deactivate', smsCode.value).then(res => {
    if (res.data.data === true)
      router.push({ name: "Kayit" });
  }).catch(err => console.log(err.response))

}

const getUserData = computed(
  () => store.getters["auth/_notification_user_data"]
);

onMounted(() => {
  telNo.value = localStorage.getItem("telNo");
  password.value = localStorage.getItem("password");
  myModal = new Modal(document.getElementById('staticBackdrop'), {
    keyboard: true
  })

  myModal2 = new Modal(document.getElementById('staticBackdrop2'), {
    keyboard: true
  })
});
</script>

<style scoped lang="scss">
//flex center mixin
@mixin flexCenter($direction) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}
.middlePartComponent {
  width: 100%;
  height: 100%;
  // border: 1px solid red;
  @include flexCenter(row);
  margin-bottom: 50px;
}
.container {
  width: 65%;
  height: auto;
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.welcomePart {
  // position: absolute;
  // left: 250px;
  // top: 250px;
  @include flexCenter(column);
  width: 468px;
  height: 100%;
  // border: 1px solid black;
  padding-top: 130px;
}
.hosgeldiniz {
  width: 121px;
  height: 29px;
  /* baslik3 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 130%;
  /* identical to box height, or 29px */
  text-align: center;
  /* Primary */
  color: #3c4e69;
  margin-bottom: 7px;
}
.giris {
  width: 178px;
  height: 47px;
  /* baslik1 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 130%;
  /* identical to box height, or 47px */
  text-align: center;
  letter-spacing: -0.01em;
  /* Secondary */
  color: #32a5df;
  margin-bottom: 35px;
}
.telContainer {
  @include flexCenter(row);
  width: auto;
  // height: 93px !important;
}
.telefonNoContainer {
  margin-bottom: 9px;
}
.countryCode {
  width: 100%;
  height: 60px;
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
  margin-right: 18px;
  /* form-baslik */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
  text-align: center;
  margin-bottom: 33px;
}
.telNo {
  width: 341px;
  height: 60px;
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
  /* Telefon Numaranız */
  /* form-baslik */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */
  letter-spacing: -0.01em;
  /* Gri */
  color: #818b9a;
  padding-left: 15px;
  margin-bottom: 0;
}
.input {
  width: 468px;
  height: 60px;
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
  padding: 0;
  padding-left: 15px;

  /* form-baslik */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: -0.01em;

  /* Gri */

  color: #818b9a;
  margin-bottom: 25px;
}
.sifreContainer {
  width: 468px;
}

.sifre {
  width: 100%;
  height: 60px;
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  border: none;
  padding: 0;
  padding-left: 15px;

  /* form-baslik */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: -0.01em;

  /* Gri */

  color: #818b9a;
}
.loginActions {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  //took this part from w3schools
  //link=> https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
}
.checkboxContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // border: 2px solid black;
  width: auto;
  margin-left: 10px;
}
.unChecked {
  height: 20.166667938232422px;
  width: 20.166667938232422px;
  // border: 2px solid black;
  border-radius: 50%;
  background: white;
  margin-right: 7px;
}
.checked {
  background: #32a5df;
}
.checkboxPara {
  /* Beni Hatırla */
  width: 79px;
  height: 21px;
  /* text3 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */
  letter-spacing: -0.01em;
  /* Primary */
  color: #3c4e69;
  // border: 2px solid black;
}
//forgot part starts
.forgotContainer {
  width: 100%;
  height: auto;
  // margin-top: 5px;
  margin-right: 10px;
  // border: 1px solid red;
  justify-content: flex-end;
  // border: 1px solid black;
  display: flex;
  flex-direction: row;
}
.forgotLogo {
  width: 22px;
  height: 22px;
  margin-right: 8.3px;
}
.forgotPara {
  width: auto;
  height: 21px;
  /* text3 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  /* identical to box height, or 21px */
  letter-spacing: -0.01em;
  /* Primary */
  color: #3c4e69;
  // border: 1px solid black;
}

//tamam button starts

.tamamButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 11px;
  width: 468px;
  height: 50px;
  /* Turuncu */
  background: #ff8038;
  border-radius: 6px;
  /* buton-text-orta */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 110%;
  color: white;
  border: none;
}
.errorMessage {
  // border: 1px solid red;
  // change opacity to 0% to hide the element without changing the layout
  opacity: 0;
  width: 239px;
  height: 16px;
  /* text05 */
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */
  /* Kirmizi */
  color: #ea5455;
  margin-left: 10px;
}
.active {
  opacity: 1;
}
//bulut part starts here
.bulutPart {
  // @include flexCenter(column);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 42px;
  // border: 1px solid black;
  width: 800px;
  height: 600px;
  // border: 1px solid red;
}
.orta-bulut {
  width: 585px;
  height: 211px;
  // border: 1px solid gold;
  background: url("../../assets/img/giris/orta-bulut.svg");
  // background: black;
  @include flexCenter(column);
}
.imageGroup {
  width: 100%;
  height: auto;
  //what's this overflow visible?
  // overflow: visible;
  margin-top: 30rem;
  // margin-bottom: 50px;
}
.checkboxImg {
  width: 15px;
  height: 15px;
  position: relative;
  left: 2.3px;
  top: 2px;
}
.modal-content {
  width: 470px;
  height: 571px;

  background: #e9f3f9 !important;
  border-radius: 16px;
}
.triggerModal {
  display: none;
}
.modalItemsContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modalTitle {
  width: 308px;
  height: 26px;

  /* baslik */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  text-align: center;
  letter-spacing: -0.01em;

  /* Primary */

  color: #3c4e69;
  margin-bottom: 14px;
}
.modalText {
  width: 295px;
  height: 42px;

  /* text02 */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 140%;
  /* or 21px */

  text-align: center;

  /* Primary */

  color: #3c4e69;
  margin-bottom: 60px;
}
.positiveBtn,
.negativeBtn {
  width: 341px;
  height: 50px;
  border: none;
  border-radius: 6px;
  margin-bottom: 20px;
}
.positiveBtn {
  background: #ff7c32;
}
.negativeBtn {
  background: #2e95df;
}
.modalButtonText {
  /* buton-text */

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 130%;
  /* identical to box height, or 21px */

  text-align: center;

  /* Beyaz */

  color: #ffffff;
}
// tablet starts here
@media only screen and (max-width: 1200px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .bulutPart {
    width: 100vw;
    // height: auto;
    // border: 1px solid gold;
    background: #e9f3f9;
    // padding-top: 30rem;
    pointer-events: none;
  }
  .orta-bulut {
    // border: 1px solid black;
  }
  .welcomePart {
    padding-top: 3rem;
  }
}
@media only screen and (max-width: 550px) {
  .welcomePart {
    // padding-top: 3rem;
    width: 100%;
  }
  .loginActions {
    @include flexCenter(column);
    width: 100%;
  }
  .checkboxContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 170px;
    margin: 0 0 5px 3.5px;
  }
  .unChecked {
    height: 20.166667938232422px;
    width: 20.166667938232422px;
    // border: 2px solid black;
    border-radius: 50%;
    background: white;
    margin-right: 7px;
  }
  .checked {
    background: #32a5df;
  }
  .checkboxPara {
    /* Beni Hatırla */
    width: 79px;
    height: 21px;
    /* text3 */
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 140%;
    /* identical to box height, or 21px */
    letter-spacing: -0.01em;
    /* Primary */
    color: #3c4e69;
  }
  .forgotContainer {
    width: 170px;
    display: flex;
    justify-content: flex-start;
    margin: 0;
  }
  .forgotPara {
    width: auto;
  }
  .telContainer {
    // border: 1px solid black;
    width: auto;
  }
  .countryCode {
    width: 80px;
    margin-bottom: 24px;
  }
  .telefonNoContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 200px;
  }
  .telNo {
    width: 100%;
  }
  .input {
    width: 300px;
  }
  .sifreContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
  }
  .sifre {
    width: 100%;
  }
  .tamamButton {
    width: 300px;
  }
}
</style>
