"use strict";

app.service("VendorService", function($http, $q, FIREBASE_CONFIG){

  const getVendorInfoFromFirebase = (userUid, vendorId) => {
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

  const getVendorIdByType = (vendorType) => {
    let vendorId ;
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/properties.json?orderBy="uid"&equalTo="${vendorType}"`).then((results) => {
        let fbVendors = results.data;
        Object.keys(fbVendors).forEach((key) => {
          fbVendors[key].id = key;
          vendorId.push(fbVendors[key]);
        });
        resolve(vendorId);
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
        postNewVendor,
        getVendorIdByType
    };
});