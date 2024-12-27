const asyncHandler = require("express-async-handler")
const Todo = require("../models/Todo")

exports.readEmployeeTodo = asyncHandler(async (req, res) => {
    //                                          👇middleware
    const result = await Todo.find({ employee: req.employee })
    res.json({ message: "todo fetch success", result })
})
exports.completeEmployeeTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.tid, { isComplete: true })
    res.json({ message: "todo complete success" })
})

exports.compleTodo = asyncHandler(async (req, res) => {
    //                                          👇middleware
    const output = await Todo.find({ employee: req.employee })

    const result = output.filter(item => item.isComplete == true)
    res.json({ message: "todo fetch success", result })
})