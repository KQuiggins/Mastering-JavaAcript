// const canvas = document.getElementById("my-canvas");
// const ctx = canvas.getContext("2d");

// // draw a rectangle
// ctx.fillStyle = "red";
// ctx.fillRect(10, 10, 100, 100);

// // draw a circle
// ctx.fillStyle = "blue";
// ctx.arc(300, 300, 100, 0, Math.PI * 2);
// ctx.fill();

// // draw a line
// ctx.beginPath();
// ctx.strokeStyle = "green";
// ctx.moveTo(10, 10);
// ctx.lineTo(300, 300);
// ctx.stroke();

// // draw text
// ctx.font = "30px Arial";
// ctx.fillStyle = "black";
// ctx.fillText("Hello World", 150, 100, 100);

// // draw image
// const image = document.querySelector("img");
// image.style.display = "none";

// image.addEventListener("load", () => ctx.drawImage(image, 260, 250, 100, 100));

const image = document.querySelector("img");

let start;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;
  if (elapsed > 5000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `translateX(${elapsed / 20}px) rotate(${
    elapsed / 100
  }deg)`;
  requestAnimationFrame(step);
}

requestAnimationFrame(step);
