var axios = require("axios");

    
module.exports = {

    showData: function(req, res) {
        return axios.get("/all")
    },

    scrapeNews: function(req, res) {
        return axios.get("/scrape")
    },

    savePost: function(title, img, caption, link) {
        console.log(title);
        return axios.post("/save", {
            title: title,
            img: img,
            caption: caption,
            link: link
        })
    }


}

   