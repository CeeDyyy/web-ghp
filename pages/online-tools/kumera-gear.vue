<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="
        d-flex
        flex-column
        fill-height
        justify-center
        align-center
        text-white
      "
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ kumeraGear.title }}</h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <!-- ABOUT -->
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ kumeraGear.kumera }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-16"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <v-row>
          <v-col cols="12" sm="6" class="d-inline align-center">
            <div class="mb-4 text-center">
              {{ kumeraGear.content }}
            </div>
            <br />
            <div class="mb-4 text-center">
              {{ kumeraGear.program }} <a href="https://www.power-plaza.com/KumeraPowerPlaza/Default.aspx" target="_blank">{{ kumeraGear.link }}</a>
            </div>
          </v-col>
          <v-col cols="12" sm="6" class="d-flex justify-center">
            <img
              src="https://www.upkasia.com/wp-content/uploads/2015/05/75.jpg"
              width="200"
            />
            <img
              src="https://www.upkasia.com/wp-content/uploads/2015/05/56-300x250.jpg"
              width="200"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import KumeraGear from "/assets/online-tools/kumera-gear.json";
import { useLanguagesStore } from "../stores/languages";
export default {
  data() {
    return {
      kumeraGear: KumeraGear.EN,
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
        this.kumeraGear = KumeraGear.EN;
      } else {
        this.kumeraGear = KumeraGear.TH;
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