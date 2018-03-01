"use strict";

app.controller("VendorsCtrl", function($location, $rootScope, $routeParams, $scope, VendorService){

    const getVendors = () => {
        VendorService.getVendorInfoFromFirebase($rootScope.uid).then((results) => {
        $scope.vendors = results;
    }).catch((err) => {
        console.log("error in getVendors", err);
    });
    };
    getVendors();

    $scope.viewVendorDetail = (vendorId) => {
		$location.path(`/vendordetail/${vendorId}`);
	};

});
