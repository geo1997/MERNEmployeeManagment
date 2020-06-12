const Employee = require('../model/Employee')

//add employee
exports.addEmployee = (req,res)=>{
    const newCat = new Employee(req.body);
    newCat.save((err,content) =>{
        if(err){
            return res.status(400).json({
                error:"Unable to add"
            });
        }
        res.status(200).json({message:"successfully Added",content});
    });
};

//retrieve employees
exports.getEmployees = (req,res) =>{
    Employee.find().exec((error,content) =>{
        if(error){
            return res.status(400).json({
                error:"Unable to retrieve employees"
            })
        }
        res.json(content)
    })
}

//find employee based on id passed as a param
exports.findEmployeeById = (req,res) =>{
    Employee.findById(req.params.id)
        .then(employee =>{
            res.json(employee)
        })
        .catch(err => res.status(400).json({
            error:err +" Or no such employee"
        }))
}

//delete employee
exports.deleteEmployee= (req,res) =>{
    Employee.findByIdAndDelete(req.params.id)
        .then(() =>{
            res.json('Employee Deleted')
        })
        .catch(err => res.status(400).json({
            error:err +" Or no such employee"
        }))

}

//update employee
exports.updateEmployee = (req,res) =>{
    Employee.findById(req.params.id)
        .then(employee =>{
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.email = req.body.email;
            employee.basicSal = Number(req.body.basicSal);

            employee.save()
                .then(() => res.json("Employee Updated"))
                .catch(err => res.status(400).json('Error '+err))
        })
        .catch(err => res.status(400).json('Error '+err))
}