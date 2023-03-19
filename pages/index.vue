<template>
  <LandingVue />
  <v-container>
    <Services />
    <GeneralIndustriesVue />
  </v-container>
</template>

<script>
import GeneralIndustriesVue from "./[language]/general-industries/";
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