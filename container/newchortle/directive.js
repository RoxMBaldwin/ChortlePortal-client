(function() {
  'use strict';
  angular
    .module('chortlePortal')
    .directive("fileread", [function () {
      return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
          element.bind("change", function (changeEvent) {
              scope.$apply(function () {
                  scope.fileread = changeEvent.target.files[0];
              });
          });
        }
      }
    }])
})();
