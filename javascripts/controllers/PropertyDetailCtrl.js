"use strict";

app.controller("PropertyDetailCtrl", function($location, $rootScope, $routeParams, $scope, PropertyInfoService, VendorService){
    
    const getProperty = () => {
        PropertyInfoService.getSingleProperty($routeParams.id).then((results) =>{
            $scope.property = results.data;
            //if the vendorId is equal to the 
            }).catch((err) =>{
            console.log("err in getProperty", err);
        });
    };
    getProperty();

});