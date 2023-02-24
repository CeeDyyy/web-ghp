<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="
        d-flex
        flex-column
        fill-height
        justify-center
        align-center
        text-white
      "
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ contact.title }}</h1>
    </div>
  </v-parallax>
  <!-- <div id="logo">
    <img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" />
  </div> -->
  <v-container class="mt-n10">
    <v-row>
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
</template>

<script>
import Contact from "/assets/contact.json";
import { useLanguagesStore } from "/pages/stores/languages";
export default {
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
};
</script>

<style scoped>
.to-green {
  -webkit-filter: hue-rotate(80deg);
  filter: hue-rotate(80deg);
  height: 200px;
}
#logo {
  height: 200px;
  overflow: hidden;
}
#logo img {
  object-fit: cover;
  width: 100%;
}
</style>