import Vue from 'vue';
import Vuex from 'vuex';
import createHmac from 'create-hmac';
import OAuth from 'oauth-1.0a';
import axios from 'axios';

Vue.use(Vuex);

declare const process: {
  env: {
    VUE_APP_OAUTH_CONSUMER_KEY: string,
    VUE_APP_OAUTH_CONSUMER_SECRET: string,
  },
};

/* tslint:disable */
const oauth = new OAuth({
  consumer: {
    key: process.env.VUE_APP_OAUTH_CONSUMER_KEY,
    secret: process.env.VUE_APP_OAUTH_CONSUMER_SECRET,
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return createHmac('sha1', key)
      .update(base_string)
      .digest('base64');
  },
});
/* tslint:enable */

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    products: (state) => {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const request = {
        url: 'https://reins.test/wp-json/wc/v3/products',
        method: 'GET',
      };

      const auth = oauth.toHeader(oauth.authorize(request));

      const json = await axios({
        url: request.url,
        method: request.method,
        headers: {
          ...auth,
        },
      });

      commit('SET_PRODUCTS', json.data);
    },
  },
});
