clearbank.controller('transfersController',['$scope','$cookies', function($scope,$cookies){

	    
	  $scope.accName = localStorage.getItem('customerName');
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
    
	}
]);