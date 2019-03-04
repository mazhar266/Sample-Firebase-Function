'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


exports.rearrange = functions.https.onRequest((request, response) => {
    // first get the values from request
    // and the return the values reordered
    // for this sample, I will just read from db and return it as String
    admin.database().ref('/recipes/1').once('value').then(function(snapshot) {
        response.send(snapshot.val().title);
        return true;
    }).catch()
    // response.send("Hello from Firebase!");
});
