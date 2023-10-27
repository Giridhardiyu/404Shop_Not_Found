$(document).ready(function () {
    // Function to fetch and display all products from the server
    function getAllProducts() {
        $.get('/api/v1/bookings', function (data) {
            $('#productTable').empty();
            data.data.products.forEach(function (product) {
                $('#productTable').append(`
                    <tr>
                        <td>${product.productName}</td>
                        <td>${product.productCategory}</td>
                        <td>$${product.productPrice.toFixed(2)}</td>
                        <td>${product.productDescription}</td>
                        <td>
                            <button class="btn btn-sm btn-warning edit" data-id="${product._id}">Edit</button>
                            <button class="btn btn-sm btn-danger delete" data-id="${product._id}">Delete</button>
                        </td>
                    </tr>
                `);
            });
        });
    }

    // Initial call to fetch and display products
    getAllProducts();

    // Event listener for form submission (create a new product)
    $('#createProductForm').submit(function (e) {
        e.preventDefault();

        var newProduct = {
            productName: $('#productName').val(),
            productCategory: $('#productCategory').val(),
            productPrice: parseFloat($('#productPrice').val()),
            productDescription: $('#productDescription').val(),
        };

        $.post('http://localhost:3000/api/v1/bookings', newProduct, function () {
            // Clear form fields
            $('#createProductForm')[0].reset();
            // Refresh the product list
            getAllProducts();
        });
    });

    // Event listener for edit and delete buttons
    $('#productTable').on('click', '.edit', function () {
        var productId = $(this).data('id');
        // Implement edit functionality as needed
        // You can use a modal or another form for editing
    });

    $('#productTable').on('click', '.delete', function () {
        var productId = $(this).data('id');
        $.ajax({
            url: '/api/v1/bookings/' + productId,
            type: 'DELETE',
            success: function () {
                getAllProducts(); // Refresh the product list after deletion
            },
        });
    });
});
