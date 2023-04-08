const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://email-to-linkedin-data.p.rapidapi.com/',
  params: {email: 'p_kat@casema.nl'},
  headers: {
    'X-RapidAPI-Key': '3064e93a75msh4290adb8a28fe61p1a8456jsn4ac87731a7a1',
    'X-RapidAPI-Host': 'email-to-linkedin-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});