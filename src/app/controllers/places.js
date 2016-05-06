angular.module('myApp').controller('placesCtrl', function($scope, $http) {

	$scope.showDetails = true;

	$scope.options = {
		types: 'establishment'
	};

	$scope.search = function () {

		console.log($scope.details);

		var loc = 
			new google.maps.LatLng(	$scope.details.geometry.location.lat(),
									$scope.details.geometry.location.lng());

		service = new google.maps.places.PlacesService(document.createElement('div'));
		service.nearbySearch({location: loc, radius:4000, type: 'restaurant'}, a => {
			console.log(a);
			$scope.restaurants = a;
			$scope.$apply();
		});
	};

	$scope.submit = function() {
		$scope.details.reviews.unshift($scope.review);
		$scope.review = {};
	};
});