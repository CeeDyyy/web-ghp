<template>
  <BannerVue :title="info.heading" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ info.title }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-4"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <h3 class="d-flex justify-center text-h6 mb-16 text-center">
      {{ info.subtitle }}
    </h3>
    <div class="d-flex justify-center">
      <img :src="info.img" width="600" cover :alt="info.title" />
    </div>
    <p class="my-4">
      {{ info.content }}
    </p>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import HighLiftCentrifugalPumpsHphAndHpl from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/high-lift-centrifugal-pumps-hph-and-hpl.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "HighLiftCentrifugalPumpsHPHAndHPL",
  components: {
    BannerVue,
  },
  data() {
    return {
      info: HighLiftCentrifugalPumpsHphAndHpl.EN,
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
        this.info = HighLiftCentrifugalPumpsHphAndHpl.EN;
      } else {
        this.info = HighLiftCentrifugalPumpsHphAndHpl.TH;
      }
    },
  },
};
</script>