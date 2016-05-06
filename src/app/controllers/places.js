angular.module('myApp').controller('placesCtrl', function($scope) {

	$scope.showDetails = true;
	$scope.enableSearchButton = false;

	$scope.options = {
		types: 'establishment'
	};

	/*$scope.search = function () {
		var loc = 
			new google.maps.LatLng(	$scope.details.geometry.location.lat(),
									$scope.details.geometry.location.lng());

		service = new google.maps.places.PlacesService(document.createElement('div'));
		service.nearbySearch({location: loc, radius:4000, type: 'restaurant'}, a => {
			$scope.restaurants = a;
			$scope.$apply();
		});
	};*/

	$scope.submit = function() {
		var d = new Date();
		var n = d.getTime() / 1000;
		$scope.review.time = n;
		$scope.details.reviews.unshift($scope.review);
		$scope.review = {};
	};
});