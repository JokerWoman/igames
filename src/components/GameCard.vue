<template>
      <div class="col-lg-4">
          <div class="card" style="width: 18rem;">
            <img height="200" width="auto" :src="jogo.capaJogo" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title"> {{jogo.nomeJogo}} </h5>
              <p class="card-text">         
               {{GetDescricaoReducao}}
              </p>
                 <button class="btn btn-dark" v-on:click="increaseLikes">
            {{jogo.gostos}} -- Gosto
          </button>
           <button class="btn btn-dark" v-on:click="verDetalhes">
            Ver Detalhes
          </button>
             
            </div>
          </div>
      </div>
</template>

<script>
export default {
  name: "GameCard",
  
  methods: {
    increaseLikes(){
      this.$parent.increaseLikesById(this.jogo.id);
    },
    verDetalhes(){
      this.$parent.verDetalhesById(this.jogo.id);
    }

  },
  computed:{
    GetDescricaoReducao(){
      let newDescricao = ""
      if(this.jogo.descricao.length > 30)
      {
        newDescricao = this.jogo.descricao.substring(0,30) + "...";
      }else{
        newDescricao = this.jogo.descricao
      }
  return newDescricao;
}
  },
  props:{
    jogo: Object
  }
};
</script>

