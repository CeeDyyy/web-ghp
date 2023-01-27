<template>
  <section>
    <v-parallax
      class="d-flex align-center justify-center text-center mt-n14"
      src="https://images.unsplash.com/photo-1547895749-888a559fc2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
      height="100vh"
    >
      <v-container class="text-center">
        <v-responsive class="mx-auto" width="500">
          <h1 class="text-h2 font-weight-bold text-white">
            {{ landing.title }}
            <br />UPK ASIA
          </h1>

          <p class="mt-4 mb-10 text-white">{{ landing.content }}</p>

          <v-btn elevation="2" class="bg-yellow-darken-1 text-green-darken-4 font-weight-bold">
            {{ landing.button }}
          </v-btn>
        </v-responsive>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
import Landing from "../assets/landing.json";
import { useLanguagesStore } from "../pages/stores/languages";

export default {
  data() {
    return {
      landing: Landing.EN,
      language: useLanguagesStore(),
    };
  },
  computed: {
    getLng() {
      return this.language.$state.language;
    }
  },
  watch: {
    getLng(newValue) {
      if(newValue == "EN"){
        this.landing = Landing.EN
      } else {
        this.landing = Landing.TH
      }
    },
  },
};
</script>