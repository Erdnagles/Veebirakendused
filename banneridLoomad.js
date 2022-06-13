window.onload = choosePic;

var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg");
var pildiKirjeldused = ["Kaunis lõvi", "Tiiger viiger", "Mõmmik"];
var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");
var thisAd = 0;

function choosePic(){
	let randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("loomaPildid").src = myPix[randomNum];
    document.getElementById("pildiKirjeldused").innerHTML = pildiKirjeldused[randomNum];
    this.rotate();
}

function rotate() {
    thisAd++;
    if(thisAd == adImages.length) {
        thisAd = 0;
    }
    document.getElementById("pildid").src = adImages[thisAd];
    
    setTimeout("rotate()",1000);
}