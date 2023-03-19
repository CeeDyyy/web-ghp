<template>
  <BannerVue :title="info.heading" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ info.title }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-4"
      width="5%"
      thickness="2.5px"
      color="grey"
    />
    <div class="d-flex justify-center">
      <img :src="info.img" width="300" :alt="info.alt" />
    </div>
    <p class="my-4">
      {{ info.alt }}
    </p>
    <div class="my-4" v-for="(item, index) in info.content" :key="index">
      {{ item }}
    </div>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import Loading from "/assets/knowledge-center/picture-library/kumera/loading.json";
import KumeraMultiStageHelicalAndBevelHelicalGearboxes from "/assets/knowledge-center/picture-library/kumera/kumera-multi-stage-helical-and-bevel-helical-gearboxes.json";
import KumeraOneStageHelicalGearboxes from "/assets/knowledge-center/picture-library/kumera/kumera-one-stage-helical-gearboxes.json";
import OneStageBevelGearboxes from "/assets/knowledge-center/picture-library/kumera/one-stage-bevel-gearboxes.json";
import GirthGearDrives from "/assets/knowledge-center/picture-library/kumera/girth-gear-drives.json";
import KumeraVerticalShaftGearboxes from "/assets/knowledge-center/picture-library/kumera/kumera-vertical-shaft-gearboxes.json";
import WormGearboxes from "/assets/knowledge-center/picture-library/kumera/worm-gearboxes.json";
import CustomBuiltGearboxes from "/assets/knowledge-center/picture-library/kumera/custom-built-gearboxes.json";
import GuardGearOnlineConditionMonitoring from "/assets/knowledge-center/picture-library/kumera/guard-gear-online-condition-monitoring.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Kumera",
  components: {
    BannerVue,
  },
  data() {
    return {
      info: Loading.EN,
      Data: Loading,
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
    if (
      this.$route.params.item ==
      "kumera-multi-stage-helical-and-bevel-helical-gearboxes"
    ) {
      this.info = KumeraMultiStageHelicalAndBevelHelicalGearboxes.EN;
      this.Data = KumeraMultiStageHelicalAndBevelHelicalGearboxes;
    }
    if (this.$route.params.item == "kumera-one-stage-helical-gearboxes") {
      this.info = KumeraOneStageHelicalGearboxes.EN;
      this.Data = KumeraOneStageHelicalGearboxes;
    }
    if (this.$route.params.item == "one-stage-bevel-gearboxes") {
      this.info = OneStageBevelGearboxes.EN;
      this.Data = OneStageBevelGearboxes;
    }
    if (this.$route.params.item == "girth-gear-drives") {
      this.info = GirthGearDrives.EN;
      this.Data = GirthGearDrives;
    }
    if (this.$route.params.item == "kumera-vertical-shaft-gearboxes") {
      this.info = KumeraVerticalShaftGearboxes.EN;
      this.Data = KumeraVerticalShaftGearboxes;
    }
    if (this.$route.params.item == "worm-gearboxes") {
      this.info = WormGearboxes.EN;
      this.Data = WormGearboxes;
    }
    if (this.$route.params.item == "custom-built-gearboxes") {
      this.info = CustomBuiltGearboxes.EN;
      this.Data = CustomBuiltGearboxes;
    }
    if (this.$route.params.item == "guard-gear-online-condition-monitoring") {
      this.info = GuardGearOnlineConditionMonitoring.EN;
      this.Data = GuardGearOnlineConditionMonitoring;
    }
  },
};
</script>