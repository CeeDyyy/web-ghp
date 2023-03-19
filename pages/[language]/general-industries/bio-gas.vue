<template>
  <BannerVue :title="biogas.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ biogas.subtitle }}
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
          src="https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          width="400"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center text-center">
        <div>
          {{ biogas.content }}
        </div>
      </v-col>
    </v-row>
    <KumearVue />
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Biogas from "/assets/general-industries/bio-gas.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Bio-Gas",
  components: {
    BannerVue,
    KumearVue,
  },
  data() {
    return {
      biogas: Biogas.EN,
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
        this.biogas = Biogas.EN;
      } else {
        this.biogas = Biogas.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.biogas = Biogas.EN;
    }
    if (this.$route.params.language == "th") {
      this.biogas = Biogas.TH;
    }
  }
};
</script>