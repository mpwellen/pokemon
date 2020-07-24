var pokemonData;
var playerData;
var opHP=0;
var userHP = 100;
opAttacks = [flameThrower, dragonClaw, ember, growl];
var playerMove = 0;
var music;
var training;



function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function checkCookie() {
  var username = getCookie("myCookZ");
  if (username != "") {
   //alert("x-coordinate " + username);
  } else {
    username = prompt("Please enter your x-location:", "");
    if (username != "" && username != null) {
      setCookie("myCookZ", username, 365);
    }
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setExample(){

var x = prompt("Enter the value for the pokemon you want to select", "0");
var aNumber=parseInt(x);
/*training+=2;
setCookie("myCookZ",training,365);
*/

if(music==0)
{
	var audio = new Audio('BossTheme2.ogg');
	audio.play();
	music=1;
}
var randomIndex = getRandomIndex();
/*
document.getElementById("ranid").innerHTML = "ranid: "+ randomIndex;
document.getElementById("ranP").innerHTML = "#: "+ getData(randomIndex,"#");
document.getElementById("ranName").innerHTML = "Name: "+ getData(randomIndex,"Name");
document.getElementById("namea").innerHTML = "Name: "+ getData(randomIndex,"Name");
document.getElementById("Type1").innerHTML = "Type 1: "+ getData(randomIndex,"Type 1");
document.getElementById("Type2").innerHTML = "Type 2: "+ getData(randomIndex,"Type 2");
document.getElementById("Total").innerHTML = "Total: "+ getData(randomIndex,"Total");*/
document.getElementById("HP").innerHTML = "HP: "+ getData(randomIndex,"HP");
document.getElementById("HPa").innerHTML = "HP: "+ getData(randomIndex,"HP");
opHP=getData(randomIndex,"HP");
userHP=getDataB(aNumber,"HP");
document.getElementById("myHPa").innerHTML = "HP: "+userHP;
document.getElementById("nameb").innerHTML = getDataB(aNumber,"Name");
console.log(opHP);
/*
document.getElementById("Attack").innerHTML = "Attack: "+ getData(randomIndex,"Attack");
document.getElementById("Defense").innerHTML = "Defense: "+ getData(randomIndex,"Defense");
document.getElementById("SpAtk").innerHTML = "Sp. Atk: "+ getData(randomIndex,"Sp. Atk");
document.getElementById("SpDef").innerHTML = "Sp. Def: "+ getData(randomIndex,"Sp. Def");
document.getElementById("Speed").innerHTML = "Speed: "+ getData(randomIndex,"Speed");
document.getElementById("Generation").innerHTML = "Generation: "+ getData(randomIndex,"Generation");
document.getElementById("Legendary").innerHTML = "Legendary: "+ getData(randomIndex,"Legendary");*/
document.getElementById("filename").innerHTML = "filename: "+ getData(randomIndex,"filename");
document.getElementById("filenameB").innerHTML = "filename: "+ getDataB(aNumber,"filename");

document.getElementById("myImg").src = "1st Generation/"+getData(randomIndex,"filename");
document.getElementById("myImga").src = "1st Generation/"+getDataB(aNumber,"filename");

}

function setupDataB() {
	console.log("setupDataB");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      playerData = JSON.parse(this.responseText);
      addFileName();

    }
  };
  xmlhttp.open("GET", "dataB.php", true);
  xmlhttp.send();
  console.log("setup running");
  //setExample();
}

function setupData() {
	var test=checkCookie();
	var testB=getCookie("myCookZ");
	training=parseInt(testB);
	training+=2;
	console.log(training);
	music=0;
	console.log("setupData");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pokemonData = JSON.parse(this.responseText);
      addFileName();
    }
  };
  xmlhttp.open("GET", "data.php", true);
  xmlhttp.send();
  console.log("setup running");
  setupDataB();
  setTimeout(function(){ setExample(); }, 2000);
  //setExample();
}





function addFileName(){

  var i;

  for (i = 0; i < pokemonData.length; i++) {

    var tempLength = pokemonData[i]["#"].length;
    var addPart = "";

    if (pokemonData[i]["filename"].length == 0){

      if (tempLength == 1){

        addPart = "00";


      }

      else if (tempLength == 2){

        addPart = "0";


      }

      pokemonData[i]["filename"] = addPart+pokemonData[i]["#"]+pokemonData[i]["Name"]+".png";

    }

    var url = "1st Generation/"+pokemonData[i]["filename"];

    var tempImageTest = new Image();
    tempImageTest.src = url;
    tempImageTest.onerror = function(){
       console.log(url);
    }

  }

  for (i = 0; i < playerData.length; i++) {

    var tempLength = playerData[i]["#"].length;
    var addPart = "";

    if (playerData[i]["filename"].length == 0){

      if (tempLength == 1){

        addPart = "00";


      }

      else if (tempLength == 2){

        addPart = "0";


      }

      playerData[i]["filename"] = addPart+playerData[i]["#"]+playerData[i]["Name"]+".png";

    }

    var url = "1st Generation/"+playerData[i]["filename"];

    var tempImageTest = new Image();
    tempImageTest.src = url;
    tempImageTest.onerror = function(){
       console.log(url);
    }

  }

}

function getData(idToCheck,commandRun){

  if (0 <= idToCheck && idToCheck < pokemonData.length){

    var allCommands = ["id", "#", "Name","Type 1","Type 2","Total", "HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Generation","Legendary","filename"];

    if (allCommands.includes(commandRun)){

      return pokemonData[idToCheck][commandRun];

    }
  }
}

function getDataB(idToCheck,commandRun){

  if (0 <= idToCheck && idToCheck < playerData.length){

    var allCommands = ["id", "#", "Name","Type 1","Type 2","Total", "HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Generation","Legendary","filename"];

    if (allCommands.includes(commandRun)){

      return playerData[idToCheck][commandRun];

    }
  }
}

function getRandomIndex(){


return Math.floor(Math.random() * pokemonData.length);

}

/*
function setExample(){

var randomIndex = getRandomIndex();
document.getElementById("ranid").innerHTML = "ranid: "+ randomIndex;
document.getElementById("ranP").innerHTML = "#: "+ getData(randomIndex,"#");
document.getElementById("ranName").innerHTML = "Name: "+ getData(randomIndex,"Name");
document.getElementById("namea").innerHTML = "Name: "+ getData(randomIndex,"Name");
document.getElementById("Type1").innerHTML = "Type 1: "+ getData(randomIndex,"Type 1");
document.getElementById("Type2").innerHTML = "Type 2: "+ getData(randomIndex,"Type 2");
document.getElementById("Total").innerHTML = "Total: "+ getData(randomIndex,"Total");
document.getElementById("HP").innerHTML = "HP: "+ getData(randomIndex,"HP");
document.getElementById("HPa").innerHTML = "HP: "+ getData(randomIndex,"HP");
opHP=getData(randomIndex,"HP");
console.log(opHP);
document.getElementById("Attack").innerHTML = "Attack: "+ getData(randomIndex,"Attack");
document.getElementById("Defense").innerHTML = "Defense: "+ getData(randomIndex,"Defense");
document.getElementById("SpAtk").innerHTML = "Sp. Atk: "+ getData(randomIndex,"Sp. Atk");
document.getElementById("SpDef").innerHTML = "Sp. Def: "+ getData(randomIndex,"Sp. Def");
document.getElementById("Speed").innerHTML = "Speed: "+ getData(randomIndex,"Speed");
document.getElementById("Generation").innerHTML = "Generation: "+ getData(randomIndex,"Generation");
document.getElementById("Legendary").innerHTML = "Legendary: "+ getData(randomIndex,"Legendary");
document.getElementById("filename").innerHTML = "filename: "+ getData(randomIndex,"filename");
document.getElementById("myImg").src = "1st Generation/"+getData(randomIndex,"filename");


}*/

function flash()
{
	document.getElementById('myImg').style.visibility='hidden';
		setTimeout(function(){ document.getElementById('myImg').style.visibility='visible' }, 250);
		setTimeout(function(){ document.getElementById('myImg').style.visibility='hidden' }, 500);
		setTimeout(function(){ document.getElementById('myImg').style.visibility='visible' }, 750);
}

function flashB()
{
	document.getElementById('myImga').style.backgroundColor="red";
		setTimeout(function(){ document.getElementById('myImga').style.backgroundColor='transparent' }, 250);
		setTimeout(function(){ document.getElementById('myImga').style.visibility='solid' }, 500);
		setTimeout(function(){ document.getElementById('myImga').style.visibility='transparent' }, 750);
}

function waterCannon() {
  if(playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1); // miss rate
    if(miss == 1) {
      document.getElementById('message').innerHTML = " Your pokemon's attack missed! ";
    }
    else {
		flash();
		flashB();
      document.getElementById('message').innerHTML = " Your pokemon used an attack "; // attack
      var critical = Math.floor((Math.random() * 10) + 1); // critical
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 30 - training; // yes critical
		  //document.getElementById("HPa").innerHTML = "HP: "+ opHP;

        }
      }
      else{
        opHP = opHP - 30 - training; // no critical
      }
      if(opHP < 0){ opHP = 0} //faint
        document.getElementById('apHP').innerHTML = "HP: "+opHP; // update hp
		document.getElementById("HPa").innerHTML = "HP: "+opHP;
      if(opHP == 0){
		  
        document.getElementById('message').innerHTML = "Your opponent fainted! " // update message
		training+=2;
		setCookie("myCookZ",training,365);
		setTimeout(function(){ window.location.href = "proj2_2.html"; }, 5000);
		
      }
    }
    //wait();
    playerMove = 1; // update player move
	document.getElementById("playerMove").innerHTML=playerMove;
}
}

function waterPulse() {
  if(playerMove == 0 && userHP != 0) {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Your pokemon's attack missed! "
  }
  else {
	  flash();
	  flashB();
    document.getElementById('message').innerHTML = " Your pokemon used an attack ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 20 - training;
        }
      }
      else{
        opHP = opHP - 20;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    //document.getElementById('message').innerHTML = " Charizard2 "
    if(opHP == 0){
		training+=2;
		setCookie("myCookZ",training,365);
      document.getElementById('message').innerHTML = " The opposing pokemon fainted! "
	  	setTimeout(function(){ window.location.href = "proj2_2.html"; }, 5000);

    }
  }
  //wait();
  playerMove = 1;
}
}

function surf() {
  if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used surf ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 10;
        }
      }
      else{
        opHP = opHP - 10;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    if(opHP == 0){
      document.getElementById('message').innerHTML = " The opposing pokemon fainted! "
	  	setTimeout(function(){ window.location.href = "proj2_2.html"; }, 2000);
    }
  }
  //wait();
  playerMove = 1;
}
}
function tackle() {
  if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used tackle ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 5;
        }
      }
      else{
        opHP = opHP - 5;
      }
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
  //document.getElementById('message').innerHTML = " Charizard4 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}

function run() {
	document.getElementById('message').innerHTML = " You ran away! "
	  setTimeout(function(){ window.location.href = "proj2_2.html"; }, 2000);
	/*
  if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used tackle ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 5;
        }
      }
      else{
        opHP = opHP - 5;
      }
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
  //document.getElementById('message').innerHTML = " Charizard4 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
*/
}
/*
function toss() {
	if(playerMove == 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 10) + 1);
  /*if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Player used toss pokeball! ";
    if(opHP < 50){ 
		document.getElementById('message').innerHTML = " You tossed a pokeball! ";
		opHP = 0; 
		window.location.href = "proj2_2.html";
	}
    document.getElementById('apHP').innerHTML = opHP;
  //document.getElementById('message').innerHTML = " Charizard4 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  //}
  //wait();
  playerMove = 1;
}
}
*/

function toss()
{
	if(playerMove == 0 && userHP != 0) {
	//alert("Water Cannon!");
	var miss = Math.floor((Math.random() * 10) + 1);
	/*if(miss == 1 ) {
	document.getElementById('message').innerHTML = " Blastoise's attack missed! "
	}
	else {*/
	document.getElementById('message').innerHTML = " Player used toss pokeball! ";
	if(opHP < 50){
		document.getElementById('message').innerHTML = " You tossed a pokeball! ";
		opHP = 0;
		setTimeout(function(){ document.getElementById('message').innerHTML = " You captured a pokemon! "; }, 2000);

		

		// **********
		// Only get the ranid integer, don't need the whole string.
		var OpponentInfo = document.getElementById("ranid").innerHTML.split(" ")[1];
		
		// Redirect to PHP page using ranid as parameter.
		window.location.href = "capture.php?ranid=" + OpponentInfo;
		// **********
	}
	else{
		document.getElementById('message').innerHTML = " Your pokeball did nothing! ";
	}
	document.getElementById('apHP').innerHTML = opHP;
	//document.getElementById('message').innerHTML = " Charizard4 "
	if(opHP == 0){
	 document.getElementById('message').innerHTML = " The opposing pokeball fainted! "
	}
	//}
	//wait();
	playerMove = 1;
	}
}


/* opponent's moves */

function flameThrower() {
  var miss = Math.floor((Math.random() * 10) + 1); // miss rate
  if(miss == 1 ) {
  document.getElementById('message').innerHTML = " Opponent's attack missed! "; // attack missed
  }
  else {
  document.getElementById('message').innerHTML = " Opponent used an attack "; // attack
    var critical = Math.floor((Math.random() * 10) + 1); // critical
      if(critical == 4){
        for(var x = 0; x < 2; x++){ // yes critical
          userHP = userHP - 30;
        }
      }
      else{
        userHP = userHP - 30; // no critical
      }
  if(userHP < 0) { userHP = 0} // faint
  document.getElementById("myHPa").innerHTML = userHP; // update hp
    if(userHP == 0) { // fainted
      document.getElementById('message').innerHTML = " Your pokemon fainted! " // fainted
	  setTimeout(function(){ window.location.href = "proj2_2.html"; }, 2000);
    }
  }
}

function dragonClaw() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Opponent's attack missed! ";
  }
  else {
  document.getElementById('message').innerHTML = " Opponent used an attack! ";
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 20;
      }
    }
    else{
      userHP = userHP - 20;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHPa').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Your pokemon fainted! ";
	  setTimeout(function(){ window.location.href = "proj2_2.html"; }, 2000);
    }
  }
}

function ember() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Opponent's attack missed! ";
  }
  else {
  document.getElementById('message').innerHTML = " Opponent used an attack ";
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 10;
      }
    }
    else{
      userHP = userHP - 10;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHPa').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Your pokemon fainted! ";
	   setTimeout(function(){ window.location.href = "proj2_2.html"; }, 2000);
    }
  }
}

function growl() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Opponent's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Opponent used a weak attack "
  var critical = Math.floor((Math.random() * 10) + 1);
    if(critical == 4){
      for(var x = 0; x < 2; x++){
        userHP = userHP - 5;
      }
    }
    else{
      userHP = userHP - 5;
    }
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHPa').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Your pokemon fainted! "
	  setTimeout(function(){ window.location.href = "proj2_2.html"; }, 2000);
    }
  }
}



function compPokemon() { // continue
  if(playerMove == 1 && opHP != 0) { // whos move
  var move = Math.floor((Math.random() * 4) + 1); // choose move randomly
  //flameThrower();
    opAttacks[move](); // call attack from array
	document.getElementById("myHPa").innerHTML = userHP;
    playerMove = 0; // update player move
	document.getElementById("playerMove").innerHTML=playerMove;
  }
  document.getElementById("playerMove").innerHTML=playerMove;
  
}

function both(){
	setupData();
	//setExample();
}
