"use strict";

app.run(function($location, $rootScope, FIREBASE_CONFIG){
    firebase.initializeApp(FIREBASE_CONFIG);

});

app.config(function($routeProvider){
    $routeProvider
      .when("/propertyinfo", {
        templateUrl: 'partials/propertyinfo.html',
        controller: 'PropertyInfoCtrl'
      })
      .when("/dashboard", {
        templateUrl: 'partials/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when("/reports", {
        templateUrl: 'partials/reports.html',
        controller: 'ReportsCtrl'
      })
      .when("/search", {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
      })
      .when("/viewproperties", {
        templateUrl: 'partials/viewproperties.html',
        controller: 'ViewPropertiesCtrl'
      })
      .when("/addnewproperty", {
        templateUrl: 'partials/addnewproperty.html',
        controller: 'AddNewPropertyCtrl'
      })
      .when("/addnewincident", {
        templateUrl: 'partials/addnewincident.html',
        controller: 'AddNewIncidentCtrl'
      })
      .when("/propertydetail/:id", {
        templateUrl: 'partials/propertydetail.html',
        controller: 'PropertyDetailCtrl'
      })
      .when("/general", {
        templateUrl: 'partials/general.html',
        controller: 'GeneralCtrl'
      })
      .when("/access", {
        templateUrl: 'partials/access.html',
        controller: 'AccessCtrl'
      })
      .when("/vendors", {
        templateUrl: 'partials/vendors.html',
        controller: 'VendorCtrl'
      })
      .when("/additionalnotes", {
        templateUrl: 'partials/additionalnotes.html',
        controller: 'AdditionalNotesCtrl'
      })
      .when("/reportarchives", {
        templateUrl: 'partials/reportarchives.html',
        controller: 'ReportArchivesCtrl'
      });  
});