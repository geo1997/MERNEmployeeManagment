const express = require('express');
const router = express.Router();

const {addEmployee,getEmployees,deleteEmployee,findEmployeeById,updateEmployee} = require('../controllers/Employee');

router.post("/employee/add", addEmployee);
router.get("/employees",getEmployees)
router.get("/employee/:id",findEmployeeById)
router.delete("/delete/emp/:id",deleteEmployee);
router.put("/update/emp/:id",updateEmployee);


module.exports = router;