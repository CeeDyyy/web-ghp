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
            WE ARE<br />UPK ASIA
          </h1>

          <p class="mt-4 mb-10 text-white">
            We are specialized in processes equipment for serving in General
            industries. We are engineering background do supply better products
            solution which reliability and quality to customers in Thailand, Lao
            and Cambodia.
          </p>
          <v-btn
            elevation="2"
            class="bg-yellow-darken-1 text-green-darken-4 font-weight-bold"
            >LEARN MORE ABOUT US</v-btn
          >
        </v-responsive>
      </v-container>
    </v-parallax>
  </section>
</template>

<script>
import Landing from "../assets/landing.json";

export default {
  data() {
    return {
      landing: Landing,
    };
  },
};
</script>