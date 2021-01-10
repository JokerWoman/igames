<template>
<div>
  <div class="container">
    <div class="row">
      <div
        v-for="(jogo, index) in jogos" :key="index">
        <GameCard
          v-bind:jogo="jogo"
        ></GameCard>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import GameCard from "./../components/GameCard";
export default {
  name: 'Listar',
  components: {
   GameCard
  },
  methods:{
    verDetalhesById(jogoId){
          this.$router.push({ name: "Game", params: { id: jogoId } });
    },
    increaseLikesById(jogoId){
      this.jogos.map (function(jogo){
        if(jogo.id === jogoId)
        {
          jogo.gostos++
        }
        return jogo
      })
      localStorage.setItem("jogos", JSON.stringify(this.jogos))
    }
  },
   data() {
    return {
      jogos:[],
    };
  },
  created: function() {
    this.jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];  
  },
}
</script>
