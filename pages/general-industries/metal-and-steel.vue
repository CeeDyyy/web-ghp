<template>
  <BannerVue :title="metal.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ metal.subtitle }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-16"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <v-row>
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-img
          src="https://images.unsplash.com/photo-1613970351372-9804e380bd09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          width="400"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center text-center">
        <div>
          {{ metal.content }}
        </div>
      </v-col>
    </v-row>
    <KumearVue />
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Metal from "/assets/general-industries/metal-and-steel.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Metal-and-Steel",
  components: {
    BannerVue,
    KumearVue,
  },
  data() {
    return {
      metal: Metal.EN,
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
        this.metal = Metal.EN;
      } else {
        this.metal = Metal.TH;
      }
    },
  },
};
</script>