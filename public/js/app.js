var app = angular.module('ToDoListApp', []);



app.controller('itemsController', [function() {

  var self = this;
  self.items = {'done':[], 'todo':[]};
  self.newItem = undefined;

  self.addToDo = function() {
    self.items.todo.push(self.newItem);
  };

  self.deleteToDo = function(word) {
    var indexInTodo = self.items.todo.indexOf(word);
    var indexInDone = self.items.done.indexOf(word);
    if (indexInTodo !== undefined) {
      self.items.todo.splice(indexInTodo, 1);
    } else {
      self.items.done.splice(indexInDone, 1);
    }
  };

  self.editToDo = function(word, after) {
    var indexInTodo = self.items.todo.indexOf(word);
    var indexInDone = self.items.done.indexOf(word);
    if (indexInTodo !== undefined) {
      self.items.todo[indexInTodo] = after;
    } else {
      self.items.done[indexInDone] = after;
    }
  };

  self.markDone = function(word) {
    var indexInTodo = self.items.todo.indexOf(word);
    var indexInDone = self.items.done.indexOf(word);
    if (indexInTodo !== undefined) {
      self.items.todo.splice(indexInTodo, 1);
      self.items.done.push(word);
    } else {
      self.items.done.splice(indexInTodo, 1);
      self.items.todo.push(word);
    }
  };

}]);
