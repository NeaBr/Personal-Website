function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function demoFunction() {
  alert("Work in progress :)");
}

const experience = ["Logistiikka", "Kahvilatyöntekijä", "Rakennusapulainen"];

let text = "";
for (let i = 0; i < experience.length; i++) {
  text += experience[i] + "<br>";
}

document.getElementById("exp").innerHTML = text;

const projects = ["project one", " project two", " project three"];
document.getElementById("demo").innerHTML = projects;

const person = {
  firstName: "Nea",
  lastName: "Brännfors",
  age: 21,
  eyeColor: "hazel",
};

document.getElementById("object").innerHTML =
  person.firstName + " is " + person.age + " years old.";

let x = myFunction(8, 7);
document.getElementById("calc").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}

function coding(language, level) {
  this.language = language;
  this.level = level;
}

const codingExperience = new coding("JavaScript", "Beginner");

document.getElementById("ooj").innerHTML =
  "I have experience with " +
  codingExperience.language +
  " My level is " +
  codingExperience.level +
  ".";

function Function() {
  alert("Work in progress :)");
}

// FETCH API

const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");

dog_btn.addEventListener("click", getRandomDog);

function getRandomDog() {
  fetch('https://random.dog/woof.json')
      .then(res => {
          if (!res.ok) {
              throw new Error('Network response was not ok');
          }
          return res.json();
      })
      .then(data => {
          if (data.url.includes('.mp4')) {
              getRandomDog();
          } else {
              dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
          }
      })
      .catch(error => {
          console.error('Fetch error:', error);
      });
}
