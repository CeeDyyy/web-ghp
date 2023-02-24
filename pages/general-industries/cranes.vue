<template>
  <BannerVue :title="cranes.title" />
  <v-row class="mt-16">
    <v-col cols="12" lg="2"> </v-col>

    <v-col cols="12" lg="8">
      <v-container class="mb-16">
        <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
          {{ cranes.subtitle }}
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
              src="https://images.unsplash.com/photo-1607027919479-e12efc3525b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              width="400"
              :aspect-ratio="3 / 2"
            />
          </v-col>
          <v-col cols="12" sm="6" class="d-flex align-center text-center">
            <div>
              {{ cranes.content }}
            </div>
          </v-col>
        </v-row>
        <KumearVue />
      </v-container>
    </v-col>

    <v-col cols="12" lg="2"> </v-col>
  </v-row>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Cranes from "/assets/general-industries/cranes.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Cranes",
  components: {
    BannerVue,
    KumearVue,
  },
  data() {
    return {
      cranes: Cranes.EN,
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
        this.cranes = Cranes.EN;
      } else {
        this.cranes = Cranes.TH;
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