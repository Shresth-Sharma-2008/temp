database = firebase.database()
function sendNotification(title, options){
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(title, options);
          notification.onclick = function () {
            window.open(options.data.url);
          };
          console.log('ok')
          alert('ok')
        } else if (permission === "denied") {
          console.log("Permission for notifications is denied.");
          alert('denied')
        } else {
          console.log("Permission for notifications is pending.");
          alert('pending')
        }
      });
    } else {
      console.log("Notifications are not supported in this browser.");
      alert('no support')
    }
}
var notificationTitle = "New Message";
var notificationOptions = {
    body: "You have received a new message from a friend."
};
// sendNotification(notificationTitle, notificationOptions);  
function get(){
    var gameStateRef  = database.ref('copier1');
        gameStateRef.on("value",function(data){
        var data1 = data.val();
        console.log(data1)
        if(data1.this != undefined){
            console.log('hi');
        }
    });
}
// get();