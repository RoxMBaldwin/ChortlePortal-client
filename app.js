(function (){
  'use strict';

  // angular
  // .module('chortlePortal',[])

  var app = angular.module('chortlePortal', []);

  app.controller('formController', function($scope, $document){

    $scope.Clear = function(){
      angular.forEach(angular.element($document[0].querySelectorAll('input[type=text], input[type=email], input[type=password]')), function(elem, index){
        console.log(elem.value);
        elem.value='';
      });
      $scope.myForm.$setPristine();
    }
  });

})();
