<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light">
      <b-link class="navbar-brand" to="/">Minimal</b-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <b-link class="nav-link" to="/">Home</b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link" to="/products">Products</b-link>
          </li>
          <li class="nav-item">
            <b-link class="nav-link" to="/cart">Cart</b-link>
          </li>
        </ul>
      </div>
    </nav>
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
