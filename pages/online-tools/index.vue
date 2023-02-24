<template>
  <div>
    <v-parallax
      class="d-flex justify-center"
      :class="smAndUp ? 'align-center mt-n16' : 'pt-10'"
      src="https://images.unsplash.com/photo-1597484661973-ee6cd0b6482c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      :height="smAndUp ? '100vh' : '100%'"
    >
      <v-container>
        <h1 class="d-flex justify-center text-h3 text-white">
          {{ tools.title }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-4"
          width="10%"
          thickness="2.5px"
          color="white"
        />
        <h3 class="d-flex justify-center text-h6 text-white mb-16 text-center">
          {{ tools.subtitle }}
        </h3>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-container class="d-flex justify-center">
                <div>
                  <h2 class="text-h4 text-white text-center">
                    {{ tools.sulzer.title }}
                  </h2>
                  <h5 class="text-subtitle-1 text-white text-center mx-16">
                    {{ tools.sulzer.subtitle }}
                  </h5>
                  <v-divider
                    class="mt-2 mb-3 mx-auto"
                    width="10%"
                    thickness="2.5px"
                    color="white"
                  />
                  <div class="d-flex justify-center">
                    <v-btn
                      variant="flat"
                      class="bg-yellow-darken-1 text-green-darken-4 font-weight-bold mt-3"
                      href="/online-tools/sulzer-pumps"
                      min-width="9rem"
                    >
                      Sulzer Pumps
                    </v-btn>
                  </div>
                </div>
              </v-container>
            </v-col>
            <v-divider vertical color="white" class="d-none d-sm-flex" />
            <v-col cols="12" sm="6">
              <v-container class="d-flex justify-center">
                <div>
                  <h2 class="text-h4 text-white text-center">
                    {{ tools.kumera.title }}
                  </h2>
                  <h5 class="text-subtitle-1 text-white text-center mx-16">
                    {{ tools.kumera.subtitle }}
                  </h5>
                  <v-divider
                    class="mt-2 mb-3 mx-auto"
                    width="10%"
                    thickness="2.5px"
                    color="white"
                  />
                  <div class="d-flex justify-center">
                    <v-btn
                      variant="flat"
                      class="bg-yellow-darken-1 text-green-darken-4 font-weight-bold mt-3"
                      href="/online-tools/kumera-gear"
                      min-width="9rem"
                    >
                      Kumera Power Plaza
                    </v-btn>
                  </div>
                </div>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
import Tools from "/assets/online-tools/online-tools.json";
import { useLanguagesStore } from "/pages/stores/languages";
import OrderVue from "../orders/order.vue";

export default {
  name: "Orders",
  components: {
    OrderVue,
  },
  setup() {
    // Destructure only the keys we want to use
    const { smAndUp } = useDisplay();

    return { smAndUp };
  },
  data() {
    return {
      tools: Tools.EN,
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
        this.tools = Tools.EN;
      } else {
        this.tools = Tools.TH;
      }
    },
  },
};
</script>

<style scoped>
.v-btn--outlined {
  border: thin solid #ff0000;
}
</style>