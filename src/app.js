/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  documen;
  console.log();
};
let generateExcuse = () => {
  let pronoun = ["A ", "The "];
  let subject = ["son ", "coworker  ", "dog ", "cleaner ", "assitant "];
  let action = ["took my ", "threw my ", "stole my ", "broke my"];
  let possetion = ["homework ", "toe ", "car ", "shoe "];
  let where = ["on the street", "in my house ", "in my driveway "];

  let pronounIndex = Math.random(Math.floor() * pronoun.length);
  let subjectIndex = Math.random(Math.floor() * subject.length);
  let actionIndex = Math.random(Math.floor() * action.length);
  let possetionIndex = Math.random(Math.floor() * possetion.length);
  let whereIndex = Math.random(Math.floor() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
