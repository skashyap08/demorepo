const words = [
"Frontend Developer",
"UI/UX Designer",
"Web Developer",
"Freelancer"
];

let index = 0;
let charIndex = 0;
let currentWord = "";
let currentChar = "";

function type() {

if(index >= words.length){
index = 0;
}

currentWord = words[index];
currentChar = currentWord.slice(0, ++charIndex);

document.getElementById("typing").textContent = currentChar;

if(currentChar.length === currentWord.length){
index++;
charIndex = 0;
}

setTimeout(type, 200);
}

type();