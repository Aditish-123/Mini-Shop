let cartCount = 0;

function addToCart() {
    cartCount++;

    document.getElementById("cartCount").innerText = cartCount;
}

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {

        const productName = product.dataset.name.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
});
