var marbles = document.getElementsByClassName("marble");
var index = 0;
console.log(marbles);

function clear() {
  for (var i = 0; i < marbles.length; i++) {
    marbles[i].classList.remove("test");
  }
}

function movingFun() {
  if (index >= marbles.length) {
    index = 0;
  } else {
    clear();
    marbles[index].classList.add("test");
    index++;
  }
}

var marbleInterval = setInterval(movingFun, 500);

for (var i = 0; i < marbles.length; i++) {
  marbles[i].addEventListener("mouseover", function () {
    clearInterval(marbleInterval);
  });
  marbles[i].addEventListener("mouseout", function () {
    marbleInterval = setInterval(movingFun, 500);
  });
}
// marbles.addEventListener("click", function (e) {
//   // if(e.type == "click")
//   console.log("clicked");
// });
// clearInterval(marbleInterval);
