<template>
  <!-- o b-nav-item do vue bootstrap comporta-se como um router-link -->

  <b-navbar toggleable="lg" variant="dark" type="dark">
    <b-navbar-brand href="#"></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item
          :to="{ name: 'Home' }"
          :class="{ active: $route.name === 'Home' }"
          >Home</b-nav-item>
        <b-nav-item
          :to="{ name: 'Inserir' }"
          :class="{ active: $route.name === 'Inserir' }"
          >Inserir Jogo</b-nav-item>
        <b-nav-item
          :to="{ name: 'Listar' }"
          :class="{ active: $route.name === 'Listar' }"
          >Listar Jogos</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
  }
};
</script>

