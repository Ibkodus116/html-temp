function myFunc() {
  var x = document.getElementById("btn");
  if (x.style.overflow === "hidden") {
    x.style.overflow = "visible";
    x.style.whiteSpace = "nowrap"
    x.style.width = "50%"
  } else {
    x.style.overflow = "visible";
  }
}