"use strict";

app.controller("PropertyDetailCtrl", function($location, $rootScope, $routeParams, $scope, PropertyInfoService){
    
    const getProperty = () => {
        PropertyInfoService.getSingleProperty($routeParams.id).then((results) =>{
            $scope.property = results.data;
            }).catch((err) =>{
            console.log("err in getProperty", err);
        });
    };
    getProperty();

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