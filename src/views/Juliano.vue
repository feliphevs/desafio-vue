<template>
  <v-app class="page">
    <v-card class="mx-auto" tile>
      <div>
        <p class="father">
          Assista aos melhores momentos dos últimos jogos da sua Liga favorita!
        </p>
        <span class="espaco"></span>
        <v-row>
          <v-col col="6">
            <div class="pl">
              <v-btn rounded color="#004D40" dark @click="getLeague1()">Premier League (ENG)</v-btn>
            </div>
            <span class="espaco"></span>
            <div>
              <v-btn rounded color="#004D40" dark @click="getLeague2()">La Liga (ESP)</v-btn>
            </div>
            <span class="espaco"></span>
            <div>
              <v-btn rounded color="#004D40" dark @click="getLeague3()">Serie A (ITA)</v-btn>
            </div>
          </v-col>
          <v-col col="6">
            <div>
              <v-btn rounded color="#004D40" dark @click="getLeague4()">Bundesliga (GER)</v-btn>
            </div>
            <span class="espaco"></span>
            <div>
              <v-btn rounded color="#004D40" dark @click="getLeague5()">Ligue 1 (FRA)</v-btn>
            </div>
            <span class="espaco"></span>
            <div>
              <v-btn rounded color="#004D40" dark @click="getLeague6()">Série A (BRA)</v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <div>
      <div class="wrapper" v-if="exibir">
        <div class="h_iframe">
          <img class="ratio" src="http://placehold.it/16x9" />
          <iframe :src="image" frameborder="50" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    image: "",
    exibir: false,
  }),
  methods: {
    async getLeague1() {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      var matchId1 = 0;
      if (retorno.response[matchId1].competition === "ENGLAND: Premier League") {
        this.image = retorno.response[matchId1].competitionUrl;
        this.exibir = true;
        matchId1++;
      }
    },
    async getLeague2() {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      var matchId2 = 0;
      if (retorno.response[matchId2].competition === "SPAIN: La Liga") {
        this.image = retorno.response[matchId2].competitionUrl;
        this.exibir = true;
        matchId2++;
      }
    },
    async getLeague3() {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      var matchId2 = 0;
      if (retorno.response[matchId2].competition === "ITALY: Serie A") {
        this.image = retorno.response[matchId2].competitionUrl;
        this.exibir = true;
        matchId2++;
      }
    },
    async getLeague4() {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      var matchId2 = 0;
      if (retorno.response[matchId2].competition === "GERMANY: Bundesliga") {
        this.image = retorno.response[matchId2].competitionUrl;
        this.exibir = true;
        matchId2++;
      }
    },
    async getLeague5() {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      var matchId2 = 0;
      if (retorno.response[matchId2].competition === "FRANCE: Ligue 1") {
        this.image = retorno.response[matchId2].competitionUrl;
        this.exibir = true;
        matchId2++;
      }
    },
    async getLeague6() {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      var matchId2 = 0;
      if (retorno.response[matchId2].competition === "BRAZIL: Serie A") {
        this.image = retorno.response[matchId2].competitionUrl;
        this.exibir = true;
        matchId2++;
      }
    },
  },
};
</script>

<style scoped>
.page {
  background-image: url(../assets/fut.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.father {
  font-size: 30px;
  padding-top: 30px;
}
.espaco {
  padding-left: 5px;
}
.mx-auto {
  width: 80%;
  height: relative;
  padding-bottom: 40px;
}
.wrapper {
  width: 80%;
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