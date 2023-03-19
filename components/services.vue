<template>
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h3 font-weight-medium mt-10 mb-6">
      {{ services.title }}
    </h1>
    <v-row class="my-6">
      <v-col v-for="item in services.services" :key="item.id" cols="12" sm="4">
        <v-container class="text-center px-16" height="200">
          <v-avatar :color="item.color" size="62">
            <v-icon x-large>{{ item.icon }}</v-icon>
          </v-avatar>
          <h2 class="mt-6 mb-3 text-h5 font-weight-medium">
            {{ item.title }}
          </h2>
          <p>
            {{ item.content }}
          </p>
        </v-container>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script>
import Services from "../assets/services.json";
import { useLanguagesStore } from "../pages/stores/languages";

export default {
  data() {
    return {
      services: Services.EN,
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
        this.services = Services.EN;
      } else {
        this.services = Services.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.services = Services.EN;
    }
    if (this.$route.params.language == "th") {
      this.services = Services.TH;
    }
  }
};
</script>