<template>
  <v-app id="inspire">
    <h1 class="d-flex justify-center text-h3 font-weight-medium mt-16 mb-12">
      {{ industries.title }}
    </h1>
    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="item in industries.industries" :key="item.id" cols="12" sm="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                class="mx-auto"
                color="grey-lighten-4"
                max-width="600"
                v-bind="props"
              >
                <v-img :aspect-ratio="3 / 2" cover :src="item.img">
                  <v-expand-transition>
                    <div
                      v-if="isHovering"
                      class="
                        d-flex
                        transition-fast-in-fast-out
                        bg-yellow-darken-1
                        text-green-darken-4
                        v-card--reveal
                        text-h4
                      "
                      style="height: 100%"
                    >
                      {{ industries.learnmore }}
                    </div>
                  </v-expand-transition>
                </v-img>

                <v-card-text class="pt-6">
                  <div
                    class="text-h6 font-weight-light text-green-darken-4 mb-2"
                  >
                    {{ item.title }}
                  </div>

                  <div
                    class="
                      text-subtitle-2
                      font-weight-light
                      text-grey-darken-2
                      mb-2
                    "
                  >
                    {{ item.content }}
                  </div>
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Industries from "/assets/general-industries.json";
import { useLanguagesStore } from "../stores/languages";

export default {
  name: "GeneralIndustries",
  data() {
    return {
      industries: Industries.EN,
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
        this.industries = Industries.EN;
      } else {
        this.industries = Industries.TH;
      }
    },
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>