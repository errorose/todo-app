const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

// GET /api/todos - show all todos (Read)
router.get('/todos', controller.readTodos);

// POST /api/todo - create a new todo (Create)
router.post('/todo', controller.createTodo);

// PATCH /api/todo/:todoId - edit a specific todo (Update)
router.patch('/todo/:todoId', controller.updateTodo);

// DELETE /api/todo/:todoId - remove a specific todo (Delete)
router.delete('/todo/:todoId', controller.deleteTodo);

module.exports = router;