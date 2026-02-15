import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const messages = {
  cart: {
    title: "Your cart is empty 🛒",
    subtitle: "Looks like you haven’t added anything to your cart yet.",
  },
  wishlist: {
    title: "Your wishlist is empty 💔",
    subtitle: "Save your favorite items and come back later.",
  },
  orders: {
    title: "No orders yet 📦",
    subtitle: "Once you place an order, it will appear here.",
  },
  default: {
    title: "Nothing here yet",
    subtitle: "Start exploring our products now.",
  },
};

function EmptyState({ type = "default" }) {
  const navigate = useNavigate();
  const { title, subtitle } = messages[type] || messages.default;

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
      <ShoppingBag size={56} className="text-gray-400 mb-4" />

      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        {subtitle}
      </p>

      <button
        onClick={() => navigate("/product")}
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
      >
        Go to Shopping
      </button>
    </div>
  );
}

export default EmptyState;
