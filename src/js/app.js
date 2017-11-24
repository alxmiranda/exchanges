import Vue from '../../node_modules/vue/dist/vue'  
import VueResource from '../../node_modules/vue-resource/dist/vue-resource'
import listingExchanges from "./listingExchanges"

Vue.use(VueResource)

let urlApi = "https://gist.githubusercontent.com/alxmiranda/cb10903d71abe28c4b8f4dadc73153de/raw/a62e52a29c64ea32935689efd4871743afd6ad54/data.json";
let app = new Vue({
  el: "#app",

  data: {
    exchanges: null,
  },

  created: function () {
    this.$http.get(urlApi).then((response) => {
      response.json().then((data) => {
        let list = new listingExchanges(data.ticker_1h.exchanges);
        this.exchanges = list.orderList();
      })
    }, (error) => {
       consoel.log(error)
    });
  }
})