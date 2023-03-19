<template>
  <BannerVue :title="biofuels.title" />
  <NuxtLayout>
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
    <KumearVue />
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Biofuels from "/assets/general-industries/biofuels.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Biofuels",
  components: {
    BannerVue,
    KumearVue,
  },
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