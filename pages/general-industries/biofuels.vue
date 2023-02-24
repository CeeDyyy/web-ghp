<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ biofuels.title }}</h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ biofuels.subtitle }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-16"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <v-row>
          <v-col cols="12" sm="4" class="d-flex justify-center">
            <v-img
              src="https://cdn.britannica.com/82/179582-138-3162648B/Overview-production-ethanol-biofuel.jpg?w=800&h=450&c=crop"
              width="400"
              :aspect-ratio="3 / 2"
            />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-center text-center">
            <div>
              {{ biofuels.content }}
            </div>
          </v-col>
          <v-col cols="12" sm="2" class="d-flex align-center">
            <ul>
              <li v-for="(item, i) in biofuels.link" :key="i">
                <a :href="item.url" target="_blank">{{ item.text }}</a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import Biofuels from "/assets/general-industries/biofuels.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      biofuels: Biofuels.EN,
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
        this.biofuels = Biofuels.EN;
      } else {
        this.biofuels = Biofuels.TH;
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