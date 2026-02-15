import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoMdRemove, IoMdAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import {
  clearCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../apps/Reducers/cartSlice";
import { FaRegHeart } from "react-icons/fa";
import EmptyCartImg from "../assets/empty-cart.png";

import { Link, useNavigate } from "react-router-dom";
import { addToWishList } from "../apps/Reducers/wishList";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  decrease qty
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item._id ));
    }
  };

  //  increase qty
  const handleIncrease = (item) => {
    dispatch(increaseQuantity(  item._id ));
  };

  // remove item
  const handleRemoveFromCart = (_id) => {
    dispatch(removeFromCart( _id ));
  };

  // wishlist
  const handleWishlist = (item) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    dispatch(addToWishList(item));
    alert("Product added to wishlist !")
  };

  // Buy Now 
  const handleBuyNow = (item) => {
    navigate("/paymentprocessing", {
      state: { buyNowItem: item },
    });
  };

  // total price
  const totalPrice = items.reduce(
    (acc, item) => acc + Number(item.finalPrice) * item.quantity,
    0
  );

  // checkout for entire cart 
  const handleCheckout = () => {
    navigate("/paymentprocessing", { state: { items } });
  };



  return (
    <div className="bg-white container mx-auto text-[#0A174E] mb-10 md:px-0 mt-20 px-6">
      {/* HEADER */}
      <div className="bg-backgroundlite py-4 pt-20">
        <h1 className="text-3xl font-bold px-4">Your Carts here</h1>
       
      </div>

      <section className="p-6 mx-auto">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img
              src={EmptyCartImg}
              alt="Empty Cart"
              className="w-60 h-60 object-contain mb-6"
            />
            <h2 className="text-2xl font-semibold mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-4 text-center">
              Looks like you haven’t added anything to your cart yet.
            </p>
            <Link
              to="/product"
              className="px-6 py-3 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
            >
              Go Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="relative bg-white shadow hover:shadow-lg transition p-4"
                >
                  {/* TOP ACTIONS */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={() => handleWishlist(item)}
                      className="p-2 bg-white rounded-full shadow hover:bg-pink-100"
                    >
                      <FaRegHeart className="text-pink-500 size-3 md:size-4" />
                    </button>

                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to remove this item?"
                          )
                        ) {
                          handleRemoveFromCart(item._id);
                        }
                      }}
                      className="p-1 bg-white rounded-full shadow hover:bg-red-100 text-red-500"
                    >
                      <BsTrash size={14} />
                    </button>
                  </div>

                  {/* IMAGE */}
                  <div className="w-full h-36 flex items-center justify-center mb-6 mt-14 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    Rs. {item.finalPrice}
                  </p>

                  {/* QUANTITY + PRICE */}
                  <div className="flex items-center justify-between border-t mt-3 pt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="p-1 bg-gray-100 hover:bg-gray-200"
                      >
                        <IoMdRemove size={14} />
                      </button>

                      <span className="text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleIncrease(item)}
                        className="p-1 bg-gray-100 hover:bg-gray-200"
                      >
                        <IoMdAdd size={14} />
                      </button>
                    </div>

                    <span className="text-sm font-semibold">
                      Rs.{" "}
                      {(item.finalPrice * item.quantity).toLocaleString()}
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                  <button
                    onClick={() => handleBuyNow(item)}
                    className="flex-1 bg-[#02573d] hover:bg-[#044633] rounded-[6px] text-white py-1.5 text-sm"
                  >
                    Buy Now
                  </button>

            
                </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="mt-8 p-6 bg-white shadow-lg rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Total Info */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-left">
                  <p className="text-gray-500 text-sm">Items in Cart: {items.length}</p>
                  <p className="text-2xl font-bold text-[#0A174E]">
                    Total: Rs. {totalPrice.toLocaleString()}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Taxes and shipping may apply
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                <button
                  onClick={() => {
                    if (
                      window.confirm("Are you sure you want to clear your cart?")
                    ) {
                      dispatch(clearCart());
                    }
                  }}
                  className="flex-1 sm:flex-none px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition"
                >
                  Clear your cart  Cart
                </button>

                <button
                  onClick={handleCheckout}
                  className="flex-1 sm:flex-none px-6 py-2 bg-[#031d8f] hover:bg-[#0A174E] text-white font-semibold rounded-lg shadow-md transition"
                >
                  Checkout
                </button>
              </div>
            </div>     
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
