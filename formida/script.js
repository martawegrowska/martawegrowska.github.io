/********** FORMIDA FOR MS TEAMS PROTOTYPE **********/

// MODAL 1
// Get the modal
var modal1 = document.getElementById('myModal1');
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
// Get the button element that closes the modal
var button1 = document.getElementsByClassName("close1")[0];
// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}
// When the user clicks on button, close the modal
button1.onclick = function() {
    modal1.style.display = "none";
}

// MODAL 2
var modal2 = document.getElementById('myModal2');
var btn2 = document.getElementById("myBtn2");
var button2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
    modal2.style.display = "block";
    modal1.style.display = "none";
}
button2.onclick = function() {
    modal2.style.display = "none";
    modal1.style.display = "block";
}

// MODAL 3
var modal3 = document.getElementById('myModal3');
var btn3 = document.getElementById("myBtn3");
var button3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
    modal3.style.display = "block";
    modal2.style.display = "none";
}
button3.onclick = function() {
    modal3.style.display = "none";
    modal2.style.display = "block";
}

// MODAL 4
var modal4 = document.getElementById('myModal4');
var btn4 = document.getElementById("myBtn4");
var button4 = document.getElementsByClassName("close4")[0];
btn4.onclick = function() {
    modal4.style.display = "block";
    modal3.style.display = "none";
}
button4.onclick = function() {
    modal4.style.display = "none";
    modal3.style.display = "block";
}
// Click outside the white box to exit
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    else if (event.target == modal2) {
        modal1.style.display = "none";
        modal2.style.display = "none";
    }
    else if (event.target == modal3) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
    }
    else if (event.target == modal4) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
    }
}

// Modal 2 and 3 when clicked it shows a border
var cards = document.querySelectorAll(".lista");
for (var i = 0; i < cards.length; i++) {
	var card = cards[i];
	card.onclick = function () {
		if (this.classList.contains("normal")) {
			this.classList.add("clicked");
      this.classList.remove("normal")
		}
		else {
			this.classList.remove("clicked");
      this.classList.add("normal")
		}
	};
}
// Modal 4 background change when clicked
var cards = document.querySelectorAll(".rutor");
for (var i = 0; i < cards.length; i++) {
	var card = cards[i];
	card.onclick = function () {
		if (this.classList.contains("bakgrund")) {
			this.classList.add("bakgrund2");
      this.classList.remove("bakgrund")
		}
		else {
			this.classList.remove("bakgrund2");
      this.classList.add("bakgrund")
		}
	};
}

/********** Unused/Failed code **********/

// MODAL 2 selection
//(working only on one)

/*
var syfte = document.getElementById("ex");

syfte.onclick = function() {
  if (syfte.style.borderLeft === "") {
  syfte.style.borderLeft = "4px solid #6364A7";
}
else {
    syfte.style.borderLeft = "";
  }
}
*/

// For screen3 table
/*
var cards = document.querySelectorAll(".colors");
for (var i = 0; i < cards.length; i++) {
	var card = cards[i];
	card.onclick = function () {
		if (this.classList.contains("bg")) {
			this.classList.add("bg2");
      this.classList.remove("bg")
		}
		else {
			this.classList.remove("bg2");
      this.classList.add("bg")
		}
	};
}
*/
