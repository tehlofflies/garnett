browse.controller('browseController', ['$scope', function($scope){
	$scope.games = [
	{
		name: 'Fez',
		dev: 'Polytron',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		filters: ['adventure', 'sp'],
		cover: 'http://cdn.akamai.steamstatic.com/steam/apps/224760/header.jpg?t=1383936243'
	},
	{
		name: 'From Dust',
		dev: 'Ubisoft',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		filters: ['adventure', 'sp'],
		cover: 'http://cdn.akamai.steamstatic.com/steam/apps/33460/header.jpg?t=1381439358'
	},
	{
		name: 'Mafia II',
		dev: 'Someone',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		filters: ['action', 'rpg', 'fps', 'sp'],
		cover: 'http://cdn.akamai.steamstatic.com/steam/apps/50130/header.jpg?t=1438795967'
	},
	{
		name: "Assassin's Creed Unity",
		dev: 'Ubisoft',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
		filters: ['action', 'adventure', 'sp', 'mp'],
		cover: 'http://cdn.akamai.steamstatic.com/steam/apps/289650/header.jpg?t=1421437902'
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
			for (i = 0; i < game.filters.length; i++) {
				if ($.inArray(game.filters[i], $scope.activeFilters) > -1) {
					return game;
				}
			}
			return;
		}
		return game;
	}
}])