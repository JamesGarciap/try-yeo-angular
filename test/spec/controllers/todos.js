'use strict';

describe('Controller: TodosCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoangularApp'));

  var TodosCtrl,
   scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodosCtrl = $controller('TodosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of tasks to the scope', function () {
    expect(scope.todoList.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todoList.length).toBe(1);
  });

  it('should add then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todoList.length).toBe(0);
  });
});
