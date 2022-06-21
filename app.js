
const express = require('express')
const app = express()
const firebaseconnect = require ('./firebase/firebaseconnect')


// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: './creds.json'
});

 
async function objectLocalization(request) {
const [result] = await client.objectLocalization(request);
const objects = result.localizedObjectAnnotations;
objects.forEach(object => {
  console.log(`Name: ${object.name}`);
  console.log(`Confidence: ${object.score}`);
  const vertices = object.boundingPoly.normalizedVertices;
  vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
});
}

objectLocalization('./chair.jpg')

app.listen(7000, () => console.log('Server Running'));













// const getAuth = require('firebase/auth')

// var firebaseConfig =  {

// apiKey: "AIzaSyAEEoEaZHB74Rci5jOgySiOwxdDCU4s0gY",
// authDomain: "chrome-bearing-353510.firebaseapp.com",
// databaseURL: "https://chrome-bearing-353510-default-rtdb.firebaseio.com",
// projectId: "chrome-bearing-353510",
// storageBucket: "chrome-bearing-353510.appspot.com",
// messagingSenderId: "162212548912",
// appId: "1:162212548912:web:65af7843f3d1a7d26078f5",
// measurementId: "G-2JRKE6TKHX"
// };
// // Initialize your Firebase app:
// // firebase.initializeApp(firebaseConfig)

