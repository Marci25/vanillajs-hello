/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function generateExcuse() {
  let whoExcuse = ["The dog", "My grandma", "The mailman", "My bird"];
  let actionExcuse = ["ate", "peed", "crushed", "broke"];
  let whatExcuse = ["my homework", "my phone", "the car"];
  let whenExcuse = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let who = whoExcuse[Math.floor(Math.random() * whoExcuse.length)];
  let action = actionExcuse[Math.floor(Math.random() * actionExcuse.length)];
  let what = whatExcuse[Math.floor(Math.random() * whatExcuse.length)];
  let when = whenExcuse[Math.floor(Math.random() * whenExcuse.length)];

  return `${who} ${action} ${what} ${when}`;
}
document.getElementById("excuse").innerHTML = generateExcuse();
console.log(generateExcuse());
