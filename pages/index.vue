<template>
  <LandingVue />
  <v-container>
    <Services />
    <GeneralIndustriesVue>
      <h2 class="d-flex justify-center text-h3 font-weight-medium mt-16 mb-12">
        Involved Industries
      </h2>
    </GeneralIndustriesVue>
  </v-container>
</template>

<script>
import GeneralIndustriesVue from "./general-industries/";
import LandingVue from "../components/landing.vue";
import ServicesVue from "../components/services.vue";

export default {
  name: "Home",
  components: {
    GeneralIndustriesVue,
    LandingVue,
    ServicesVue,
  },
};
</script>

<style scoped>
</style>