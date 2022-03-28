<template>
  <div class="left d-flex flex-column">
    <span class="title">Bölüm Seçin</span>
    <div
      class="whiteBox searchContainer d-flex flex-row justify-content-between align-items-center"
    >
      <input type="text" class="searchBox" placeholder="Bölüm Arayın" />
      <img :src="logo" alt="" />
    </div>
    <div v-if="showChoices">
      <LeftBoxes
        v-for="(item, key) in box"
        :key="key"
        :title="item.title"
        :para="item.para"
        @getTitle="handleChildData(item.title)"
      />
    </div>
    <!-- doktor seçim -->
    <div v-if="showDoctors">
      <Doctors
        v-for="(item, key) in doktorBox"
        :key="key"
        :name="item.name"
        :img="item.img"
        @getTitle="handleChildData(item.name)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import LeftBoxes from "./LeftBoxes.vue";
import Doctors from "./Doctors.vue";
import logo from "../../../assets/img/medical-records/search.svg";
import doktorImg from "../../../assets/img/randevuAkis/doktor.svg";
const props = defineProps({
  title: { required: true, type: String },
  para: { required: true, type: String },
  img: { required: true, type: String },
  name: { required: true, type: String },
});

//show/hide shoices
let showChoices = ref(true);
let showDoctors = ref(false);

//this is the function in the parent component
//here we define which function in the parent component we want to emit to
const emit = defineEmits(["insertProp"]);
//this function emits to the parent component
//this function shall be called in here
const handleProps = () => {
  emit("insertProp", chosenItem.value);
};
//here I take the value I get from the click event (coming from the child), and write it into chosenItem variable
let chosenItem = ref("");
const handleChildData = (value) => {
  console.log(value);
  chosenItem.value = value;
  console.log(chosenItem.value);
  //calling the emitting function
  handleProps();
  showChoices.value = false;
  showDoctors.value = true;
};
const box = ref([
  {
    title: "Ağrı Tedavisi (Algoloji)",
  },
  {
    title: "Endokrinoloji ve Metabolizma Hastalıkları",
    para: "Sadece Gebze'de bulunuyor",
  },
  {
    title: "Endokrinoloji ve Metabolizma Hastalıkları",
  },
  {
    title: "Beslenme ve Diyet",
    para: "Sadece Gebze'de bulunuyor",
  },
  { title: "Endokrinoloji ve Metabolizma Hastalıkları" },
  {
    title: "Endokrinoloji ve Metabolizma Hastalıkları",
    para: "Sadece GEbze'de bulunuyor",
  },
  { title: "Endokrinoloji ve Metabolizma Hastalıkları" },
]);

const doktorBox = ref([
  {
    img: doktorImg,
    name: "Prof. Dr. Mehmet Balkan",
  },
  {
    img: doktorImg,
    name: "Prof. Dr. Mehmet Balkan",
  },
  {
    img: doktorImg,
    name: "Prof. Dr. Mehmet Balkan",
  },
  {
    img: doktorImg,
    name: "Prof. Dr. Mehmet Balkan",
  },
  {
    img: doktorImg,
    name: "Prof. Dr. Mehmet Balkan",
  },
  {
    img: doktorImg,
    name: "Prof. Dr. Mehmet Balkan",
  },
]);
</script>

<style scoped lang="scss">
.left {
}
.title {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 130%;
  /* identical to box height, or 22px */
  letter-spacing: -0.01em;
  /* Primary */
  color: #3c4e69;
  margin-bottom: 22px;
}
.whiteBox {
  background: #ffffff;
  /* Form Shadow */
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.03);
  border-radius: 6px;
  height: 48px;
  padding-left: 15px;
  padding-right: 14px;
  margin-bottom: 35px;
}
.searchBox {
  height: 48px !important;
  width: 90%;
  border: none;
}
img {
}
</style>
