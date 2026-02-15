import React from "react";
import { useParams } from "react-router-dom";

//  Import BOTH data sources
import mockProducts from "../data/mockproducts";
import section04 from "../data/section04";

function ProductDetails() {
  const { id } = useParams();

  // Flatten nested category products
  const nestedProducts = mockProducts.flatMap(
    (category) => category.products
  );

  // Merge ALL products into ONE array
  const allProducts = [...nestedProducts, ...section04];

  // Find product (id from URL is string → convert to number)
  const product = allProducts.find(
    (p) => p._id === Number(id)
  );

  if (!product) {
    return (
      <p className="p-6 text-center text-red-500 mt-26">
        Product not found
      </p>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto mt-26">
      <h2 className="text-2xl font-bold mb-4">
        {product.title}
      </h2>

      <img
        src={product.image}
        alt={product.title}
        className="w-72 mb-4"
      />

      <p className="text-lg font-semibold">
        Rs. {product.finalPrice}
      </p>

      <p className="mt-2 text-gray-600">
        {product.description}
      </p>

      {/* Extra info */}
      <div className="mt-4 space-y-1 text-sm">
        <p>fittype:{product.fitType}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>
        <p><strong>Stock:</strong> {product.inStock ? "Available" : "Out of stock"}</p>
        <p className="flex items-center gap-2">
          <strong>Available Sizes:</strong>
          <span className="flex gap-2">
            {product.availableSizes.map((size) => (
              <span
                key={size}
                className="px-2 py-1 border rounded text-sm bg-gray-100"
              >
                {size}
              </span>
            ))}
          </span>
        </p>
        <p><strong>Delivery:</strong> {product.deliveryInfo}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
