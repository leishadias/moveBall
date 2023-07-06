const ball = document.getElementById("ball");
let windowInnerWidth = window.innerWidth;
let windowInnerHeight = window.innerHeight;

function controlBall(event) {
  if (event.key === "w") {
    let top = ball.style.top.split("px");
    if (Number(top[0]) > 0) {
      top[0] = Number(top[0]) - 10;
      console.log(top[0]);
      ball.style.top = top[0] + "px";
    } else {
      console.log("no");
    }
  } else if (event.key === "a") {
    let left = ball.style.left.split("px");
    if (Number(left[0]) > 0) {
      left[0] = Number(left[0]) - 10;
      console.log(left[0]);
      ball.style.left = left[0] + "px";
    } else {
      console.log("no");
    }
  } else if (event.key === "s") {
    let bottom = ball.style.top.split("px");
    if (Number(bottom[0]) + 10 + ball.offsetHeight < windowInnerHeight) {
      bottom[0] = Number(bottom[0]) + 10;
      console.log(bottom[0]);
      ball.style.top = bottom[0] + "px";
    } else {
      console.log("no");
    }
  } else if (event.key === "d") {
    let right = ball.style.left.split("px");
    if (Number(right[0]) + 10 + ball.offsetWidth < windowInnerWidth) {
      right[0] = Number(right[0]) + 10;
      console.log(right[0]);
      ball.style.left = right[0] + "px";
    } else {
      console.log("no");
    }
  }
}

window.addEventListener("keydown", controlBall);
