app1.controller('browseController', ['$scope', function($scope){
	$scope.games = [
	{
		name: 'Fez',
		dev: 'Polytron',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9'],
	},
	{
		name: 'From Dust',
		dev: 'Ubisoft',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9']
	},
	{
		name: 'Mafia II',
		dev: 'Someone',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9']
	},
	{
		name: "Assassin's Creed",
		dev: 'Ubisoft',
		ratings: ['6.5', '9.25', '7.29', '7', '5', '9']
	}]
}])