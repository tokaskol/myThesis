const buttonOne = document.getElementById("homeButtonOne"); 
const buttonTwo = document.getElementById("homeButtonTwo"); 
buttonOne.addEventListener("mouseenter", addClassFirst);
buttonTwo.addEventListener("mouseenter", addClassSecond);

function addClassFirst() {
  buttonOne.classList.add("dotButton1");
  buttonOne.classList.remove("dotButtonBeforeClicked1");
}
function addClassSecond() {
  buttonTwo.classList.add("dotButton2");
  buttonTwo.classList.remove("dotButtonBeforeClicked2");
}
