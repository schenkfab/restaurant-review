angular.module('myApp').controller('mainCtrl', function($scope, $http) {

	$scope.restaurants = function(restaurantName) {
		var apiUrl = 'http://localhost:8000/api/v1/restaurants?filter={"where": {"name":{"like": "' + restaurantName + '"}}}';
		return $http.get(apiUrl)
			.then(function(response) {
				return response.data.map(function(item){
					return item.name + ' (' + item.location + ')';
				});
			});
	};

});