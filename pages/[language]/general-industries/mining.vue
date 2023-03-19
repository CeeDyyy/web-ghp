<template>
  <BannerVue :title="mining.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ mining.subtitle }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-16"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <v-row class="mb-8">
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-img
          src="https://images.unsplash.com/photo-1580420232349-3eefa50d2423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80"
          width="400"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center text-center">
        <div>
          {{ mining.content }}
        </div>
      </v-col>
    </v-row>
    <h2 class="text-h4 font-weight-thin my-8">
      {{ mining.powerfulheading }}
    </h2>
    <div class="my-4" v-for="(item, i) in mining.powerfulcontent" :key="i">
      {{ item }}
    </div>
    <KumearVue />
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Mining from "/assets/general-industries/mining.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Mining",
  components: {
    BannerVue,
    KumearVue,
  },
  data() {
    return {
      mining: Mining.EN,
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
        this.mining = Mining.EN;
      } else {
        this.mining = Mining.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.mining = Mining.EN;
    }
    if (this.$route.params.language == "th") {
      this.mining = Mining.TH;
    }
  }
};
</script>