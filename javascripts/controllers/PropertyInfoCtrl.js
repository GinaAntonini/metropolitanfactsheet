"use strict";

app.controller("PropertyInfoCtrl", function($location, $rootScope, $scope){
    console.log("Hello World");
    
    $scope.getToSearch = () => {
        $location.path("/search");
    };

    $scope.getToViewProperties = () => {
        $location.path("/viewproperties");
    };

    $scope.getToAddNewProperty= () => {
        $location.path("/addnewproperty");
    };

});