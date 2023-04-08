
const Employee = require('../models/Employee')

//Show list of employees
const index =(req,res,next)=>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:error
        })
    })

}

const show =async(req,res,next)=>{
    let employeeId = req.body.email
    const response = await Employee.find({email:employeeId}).exec()
    return response.json()
}

const storeemp=(req,res,next)=>{
    let employee = new Employee({
        name : req.body.name,
        email: req.body.email,
        phone : req.body.phone,
    })
    if(req.file){
        user.file = req.file.path
    }
    employee.save()
    .then(response =>{
        return res.json({
            message:'Employee added'
        })
    })
    .catch(error=>{
        res.json({
            error:"an error occurred"
        })
    })
}

const update=(req,res,next)=>{
    let employeeId = req.body.email
    let updateData ={
        name :req.body.name,
        email: req.body.email,
        phone : req.body.phone, 
    }
    Employee.findOneAndUpdate({email:employeeId},{$set: updateData})
    .then(response =>{
        return res.json({
            message:'Employee updated'
        })
    })
    .catch(error=>{
        res.json({
            error:"an error occurred"
        })
    })
}
const destroy =(req,res,next)=>{
    let employeeId = req.body.email
    Employee.findOneAndRemove({email:employeeId})
    .then(response =>{
        return res.json({
            message:'Employee updated'
        })
    })
    .catch(error=>{
        res.json({
            error:"an error occurred"
        })
    })
}

module.exports = {update,index,show,storeemp,destroy}