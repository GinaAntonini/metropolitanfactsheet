"use strict";

app.controller("AddNewPropertyCtrl", function($location, $rootScope, $scope, PropertyInfoService){

    $scope.addNewPropertyToFirebase = () => {
        $scope.newProperty.uid = $rootScope.uid;
        PropertyInfoService.postNewProperty($scope.newProperty).then((results) => {
                $location.url("/viewproperties");
        }).catch((error) => {
            console.log("error in addNewPropertyToFirebase", error);
        });
    };

});