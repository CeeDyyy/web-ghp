<template>
  <h2 class="d-flex justify-center text-h3 font-weight-medium mt-10 mb-6">
    Our Services
  </h2>
  <v-row class="my-6">
    <v-col v-for="item in services" :key="item.id" cols="12" sm="4">
      <v-container class="text-center px-16" height="200">
        <v-avatar :color="item.color" size="62">
          <v-icon x-large>{{ item.icon }}</v-icon>
        </v-avatar>
        <h3 class="mt-6 mb-3 text-h5 font-weight-medium">
          {{ item.title }}
        </h3>
        <p>
          {{ item.content }}
        </p>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import Services from "../assets/services.json";

export default {
  data() {
    return {
      services: Services.EN,
    };
  },
};
</script>