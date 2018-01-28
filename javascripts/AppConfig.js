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
      .when("/reportarchives", {
        templateUrl: 'partials/reportarchives.html',
        controller: 'ReportArchivesCtrl'
      });
});