
const data = {
    employee : require('../model/employee'),
    setEmployee:function(data){
        this.employee = data
    }
};

const employeeLogin = (req,res) => {
    res.json({
        "userName":req.body.userName
    });
}
const employeeCreate = (req,res) => {
    const createEmployee = {
        id:data.employee[data.employee.length - 1].id + 1 || 1,
        userName: req.body.userName
    }
    if(!createEmployee.userName)
        return res.status(400).json({message:"userName empty"})
    data.setEmployee([...data.employee,createEmployee]);
    res.status(201).json(data.employee);
}
const employeeUpdate = (req,res) => {
    const employee = data.employee.find(emp => emp.id === parseInt(req.body.id));
    if(!employee)
        return res.status(400).json({message:`Employer id ${req.body.id} not found`})
    if(req.body.userName)
        employee.name = req.body.userName;
    const filteredArray = data.employee.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray,employee];
    data.setEmployee(unsortedArray.sort((a,b)=>a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
    res.json(data.employee);
}
const employeeDelete = (req,res) => {
    const employee = data.employee.find(emp => emp.id === parseInt(req.body.id))
    if(!employee)
        return res.status(400).json({message:`Employee Id ${req.body.id} not found`})
    const filteredArray = data.employee.filter(emp => emp.id !== parseInt(req.body.id))
    data.setEmployee([...filteredArray]);
    res.json(data.employee);
}

const getEmployee = (req,res) => {
    res.json(data.employee.filter(emp => 
        emp.id === parseInt(req.params.id)
    ));
}

module.exports = {
    employeeLogin,
    employeeCreate,
    employeeUpdate,
    employeeDelete,
    getEmployee
}