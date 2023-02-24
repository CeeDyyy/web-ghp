<template>
  <v-parallax
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
    class="to-green"
  >
    <div
      class="d-flex flex-column fill-height justify-center align-center text-white"
    >
      <h1 class="text-h4 font-weight-thin mb-4">{{ title }}</h1>
    </div>
  </v-parallax>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.to-green {
  -webkit-filter: hue-rotate(80deg);
  filter: hue-rotate(80deg);
  height: 200px;
}
#logo {
  height: 200px;
  overflow: hidden;
}
#logo img {
  object-fit: cover;
  width: 100%;
}
</style>