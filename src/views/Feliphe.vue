<template>
  <v-card
    class="mx-auto"
    max-width="400"
    
  >
  <v-card-title class="text-center">
      
        <h1 class="display-1">SolinfteClima</h1>
      
    </v-card-title>
  <v-text-field 
        v-model="cep"
        label="Digite o CEP" 
        v-on:blur="getCEP" 
        v-mask="['#####-###']"
        
        
        
        ></v-text-field>

    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5" v-model="cidadeEstado">
          {{cidadeEstado}}
        </v-list-item-title>
        <v-list-item-subtitle v-model="diaHoraAtual">{{diaHoraAtual}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col
          class="text-h2"
          cols="6"
        >
          23&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>48%</v-list-item-subtitle>
    </v-list-item>

    <v-slider
      v-model="time"
      :max="6"
      :tick-labels="labels"
      class="mx-4"
      ticks
    ></v-slider>

    <v-list class="transparent">
      <v-list-item
        v-for="(item, i) in forecast"
        :key="i"
      >
        <v-list-item-title>{{ item.day }}</v-list-item-title>

        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-subtitle class="text-right">
          {{ item.temp }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-card-actions>
      <!-- <v-btn text>
        Full Report
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data () {
    
      return {
          temp: "",
          diaHoraAtual: "",
          cep: "",
          cidade:"",
          cidadeEstado: "",
          
        labels: ['DO', 'SE', 'TE', 'QU', 'QU', 'SE', 'SA'],
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
      }
    },
    methods: {
        async getCEP(){
        const cepFormatado = this.cep.replace("-", "");
        


      
        
        if (cepFormatado.length === 8) {
            try {
            const response = await fetch(
                `https://viacep.com.br/ws/${cepFormatado}/json/`,
                );
            const json = await response.json();
            console.log(json);
            
            
            const cidade = json.localidade;
            this.cidadeEstado = json.localidade + " - " + json.uf;

            const dias = new Array(
              'Dom','Seg','Ter','Qua','Qui','Sex','Sáb'
              );


            const dataAtual = new Date();
            this.diaHoraAtual = dias[dataAtual.getDay()]
              + "," + dataAtual.getHours() 
              + ":" + dataAtual.getMinutes();

              
              

            
            

            
            

            
            
            const jsonClimas = await fetch(
              `http://api.weatherstack.com/forecast?access_key=ac6ac11102fd4590c487fd46b481bc84&query=${cidade}`,
               );

            const jsonFinal = await jsonClimas.json();       
                          
            this.time = 4;
            // console.log("getForecast => ", jsonFinal.current.temperature);
            console.log("jsonFinal => ", jsonFinal);
            console.log("getForecast =>", jsonFinal);
          } catch (error) {
              console.log("CEP inválido do catch", error);
          }
        } else {
            console.log("CEP inválido do else");
        }     
        
        
      },


    }
  }
</script>