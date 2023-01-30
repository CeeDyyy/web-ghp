<template>
  <LandingVue />
  <v-container>
    <Services />
    <GeneralIndustriesVue />
    <h1 ref="bottom">Bottom</h1>
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
  methods: {
    scrollToBottom() {
      this.$refs["bottom"].scrollIntoView({ behavior: "smooth" });
      console.log("asd");
    },
  },
};
</script>

<style scoped>
</style>