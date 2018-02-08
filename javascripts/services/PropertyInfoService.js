"use strict";

app.service("PropertyInfoService", function($http, $q, FIREBASE_CONFIG){

  const getPropertyInfoFromFirebase = () => {
		let properties = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/properties.json?orderBy="uid"`).then((results) => {
        let fbProperties = results.data;
        Object.keys(fbProperties).forEach((key) => {
          fbProperties[key].id = key;
          properties.push(fbProperties[key]);
        });
        resolve(properties);
      }).catch((err) => {
        reject(err);
      });
    });
  };

    const postNewProperty = (newProperty) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/properties.json`, JSON.stringify(newProperty));
    };

 
    return {
        getPropertyInfoFromFirebase,
        postNewProperty
    };
});