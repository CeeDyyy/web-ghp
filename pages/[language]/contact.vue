<template>
  <BannerVue :title="contact.title" />
  <NuxtLayout>
    <v-container class="mt-n16">
      <v-row class="mt-n16">
        <v-col class="px-sm-16 px-md-6 px-lg-16" cols="12" md="6">
          <v-card class="mx-auto">
            <v-card-item>
              <div class="text-center">
                <v-avatar size="64" class="my-3">
                  <v-icon
                    icon="mdi-phone"
                    size="60"
                    color="green-darken-4"
                  ></v-icon>
                </v-avatar>
                <div class="text-h6 mb-5">{{ contact.phone.title }}</div>
                <div
                  class="text-body-1 mb-4"
                  v-for="item in contact.phone.contents"
                  :key="item"
                >
                  {{ item }}
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
        <v-col class="px-sm-16 px-md-6 px-lg-16" cols="12" md="6">
          <v-card class="mx-auto">
            <v-card-item>
              <div class="text-center">
                <v-avatar size="64" class="my-3">
                  <v-icon
                    icon="mdi-map-marker"
                    size="60"
                    color="green-darken-4"
                  ></v-icon>
                </v-avatar>
                <div class="text-h5 mb-5">{{ contact.location.title }}</div>
                <div
                  class="text-body-1 mb-4"
                  v-for="item in contact.location.contents"
                  :key="item"
                >
                  {{ item }}
                </div>
              </div>
            </v-card-item>

            <v-card-actions class="d-flex justify-end">
              <v-btn
                variant="outlined"
                color="green-darken-4"
                href="https://goo.gl/maps/tt8ZuMeBCbkqshgG6"
                target="_blank"
                rel="noreferrer"
                prepend-icon="mdi-image-marker"
                >{{ contact.location.button }}</v-btn
              >
            </v-card-actions>
            <v-img
              src="https://www.upkasia.com/wp-content/uploads/2015/05/Map-UPK.jpg"
              cover
              class="ma-4"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script>
import BannerVue from "/components/banner.vue";
import Contact from "/assets/contact.json";
import { useLanguagesStore } from "/pages/stores/languages";

export default {
  name: "Contact",
  components: {
    BannerVue,
  },
  data() {
    return {
      contact: Contact.EN,
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
  }
};
</script>