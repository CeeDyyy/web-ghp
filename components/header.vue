<template>
  <v-app-bar class="bg-yellow-darken-1">
    <v-toolbar-title>
      <img src="@/assets/logo.png" height="40" @click="$router.push('/')" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon color="green-darken-4">mdi-magnify</v-icon>
    </v-btn>
    <v-btn elevation="2" @click="changeLanguage()" class="bg-amber">
      {{ lng }}
    </v-btn>
    <template v-slot:extension>
      <v-spacer></v-spacer>
      <v-tabs color="green-darken-4 font-weight-bold" class="text-white">
        <template v-for="item in menu" :key="item.id">
          <v-tab v-if="language.$state.language == 'EN'" :to="item.path">
            {{ item.EN }}
          </v-tab>
          <v-tab v-else :to="item.path">
            {{ item.TH }}
          </v-tab>
        </template>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import Menu from "../assets/menu.json";
import { useLanguagesStore } from "../pages/stores/languages";

export default {
  data() {
    return {
      menu: Menu,
      lng: "TH",
      language: useLanguagesStore(),
    };
  },
  methods: {
    changeLanguage() {
      this.language.change(this.lng);
      this.lng == "EN" ? (this.lng = "TH") : (this.lng = "EN");
    },
  },
};
</script>