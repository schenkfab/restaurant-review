angular.module('myApp').controller('placesCtrl', function($scope) {

	$scope.showDetails = true;
	$scope.enableSearchButton = false;

	$scope.options = {
		types: 'establishment'
	};

	$scope.submit = function() {
		var d = new Date();
		var n = d.getTime() / 1000;
		$scope.review.time = n;
		$scope.details.reviews.unshift($scope.review);
		$scope.review = {};
	};
});