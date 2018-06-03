var axios = require('axios');

module.exports = {
    getResult: function (topic) {
        return axios.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=4f0022b2d1cc43259c3b1d618cbf6677')
            .then(function (results) {
                return results.data.articles;
            })
    }
} 

