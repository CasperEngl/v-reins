<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="white">
      <b-link class="navbar-brand" to="/">Minimal</b-link>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/products">Products</b-nav-item>
          <b-nav-item to="/cart">Cart</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions([
      'getProducts',
    ]),
  },
};
</script>
