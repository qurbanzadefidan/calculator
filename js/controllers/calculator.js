var app = angular.module('calculator-app', ["calculator-app.controller"]);

var controllers = angular.module('calculator-app.controller', [])

.controller('calculator', function($scope, $window) {

	$scope.total = 0;
	$scope.subTotal = "";
	$scope.nextAction = "";

	$scope.addToSubTotal = function(i) {

		if ($scope.subTotal.length >= 12) {
			return;
		}

		if ($scope.nextAction == "") {
			$scope.total = 0;
		}

		$scope.subTotal = $scope.subTotal + "" + i;
	};

	$scope.addDot = function() {

		if (!$scope.subTotal.includes(".")) {
			$scope.subTotal = $scope.subTotal + ".";
		}
	};

	$scope.operetionClicked = function(operation) {

		if ($scope.nextAction == "") {
			$scope.nextAction = "+";
		}

		this.result();
		$scope.nextAction = operation;
	}

	$scope.clear = function() {
		$scope.total = 0;


		clearTemporarayValues();
	}

	$scope.result = function() {

		if ($scope.subTotal == "" || isNaN(parseFloat($scope.subTotal))) {
			return;
		}

		switch($scope.nextAction) {
		case "+":
			$scope.total = $scope.total + parseFloat($scope.subTotal);
			break;
		case "-":
			$scope.total = $scope.total - parseFloat($scope.subTotal);
			break;
		case "*":
			$scope.total = $scope.total * parseFloat($scope.subTotal);
			break;
		case "/":
			$scope.total = $scope.total / parseFloat($scope.subTotal);
			break;
		default:
			return;
		}

		if (isNaN($scope.total)) {
			$scope.total = 0;
		}

		if ($scope.total > 10000000) {
			$scope.total = 10000000;
		}

		$scope.total = Math.round($scope.total * 100) / 100

	
		clearTemporarayValues();
	}

	clearTemporarayValues = function() {
		$scope.subTotal = "";
		$scope.nextAction = "";
	}
})
