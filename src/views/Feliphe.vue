

<template>
  <v-app class="hero">
    <div>
      <v-card class="mx-auto" max-width="400" style="margin-top:100px;">
        <div class="center">
          <h1 class="display-1" style="text-align: center;">SolinfteClima</h1>
        </div>

        <v-text-field
          v-model="cep"
          label="Digite o CEP"
          @keyup.enter="getCEP"
          v-mask="['#####-###']"
        ></v-text-field>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5" style="text-align: center;" v-model="cidadeEstado">
              {{ cidadeEstado }}
            </v-list-item-title>
            <v-list-item-subtitle style="text-align: center;" v-model="diaHoraAtual">{{
              diaHoraAtual
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="text-h2" cols="6" v-model="temp">
              {{ temp }}
            </v-col>
            <v-col cols="6">
              <v-img :src="icone" alt="" width="92"></v-img>
            </v-col>
          </v-row>
        </v-card-text>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle style="text-align: center;" v-model="vento">{{
            vento
          }}</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle style="text-align: center;" v-model="nuvens">{{
            nuvens
          }}</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-water-alert</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle style="text-align: center;" v-model="umidade">{{
            umidade
          }}</v-list-item-subtitle>
        </v-list-item>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      temp: "",
      vento: "",
      nuvens: "",
      umidade: "",
      icone: "",
      diaHoraAtual: "",
      cep: "",
      cidade: "",
      cidadeEstado: "",
    };
  },

  methods: {
    async getCEP() {
      const cepFormatado = this.cep.replace("-", "");
      if (cepFormatado.length == 8) {
        try {
          const response = await fetch(
            `https://viacep.com.br/ws/${cepFormatado}/json/`
          );
          const json = await response.json();
          console.log(json);

          this.cidade = json.localidade;
          this.cidadeEstado = json.localidade + " - " + json.uf;

          this.getData();
          this.getTemp();
        } catch (error) {
          console.log("Erro de API de CEP", error);
        }
      } else {
        console.log("CEP inválido");
      }
    },

    getData() {
      const dias = new Array("Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb");
      const dataAtual = new Date();
      this.diaHoraAtual =
        dias[dataAtual.getDay()] +
        ", " +
        ("0" + dataAtual.getHours()).slice(-2) +
        ":" +
        ("0" + dataAtual.getMinutes()).slice(-2);
    },

    async getTemp() {
      try {
        const response = await fetch(
          `http://api.weatherstack.com/forecast?access_key=8d13acdbe0c36f9dfca4fa6de1843e93&query=${this.cidade}`
        );

        const jsonClima = await response.json();

        this.temp = `${jsonClima.current.temperature}°C`;
        this.vento = `Vento: ${jsonClima.current.wind_speed} km/h`;
        this.nuvens = `Nebulosidade: ${jsonClima.current.cloudcover}%`;
        this.umidade = `Umidade do ar: ${jsonClima.current.humidity}%`;
        this.icone = jsonClima.current.weather_icons[0];
      } catch (error) {
        console.log("Erro de API de clima");
      }
    },
  },
};
</script>

<style scoped>
.hero {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
  background-size: cover;
  height: 100vh;
}
</style>