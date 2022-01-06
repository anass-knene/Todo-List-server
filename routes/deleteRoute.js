const express = require("express");
const { deleteTodo } = require("../controller/todoController");
const router = express.Router();

router.delete("/todo/:id", deleteTodo);

module.exports = router;
