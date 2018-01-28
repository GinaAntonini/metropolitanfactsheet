"use strict";

app.controller("DashboardCtrl", function($location, $rootScope, $scope){
    
    $scope.getToPropertyInfo = () => {
        $location.path("/propertyinfo");
    };

    $scope.getToReports = () => {
        $location.path("/reports");
    };

});