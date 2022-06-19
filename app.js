// const express = require('express');
// const app = express();
// const vision = require('@google-cloud/vision');
// // Creates a client
// const client = new vision.ImageAnnotatorClient({
//   keyFilename: './creds.json'
// });

// // Performs label detection on the image file
// client
//   .labelDetection('./nature.jpg')
//   .then(results => {
//     const labels = results[0].labelAnnotations;

//     console.log('Labels:');
//     labels.forEach(label => console.log(label));
//     console.log(`Label Annotations Result: ${JSON.stringify(labels, null, 2)}`)
//     //console.log(results);
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });

// app.listen(5000, '127.0.0.1', () => console.log('Server running'));










const express = require('express')
const app = express()

// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
const fs = require('fs');

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: './creds.json'
});

 
const fileName = './furniture.jpg';
const request = {
  image: {content: fs.readFileSync(fileName)},
};
 
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

objectLocalization('./furniture.jpg')

app.listen(7000, () => console.log('Server Running'));

