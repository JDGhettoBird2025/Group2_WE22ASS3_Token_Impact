window.onload = function () {
  let tokens = parseInt(localStorage.getItem("tokens")) || 0;
  document.getElementById("token-count").textContent = tokens;

let discount = Math.min(tokens * 0.1, 50);
document.getElementById("discount").textContent = `R${discount.toFixed(2)}`;
};
