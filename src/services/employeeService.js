const Employee = require("../models/employeeModel");

// CREATE
const createEmployee = async (data) => {
  return await Employee.create(data);
};

// GET ALL
const getEmployees = async () => {
  return await Employee.find();
};

// GET ONE
const getEmployeeById = async (id) => {
  return await Employee.findById(id);
};

// UPDATE
const updateEmployee = async (id, data) => {
  return await employeeService.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
const deleteEmployee = async (id) => {
  return await Employee.findByIdAndDelete(id);
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
