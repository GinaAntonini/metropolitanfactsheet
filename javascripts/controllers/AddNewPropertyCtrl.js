"use strict";

app.controller("AddNewPropertyCtrl", function($location, $rootScope, $scope){

    $scope.addNewPropertyToFirebase = () => {
        $scope.newProject.uid = $rootScope.uid;
        ProjectService.postNewProperty($scope.newProperty).then((results) => {
            $scope.newProperty = {};
                $location.url("/viewproperties");
        }).catch((error) => {
            console.log("error in addNewPropertyToFirebase", error);
        });
    };

});