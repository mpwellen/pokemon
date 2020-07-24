var tID;
var test;
var music;

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookieB(cname, cvalue, exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookieC(cname, cvalue, exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function getCookieB(cname) {
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

function getCookieC(cname) {
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



function checkCookie() {
  var username = getCookie("myCook");
  if (username != "") {
   //alert("x-coordinate " + username);
  } else {
    username = prompt("Please enter your x-location:", "");
    if (username != "" && username != null) {
      setCookie("myCook", username, 365);
    }
  }
}

function checkCookieB() {
  var username = getCookie("myCookB");
  if (username != "") {
   //alert("y-coordinate: " + username);
  } else {
    username = prompt("Please enter your y-location:", "");
    if (username != "" && username != null) {
      setCookie("myCookB", username, 365);
    }
  }
}

function checkCookieC() {
  var username = getCookie("myCookC");
  if (username != "") {
   //alert("y-coordinate: " + username);
  } else {
	  username="0";
    //username = prompt("Please enter your y-location:", "");
    if (username != "" && username != null) {
      setCookieC("myCookC", username, 365);
    }
  }
}



function stopAnimate() {
	clearInterval(tID);
	//document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
	//document.getElementById("image").style.width='240px';
	
} // end stopAnimate function

function animateScriptLeft() {
	stopAnimate();
	// Simulate an HTTP redirect:
	var num=Math.random();
	console.log(num);
	if(num<0.1)
	{
	var string=document.getElementById("demo").style.left;
		var stringB=document.getElementById("demo").style.top;
		//var stringC=toString(0);
		setCookie("myCook",string,1);
		setCookie("myCookB",stringB,1);
		var temp=parseInt(training)+1;
		var training=toString(temp);
		setCookie("myCookC",training,1);
		console.log(training);
				alert("A random pokemon has appeared!");

	window.location.href = "examplePokemon.html";
	}
	else{
	//var training="0";
	console.log(getCookie("myCookC",training,1));
	var stringC=toString(0);
	setCookie("myCookC",training,1);
	var position = 10;
	var positionB = 370;
	const interval = 100;
	const diff = 181;
	var edge=0;

	tID = setInterval ( () => {

	var element = document.getElementById("demo");
	if(parseInt(element.style.left)>5)
	{
	element.style.left=parseInt(element.style.left)-20;
	}
	else{
		edge=1;
	}
	document.getElementById("image").style.backgroundPosition = `-${position}px ${positionB}px`;
	document.getElementById("image").style.width='171px';


if (position < 512)
	{ position = position + diff;}

 // increment position by 256each time
 
else if(edge==1)
{ position=10;
}

 else
 { position = 10; 
	stopAnimate();
	document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
	document.getElementById("image").style.width='240px';
	}
// reset position 

}
, interval ); // end of setInerval function
	}

} // end of animateScripr function

function animateScriptRight() {
	stopAnimate();
	var num=Math.random();
	console.log(num);
	if(num<0.1)
	{
		var stringB=document.getElementById("demo").style.top;
		//var stringC=toString(0);
		setCookie("myCook",string,1);
		setCookie("myCookB",stringB,1);
		var temp=parseInt(training)+1;
		var training=toString(temp);
		setCookie("myCookC",training,1);
		console.log(training);
	window.location.href = "examplePokemon.html";
			alert("BATTLE");

	//window.location.href = "proj3.html";
	}
	else{
	var position = 0;
	var positionB=690;
	const interval = 100;
	const diff = 181;
	var edge=0;
	const right=document.documentElement.clientWidth;
	tID = setInterval ( () => {

	var element = document.getElementById("demo");
	if(parseInt(element.style.left)<(parseInt(document.documentElement.clientWidth)-200))
	{
	element.style.left=parseInt(element.style.left)+20;
	}
	else{edge=1;}
	document.getElementById("image").style.backgroundPosition = `-${position}px ${positionB}px`;
	document.getElementById("image").style.width='170px';

if (position < 512)
	{ position = position + diff;}
 // increment position by 256each time

 else if(edge==1){ position=5;}
	 
 else 
 { position = 5 
	stopAnimate();
	document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
	document.getElementById("image").style.width='240px';
}
// reset position 

}
, interval ); // end of setInerval function
	}

} // end of animateScripr function

function animateScriptUp() {
	stopAnimate();
	var num=Math.random();
	console.log(num);
	if(num<0.1)
	{
		var stringB=document.getElementById("demo").style.top;
		//var stringC=toString(0);
		setCookie("myCook",string,1);
		setCookie("myCookB",stringB,1);
		var temp=parseInt(training)+1;
		var training=toString(temp);
		setCookie("myCookC",training,1);
		console.log(training);
				alert("BATTLE");

	window.location.href = "examplePokemon.html";
	}
	else{
	var position = 1020;
	const interval = 100;
	const diff = 240;
	var edge=0;
	//const diff=195;
	tID = setInterval ( () => {

	var element = document.getElementById("demo");
	if(parseInt(element.style.top)>5)
	{
	element.style.top=parseInt(element.style.top)-20;
	}
	else{edge=1;}
	document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
	document.getElementById("image").style.width='240px';
	


if (position < 1368)
	{ position = position + diff;
	}
 // increment position by 256each time
else if(edge==1){position=1020;}
 else 
 { position = 0; 
	stopAnimate();
	document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
	document.getElementById("image").style.width='240px';
}
// reset position 

}
, interval ); // end of setInerval function
	}
} // end of animateScripr function

function animateScriptDown() {
	stopAnimate();
	var num=Math.random();
	console.log(num);
	if(num<0.1)
	{
	var stringB=document.getElementById("demo").style.top;
		//var stringC=toString(0);
		setCookie("myCook",string,1);
		setCookie("myCookB",stringB,1);
		var temp=parseInt(training)+1;
		var training=toString(temp);
		setCookie("myCookC",training,1);
		console.log(training);
		alert("BATTLE");
	window.location.href = "examplePokemon.html";
	}
	else{
	var position = 0;
	const interval = 100;
	const diff = 240;
	var edge=0;

	tID = setInterval ( () => {

	var element = document.getElementById("demo");
	if(parseInt(element.style.top)<parseInt(document.documentElement.clientHeight)+200)
	{
	element.style.top=parseInt(element.style.top)+20;
	}
	else{edge=1;}
	document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
	document.getElementById("image").style.width='240px';


if (position < 684)
	{ position = position + diff;}
 // increment position by 256each time
 else if(edge==1){position=0;}
 else 
 { position = 0; 
	stopAnimate();
	document.getElementById("image").style.backgroundPosition = `-${position}px 0px`;
	document.getElementById("image").style.width='240px';
	}
// reset position 

}
, interval ); // end of setInerval function
	}
} // end of animateScripr function

function leftArrowPressed() {
            //var element = document.getElementById("demo");
			//element.style.left=parseInt(element.style.left)-5;
			animateScriptLeft();
            //element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

function rightArrowPressed() {
	//var element = document.getElementById("demo");
	//element.style.left = parseInt(element.style.left) + 5 + 'px';
	animateScriptRight();

}

function upArrowPressed() {
	//var element = document.getElementById("demo");
	//element.style.top = parseInt(element.style.top) - 5 + 'px';
	animateScriptUp();
	//stopAnimate();
}

function downArrowPressed() {
	//var element = document.getElementById("demo");
	//element.style.top = parseInt(element.style.top) + 5 + 'px';
	animateScriptDown();
	//stopAnimate();
}

 function moveSelection(evt) {
                switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
					case 65:
					leftArrowPressed();
					break;
					case 68:
					rightArrowPressed();
					break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    upArrowPressed();
					case 87:
					upArrowPressed();
                    break;
                    case 40:
                    downArrowPressed();
                    break;
					case 83:
					downArrowPressed();
                    }
                };

function docReady()
        {
			var test=checkCookie();
			var testB=getCookie("myCook");
			console.log(testB);
			var testC=checkCookieB();
			var testD=getCookieB("myCookB");
			var testE=checkCookieC();
			var training=getCookieC("myCookC");
			console.log(testD);
			 document.getElementById('demo').style.left=testB;
          document.getElementById('demo').style.top=testD;
		  console.log(training);
          window.addEventListener('keydown', moveSelection);
		  music=0;
		  var audio = new Audio("overworld.ogg");
			audio.play();
			music=1;
        }
		