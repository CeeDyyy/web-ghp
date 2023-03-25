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
          <a :href="'kumera' + subitem.url">
            <v-card class="mx-auto">
              <v-card-item class="p-4">
                <div class="d-flex justify-center">
                  <img :src="subitem.img" width="200" />
                </div>
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
import Kumera from "/assets/knowledge-center/picture-library/kumera/kumera.json";
import { useLanguagesStore } from "/pages/stores/languages";

export default {
  name: "Kumera",
  data() {
    return {
      info: Kumera.EN,
      Data: Kumera,
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