<template>
  <v-footer class="bg-green-darken-4 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        class="mx-4"
        :icon="icon.icon"
        variant="text"
        :href="icon.url"
        target="_blank"
      ></v-btn>
    </div>

    <div class="pt-0 text-caption">
      {{ contact.location.contents[1] }}
      <br />
      {{ contact.phone.contents[1] }}
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>UPK Asia</strong></div>
  </v-footer>
</template>

<script>
import Contact from "/assets/contact.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
  name: "Footer",
  data: () => ({
    icons: [
      {
        icon: "mdi-youtube",
        url: "https://www.youtube.com/channel/UCVKs0hrzwPft6B75_EEPd3A",
      },
      {
        icon: "mdi-facebook",
        url: "https://www.facebook.com/profile.php?id=100068018813942&fref=ts",
      },
      { icon: "mdi-account", url: "www.upkinter.com/about/" },
    ],
    contact: Contact.EN,
    language: useLanguagesStore(),
  }),
  computed: {
    getLng() {
      return this.language.$state.language;
    },
  },
  watch: {
    getLng(newValue) {
      if (newValue == "EN") {
        this.contact = Contact.EN;
      } else {
        this.contact = Contact.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.contact = Contact.EN;
    }
    if (this.$route.params.language == "th") {
      this.contact = Contact.TH;
    }
  },
};
</script>
