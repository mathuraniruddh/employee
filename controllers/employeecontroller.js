var express  =require('express')
var empcollection= require('../model/employeemodel')

// this Endpoint will create a document in data base collection
/*for Adding the Employee you need all the info
of Employee like(FirstName,LastName,Gender,Email,Studio,Designation and DateOfBirth in( yyyy-mm-dd) format)
*/
 exports.createEmployee =  async function(req,res){
    try{
        console.log(req.body)
    var EmpID =(Math.random() + 1).toString(36).substring(7)

    var FirstName = req.body.FirstName;
    var LastName = req.body.LastName;
    var Address =req.body.Address;
    var Gender =req.body.Gender;
    var DateOfBirth = req.body.DateOfBirth;// (yyyy-mm-dd)
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

//This Api will get you all the Employee with their Employee Details
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

//This Api will Update the Employee details
/* This will take (FirstName,LastName,Gender,Email,Studio,Designation and DateOfBirth in( yyyy-mm-dd) format) what you want to update 
and  will take EMPID for the filter condition*/ 
exports.updateEmployeeDetails =  async function(req,res){
    try{
        var EmpID = req.body.EmpID;
        var FirstName = req.body.FirstName;
        var LastName = req.body.LastName;
        var Address =req.body.Address;
        var Gender =req.body.Gender;
        var DateOfBirth = req.body.DateOfBirth;// (yyyy-mm-dd)
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

// This will Delete the Employee from Data base 
/* This will take only Employee ID to Delete an Employee (EmpID)*/ 
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
