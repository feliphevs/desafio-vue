
<template>

    <v-app>
    <v-main>
        <v-container >
            <div class="blue lighten-4" id="div-total" >
                <v-row >
                    <v-col cols="6">
                          <v-btn @click="totalCasos"  color="primary" dark>Dados do Brasil</v-btn>
                            <br>
                            <br>
                            <v-row >
                                <v-col cols="12" >
                                    <b >Total de casos: {{casos}}</b>
                                    
                                 </v-col>
                                 <v-col cols="12">
                                     <b >Total de mortes: {{mortes}}</b>
                                 </v-col>
                            </v-row>    
                    </v-col>
                    <v-col cols="6" >
                        <v-btn @click="totalPais" color="primary" dark> Pesquisar pais</v-btn>
                        <v-row >
                            <v-col cols="4" offset-md=4>
                                <v-text-field  
                                   
                                   
                                    v-model="pais"
                                    label="Pais"
                                    font-color="black"
                                    @keyup.enter="pesquisarPais"
                                ></v-text-field>
                            </v-col>
                        </v-row >
                         <!-- <v-text-field color="#E0F7FA" label="Pais" v-model="pais" rounded>{{pais}}</v-text-field> -->
                        <b>{{nomePAis}}</b>
                        <br>
                         <b>Total de casos: {{casosPais}}</b>
                         <br>
                         <b >Total de mortes: {{mortesPais}}</b>
                    </v-col>
                </v-row>
              
                
                <br>
                <v-spacer></v-spacer>
            </div>
            <!-- funcionando com UL -->
            <!-- <ul >
               
                <li v-for="(dado, id) in dados" :key="id"> Estado: {{dado.state}}
                    <br>
                    Casos: {{dado.cases}}
                    <br>
                    mortes: {{dado.deaths}}
                    <v-spacer></v-spacer>
                    
                </li>
              
            </ul> -->
            <!-- funcionando com div -->
            <!-- <div v-for="(dado, id) in dados" :key="id">
                <p>Estado: {{dado.state}}</p>
                <p>Casos: {{dado.cases}}</p>
                <p>mortes: {{dado.deaths}}</p>
                <v-spacer></v-spacer>
            </div> -->
            <div id="div-estado" class="dark">
                <v-btn @click="casosPorEstado" dark >Mostrar dados por estado</v-btn>
                <v-simple-table dark>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-center">
                            <h2>Estado</h2>
                        </th>
                        <th class="text-center">
                            <h2>Casos confirmados</h2>
                        </th>
                        <th class="text-center">
                            <h2>Casos suspeitos</h2>
                        </th>
                        <th class="text-center">
                            <h2>Mortes</h2>
                        </th>
                        
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(dado, id) in dados" :key="id">
                            <td>{{ dado.state}}</td>
                            <td>{{ dado.cases.toLocaleString('pt-BR') }}</td>
                            <td>{{ dado.suspects.toLocaleString('pt-BR') }}</td>
                            <td>{{ dado.deaths.toLocaleString('pt-BR') }}</td>
                            
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </div>
        </v-container>
    </v-main>
    </v-app>
    
</template>

<script>


export default ({
     data:() => ({
         //   variaves da api total
       casos: null,
       mortes: null,
       dados:[
           
       ],
    //   variaves da api por estado
       cases:[],
       states:[],
       deaths:[],

       teste:0,

    //variaveis de pais
    pais: '',
    dadosPais:[],
    casosPais: null,
    mortesPais: null,
    nomePAis: '',
       
    }),
    methods: {
        // consumo da api total de tados
        async totalCasos(){
            const response = await fetch('https://covid19-brazil-api.vercel.app/api/report/v1/brazil');
            const data = await response.json();
            this.casos = data.data.confirmed.toLocaleString('pt-BR');
            this.mortes = data.data.deaths.toLocaleString('pt-BR');
            
        },
        //consumo da api por estado
        async casosPorEstado(){
            const response = await fetch('https://covid19-brazil-api.vercel.app/api/report/v1');
            const data = await response.json();
           
            this.dados = data.data;
           
            this.teste = this.dados[1].cases;
            for(let i = 0; i < this.dados.length; i++){
                this.cases.push(this.dados[i].cases);
            }
            for(let i = 0; i < this.dados.length; i++){
                this.states.push(this.dados[i].state.format);
            }
            for(let i = 0; i < this.dados.length; i++){
                this.deaths.push(this.dados[i].deaths);
            }
            
            
        },
        //total por pais
        async totalPais(){
            const pais = this.pais.trim();
            const response = await fetch("https://covid19-brazil-api.vercel.app/api/report/v1/"+pais+"");
            const dataPais = await response.json();
            
            if(pais == ''){
                alert("Digite o nome do Pais");
            }
            else{
                try{
                    this.dadosPais = dataPais.data;
                    this.casosPais = dataPais.data.confirmed.toLocaleString('pt-BR');
                    this.mortesPais = dataPais.data.deaths.toLocaleString('pt-BR');
                    this.nomePAis = dataPais.data.country;
                    this.pais = '';
                }
                catch(e){
                    alert("Pais não encontrado, consulte os paises disponíveis: https://covid19-brazil-api.now.sh/api/report/v1/countries", e);
                    this.pais = '';
                }
                
            }
           
            
        },
    },
        
    
})
</script>

<style scoped>
    .dark{
        background-color: #1e1e1e;
        color: white;
    }
    #div-total{
        margin: 10px;
        padding: 10px;
        margin-top: 20px;
    }

    #div-estado{
        margin: 10px;
        padding: 10px;
        margin-top: 20px;
    }
    .p{
        align-items: center;
    }

</style>
