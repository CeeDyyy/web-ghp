<template>
  <v-row>
    <v-col cols="12" md="4">
      <v-container class="d-flex justify-center">
        <v-avatar color="primary" size="170">
          <img :src="img" :alt="title" />
        </v-avatar>
      </v-container>
    </v-col>
    <v-col cols="12" md="8">
      <v-container>
        <h2 class="text-h4 text-white text-center text-sm-left">
          {{ title }}
        </h2>
        <h5 class="text-subtitle-1 text-white text-center text-sm-left">
          {{ subtitle }}
        </h5>
        <v-divider
          class="mt-2 mb-3 mx-auto mx-sm-0"
          width="10%"
          thickness="2.5px"
          color="white"
        />
        <div class="d-flex d-sm-inline justify-center">
          <v-btn
            variant="outlined"
            class="bg-transparent text-white font-weight-bold mt-3 mr-sm-3"
            min-width="9rem"
          >
            {{ detail }}
          </v-btn>
        </div>
        <div class="d-flex d-sm-inline justify-center">
          <v-btn
            variant="flat"
            class="bg-yellow-darken-1 text-green-darken-4 font-weight-bold mt-3"
            :href="url"
            target="_blank"
            min-width="9rem"
          >
            {{ order }}
          </v-btn>
        </div>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Order",
  props: ["title", "subtitle", "img", "detail", "order", "url"],
};
</script>
