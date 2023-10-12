const db = require("./connection");

//! create database
const createDatabase = (req, res) => {
  let sql = "CREATE DATABASE if not exists nodemysql";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created...");
  });
};

//! create table
const createTable = (req, res) => {
  let createTableSQL =
    "CREATE TABLE if not exists Employee(id INT AUTO_INCREMENT PRIMARY KEY,Employee_Full_Name VARCHAR(255),Job_Title VARCHAR(255),Phone_Number VARCHAR(255),Email VARCHAR(255),Address VARCHAR(255),City VARCHAR(255),State VARCHAR(255),Primary_Emergency_Contact VARCHAR(255),Phone_Number1 VARCHAR(255),Relationship1    VARCHAR(255),Secondary_Emergency_Contact VARCHAR(255),Phone_Number2 VARCHAR(255),Relationship2 VARCHAR(255))";

  let useDatabaseSQL = "USE nodemysql";

  //  Check if the database exists, then create the table
  db.query(useDatabaseSQL, (err) => {
    if (err) throw err;

    db.query(createTableSQL, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Table created...");
    });
  });
};

//!Insert New Employee
const insertEmployee = (req, res) => {
  let post = {
    Employee_Full_Name: "John Doe",
    Job_Title: "back End Development",
    Phone_Number: "1245854121",
    Email: "john@Gmail,com",
    Address: "abc123 Main",
    City: "new york",
    State: "washington",
    Primary_Emergency_Contact: "Me1",
    Phone_Number1: "4587986532",
    Relationship1: "male1",
    Secondary_Emergency_Contact: "me2",
    Phone_Number2: "2012012365",
    Relationship2: "male2",
  };
  let sql = "INSERT INTO Employee SET ?";
  let query = db.query(sql, post, (err) => {
    if (err) throw err;
    console.log(query.sql);
    res.send("data inserted");
  });
};

// //!Get employees
const getEmployee = (req, res) => {
  const page = req.query.page || 1;
  const pageSize = 10;

  const offset = (page - 1) * pageSize;

  let sql = `SELECT * FROM Employee LIMIT ${pageSize} OFFSET ${offset}`;

  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
};

//!Update employee
const updateEmployee = (req, res) => {
  let name = "updated Employee Name";
  let sql = `UPDATE Employee SET Employee_Full_Name = '${name}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("Employee data has been successfully updated");
  });
};
//!Delete employee
const deleteEmployee = (req, res) => {
  let sql = `DELETE FROM Employee WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("Employee data has been successfully deleted");
  });
};

module.exports = {
  createDatabase,
  createTable,
  insertEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
