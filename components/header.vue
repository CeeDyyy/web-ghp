<template>
  <div>
    <v-app-bar class="bg-yellow-darken-1">
      <v-toolbar-title id="logo" @click="$router.push(menu[0].path)">
        <img src="@/assets/logo.png" height="40" />
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
        <v-tabs
          color="green-darken-4 font-weight-bold"
          class="text-white d-none d-sm-flex"
        >
          <template v-for="main in menu" :key="main.id">
            <v-tab :to="main.path">
              <!-- Start Hover to Show Sub One -->
              <v-menu open-on-hover v-if="main.submenu">
                <template v-slot:activator="{ props }">
                  <div v-bind="props">
                    {{ main.title }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </div>
                </template>

                <v-list class="bg-yellow-darken-1 text-white">
                  <v-list-item
                    v-for="subone in main.submenu"
                    :key="subone.id"
                    :to="subone.path"
                  >
                    <!-- Start Hover to Show Sub Two -->
                    <v-menu open-on-hover v-if="subone.submenu" location="end">
                      <template v-slot:activator="{ props }">
                        <div v-bind="props">
                          {{ subone.title }}
                          <v-icon>mdi-chevron-right</v-icon>
                        </div>
                      </template>

                      <v-list class="bg-yellow-darken-1 text-white">
                        <v-list-item
                          v-for="subtwo in subone.submenu"
                          :key="subtwo.id"
                          :to="subtwo.path"
                        >
                          <!-- Start Hover to Show Sub Three -->
                          <v-menu
                            open-on-hover
                            v-if="subtwo.submenu"
                            location="end"
                          >
                            <template v-slot:activator="{ props }">
                              <div v-bind="props">
                                {{ subtwo.title }}
                                <v-icon>mdi-chevron-right</v-icon>
                              </div>
                            </template>

                            <v-list class="bg-yellow-darken-1 text-white">
                              <v-list-item
                                v-for="subthree in subtwo.submenu"
                                :key="subthree.id"
                                :to="subthree.path"
                              >
                                <!-- Start Hover to Show Sub Four -->
                                <v-menu
                                  open-on-hover
                                  v-if="subthree.submenu"
                                  location="end"
                                >
                                  <template v-slot:activator="{ props }">
                                    <div v-bind="props">
                                      {{ subthree.title }}
                                      <v-icon>mdi-chevron-right</v-icon>
                                    </div>
                                  </template>

                                  <v-list class="bg-yellow-darken-1 text-white">
                                    <v-list-item
                                      v-for="subfour in subthree.submenu"
                                      :key="subfour.id"
                                      :to="subfour.path"
                                    >
                                      {{ subfour.title }}
                                    </v-list-item>
                                  </v-list>
                                </v-menu>
                                <p v-else>{{ subthree.title }}</p>
                                <!-- End Hover to Show Sub Four -->
                              </v-list-item>
                            </v-list>
                          </v-menu>
                          <p v-else>{{ subtwo.title }}</p>
                          <!-- End Hover to Show Sub Three -->
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <p v-else>{{ subone.title }}</p>
                    <!-- End Hover to Show Sub Two -->
                  </v-list-item>
                </v-list>
              </v-menu>
              <p v-else>{{ main.title }}</p>
              <!-- End Hover to Show Sub One -->
            </v-tab>
          </template>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      class="d-flex d-sm-none"
      v-model="drawer"
      location="left"
      temporary
    >
      <v-list
        :lines="false"
        density="compact"
        nav
        active-color="green-darken-4"
        v-for="main in menu"
        :key="main.id"
      >
        <v-list-group v-if="main.submenu">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" :title="main.title"></v-list-item>
          </template>
          <!-- Start Click to Show Sub One -->
          <div v-for="subone in main.submenu" :key="subone.id">
            <v-list-group v-if="subone.submenu">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :title="subone.title"></v-list-item>
              </template>
              <!-- Start Click to Show Sub Two -->
              <div v-for="subtwo in subone.submenu" :key="subtwo.id">
                <v-list-group v-if="subtwo.submenu">
                  <template v-slot:activator="{ props }">
                    <v-list-item
                      v-bind="props"
                      :title="subtwo.title"
                    ></v-list-item>
                  </template>
                  <!-- Start Click to Show Sub Three -->
                  <div v-for="subthree in subtwo.submenu" :key="subthree.id">
                    <v-list-group v-if="subthree.submenu">
                      <template v-slot:activator="{ props }">
                        <v-list-item
                          v-bind="props"
                          :title="subthree.title"
                        ></v-list-item>
                      </template>
                      <!-- Start Click to Show Sub Four -->
                      <div
                        v-for="subfour in subthree.submenu"
                        :key="subfour.id"
                      >
                        <v-list-group v-if="subfour.submenu">
                          <template v-slot:activator="{ props }">
                            <v-list-item
                              v-bind="props"
                              :title="subfour.title"
                            ></v-list-item>
                          </template>
                        </v-list-group>
                        <v-list-item
                          v-else
                          :title="subfour.title"
                          :to="subfour.path"
                        ></v-list-item>
                      </div>
                      <!-- End Click to Show Sub Four -->
                    </v-list-group>
                    <v-list-item
                      v-else
                      :title="subthree.title"
                      :to="subthree.path"
                    ></v-list-item>
                  </div>
                  <!-- End Click to Show Sub Three -->
                </v-list-group>
                <v-list-item
                  v-else
                  :title="subtwo.title"
                  :to="subtwo.path"
                ></v-list-item>
              </div>
              <!-- End Click to Show Sub Two -->
            </v-list-group>
            <v-list-item
              v-else
              :title="subone.title"
              :to="subone.path"
            ></v-list-item>
          </div>
          <!-- End Click to Show Sub One -->
        </v-list-group>
        <v-list-item v-else :title="main.title" :to="main.path"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Menu from "../assets/menu.json";
import { useLanguagesStore } from "../pages/stores/languages";

export default {
  name: "Header",
  data() {
    return {
      menu: Menu.EN,
      lng: "TH",
      language: useLanguagesStore(),
      drawer: false,
      group: null,
    };
  },
  methods: {
    changeLanguage() {
      this.language.change(this.lng);
      this.lng == "EN" ? (this.lng = "TH") : (this.lng = "EN");
    },
  },
  computed: {
    getLng() {
      return this.language.$state.language;
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
    getLng(newValue) {
      if (newValue == "EN") {
        this.menu = Menu.EN;
      } else {
        this.menu = Menu.TH;
      }
    },
  },
  mounted() {
    if (this.$route.params.language == "en") {
      this.menu = Menu.EN;
      this.lng = "EN";
      this.changeLanguage();
    }
    if (this.$route.params.language == "th") {
      this.menu = Menu.TH;
      this.lng = "TH";
      this.changeLanguage();
    }
  },
};
</script>

<style scoped>
#logo img {
  cursor: pointer;
}
</style>