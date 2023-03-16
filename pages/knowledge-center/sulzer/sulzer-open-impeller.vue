<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">
        {{ sulzerOpenImpeller.heading }}
      </h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <!-- ABOUT -->
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ sulzerOpenImpeller.title }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-4"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <h3 class="d-flex justify-center text-h6 mb-16 text-center">
          {{ sulzerOpenImpeller.subtitle }}
        </h3>
        <p>
          {{ sulzerOpenImpeller.content[0] }}
          <a
            href="https://www.sulzer.com/-/media/files/products/pumps/single-stage-pumps/brochures/ahlstarendsuctionsinglestage_e10083.ashx?la=en"
            target="_blank"
          >
            {{ sulzerOpenImpeller.content[1] }}
          </a>
          {{ sulzerOpenImpeller.content[2] }}
        </p>
        <div class="d-flex justify-center my-4">
          <img
            src="https://www.upkasia.com/wp-content/uploads/2020/07/impellers.png"
            width="600"
          />
        </div>
        <div class="d-flex justify-center">
          <iframe
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/pi_HEyu3r30"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="my-4">
          {{ sulzerOpenImpeller.contactus[0] }}
          <a href="https://www.upkasia.com/en/contact-us/" target="_blank">
            {{ sulzerOpenImpeller.contactus[1] }}
          </a>
          {{ sulzerOpenImpeller.contactus[2] }}
        </div>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import SulzerOpenImpeller from "/assets/knowledge-center/sulzer/sulzer-open-impeller.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      sulzerOpenImpeller: SulzerOpenImpeller.EN,
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
        this.sulzerOpenImpeller = SulzerOpenImpeller.EN;
      } else {
        this.sulzerOpenImpeller = SulzerOpenImpeller.TH;
      }
    },
  },
};
</script>

<style scoped>
.to-green {
  -webkit-filter: hue-rotate(80deg);
  filter: hue-rotate(80deg);
  height: 200px;
}
#logo {
  height: 200px;
  overflow: hidden;
}
#logo img {
  object-fit: cover;
  width: 100%;
}
</style>