const copy = document.getElementById("copy");
const Click = document.querySelector(".btn-first");
const Mouse = document.querySelector(".btn-second");
const bg = document.querySelector(".bckGround");
const colInput = document.getElementById("colorInput");
const colText = document.getElementById("colorText");

const arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const random = () => {
  let str = "#";
  for (let i = 0; i < 6; i++) {
    str += arr[Math.floor(Math.random() * arr.length)];
  }
  return str;
};

const randomColor = () => {
  const color = random();
  bg.style.backgroundColor = color;
  colText.textContent = color;
};

colInput.addEventListener("input", () => {
  bg.style.backgroundColor = colInput.value;
  colText.textContent = colInput.value;
});

Click.addEventListener("click", randomColor);
Mouse.addEventListener("mouseover", randomColor);

copy.addEventListener("click", () => {
  alert("copied");
  navigator.clipboard.writeText(colText.textContent);
});
