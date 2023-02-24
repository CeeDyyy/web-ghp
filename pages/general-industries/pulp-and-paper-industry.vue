<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ pulp.title }}</h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ pulp.subtitle }}
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
              src="https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              width="400"
              :aspect-ratio="3 / 2"
            />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-center text-center">
            <div>
              <h2 class="text-h4 font-weight-thin my-8">
              {{ pulp.pulpheading }}
            </h2>
              {{ pulp.pulpcontent }}
            </div>
          </v-col>
        </v-row>
        <div class="my-4" v-for="(item, i) in pulp.pulpconcontent" :key="i">
          {{ item }}
        </div>
        <h2 class="text-h4 font-weight-thin my-8">
          {{ pulp.paperheading }}
        </h2>
        <div class="my-4">
          {{ pulp.papercontent }}
        </div>
        <h2 class="text-h4 font-weight-thin my-8">
          {{ pulp.completeheading }}
        </h2>
        <div class="my-4" v-for="(item, i) in pulp.completecontent" :key="i">
          {{ item }}
        </div>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import Pulp from "/assets/general-industries/pulp-and-paper-industry.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      pulp: Pulp.EN,
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
        this.pulp = Pulp.EN;
      } else {
        this.pulp = Pulp.TH;
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