var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImg1 = "dice" + randomNumber1 + ".png";

var randomImgSource1 = randomImg1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImg2 = "dice" + randomNumber2 + ".png";

var randomImgSource2 = randomImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImgSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
