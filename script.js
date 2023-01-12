function removebottom(elem) {
  elem.remove();
}

function score1() {
  document.getElementById("firstnum").innerText++;
}

function score2() {
  document.getElementById("secnum").innerText++;

}

setTimeout(function () { alert("The Ninjas have won!"); }, 13000);