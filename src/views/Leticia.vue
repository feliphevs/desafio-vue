<template>
   <div id="app">
    <v-app>
      <v-main>
        <v-container>
            <v-layout align-center justify-center>
                <v-btn color="blue" dark large @click="loadNextImage" >
                    <v-icon>refresh</v-icon>
                </v-btn>
              
            </v-layout>
            <br>
            
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <v-img :src="image.url" > </v-img>
                </v-col>
            </v-row>
            

        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>

export default ({
  data:() => ({
   
      dado:{
        image: { url: ""}
    },
    image: { url: ""}
  }),
  
  
  created(){
      this.loadNextImage();
  } ,
  methods:{
     
      async loadNextImage(){
        try{
          const response = await fetch('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ) // Ask for 1 Image, at full resolution
          const dado = await response.json();
          this.image = dado[0];
          console.log("-- Image from TheCatAPI.com")
          console.log(dado[0]);
          console.log("id:", this.image.id)
          console.log("url:", this.image.url)

        } catch(err){
            console.log(err)
        }
      }
    }
  
})
</script>

<style scoped>