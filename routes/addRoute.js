const express = require("express");
const { addTodo } = require("../controller/todoController");
const router = express.Router();
router.post("/todo", addTodo);
module.exports = router;
