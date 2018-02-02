"use strict";

app.controller("PropertyDetailCtrl", function($location, $rootScope, $scope){
    
    $scope.getToGeneral = () => {
        $location.path("/general");
    };

    $scope.getToAccess= () => {
        $location.path("/access");
    };

    $scope.getToVendorInfo= () => {
        $location.path("/vendorinfo");
    };

});