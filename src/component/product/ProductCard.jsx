import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../apps/Reducers/cartSlice";
import { addToWishList } from "../../apps/Reducers/wishList";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const handleWishlist = () => {
     const token = localStorage.getItem("token");
    if (!token) {
    alert("Please login first !!");
      return navigate("/login");

    }
        dispatch(addToWishList(product));
        alert("Product added to wishlist!");
    
  };

    const handleCart = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to add products to your cart!");
        return navigate("/login");
      }
      dispatch(addToCart(product));
      alert("Product added to cart!");
    };


const handleBuyNow = (item) => {
  const buyNowItem = {
    ...item,
    price: item.price ?? item.finalPrice ?? 0, // fallback if price missing
    quantity: 1, // ensure quantity exists
  };

  navigate("/paymentprocessing", {
    state: { buyNowItem },
  });
};


  const productLink = `/product/${product._id}`;

  return (
    <div className="relative flex flex-col items-center p-4 bg-white shadow rounded border hover:shadow-xl transition">
         {/* Wishlist + Cart Buttons */}
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
   
         {/* Product Image */}
         <div className="w-[100px] h-[140px] md:w-[200px] md:h-[240px] flex items-center justify-center overflow-hidden rounded-lg bg-white mb-1">
           <img
               src={product.image}
              alt={product.title}
             className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
           />
         </div>
   
         {/* Product Info */}
         <div className="mt-2 text-center">
           <h3 className="text-sm font-semibold">{product.title}</h3>
           <p className="text-xs text-gray-600">Rs. {product.finalPrice}</p>
         </div>

         {/* Action Buttons */}
            <div className="mt-4 flex flex-nowrap gap-1">
              <Link to={productLink}>
                <button className="viewdetails-btn whitespace-nowrap">View Details</button>
              </Link>
              <button
                onClick={() => handleBuyNow(product)}
                className="buynow-btn whitespace-nowrap"
              >
                Buy Now
              </button>
            </div>
       </div>
       
     );
   };

export default ProductCard;
