const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (fastify) => {
  fastify.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  fastify.post('/api/todos', todosController.create);
  fastify.get('/api/todos', todosController.list);
  fastify.get('/api/todos/:todoId', todosController.retrieve);
  fastify.put('/api/todos/:todoId', todosController.update);
  fastify.delete('/api/todos/:todoId', todosController.destroy);

  //fastify.post('/api/todos/:todoId/items', todoItemsController.create);
  fastify.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  fastify.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  fastify.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};