<template>
  <v-footer class="bg-green-darken-4 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.icon"
        class="mx-4"
        :icon="icon.icon"
        variant="text"
        :href="icon.url"
        target="_blank"
      ></v-btn>
    </div>

    <div class="pt-0 text-caption">
      28/2 Nimitmai Rd., Minburi, Minburi, Bangkok, 10510, Thailand
      <br />
      Tel: (+662) 914-7984 Fax: (+662) 914-7985
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>UPK Asia</strong></div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: "mdi-youtube",
        url: "https://www.youtube.com/channel/UCVKs0hrzwPft6B75_EEPd3A",
      },
      {
        icon: "mdi-facebook",
        url: "https://www.facebook.com/profile.php?id=100068018813942&fref=ts",
      },
      { icon: "mdi-account", url: "www.upkinter.com/about/" },
    ],
  }),
};
</script>
