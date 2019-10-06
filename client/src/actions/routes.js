var axios = require("axios");

    
module.exports = {

    flushArticles: function(req, res) {
        return axios.get("/flush")
    },

    showData: function(req, res) {
        return axios.get("/all")
    },

    scrapeNews: function(req, res) {
        return axios.get("/scrape")
    }


}

   