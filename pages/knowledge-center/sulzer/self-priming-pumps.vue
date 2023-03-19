<template>
  <BannerVue :title="selfPrimingPumps.heading" />
  <NuxtLayout>
    <h1 class="d-flex justify-center text-h4 font-weight-thin mb-4">
      {{ selfPrimingPumps.title }}
    </h1>
    <v-divider
      class="mx-auto mt-2 mb-4"
      width="5%"
      thickness="2.5px"
      color="grey"
    />

    <p class="my-4">{{ selfPrimingPumps.content }}</p>
    <div class="d-flex justify-center">
      <iframe
        width="840"
        height="472.5"
        src="https://www.youtube.com/embed/o-VBEZSxrt8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <div class="my-4">
      {{ selfPrimingPumps.contactus[0] }}
      <a href="https://www.upkasia.com/en/contact-us/" target="_blank">
        {{ selfPrimingPumps.contactus[1] }}
      </a>
      {{ selfPrimingPumps.contactus[2] }}
    </div>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import SelfPrimingPumps from "/assets/knowledge-center/sulzer/self-priming-pumps.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "SelfPrimingPumps",
  components: {
    BannerVue,
  },
  data() {
    return {
      selfPrimingPumps: SelfPrimingPumps.EN,
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
        this.selfPrimingPumps = SelfPrimingPumps.EN;
      } else {
        this.selfPrimingPumps = SelfPrimingPumps.TH;
      }
    },
  },
};
</script>