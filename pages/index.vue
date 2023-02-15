<template>
  <LandingVue />
  <v-container>
    <Services />
    <div class="mx-lg-16 px-lg-16">
      <GeneralIndustriesVue />
    </div>
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