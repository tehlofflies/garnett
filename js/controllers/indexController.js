app.controller('newGames', ['$scope', function($scope) {
	$scope.games = [
	{
		name: 'Jumpjet Rex',
		img: 'http://cdn.akamai.steamstatic.com/steam/apps/329460/header.jpg',
		url: 'http://cdn.akamai.steamstatic.com/steam/apps/329460/header.jpg',
		description: 'A punishing, old school 2-D platformer with a time-trial twist! Players take control of a T-Rex with extraterrestrial jump boots, tasked with saving dino-kind from extinction.',
		genre: 'indie, adventure, racing, platformer',
		price: 14
	},
	{
		name: 'Twin Robots',
		img: 'http://cdn.akamai.steamstatic.com/steam/apps/374230/header.jpg',
		url: 'http://cdn.akamai.steamstatic.com/steam/apps/374230/header.jpg',
		description: 'Rescue your twin and find the way out together!',
		genre: 'action, casual, indie',
		price: 4.99
	},
	{
		name: 'Grass Simulator',
		img: 'http://cdn.akamai.steamstatic.com/steam/apps/331200/header.jpg',
		url: 'http://cdn.akamai.steamstatic.com/steam/apps/331200/header.jpg',
		description: 'Strap it on and lock \'n load in Grass Simulator, where you will Shoot, Loot and MOO! your way through multiple game modes revolved around...GRASS! Grass Simulator will revolutionize the way you look at grass.',
		genre: 'indie, casual, simulation',
		price: 9.99
	},
	{
		name: 'Kidnapped',
		img: 'http://cdn.akamai.steamstatic.com/steam/apps/382300/header.jpg',
		url: 'http://cdn.akamai.steamstatic.com/steam/apps/382300/header.jpg',
		description: 'Kidnapped is a psychological story-driven horror game, featuring emphasis on exploration, puzzle solving and combat. Kidnapped dynamically changes as the player progresses, and aims to unnerve the player. Traverse a two hundred year old manor, dark damp caves, an eerie forest and more.',
		genre: 'adventure, action, indie, horror',
		price: 6.99
	},
	{
		name: 'Zotrix',
		img: 'http://cdn.akamai.steamstatic.com/steam/apps/343280/header.jpg',
		url: 'http://cdn.akamai.steamstatic.com/steam/apps/343280/header.jpg',
		description: 'Zotrix is a modern take on the classic arcade shooter. The game introduces resource trading economy and system of upgrades between number of space stations bringing the classic experience into modern generation. Aliens are attacking and Solar Division Command needs You!',
		genre: 'action, indie, strategy, simulation, RPG',
		price: 12.99
	},
	{
		name: 'Victor Vran',
		img: 'http://cdn.akamai.steamstatic.com/steam/apps/345180/header.jpg?t=1438338190',
		url: 'http://cdn.akamai.steamstatic.com/steam/apps/345180/header.jpg?t=1438338190',
		description: 'Victor Vran is the isometric action-RPG where your skill is just as essential as your character build and gear. Experience intense combat action: dodge, jump and unleash powerful skills to finish off your enemies!',
		genre: 'adventure, action, RPG, indie',
		price: 19.99
	}
	]
}]);

app.controller('rankedGames', ['$scope', function($scope) {
	$scope.games = [
	{
		name: 'Something'
	},
	{
		name: 'Something'
	}
	]
}]);
