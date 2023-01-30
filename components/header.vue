<template>
  <div>
    <v-app-bar class="bg-yellow-darken-1">
      <v-toolbar-title>
        <img src="@/assets/logo.png" height="40" @click="$router.push('/')" />
      </v-toolbar-title>
      <v-btn icon>
        <v-icon color="green-darken-4">mdi-magnify</v-icon>
      </v-btn>
      <v-btn elevation="2" @click="changeLanguage()" class="bg-amber">
        {{ lng }}
      </v-btn>
      <template v-slot:extension>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
          class="d-flex d-sm-none"
        ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-tabs color="green-darken-4 font-weight-bold" class="text-white d-none d-sm-flex">
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

    <v-navigation-drawer class="d-flex d-sm-none" v-model="drawer" location="left" temporary>
      <v-list
          :lines="false"
          density="compact"
          nav
        >
          <v-list-item
            v-for="(item, i) in menu"
            :key="i"
            :value="item"
            active-color="green-darken-4"
            :to="item.path"
          >
            <v-list-item-title v-if="language.$state.language == 'EN'" v-text="item.EN"></v-list-item-title>
            <v-list-item-title v-else v-text="item.TH"></v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </div>
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
      drawer: false,
      group: null,
      items: [
        { text: 'My Files', icon: 'mdi-folder' },
        { text: 'Shared with me', icon: 'mdi-account-multiple' },
        { text: 'Starred', icon: 'mdi-star' },
        { text: 'Recent', icon: 'mdi-history' },
        { text: 'Offline', icon: 'mdi-check-circle' },
        { text: 'Uploads', icon: 'mdi-upload' },
        { text: 'Backups', icon: 'mdi-cloud-upload' },
      ],
    };
  },
  methods: {
    changeLanguage() {
      this.language.change(this.lng);
      this.lng == "EN" ? (this.lng = "TH") : (this.lng = "EN");
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>