<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">
        {{ info.heading }}
      </h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <!-- ABOUT -->
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ info.title }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-4"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <p class="my-4">
          {{ info.content }}
        </p>
        <v-row class="d-flex justify-space-evenly">
          <v-col
            cols="12"
            sm="4"
            v-for="(item, index) in info.list"
            :key="index"
          >
            <a :href="item.url" target="_blank">
              <v-card class="mx-auto" max-width="344">
                <v-img
                  :src="item.img"
                  height="200px"
                  cover
                  :alt="item.title"
                ></v-img>

                <v-card-text class="text-center">{{ item.title }}</v-card-text>
              </v-card>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import Loading from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/loading.json";
import AxiallySplitPumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/axially-split-pumps.json";
import DrainageCenterLinePumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/drainage-center-line-pumps.json";
import DrainagePumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/drainage-pumps.json";
import FirewaterPumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/firewater-pumps.json";
import ProgressingCavityPumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/progressing-cavity-pumps.json";
import RadialSplitPumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/radial-split-pumps.json";
import RingSectionPumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/ring-section-pumps.json";
import SingleStageCentrifugalPumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/single-stage-centrifugal-pumps.json";
import SludgePumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/sludge-pumps.json";
import SlurryPumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/slurry-pumps.json";
import TwoStagePumps from "/assets/knowledge-center/picture-library/sulzer/sulzer-pump/two-stage-pumps.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      info: Loading.EN,
      Data: Loading,
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
        this.info = this.Data.EN;
      } else {
        this.info = this.Data.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.item == "axially-split-pumps") {
      this.info = AxiallySplitPumps.EN;
      this.Data = AxiallySplitPumps;
    }
    if (this.$route.params.item == "drainage-center-line-pumps") {
      this.info = DrainageCenterLinePumps.EN;
      this.Data = DrainageCenterLinePumps;
    }
    if (this.$route.params.item == "drainage-pumps") {
      this.info = DrainagePumps.EN;
      this.Data = DrainagePumps;
    }
    if (this.$route.params.item == "firewater-pumps") {
      this.info = FirewaterPumps.EN;
      this.Data = FirewaterPumps;
    }
    if (this.$route.params.item == "progressing-cavity-pumps") {
      this.info = ProgressingCavityPumps.EN;
      this.Data = ProgressingCavityPumps;
    }
    if (this.$route.params.item == "radial-split-pumps") {
      this.info = RadialSplitPumps.EN;
      this.Data = RadialSplitPumps;
    }
    if (this.$route.params.item == "ring-section-pumps") {
      this.info = RingSectionPumps.EN;
      this.Data = RingSectionPumps;
    }
    if (this.$route.params.item == "single-stage-centrifugal-pumps") {
      this.info = SingleStageCentrifugalPumps.EN;
      this.Data = SingleStageCentrifugalPumps;
    }
    if (this.$route.params.item == "sludge-pumps") {
      this.info = SludgePumps.EN;
      this.Data = SludgePumps;
    }
    if (this.$route.params.item == "slurry-pumps") {
      this.info = SlurryPumps.EN;
      this.Data = SlurryPumps;
    }
    if (this.$route.params.item == "two-stage-pumps") {
      this.info = TwoStagePumps.EN;
      this.Data = TwoStagePumps;
    }
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