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
      <h1 class="text-h4 font-weight-thin mb-4">{{ sulzerPumps.title }}</h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <!-- ABOUT -->
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ sulzerPumps.sulzer }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-16"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <div v-for="(item, index) in sulzerPumps.content" :key="index">
          <h1 class="text-h5 font-weight-thin mb-4">
            {{ item.heading }}
          </h1>
          <v-row class="mb-10" v-for="(subitem, subindex) in item.content" :key="subindex">
            <v-col cols="2" class="d-inline align-center">
              <a :href="subitem.url" target="_blank">
                {{ subitem.heading }}
              </a>
            </v-col>
            <v-col cols="10">
              {{ subitem.detail }}
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import SulzerPumps from "/assets/online-tools/sulzer-pumps.json";
import { useLanguagesStore } from "../stores/languages";
export default {
  data() {
    return {
      sulzerPumps: SulzerPumps.EN,
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
        this.sulzerPumps = SulzerPumps.EN;
      } else {
        this.sulzerPumps = SulzerPumps.TH;
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