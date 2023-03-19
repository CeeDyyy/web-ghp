<template>
  <BannerVue :title="sugar.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ sugar.sugar }}
    </h1>
    <v-divider class="mx-auto my-2" width="5%" thickness="2.5px" color="grey" />
    <h2 class="d-flex justify-center text-h6 font-weight-thin mb-16">
      {{ sugar.subsugar }}
    </h2>
    <div class="mb-8">{{ sugar.content }}</div>
    <div class="mb-4">{{ sugar.headsolution }}</div>
    <ul>
      <li>{{ sugar.firstsolution }}</li>
      <li class="my-2">
        {{ sugar.secondsolution[0] }}
        <a
          href="https://www.upkasia.com/th/%e0%b8%aa%e0%b8%b2%e0%b8%a3%e0%b8%b0%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%a3%e0%b8%b9%e0%b9%89/sulzer/sulzer-open-impeller/"
          target="_blank"
          >{{ sugar.secondsolution[1] }}</a
        >
        {{ sugar.secondsolution[2] }}
      </li>
      <li>
        {{ sugar.thirdsolution[0] }}
        <a
          href="https://www.upkasia.com/th/%e0%b8%aa%e0%b8%b2%e0%b8%a3%e0%b8%b0%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%a3%e0%b8%b9%e0%b9%89/sulzer/2727-2/"
          target="_blank"
          >{{ sugar.thirdsolution[1] }}</a
        >
      </li>
    </ul>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import Sugar from "/assets/general-industries/sugar/sugar-pump.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "SugarPump",
  components: {
    BannerVue,
  },
  data() {
    return {
      sugar: Sugar.EN,
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
        this.sugar = Sugar.EN;
      } else {
        this.sugar = Sugar.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.sugar = Sugar.EN;
    }
    if (this.$route.params.language == "th") {
      this.sugar = Sugar.TH;
    }
  }
};
</script>