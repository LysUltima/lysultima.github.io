var color = "Regular";
var suit;
var hand;
var shorthand; 
function createHand(value) {
	//hand
	hand = new Array(Number(document.getElementById("handsize").value));
	//iteration variables
	var i;
	var c;
	
	var validHand = false;
	while (!validHand) {
		for (i = 0; i < hand.length; i++) {
			hand[i] = Math.floor(Math.random() * 9) + 1;
		}
		hand.sort();
		validHand = true;
		c = 1;
		for (i = 1; i < hand.length; i++) {
			if (hand[i-1] == hand[i]) {
				c++;
			}
			else {
				c = 1;
			}
			if (c > 4) {
				validHand = false;
			}
		}
	}
	//random suit
	suit = Math.floor(Math.random() * 3);
	suit = suit == 0 ? "Man" : suit == 1 ? "Pin" : "Sou";
	
	drawHand();
}
function drawHand() {
	shorthand = ""; 
	//iteration variable
	var i;
	for (i = 0; i < 14; i++) {
		document.getElementById("tile" + i).innerHTML = "";
	}
	for (i = 0; i < hand.length; i++) {
		shorthand += String(hand[i]);
		document.getElementById("tile" + i).innerHTML = "<img class=front src=\"" + color + "/Front.svg\"><img class=tilepaint src=\"" + color + "/" + suit + hand[i] + ".svg\">";
	}
	
	//add link to tenhou
	shorthand += suit == "Man" ? "m" : suit == "Pin" ? "p" : "s";
	//document.getElementById("answer").setAttribute("onclick","window.open('https://tenhou.net/2/?q=" + shorthand + "');");
}
function switchColor() {
	color = color == "Regular" ? "Black" : "Regular";
	drawHand();
}
function getAnswer() {
	document.getElementsByTagName("iframe")[0].src = "https://tenhou.net/2/?q=" + shorthand
}
createHand();
