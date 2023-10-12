const express = require("express");
const userRouter = express.Router();

const {
  createDatabase,
  createTable,
  insertEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controller");

userRouter.get("/createdatabase", async (req, res) => {
  await createDatabase(req, res);
});
userRouter.get("/createtable", async (req, res) => {
  await createTable(req, res);
});
userRouter.get("/insertEmployee", async (req, res) => {
  await insertEmployee(req, res);
});
userRouter.get("/getemployee", async (req, res) => {
  await getEmployee(req, res);
});
userRouter.get("/updateemployee/:id", async (req, res) => {
  await updateEmployee(req, res);
});
userRouter.get("/deleteemployee/:id", async (req, res) => {
  await deleteEmployee(req, res);
});

module.exports = userRouter;
