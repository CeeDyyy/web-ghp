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
        <div class="d-flex justify-center mb-4">
          <iframe
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/PNt97Iik0lA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <v-row>
          <v-col cols="12" lg="2"> </v-col>

          <v-col cols="12" lg="8">
            <p class="mb-2">{{ info.feature }}</p>
            <div class="mb-4">
              <ul>
                <li v-for="(item, index) in info.features" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <p class="mb-2">{{ info.advantage }}</p>
            <div class="mb-8">
              <ul>
                <li v-for="(item, index) in info.advantages" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <v-row class="d-flex justify-space-around">
              <v-col
                cols="6"
                v-for="(item, index) in info.list"
                :key="index"
              >
                <v-hover>
                  <template v-slot:default="{ isHovering, props }">
                    <a :href="item.url" target="_blank">
                      <v-card
                        v-bind="props"
                        :elevation="isHovering ? 12 : 2"
                        class="mx-auto"
                      >
                        <v-img :src="item.img" :alt="item.title"></v-img>

                        <v-card-text class="text-center">
                          {{ item.title }}
                        </v-card-text>
                      </v-card>
                    </a>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" lg="2"> </v-col>
        </v-row>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import HydrotechContinuousWovenScreenWaterFilter from "/assets/product-brochure/veolia-water-treatment/hydrotech-continuous-woven-screen-water-filter.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      info: HydrotechContinuousWovenScreenWaterFilter.EN,
      Data: HydrotechContinuousWovenScreenWaterFilter,
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