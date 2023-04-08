const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:String,
    phone:Number,
    email:String,
    file: String,

})
const Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee