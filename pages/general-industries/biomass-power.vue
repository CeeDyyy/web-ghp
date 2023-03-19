<template>
  <BannerVue :title="biomass.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ biomass.subtitle }}
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
          src="https://images.unsplash.com/photo-1582282352927-04277241ea93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          width="400"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center text-center">
        <div>
          {{ biomass.content }}
        </div>
      </v-col>
      <v-col cols="12" sm="2" class="d-flex align-center">
        <ul>
          <li v-for="(item, i) in biomass.link" :key="i">
            <a :href="item.url" target="_blank">{{ item.text }}</a>
          </li>
        </ul>
      </v-col>
    </v-row>
    <KumearVue />
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Biomass from "/assets/general-industries/biomass-power.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Biomass-Power",
  components: {
    BannerVue,
    KumearVue,
  },
  data() {
    return {
      biomass: Biomass.EN,
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
        this.biomass = Biomass.EN;
      } else {
        this.biomass = Biomass.TH;
      }
    },
  },
};
</script>