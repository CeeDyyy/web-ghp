<template>
  <div>
    <v-parallax
      class="d-flex justify-center"
      :class="smAndUp ? 'align-center mt-n16' : 'pt-10'"
      src="https://images.unsplash.com/photo-1524514587686-e2909d726e9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      :height="smAndUp ? '100vh' : '100%'"
    >
      <v-container>
        <h1 class="d-flex justify-center text-h3 text-white">
          {{ orders.title }}
        </h1>
        <v-divider
          class="mx-auto mt-2 mb-4"
          width="10%"
          thickness="2.5px"
          color="white"
        />
        <h3 class="d-flex justify-center text-h6 text-white mb-16 text-center">
          {{ orders.subtitle }}
        </h3>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <OrderVue
                :title="orders.pump.title"
                :subtitle="orders.pump.subtitle"
                :img="orders.pump.img"
                :detail="orders.detail"
                :order="orders.order"
                :url="orders.pump.url"
                :details="orders.pump.details"
              />
            </v-col>
            <v-divider vertical color="white" class="d-none d-sm-flex" />
            <v-col cols="12" sm="6">
              <OrderVue
                :title="orders.agitator.title"
                :subtitle="orders.agitator.subtitle"
                :img="orders.agitator.img"
                :detail="orders.detail"
                :order="orders.order"
                :url="orders.agitator.url"
                :details="orders.agitator.details"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-parallax>
  </div>
</template>

<script>
import { useDisplay } from "vuetify";
import Orders from "/assets/orders.json";
import { useLanguagesStore } from "../stores/languages";
import OrderVue from "./order.vue";

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
      orders: Orders.EN,
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
        this.orders = Orders.EN;
      } else {
        this.orders = Orders.TH;
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