var express  =require('express')
var empcollection= require('../model/employeemodel')

 exports.createEmployee =  async function(req,res){
    try{
        console.log(req.body)
    var count = 0
    var EmpID =(Math.random() + 1).toString(36).substring(7)

    var FirstName = req.body.FirstName;
    var LastName = req.body.LastName;
    var Address =req.body.Address;
    var Gender =req.body.Gender;
    var DateOfBirth = req.body.DateOfBirth;
    var EmailID =req.body.EmailID;
    var Studio = req.body.Studio;
    var Designation = req.body.Designation;

    var new_emp = new empcollection({
        EmpID:EmpID,
        FirstName: FirstName,
        LastName:LastName,
        Address : Address,
        Gender: Gender,
        DateOfBirth:new Date(DateOfBirth),
        EmailID: EmailID,
        Studio:Studio,
        Designation:Designation
      });
      await  new_emp.save();

      res.status(200).json({message:" Employee  created Successfully" })
    }
   catch(e){
    console.log(e)
    res.status(500).json({message:"Something went wrong"})
   } 
}

exports.getEmployee =  async function(req,res){
    try{
       
      var EmpDetails =  await empcollection.find({})
       
      res.status(200).json({"Result":EmpDetails })
    }
   catch(e){
    console.log(e)
    res.status(500).json({message:"Something went wrong"})
   } 
}


exports.updateEmployeeDetails =  async function(req,res){
    try{
        var EmpID = req.body.EmpID;
        var FirstName = req.body.FirstName;
        var LastName = req.body.LastName;
        var Address =req.body.Address;
        var Gender =req.body.Gender;
        var DateOfBirth = req.body.DateOfBirth;
        var EmailID =req.body.EmailID;
        var Studio = req.body.Studio;
        var Designation = req.body.Designation;
      
       await empcollection.updateOne({EmpID:EmpID},{$set:{FirstName: FirstName,
        LastName:LastName,
        Address : Address,
        Gender: Gender,
        DateOfBirth:new Date(DateOfBirth),
        EmailID: EmailID,
        Studio:Studio,
        Designation:Designation}},{upsert:true})
       
      res.status(200).json({"Message":"Employee Details update Successfully" })
    }
   catch(e){
    console.log(e)
    res.status(500).json({message:"Something went wrong"})
   } 
}


exports.deleteEmployee =  async function(req,res){
    try{
       var EmpID = req.body.EmpID
       await empcollection.deleteOne({EmpID:EmpID})
       
      res.status(200).json({"Message":"Employee Deleted Successfully" })
    }
   catch(e){
    console.log(e)
    res.status(500).json({message:"Something went wrong"})
   } 
}
