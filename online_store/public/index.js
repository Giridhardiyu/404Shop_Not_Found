let prod_catalogue = document.getElementById("prod_catag");


fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(json => {
    console.log(json)
    json.data.products.map(products => {
        // console.log(products.productName)
        prod_catalogue.append(products_catag(products));
    })
  })

function products_catag({productImage, productName, productPrice, productDescription}){
    const productContainer = document.createElement("div");
    productContainer.classList.add("prod");
    productContainer.innerHTML = 
    `
        <div class="prod_image">
            <img src="${productImage}" alt="Samsung galaxy S23 ultra" height="200px" width="200px">
        </div>
        <div class="prod_content">
            <div class="prod_name">
                <h2>${productName}</h2>
            </div>
            <div class="prod_rating">
                <div class="stars">
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
            </div>
            <div class="prod-price">
                <h1>₹${productPrice}</h1>
            </div>
            <div class="prod_discr">
                <p>${productDescription}</p>
            </div>
            <div class="prod_deliv">
                <p><i class='bx bx-check'></i>Get it by Sat, 28</p>
            </div>
        </div>
    `;
    return productContainer

}