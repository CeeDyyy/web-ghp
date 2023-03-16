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
import Loading from "/assets/knowledge-center/picture-library/sulzer/loading.json";
import AgitatorsDynamicMixers from "/assets/knowledge-center/picture-library/sulzer/agitators-dynamic-mixers.json";
import TowerManagementSystems from "/assets/knowledge-center/picture-library/sulzer/tower-management-systems.json";
import CompressorsAndAeration from "/assets/knowledge-center/picture-library/sulzer/compressors-and-aeration.json";
import MediumConsistencyProducts from "/assets/knowledge-center/picture-library/sulzer/medium-consistency-products.json";
import SubmersibleMixers from "/assets/knowledge-center/picture-library/sulzer/submersible-mixers.json";
import PumpAndLiftingStationAccessories from "/assets/knowledge-center/picture-library/sulzer/pump-and-lifting-station-accessories.json";
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
    if (this.$route.params.item == "agitators-dynamic-mixers") {
      this.info = AgitatorsDynamicMixers.EN;
      this.Data = AgitatorsDynamicMixers;
    }
    if (this.$route.params.item == "tower-management-systems") {
      this.info = TowerManagementSystems.EN;
      this.Data = TowerManagementSystems;
    }
    if (this.$route.params.item == "compressors-and-aeration") {
      this.info = CompressorsAndAeration.EN;
      this.Data = CompressorsAndAeration;
    }
    if (this.$route.params.item == "medium-consistency-products") {
      this.info = MediumConsistencyProducts.EN;
      this.Data = MediumConsistencyProducts;
    }
    if (this.$route.params.item == "submersible-mixers") {
      this.info = SubmersibleMixers.EN;
      this.Data = SubmersibleMixers;
    }
    if (this.$route.params.item == "pump-and-lifting-station-accessories") {
      this.info = PumpAndLiftingStationAccessories.EN;
      this.Data = PumpAndLiftingStationAccessories;
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