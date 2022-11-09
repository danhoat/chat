/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */


const config = {
  apiKey: "AIzaSyB15m8SsDjxE8ZsA951Q55eJLqymip6in8",
  authDomain: "livechat-ad319.firebaseapp.com",
  projectId: "livechat-ad319",
  storageBucket: "livechat-ad319.appspot.com",
  messagingSenderId: "748609321783",
  appId: "1:748609321783:web:cdf6c5496c45b6c008f8b2",
  measurementId: "G-R8PLP5TQCS"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}