(function() {
  'use strict';
  /**
    * @ngcontroller
    * @name yeoangularApp.controller: TodosCtrl
    * @description
    * # TodosCtrl
    * Controller to handle To do lists
    */
  angular.module('yeoangularApp')
    .controller('TodosCtrl', function($scope, localStorageService) {

      var todosInStore = localStorageService.get('todoList');

      $scope.todoList = todosInStore || [];

      $scope.$watch('todoList', function () {
        localStorageService.set('todoList', $scope.todoList);
      }, true);

      $scope.addTodo = function() {
        var todo = {};

        todo.item = $scope.todo;
        $scope.todoList.push(todo);
        $scope.todo = '';
      };
      $scope.removeTodo = function(index) {
        $scope.todoList.splice(index, 1);
      };
    }
  );
})();
