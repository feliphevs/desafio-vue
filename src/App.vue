<template>
  <v-app>
    <v-app-bar app color="#004D40" dark>
      <v-app-bar-title>Desafio Vue Solinftec</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(link, i) in links"
        :key="i"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.path"
      >
        {{ link.label }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer color="#004D40" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          color="white"
          text
          rounded
          class="my-2"
          :to="link.path"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="#004D40 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — Solinftec
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    links: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Brígida",
        path: "/brigida",
      },
      {
        label: "Feliphe",
        path: "/feliphe",
      },
      {
        label: "Juliano",
        path: "/juliano",
      },
      {
        label: "Letícia",
        path: "/leticia",
      },
      {
        label: "Vinícius",
        path: "/vinicius",
      },
    ],
  }),

  methods: {},
};
</script>

