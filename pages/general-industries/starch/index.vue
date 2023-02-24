<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ starch.title }}</h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ starch.subtitle }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-16"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <v-row class="mb-8">
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <v-img
              src="https://starchinfood.eu/wp-content/uploads/sites/10/2022/06/iStock-1310169023.jpg"
              width="400"
              :aspect-ratio="3 / 2"
            />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-center text-center">
            <div>
              {{ starch.fab[0] }}
              <a href="/general-industries/starch/pump">{{ starch.fab[1] }}</a>
              {{ starch.fab[2] }}
            </div>
          </v-col>
        </v-row>
        <div class="my-4" v-for="(item, i) in starch.firstcontent" :key="i">
          {{ item }}
        </div>
        <ol class="mb-10">
          <li class="my-4 ml-6" v-for="(item, i) in starch.ninesteps" :key="i">
            {{ item }}
          </li>
        </ol>
        <div class="my-4" v-for="(item, i) in starch.secondcontent" :key="i">
          {{ item }}
        </div>
        <ol>
          <li class="my-4 ml-6" v-for="(item, i) in starch.eightsteps" :key="i">
            {{ item }}
          </li>
        </ol>
        <div class="d-flex justify-center">
          <img
            src="https://www.upkasia.com/wp-content/uploads/2020/08/cassava2_18-1-1.jpg"
          />
        </div>
        <div class="my-4">
          {{ starch.credit }}
          <a href="https://www.thaitapiocastarch.org/th/information/learning_industry/tapioca_starch_processing" target="_blank">สมาคมแป้งมันสำปะหลังไทย</a>
        </div>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import Starch from "/assets/general-industries/starch/starch.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      starch: Starch.EN,
      language: useLanguagesStore(),
    };
  },
  computed: {
    getLng() {
      return this.language.$state.language;
    },
  },
  watch: {
    getLng(newValue) {
      if (newValue == "EN") {
        this.starch = Starch.EN;
      } else {
        this.starch = Starch.TH;
      }
    },
  },
};
</script>

<style scoped>
.to-green {
  -webkit-filter: hue-rotate(80deg);
  filter: hue-rotate(80deg);
  height: 200px;
}
#logo {
  height: 200px;
  overflow: hidden;
}
#logo img {
  object-fit: cover;
  width: 100%;
}
</style>