<template>
  <div>
    <v-row>
      <v-col cols="1" lg="2"> </v-col>

      <v-col cols="10" lg="8">
        <v-container class="my-16">
          <slot />
        </v-container>
      </v-col>

      <v-col cols="1" lg="2"> </v-col>
    </v-row>
  </div>
</template>