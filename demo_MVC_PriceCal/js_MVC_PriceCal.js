function CalcController($scope){
    $scope.price = 1;
    $scope.num=2;
    $scope.totalPrice = function(){
        return $scope.price * $scope.num;
    }
}
var app = angular.module("app",[]); //第一个参数是前面定义的ng-app的名字
app.controller("CalcController",CalcController);
