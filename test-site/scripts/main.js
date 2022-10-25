const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "/test-site/images/icecreamcone.svg") {
        myImage.setAttribute("src", "/test-site/images/hand-icecream.jpeg");
    } else {
        myImage.setAttribute("src", "/test-site/images/icecreamcone.svg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Ice cream is yummy, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Ice cream is yummy, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};