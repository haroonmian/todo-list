const express = require("express");
const {
 createTodo,
 getAllTodos,
 updateTodo,
 deleteTodo
} = require("../controllers/todoController");

const router = express.Router();
router.post("/createTodo", createTodo);
router.post("/updateTodo", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

router.get("/getAllTodos", getAllTodos);


module.exports = router;
