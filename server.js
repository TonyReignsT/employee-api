const app = require("./app");
const connectDB = require("./config/db");
const employee = require("./src/models/employeeModel");

const PORT = process.env.PORT || 5000;

// testing the model
// const testEmployee = async () => {
//   const emp = await employee.create({
//     firstName: "Regns",
//     lastName: "Tony",
//     email: "skashdsjsvdbxvdbvsbd@test.com",
//     phone:"0757568845",
//     department: "Finance",
//     salary: 45000,
//     hireDate: "2015-01-04"
//   });

//   console.log(emp);
// };

// connect DB

connectDB();

// function call
// testEmployee();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
