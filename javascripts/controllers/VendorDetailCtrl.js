"use strict";

app.controller("VendorDetailCtrl", function($location, $rootScope, $routeParams, $scope, VendorService){
    
    const getVendor = () => {
        VendorService.getSingleVendor($routeParams.id).then((results) =>{
            $scope.property = results.data;
            //if the vendorId is equal to the 
            }).catch((err) =>{
            console.log("err in getVendor", err);
        });
    };
    getVendor();
});
