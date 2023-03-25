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
    <div>
      <v-row class="d-flex justify-space-around align-center mb-6">
        <v-col
          v-for="(subitem, index) in info.contents.list"
          :key="index"
          cols="12"
          sm="4"
        >
          <a :href="'sulzer' + subitem.url">
            <v-card class="mx-auto">
              <v-card-item class="p-4">
                <p class="text-center">{{ subitem.title }}</p>
              </v-card-item>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </div>
  </NuxtLayout>
</template>

<script>
import Sulzer from "/assets/knowledge-center/picture-library/sulzer/sulzer.json";
import { useLanguagesStore } from "/pages/stores/languages";

export default {
  name: "SULZER",
  data() {
    return {
      info: Sulzer.EN,
      Data: Sulzer,
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