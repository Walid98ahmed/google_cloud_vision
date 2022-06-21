
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

const serviceAccount = require('../config.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

// add Data 

async function uploadData() {

const docRef = db.collection('users').doc('alovelace');


await docRef.set({
  id : 'dubuiocdcmkmpoppv551',
  name: 'chair',
  imageUrl: 'https://www.bing.com/images/search?view=detailV2&ccid=ZMufoZNB&id=1CFD1C11AA8A858A128E0A5EC69E219BBB9C5C28&thid=OIP.ZMufoZNBZfsKboVWHdpjLQHaE8&mediaurl=https%3a%2f%2fcoquetcottages.co.uk%2fwp-content%2fuploads%2f2016%2f12%2fChair.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.64cb9fa1934165fb0a6e85561dda632d%3frik%3dKFycu5shnsZeCg%26pid%3dImgRaw%26r%3d0&exph=4000&expw=6000&q=chair+images&simid=608054712486157205&FORM=IRPRST&ck=A2E8FF438EEF4DDA833392A060672146&selectedIndex=1&ajaxhist=0&ajaxserp=0',
  
});


  const aTuringRef =  db.collection('users').doc('aturing');

  await aTuringRef.set({
    'id': "dcvodvcuasbkcbjsk848",
    'name': 'table',
    'imageUrl': 'https://www.bing.com/images/search?view=detailV2&ccid=5n8dnn9y&id=23EAAE288D51BDFAB709815395B69D0E83B6EA05&thid=OIP.5n8dnn9yUqvLtCxw80CtuQHaFa&mediaurl=https%3a%2f%2fisteam.wsimg.com%2fip%2f8e05a28e-5f0d-4575-b4c2-cf82944401ad%2f269EB8BA-BECA-474C-929F-F54683AE00A0.jpeg%2f%3a%2frs%3dw%3a1200%2ch%3a1200&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e67f1d9e7f7252abcbb42c70f340adb9%3frik%3dBeq2gw6dtpVTgQ%26pid%3dImgRaw%26r%3d0&exph=549&expw=750&q=table&simid=608051310878007362&FORM=IRPRST&ck=22B7A796463970451C21C2569BD3B9AC&selectedIndex=12&ajaxhist=0&ajaxserp=0',
  
  });

  const altropvwRef = db.collection('users').doc('altropvw');


await altropvwRef.set({
  'id': "vsvcsbjlasjk515165",
  "name": 'couch',
  "imageUrl": 'https://www.bing.com/images/search?view=detailV2&ccid=J3K0AdAd&id=771A16C5444415BF0ADFF42B34373BC86E8D2168&thid=OIP.J3K0AdAdddFEWutMtqhmGwHaEK&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2772b401d01d75d1445aeb4cb6a8661b%3frik%3daCGNbsg7NzQr9A%26riu%3dhttp%253a%252f%252fchristineslakecountryupholstery.com%252fImages%252fCouch%252fCouch001.jpg%26ehk%3d%252bZY3GbwYp2Jv%252bJKTB0Yx8%252fFrGdb71c48vEgQQgznX%252fo%253d%26risl%3d1%26pid%3dImgRaw%26r%3d0&exph=2322&expw=4128&q=couch&simid=608014077807363055&FORM=IRPRST&ck=5D9981AFA77C1166F723F429E5D90419&selectedIndex=2&ajaxhist=0&ajaxserp=0',
  
});
  
}

// readData
async function getData() {

  
const snapshot = await db.collection('users').get();
snapshot.forEach((doc) => {
  console.log(doc.id, '=>', doc.data());
});

}
const snapshotRef = db.collection('users');

// uploadData()
// getData()

async function getQuery(){
  const queryRef =  await snapshotRef.where('name', '==', "couch").get();

  if (queryRef.empty) {
    console.log('No matching documents.');
    return;
  }  
  
  queryRef.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
  
}
 getQuery()

module.exports = "firebaseconnect"