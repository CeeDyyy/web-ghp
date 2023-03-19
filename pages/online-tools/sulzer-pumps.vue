<template>
  <BannerVue :title="sulzerPumps.title" />
  <NuxtLayout>
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
      <v-row
        class="mb-10"
        v-for="(subitem, subindex) in item.content"
        :key="subindex"
      >
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
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import SulzerPumps from "/assets/online-tools/sulzer-pumps.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "KumeraGear",
  components: {
    BannerVue,
  },
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