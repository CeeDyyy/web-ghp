<template>
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h3 font-weight-medium mt-16 mb-12">
      {{ info.title }}
    </h1>
    <div v-for="(item, index) in info.contents" :key="index" class="my-16">
      <a :href="'product-brochure' + item.url" class="text-black text-decoration-none">
        <h2 class="d-flex justify-center text-h5">
          {{ item.title }}
        </h2>
      </a>
      <v-divider
        class="mx-auto mt-2 mb-4"
        width="5%"
        thickness="2.5px"
        color="grey"
      />
      <div>
        <v-row class="d-flex justify-space-around align-center mb-6">
          <v-col
            v-for="(subitem, index) in item.list"
            :key="index"
            cols="12"
            sm="3"
          >
            <a
              :href="'product-brochure' + subitem.url"
              class="d-flex justify-center text-black text-decoration-none"
            >
              <img v-if="subitem.img !== ''" :src="subitem.img" width="200" />
              <h3 v-else class="text-center font-weight-bold text-h6">
                {{ subitem.title }}
              </h3>
            </a>
          </v-col>
        </v-row>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import ProductBrochure from "/assets/product-brochure/product-brochure.json";
import { useLanguagesStore } from "/pages/stores/languages";

export default {
  name: "Product-Brochure",
  data() {
    return {
      info: ProductBrochure.EN,
      Data: ProductBrochure,
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