<template>
  <BannerVue :title="pulp.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ pulp.subtitle }}
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
          src="https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          width="400"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center text-center">
        <div>
          <h2 class="text-h4 font-weight-thin my-8">
            {{ pulp.pulpheading }}
          </h2>
          {{ pulp.pulpcontent }}
        </div>
      </v-col>
    </v-row>
    <div class="my-4" v-for="(item, i) in pulp.pulpconcontent" :key="i">
      {{ item }}
    </div>
    <h2 class="text-h4 font-weight-thin my-8">
      {{ pulp.paperheading }}
    </h2>
    <div class="my-4">
      {{ pulp.papercontent }}
    </div>
    <h2 class="text-h4 font-weight-thin my-8">
      {{ pulp.completeheading }}
    </h2>
    <div class="my-4" v-for="(item, i) in pulp.completecontent" :key="i">
      {{ item }}
    </div>
    <KumearVue />
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Pulp from "/assets/general-industries/pulp-and-paper-industry.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Pulp-and-Paper-Industry",
  components: {
    BannerVue,
    KumearVue,
  },
  data() {
    return {
      pulp: Pulp.EN,
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
        this.pulp = Pulp.EN;
      } else {
        this.pulp = Pulp.TH;
      }
    },
  },
};
</script>