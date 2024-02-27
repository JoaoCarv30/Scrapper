const form = document
  .querySelector(".form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const keyword = document.querySelector("#keyword").value;

    const loading = document.querySelector(".loading");
    loading.style.display = "block";

    ajaxFunction(keyword, loading);
  });

function ajaxFunction(keyword, loading) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const products = JSON.parse(this.responseText);
      console.log(products);

      const cardContainer = document.querySelector(".cards");
      cardContainer.innerHTML = ""; 

  

      const htmlString = products
        .map((product) => {
          if (product.name  === "" || product.price==="") return;

          const price = product.price.split("$")[1];
          const stars = product.rating.split("stars")[0];

         


          console.log(product.numberOfReviews)

          return `<div class="product-card">
          <img src="${product.imageUrl}" alt="Product Image" class="product-image">
        
          <div class="product-info">
            <h2 class="product-title">${product.name}</h2>
            <p class="product-price">$${price}</p>
            <p class="product-rating">
            ${stars} <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            </p>
            <p class="product-reviews">${product.numberOfReviews} Reviews</p>
            <button class="product-button"><i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i></button>
          </div>
        </div>`;  
        })
        .join("");

      cardContainer.innerHTML = htmlString;

      // Hide the loading animation
      loading.style.display = "none";
    }
  };
  xhttp.open("GET", `http://localhost:5000/scrape?keyword=${keyword}`, true);
  xhttp.send();
} 