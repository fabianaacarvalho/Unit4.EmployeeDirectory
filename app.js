import express from "express";

const app = express();

export default app;

import employees from "./db/employees.js";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.route("/employees").get((req, res) => {
  res.send(employees);
});

app.route("/employees/random").get((req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  if (!randomEmployee) {
    return res.status(500).send("No employee found");
  }

  res.send(randomEmployee);
});

app.route("/employees/:index").get((req, res) => {
  const { index } = req.params;
  const employee = employees.find((emp) => emp.id === Number(index));

  if (!employee) {
    return res.status(404).send("No employee with this ID.");
  }

  res.send(employee);
});
