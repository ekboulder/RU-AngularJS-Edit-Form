//Setting an Angular module: myApp
angular.module ('myApp',[])

//Defining the Controller function: mainControllerFunc
var mainControllerFunc = function ($scope, $timeout) {
	$scope.profileFirstName = 'Edouard'
	$scope.profileLastName = 'Khoukaz'
	$scope.profileNumber = '646 283 7464'

	$scope.inputVisibility = false

	$scope.editingHandler = function (event) {
		// event.stopPropagation()
		$scope.inputVisibility = !$scope.inputVisibility
		console.log($scope.inputVisibility)
		if ($scope.inputVisibility) {
			$timeout(function(){
				document.getElementById('inputFocus').focus()
			},0)
		}

	}

	$scope.stopPropagation = function (event) {
		event.stopPropagation()
	}



}

//Registering the controller: mainController
angular.module('myApp').controller('mainController',['$scope','$timeout', mainControllerFunc])

