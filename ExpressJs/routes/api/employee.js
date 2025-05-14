const express = require('express');
const router = express.Router();
const employee = require('../../controller/employeeController');


router.route('/')
    .get(employee.employeeLogin)
    .post(employee.employeeCreate)
    .put(employee.employeeUpdate)
    .delete(employee.employeeDelete)
router.get('/:id',employee.getEmployee)
module.exports = router;