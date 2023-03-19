<template>
  <BannerVue :title="marine.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ marine.subtitle }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-16"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <v-row>
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-img
          src="https://kumera.com/wp-content/uploads/2021/05/Kumera-%E2%80%93-Propulsion-Gearboxes_Marine_Product-features_.png"
          width="400"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center text-center">
        <div>
          {{ marine.content }}
          <br /><br /><br />
          <a href="https://www.kumera.no/products/" target="_blank">
            {{ marine.link }}
          </a>
        </div>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import Marine from "/assets/general-industries/marine-gearboxes-and-drives.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Marine-Gearboxes-and-Drives",
  components: {
    BannerVue,
  },
  data() {
    return {
      marine: Marine.EN,
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
        this.marine = Marine.EN;
      } else {
        this.marine = Marine.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.marine = Marine.EN;
    }
    if (this.$route.params.language == "th") {
      this.marine = Marine.TH;
    }
  }
};
</script>