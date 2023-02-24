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
          {{ starch.starch }}
        </h1>
        <v-divider
          class="mx-auto my-2"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <h2 class="d-flex justify-center text-h6 font-weight-thin mb-16">
          {{ starch.substarch }}
        </h2>
        <div>{{ starch.content }}</div>
        
        <ul class="my-8">
          <li>
            {{ starch.firstsolution[0] }}
            <a href="https://www.upkasia.com/en/knowledge-center/sulzer/sulzer-dynamic-seal/" target="_blank">{{ starch.firstsolution[1] }}</a>
            {{ starch.firstsolution[2] }}
            </li>
          <li class="my-2">
            {{ starch.secondsolution[0] }}
            <a href="https://www.upkasia.com/en/knowledge-center/sulzer/sulzer-opem-impeller/" target="_blank">{{ starch.secondsolution[1] }}</a>
          </li>
          <li>
            {{ starch.thirdsolution }}
          </li>
        </ul>
        <div class="mb-8">{{ starch.conclusion }}</div>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import Starch from "/assets/general-industries/starch/starch-pump.json";
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