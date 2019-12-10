var app_fireBase = {};
(function() {


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDy3z8tF1nar2rp1CQ93S_hDKrBDIuBxy4",
    authDomain: "weekly-planner-c161d.firebaseapp.com",
    databaseURL: "https://weekly-planner-c161d.firebaseio.com",
    projectId: "weekly-planner-c161d",
    storageBucket: "weekly-planner-c161d.appspot.com",
    messagingSenderId: "113913612842",
    appId: "1:113913612842:web:937a8779074147ca2f1153",
    measurementId: "G-2BTCQZ9ZZE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  app_fireBase = firebase;

})()