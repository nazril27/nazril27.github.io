const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc == "images/unfari.jpg"){
		myImage.setAttribute("src", "images/gon.jpg");
	} else {
		myImage.setAttribute("src", "images/unfari.jpg");
	}
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	const myName = prompt("Please enter your name.");
	if (!myName){
		setUserName();
	} else {
	localStorage.setItem("name", myName);
	myHeading.textContent = `Universitas al-Ghifari, ${myName}`;
	}
};

if (!localStorage.getItem("name")){
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Universitas al-Ghifari, ${storedName}`;
};

myButton.addEventListener("click", () => {
	setUserName();
});