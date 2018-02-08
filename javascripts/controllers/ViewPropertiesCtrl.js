"use strict";

app.controller("ViewPropertiesCtrl", function($location, $rootScope, $scope, PropertyInfoService){

    const getProperties = (propertyName) => {
        PropertyInfoService.getPropertyInfoFromFirebase($rootScope.uid).then((results) => {
        $scope.properties = results;
        console.log(results);
    }).catch((err) => {
        console.log("error in getProperties", err);
    });
    };
    getProperties();

});

