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
    var username = req.body.username
    var password = req.body.password
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
  

  
  


module.exports ={
    register,login,instagram,Linkedin,Truecaller
}