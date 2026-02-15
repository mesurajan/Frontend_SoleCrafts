
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishList ,clearWishList } from "../apps/Reducers/wishList";
import { addToCart } from "../Apps/Reducers/cartSlice";
import EmptyCartImg from "../assets/empty-cart.png";
import { Link, useNavigate } from "react-router-dom";

import { Trash2, ShoppingCart } from "lucide-react";


// ✅ Slugify
const slugify = (str) =>
  str?.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "") || "product";

export default function WishList () {
 const items = useSelector((state) => state.wishList?.items ?? []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Add to cart (ProductCard params)
  const handleAddToCart = (item) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add products to your cart!");
      navigate("/login");
      return;
    }

     dispatch(addToCart(item));
     alert("Product added to cart!");
  };

  if (items.length === 0) {
    return (
      <div className="bg-white container mx-auto text-[#0A174E] mb-10 px-4 md:px-0">
        <div className="bg-backgroundlite py-4 pt-20">
          <h1 className="text-3xl font-bold px-4">Order List</h1>
     
        </div>

        <div className="flex flex-col items-center justify-center py-20">
          <img src={EmptyCartImg} alt="Empty Wishlist" className="w-60 h-60 mb-6" />
          <h2 className="text-2xl font-semibold mb-2">Your Wishlist is empty</h2>
          <p className="text-gray-500 mb-4 text-center">
            Looks like you haven’t added anything yet.
          </p>
          <Link
            to="/product"
            className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800"
          >
            Go Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white container text-primary mb-15 px-6">
      {/* Header */}
      <div className="bg-backgroundlite py-4 pt-20">
        <h1 className="text-3xl font-bold px-4">Your Wishlist</h1>
     
      </div>

      <div className="flex flex-col gap-6 px-4 py-6">
        {/* Clear Wishlist */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              A little list of big dreams. 🌙
            </h1>
            <p className="text-gray-500 mt-1">
              Don’t wait too long… the best pieces won’t stay forever! ⏳
            </p>
          </div>

          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear your Wishlist?")) {
                dispatch(clearWishList());
              }
            }}
            className="viewdetails-btn hidden md:block"
          >
            Clear Wishlist
          </button>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-6">
          {items.map((item) => {

            const productLink = `/product/${item._id}`;

            return (
              <div
                key={item._id}
                className="relative flex flex-col bg-white rounded shadow-md border transition hover:shadow-xl hover:-translate-y-2"
              >
                {/* Top Icons */}
                <div className="absolute top-2 right-2 flex gap-2 z-20">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full shadow bg-white hover:bg-blue-100 flex justify-center items-center"
                  >
                    <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
                  </button>

                  <button
                    onClick={() => {
                      if (window.confirm("Remove this item from Wishlist?")) {
                        dispatch(removeFromWishList(item._id));
                      }
                    }}
                    className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-200 flex justify-center items-center"
                  >
                    <Trash2 className="w-3 h-3 md:w-4 md:h-4" />
                  </button>

                </div>

                {/* Image */}
                  <div className="w-37.5 h-37.5 md:w-50 md:h-50 mt-16 mb-4  mx-auto overflow-hidden rounded ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                   {/* Content */}
                <div className="flex flex-col items-center text-center px-2 grow">
                  <h3 className="text-sm md:text-base font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Rs. {item.finalPrice}
                  </p>
                </div>

                {/* Bottom Buttons */}
                <div className="mt-3 mb-3 flex gap-2 justify-center">
                  <Link to={productLink}>
                    <button className="viewdetails-btn">View Details</button>
                  </Link>

                  <button
                    onClick={() => {
                      const token = localStorage.getItem("token");
                      if (!token) {
                        alert("Please login to continue!");
                        navigate("/login");
                        return;
                      }
                      navigate("/paymentprocessing", {
                        state: { buyNowItem: item },
                      });
                    }}
                    className="buynow-btn"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

       
  
      </div>
    </div>
  );
}
