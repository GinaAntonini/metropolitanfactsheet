"use strict";

app.service("VendorService", function($http, $q, FIREBASE_CONFIG){

  const getVendorInfoFromFirebase = (userUid) => {
		let vendors = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/vendors.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbVendors = results.data;
        Object.keys(fbVendors).forEach((key) => {
          fbVendors[key].id = key;
          vendors.push(fbVendors[key]);
        });
        resolve(vendors);
      }).catch((err) => {
        reject(err);
      });
    });
  };

    const postNewVendor = (newVendor) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/vendors.json`, JSON.stringify(newVendor));
    };

    const getSingleVendor = (vendorId) => {
      return $http.get(`${FIREBASE_CONFIG.databaseURL}/vendors/${vendorId}.json`);
    };

 
    return {
        getVendorInfoFromFirebase,
        getSingleVendor,
        postNewVendor
    };
});