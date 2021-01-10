<template>
  <div class="container">
      <div class="row">
        <div class="col-lg-12" style="padding-top:80px;">
            <form @submit.prevent="inserir">
                    <h6>Nome do Jogo</h6>
                  <input
                    type="text"
                    v-model="jogo.nomeJogo"
                  required/>

                    <h6>Genero</h6>
                <select v-model="jogo.generoSelected">
                  <option
                    v-for="(genero, index) in generos"
                    v-bind:value="genero.title"
                    v-bind:key="index"
                  >
                    {{ genero.title }}
                  </option>
                </select>


                    <h6 >Ano de Edição</h6>
                  <input  type="text" v-model="jogo.anoEdicao" />

                    <h6 >Descrição</h6>
                  <textarea
                    class="form-control"
                    v-model="jogo.descricao"
                    rows="3"
                    cols="1"
                  ></textarea>
          

    
                    <h6 >Capa do Jogo</h6>
                  <input
                    type="url"
                    v-model="jogo.capaJogo"
                    required
                  />

                    <h6>Numero de Gostos</h6>
                  <input type="number" v-model="jogo.gostos" />
                
              <div class="row">
                <button type="submit" style="margin:15px;" class="btn btn-dark text-center">
                  REGISTAR
                </button>
              </div>
            </form>
        </div>
      </div>
  </div>
</template>


<script>

export default {
  name: 'Inserir',
  data() {
    return {
      jogo: {
        id: 0,
        nomeJogo: "",
        anoEdicao: "",
        capaJogo: "",
        descricao: "",
        gostos:0,
        generoSelected: null
      },
      generos: [
                { title: "Ação" },
                { title: "Aventura" },
                { title: "Estrategia" },
                { title: "REPG" },
                { title: "Desportos" },
                { title: "Simulação" },
                 { title: "Outro" }
                ],
      jogos:[],
    };
  },
  components: {
   
  },
  methods:{
    inserir() {
      this.jogo.id = this.getNextId()
     this.jogos.push(this.jogo)
     localStorage.setItem("jogos", JSON.stringify(this.jogos))

    this.$router.push({ name: "Home" });

  },
  getNextId() {
            if (this.jogos.length == 0) {
                return 1
            } else {
                return this.jogos[this.jogos.length - 1].id + 1
            }
        },
},
 created: function() {
    this.jogos = localStorage.getItem("jogos") ? JSON.parse(localStorage.getItem("jogos")) : [];  
  },

}
</script>
