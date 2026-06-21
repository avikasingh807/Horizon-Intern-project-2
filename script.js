function changeImage(element) {
  document.getElementById("mainImage").src = element.src;
}

function addToCart() {
  document.getElementById("cartMsg").innerText = "✔ Added to Cart!";
}