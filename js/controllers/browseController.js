browse.controller('browseController', ['$scope', function($scope){
	$scope.games = [
	{
		name: 'Fez',
		dev: 'Polytron',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		genres: ['adventure']
	},
	{
		name: 'From Dust',
		dev: 'Ubisoft',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		genres: ['adventure']
	},
	{
		name: 'Mafia II',
		dev: 'Someone',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		genres: ['action', 'RPG', 'FPS']
	},
	{
		name: "Assassin's Creed Unity",
		dev: 'Ubisoft',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		genres: ['action', 'adventure']
	}];

	$scope.activeFilters = [];

	$scope.addFilter = function(filterValue) {
		var i = $.inArray(filterValue, $scope.activeFilters);
		if (i > -1) {
			$scope.activeFilters.splice(i,1);
		}
		else {
			$scope.activeFilters.push(filterValue);
		}
	}

	$scope.gameFilter = function(game) {
		if ($scope.activeFilters.length > 0) {
			for (i = 0; i < game.genres.length; i++) {
				if ($.inArray(game.genres[i], $scope.activeFilters) > -1) {
					return game;
				}
			}
			return;
		}
		return game;
	}
}])