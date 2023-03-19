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
        <v-tabs
          color="green-darken-4 font-weight-bold"
          class="text-white d-none d-sm-flex"
        >
          <template v-for="main in menu" :key="main.id">
            <v-tab v-if="language.$state.language == 'EN'" :to="main.path">
              <!-- Start Hover to Show Sub One -->
              <v-menu open-on-hover v-if="main.submenu">
                <template v-slot:activator="{ props }">
                  <div v-bind="props">
                    {{ main.EN }}
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
                          {{ subone.EN }}
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
                                {{ subtwo.EN }}
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
                                      {{ subthree.EN }}
                                      <v-icon>mdi-chevron-right</v-icon>
                                    </div>
                                  </template>

                                  <v-list class="bg-yellow-darken-1 text-white">
                                    <v-list-item
                                      v-for="subfour in subthree.submenu"
                                      :key="subfour.id"
                                      :to="subfour.path"
                                    >
                                      {{ subfour.EN }}
                                    </v-list-item>
                                  </v-list>
                                </v-menu>
                                <p v-else>{{ subthree.EN }}</p>
                                <!-- End Hover to Show Sub Four -->
                              </v-list-item>
                            </v-list>
                          </v-menu>
                          <p v-else>{{ subtwo.EN }}</p>
                          <!-- End Hover to Show Sub Three -->
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <p v-else>{{ subone.EN }}</p>
                    <!-- End Hover to Show Sub Two -->
                  </v-list-item>
                </v-list>
              </v-menu>
              <p v-else>{{ main.EN }}</p>
              <!-- End Hover to Show Sub One -->
            </v-tab>
            <v-tab v-else :to="main.path">
              <!-- Start Hover to Show Sub One -->
              <v-menu open-on-hover v-if="main.submenu">
                <template v-slot:activator="{ props }">
                  <div v-bind="props">
                    {{ main.TH }}
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
                          {{ subone.TH }}
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
                                {{ subtwo.TH }}
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
                                      {{ subthree.TH }}
                                      <v-icon>mdi-chevron-right</v-icon>
                                    </div>
                                  </template>

                                  <v-list class="bg-yellow-darken-1 text-white">
                                    <v-list-item
                                      v-for="subfour in subthree.submenu"
                                      :key="subfour.id"
                                      :to="subfour.path"
                                    >
                                      {{ subfour.TH }}
                                    </v-list-item>
                                  </v-list>
                                </v-menu>
                                <p v-else>{{ subthree.TH }}</p>
                                <!-- End Hover to Show Sub Four -->
                              </v-list-item>
                            </v-list>
                          </v-menu>
                          <p v-else>{{ subtwo.TH }}</p>
                          <!-- End Hover to Show Sub Three -->
                        </v-list-item>
                      </v-list>
                    </v-menu>
                    <p v-else>{{ subone.TH }}</p>
                    <!-- End Hover to Show Sub Two -->
                  </v-list-item>
                </v-list>
              </v-menu>
              <p v-else>{{ main.TH }}</p>
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
        <div v-if="language.$state.language == 'EN'">
          <v-list-group v-if="main.submenu">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :title="main.EN"></v-list-item>
            </template>
            <!-- Start Click to Show Sub One -->
            <div v-for="subone in main.submenu" :key="subone.id">
              <v-list-group v-if="subone.submenu">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="subone.EN"></v-list-item>
                </template>
                <!-- Start Click to Show Sub Two -->
                <div v-for="subtwo in subone.submenu" :key="subtwo.id">
                  <v-list-group v-if="subtwo.submenu">
                    <template v-slot:activator="{ props }">
                      <v-list-item
                        v-bind="props"
                        :title="subtwo.EN"
                      ></v-list-item>
                    </template>
                    <!-- Start Click to Show Sub Three -->
                    <div v-for="subthree in subtwo.submenu" :key="subthree.id">
                      <v-list-group v-if="subthree.submenu">
                        <template v-slot:activator="{ props }">
                          <v-list-item
                            v-bind="props"
                            :title="subthree.EN"
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
                                :title="subfour.EN"
                              ></v-list-item>
                            </template>
                          </v-list-group>
                          <v-list-item
                            v-else
                            :title="subfour.EN"
                            :to="subfour.path"
                          ></v-list-item>
                        </div>
                        <!-- End Click to Show Sub Four -->
                      </v-list-group>
                      <v-list-item
                        v-else
                        :title="subthree.EN"
                        :to="subthree.path"
                      ></v-list-item>
                    </div>
                    <!-- End Click to Show Sub Three -->
                  </v-list-group>
                  <v-list-item
                    v-else
                    :title="subtwo.EN"
                    :to="subtwo.path"
                  ></v-list-item>
                </div>
                <!-- End Click to Show Sub Two -->
              </v-list-group>
              <v-list-item
                v-else
                :title="subone.EN"
                :to="subone.path"
              ></v-list-item>
            </div>
            <!-- End Click to Show Sub One -->
          </v-list-group>
          <v-list-item v-else :title="main.EN" :to="main.path"></v-list-item>
        </div>
        <div v-else>
          <v-list-group v-if="main.submenu">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :title="main.TH"></v-list-item>
            </template>
            <!-- Start Click to Show Sub One -->
            <div v-for="subone in main.submenu" :key="subone.id">
              <v-list-group v-if="subone.submenu">
                <template v-slot:activator="{ props }">
                  <v-list-item v-bind="props" :title="subone.TH"></v-list-item>
                </template>
                <!-- Start Click to Show Sub Two -->
                <div v-for="subtwo in subone.submenu" :key="subtwo.id">
                  <v-list-group v-if="subtwo.submenu">
                    <template v-slot:activator="{ props }">
                      <v-list-item
                        v-bind="props"
                        :title="subtwo.TH"
                      ></v-list-item>
                    </template>
                    <!-- Start Click to Show Sub Three -->
                    <div v-for="subthree in subtwo.submenu" :key="subthree.id">
                      <v-list-group v-if="subthree.submenu">
                        <template v-slot:activator="{ props }">
                          <v-list-item
                            v-bind="props"
                            :title="subthree.TH"
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
                                :title="subfour.TH"
                              ></v-list-item>
                            </template>
                          </v-list-group>
                          <v-list-item
                            v-else
                            :title="subfour.TH"
                            :to="subfour.path"
                          ></v-list-item>
                        </div>
                        <!-- End Click to Show Sub Four -->
                      </v-list-group>
                      <v-list-item
                        v-else
                        :title="subthree.TH"
                        :to="subthree.path"
                      ></v-list-item>
                    </div>
                    <!-- End Click to Show Sub Three -->
                  </v-list-group>
                  <v-list-item
                    v-else
                    :title="subtwo.TH"
                    :to="subtwo.path"
                  ></v-list-item>
                </div>
                <!-- End Click to Show Sub Two -->
              </v-list-group>
              <v-list-item
                v-else
                :title="subone.TH"
                :to="subone.path"
              ></v-list-item>
            </div>
            <!-- End Click to Show Sub One -->
          </v-list-group>
          <v-list-item v-else :title="main.TH" :to="main.path"></v-list-item>
        </div>
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