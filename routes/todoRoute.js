const express = require("express");
const { seeTodo } = require("../controller/todoController");
const router = express.Router();

router.get("/todo", seeTodo);

module.exports = router;
