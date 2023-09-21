var mongoose =  require('mongoose')
const Schema = mongoose.Schema;

var EmployeeSchema  = new Schema({
 EmpID:String,   
 FirstName : String,
 LastName:String,
 Address: String,
 Gender:String,
 DateOfBirth:Date,
 EmailID:String,
 Studio:String,
 Designation:String,
})

var  Employeeinfo = mongoose.model('EmployeeDetails', EmployeeSchema);
module.exports = Employeeinfo ;