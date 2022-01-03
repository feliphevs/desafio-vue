<template>
  <v-app>
    <v-card width="500" class="mx-auto mt-5">
      <v-select
        :items="[
          'Premier League',
          'La Liga',
          'Serie A (ITA)',
          'Bundesliga',
          'Ligue 1',
          'Série A (BRA)',
        ]"
        label="Choose your League"
      >
        <template v-slot:item="{ item, attrs, on }">
          <v-list-item v-bind="attrs" v-on="on">
            <v-list-item-title :id="attrs" v-text="item"></v-list-item-title>
          </v-list-item>
          <v-btn color="success" @click="getLeague"> Get videos! </v-btn>
        </template>
      </v-select>
    </v-card>
    <div class="wrapper" v-if="this.exibir">
      <div class="h_iframe">
        <!-- a transparent image is preferable -->
        <img class="ratio" src="http://placehold.it/16x9" />
        <iframe :src="image" frameborder="50" allowfullscreen></iframe>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    bars: [{ class: "" }],
    image: "",
    exibir: false,
  }),
  methods: {
    async getLeague() {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      this.image = retorno.response[0].matchviewUrl;
      this.exibir = true;
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #ccc;
}
.h_iframe {
  position: relative;
}
.h_iframe .ratio {
  display: block;
  width: 100%;
  height: auto;
}
.h_iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>