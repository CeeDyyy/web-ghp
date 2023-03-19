<template>
  <BannerVue :title="liquidProperty.heading" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ liquidProperty.title }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-4"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <p class="text-center my-4">{{ liquidProperty.content[0] }}</p>
    <a
      class="d-flex justify-center my-4"
      href="https://www.cetinerengineering.com/Properties.htm"
      target="_blank"
    >
      {{ liquidProperty.content[1] }}
    </a>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import LiquidProperty from "/assets/knowledge-center/liquid-property.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "LiquidProperty",
  components: {
    BannerVue,
  },
  data() {
    return {
      liquidProperty: LiquidProperty.EN,
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
        this.liquidProperty = LiquidProperty.EN;
      } else {
        this.liquidProperty = LiquidProperty.TH;
      }
    },
  },
};
</script>