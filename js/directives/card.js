app1.directive('card', function() {
  return {
    restrict: 'E',
    scope: {
      game: '='
    },
      templateUrl: 'js/directives/card.html'
  };
});