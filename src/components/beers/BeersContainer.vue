<template>
    <div class="container">
        <Beer v-for="(beer) in beersList" v-if="beersShouldShow" v-bind:beers="beer"></Beer>
        <ErrorMessage v-for="(message, index) in errorMessages" :key="index" :errorMessage="message" v-if="errorsShouldShow"></ErrorMessage>
    </div>
</template>

<script>
  import api from '../api/api';

  import ErrorMessage from '../contentBlock/ErrorMessage.vue';
  import Beer from './Beer.vue';

  export default {
    name: 'BeersContainer',
    components: {
      ErrorMessage,
      Beer
    },

    data: function () {
      return {
        errorMessages: [],
        beersList: null
      }
    },

    computed: {
      errorsShouldShow() {
        return this.errorMessages;
      },

      beersShouldShow() {
        return this.beersList;
      }
    },

    methods: {
      showBeers(result) {
        this.beersList = result.beers;
      },

      showErrorMessages(errors) {
        this.errorMessages  = errors.messages;
      }
    },

    created: function () {
      const token = localStorage.getItem('token');
      const getBeersEndPoint =  process.env.VUE_APP_API_URL;

      api.getData(getBeersEndPoint, token).then(result => {
        result.success ? this.showBeers(result) : this.showErrorMessages(result)
      })
    }
  }
</script>