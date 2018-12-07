<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="white">
      <b-link class="navbar-brand" to="/">Minimal</b-link>
      <b-navbar-toggle target="nav_collapse" @click="toggleNav" :class="{ active: navOpen }"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" exact>Home</b-nav-item>
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
    this.getCart();
    this.getCartTotals();
  },
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    ...mapActions(['getProducts', 'getCart', 'getCartTotals']),
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>
