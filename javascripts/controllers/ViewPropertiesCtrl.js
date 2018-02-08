"use strict";

app.controller("ViewPropertiesCtrl", function($location, $rootScope, $routeParams, $scope, PropertyInfoService){

    const getProperties = (propertyName) => {
        PropertyInfoService.getPropertyInfoFromFirebase($rootScope.uid).then((results) => {
        $scope.properties = results;
    }).catch((err) => {
        console.log("error in getProperties", err);
    });
    };
    getProperties();

    $scope.viewPropertyDetail = (propertyId) => {
		$location.path(`/propertydetail/${propertyId}`);
	};

});

