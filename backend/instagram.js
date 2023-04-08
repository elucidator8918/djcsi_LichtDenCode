const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/',
  params: {user: 'hetens_finally'},
  headers: {
    'X-RapidAPI-Key': '3064e93a75msh4290adb8a28fe61p1a8456jsn4ac87731a7a1',
    'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});