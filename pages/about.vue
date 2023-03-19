<template>
  <BannerVue :title="about.title" />
  <NuxtLayout>
    <v-container class="my-16">
      <h1 class="d-flex justify-center text-h5">{{ about.title }}</h1>
      <v-divider
        class="mx-auto mt-2 mb-4"
        width="5%"
        thickness="2.5px"
        color="grey"
      />
      <div
        class="text-body-2 mb-4 text-center"
        v-for="item in about.about"
        :key="item"
      >
        {{ item }}
      </div>
    </v-container>

    <!-- VISION & STRATEGIC PRIORITIES -->
    <v-container class="mb-16">
      <h1 class="d-flex justify-center text-h5">{{ about.vastitle }}</h1>
      <v-divider
        class="mx-auto mt-2 mb-4"
        width="5%"
        thickness="2.5px"
        color="grey"
      />
      <div class="text-body-2 mb-4 text-center">
        {{ about.vascontent }}
      </div>
    </v-container>

    <!-- OUR BUSINESS -->
    <v-container class="mb-16">
      <h1 class="d-flex justify-center text-h5">
        {{ about.businesstitle }}
      </h1>
      <v-divider
        class="mx-auto mt-2 mb-4"
        width="5%"
        thickness="2.5px"
        color="grey"
      />
      <div
        class="text-body-2 mb-4 text-center"
        v-for="item in about.businesscontent"
        :key="item"
      >
        {{ item }}
      </div>
    </v-container>

    <!-- AGENT -->
    <v-container>
      <h1 class="d-flex justify-center text-h5">{{ about.agent }}</h1>
      <v-divider
        class="mx-auto mt-2 mb-4"
        width="5%"
        thickness="2.5px"
        color="grey"
      />
      <div>
        <v-row class="d-flex justify-space-around align-center mb-6">
          <v-col
            v-for="item in about.agentimg"
            :key="item.img"
            cols="12"
            sm="3"
          >
            <a :href="item.url" target="_blank" class="d-flex justify-center">
              <img :src="item.img" width="200" />
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!-- DISTRIBUTER -->
    <v-container>
      <h1 class="d-flex justify-center text-h5">
        {{ about.distributer }}
      </h1>
      <v-divider
        class="mx-auto mt-2 mb-4"
        width="5%"
        thickness="2.5px"
        color="grey"
      />
      <div>
        <v-row class="d-flex justify-space-around align-center mb-6">
          <v-col
            v-for="item in about.distributerimg"
            :key="item.img"
            cols="12"
            sm="3"
          >
            <a :href="item.url" target="_blank" class="d-flex justify-center">
              <img :src="item.img" width="200" />
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>

    <!-- PARTNERSHIP -->
    <v-container>
      <h1 class="d-flex justify-center text-h5">
        {{ about.partnership }}
      </h1>
      <v-divider
        class="mx-auto mt-2 mb-4"
        width="5%"
        thickness="2.5px"
        color="grey"
      />
      <div>
        <v-row class="d-flex justify-space-around align-center mb-6">
          <v-col
            v-for="item in about.partnershipimg"
            :key="item.img"
            cols="12"
            sm="3"
          >
            <a :href="item.url" target="_blank" class="d-flex justify-center">
              <img :src="item.img" width="200" />
            </a>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import About from "/assets/about.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "About",
  components: {
    BannerVue,
  },
  data() {
    return {
      about: About.EN,
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
        this.about = About.EN;
      } else {
        this.about = About.TH;
      }
    },
  },
};
</script>