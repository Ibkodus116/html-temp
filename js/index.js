function myFunc() {
  var x = document.getElementById("bcollapseExampletn");
  if (x.style.display === "block") {
    x.innerHTML = "Less";
    // x.style.display = "none";
  } else {
    x.innerHTML === "More";
  }
}

function plenty() {
  console.log("hello")
  let y = document.getElementById("view");
  y.style.display = "none"
  // for (let i = 0; i < 5; i++) {
  //   console.log("hello")
  // }
}
