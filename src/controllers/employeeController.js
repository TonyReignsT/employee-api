// const Employee = require("../models/employeeModel");  // Replaced. Now we are using service to run business logic
const employeeService = require("../services/employeeService");

// CREATE
exports.createEmployee = async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
exports.getEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ONE
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);

    !employee
      ? res.status(404).json({ message: "Employee not found" })
      : res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await employeeService.updateEmployee(
      req.params.id,
      req.body,
      { new: true },
    );

    !employee
      ? res.status(404).json({ message: "Employee not found" })
      : res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await employeeService.deleteEmployee(req.params.id);

    !employee
      ? res.status(404).json({ message: "Employee not found" })
      : res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
