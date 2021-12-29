<!-- Cards dos pokemons-->
<template>
  <div id="card" class="card">
    <div class="card-image">
      <figure>
        <img :src="currentImg" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ index }}. {{ name | upperCase }}</p>
          <p class="subtitle is-6">{{ pokemon.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  name: 'Pokemon',
  props: {
    index: Number,
    name: String,
    url: String
  },
  // carrega o tipo de pokemon (fogo,planta, venenoso etc) e a sua imagem 
  created: function() {
    api.get(this.url).then((response) => {
      this.pokemon.type = response.data.types[0].type.name;
      this.currentImg = response.data.sprites.front_default;
    });
  },
  data() {
    return {
      isFront: true,
      currentImg: '',
      pokemon: {
        type: '',
      }
    }
  },
  
  methods: {
    
  },
  filters: {
    upperCase: function(value) {
      var newName = value[0].toUpperCase() + value.slice(1);
      return newName;
    }
  }
}
</script>

<style>
  .card {
    margin: 1vh;
  }

  #card {
    width: 20rem;
  }
</style>
