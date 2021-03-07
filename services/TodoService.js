const Todo = require('../models/todo');

class TodoService {
    async getAll() {
        const todos = await Todo.findAll();

        return todos;
    }

    async createTodo(title) {
        const todo = await Todo.create({
            title,
            done: false
        });

        return todo;
    }

    async editTodo(id, todo) {
        const editedTodo = await Todo.findByPk(+id);

        editedTodo.done = todo.done;
        await editedTodo.save();

        return editedTodo;
    }

    async deleteTodo(id) {
        const todos = await Todo.findAll({
            where: {
                id: +id
            }
        });
        const deletedTodo = {...todos[0]};
        await todos[0].destroy();

        return deletedTodo;
    }
}

module.exports = new TodoService();