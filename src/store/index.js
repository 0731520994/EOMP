import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    orders: null,
    order: null,
    categories: null,
    category: null,
    spinner: false,
    token: null,
    msg: null,
    state: {
      product: {
        prodUrl: '',
      },
    },
  },
  getters: {

  },
  mutations: {
 
  },
  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${cUrl}users`);
        context.commit('setUsers', data.results);
      } catch (e) {
        context.commit('setMsg', 'error occ');
      }
    },

    async updateUser(context, updatedUser) {
      try {
        const response = await axios.patch(
          `${cUrl}users/${updatedUser.userID}`,
          updatedUser
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    async getUsers(context) {
      try {
        context.commit('setSpinner', true);
        const response = await axios.get(`${cUrl}users`);
        context.commit('setUsers', response.data.results);
        context.commit('setSpinner', false);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchProducts(context) {
      try {
        context.commit('setSpinner', true);
        const response = await axios.get(`${cUrl}products`);
        context.commit('setProducts', response.data.results);
        context.commit('setSpinner', false);
      } catch (err) {
        console.log(err);
        context.commit('setMsg', 'error occured');
      }
    },

    async fetchProduct(context, id) {
      try {
        const response = await axios.get(`${cUrl}product/${id}`);
        const { results, err } = response.data;
        if (results) {
          context.commit('setProduct', results[0]);
        } else {
          context.commit('setMsg', err);
        }
      } catch (err) {
        console.log(err);
      }
    },

    async addProduct(context, payload) {
      try {
        const response = await axios.post(`${cUrl}products`, payload);
        const { msg, err } = response.data;

        if (msg) {
          context.commit('setMsg', msg);
        } else if (err) {
          console.log(err);
          context.commit('setMsg', err);
        }

        await context.dispatch('fetchProducts');
      } catch (error) {
        console.error(error);
        context.commit('setMsg', 'Error adding product');
        throw error;
      }
    },

    async fetchCategories(context) {
      try {
        const { data } = await axios.get(`${cUrl}categories`);
        context.commit('setCategories', data.results);
      } catch (error) {
        context.commit('setMsg', 'Error fetching categories');
      }
    },



  },

  modules: {
  
  },
});
