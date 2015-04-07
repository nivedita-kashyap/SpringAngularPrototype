'use strict';
var LoginController = function($scope, $location, $window) {
	// page.setPage("Login","login-layout");
	 $scope.user = {};
	 $scope.isLogin = false;
	 $scope.error = false
	$scope.login=function()
    {
		var username = $scope.username;
		var password = $scope.password;
        if(username=="admin" && password=="admin123")
        {
           /* page.setUser($scope.user);*/
            $location.path( "/cars" );
        	$scope.isLogin = true;
        }
        else
        {
        	$location.path( "/login" );
            $scope.error=true;
        	$scope.isLogin = false;
        }
    }
};

