angular.module('myApp').controller('mainCtrl', function($scope, $http) {

	$scope.showDetails = false;
	$scope.enableSearchButton = true;

	$scope.options = {
		types: '(cities)'
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

	$scope.setDetails = function (index) {
		var request = {
			placeId: $scope.restaurants[index].place_id
		};
		service = new google.maps.places.PlacesService(document.createElement('div'));
		service.getDetails(request, callback);

		function callback(place, status) {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				console.log(place);
				$scope.details = place;
				$scope.showDetails = true;
				$scope.$apply();
			}
		}
	};

	$scope.submit = function() {
		var d = new Date();
		var n = d.getTime() / 1000;
		$scope.review.time = n;
		$scope.details.reviews.unshift($scope.review);
		$scope.review = {};
	};
});