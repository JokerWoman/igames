<template>
<div>
 <div class="container">
    <div class="row">
     <div class="col-lg-12">
          <div class="card" style="width: 18rem;">
            <img height="200" width="auto" :src="GetRouteJogo.capaJogo" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title"> {{GetRouteJogo.nomeJogo}} </h5>
              <p class="card-text">         
               {{GetRouteJogo.descricao}}
              </p>
            </div>
            <button class="btn btn-dark" v-on:click="voltarAtras">
            Voltar Atras
          </button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Game',
  components: {
  },
  data() {
    return {
      jogos:[],
    };
  },
  methods:{
    voltarAtras(){
      this.$router.push({ name: "Listar" });
    }
  },
  computed:{
    GetRouteJogo(){
      let jogoId = this.$route.params.id
      let jogo = this.jogos.find(jogo => parseInt(jogo.id) === parseInt(jogoId))
      return jogo
    }
  },
  created: function() {
    this.jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];  
  },
}
</script>
