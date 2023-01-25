<template>
  <v-app id="inspire">
    <slot>General Industries</slot>
    <v-main>
      <!-- <v-container> -->
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="12" sm="4">
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GeneralIndustries",
};
</script>