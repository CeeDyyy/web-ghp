<template>
  <BannerVue :title="kumeraGear.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ kumeraGear.kumera }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-16"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <v-row>
      <v-col cols="12" sm="6" class="d-inline align-center">
        <div class="mb-4 text-center">
          {{ kumeraGear.content }}
        </div>
        <br />
        <div class="mb-4 text-center">
          {{ kumeraGear.program }}
          <a
            href="https://www.power-plaza.com/KumeraPowerPlaza/Default.aspx"
            target="_blank"
            >{{ kumeraGear.link }}</a
          >
        </div>
      </v-col>
      <v-col cols="12" sm="6" class="d-flex justify-center">
        <img
          src="https://www.upkasia.com/wp-content/uploads/2015/05/75.jpg"
          width="200"
        />
        <img
          src="https://www.upkasia.com/wp-content/uploads/2015/05/56-300x250.jpg"
          width="200"
        />
      </v-col>
    </v-row>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumeraGear from "/assets/online-tools/kumera-gear.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "KumeraGear",
  components: {
    BannerVue,
  },
  data() {
    return {
      kumeraGear: KumeraGear.EN,
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
        this.kumeraGear = KumeraGear.EN;
      } else {
        this.kumeraGear = KumeraGear.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.kumeraGear = KumeraGear.EN;
    }
    if (this.$route.params.language == "th") {
      this.kumeraGear = KumeraGear.TH;
    }
  }
};
</script>