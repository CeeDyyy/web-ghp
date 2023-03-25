<template>
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h3 font-weight-medium mt-16 mb-12">
      {{ info.title }}
    </h1>
    <div v-for="(item, index) in info.contents" :key="index" class="my-16">
      <div v-if="item.url === '/picture-library'">
        <a
          :href="'knowledge-center' + item.url"
          class="text-black text-decoration-none"
        >
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
                :href="'.' + subitem.url"
                class="d-flex justify-center text-black text-decoration-none"
              >
                <h3 class="text-center font-weight-bold text-h6">
                  {{ subitem.title }}
                </h3>
              </a>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import KnowledgeCenter from "/assets/knowledge-center/knowledge-center.json";
import { useLanguagesStore } from "/pages/stores/languages";

export default {
  name: "Picture-Library",
  data() {
    return {
      info: KnowledgeCenter.EN,
      Data: KnowledgeCenter,
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