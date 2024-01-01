let boxes = document.getElementsByClassName("box");

function generateColor() {
  let value1 = Math.ceil(0 + Math.random() * 255);
  let value2 = Math.ceil(0 + Math.random() * 255);
  let value3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${value1},${value2},${value3})`;
}
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = generateColor();
});
