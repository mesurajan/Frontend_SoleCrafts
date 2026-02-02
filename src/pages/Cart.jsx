import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Apps/Reducers/cartSlice";
import EmptyState from "../component/ui/EmptyState";

function Cart() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const subtotal = items.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const shippingFee = items.length ? 20 : 0;
  const total = subtotal + shippingFee;
  
if (items.length === 0) {
  return <EmptyState type="cart" />;
}
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-32">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      {/* Cart Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-xl shadow-sm p-4"
          >
            {/* Left */}
            <div className="flex items-center gap-4 w-full md:w-2/5">
              <button
                onClick={() => dispatch(removeFromCart(item._id))}
                className="text-red-500 text-xl hover:scale-110 transition"
              >
                ✕
              </button>

              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain border rounded-lg"
              />

              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">
                  Rs. {item.finalPrice} / unit
                </p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                disabled={item.quantity === 1}
                onClick={() => dispatch(decreaseQuantity(item._id))}
                className={`px-3 py-1 rounded-lg border transition
                  ${
                    item.quantity === 1
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-100"
                  }`}
              >
                −
              </button>

              <span className="min-w-[30px] text-center font-medium">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQuantity(item._id))}
                className="px-3 py-1 rounded-lg border hover:bg-gray-100 transition"
              >
                +
              </button>
            </div>

            {/* Price */}
            <div className="font-semibold text-lg">
              Rs. {item.finalPrice * item.quantity}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {/* Coupon */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Voucher code"
            className="border px-4 py-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-6 rounded-lg hover:bg-indigo-700 transition">
            Redeem
          </button>
        </div>

        {/* Summary */}
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>Rs. {shippingFee}</span>
          </div>

          <div className="flex justify-between mb-4 text-gray-500">
            <span>Coupon</span>
            <span>No</span>
          </div>

          <div className="flex justify-between text-2xl font-bold mb-6">
            <span>Total</span>
            <span>Rs. {total}</span>
          </div>

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition text-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
