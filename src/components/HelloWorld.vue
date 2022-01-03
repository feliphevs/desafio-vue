<template>
<v-app id="home">
  <v-container id="top">
    <v-row class="text-center">
      <v-col cols="12">
       <v-img
          ><v-img
             max-height="500"
            max-width="300"
            src="../assets/solinftec.png"
          ></v-img
        ></v-img>
         
      </v-col>


      <v-col class="mb-4" cols="5">
        <br><br><br>
        <h1 class="display-2 font-weight-bold mb-3">Seja Bem-Vindo</h1>

        <p class="subheading font-weight-regular">
          Estamos apresentando 5 projetos de
          <br />consumo de API'S :)
          <br>Conheça nosso repositório,
          <br>temos temas diversos!
          <br>
        </p>

        <div>
          <a href="https://github.com/brigidamirella/desafio-vue" target="_blank"><img height="40" width="150" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
        </div>
        <v-spacer></v-spacer>
      </v-col>
      <v-col cols="7">
        <v-img
          ><v-img

            max-height="1000"
            max-width="1000"
            src="../assets/api.png"
          ></v-img
        ></v-img>
      </v-col>
    </v-row>
   
  </v-container> 
  </v-app>
</template>


<script>
  export default {
    name: 'HelloWorld',
methods : {
        btnClick: function() {
            window.open("https://github.com/brigidamirella/desafio-vue");
        }
}
  }
</script>
<style scoped>
p{
  font-size: 30px;
  font-family: 'Times New Roman', Times, serif;
}
#home{
  background-color: rgb(215, 221, 202);
}
</style>