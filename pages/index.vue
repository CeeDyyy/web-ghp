<template>
  <LandingVue />
  <v-container>
    <Services />
    <v-row>
      <v-col cols="12" lg="2"> </v-col>

      <v-col cols="12" lg="8">
        <GeneralIndustriesVue />
      </v-col>

      <v-col cols="12" lg="2"> </v-col>
    </v-row>
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