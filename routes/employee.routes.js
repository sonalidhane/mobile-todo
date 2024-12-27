const { readEmployeeTodo, completeEmployeeTodo, compleTodo } = require("../contorllers/employee.controller")

const router = require("express").Router()
router
    .get("/read/todos", readEmployeeTodo)
    .put("/update/todo/:tid", completeEmployeeTodo)
    .get("/complete/todos", compleTodo)

module.exports = router