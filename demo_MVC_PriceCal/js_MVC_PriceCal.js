function CalcController($scope){
    $scope.price = 1;
    $scope.num=2;
    $scope.totalPrice = function(){
        return $scope.price * $scope.num;
    }
}
var app = angular.module("app",[]);
app.controller("CalcController",CalcController);