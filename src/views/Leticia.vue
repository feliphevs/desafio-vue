<template>
    <v-app id="appleticia">
   <div >
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
            <div style="padding-top: 10px;">
    <v-btn color="green" medium @click="loadNextImage" >
              <v-icon>LIKE</v-icon>&nbsp; Love it</v-btn>
    <v-btn color="red" medium @click="loadNextImage" >
              <v-icon>DELIKE</v-icon>&nbsp; Nope it</v-btn>
  </div>
            

        </v-container>
      </v-main>
  </div>
    </v-app>
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
    },
    async voteUp(){
        await this.$store.dispatch('TheCatAPI/voteImage',{
            image_id:this.current_image.id,
            value: true
        }); 
        this.getImage();
      },
      async voteDown(){
        await this.$store.dispatch('TheCatAPI/voteImage',{
            image_id:this.current_image.id,
            value: false
        }); 
        this.getImage();
      },
  
})
</script>

<style>
#appleticia {
  background-color: #FCE4EC;
}
</style>
