

const firebaseConfig = {
    apiKey: "AIzaSyCI9aEfabwrV_exxSSkGkrQC26AqtdFfoc",
    authDomain: "sasa-project-undervoltage.firebaseapp.com",
    databaseURL: "https://sasa-project-undervoltage-default-rtdb.firebaseio.com",
    projectId: "sasa-project-undervoltage",
    storageBucket: "sasa-project-undervoltage.firebasestorage.app",
    messagingSenderId: "827447436695",
    appId: "1:827447436695:web:4b79a208868afa215c10d2"
  };


  // Initialize Firebas
  firebase.initializeApp(firebaseConfig);	// Initialize Firebase
 
$(document).ready(function(){
	var database = firebase.database();
	var mode;

	database.ref().on("value", function(snap){
		mode = snap.val().mode;
		if(mode == 1){
			document.getElementById("a").checked = true;  

		} else{
			document.getElementById("a").checked = false;
		}
	});

	$("#a").click(function(){
		var firebaseRef = firebase.database().ref().child("mode");

		if(mode == 1){
			firebaseRef.set(0);
			mode = 0;
		} else {
			firebaseRef.set(1);
			mode = 1;
		}
	})
});

$(document).ready(function () {
    var database = firebase.database();
    var relay = 0; // inisialisasi default

    // === Listener untuk perubahan data di Firebase ===
    database.ref("relay/relay2").on("value", function (snapshot) {
        relay = snapshot.val(); // ambil nilai relay langsung
        if (relay === 1) {
            document.getElementById("b").checked = true;
        } else {
            document.getElementById("b").checked = false;
        }
    });

    // === Event ketika checkbox diklik ===
    $("#b").click(function () {
        var firebaseRef = database.ref("relay/relay2");

        if (relay === 1) {
            firebaseRef.set(0);
            relay = 0;
        } else {
            firebaseRef.set(1);
            relay = 1;
        }
    });
})



	
 
var database = firebase.database();
var dataRef1 = database.ref('pzem/tegangan');
var dataRef2 = database.ref('pzem/arus');
var dataRef3 = database.ref('pzem/daya');
var dataRef4 = database.ref('pzem/frekuensi');
var dataRef5 = database.ref('pzem/faktordaya');





dataRef1.on('value', function(getdata1){
var teganganvac = getdata1.val().toFixed(2);
document.getElementById("tegangan").innerHTML= teganganvac +" V"; 



    const dropCard = document.getElementById("dropVoltageCard");
    const dropStatus = document.getElementById("dropVoltageStatus");
    const visitsBlock = dropCard.closest(".visits"); // ambil parent block

    if (teganganvac < 198) {
        dropCard.classList.add("danger");
        visitsBlock.classList.add("dropDanger");
        dropStatus.innerText = "DROP TEGANGAN!";
    } else {
        dropCard.classList.remove("danger");
        visitsBlock.classList.remove("dropDanger");
        dropStatus.innerText = "Normal";
    }


})

dataRef2.on('value', function(getdata1){
    var arus = getdata1.val();
document.getElementById("arus").innerHTML= arus +" A"; 

})
dataRef3.on('value', function(getdata1){
    var daya = getdata1.val();
document.getElementById("daya").innerHTML= daya +" W"; 

})

dataRef4.on('value', function(getdata1){
    var frekuensi = getdata1.val();
document.getElementById("frekuensi").innerHTML= frekuensi +" Hz"; 

})


dataRef5.on('value', function(getdata1){
    var pF = getdata1.val();
document.getElementById("powerfactor").innerHTML= pF +" "; 

})



// const child = document.getElementById("#teg")



var voltage = 120;







