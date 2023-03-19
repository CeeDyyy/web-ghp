<template>
  <BannerVue :title="info.title" />
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
    <v-row>
      <v-col cols="12" lg="2"> </v-col>
      <v-col cols="12" lg="8">
        <p class="mb-4">{{ info.content }}</p>
        <div class="mb-4">
          <ul>
            <li v-for="(item, index) in info.list" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" lg="2"> </v-col>
    </v-row>
    <div class="d-flex justify-center mb-4">
      <iframe
        width="840"
        height="472.5"
        src="https://www.youtube.com/embed/ZEc4XtP5ob0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import SulzerXtrSubmersibleAerator from "/assets/product-brochure/veolia-water-treatment/sulzer-xtr-submersible-aerator.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "SulzerXTRSubmersibleAerator",
  components: {
    BannerVue,
  },
  data() {
    return {
      info: SulzerXtrSubmersibleAerator.EN,
      Data: SulzerXtrSubmersibleAerator,
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
        this.info = this.Data.EN;
      } else {
        this.info = this.Data.TH;
      }
    },
  },
};
</script>