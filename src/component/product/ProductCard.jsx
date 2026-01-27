import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="font-semibold text-center text-sm">{product.title}</h3>
      <p className="text-center text-gray-600 text-sm mt-1">
        ${product.price}
      </p>
    </div>
  );
}

export default ProductCard;
