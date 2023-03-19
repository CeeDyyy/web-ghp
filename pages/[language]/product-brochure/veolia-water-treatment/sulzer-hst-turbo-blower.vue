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
    <p class="d-flex justify-center mb-4">{{ info.content }}</p>
    <div class="d-flex justify-center mb-4">
      <iframe
        width="840"
        height="472.5"
        src="https://www.youtube.com/embed/yTwV0IQQHhQ"
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
import SulzerHstTurboBlower from "/assets/product-brochure/veolia-water-treatment/sulzer-hst-turbo-blower.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "SulzerXTRSubmersibleAerator",
  components: {
    BannerVue,
  },
  data() {
    return {
      info: SulzerHstTurboBlower.EN,
      Data: SulzerHstTurboBlower,
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
  mounted() {
    if (this.$route.params.language == "en") {
      this.info = Data.EN;
    }
    if (this.$route.params.language == "th") {
      this.info = Data.TH;
    }
  }
};
</script>