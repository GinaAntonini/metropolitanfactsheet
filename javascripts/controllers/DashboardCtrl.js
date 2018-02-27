"use strict";

app.controller("DashboardCtrl", function($location, $rootScope, $scope){
    
    $scope.getToSearch = () => {
        $location.path("/search");
    };

    $scope.getToViewProperties = () => {
        $location.path("/viewproperties");
    };

    $scope.getToReports = () => {
        $location.path("/reports");
    };
    
    $scope.getToVendors = () => {
        $location.path("/vendors");
    };
});