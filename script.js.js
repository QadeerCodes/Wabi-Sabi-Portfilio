
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    themeBtn.textContent = "☀️";
  }else{
    themeBtn.textContent = "🌙";
  }
});

let count = 0;
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;

    button.textContent = "Added ✔";
    setTimeout(() => {
      button.textContent = "Add to Cart";
    },1000);
  });
});
