const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')

require('./config');
const AuthRoute = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors());


//all the routes


app.use('/',AuthRoute)

app.listen(5000);
