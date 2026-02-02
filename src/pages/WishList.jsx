import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishList } from "../apps/Reducers/wishList";
import { useNavigate } from "react-router-dom";
import { Trash2, ShoppingCart } from "lucide-react";

import EmptyState from "../component/ui/EmptyState";

function WishList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.wishList);

  if (items.length === 0) {
  return <EmptyState type="wishlist" />;
}

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-32">
      <h2 className="text-3xl font-bold mb-8">My Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-contain mb-4"
            />

            {/* Info */}
            <h3 className="font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-500 mb-3">
              Rs. {item.finalPrice}
            </p>

            {/* Actions */}
            <div className="mt-auto flex gap-3">
              <button
                onClick={() => navigate(`/product/${item._id}`)}
                className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition"
              >
                View
              </button>

              <button
                onClick={() => dispatch(removeFromWishList(item._id))}
                className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                title="Remove"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishList;
