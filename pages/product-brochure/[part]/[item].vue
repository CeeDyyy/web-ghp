<template>
  <BannerVue :title="info.title" />
  <NuxtLayout>
    <div class="d-flex justify-center mb-4">
      <v-img
        v-if="info.logo !== ''"
        :src="info.logo"
        height="100"
        :alt="info.title"
      />
      <h1 v-else class="text-h4 font-weight-thin">{{ info.title }}</h1>
    </div>
    <v-row class="d-flex justify-space-around">
      <v-col cols="6" sm="3" v-for="(item, index) in info.list" :key="index">
        <v-hover>
          <template v-slot:default="{ isHovering, props }">
            <a :href="item.url" target="_blank">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 12 : 2"
                class="mx-auto"
                max-width="344"
              >
                <v-img :src="item.img" cover :alt="item.title"></v-img>

                <v-card-text class="text-center">
                  {{ item.title }}
                </v-card-text>
              </v-card>
            </a>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import Loading from "/assets/product-brochure/loading.json";
import Sulzer from "/assets/product-brochure/rotating-equipments/sulzer.json";
import Kumera from "/assets/product-brochure/rotating-equipments/kumera.json";
import Haier from "/assets/product-brochure/rotating-equipments/haier.json";
import Steinert from "/assets/product-brochure/rotating-equipments/steinert.json";
import Kawasaki from "/assets/product-brochure/rotating-equipments/kawasaki.json";
import Tasaki from "/assets/product-brochure/rotating-equipments/tasaki.json";
import Couplings from "/assets/product-brochure/spare-parts-consumable-parts/couplings.json";
import Trislot from "/assets/product-brochure/spare-parts-consumable-parts/trislot.json";
import Loctite from "/assets/product-brochure/spare-parts-consumable-parts/loctite.json";
import PrRollsIndonesia from "/assets/product-brochure/services-overhaul/pr-rolls-indonesia.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "SulzerXTRSubmersibleAerator",
  components: {
    BannerVue,
  },
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
    if (
      this.$route.params.part == "rotating-equipments" &&
      this.$route.params.item == "sulzer"
    ) {
      this.info = Sulzer.EN;
      this.Data = Sulzer;
    }
    if (
      this.$route.params.part == "rotating-equipments" &&
      this.$route.params.item == "kumera"
    ) {
      this.info = Kumera.EN;
      this.Data = Kumera;
    }
    if (
      this.$route.params.part == "rotating-equipments" &&
      this.$route.params.item == "haier"
    ) {
      this.info = Haier.EN;
      this.Data = Haier;
    }
    if (
      this.$route.params.part == "rotating-equipments" &&
      this.$route.params.item == "steinert"
    ) {
      this.info = Steinert.EN;
      this.Data = Steinert;
    }
    if (
      this.$route.params.part == "rotating-equipments" &&
      this.$route.params.item == "kawasaki"
    ) {
      this.info = Kawasaki.EN;
      this.Data = Kawasaki;
    }
    if (
      this.$route.params.part == "rotating-equipments" &&
      this.$route.params.item == "tasaki"
    ) {
      this.info = Tasaki.EN;
      this.Data = Tasaki;
    }
    if (
      this.$route.params.part == "spare-parts-consumable-parts" &&
      this.$route.params.item == "couplings"
    ) {
      this.info = Couplings.EN;
      this.Data = Couplings;
    }
    if (
      this.$route.params.part == "spare-parts-consumable-parts" &&
      this.$route.params.item == "trislot"
    ) {
      this.info = Trislot.EN;
      this.Data = Trislot;
    }
    if (
      this.$route.params.part == "spare-parts-consumable-parts" &&
      this.$route.params.item == "loctite"
    ) {
      this.info = Loctite.EN;
      this.Data = Loctite;
    }
    if (
      this.$route.params.part == "services-overhaul" &&
      this.$route.params.item == "pr-rolls-indonesia"
    ) {
      this.info = PrRollsIndonesia.EN;
      this.Data = PrRollsIndonesia;
    }
  },
};
</script>