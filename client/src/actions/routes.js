var axios = require("axios");

    
module.exports = {

    scrapeNews: function(req, res) {
        return axios.get("/scrape")
    }


}

   