const { Router } = require('express');
const TodoController = require('../controllers/TodoController');
const router = Router();



router.get('/', TodoController.getAll());
router.post('/', TodoController.createTodo());
router.put('/:id', TodoController.editTodo());
router.delete('/:id', TodoController.deleteTodo());

module.exports = router;