<template>
  <v-app-bar>
    <v-toolbar-title @click="$router.push('/')"> UPKASIA </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon color="#003d2b">mdi-magnify</v-icon>
    </v-btn>
    <v-btn elevation="2" @click="toggleLng()" color="#003d2b">lng</v-btn>
    <template v-slot:extension>
      <v-spacer></v-spacer>
      <v-tabs color="#fad105">
        <template v-for="item in menu" :key="item.id">
          <v-tab v-if="en" :to="item.path">
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

export default {
  data() {
    return {
      menu: Menu,
      en: true,
    };
  },
  methods: {
    toggleLng() {
      this.en = !this.en;
    },
  },
};
</script>