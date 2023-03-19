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
    <p class="my-4">
      {{ info.content }}
    </p>
    <div class="d-flex justify-center">
      <img :src="info.img" width="600" cover :alt="info.title" />
    </div>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import LubeOilSystemsApi614 from "/assets/knowledge-center/picture-library/sulzer/lube-oil-systems-api-614.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "LubeOilSystemsAPI614",
  components: {
    BannerVue,
  },
  data() {
    return {
      info: LubeOilSystemsApi614.EN,
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
        this.info = LubeOilSystemsApi614.EN;
      } else {
        this.info = LubeOilSystemsApi614.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.info = LubeOilSystemsApi614.EN;
    }
    if (this.$route.params.language == "th") {
      this.info = LubeOilSystemsApi614.TH;
    }
  }
};
</script>