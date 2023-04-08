const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require(  'jsonwebtoken'  )
const axios =require('axios')

const register = (req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        let user = new User({
            name: req.body.name,
            email:req.body.email,
            password:hashedPass,

        })
        if(req.file){
            user.file = req.file.path
        }
        user.save()
        .then(user =>{
            return res.json({
                message:'user added'
            })
        })
        .catch(error=>{
            res.json({
                error:"an error occurred"
            })
        })
    })

}

const login = (req,res,next)=>{
    const username = req.body.username
    const password = req.body.password
    User.findOne({$or:[{email:username},{name:username}]})
    .then(user=>
        {
            console.log(user.password)
            if(user){
                bcrypt.compare(password,user.password, function(err,result){
                    if(err){
                        res.json({
                            error:err
                        })
                    }
                    if(result){
                        let token = jwt.sign({name:user.name},'verySecretValue',{expiresIn:'1h'})
                        res.json({
                            message:'Login Successful',
                            token
                        })
                    }
                    else{
                        res.json({
                            message:"Passwords don't match"
                        })
                    }
                })
            }
            else{
                res.json({
                    message:"no such user"
                })
            }
        })
}
const logout = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      error: 'Authorization header missing'
    });
  }
  const token = authHeader.split(' ')[1];
  // You can also remove the token from the client-side here if you want
  jwt.verify(token, 'verySecretValue', (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: 'Invalid token'
      });
    }
    req.token = null; // or remove the token from the client-side
    res.json({
      message: 'Logout successful'
    });
  });
};


// add this route to your express app


const instagram = (req, res, next) => {
    const { user } = req.body;
  
    const options = {
      method: 'GET',
      url: 'https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/',
      params: { user },
      headers: {
        'X-RapidAPI-Key': '3064e93a75msh4290adb8a28fe61p1a8456jsn4ac87731a7a1',
        'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
      }
    };
  
    axios.request(options).then(function (response) {
      return res.json({
        message: response.data
      });
    }).catch(function (error) {
      console.error(error);
    });
  };


  const Linkedin = (req, res, next) => {
    const { email } = req.body;
  
    const options = {
      method: 'GET',
      url: 'https://email-to-linkedin-data.p.rapidapi.com/',
      params: { email },
      headers: {
        'X-RapidAPI-Key': '3064e93a75msh4290adb8a28fe61p1a8456jsn4ac87731a7a1',
        'X-RapidAPI-Host': 'email-to-linkedin-data.p.rapidapi.com'
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
          error: 'An error occurred while fetching LinkedIn data for the given email'
        });
      });
  };
  


  const Truecaller = (req, res, next) => {
    const { phone, countryCode } = req.body;
  
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
  
  const emailRisk = (req, res, next) => {
    const { email } = req.body;
    const encodedParams = new URLSearchParams();
    encodedParams.append("email", email);

    //hetanssh apikey
    const options = {
      method: 'POST',
      url: 'https://email-risk-scoring.p.rapidapi.com/deep_email_check',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-API-KEY': '77265bbfec66e3e66b68c59f53f37f981c670fafb91ebe245a',
        'X-RapidAPI-Key': '3064e93a75msh4290adb8a28fe61p1a8456jsn4ac87731a7a1',
        'X-RapidAPI-Host': 'email-risk-scoring.p.rapidapi.com'
      },
        data: encodedParams
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
          error: 'An error occurred while fetching LinkedIn data for the given email'
        });
      });
    }
  

const phoneRisk = (req,res,next)=>{
  const {phone} = req.body
  const encodedParams = new URLSearchParams();
  encodedParams.append("phone", phone);

  const options = {
    method: 'POST',
    url: 'https://phone-risk-scoring.p.rapidapi.com/deep_phone_check',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-API-KEY': '77265bbfec66e3e66b68c59f53f37f981c670fafb91ebe245a',
      'X-RapidAPI-Key': '3064e93a75msh4290adb8a28fe61p1a8456jsn4ac87731a7a1',
      'X-RapidAPI-Host': 'phone-risk-scoring.p.rapidapi.com'
    },
    data: encodedParams
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
      error: 'An error occurred while fetching LinkedIn data for the given email'
    });
  });
}

module.exports ={
    register,login,instagram,Linkedin,Truecaller,emailRisk,phoneRisk,logout
}