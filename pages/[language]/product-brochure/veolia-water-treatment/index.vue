<template>
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h3 font-weight-medium mt-16 mb-12">
      {{ info.title }}
    </h1>
    <h2 class="d-flex justify-center text-h5">
      {{ info.contents.title }}
    </h2>
    <v-divider
      class="mx-auto mt-2 mb-4"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <div class="d-flex justify-center mb-4">
      <iframe
        width="840"
        height="472.5"
        src="https://www.youtube.com/embed/Gi2vut1TKtU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <p class="text-center text-overline">{{ info.contents.veolia }}</p>
    <div>
      <v-row class="d-flex justify-space-around align-center mb-6">
        <v-col
          v-for="(item, index) in info.contents.list"
          :key="index"
          cols="12"
          sm="6"
        >
          <v-card class="mx-auto">
            <v-card-item class="p-4">
              <div class="d-flex justify-center">
                <a :href="'.' + item.url">
                  <p>{{ item.title[0] }}</p>
                </a>
                &nbsp;
                <p>{{ item.title[1] }}</p>
                &nbsp;
                <p class="font-weight-bold">{{ item.title[2] }}</p>
              </div>
              <div class="d-flex justify-center">
                <img :src="item.img" width="200" />
              </div>
              <ul>
                <li v-for="(subitem, index) in item.list" :key="index">
                  • {{ subitem }}
                </li>
              </ul>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </NuxtLayout>
</template>

<script>
import VeoliaWaterTreatment from "/assets/product-brochure/veolia-water-treatment/veolia-water-treatment.json";
import { useLanguagesStore } from "/pages/stores/languages";

export default {
  name: "Veolia-Water-Treatment",
  data() {
    return {
      info: VeoliaWaterTreatment.EN,
      Data: VeoliaWaterTreatment,
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
    if (this.$route.params.language == "en") {
      this.info = this.Data.EN;
    } else if (this.$route.params.language == "th") {
      this.info = this.Data.TH;
    }
  },
};
</script>