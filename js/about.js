const headshotDiv = document.getElementById("headshot");
const headshot = document.createElement("img");

const addHeadshot = () => {
  headshot.setAttribute("src", "images/headshot-smile.png");
  headshot.setAttribute("class", "thumb");
  headshot.setAttribute("alt", "Tara Fenton headshot");
  headshotDiv.appendChild(headshot);

  headshotDiv.addEventListener("mouseover", headshotOver);
  headshotDiv.addEventListener("mouseout", headshotOut);
};
const headshotOver = () => {
  headshot.setAttribute("src", "images/headshot-laugh.png");
};

const headshotOut = () => {
  headshot.setAttribute("src", "images/headshot-smile.png");
};

document.body.onload = addHeadshot;
