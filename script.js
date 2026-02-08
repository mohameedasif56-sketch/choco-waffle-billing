let total = 0;

function add() {
  let qty = document.querySelectorAll("input")[1].value;
  let price = document.querySelectorAll("input")[2].value;

  total += qty * price;
  document.getElementById("total").innerText =
    "Total: ₹" + total;
}
