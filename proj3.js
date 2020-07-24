var userHP = 100;
var opHP = 100;
opAttacks = [flameThrower, dragonClaw, ember, growl];
playerMove = 0;
/* users moves */

var pokemonData;

function setupData() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      pokemonData = JSON.parse(this.responseText);
      addFileName();

    }
  };
  xmlhttp.open("GET", "data.php", true);
  xmlhttp.send();
  console.log("setupData Ran");


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

}

function getData(idToCheck,commandRun){

  if (0 <= idToCheck && idToCheck < pokemonData.length){

    var allCommands = ["id", "#", "Name","Type 1","Type 2","Total", "HP","Attack","Defense","Sp. Atk","Sp. Def","Speed","Generation","Legendary","filename"];

    if (allCommands.includes(commandRun)){

      return pokemonData[idToCheck][commandRun];

    }




  }

}

function getRandomIndex(){


return Math.floor(Math.random() * pokemonData.length);

}


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
opHP=parseInt(getData(randomIndex,"HP");

document.getElementById("Attack").innerHTML = "Attack: "+ getData(randomIndex,"Attack");
document.getElementById("Defense").innerHTML = "Defense: "+ getData(randomIndex,"Defense");
document.getElementById("SpAtk").innerHTML = "Sp. Atk: "+ getData(randomIndex,"Sp. Atk");
document.getElementById("SpDef").innerHTML = "Sp. Def: "+ getData(randomIndex,"Sp. Def");
document.getElementById("Speed").innerHTML = "Speed: "+ getData(randomIndex,"Speed");
document.getElementById("Generation").innerHTML = "Generation: "+ getData(randomIndex,"Generation");
document.getElementById("Legendary").innerHTML = "Legendary: "+ getData(randomIndex,"Legendary");
document.getElementById("filename").innerHTML = "filename: "+ getData(randomIndex,"filename");
document.getElementById("myImg").src = "1st Generation/"+getData(randomIndex,"filename");


}


function waterCannon() {
  if(playerMove == 0 && userHP != 0) {
    var miss = Math.floor((Math.random() * 10) + 1); // miss rate
    if(miss == 1) {
      document.getElementById('message').innerHTML = " Blastoise's attack missed! ";
    }
    else {
      document.getElementById('message').innerHTML = " Blastoise used water cannon "; // attack
      var critical = Math.floor((Math.random() * 10) + 1); // critical
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 30; // yes critical
        }
      }
      else{
        opHP = opHP - 30; // no critical
      }
      if(opHP < 0){ opHP = 0} //faint
        document.getElementById('apHP').innerHTML = opHP; // update hp
      if(opHP == 0){
        document.getElementById('message').innerHTML = " Charizard fainted! " // update message
      }
    }
    //wait();
    playerMove = 1; // update player move
}
}

function waterPulse() {
  if(playerMove == 0 && userHP != 0) {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used water pulse ";
    var critical = Math.floor((Math.random() * 10) + 1);
      if(critical == 4){
        for(var x = 0; x < 2; x++){
          opHP = opHP - 20;
        }
      }
      else{
        opHP = opHP - 20;
      }
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    //document.getElementById('message').innerHTML = " Charizard2 "
    if(opHP == 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
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
      document.getElementById('message').innerHTML = " Charizard fainted! "
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
	window.location.href = "proj2_2.html";
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

function toss() {
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





/* opponent's moves */

function flameThrower() {
  var miss = Math.floor((Math.random() * 10) + 1); // miss rate
  if(miss == 1 ) {
  document.getElementById('message').innerHTML = " Charizard's attack missed! " // attack missed
  }
  else {
  document.getElementById('message').innerHTML = " Charizard used flame thrower " // attack
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
  document.getElementById('myHP').innerHTML = userHP; // update hp
    if(userHP == 0) { // fainted
      document.getElementById('message').innerHTML = " Blastoise fainted! " // fainted
    }
  }
}

function dragonClaw() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charizard's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard used dragon claw "
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
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise fainted! "
    }
  }
}

function ember() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charizard's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard used ember "
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
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise fainted! "
    }
  }
}

function growl() {
  var miss = Math.floor((Math.random() * 10) + 1);
  if(miss == 1 ) {
    document.getElementById('message').innerHTML = " Charizard's attack missed! "
  }
  else {
  document.getElementById('message').innerHTML = " Charizard used growl "
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
  document.getElementById('myHP').innerHTML = userHP;
    if(userHP == 0){
      document.getElementById('message').innerHTML = " Blastoise fainted! "
    }
  }
}



function compPokemon() { // continue
  if(playerMove == 1 && opHP != 0) { // whos move
  var move = Math.floor((Math.random() * 4) + 1); // choose move randomly
    opAttacks[move](); // call attack from array
    playerMove = 0; // update player move
  }
}