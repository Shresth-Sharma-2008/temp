var firebaseConfig = {
  apiKey: "AIzaSyDCJ8aDj1aNAabamLYsFbMlUArYmzdvGWo",
  authDomain: "shresth-sharma-v3.firebaseapp.com",
  databaseURL: "https://shresth-sharma-v3-default-rtdb.firebaseio.com",
  projectId: "shresth-sharma-v3",
  storageBucket: "shresth-sharma-v3.appspot.com",
  messagingSenderId: "52938966152",
  appId: "1:52938966152:web:7f3b056755e84853fe0b3d"
};
firebase.initializeApp(firebaseConfig);
database = firebase.database()
function sendNotification(title, options){
    if("Notification" in window){
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(title, options);
          // notification.onclick = function () {
          //   window.open(options.data.url);
          // };
          console.log('ok')
          // alert('ok')
        } else if (permission === "denied") {
          console.log("Permission for notifications is denied.");
          // alert('denied')
        } else {
          console.log("Permission for notifications is pending.");
          // alert('pending')
        }
      });
    } else {
      console.log("Notifications are not supported in this browser.");
      // alert('no support')
    }
}
var t = "Complaint Completed";
var o = {
    body: "Your complaint Has been completed",
    icon: "logo_max.jpg",
    data: {
      url: "https://shresth-sharma-2008.github.io/Shresth-Sharma-4/"
    }
};
// sendNotification(notificationTitle, notificationOptions);  
function get(){
  var name = 'this'
    var gameStateRef  = database.ref('copier1/'+name);
        gameStateRef.on("value",function(data){
        var data1 = data.val();
        console.log(data1)
        if(data1 != null){
            console.log('hi');
            database.ref('copier1/'+name).remove();
            sendNotification(t,o)
        }
        self.registration.unregister()
    });
}
get();
setInterval(get, 2000);