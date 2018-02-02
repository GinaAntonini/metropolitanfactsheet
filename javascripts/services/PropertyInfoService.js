"use strict";

app.service("PropertyInfoService", function($http, $q, FIREBASE_CONFIG){

  const getPropertyInfoFromFirebase = (userUid) => {
		let properties = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/properties.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbProperties = results.data;
        Object.keys(fbProperties).forEach((key) => {
          if(fbProperties[key].completed === false){
          fbProperties[key].id = key;
          properties.push(fbProperties[key]);
          }
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