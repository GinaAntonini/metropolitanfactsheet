"use strict";

app.controller("PropertyDetailCtrl", function($location, $rootScope, $routeParams, $scope, PropertyInfoService, VendorService){
    
    const getProperty = () => {
        PropertyInfoService.getSingleProperty($routeParams.id).then((results) =>{
            $scope.property = results.data;
            }).catch((err) =>{
            console.log("err in getProperty", err);
        });
    };
    getProperty();

    $scope.getVendor = (event) => {
        console.log("text");
        console.log(event);
        VendorService.getVendorIdByType($routeParams.id, "fireAlarmVendor").then((results) => {
            const vendorId = results.data;
            console.log(vendorId);
        }).catch((err) => {
            console.log("err in getVendor", err);
        });
    };
    // VendorService.getVendorInfoFromFirebase($event.target.id)
});