var express = require('express');
var router =express.Router();
var employeecontroller = require('../controllers/employeecontroller')

router.post('/createEmployee', employeecontroller.createEmployee)
router.get('/getEmployee', employeecontroller.getEmployee)
router.put("/updateEmployeeDetails",employeecontroller.updateEmployeeDetails)
router.delete("/deleteEmployee",employeecontroller.deleteEmployee)
module.exports = router