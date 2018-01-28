"use strict";

app.controller("ReportsCtrl", function($location, $rootScope, $scope){
    
    $scope.getToAddNewIncident = () => {
        $location.path("/addnewincident");
    };

    $scope.getToReportArchives = () => {
        $location.path("/reportarchives");
    };

});