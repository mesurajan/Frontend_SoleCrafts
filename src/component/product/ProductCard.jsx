import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleWishlist = () => {
    console.log("Wishlist:", product._id);
  };

  const handleCart = () => {
    console.log("Add to cart:", product._id);
  };

  const handleBuyNow = () => {
    navigate(`/checkout/${product._id}`);
  };

  const productLink = `/product/${product._id}`;

  return (
    <div className="relative flex flex-col items-center p-4 bg-white shadow rounded border hover:shadow-xl transition">
      
      {/* Wishlist + Cart */}
      <div className="absolute top-2 right-2 flex gap-2">
        <button
          onClick={handleWishlist}
          className="p-2 bg-white rounded-full shadow hover:bg-pink-100"
        >
          <FaRegHeart className="text-pink-500 size-3 md:size-4" />
        </button>

        <button
          onClick={handleCart}
          className="p-2 bg-white rounded-full shadow hover:bg-blue-100"
        >
          <ShoppingCart className="size-3 md:size-4" />
        </button>
      </div>

      {/* Image */}
      <div className="w-25 h-35 md:w-50 md:h-60 flex items-center justify-center overflow-hidden rounded-lg bg-white mb-1">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="mt-2 text-center">
        <h3 className="text-sm font-semibold">{product.title}</h3>
        <p className="text-xs text-gray-600">
          Rs. {product.finalPrice}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex flex-nowrap gap-1">
        <Link to={productLink}>
          <button className="viewdetails-btn whitespace-nowrap">
            View Details
          </button>
        </Link>

        <button
          onClick={handleBuyNow}
          className="buynow-btn whitespace-nowrap"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
