const axios = require('axios');

const getTruecallerDetails = (req, res, next) => {
  const { phone, countryCode } = req.query;

  const options = {
    method: 'GET',
    url: 'https://truecaller4.p.rapidapi.com/api/v1/getDetails',
    params: { phone, countryCode },
    headers: {
      'X-RapidAPI-Key': '3064e93a75msh4290adb8a28fe61p1a8456jsn4ac87731a7a1',
      'X-RapidAPI-Host': 'truecaller4.p.rapidapi.com'
    }
  };

  axios.request(options)
    .then(function (response) {
      return res.json({
        message: response.data
      });
    })
    .catch(function (error) {
      console.error(error);
      return res.status(500).json({
        error: 'An error occurred while fetching Truecaller details for the given phone number'
      });
    });
};

module.exports = getTruecallerDetails;
