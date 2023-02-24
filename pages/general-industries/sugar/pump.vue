<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ sugar.title }}</h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ sugar.sugar }}
        </h1>
        <v-divider
          class="mx-auto my-2"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <h2 class="d-flex justify-center text-h6 font-weight-thin mb-16">
          {{ sugar.subsugar }}
        </h2>
        <div class="mb-8">{{ sugar.content }}</div>
        <div class="mb-4">{{ sugar.headsolution }}</div>
        <ul>
          <li>{{ sugar.firstsolution }}</li>
          <li class="my-2">
            {{ sugar.secondsolution[0] }}
            <a href="https://www.upkasia.com/th/%e0%b8%aa%e0%b8%b2%e0%b8%a3%e0%b8%b0%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%a3%e0%b8%b9%e0%b9%89/sulzer/sulzer-open-impeller/" target="_blank">{{ sugar.secondsolution[1] }}</a>
            {{ sugar.secondsolution[2] }}
          </li>
          <li>
            {{ sugar.thirdsolution[0] }}
            <a href="https://www.upkasia.com/th/%e0%b8%aa%e0%b8%b2%e0%b8%a3%e0%b8%b0%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%a3%e0%b8%b9%e0%b9%89/sulzer/2727-2/" target="_blank">{{ sugar.thirdsolution[1] }}</a>
          </li>
        </ul>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import Sugar from "/assets/general-industries/sugar/sugar-pump.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      sugar: Sugar.EN,
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
        this.sugar = Sugar.EN;
      } else {
        this.sugar = Sugar.TH;
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