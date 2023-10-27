window.addEventListener('DOMContentLoaded', function() {
    var params = new URLSearchParams(window.location.search);
    var categoryName = params.get('category');
    var categoryElement = document.getElementById('cat_Name');
    if (categoryName) {
        categoryElement.textContent = categoryName;
    }



    
let prod_catalogue = document.getElementById("prod_catag");

fetch(`http://localhost:3000/products/category/${categoryName}`)
  .then(res => res.json())
  .then(json => {
    if (json.status === 'success') {
      json.data.products.map(products => {
        prod_catalogue.append(products_catag(products));
      });
    } else {
      console.log('Products empty');
      prod_catalogue.append(emptyProd());
    }
  })
  .catch(error => {
    console.log(error);
  })
    // json.data.products.map(products => {
    //     // console.log(products.productName)
    //     prod_catalogue.append(products_catag(products));
    // 

  function products_catag({productImage, productName, productPrice, productDescription, _id}){
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
        <div class="prod_edit">
            <a type="button" class="modify_button" onclick="update_pro()" id="${_id}">Update</a>
            <a type="button" class="delete_button" onclick="delete_pro()" id="${_id}">Delete</a>
        </div>
    </div>
    `;
    return productContainer

}

    function emptyProd(){
        const productContainer = document.createElement("div");
        productContainer.classList.add("prod");
        productContainer.innerHTML = "<h1>No products found</h1>"
    }
}); 
