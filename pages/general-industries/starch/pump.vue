<template>
  <BannerVue :title="starch.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ starch.starch }}
    </h1>
    <v-divider class="mx-auto my-2" width="5%" thickness="2.5px" color="grey" />
    <h2 class="d-flex justify-center text-h6 font-weight-thin mb-16">
      {{ starch.substarch }}
    </h2>
    <div>{{ starch.content }}</div>

    <ul class="my-8">
      <li>
        {{ starch.firstsolution[0] }}
        <a
          href="https://www.upkasia.com/en/knowledge-center/sulzer/sulzer-dynamic-seal/"
          target="_blank"
          >{{ starch.firstsolution[1] }}</a
        >
        {{ starch.firstsolution[2] }}
      </li>
      <li class="my-2">
        {{ starch.secondsolution[0] }}
        <a
          href="https://www.upkasia.com/en/knowledge-center/sulzer/sulzer-opem-impeller/"
          target="_blank"
          >{{ starch.secondsolution[1] }}</a
        >
      </li>
      <li>
        {{ starch.thirdsolution }}
      </li>
    </ul>
    <div class="mb-8">{{ starch.conclusion }}</div>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import Starch from "/assets/general-industries/starch/starch-pump.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "StarchPump",
  components: {
    BannerVue,
  },
  data() {
    return {
      starch: Starch.EN,
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
        this.starch = Starch.EN;
      } else {
        this.starch = Starch.TH;
      }
    },
  },
};
</script>