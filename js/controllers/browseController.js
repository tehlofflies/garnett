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
		genres: ['action']
	},
	{
		name: "Assassin's Creed",
		dev: 'Ubisoft',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		genres: ['action', 'adventure']
	}];

	$scope.activeFilter = [];

	$scope.addFilter = function(filterValue) {
		var i = $.inArray(filterValue, $scope.activeFilter);
		if (i > -1) {
			$scope.activeFilter.splice(i,1);
		}
		else {
			$scope.activeFilter.push(filterValue);
		}
	}

	$scope.gameFilter = function(game) {
		var filtered = false;
		if ($scope.activeFilter.length > 0) {
			for (g in game.genres) {
				if ($.inArray(g, $scope.activeFilter) > -1) {
					filtered = true;
				}
			}
		}
		console.log(filtered);
		if (filtered == false) {
			return game;
		}
		else {
			return;
		}
	}
}])