<template>
  <v-app class="page" style="margin-top: 0px;">
    <v-card class="mx-auto" tile>
      <div>
        <p class="father">
          Acompanhe sua Liga favorita! <p class="son">
          Melhores momentos dos últimos jogos, análises jogo a jogo, tabelas, e muito mais!
        </p>
        <span class="espaco"></span>
        <v-row>
          <v-col cols="6" class="mx-auto">
            <div class="botoes">
              <v-btn v-for="(item, i) in items" :key="i" rounded color="#004D40" dark v-text="item.liga" @click="getLeague(item.text)" style="margin-bottom: 10px; margin-right: 10px;margin-left: 10px;"></v-btn>
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
    <v-alert
        dense
        type="warning"
        v-show="msgShow"
        v-model="msgAlert"
        width="auto"
        class="mx-auto mt-5"
        transition="slide-x-reverse-transition"
        >{{ msgAlert }}</v-alert
      >
  </v-app>
</template>

<script>
export default {
  data: () => ({
    image: "",
    exibir: false,
    msgShow: false,
    msgAlert: "",
    items: [
      { 
        text: "ENGLAND: Premier League",
        liga: "Premier League (ING)"
      },
      { 
        text: "SPAIN: La Liga",
        liga: "La Liga (ESP)"
      },
      {
        text: "ITALY: Serie A",
        liga: "Serie A (ITA)"
       },
      {
        text: "GERMANY: Bundesliga",
        liga: "Bundesliga (ALE)"
      },
      {
        text: "FRANCE: Ligue 1",
        liga: "Ligue 1 (FRA)"
      },
      {
        text: "BRAZIL: Serie A",
        liga: "Série A (BRA)"
      },
    ],
  }),
  methods: {
    async getLeague(competicao) {
      const response = await fetch("https://www.scorebat.com/video-api/v3/");
      const retorno = await response.json();
      var matchId = retorno.response.findIndex(element => {
        return element.competition === competicao;
      });
      console.log(matchId);
      if (matchId != -1) {
        this.image = retorno.response[matchId].competitionUrl;
        this.exibir = true;
      } else {
        this.exibir = false;
        this.msgShow = true;
        this.msgAlert = "Não houveram jogos recentes nessa competição!";
        setTimeout(() => {
          this.msgShow = false;
        }, 3000);
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
.son {
  font-size: 20px;
  padding-bottom: 20px;
}
.mx-auto {
  width: 90%;
  height: relative;
  padding-bottom: 40px;
  align-items: center;
}
.wrapper {
  width: 90%;
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