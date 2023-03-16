<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ dynamicSeal.heading }}</h1>
    </div>
  </v-parallax>
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <!-- ABOUT -->
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ dynamicSeal.title }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-4"
          width="5%"
          thickness="2.5px"
          color="grey"
        />
        <h3 class="d-flex justify-center text-h6 mb-16 text-center">
          {{ dynamicSeal.subtitle }}
        </h3>
        <ul>
          <li v-for="(item, index) in dynamicSeal.list" :key="index">
            {{ item }}
          </li>
        </ul>
        <div
          class="my-4"
          v-for="(item, index) in dynamicSeal.description"
          :key="index"
        >
          {{ item }}
        </div>
        <v-divider
          class="mx-auto mt-2 mb-4"
          thickness="2.5px"
          color="lightgrey"
        />
        <p class="font-weight-bold">{{ dynamicSeal.what.heading }}</p>
        <p class="my-4">{{ dynamicSeal.what.content }}</p>
        <img
          src="https://www.upkasia.com/wp-content/uploads/2020/07/Dseal-1.png"
          width="1200"
        />
        <div class="my-4">
          <a
            href="http://www.upkinter.com/wp-content/uploads/2015/05/Ahlstar_pp_E00545.pdf"
            target="_blank"
            >{{ dynamicSeal.readmore }}</a
          >
        </div>
        <div class="d-flex justify-center">
          <iframe
            width="840"
            height="472.5"
            src="https://www.youtube.com/embed/_BBWdPx2lQY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="my-4">
          {{ dynamicSeal.contactus[0] }}
          <a href="https://www.upkasia.com/en/contact-us/" target="_blank">
            {{ dynamicSeal.contactus[1] }}
          </a>
          {{ dynamicSeal.contactus[2] }}
        </div>
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import DynamicSeal from "/assets/knowledge-center/sulzer/dynamic-seal.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  data() {
    return {
      dynamicSeal: DynamicSeal.EN,
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
        this.dynamicSeal = DynamicSeal.EN;
      } else {
        this.dynamicSeal = DynamicSeal.TH;
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