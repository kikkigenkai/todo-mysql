const TodoService = require('../services/TodoService');

class TodoController {
    async getAll(req, res) {
        try {
            const todos = await TodoService.getAll();
    
            res.status(200).json(todos);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'error'
            });
        }
    }

    async createTodo(req, res) {
        try {
            const todo = await TodoService.createTodo(req.body.title);
    
            res.status(201).json({ todo });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'error'
            });
        }
    }

    async editTodo(req, res) {
        try {
            const todo = await TodoService.editTodo(req.params.id, req.body);
    
            res.status(200).json({todo});
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'error'
            });
        }
    }

    async deleteTodo(req, res) {
        try {
            const todos = await TodoService.deleteTodo(req.params.id);
    
            res.status(204).json({ todos });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'error'
            });
        }
    }
}

module.exports = new TodoController();