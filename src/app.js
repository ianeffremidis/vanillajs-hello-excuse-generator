/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
function excuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var randomWho = who[Math.floor(Math.random() * who.length)];
  var randomAction = action[Math.floor(Math.random() * action.length)];
  var randomWhat = what[Math.floor(Math.random() * what.length)];
  var randomWhen = when[Math.floor(Math.random() * when.length)];

  var exc =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  console.log("yasou");
  return exc;
}
window.onload = () => {
  document.getElementById("excuse").innerHTML = excuse();
  const mybtn = document.getElementById("but");
  mybtn.addEventListener("click", () => {
    document.getElementById("excuse").innerHTML = excuse();
  });
};
