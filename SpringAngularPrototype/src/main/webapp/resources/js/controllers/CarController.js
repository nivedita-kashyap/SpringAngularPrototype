'use strict';

/**
 * CarController
 * @constructor
 */
var CarController = function($scope, $http) {
	
	$scope.car1 = true;
	$scope.car2 = false;
	$scope.car3 = false;
	
    $scope.fetchCarsList = function() {
        $http.get('cars/carlist.json').success(function(carList){
            $scope.cars = carList;
        });
    };

    $scope.addNewCar = function(newCar) {
        $http.post('cars/addCar/' + newCar).success(function() {
            $scope.fetchCarsList();
        });
        $scope.carName = '';
    };

    $scope.removeCar = function(car) {
        $http.delete('cars/removeCar/' + car).success(function() {
            $scope.fetchCarsList();
        });
    };

    $scope.removeAllCars = function() {
        $http.delete('cars/removeAllCars').success(function() {
            $scope.fetchCarsList();
        });

    };

    $scope.fetchCarsList();
    
    $scope.switch1 = function() {
		$scope.car1 = true;
		$scope.car2 = false;
		$scope.car3 = false;		
	}
    $scope.switch2 = function() {
		$scope.car1 = false;
		$scope.car2 = true;
		$scope.car3 = false;		
	}
    $scope.switch3 = function() {
		$scope.car1 = false;
		$scope.car2 = false;
		$scope.car3 = true;		
	}
};