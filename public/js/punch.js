var punchinbtn = document.getElementById('punch_id_btn');
var punchoutbtn = document.getElementById('punch_id_out_btn');
var punchtxt = document.getElementById('punch_id_txt');

var punchbtnLIST = firebase.database().ref('punch_list');

var NowDate = new Date();

punchinbtn.addEventListener('click', function() {
  if (punchtxt.value != "") {
    punchbtnLIST.push({
      worker_id:punchtxt.value,
      punch_in_day:NowDate.toLocaleDateString(),
      punch_in_time:NowDate.toLocaleTimeString(),
      punch_in_count:NowDate.getTime()

    });
    alert("You have punched in at "+NowDate.toLocaleString()+"!");
    window.location.href = "punch.html";
    punchtxt.value = "";


  }

});
  var TOTALtime="";
punchoutbtn.addEventListener('click', function() {

  if (punchtxt.value != "") {
    punchbtnLIST.push({
      worker_id:punchtxt.value,
      punch_out_day:NowDate.toLocaleDateString(),
      punch_out_time:NowDate.toLocaleTimeString(),
      punch_out_count:NowDate.getTime()

    }).then(function() {
      punchbtnLIST.once('value', function(snapshot) {

        for (var i in snapshot.val()) {
          if(snapshot.val()[i].worker_id==punchtxt.value){
            if(snapshot.val()[i].punch_in_count){
              console.log("下班囉");
              console.log(snapshot.val()[i].punch_in_count);
              console.log(NowDate.getTime());
              TOTALtime =NowDate.getTime()-snapshot.val()[i].punch_in_count;

              console.log(TOTALtime);
              console.log((TOTALtime/1000)/3600);
              alert("You have punched out at "+NowDate.toLocaleString()+"!");
              var TOTALtimehr = (TOTALtime/1000)/3600;
              alert("Total working time: "+TOTALtimehr+" hours !");
            }
          }


        }
      });
});


    console.log("hiiii");




  }

});

var btnLogout = document.getElementById('logout_btn');
btnLogout.addEventListener('click', function() {
  window.location.href = "http://140.113.209.9/hack/src/index.php";
});
