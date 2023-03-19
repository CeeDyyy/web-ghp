<template>
  <BannerVue :title="sugar.title" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ sugar.subtitle }}
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
          src="https://img.freepik.com/free-photo/white-sugar-cubes-concrete-top-view_114579-5002.jpg?w=1800&t=st=1674733829~exp=1674734429~hmac=b39b2c25d1619b71f9d0908c65004c3d5fbc0ee73135de31668ac9281669c2af"
          width="400"
          :aspect-ratio="3 / 2"
        />
      </v-col>
      <v-col cols="12" sm="6" class="d-flex align-center text-center">
        <div>
          {{ sugar.fab[0] }}
          <a href="/general-industries/sugar/pump">{{ sugar.fab[1] }}</a>
          {{ sugar.fab[2] }}
          <br /><br /><br />
          <a
            href="http://www.upkinter.com/wp-content/uploads/2015/05/Ahlstar_pp_E00545.pdf"
            target="_blank"
            >Ahlstar_pp_E00545</a
          >
        </div>
      </v-col>
    </v-row>
    <KumearVue />
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import KumearVue from "/components/kumear.vue";
import Sugar from "/assets/general-industries/sugar/sugar.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Sugar",
  components: {
    BannerVue,
    KumearVue,
  },
  data() {
    return {
      sugar: Sugar.EN,
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
        this.sugar = Sugar.EN;
      } else {
        this.sugar = Sugar.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.sugar = Sugar.EN;
    }
    if (this.$route.params.language == "th") {
      this.sugar = Sugar.TH;
    }
  }
};
</script>