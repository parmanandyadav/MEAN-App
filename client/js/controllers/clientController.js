var app = angular.module("myApp", ['ngResource']);

app.controller("testcontroller", ['$scope', '$resource', function($scope, $resource) {
    var Claims = $resource('/api/claims');
    
    Claims.query(function(results){
        $scope.claimants = results;
    });
    
    $scope.addClaimantName = function(){
        var claims = new Claims();
        claims.name = $scope.ClaimantName;
        claims.$save(function(result){
            $scope.claimants.push(result);
        });
        $scope.ClaimantName='';
    }
}]);